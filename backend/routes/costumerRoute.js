const express = require("express")
const route  = express.Router()

const customerController = require("../controller/costumerController")

route.post("/registration" ,customerController.costumerRegistration )
route.post("/login" ,customerController.costumerLogin )
route.post("/transaction" , customerController.DepositData)
route.get("/balance" , customerController.balanceDisplay)
module.exports = route