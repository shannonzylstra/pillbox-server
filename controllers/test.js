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
    db.Medication.find({ id: req.body.medication })
    .then(meds => {
        console.log(meds)
        // if (meds && meds.length > 0) {
        if (meds.brand === 'Ambien') {
            console.log('meds:', meds)
            condition = 'Sleep'
        }
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
    .catch(err => {
        console.log('Error message', err)
        res.send({ message: 'error' })
    })
    // db.UserMedication.create({
    //     user: req.user._id,
    //     medication: req.body.medication,
    //     condition: 'hbp'
    // })
    // .then(result => {
    //     console.log('success', result)
    //     res.send({message: 'success'})
    // })
    // .catch(err => {
    //     console.log('Error message', err)
    //     res.send({ message: 'error'})
    // })
})

module.exports = router