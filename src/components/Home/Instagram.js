import React from 'react'
import StarIcon from "../../assets/starticon.svg"
import { FaInstagram } from 'react-icons/fa'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import InstagramImageOne from "../../assets/insta1.png"
import InstagramImageTwo from "../../assets/insta2.png"
import InstagramImageThree from "../../assets/insta3.png"
import InstagramImageFour from "../../assets/insta4.png"
import UShapeLogo from "../../assets/ushape.png"
import "./Home.css"
const Instagram = () => {
  return (
    <div className='relative' >
      <img className='absolute uShapeImage z-[1]  top-[-3%]' src={UShapeLogo} />
        <div className='instagramMargin z-[2] rounded-l-lg  grid grid-cols-7 gap-3 bg-[#0c1448]' >
            <div className='col-span-2' >
                 <h6 className='flex items-center font-[PoppinsSemiBold] justify-start text-white gap-2  text-[1.8rem]' ><img className='w-[30px]' src={StarIcon} /> Our Recent </h6>
                 <h6 className='flex items-center ml-10 font-[PoppinsSemiBold] justify-start text-white gap-2  text-[1.8rem]' > Instagram Posts <img className='w-[30px]' src={StarIcon} /></h6>
                 <p className='text-white ml-10 mr-16 mt-2  font-[PoppinsRegular] text-[.9rem]' >Explore our recent Instagram posts to stay up-to-date with our latest projects, events, and brand activations.</p>
                 <button className='followButton rounded-lg  ml-10 text-white  px-4 py-2 flex items-center justify-start mt-3 gap-3'><FaInstagram className='text-[2rem] text-white opacity-50' /> Follow on Instagram </button>
            </div>
            <div className='col-span-5' >
            <Swiper
          spaceBetween={0}
          className=""
          draggable={true}
          grabCursor={true}
          breakpoints={{
        576: {
          width: 576,
          slidesPerView: 2,
        },
        780: {
          width: 780,
          slidesPerView: 3,
        },
       
         1440:{
          width:1440,
          slidesPerView:5
        }
      }}
         
          loop={true}
          pagination={true}
          autoplay={true}
          modules={[Pagination,Autoplay]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
            <img className='pr-4' src={InstagramImageOne} />
            </SwiperSlide>
            <SwiperSlide>
            <img className='pr-4' src={InstagramImageTwo} />
            </SwiperSlide>
            <SwiperSlide>
            <img className='pr-4'  src={InstagramImageThree} />
            </SwiperSlide>
            <SwiperSlide>
            <img className='pr-4' src={InstagramImageFour} />
            </SwiperSlide>
            <SwiperSlide>
            <img className='pr-4' src={InstagramImageFour} />
            </SwiperSlide>
             </Swiper>  
            </div> 
        </div>
    </div>
  )
}

export default Instagram