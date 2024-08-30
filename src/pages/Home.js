import React from 'react'
import  { NavbarTwo } from '../components/Layout/Navbar'
import Banner from '../components/Home/Banner'
import Expertise from '../components/Home/Expertise'
import "../components/Home/Home.css"
import Products from '../components/Home/Products'
import Steps from '../components/Home/Steps'
import Numbers from '../components/Home/Numbers'
import CaseStudies from '../components/Home/CaseStudies'
import "../components/Home/Home.css"
import Shaping from '../components/Home/Shaping'
import Map from '../components/Home/Map'
import Contact from '../components/Home/Contact'
import Footer from '../components/Layout/Footer'
import Brands from '../components/Home/Brands'
import Slider from '../components/Home/Slider'
import Instagram from '../components/Home/Instagram'
import FixedSocial from '../components/Home/FixedSocial'
import ToTop from '../components/Home/ToTop'


const Home = () => {
  return (
    <div className='homeMainBox' >
        <NavbarTwo />
        <div className='pt-[70px]' >
          <FixedSocial />
          <ToTop />
        <Banner />
        <Brands />
        <Expertise />
        <Products />
        <Slider />
        <Steps />
      
        <Numbers />
      
        <CaseStudies />
        <Shaping />
        <Map />
        <Instagram />
        <Contact />
        <Footer  />
       
        </div>
    </div>
  )
}

export default Home