import React from 'react'
import "./Home.css"
import { MdMessage } from "react-icons/md"
import PhoneImage from "../../assets/phone.png"
import ChatImage from "../../assets/chat.png"
import EmailImage from "../../assets/email.png"
const Contact = () => {
  return (
    <div className='py-12 px-48' >
        <div className='grid rounded-lg grid-cols-3 grid-flow-row' >
            <div className='col-span-1 contactBg rounded-l-lg text-white  py-12 px-8' >
                <h5 className='font-[PoppinsRegular] flex items-center justify-start gap-1 uppercase mb-1 text-[.9rem]'><MdMessage /> Start Your Journey</h5>
                <h3 className='font-[PoppinsSemiBold] leading-[2.9rem]  text-[2.5rem]'>Let's Innovate Together</h3>
                <p className='font-[PoppinsRegular] mr-12 mt-2 text-[.9rem]'>We're ready to transform your ideas with our cutting-edge solutions in AR, VR, Holograms, Interactive Screens, and more. Have a question or want to collaborate? Fill out the form,</p>
            </div>
            <div className='col-span-2 rounded-r-lg  py-8 px-8 contactFormBg' >
                <div className='grid grid-cols-2 gap-6 grid-flow-col' >
                    <input className='py-2 bg-[#ffffff1e] rounded-lg text-white placeholder:text-[#0091da72] px-3' placeholder='Full Name*' />
                    <input className='py-2 bg-[#ffffff1e] rounded-lg text-white placeholder:text-[#0091da72] px-3' placeholder='Email*' />
                </div>
                <div className='grid grid-cols-2 mt-6 gap-6 grid-flow-col' >
                    <input className='py-2 bg-[#ffffff1e] rounded-lg text-white placeholder:text-[#0091da72] px-3' placeholder='Full Name*' />
                    <input className='py-2 bg-[#ffffff1e] rounded-lg text-white placeholder:text-[#0091da72] px-3' placeholder='Company Name' />
                </div>
                <div className='mt-6 flex items-center justify-start gap-4'>
                    <div className='flex relative items-center justify-start gap-2 '>
                <input className='bg-[#000ba48a] inputBg' type="radio" id="html" name="fav_language" value="End Client" />
                <p className='text-white font-[PoppinsRegular] text-[.8rem]'>End Client</p>
                </div>
                <div className='flex relative items-center justify-start gap-2 '>
                <input className='radio' type="radio" id="html" name="fav_language" value="End Client" />
         
                <p className='text-white font-[PoppinsRegular] text-[.8rem]'>Agency</p>
                </div>
                <div className='flex relative items-center justify-start gap-2 '>
                <input className='bg-[#ffffff1e] ' type="radio" id="html" name="fav_language" value="End Client" />
           
                <p className='text-white font-[PoppinsRegular] text-[.8rem]'>Event Company</p>
                </div>
                <div className='flex relative items-center justify-start gap-2 '>
                <input className='bg-[#ffffff1e]' type="radio" id="html" name="fav_language" value="End Client" />
              
                <p className='text-white font-[PoppinsRegular] text-[.8rem]'>Fabricator</p>
                </div>
                <div className='flex relative items-center justify-start gap-2 '>
                <input className='bg-[#ffffff1e]' type="radio" id="html" name="fav_language" value="End Client" />
               
                <p className='text-white font-[PoppinsRegular] text-[.8rem]'>AV Company</p>
                </div>
                <div className='flex relative items-center justify-start gap-2 '>
               
                <label className="circle" for="check-2" id="c2"></label>
                <p className='text-white font-[PoppinsRegular] text-[.8rem]'>Other</p>
                </div>
                </div>
                <div className='mt-6' >
                    <textarea placeholder='Please Enter details about your enquiry' className='bg-[#ffffff1e] placeholder:text-[#0091da72] px-3 py-2 h-[100px] rounded-lg w-full' />
                </div>
                <div className='flex items-center justify-start gap-3 mt-6 '>
                <input className='bg-[#ffffff1e]' type="checkbox" id="html" name="fav_language" value="End Client" />
                <p className='text-white'>I have read the <span className='text-[#2784dbd2]' >Terms and Condition</span> & <span className='text-[#2784dbd2]'>Privacy Notice</span> agreement</p>
                </div>
                <button className='rounded-lg mt-6 w-[140px] followButton text-white py-2 font-[PoppinsMedium] px-3'>Submit</button>
            </div>
        </div>
        <div className='flex items-center justify-center mt-6 gap-12' >
        <div className='flex items-center justify-center gap-4'>
                    <img src={EmailImage} />
                    <p className='text-white font-[PoppinsRegular]'>sales@lazulite.ae</p>
                </div>
                <div className='flex items-center justify-center gap-4'>
                    <img src={PhoneImage} />
                    <p className='text-white font-[PoppinsRegular]'>+971 42 66 00 87</p>
                </div>
                <div className='flex items-center justify-center gap-4'>
                    <img src={ChatImage} />
                    <p className='text-white font-[PoppinsRegular]'>+971 42 66 00 87</p>
                </div>
        </div>
    </div>
  )
}

export default Contact