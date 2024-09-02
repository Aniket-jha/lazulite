import { PlayCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'
import "./Home.css"
import BannerTitle from "../../assets/mainText.png"
import PlayButton from "../../assets/play.png"
const Banner = () => {
  return (
    <div  className='grid  bannerArea z-[100] grid-cols-2 items-center justify-start  grid-flow-col gap-24 px-36 py-8'>
        <div>
           
        </div>
        <div className='mb-[80px]'>
        <img src={BannerTitle} />
            <button className='py-1.5 w-[190px] group   bannerButton mt-6 rounded-full text-white pl-4 flex text-[.9rem] items-center font-[PoppinsRegular] justify-center gap-3'  >
              <p>Watch Showreel</p>
               <img src={PlayButton} className='w-[33px] buttonImage transform duration-[500ms] z-30   group-hover:rotate-[120deg]' /> </button>
        </div>
    </div>
  )
}

export default Banner