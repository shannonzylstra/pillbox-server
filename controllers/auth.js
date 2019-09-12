require('dotenv').config()
let jwt = require('jsonwebtoken')
let db = require('../models')
let router = require('express').Router()

// POST /auth/login (find and validate user; send token)
router.post('/login', (req, res) => {
  // Find the user by their email in the database
  db.User.findOne({ email: req.body.email })
  .then(user => {
    // Make sure we have a user and that the user has a password
    if (!user || !user.password) {
      return res.status(404).send({ message: 'User not found' })
    }

    // Yay - we got a user. Let's check their password.
    if (!user.isAuthenticated(req.body.password)) {
      // Invalid credentials: wrong password
      return res.status(406).send({ message: 'Not Acceptable: Invalid Credentials!' })
    }

    let token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
      expiresIn: 60 * 60 * 8 // 8 hours in seconds
    })

    res.send({ token })
  })
  .catch(err => {
    // If something went wrong here, it's likely an issue with DB or DB setup. Or a typo.
    console.log('Error in POST /auth/login', err)
    res.status(503).send({ message: 'Something wrong, prob DB related. Or you made a typo. One of those.' })
  })
})

// POST to /auth/signup (create user; generate token)
router.post('/signup', (req, res) => {
  db.User.findOne({ email: req.body.email })
  .then(user => {
    // If the user exists, do NOT let them create a duplicate account
    if (user) {
      return res.status(409).send({ message: 'Email address in use' })
    }

    // Good - they don't exist yet
    db.User.create(req.body)
    .then(newUser => {
      // We created a user, let's make them a shiny new token!
      let token = jwt.sign(newUser.toJSON(), process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 8 // 8 hours (in seconds)
      })

      res.send({ token })
    })
    .catch(err => {
      console.log('Error when creating new user', err)
      res.status(500).send({ message: 'Error creating user' })
    })
  })
  .catch(err => {
    console.log('Error in POST /auth/signup', err)
    res.status(503).send({ message: 'Something wrong, prob DB related. Or you made a typo. One of those.' })
  })
})

// NOTE: User should be logged in to access this route
router.get('/current/user', (req, res) => {
  console.log(req.user)
  // The user is logged in, so req.user should have data!
  if (!req.user || !req.user._id) {
    return res.status(417).send({ message: 'Expectation Failed: Check configuration' })
  }

  // NOTE: This is the user data from the time the token was issued
  // WARNING: If you update the user info those changes will not be reflected here
  // To avoid this, reissue a token when you update user data
  res.send({ user: req.user })
})

module.exports = router
