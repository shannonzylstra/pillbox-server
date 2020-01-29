let bcrypt = require('bcryptjs');
let mongoose = require('mongoose');

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
});

let userMedicationSchema = new mongoose.Schema({
  _medication: {
    type: mongoose.Schema.ObjectId,
    ref: 'Medication'
  },
  condition: {
    type: String,
    required: true
  },
  doses: [doseSchema]
});

let userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minlength: 1
  },
  lastname: String,
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 100
  },
  profileUrl: String,
  userMedications: [userMedicationSchema]
})

// Use bcrypt to hash password
userSchema.pre('insertMany', function (next) {
  if(!this.isModified()){
    // New, as opposed to modified
    this.password = bcrypt.hashSync(this.password, 12)
  }

  next()
})

// Ensure that password doesn't get sent with the rest of the data
userSchema.set('toJSON', {
  transform: (doc, user) => {
    delete user.password
    delete user.__v
    return user
  }
})

// Create a helper function to compare the password hashes
userSchema.methods.isValidPassword = function (typedPassword) {
  return bcrypt.compareSync(typedPassword, this.password)
}

module.exports = mongoose.model('User', userSchema)
