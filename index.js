const express = require('express')
const {dbConnect} = require('./config/dbConfig')
const studentRouter = require('./routes/studentRoute')
const adminRouter = require('./routes/adminRoute')
const cors = require('cors')
dbConnect
const app = express()

app.use(cors('*'))
app.use(express.json())

app.use('/',studentRouter)
app.use('/admin',adminRouter)

app.listen(process.env.PORT||4000,()=>{
    console.log('Server Running');
})