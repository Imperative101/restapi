require('dotenv').config()

const express = require('express')
const app = axpress()
const mongoose = require('mongoose')
mongoose.connect('process.env.DATABASE_URL', {USEnEWpARSER: true})
const db = mongoose.connection
db.on('error', (error) => console.log('Connencted to database'))
db.once('open', () => console.log('connected to database'))

app.use(express.json())
const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)
'localhost:3000/subscribers/sdfsdf'
app.listen(3000, () => console.log('server started'))