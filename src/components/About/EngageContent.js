import React from 'react'
import ConnectImage from "../../assets/Connect.webp"
const EngageContent = () => {
  return (
    <div className='py-12 px-56 grid grid-cols-2 gap-8 items-center justify-center grid-flow-row'>
        <div>
            <img src={ConnectImage} />
        </div>
        <div>
            <h6 className='font-[PoppinsMedium] text-white text-[2rem]'> Engage & connect better with
            your customer base</h6>
            <p className='font-[PoppinsRegular] mt-2 text-[1rem] text-white'>
            The Lazulite Team is passionate about creating unforgettable experiences that engage, entertain, and connect with your audience in ways you never thought possible. We design and execute exceptional mall activations and brand activations that can take your brand closer to your target audience. We work closely with you to understand your event goals, brand values, and audience expectations to create tailor-made solutions that exceed your expectations.
                <br /> <br />
Our technology services are designed to create a buzz around your brand, and grab the attention of potential customers. We believe that a successful event is one that engages the audience and creates a memorable experience. With Lazulite, we help you achieve just that, by transforming ordinary events into extraordinary experiences through top-class event engagement solutions.
            </p>
        </div>
    </div>
  )
}

export default EngageContent