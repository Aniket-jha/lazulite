import React from 'react'
import StarIcon from "../../assets/starticon.svg"
// import Swiper core and required modules
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
import Case1Image from "../../assets/case1.png"
import { ArrowRightCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
const CaseStudies = () => {
  return (
    <div  className='py-0  '>
                 <h6 className='flex items-center font-[PoppinsRegular] justify-center text-white gap-3  text-[1.5rem]' ><img className='w-[30px]' src={StarIcon} /> Case Studies<img className='w-[30px]' src={StarIcon} /></h6>
                 <h3 className='text-[2.2rem] text-center font-[PoppinsMedium] mt-3 text-white' ><span className='bg-gradient-to-r from-[#0093DA] to-[#00F7F9] inline-block text-transparent bg-clip-text '> Proven Solution</span> For a Modern Challenges</h3>
                 <div className='mt-3' >
                 <Swiper
          spaceBetween={0}
          className=""
          
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
        },
        1800:{
          width:1800,
          slidesPerView:5
        }
      }}
      
         
          loop={true}
          pagination={{
            dynamicBullets: true,
            dynamicMainBullets:3,
            clickable:true
          }}
          
          modules={[Pagination]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
           
       
          <SwiperSlide>
          <div className="mx-6 relitve my-12 lg:my-12">
            <img
              className="xl:w-[700px]  w-[100%] rounded-xl"
              src={Case1Image}
              alt=""

            />
            <div className='flex items-center absolute px-3  bottom-[12%] justify-between' >
            <div className='w-[68%]'> 
              <h3 className='font-[PoppinsMedium] text-white text-[1rem]' > It is a long established fact</h3>
              <p className='text-[#3dbcfb] font[PoppinsRegular]' >Client: Lorem Ipusm</p>
            </div>
            <div className='bg-white  px-2 py-2 rounded-full mr-6'>
            <ArrowRightIcon className='w-[1.2rem] ' />
            </div>
            </div>
          </div>
            </SwiperSlide>
            <SwiperSlide>
          <div className="mx-6 relitve my-12 lg:my-12">
            <img
              className="xl:w-[700px] ] w-[100%] rounded-xl"
              src={Case1Image}
              alt=""
            />
            <div className='flex items-center absolute px-3  bottom-[12%] justify-between' >
            <div className='w-[68%]'> 
              <h3 className='font-[PoppinsMedium] text-white text-[1rem]' > It is a long established fact</h3>
              <p className='text-[#3dbcfb] font[PoppinsRegular]' >Client: Lorem Ipusm</p>
            </div>
            <div className='bg-white  px-2 py-2 rounded-full mr-6'>
            <ArrowRightIcon className='w-[1.2rem] ' />
            </div>
            </div>
          </div>
            </SwiperSlide>
            <SwiperSlide>
          <div className="mx-6 relitve my-12 lg:my-12">
            <img
              className="xl:w-[700px] ] w-[100%] rounded-xl"
              src={Case1Image}
              alt=""
            />
            <div className='flex items-center absolute px-3  bottom-[12%] justify-between' >
            <div className='w-[68%]'> 
              <h3 className='font-[PoppinsMedium] text-white text-[1rem]' > It is a long established fact</h3>
              <p className='text-[#3dbcfb] font[PoppinsRegular]' >Client: Lorem Ipusm</p>
            </div>
            <div className='bg-white  px-2 py-2 rounded-full mr-6'>
            <ArrowRightIcon className='w-[1.2rem] ' />
            </div>
            </div>
          </div>
            </SwiperSlide>
            <SwiperSlide>
          <div className="mx-6 relitve my-12 lg:my-12">
            <img
              className="xl:w-[700px] ] w-[100%] rounded-xl"
              src={Case1Image}
              alt=""
            />
            <div className='flex items-center absolute px-3  bottom-[12%] justify-between' >
            <div className='w-[68%]'> 
              <h3 className='font-[PoppinsMedium] text-white text-[1rem]' > It is a long established fact</h3>
              <p className='text-[#3dbcfb] font[PoppinsRegular]' >Client: Lorem Ipusm</p>
            </div>
            <div className='bg-white  px-2 py-2 rounded-full mr-6'>
            <ArrowRightIcon className='w-[1.2rem] ' />
            </div>
            </div>
          </div>
            </SwiperSlide>
            <SwiperSlide>
          <div className="mx-6 relitve my-12 lg:my-12">
            <img
              className="xl:w-[700px]  w-[100%] rounded-xl"
              src={Case1Image}
              alt=""
            />
            <div className='flex items-center absolute px-2  bottom-[12%] justify-between' >
            <div className='w-[60%]'> 
              <h3 className='font-[PoppinsMedium] text-white text-[1rem]' > It is a long established fact</h3>
              <p className='text-[#3dbcfb] font[PoppinsRegular]' >Client: Lorem Ipusm</p>
            </div>
            <div className='bg-white mr-6  px-2 py-2 rounded-full'>
            <ArrowRightIcon className='w-[1.1rem] ' />
            </div>
            </div>
          </div>
            </SwiperSlide>
            <SwiperSlide>
          <div className="mx-6 relitve my-12 lg:my-12">
            <img
              className="xl:w-[700px]  w-[100%] rounded-xl"
              src={Case1Image}
              alt=""
            />
            <div className='flex items-center absolute px-2  bottom-[12%] justify-between' >
            <div className='w-[60%]'> 
              <h3 className='font-[PoppinsMedium] text-white text-[1rem]' > It is a long established fact</h3>
              <p className='text-[#3dbcfb] font[PoppinsRegular]' >Client: Lorem Ipusm</p>
            </div>
            <div className='bg-white mr-6  px-2 py-2 rounded-full'>
            <ArrowRightIcon className='w-[1.1rem] ' />
            </div>
            </div>
          </div>
            </SwiperSlide>
            <SwiperSlide>
          <div className="mx-6 relitve my-12 lg:my-12">
            <img
              className="xl:w-[700px]  w-[100%] rounded-xl"
              src={Case1Image}
              alt=""
            />
            <div className='flex items-center absolute px-2  bottom-[12%] justify-between' >
            <div className='w-[60%]'> 
              <h3 className='font-[PoppinsMedium] text-white text-[1rem]' > It is a long established fact</h3>
              <p className='text-[#3dbcfb] font[PoppinsRegular]' >Client: Lorem Ipusm</p>
            </div>
            <div className='bg-white mr-6  px-2 py-2 rounded-full'>
            <ArrowRightIcon className='w-[1.1rem] ' />
            </div>
            </div>
          </div>
            </SwiperSlide>
            <SwiperSlide>
          <div className="mx-6 relitve my-12 lg:my-12">
            <img
              className="xl:w-[700px]  w-[100%] rounded-xl"
              src={Case1Image}
              alt=""
            />
            <div className='flex items-center absolute px-2  bottom-[12%] justify-between' >
            <div className='w-[60%]'> 
              <h3 className='font-[PoppinsMedium] text-white text-[1rem]' > It is a long established fact</h3>
              <p className='text-[#3dbcfb] font[PoppinsRegular]' >Client: Lorem Ipusm</p>
            </div>
            <div className='bg-white mr-6  px-2 py-2 rounded-full'>
            <ArrowRightIcon className='w-[1.1rem] ' />
            </div>
            </div>
          </div>
            </SwiperSlide>
        </Swiper>
                 </div>
    </div>
  )
}

export default CaseStudies