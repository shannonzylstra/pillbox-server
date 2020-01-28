let bcrypt = require('bcryptjs')
let mongoose = require('mongoose')

let medicationSchema = new mongoose.Schema({
  brand: {
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

medicationSchema.pre('insertMany', function (next, docs) {
    for (let i = 0; i < docs.length; i++) {
        if(!docs[i].link || !docs[i].image) {
            let str = docs[i].brand
            str = str.toLowerCase()
            str = str.replace(/\//g, '')
            str = str.replace(/\s+/g, '-')
            if(!docs[i].link) {
                docs[i].link = `http://www.goodrx.com/${str}`
            }
            if(!docs[i].image) {
                docs[i].image = `/img/${str}.webp`
            }
        }
    }

    next()
})

module.exports = mongoose.model('Medication', medicationSchema)
