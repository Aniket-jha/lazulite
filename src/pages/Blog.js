import React from 'react'
import BlogsBanner from '../components/Blogs/BlogsBanner'
import Footer from '../components/Layout/Footer'
import ContactForm from '../components/Contact/ContactForm'
import ToTop from '../components/Home/ToTop'
import FixedSocial from '../components/Home/FixedSocial'
import { NavbarTwo } from '../components/Layout/Navbar'
import Contact from "../components/Home/Contact"
import BlogList from '../components/Blogs/BlogList'
import RecentPost from '../components/Blogs/RecentPost'
const Blog = () => {
  return (
    <div className='homeMainBox'>
    <NavbarTwo />
    <div className='pt-[70px]' >
      <FixedSocial />
      <ToTop />
    <BlogsBanner />
    <BlogList />
    <RecentPost />
    <Contact />
    
   <Footer />
    </div>
</div>
  )
}

export default Blog