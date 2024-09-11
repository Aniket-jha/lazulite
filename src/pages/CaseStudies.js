import React from 'react'
import { NavbarTwo } from '../components/Layout/Navbar'
import FixedSocial from '../components/Home/FixedSocial'
import ToTop from '../components/Home/ToTop'
import Footer from '../components/Layout/Footer'
import CaseStudiesBanner from '../components/CaseStudies/CaseStudiesBanner'
import CaseStudiesList from '../components/CaseStudies/CaseStudiesList'
import Instagram from '../components/Home/Instagram'
import Contact from '../components/Home/Contact'

const CaseStudies = () => {
  return (
    <div className='homeMainBox'>
    <NavbarTwo />
    <div className='pt-[70px]' >
      <FixedSocial />
      <ToTop />
    <CaseStudiesBanner />
    <CaseStudiesList />
    <Instagram />
    <Contact />
   <Footer />
    </div>
</div>
  )
}

export default CaseStudies