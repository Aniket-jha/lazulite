import React, { useRef } from 'react'

import ImageOne from "../../assets//slide.png"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCreative
} from "swiper/modules";

// Install Swiper modules
// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Case1Image from "../../assets/slide.png"
import MainVideo from "../../assets/Home Projects.webm"
import PortfolioImage from "../../assets/circle.png"
import StarIcon from "../../assets/starticon.svg"
import PlayButton from "../../assets/play.png"
const Slider = () => {
    const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div> 
        <div className='px-[9.45rem] mb-3 relative pt-16' >
        <img src={PortfolioImage} />
        <div className='absolute flex items-center justify-center flex-col left-0 right-0 bottom-[2%]'>
        <h6 className='flex items-center font-[SegoeRegular] justify-center text-white gap-1  text-[1.3rem]' ><img className='w-[30px]' src={StarIcon} /> Portfolio<img className='w-[30px]' src={StarIcon} /></h6>
        <h3 className='text-[2.2rem] text-center font-[PoppinsMedium] mt-2 text-white' >Our Recent <span className='bg-gradient-to-r from-[#0093DA] to-[#00F7F9] inline-block text-transparent bg-clip-text '>Projects </span> </h3>
        <p className='text-white  font-[PoppinsRegular] text-[13px]  text-center'>Explore our recent projects where we blend technology and <br /> creativity to craft immersive, memorable experiences. <br />
See how we turn concepts into reality with our dedication to <br /> excellence and innovation.</p>
<button className='py-0.5 w-[170px] bannerButton2 mt-6 text-[#00b4e2] rounded-full  pl-2 flex text-[.8rem] items-center font-[PoppinsRegular] justify-center gap-3'  >Explore all Projects <img src={PlayButton} className='w-[25px]' /> </button>
        </div>
        </div>
        <div className='px-[8.5rem]' > 
        <video autoPlay={true} playsInline={true} muted={true} loop={true}  >
  <source src={MainVideo} type="video/webm" />
  
    </video>
        </div>
    </div>
  )
}

export default Slider