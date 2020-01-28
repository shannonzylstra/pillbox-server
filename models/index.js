let mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pillbox', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

let db = mongoose.connection;

db.once('open', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
})

db.on('error', function(err) {
  console.error(`Database error:\n${err}`);
});

module.exports.User = require('./user')
module.exports.Medication = require('./medication')
