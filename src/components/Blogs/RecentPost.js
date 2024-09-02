import React from 'react'
import StarIcon from "../../assets/starticon.svg"
import InstagramImageOne from "../../assets/insta1.png"
import InstagramImageTwo from "../../assets/insta2.png"
import InstagramImageThree from "../../assets/insta3.png"
import InstagramImageFour from "../../assets/insta4.png"
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
const RecentPost = () => {
  return (
    <div className=' '>
        <h6 className='flex items-center font-[PoppinsBold] justify-center text-white gap-3  text-[2rem]' ><img className='w-[30px]' src={StarIcon} /> Our Recent Posts<img className='w-[30px]' src={StarIcon} /></h6>
        <h3 className='text-[1rem] text-center font-[SegoeRegular] mt-3 text-white' >Explore our recent Instagram posts to stay up-to-date with our <br /> latest projects, events, and brand activations.</h3>
        <div className='mt-12'>
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
          slidesPerView:6
        }
      }}
      
         
          loop={true}
         
          
          modules={[Pagination]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
           
       
          <SwiperSlide>
            <img className='px-3' src={InstagramImageOne} />
            </SwiperSlide>
            <SwiperSlide>
            <img className='px-3'  src={InstagramImageTwo} />
            </SwiperSlide>
            <SwiperSlide>
            <img className='px-3' src={InstagramImageThree} />
            </SwiperSlide>
            <SwiperSlide>
            <img className='px-3' src={InstagramImageFour} />
            </SwiperSlide>
            <SwiperSlide>
            <img className='px-3' src={InstagramImageOne} />
            </SwiperSlide>
            <SwiperSlide>
            <img className='px-3' src={InstagramImageOne} />
            </SwiperSlide>
            <SwiperSlide>
            <img className='px-3'  src={InstagramImageTwo} />
            </SwiperSlide>
            <SwiperSlide>
            <img className='px-3' src={InstagramImageThree} />
            </SwiperSlide>
            <SwiperSlide>
            <img className='px-3' src={InstagramImageFour} />
            </SwiperSlide>
            <SwiperSlide>
            <img className='px-3' src={InstagramImageOne} />
            </SwiperSlide>
            <SwiperSlide>
            <img className='px-3' src={InstagramImageOne} />
            </SwiperSlide>
            <SwiperSlide>
            <img className='px-3'  src={InstagramImageTwo} />
            </SwiperSlide>
            <SwiperSlide>
            <img className='px-3' src={InstagramImageThree} />
            </SwiperSlide>
            <SwiperSlide>
            <img className='px-3' src={InstagramImageFour} />
            </SwiperSlide>
            <SwiperSlide>
            <img className='px-3' src={InstagramImageOne} />
            </SwiperSlide>
        </Swiper>
        </div>
    </div>
  )
}

export default RecentPost