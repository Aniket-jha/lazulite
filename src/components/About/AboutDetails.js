import React from 'react'
import "./About.css"
import StarIcon from "../../assets/starticon.svg"
const AboutDetails = () => {
  return (
    <div className='aboutDetailsMain py-8 px-64' >
        <h6 className='flex items-center font-[PoppinsRegular] justify-center text-white gap-3  text-[2rem]' ><img className='w-[30px]' src={StarIcon} /> Lazulite for ExceptionalEvents and Brand Activities<img className='w-[30px]' src={StarIcon} /></h6>
        <p className='text-white font-[PoppinsRegular] text-center mt-4 text-[.9rem]' >Your ultimate experience creator for events, exhibitions, brand activations, and experiential marketing. Our technology services are designed to elevate your events and leave a lasting impression on your audience by using the best of interactive technologies and experiential marketing strategies. We specialize in creating unique and immersive experiences with the latest technology solutions, including augmented reality (AR), virtual reality (VR), hologram displays, interactive touch screens, cutting-edge robotics for events, and a host of custom event solutions.</p>
    </div>
  )
}

export default AboutDetails