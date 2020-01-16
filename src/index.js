const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://tiago:mongodb2020@cluster0-0bisb.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// get, post, put, delete

// query params
// route params 
// body

app.use(express.json())
app.use(routes)

app.listen(3333)
