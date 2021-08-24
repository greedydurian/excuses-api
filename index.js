const express = require("express")
const mongoose = require("mongoose")
const env = require('dotenv').config();
// const bodyParser= require("body-parser")
const PORT = process.env.PORT || 3000
const HOST = '0.0.0.0';

const app = express()

//connect to mongoose
mongoose.connect(process.env.db_url, {useNewUrlParser:true, useUnifiedTopology:true})
// mongoose.connect("mongodb://localhost/tonsofexcuses", {useNewUrlParser:true, useUnifiedTopology:true})

const db = mongoose.connection;
db.once('open', () => console.log('mongodb listening')); 

app.use(express.json())

// //routes
// app.get('/', (req,res) => {
//     res.send("hello world")
// })

const excuseroute = require('./routes/Excuses')//require a route to excuse.js file
app.use('/excuses', excuseroute)//postman after port link

app.listen(PORT, HOST, ()=> console.log('listening'))