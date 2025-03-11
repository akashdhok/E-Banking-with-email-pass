import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoEarthOutline } from "react-icons/io5";
const Header = () => {
  return (
   <>
   <div id='header'>
    <div id='logoimg'>
        <img src="./logo.png" alt="" height="40px" /> <span><h1>Banking</h1></span>
    </div>
    <div id='contactheader'>
    <FaPhoneAlt /><span>+01 222 111 444</span>
    <IoMail style={{marginLeft : "20px"}} /><span>mail@example.com</span>
    </div>
    <div id=''>
    <FaFacebookF style={{marginLeft : "20px"}} />
    <FaInstagram style={{marginLeft : "20px"}}/>
    <FaXTwitter style={{marginLeft : "20px"}}/>
    <IoEarthOutline style={{marginLeft : "20px"}}/>
    </div>
   </div>
   </>
  )
}

export default Header