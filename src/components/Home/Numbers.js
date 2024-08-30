import React from 'react'
import Divider from "../../assets/divider.png"
import "./Home.css"
import CircleBlob from "../../assets/circlBlob.png"
const Numbers = () => {
  return (
    <div className='py-6  px-48 flex items-center justify-center' >
        <img src={Divider} />
        <div className='flex relative w-[220px] items-center justify-center gap-2' >
           <img src={CircleBlob} />
            <div className='px-3 absolute flex items-center justify-center flex-col text-center' >
            <h5 className='bg-gradient-to-t text-[2.5rem] from-[#0093DA] to-[#00F7F9] inline-block text-transparent bg-clip-text font-[SegoeBold]'> 100+ </h5>
            <p className='text-white font-[SegoeRegular]' >Clients</p>
            </div>
           
        </div>
        <img src={Divider} />
        <div className='flex relative  w-[220px] items-center justify-center gap-2' >
        <img src={CircleBlob} />
            <div className='px-8  absolute flex items-center justify-center flex-col text-center' >
            <h5 className='bg-gradient-to-t text-[2.5rem] from-[#0093DA] to-[#00F7F9] inline-block text-transparent bg-clip-text font-[SegoeBold]'> 96% </h5>
            <p className='text-white font-[SegoeRegular]' >Client Retention</p>
            </div>
        </div>
        <img src={Divider} />
        <div className='flex relative  w-[220px] items-center justify-center gap-2' >
        <img src={CircleBlob} />
            <div className='px-8 absolute flex items-center justify-center flex-col text-center' >
            <h5 className='bg-gradient-to-t text-[2.5rem] from-[#0093DA] to-[#00F7F9] inline-block text-transparent bg-clip-text font-[SegoeBold]'> 1000+ </h5>
            <p className='text-white font-[SegoeRegular]' >Successful Projects</p>
            </div>
           
        </div>
        <img src={Divider} />
        
    </div>
  )
}

export default Numbers