let bcrypt = require('bcryptjs')
let mongoose = require('mongoose')

let medicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  generic: String,
  link: String,
  image: String
})

// use regex 
medicationSchema.pre('save', function (next) {
    if(!this.link || !this.image) {
        let str = this.name
        str = str.toLowerCase()
        str = str.replace(/\//g, '')
        str = str.replace(/\s+/g, '-')
        if(!this.link) {
            this.link = `http://www.goodrx.com/${str}`
        }
        if(!this.image) {
            this.image = `/img/${str}.webp`
        }
    }

    next()
})

module.exports = mongoose.model('Medication', medicationSchema)
