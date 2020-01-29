let db = require('../models')
let router = require('express').Router()

router.get('/', (req, res) => {
    db.UserMedication.find({ user: req.user._id})
    .then(meds => {
        res.send({ meds })
    })
    .catch(err => {
        console.log('Error in GET /usermedications', err)
        res.status(500).send({ message: 'Error fetching user medications' })
    })
})

router.post('/', (req, res) => {
    let condition = 'Custom Condition'
    db.UserMedication.create({
        user: req.user._id,
        medication: req.body.medication,
        condition: condition
    })
    .then(result => {
        console.log('success', result)
        res.send({message: 'success'})
    })
    .catch(err => {
        console.log('Error message', err)
        res.send({ message: 'error'})
    })
})

module.exports = router