// Require needed packages
let cors = require('cors')
let express = require('express')

// Instantiate app
let app = express()

// Set up middleware
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json({ limit: '10mb' }))

// Routes
app.get('*', (req, res) => {
  res.status(404).send({ message: 'Not Found' })
})

app.listen(process.env.PORT || 3000)
