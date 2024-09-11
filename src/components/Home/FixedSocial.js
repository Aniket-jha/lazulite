import React from 'react'
import WhatshappImage from "../../assets/whatsappSolid.png"
import WhatshappOutlineImage from "../../assets/whatsappoutline.png"
import MailImage from "../../assets/mail.png"
import LocationImage from "../../assets/mapSolid.png"
import LocationOutlineImage from "../../assets/mapoutline.png"
import CallImage from "../../assets/callsolid.png"
import CallOutlineImage from "../../assets/calloutline.png"
import { IoCallOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";
import { MdMail } from "react-icons/md";
import './social.css';
const FixedSocial = () => {
  return (
    <div className='fixed-social-icons' >
        <div className='rounded-full group cursor-pointer text-white  bg-[#00f9f95d] hover:bg-[#0093DA] transform ease-in-out duration-700 w-[40px] px-2 py-2 border-[1px] border-white' >
          <img src={CallOutlineImage} className='group-hover:hidden   block ' /> 
          <img src={CallImage} className='hidden   group-hover:block' />
        </div>
        <div className='rounded-full group cursor-pointer text-white  bg-[#00f9f95d] hover:bg-[#0093DA] transform ease-in-out duration-700 w-[40px] px-2 py-2 border-[1px] border-white' >
          <img src={LocationOutlineImage} className='group-hover:hidden   block ' /> 
          <img src={LocationImage} className='hidden   group-hover:block' />
        </div>
        <div className='rounded-full group cursor-pointer text-white  bg-[#00f9f95d] hover:bg-[#0093DA] transform ease-in-out duration-700 w-[40px] px-2 py-2 border-[1px] border-white' >
          <img src={WhatshappOutlineImage} className='group-hover:hidden   block ' /> 
          <img src={WhatshappImage} className='hidden   group-hover:block' />
        </div>
        <div className='rounded-full group cursor-pointer text-white  bg-[#00f9f95d] hover:bg-[#0093DA] transform ease-in-out duration-700 w-[40px] px-2 py-2 border-[1px] border-white' >
          <img src={MailImage} className='group-hover:hidden   block ' /> 
          <img src={MailImage} className='hidden   group-hover:block' />
        </div>
        
        
    </div>

  )
}

export default FixedSocial