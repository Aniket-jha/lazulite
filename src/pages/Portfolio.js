import React, { useState } from 'react'
import { NavbarTwo } from '../components/Layout/Navbar'
import FixedSocial from '../components/Home/FixedSocial'
import ToTop from '../components/Home/ToTop'
import Footer from '../components/Layout/Footer'
import Contact from "../components/Home/Contact"
import PortfolioBanner from '../components/Portfolio/PortfolioBanner'
import PortfolioTab from '../components/Portfolio/PortfolioTab'
const Portfolio = () => {
    const [activeTab, setActiveTab] = useState("all")
  return (
    <div className='homeMainBox'>
    <NavbarTwo />
    <div className='pt-[70px]' >
      <FixedSocial />
      <ToTop />
        <PortfolioBanner />
        <PortfolioTab activeTab={activeTab} setActiveTab={setActiveTab} />
    <Contact />
    
   <Footer />
    </div>
</div>
  )
}

export default Portfolio