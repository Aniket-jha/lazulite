import React from 'react'
import StarIcon from "../../assets/starticon.svg"
import HologramImage from "../../assets/hologram.png"
import EclipseImage from "../../assets/Ellipse 16.svg"
import Screen from "../../assets/interactive.png"
import VR from "../../assets/VR.svg"
import Projection from "../../assets/projector.png"
import Kinetics from "../../assets/kinetics.png"
import Metaverse from "../../assets/Metaverse.png"
import Robotics from "../../assets/robotics.png"
import Augmented from "../../assets/ar.png"
import Wall from "../../assets/wall.png"
import Gaming from "../../assets/gaming.png"

import "./Home.css"
const Products = () => {
  return (
    <div  className='pt-12 productBox paddingBox flex flex-col items-center justify-center' >
         <h6 className='flex items-center font-[PoppinsRegular] justify-center text-white gap-2  text-[1.5rem]' ><img className='w-[30px]' src={StarIcon} /> Our Products<img className='w-[30px]' src={StarIcon} /></h6>
         <h3 className='text-[1.8rem] text-center font-[PoppinsMedium] mt-3 text-white' ><span className='bg-gradient-to-r from-[#0093DA] to-[#00F7F9] inline-block text-transparent bg-clip-text'> Make your marketing</span> viral with emotional, human-like experiences </h3>
         <div className='grid grid-cols-5 mr-12 pt-24 justify-start pb-16 grid-flow-row gap-24' >
                <div className='productBackground  px-3 py-3  group  h-[190px] w-[180px]'>
                    <img className='mt-[-70px] transform duration-300   group-hover:scale-110' src={HologramImage} />
                   
                    <img className='mt-[-10px] w-[80%] ml-4' src={EclipseImage} />
                    <h5 className='text-white px-3 text-center font-[PoppinsRegular] text-[.9rem] mt-2' >Interactive 3D Hologram</h5>
                </div>
                <div className='productBackground mt-6  group  h-[190px] w-[180px]'>
                    <img className='mt-[-70px] transform duration-300  group-hover:scale-110' src={Screen} />
                    <img className='mt-[-10px] w-[80%] ml-4' src={EclipseImage} />
                    <h5 className='text-white px-3 text-center font-[PoppinsRegular] text-[.9rem] mt-2' >Interactive Screen</h5>
                </div>
                <div className='productBackground group mt-[-1.5rem]  h-[190px] w-[180px]'>
                    <img className='mt-[-60px] transform duration-300  group-hover:scale-110' src={Augmented} />
                    <img className='mt-[-15px] w-[80%] ml-4' src={EclipseImage} />
                    <h5 className='text-white px-3 mt-2 text-[.9rem] text-center font-[PoppinsRegular]' >Augmented Reality</h5>
                </div>
                <div className='productBackground group mt-2  h-[190px] w-[180px]'>
                    <img className='mt-[-70px] transform duration-300  group-hover:scale-110' src={Projection} />
                    <img className='mt-[-10px] w-[80%] ml-4' src={EclipseImage} />
                    <h5 className='text-white px-3 text-center font-[PoppinsRegular] text-[.9rem] mt-2' >Projection Mapping</h5>
                </div>
                <div className='productBackground group  mt-[-2rem]  h-[190px] w-[180px]'>
                    <img className='mt-[-70px] transform duration-300  group-hover:scale-110' src={VR} />
                    <img className='mt-[-10px] w-[80%] ml-4' src={EclipseImage} />
                    <h5 className='text-white px-3 text-center font-[PoppinsRegular] text-[.9rem] mt-2' >Virtual Reality</h5>
                </div>
                <div className='productBackground group  h-[190px] w-[180px]'>
                    <img className='mt-[-70px] transform duration-300  group-hover:scale-110' src={Kinetics} />
                    <img className='mt-[-10px] w-[80%] ml-4' src={EclipseImage} />
                    <h5 className='text-white px-3 text-center font-[PoppinsRegular] text-[.9rem] mt-2' >Kinetics</h5>
                </div>
                <div className='productBackground group mt-6  h-[190px] w-[180px]'>
                    <img className='mt-[-70px] transform duration-300  group-hover:scale-110' src={Metaverse} />
                    <img className='mt-[-10px] w-[80%] ml-4' src={EclipseImage} />
                    <h5 className='text-white px-3 text-center font-[PoppinsRegular] text-[.9rem] mt-2' >Metaverse</h5>
                </div>
                <div className='productBackground group mt-[-1.5rem]  h-[190px] w-[180px]'>
                    <img className='mt-[-70px] transform duration-300   group-hover:scale-110' src={Gaming} />
                    <img className='mt-[-10px] w-[80%] ml-4' src={EclipseImage} />
                    <h5 className='text-white px-3 text-center font-[PoppinsRegular] text-[.9rem] mt-2' >Interactive Games</h5>
                </div>
                <div className='productBackground group mt-2  h-[190px] w-[180px]'>
                    <img className='mt-[-70px] transform duration-300  group-hover:scale-110' src={Wall} />
                    <img className='mt-[-10px] w-[80%] ml-4' src={EclipseImage} />
                    <h5 className='text-white px-3 text-center font-[PoppinsRegular] text-[.9rem] mt-2' >Dynamic LED wall</h5>
                </div>
                <div className='productBackground group  mt-[-2rem]  h-[190px] w-[180px]'>
                    <img className='mt-[-70px] transform duration-300  group-hover:scale-110' src={Robotics} />
                    <img className='mt-[-10px] w-[80%] ml-4' src={EclipseImage} />
                    <h5 className='text-white px-3 text-center font-[PoppinsRegular] text-[.9rem] mt-2' >Robotics</h5>
                </div>
         </div>
    </div>
  )
}

export default Products