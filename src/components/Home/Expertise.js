import React from 'react'
import StarIcon from "../../assets/starticon.svg"
import ExpertiseIcon from "../../assets/expertiseicon.svg"
import ExpertiseTextImage from "../../assets/expertiseText.png"
import Glowarea from "../../assets/Group 1318 copy.png"
const Expertise = () => {
  return (
    <div className='pb-12 pt-6 paddingBox flex flex-col items-center justify-center' >
        <h6 className='flex items-center font-[PoppinsMedium] justify-center text-white gap-2 leading-[32px]  text-[24px]' ><img className='w-[30px]' src={StarIcon} /> Our Expertise<img className='w-[30px]' src={StarIcon} /></h6>
        <h3 className='2xl:text-[32px] leading-[69px] font-[PoppinsMedium]   text-white text-center' >Your Go-To for Brand Activation & <span className='bg-gradient-to-r from-[#0093DA] to-[#00F7F9] inline-block text-transparent bg-clip-text '> Event Technology Solutions</span></h3>
        <div className='bg-[#ffffff1f] w-full border-t-[1px] border-[#f2f2f22f] mt-8  flex items-center justify-center rounded-sm py-2 px-2' >
            <div className='expertiseBg w-full border-t-[1px] border-[#f2f2f22f] text-center items-center justify-start flex  rounded-sm ' >
              <div className='exprtiseTextBg  py-6  relative tp cursor-pointer group'>
              <img className='absolute transform duration-300 ease-in-out hidden w-[200%] blur-md object-cover group-hover:block  z-[-1]' src={Glowarea} />
                <img className='absolute  transform duration-300 ease-in-out hidden glowPosition group-hover:block  z-[-2]' src={ExpertiseTextImage} />
                <p className='text-white   text-center font-[PoppinsMedium]' >Events &  <br /> Exhibitions</p>
                </div>
                <img className='expertiseIcon'  src={ExpertiseIcon} />
                <div className='exprtiseTextBg  py-6  relative  cursor-pointer group'>
                <img className='absolute transform duration-300 ease-in-out hidden w-[200%] blur-md object-cover group-hover:block  z-[-1]' src={Glowarea} />
                <img className='absolute hidden transform duration-300 ease-in-out group-hover:block glowPosition  z-[-1]' src={ExpertiseTextImage} />
                <p className='text-white   text-center font-[PoppinsMedium]' >Brand <br /> Activation</p>
                </div>
                <img className='expertiseIcon' src={ExpertiseIcon} />
                <div className='exprtiseTextBg  py-6  relative   cursor-pointer group'>
                <img className='absolute transform duration-300 ease-in-out hidden w-[200%] blur-md object-cover group-hover:block  z-[-1]' src={Glowarea} />
                <img className='absolute hidden transform duration-300 ease-in-out group-hover:block glowPosition z-[-1]' src={ExpertiseTextImage} />
                <p className='text-white   text-center font-[PoppinsMedium]' >Mall  <br /> Activation</p>
                </div>
                <img className='expertiseIcon' src={ExpertiseIcon} />
                <div className='exprtiseTextBg  py-6  relative  cursor-pointer group'>
                <img className='absolute transform duration-300 ease-in-out hidden w-[200%] blur-md object-cover group-hover:block  z-[-1]' src={Glowarea} />
                <img className='absolute hidden transform duration-300 ease-in-out group-hover:block glowPosition z-[-1]' src={ExpertiseTextImage} />
                <p className='text-white    text-center font-[PoppinsMedium]' >Sales  <br /> Center</p>
                </div>
                <img className='expertiseIcon' src={ExpertiseIcon} />
                <div className='exprtiseTextBg  py-6   relative  cursor-pointer group'>
                <img className='absolute transform duration-300 ease-in-out hidden w-[200%] blur-md object-cover group-hover:block  z-[-1]' src={Glowarea} />
                <img className='absolute hidden transform duration-300 ease-in-out group-hover:block glowPosition z-[-1]' src={ExpertiseTextImage} />
                <p className='text-white   text-center font-[PoppinsMedium]' >Experience  <br /> Center</p>
                </div>
                <img className='expertiseIcon' src={ExpertiseIcon} />
                <div className='exprtiseTextBg  py-6  relative  cursor-pointer group'>
                <img className='absolute transform duration-300 ease-in-out hidden w-[200%] blur-md object-cover group-hover:block  z-[-1]' src={Glowarea} />
                <img className='absolute hidden transform duration-300 ease-in-out group-hover:block glowPosition z-[-1]' src={ExpertiseTextImage} />
                <p className='text-white   text-center font-[PoppinsMedium]' >Experiential  <br /> Marketing</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Expertise