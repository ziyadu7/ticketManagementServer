const express = require('express')
const {dbConnect} = require('./config/dbConfig')
dbConnect
const app = express()

app.use(express.json())