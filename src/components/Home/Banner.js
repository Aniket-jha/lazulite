import { PlayCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'
import "./Home.css"
import LineImageOne from "../../assets/Line 3 (1).png"
import TopTextImage from "../../assets/Group 1318 (1).png"
import LineImageTwo from "../../assets/Group 1320.png"
import BannerTitle from "../../assets/mainText.png"
import PlayButton from "../../assets/play.png"
const Banner = () => {
  return (
    <div  className='grid  bannerArea  grid-cols-2 items-center justify-start  grid-flow-col gap-24 px-24 '>
        <div>
           
        </div>
        <div className='mb-[120px]'>
        {/* <img  src={BannerTitle} /> */}
        <h1 className='mainTitle font-[PoppinsMedium] text-white' >
          <span className='relative '  ><img src={LineImageTwo} className='absolute left-[20px] top-2 z-[1]' /> <span className='relative z-[2]'> We Build Next </span></span>
           <br /> <span className="relative" > Generation  <img className="absolute bottom-[10%] right-0" src={LineImageOne} /></span>  <br /> <span className="relative"> <img className="absolute bottom-[10%] left-[7%]" src={TopTextImage} /> <span className="relative z-[2]"> Marketing Expereinces</span></span> </h1>
            <button className='py-1.5 w-[190px] group   bannerButton mt-6 rounded-full text-white pl-4 flex text-[.9rem] items-center font-[PoppinsRegular] justify-center gap-3'  >
              <p>Watch Showreel</p>
               <img src={PlayButton} className='w-[33px] buttonImage transform duration-[500ms] z-30   group-hover:rotate-[120deg]' /> </button>
        </div>
    </div>
  )
}

export default Banner