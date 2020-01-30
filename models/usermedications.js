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
      type: String
    },
    dosage: {
      type: String,
      required: true
    },
    food: Boolean,
    instructions: String
  }, {
      timestamps: true
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