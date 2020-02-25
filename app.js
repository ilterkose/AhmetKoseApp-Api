const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv').config()

const app = express()

const port = process.env.PORT || 4000

app.use(bodyParser.json())

const uri = process.env.ATLAS_URI

mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology:true , useFindAndModify: false })
const connection = mongoose.connection
connection.once('open', () =>{
    console.log('Connected to mongoDB databse')
})

app.listen(port, () =>{
    return `Server listenin on this port ${port}`
})

const commentRoute = require('./routers/comments')
app.use('/comments',commentRoute)

app.route('/').get((req,res)=>{
    res.send('Hello ilter')
}) 