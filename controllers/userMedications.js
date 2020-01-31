let db = require('../models')
let router = require('express').Router()

router.get('/', (req, res) => {
    db.UserMedication.find({ user: req.user._id})
    .then(usermedications => {
        // Promise<T>
        // String -> ()
        // then :: Promise<A> -> (A -> B) -> Promise<B>
        // Promises.all :: [Promise<T>] -> Promise<[T]>
        // console.log :: String -> ()
        // userMedicationPromises :: [Promise<()>]
        // Promises.all(userMedicationPromises) :: Promise<[()]>

        let userMedicationPromises = []
        usermedications.forEach(usermedication => {
            userMedicationPromises.push(db.Medication.findOne({ _id: usermedication.medication })
                .then(medication => {
                    let med = {
                        medication: usermedication.medication,
                        brand: medication.brand,
                        generic: medication.generic,
                        info: medication.info,
                        image: medication.image,
                        condition: usermedication.condition,
                        doses: usermedication.doses
                    } 
                    // { medication, usermedication }
                    return med
                })
            )
        })
        Promise.all(userMedicationPromises)
        .then(results => {
            res.send({ usermedications: results })
        })
        // res.send({ usermedications })
    })
    .catch(err => {
        console.log('Error in GET /usermedications', err)
        res.status(500).send({ message: 'Error fetching user medications' })
    })
})

router.post('/', (req, res) => {
    console.log(req.body)
    let condition = 'Custom Condition'
    db.UserMedication.create({
        user: req.user._id,
        medication: req.body.medication,
        condition: req.body.condition || condition
    })
    .then(result => {
        console.log('success', result)
        res.send({message: 'success'})
    })
    .catch(err => {
        console.log('Error message', err)
        res.status(500).send({ message: 'error'})
    })
})

router.post('/doses', (req, res) => {
    // db.UserMedication.findOne({ usermedication: req.body.usermedication })
    db.UserMedication.findOne({ medication: req.body.medication })
    .then(med => {
        // let doses = med.doses.push(req.body.dose)
        // UserMedication.update({ medication: med.medication }, { doses: doses })
        // res.send('success')
        console.log('med:', med)
        med.doses.push({
            name: req.body.name,
            days: req.body.days || ['M','T','W','Th','F','Sa','S'],
            dosage: req.body.dosage || '1 dose',
            instructions: req.body.instructions || `Take ${req.body.dosage || '1 dose'} in the ${req.body.name}.` // potentially make more dynamic
        })
        console.log('doses:', med.doses)
        // Save
        med.save().then(() => {
            res.send({message: 'success'})
        }) 
    })
    .catch(err => {
        console.log('Error message', err)
        res.status(500).send({ message: 'error' })
    })
})

module.exports = router