const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
require("dotenv").config()
const Port = process.env.PORT
const dbConnect = require("./utils/db")   //database connection form utils
const costumerRoute = require("./routes/costumerRoute")
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.use("/customer" , costumerRoute)

dbConnect()


app.listen(Port , ()=>{
    console.log("Listening at the port of 8000")
})