import React from 'react'
import "./Portfolio.css"
import BlogImage from "../../assets/case1.png"
const PortfolioTab = ({activeTab,setActiveTab}) => {
    const activeClass = "py-1 px-6 text-white cursor-pointer bg-gradient-to-l from-[#0093DA] to-[#00F7F9] rounded-full font-[PoppinsMedium]"
    const inActiveClass = "py-1 px-6 inActiveBg cursor-pointer text-white rounded-full font-[PoppinsMedium] "
  return (
    <div className='px-64 py-12'>
        <div className='flex items-center flex-wrap justify-center gap-6'>
            <div onClick={()=>setActiveTab("all")} className={activeTab==="all" ? activeClass : inActiveClass} >All</div>
            <div onClick={()=>setActiveTab("augmentedreality")} className={activeTab==="augmentedreality" ? activeClass : inActiveClass} >Augmented Reality</div>
            <div onClick={()=>setActiveTab("gamification")}  className={activeTab==="gamification" ? activeClass : inActiveClass} >Gamification</div>
            <div  onClick={()=>setActiveTab("Hologram")} className={activeTab==="Hologram" ? activeClass : inActiveClass} >Hologram</div>
            <div onClick={()=>setActiveTab("interactivescreen")} className={activeTab==="interactivescreen" ? activeClass : inActiveClass} >Interactive Screens</div>
            <div onClick={()=>setActiveTab("kinetics")} className={activeTab==="kinetics" ? activeClass : inActiveClass} >Kinetics</div>
            <div onClick={()=>setActiveTab("Metaverse")} className={activeTab==="Metaverse" ? activeClass : inActiveClass} >Metaverse</div>
            <div onClick={()=>setActiveTab("projection mapping")} className={activeTab==="projection mapping" ? activeClass : inActiveClass} >Projection Mapping</div>
            <div onClick={()=>setActiveTab("robotics")}  className={activeTab==="robotics" ? activeClass : inActiveClass} >Robotics</div>
            <div onClick={()=>setActiveTab("virtualreality")}  className={activeTab==="virtualreality" ? activeClass : inActiveClass} >Virtual Reality</div>
        </div>
        <div>
            {
                activeTab === "all" && <div className='grid grid-cols-4 mt-12 gap-4 grid-flow-row'>
                     <div className='relative'>
            <img className='w-[300px] h-[300px]' src={BlogImage} />
            <div className='absolute bottom-3 px-3'>
            <p className='text-white font-[PoppinsMedium] text-[1rem]'>Gaming Microsite </p>
            <p className='text-white font-[PoppinsMedium] text-[1.1rem]'>Digital Arcade Game</p>
            </div>
        </div>
        <div className='relative'>
            <img className='w-[300px] h-[300px]' src={BlogImage} />
            <div className='absolute bottom-3 px-3'>
            <p className='text-white font-[PoppinsMedium] text-[1rem]'>Gaming Microsite </p>
            <p className='text-white font-[PoppinsMedium] text-[1.1rem]'>Digital Arcade Game</p>
            </div>
        </div>
        <div className='relative'>
            <img className='w-[300px] h-[300px]' src={BlogImage} />
            <div className='absolute bottom-3 px-3'>
            <p className='text-white font-[PoppinsMedium] text-[1rem]'>Gaming Microsite </p>
            <p className='text-white font-[PoppinsMedium] text-[1.1rem]'>Digital Arcade Game</p>
            </div>
        </div>
        <div className='relative'>
            <img className='w-[300px] h-[300px]' src={BlogImage} />
            <div className='absolute bottom-3 px-3'>
            <p className='text-white font-[PoppinsMedium] text-[1rem]'>Gaming Microsite </p>
            <p className='text-white font-[PoppinsMedium] text-[1.1rem]'>Digital Arcade Game</p>
            </div>
        </div>
        <div className='relative'>
            <img className='w-[300px] h-[300px]' src={BlogImage} />
            <div className='absolute bottom-3 px-3'>
            <p className='text-white font-[PoppinsMedium] text-[1rem]'>Gaming Microsite </p>
            <p className='text-white font-[PoppinsMedium] text-[1.1rem]'>Digital Arcade Game</p>
            </div>
        </div>
        <div className='relative'>
            <img className='w-[300px] h-[300px]' src={BlogImage} />
            <div className='absolute bottom-3 px-3'>
            <p className='text-white font-[PoppinsMedium] text-[1rem]'>Gaming Microsite </p>
            <p className='text-white font-[PoppinsMedium] text-[1.1rem]'>Digital Arcade Game</p>
            </div>
        </div>
        <div className='relative '>
            <img className='w-[300px] h-[300px]' src={BlogImage} />
            <div className='absolute bottom-3 px-3'>
            <p className='text-white font-[PoppinsMedium] text-[1rem]'>Gaming Microsite </p>
            <p className='text-white font-[PoppinsMedium] text-[1.1rem]'>Digital Arcade Game</p>
            </div>
        </div>
        <div className='relative'>
            <img className='w-[300px] h-[300px]' src={BlogImage} />
            <div className='absolute bottom-3 px-3'>
            <p className='text-white font-[PoppinsMedium] text-[1rem]'>Gaming Microsite </p>
            <p className='text-white font-[PoppinsMedium] text-[1.1rem]'>Digital Arcade Game</p>
            </div>
        </div>
                </div>
            }
            {
                activeTab === "augmentedreality" && <div className='grid grid-cols-4 mt-12 gap-4 grid-flow-row'>
                     <div className='relative'>
            <img className='w-[300px] h-[300px]' src={BlogImage} />
            <div className='absolute bottom-3 px-3'>
            <p className='text-white font-[PoppinsMedium] text-[1rem]'>Gaming Microsite </p>
            <p className='text-white font-[PoppinsMedium] text-[1.1rem]'>Digital Arcade Game</p>
            </div>
        </div>
        <div className='relative'>
            <img className='w-[300px] h-[300px]' src={BlogImage} />
            <div className='absolute bottom-3 px-3'>
            <p className='text-white font-[PoppinsMedium] text-[1rem]'>Gaming Microsite </p>
            <p className='text-white font-[PoppinsMedium] text-[1.1rem]'>Digital Arcade Game</p>
            </div>
        </div>
        <div className='relative'>
            <img className='w-[300px] h-[300px]' src={BlogImage} />
            <div className='absolute bottom-3 px-3'>
            <p className='text-white font-[PoppinsMedium] text-[1rem]'>Gaming Microsite </p>
            <p className='text-white font-[PoppinsMedium] text-[1.1rem]'>Digital Arcade Game</p>
            </div>
        </div>
        
        
       
                </div>
            }
            {
                activeTab === "gamification" && <div className='grid grid-cols-4 mt-12 gap-4 grid-flow-row'>
                     <div className='relative'>
            <img className='w-[300px] h-[300px]' src={BlogImage} />
            <div className='absolute bottom-3 px-3'>
            <p className='text-white font-[PoppinsMedium] text-[1rem]'>Gaming Microsite </p>
            <p className='text-white font-[PoppinsMedium] text-[1.1rem]'>Digital Arcade Game</p>
            </div>
        </div>
        <div className='relative'>
            <img className='w-[300px] h-[300px]' src={BlogImage} />
            <div className='absolute bottom-3 px-3'>
            <p className='text-white font-[PoppinsMedium] text-[1rem]'>Gaming Microsite </p>
            <p className='text-white font-[PoppinsMedium] text-[1.1rem]'>Digital Arcade Game</p>
            </div>
        </div>
        <div className='relative'>
            <img className='w-[300px] h-[300px]' src={BlogImage} />
            <div className='absolute bottom-3 px-3'>
            <p className='text-white font-[PoppinsMedium] text-[1rem]'>Gaming Microsite </p>
            <p className='text-white font-[PoppinsMedium] text-[1.1rem]'>Digital Arcade Game</p>
            </div>
        </div>
        <div className='relative'>
            <img className='w-[300px] h-[300px]' src={BlogImage} />
            <div className='absolute bottom-3 px-3'>
            <p className='text-white font-[PoppinsMedium] text-[1rem]'>Gaming Microsite </p>
            <p className='text-white font-[PoppinsMedium] text-[1.1rem]'>Digital Arcade Game</p>
            </div>
        </div>
        
       
                </div>
            }
        </div>
    </div>
  )
}

export default PortfolioTab