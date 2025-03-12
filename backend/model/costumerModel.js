const mongoose = require("mongoose")


const costumerSchema = new mongoose.Schema({
    firstname : {
        type : String,
        require : true
    },
    lastname : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    mobile : {
        type : String,
        require : true
    },
    address : {
        type : String,
        require : true
    },
    city : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    createAt :{
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model("costumer" , costumerSchema)