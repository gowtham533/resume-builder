import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <div style={{height:'300px',backgroundColor:'royalblue'}} className='d-flex align-items-center justify-content-center flex-column'>
        <h1>Contact Us</h1>
        <h5><MdEmail />resumebuilder232@gmail.com</h5>
        <h5><FaPhoneAlt />9544637227</h5>
        <h5>Connect with us</h5>
        <div className='d-flex'>
          <FaWhatsapp className='me-2'/>
          <FaInstagram />
          <FaFacebookF className='ms-2'/>
        </div>
        <p>Designed & built with ❤️ using React</p>
    </div>
  )
}

export default Footer