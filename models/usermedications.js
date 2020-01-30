let mongoose = require('mongoose')

let daysSchema = new mongoose.Schema({
    M: {
        type: Boolean,
        default: true,
    },
    T: {
        type: Boolean,
        default: true,
    },
    W: {
        type: Boolean,
        default: true,
    },
    Th: {
        type: Boolean,
        default: true,
    },
    F: {
        type: Boolean,
        default: true,
    },
    Sa: {
        type: Boolean,
        default: true,
    },
    S: {
        type: Boolean,
        default: true,
    }
})

let doseSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    days: {
      type: [daysSchema],
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