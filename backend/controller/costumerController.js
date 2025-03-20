const costumerModel = require("../model/costumerModel")
const autoPassword = require("../middleware/autoPassword")
const nodemailer = require("nodemailer");
const transactionModel =require("../model/transactionModel")
const costumerRegistration = async (req, res) => {
    const{firstname , lastname , email , mobile , address , city} = req.body;
    const myPAss = autoPassword.autoPassword()
    const customerData = await costumerModel.create({
      firstname : firstname,
      lastname : lastname,
      email : email,
      city : city,
      mobile : mobile,
      address : address,
      password : myPAss
  })

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "akashdhok1265@gmail.com",
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
  
    res.send("your password sent into your email account")
}

const costumerLogin  = async(req , res)=>{
 const{email , password} = req.body
 const data = await costumerModel.findOne({email : email})
try {
  if(!data)
  {
    return res.status(400).send("Invalid email")
  }
  if(data.password !=password)
  {
    return res.status(400).send("Invalid password")
  }
  res.status(200).send(data)
} catch (error) {
  res.status(400).send(error)
}

}

const DepositData = async(req ,res)=>{
  const{amount , status , customerid} = req.body;
  const data = await transactionModel.create({
    amount : amount,
    status : status,
    customerid : customerid
  })
res.status(200).send(data)
}
const balanceDisplay = async(req , res)=>{
  const {userid} = req.query
  const data = await transactionModel.find({customerid : userid})
  res.status(200).send(data)
}
module.exports = {
    costumerRegistration,
    costumerLogin,
    DepositData,
    balanceDisplay
}