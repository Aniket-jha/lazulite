import React from 'react'
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
const CaseStudiesList = () => {
  return (
    <div className='mt-12 mb-20' >
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
  )
}

export default CaseStudiesList