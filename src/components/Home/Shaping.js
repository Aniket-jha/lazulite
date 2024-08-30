import React from 'react'
import ShappingImage from "../../assets/shape.png"
const Shaping = () => {
  return (
    <div className='relative ' >
        <img className='' src={ShappingImage} />
        <h3 className='text-[4rem] absolute text-center right-0 left-0 bg-gradient-to-t inline-block text-transparent bg-clip-text from-[#0093DA]  via-[#00caeb] to-[#00F7F9] bottom-[30%] uppercase font-[PoppinsSemibold]'>Shaping the future with innovation</h3>
    </div>
  )
}

export default Shaping