import React from 'react'
import StarIcon from "../../assets/starticon.svg"
import ExpertiseIcon from "../../assets/expertiseicon.svg"
import ExpertiseTextImage from "../../assets/expertiseText.png"
const Expertise = () => {
  return (
    <div className='pb-12 pt-6 px-64 flex flex-col items-center justify-center' >
        <h6 className='flex items-center font-[PoppinsMedium] justify-center text-white gap-2  text-[1.1rem]' ><img className='w-[30px]' src={StarIcon} /> Our Expertise<img className='w-[30px]' src={StarIcon} /></h6>
        <h3 className='text-[1.8rem] font-[PoppinsMedium] mt-3 text-white' >Your Go-To for Brand Activation & <span className='bg-gradient-to-r from-[#0093DA] to-[#00F7F9] inline-block text-transparent bg-clip-text '> Event Technology Solutions</span></h3>
        <div className='bg-[#ffffff1f] border-t-[1px] border-[#f2f2f22f] mt-8  flex items-center justify-center rounded-sm py-2 px-2' >
            <div className='expertiseBg relative border-t-[1px] border-[#f2f2f22f] text-center items-center justify-center  grid grid-cols-11 grid-flow-col gap-2 rounded-sm py-6 px-8' >
              <div className='exprtiseTextBg cursor-pointer group'>
                <img className='absolute transform duration-300 ease-in-out hidden group-hover:block bottom-[-35%] z-[-1] left-[-1%] w-[160px]' src={ExpertiseTextImage} />
                <p className='text-white  text-[.9rem] text-center font-[PoppinsMedium]' >Events & Exhibitions</p>
                </div>
                <img src={ExpertiseIcon} />
                <div className='exprtiseTextBg cursor-pointer group'>
                <img className='absolute hidden transform duration-300 ease-in-out group-hover:block bottom-[-35%] z-[-1] left-[16%] w-[160px]' src={ExpertiseTextImage} />
                <p className='text-white text-[.9rem] text-center font-[PoppinsMedium]' >Brand Activation</p>
                </div>
                <img src={ExpertiseIcon} />
                <div className='exprtiseTextBg cursor-pointer group'>
                <img className='absolute hidden transform duration-300 ease-in-out group-hover:block bottom-[-35%] z-[-1] left-[32.9%] w-[160px]' src={ExpertiseTextImage} />
                <p className='text-white text-[.9rem] text-center font-[PoppinsMedium]' >Mall Activation</p>
                </div>
                <img src={ExpertiseIcon} />
                <div className='exprtiseTextBg cursor-pointer group'>
                <img className='absolute hidden transform duration-300 ease-in-out group-hover:block bottom-[-35%] z-[-1] left-[50%] w-[160px]' src={ExpertiseTextImage} />
                <p className='text-white text-[.9rem] text-center font-[PoppinsMedium]' >Sales Center</p>
                </div>
                <img src={ExpertiseIcon} />
                <div className='exprtiseTextBg cursor-pointer group'>
                <img className='absolute hidden transform duration-300 ease-in-out group-hover:block bottom-[-35%] z-[-1] left-[67.6%] w-[160px]' src={ExpertiseTextImage} />
                <p className='text-white text-[.9rem] text-center font-[PoppinsMedium]' >Experience Center</p>
                </div>
                <img src={ExpertiseIcon} />
                <div className='exprtiseTextBg cursor-pointer group'>
                <img className='absolute hidden transform duration-300 ease-in-out group-hover:block bottom-[-35%] z-[-1] left-[84.8%] w-[160px]' src={ExpertiseTextImage} />
                <p className='text-white text-[.9rem] text-center font-[PoppinsMedium]' >Experiential Marketing</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Expertise