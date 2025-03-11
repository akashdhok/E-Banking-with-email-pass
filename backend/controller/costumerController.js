const costumerModel = require("../model/costumerModel")
const autoPassword = require("../middleware/autoPassword")
const nodemailer = require("nodemailer");

const costumerRegistration = async (req, res) => {
    const{firstname , lastname , email , mobile , address , city} = req.body;
    console.log(req.body)
    const myPAss = autoPassword.autoPassword()

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "akashdhok1265@gmail.com", //user password 
          pass: "bgek arhk vfag qypw", 
        },
      });
      let maildetails = {
        from : "akashdhok1265@gmail.com",
        to : email,
        subject : "E-Banking registration",
        text : `Dear ${firstname} ${lastname} Your account successfully created \n Your Password is ${myPAss}`
      }
      transporter.sendMail(maildetails )
      console.log("mail send successfully")
    // const data = await costumerModel.create({
    //     firstname : firstname,
    //     lastname : lastname,
    //     email : email,
    //     city : city,
    //     mobile : mobile,
    //     address : address
    // })
    res.send("okk")
}

module.exports = {
    costumerRegistration
}