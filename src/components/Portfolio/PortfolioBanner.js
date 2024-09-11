import React from 'react'
import PortfolioBannerImage from "../../assets/PortfolioBanner.png"
import "./Portfolio.css"
const PortfolioBanner = () => {
  return (
    <div className='portfolioMainBanner grid grid-cols-2 grid-flow-col px-64' >
        <div className='pt-20'>
            <h6 className='text-[26px] text-white font-[PoppinsRegular]'>Recent Projects</h6>
            <h3 className='text-[34px] leading-[45px] font-[PoppinsMedium]   text-white ' ><span className='bg-gradient-to-r from-[#0093DA] to-[#00F7F9] inline-block text-transparent bg-clip-text '> Explore All Our Success</span></h3>
            <p className='text-white mt-2 font-[PoppinsRegular] text-[15px]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>
            <button className='bg-[#ffffff1e] mt-3 rounded-full py-2 px-12 font-[PoppinsMedium] text-white border-[1px] border-[#036ca1a9]'>Book Now</button>
        </div>
    </div>
  )
}

export default PortfolioBanner