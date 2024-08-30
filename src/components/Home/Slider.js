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
const Slider = () => {
    const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div>
        <div className='px-64 pt-16' >
        <Swiper
        centeredSlides={true}
       
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        slidesPerView={6}
        effect="creative"
        creativeEffect={{
          perspective: true,
          limitProgress: 6,
          prev: {
            translate: ['-90%', '20%', 0],
            rotate: [0, 0, -30],
            origin: "bottom",
          },
          next: {
            translate: ['90%', '20%', 0],
            rotate: [0, 0, 60],
            origin:"bottom",
          },
        }}
        modules={[Pagination,Navigation,EffectCreative]}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.update();
        }}
          >
            <SwiperSlide>
                <div>
                    <img src={ImageOne} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={ImageOne} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={ImageOne} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={ImageOne} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={ImageOne} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={ImageOne} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={ImageOne} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={ImageOne} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={ImageOne} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={ImageOne} />
                </div>
            </SwiperSlide>
        </Swiper>
        </div>
        <div className='px-36' > 
        <video autoPlay={true} playsInline={true} muted={true} loop={true}  >
  <source src={MainVideo} type="video/webm" />
  
    </video>
        </div>
    </div>
  )
}

export default Slider