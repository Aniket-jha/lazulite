import React from 'react'
import StarIcon from "../../assets/starticon.svg"
import MapImage from "../../assets/Map.png"
const Map = () => {
  return (
    <div className='mb-12 mapArea relative ' >
      <img src={MapImage} />
      <h6 className='flex absolute top-[5%] left-0 right-0  items-center font-[PoppinsMedium] justify-center text-white gap-2  text-[2.5rem]' ><img className='w-[45px]' src={StarIcon} /> Our <span className="bg-gradient-to-r from-[#0093DA] to-[#00F7F9] inline-block text-transparent bg-clip-text "> Worldwide </span> Presence <img className='w-[35px]' src={StarIcon} /></h6>
    </div>
  )
}

export default Map