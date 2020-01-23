let mongoose = require('mongoose')

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
    maxlength: 32
  },
  profileUrl: String
})

// Use bcrypt to hash password

// Ensure that password doesn't get sent with the rest of the data

// Create a helper function to compare the password hashes

module.exports = mongoose.model('User', userSchema)
