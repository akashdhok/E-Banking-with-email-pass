const express = require("express")
const route  = express.Router()

const customerController = require("../controller/costumerController")

route.post("/registration" ,customerController.costumerRegistration )
route.post("/login" ,customerController.costumerLogin )


module.exports = route