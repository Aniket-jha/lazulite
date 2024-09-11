import React from 'react'
import StarIcon from "../../assets/starticon.svg"
import ResearchIcon from "../../assets/research.png"
import DownArrow from "../../assets/downarrow.svg"
import UpArrow from "../../assets/uparrow.svg"
import PlanningIcon from "../../assets/planning.png"
import DevelopmentIcon from "../../assets/development.png"
import ExecutionIcon from "../../assets/execution.png"
import Divider from "../../assets/Ellipse 154.png"
const Steps = () => {
  return (
    <div>
        <img src={Divider} />
    <div className='py-12 paddingBox flex flex-col items-center justify-center'>
                 <h6 className='flex items-center font-[PoppinsMedium] justify-center text-white gap-3  text-[2rem]' ><img className='w-[30px]' src={StarIcon} /> Guidelines for Achieving <span className='bg-gradient-to-r from-[#0093DA] to-[#00F7F9] inline-block text-transparent bg-clip-text font-[PoppinsMedium]'> Project Success </span><img className='w-[30px]' src={StarIcon} /></h6>
                 <h3 className='text-[1rem] text-center font-[PoppinsRegular] mt-3 text-white' >Explore our recent projects where we blend technology and creativity to craft immersive, memorable experiences. See how we turn concepts into reality with our dedication to excellence and innovation.  </h3>
                 <div className='grid  mt-12 gap-16 grid-cols-4 grid-flow-col' >
                    <div className='relative'>
                    <div className='w-full rounded-b-[27px] pb-4 bg-[#0048b431] ' >
                        <div className='bg-gradient-to-b flex items-center justify-center px-8 w-full rounded-[27px] py-12 from-[#0093DA] to-[#0048B4]' >
                            <img className='w-[80px]' src={ResearchIcon} />
                            </div>
                            <div className=' rounded-b-lg px-4 py-4' >
                                <h5 className='text-[1.4rem] mb-2 text-[#00b4e2] font-[PoppinsBold] ' >Research</h5>
                                <p className='text-[.7rem] text-white font-[PoppinsRegular]' >A winning strategy ensures success. Follow up with a plan for goals and principles related to your unique asset.</p>
                            </div>
                            
                    </div>
                    <img className='absolute  w-[90%]  left-[35%]' src={DownArrow} />
                    </div>
                    <div className='relative mt-12'>
                    <img className='absolute w-[90%]  top-[-8%] left-[35%]' src={UpArrow} />
                    <div className='w-full bg-[#0048b431] rounded-b-[27px] pb-4 ' >
                   
                        <div className='bg-gradient-to-b flex items-center justify-center px-8 w-full rounded-[27px] py-12 from-[#0093DA] to-[#0048B4]' >
                            <img className='w-[80px]' src={PlanningIcon} />
                            </div>
                            <div className=' rounded-b-lg px-4 py-4' >
                                <h5 className='text-[1.4rem] mb-2 text-[#00b4e2] font-[PoppinsBold] ' >Planning</h5>
                                <p className='text-[.7rem] text-white font-[PoppinsRegular]' >We start by analyzing key factors and creating a comprehensive plan. Following client approval, we design and test a user interface prototype to refine the user experience. </p>
                            </div>
                    </div>
                    </div>
                    <div className='relative'>
                    <div className='w-full bg-[#0048b431] rounded-b-[27px] pb-4  relative' >
                        <div className='bg-gradient-to-b flex items-center justify-center px-8 w-full rounded-[27px] py-12 from-[#0093DA] to-[#0048B4]' >
                            <img className='w-[80px]' src={DevelopmentIcon} />
                            </div>
                            <div className=' rounded-b-lg px-4 py-4' >
                                <h5 className='text-[1.4rem] mb-2 text-[#00b4e2] font-[PoppinsBold] ' >Development</h5>
                                <p className='text-[.7rem] text-white font-[PoppinsRegular]' >After the prototype is validated, we build the application code with smart contracts and a custom Interface. We ensure its reliability through detailed testing before client delivery. </p>
                            </div>
                            
                    </div>
                    <img className='absolute  w-[90%]  left-[35%]' src={DownArrow} />
                    </div>
                    <div className='  '>
                    <div className='w-full bg-[#0048b431] mt-20 rounded-b-[27px] pb-4' >
                        <div className='bg-gradient-to-b flex items-center justify-center px-8 w-full rounded-[27px] py-12 from-[#0093DA] to-[#0048B4]' >
                            <img className='w-[80px]' src={ExecutionIcon} />
                            </div>
                            <div className=' rounded-b-lg px-4 py-4' >
                                <h5 className='text-[1.4rem] mb-2 text-[#00b4e2] font-[PoppinsBold] ' >Execution</h5>
                                <p className='text-[.7rem] text-white font-[PoppinsRegular]' >With the project launched, we oversee setup, continuous monitoring, installations, and provide training according to the technology used. </p>
                            </div>
                    </div>
                    </div>
                 </div>
    </div>
    <img src={Divider} />
    </div>
  )
}

export default Steps