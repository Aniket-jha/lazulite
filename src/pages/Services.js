import React from 'react'
import { NavbarTwo } from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'
import FixedSocial from '../components/Home/FixedSocial'
import ToTop from '../components/Home/ToTop'
import Instagram from '../components/Home/Instagram'
import Contact from '../components/Home/Contact'
import Products from '../components/Home/Products'
import MainServiceVideo from "../assets/Services.webm"
import Expertise from '../components/Home/Expertise'
const Services = () => {
  return (
    <div className='homeMainBox'>
        <NavbarTwo />
        <div className='pt-[70px]' >
            <div>
            <video  autoPlay muted width="100%" height="100%" loop playsInline >
  <source src={MainServiceVideo} type="video/webm" />
  
            </video>
            </div>
          <FixedSocial />
          <ToTop />
       
       <Expertise />
      
        <Instagram />
        <Contact />
        <Footer  />
       
        </div>
    </div>
  )
}

export default Services