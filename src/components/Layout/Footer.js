import React from 'react'
import Logo from "../../assets/logo.png"
import { FaFacebook } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
const Footer = () => {
  return (
    <div className='bg-[#151a3b69] py-8 flex items-center justify-center flex-col ' >
        <img src={Logo} />
        <p className='text-center text-[#B8B8B8] font-[PoppinsRegular] my-6  text-[.8rem]' >Warehouse #123, Mohammed Khalifa Warehouses <br /> Al Qusais Industrial 2, Dubai. </p>
        <div className='flex items-center justify-center gap-8 text-[#707070] text-[.7rem] font-[PoppinsRegular] my-2'>
            <p>About</p>
            <p>Contact</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Career</p>
        </div>
        <div className='flex  my-3 items-center justify-center gap-4' >
            <FaFacebook  className='text-white text-[1.5rem]' />
            <RiInstagramLine className='text-white text-[1.5rem]' />
            <FaYoutube className='text-white text-[1.5rem]' />
                <IoLogoLinkedin className='text-white text-[1.5rem]' />
        </div>
        <p className='text-[#707070] opacity-[.7] text-[16px] font-[PoppinsRegular]' >© 2024, Lazulite Technology Services LLC All rights reserved.</p>
    </div>
  )
}

export default Footer