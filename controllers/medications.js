let db = require('../models')
let router = require('express').Router()

router.get('/', (req, res) => {
  db.Medication.find()
  .then(medications => {
     res.send({ medications })
  })
  .catch(err => {
     console.log('Error in GET /medications', err)
     res.status(500).send({ message: 'Error fetching medications list' })
  })
})

module.exports = router
