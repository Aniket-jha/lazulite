import React from 'react'
import { NavbarTwo } from '../components/Layout/Navbar'
import ContactBanner from '../components/Contact/ContactBanner'
import FixedSocial from '../components/Home/FixedSocial'
import ToTop from '../components/Home/ToTop'
import "../components/Home/Home.css"
import Footer from '../components/Layout/Footer'
import Instagram from '../components/Home/Instagram'
import ContactForm from '../components/Contact/ContactForm'
const Contact = () => {
  return (
    <div className='homeMainBox'>
        <NavbarTwo />
        <div className='pt-[70px]' >
          <FixedSocial />
          <ToTop />
        <ContactBanner />
        <ContactForm />
        <Instagram />
       <Footer />
        </div>
    </div>
  )
}

export default Contact