import React from 'react'
import CircleBlob from "../../assets/circlBlob.png"
import Divider from "../../assets/divider.png"
const AboutNumber = () => {
  return (
    <div className='py-6  px-48 flex items-center justify-center' >
         <img src={Divider} />
        <div className='flex relative w-[220px] items-center justify-center gap-2' >
           <img src={CircleBlob} />
            <div className='px-3 absolute flex items-center justify-center flex-col text-center' >
            <h5 className='bg-gradient-to-t text-[2.5rem] from-[#0093DA] to-[#00F7F9] inline-block text-transparent bg-clip-text font-[PoppinsBold]'> 2016 </h5>
            <p className='text-white font-[PoppinsRegular]' >Founded In</p>
            </div>
           
        </div>
        <img src={Divider} />
        <div className='flex relative w-[220px] items-center justify-center gap-2' >
           <img src={CircleBlob} />
            <div className='px-3 absolute flex items-center justify-center flex-col text-center' >
            <h5 className='bg-gradient-to-t text-[2.5rem] from-[#0093DA] to-[#00F7F9] inline-block text-transparent bg-clip-text font-[PoppinsBold]'> 100+ </h5>
            <p className='text-white font-[PoppinsRegular]' >Clients</p>
            </div>
           
        </div>
        <img src={Divider} />
        <div className='flex relative  w-[220px] items-center justify-center gap-2' >
        <img src={CircleBlob} />
            <div className='px-8  absolute flex items-center justify-center flex-col text-center' >
            <h5 className='bg-gradient-to-t text-[2.5rem] from-[#0093DA] to-[#00F7F9] inline-block text-transparent bg-clip-text font-[PoppinsBold]'> 96% </h5>
            <p className='text-white font-[PoppinsRegular]' >Client Retention</p>
            </div>
        </div>
        <img src={Divider} />
        <div className='flex relative  w-[220px] items-center justify-center gap-2' >
        <img src={CircleBlob} />
            <div className='px-8 absolute flex items-center justify-center flex-col text-center' >
            <h5 className='bg-gradient-to-t text-[2.5rem] from-[#0093DA] to-[#00F7F9] inline-block text-transparent bg-clip-text font-[PoppinsBold]'> 1000+ </h5>
            <p className='text-white font-[PoppinsRegular]' >Successful Projects</p>
            </div>
           
        </div>
        <img src={Divider} />
        
    </div>
  )
}

export default AboutNumber