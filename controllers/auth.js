require('dotenv').config()
let jwt = require('jsonwebtoken')
let db = require('../models')
let router = require('express').Router()

router.post('/login', (req, res) => {
  res.send('STUB - POST /auth/login')
})

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
  res.send('STUB - Current User Data')
})

module.exports = router
