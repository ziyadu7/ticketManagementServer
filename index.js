const express = require('express')
const {dbConnect} = require('./config/dbConfig')
const cors = require('cors')
dbConnect
const app = express()

app.use(cors('*'))
app.use(express.json())

app.listen(process.env.PORT||4000,()=>{
    console.log('Server Running');
})