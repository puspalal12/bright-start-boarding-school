import React from 'react'
import './Footer.css'
import { AiFillCopyrightCircle } from "react-icons/ai";
import { AiFillCode } from "react-icons/ai";
import { SiLintcode } from "react-icons/si";

const Footer = () => {
  return (
    <div  className='footer'>
        <div className="text">
        <p><AiFillCopyrightCircle />2024 Bright Star. All rights reserved.</p>
        <ul>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
        </ul>
        </div>
        <div className="developer"><SiLintcode />Website Developed By <AiFillCode />Puspalal</div>
        
    </div>
  )
}

export default Footer