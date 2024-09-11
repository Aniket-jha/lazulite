import React from 'react'
import FacebookImage from "../../assets/facebook.png"
import InstagramImage from "../../assets/instagram.png"
import LinkedinImage from "../../assets/linkedin.png"
import YoutubeImage from "../../assets/youtube.png"
import PinterestImage from "../../assets/pinterest.png"
const HireBox = () => {
  return (
    <div className=' mx-64 my-12 rounded-[20px]' >
        <div className='bg-gradient-to-t pt-8 pb-20 px-20 rounded-[20px] text-white text-center from-[#001f8e87] to-[#00309fa1]' >
            <h3 className='font-[PoppinsMedium] text-[1.5rem]'>Hire Lazulite for immersive event experiences</h3>
            <p className='font-[PoppinsRegular] text-[.9rem]' >  So, if you're looking to create a unique and immersive experience for your next event, look no further than Lazulite. Let's create some magic together and leave your audience in awe!</p>
        </div>
        <div className='flex  items-center justify-center mt-[-30px] '>
            <div className='rounded-full px-6 bg-[#000CA4] flex items-center justify-center gap-4 ' >
                <p className='font-[PoppinsMedium] text-white'>Follow us on</p>
                <div className='flex  my-3 items-center justify-center gap-4' >
           <a target='_blank' rel='noreferr' href='https://www.facebook.com/lazulite.official' ><img src={FacebookImage}  className='w-[2rem]' /></a> 
          <a target='_blank' rel='noreferr' href='https://www.instagram.com/lazulite_official/' >  <img src={InstagramImage} className='w-[2rem]' /></a>
          <a  target='_blank' rel='noreferr' href='https://www.linkedin.com/company/lazulite-technology-services-llc/' > <img src={LinkedinImage} className='w-[2rem]' /></a> 
                <a target='_blank' rel='noreferr' href='https://www.youtube.com/@LazuliteOfficial' ><img className='w-[2rem]' src={YoutubeImage} /></a>
              <img className='w-[1.5rem]' src={PinterestImage} />
        </div>
            </div>
        </div>
    </div>
  )
}

export default HireBox