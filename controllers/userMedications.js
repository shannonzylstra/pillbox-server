let db = require('../models')
let router = require('express').Router()

router.get('/', (req, res) => {
    // STUB:
    // res.send('stub of /usermedications')

    // EXAMPLE:
    // db.Medication.find()
    // .then(medications => {
    //    res.send({ medications })
    // })
    // .catch(err => {
    //    console.log('Error in GET /medications', err)
    //    res.status(500).send({ message: 'Error fetching medications list' })
    // })

    // TODO: fetch all medications this user has
    db.User.findById(req.user._id)
    .then(user => {
        let userMeds = user.userMedications
        res.send({ userMedications: userMeds })
    })
    .catch(err => {
        console.log('Error in GET /usermedications', err)
        res.status(500).send({ message: 'Error fetching user medications' })
    })
})

module.exports = router