let mongoose = require('mongoose')

let doseSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    days: {
      type: [String],
      required: true
    },
    time: {
      type: String,
      required: true
    },
    dosage: {
      type: String,
      required: true
    },
    instructions: String
  })
  
  let userMedicationSchema = new mongoose.Schema({
    medication: {
        type: mongoose.Schema.ObjectId,
        ref: 'Medication'
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    condition: {
      type: String,
      required: true
    },
    doses: [doseSchema]
  })

module.exports = mongoose.model('UserMedication', userMedicationSchema)