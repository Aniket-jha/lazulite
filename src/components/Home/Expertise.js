import React from 'react'
import StarIcon from "../../assets/starticon.svg"
import ExpertiseIcon from "../../assets/expertiseicon.svg"
import ExpertiseTextImage from "../../assets/expertiseText.png"
const Expertise = () => {
  return (
    <div className='pb-12 pt-6 px-48 flex flex-col items-center justify-center' >
        <h6 className='flex items-center font-[PoppinsMedium] justify-center text-white gap-2  text-[1.1rem]' ><img className='w-[30px]' src={StarIcon} /> Our Expertise<img className='w-[30px]' src={StarIcon} /></h6>
        <h3 className='text-[1.8rem] text-center font-[PoppinsMedium] mt-3 text-white' >Your Go-To for Brand Activation & <span className='bg-gradient-to-r from-[#0093DA] to-[#00F7F9] inline-block text-transparent bg-clip-text '> Event Technology Solutions</span></h3>
        <div className='bg-[#ffffff1f] w-full border-t-[1px] border-[#f2f2f22f] mt-8  flex items-center justify-center rounded-sm py-2 px-2' >
            <div className='expertiseBg w-full border-t-[1px] border-[#f2f2f22f] text-center items-center justify-start flex  rounded-sm ' >
              <div className='exprtiseTextBg w-[21%] py-3  relative cursor-pointer group'>
                <img className='absolute transform duration-300 ease-in-out hidden group-hover:block bottom-[-50%] right-[0%] left-0  w-[190%] z-[-1]' src={ExpertiseTextImage} />
                <p className='text-white  text-[.8rem] text-center font-[PoppinsMedium]' >Events &  <br /> Exhibitions</p>
                </div>
                <img className='w-[4%]'  src={ExpertiseIcon} />
                <div className='exprtiseTextBg w-[21%] py-3  relative  cursor-pointer group'>
                <img className='absolute hidden transform duration-300 ease-in-out group-hover:block bottom-[-50%] right-[0%] left-0  w-[190%] z-[-1]' src={ExpertiseTextImage} />
                <p className='text-white  text-[.8rem] text-center font-[PoppinsMedium]' >Brand <br /> Activation</p>
                </div>
                <img className='w-[4%]' src={ExpertiseIcon} />
                <div className='exprtiseTextBg w-[21%] py-3  relative   cursor-pointer group'>
                <img className='absolute hidden transform duration-300 ease-in-out group-hover:block bottom-[-50%] right-[0%] left-0  w-[190%] z-[-1]' src={ExpertiseTextImage} />
                <p className='text-white  text-[.8rem] text-center font-[PoppinsMedium]' >Mall  <br /> Activation</p>
                </div>
                <img className='w-[4%]' src={ExpertiseIcon} />
                <div className='exprtiseTextBg w-[21%] py-3  relative  cursor-pointer group'>
                <img className='absolute hidden transform duration-300 ease-in-out group-hover:block bottom-[-50%] right-[0%] left-0  w-[190%] z-[-1]' src={ExpertiseTextImage} />
                <p className='text-white   text-[.8rem] text-center font-[PoppinsMedium]' >Sales  <br /> Center</p>
                </div>
                <img className='w-[4%]' src={ExpertiseIcon} />
                <div className='exprtiseTextBg w-[21%] py-3   relative  cursor-pointer group'>
                <img className='absolute hidden transform duration-300 ease-in-out group-hover:block bottom-[-50%] right-[0%] left-0  w-[190%] z-[-1]' src={ExpertiseTextImage} />
                <p className='text-white  text-[.8rem] text-center font-[PoppinsMedium]' >Experience  <br /> Center</p>
                </div>
                <img className='w-[4%]' src={ExpertiseIcon} />
                <div className='exprtiseTextBg w-[21%] py-3  relative  cursor-pointer group'>
                <img className='absolute hidden transform duration-300 ease-in-out group-hover:block bottom-[-50%] right-[0%] left-0  w-[190%] z-[-1]' src={ExpertiseTextImage} />
                <p className='text-white  text-[.8rem] text-center font-[PoppinsMedium]' >Experiential  <br /> Marketing</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Expertise