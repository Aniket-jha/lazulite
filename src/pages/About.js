import React from 'react'
import { NavbarTwo } from '../components/Layout/Navbar'
import FixedSocial from '../components/Home/FixedSocial'
import ToTop from '../components/Home/ToTop'
import Footer from '../components/Layout/Footer'
import AboutBanner from '../components/About/AboutBanner'
import AboutDetails from '../components/About/AboutDetails'
import AboutNumber from '../components/About/AboutNumber'
import EngageContent from '../components/About/EngageContent'
import ImageList from '../components/About/ImageList'
import HireBox from '../components/About/HireBox'
import Instagram from '../components/Home/Instagram'
import Contact from '../components/Home/Contact'

const About = () => {
  return (
    <div className='homeMainBox'>
    <NavbarTwo />
    <div className='pt-[70px]' >
      <FixedSocial />
      <ToTop />
    <AboutBanner />
    <AboutDetails />
    <AboutNumber />
    <EngageContent />
    <ImageList />
    <HireBox />
    <Instagram />
    <Contact />
   <Footer />
    </div>
</div>
  )
}

export default About