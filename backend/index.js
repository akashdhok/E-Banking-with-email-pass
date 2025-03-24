const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()
const Port = process.env.PORT

const costumerRoute = require("./routes/costumerRoute")
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

  mongoose.connect(process.env.DB_CONNECTION).then(()=>{
            console.log("DB Connected")
        })
app.use("/customer" , costumerRoute)

app.listen(Port , ()=>{
    console.log("Listening at the port of 8000")
})