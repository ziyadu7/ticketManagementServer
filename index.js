const express = require('express')
const sequelize = require('./config/dbConfig')
const studentRouter = require('./routes/studentRoute')
const adminRouter = require('./routes/adminRoute')
const cors = require('cors')
require('dotenv').config()

sequelize.sync()
    .then(() => {
        console.log('All models synced successfully');
    })
    .catch(err => {
        console.error('Error syncing models:', err);
    });
const app = express()

app.use(cors({
    origin:process.env.FRONTENDURL ,
    credentials: true,
  }))
app.use(express.json())

app.use('/', studentRouter)
app.use('/admin', adminRouter)

app.listen(process.env.PORT || 4000, () => {
    console.log('Server Running');
})