import React from 'react'
import StarIcon from "../../assets/starticon.svg"
import "./CaseStudies.css"
const CaseStudiesBanner = () => {
  return (
    <div className='caseStudiesBanner'>
         <div className='pt-24'>
         <h6 className='flex items-center font-[PoppinsRegular] justify-center text-white gap-3  text-[1.5rem]' ><img className='w-[30px]' src={StarIcon} /> Case Studies<img className='w-[30px]' src={StarIcon} /></h6>
         <h3 className='text-[2.2rem] text-center font-[PoppinsMedium] mt-3 text-white' ><span className='bg-gradient-to-r from-[#0093DA] to-[#00F7F9] inline-block text-transparent bg-clip-text '> Proven Solution</span> For a Modern Challenges</h3>
        </div>
    </div>
  )
}

export default CaseStudiesBanner