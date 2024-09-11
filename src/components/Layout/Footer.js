import React from 'react'
import Logo from "../../assets/logo.png"
import { FaFacebook } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import FacebookImage from "../../assets/facebook.png"
import InstagramImage from "../../assets/instagram.png"
import LinkedinImage from "../../assets/linkedin.png"
import YoutubeImage from "../../assets/youtube.png"
import PinterestImage from "../../assets/pinterest.png"
const Footer = () => {
  return (
    <div className='bg-[#151a3b69] py-8 flex items-center justify-center flex-col ' >
        <img className='w-[150px]' src={Logo} />
        <p className='text-center text-[#B8B8B8] font-[PoppinsRegular] my-6  text-[.8rem]' >Warehouse #123, Mohammed Khalifa Warehouses <br /> Al Qusais Industrial 2, Dubai. </p>
        <div className='flex items-center justify-center gap-8 text-[#707070] text-[.7rem] font-[PoppinsRegular] my-1'>
            <p>About</p>
            <p>Contact</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Career</p>
        </div>
        <div className='flex  my-3 items-center justify-center gap-8' >
           <a target='_blank' rel='noreferr' href='https://www.facebook.com/lazulite.official' ><img src={FacebookImage}  className='w-[2rem]' /></a> 
          <a target='_blank' rel='noreferr' href='https://www.instagram.com/lazulite_official/' >  <img src={InstagramImage} className='w-[2rem]' /></a>
          <a  target='_blank' rel='noreferr' href='https://www.linkedin.com/company/lazulite-technology-services-llc/' > <img src={LinkedinImage} className='w-[2rem]' /></a> 
                <a target='_blank' rel='noreferr' href='https://www.youtube.com/@LazuliteOfficial' ><img className='w-[2rem]' src={YoutubeImage} /></a>
              <img className='w-[1.5rem]' src={PinterestImage} />
        </div>
        <p className='text-[#707070] opacity-[.7] text-[13px] font-[PoppinsRegular]' >© 2024, Lazulite Technology Services LLC All rights reserved.</p>
    </div>
  )
}

export default Footer