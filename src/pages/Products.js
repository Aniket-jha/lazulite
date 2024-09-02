import React from 'react'
import { NavbarTwo } from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'
import FixedSocial from '../components/Home/FixedSocial'
import ToTop from '../components/Home/ToTop'
import Instagram from '../components/Home/Instagram'
import Contact from '../components/Home/Contact'
import Products from '../components/Home/Products'
const ProductsPage = () => {
  return (
    <div className='homeMainBox'>
        <NavbarTwo />
        <div className='pt-[70px]' >
          <FixedSocial />
          <ToTop />
       
        <Products />
      
        <Instagram />
        <Contact />
        <Footer  />
       
        </div>
    </div>
  )
}

export default ProductsPage