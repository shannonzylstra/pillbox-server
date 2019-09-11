let router = require('express').Router()

router.post('/login', (req, res) => {
  res.send('STUB - POST /auth/login')
})

router.post('/signup', (req, res) => {
  res.send('STUB - POST /auth/signup')
})

// NOTE: User should be logged in to access this route
router.get('/current/user', (req, res) => {
  res.send('STUB - Current User Data')
})

module.exports = router
