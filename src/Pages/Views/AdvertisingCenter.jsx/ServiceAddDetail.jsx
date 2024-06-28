import React from 'react'
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';

const ServiceAddDetail = () => {
  const navigate = useNavigate()
  return (
    <div className='m-auto flex flex-col gap-6'>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="basis-[65%] bg-white flex flex-col gap-6 rounded-2xl py-6 px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-2">
            <div className="flex flex-col md:flex-row font-pop items-center gap-2">
              <div>
                <img src={"../../assets/Prop/avatar.png"} alt="" className='w-24 h-24 rounded-full' />
              </div>
              <div className="flex flex-col gap-1 md:gap-2">
                <div className="flex flex-row gap-1 items-center">
                  <img src="../../assets/Prop/badge.png" className='w-6 h-6' />
                  <h4 className='text-base text-lightGrey'>Level 2</h4>
                </div>
                <h3 className='text-2xl font-semibold'>Cameron Williamson</h3>
                <h4 className='text-lg text-lightGrey'>@CameronWilliamson</h4>
              </div>
            </div>
            <div className="flex flex-col lg:text-right font-pop gap-2">
              <h2 className='text-lightGrey font-medium'><span className='font-light'>Last seen: </span>5 hours ago</h2>
              <h2 className='text-lightGrey font-medium'><span className='font-light'>Local time: </span>United Kingdom, 10 Mar 2024, 19:24</h2>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col font-pop gap-1">
              <h4 className='text-lightGrey font-medium'>Location</h4>
              <h3 className='font-normal'>United States</h3>
            </div>
            <div className="flex flex-col font-pop gap-1">
              <h4 className='text-lightGrey font-medium'>Skills</h4>
              <div className="flex flex-row flex-wrap font-pop gap-1">
                <div className='bg-[#EFFBF1] rounded-full py-1 px-2 text-base'>
                  Photoshop
                </div>
                <div className='bg-[#EFFBF1] rounded-full py-1 px-2 text-base'>
                  Photoshop
                </div>
                <div className='bg-[#EFFBF1] rounded-full py-1 px-2 text-base'>
                  Photoshop
                </div>
                <div className='bg-[#EFFBF1] rounded-full py-1 px-2 text-base'>
                  Photoshop
                </div>
                <div className='bg-[#EFFBF1] rounded-full py-1 px-2 text-base'>
                  Photoshop
                </div>
              </div>
            </div>
            <div className="flex flex-col font-pop gap-1">
              <h4 className='text-lightGrey font-medium'>Languages</h4>
              <div className="flex flex-row flex-wrap font-pop gap-1">
                <div className='bg-[#EFFBF1] rounded-full py-1 px-2 text-base'>
                  English
                </div>
                <div className='bg-[#EFFBF1] rounded-full py-1 px-2 text-base'>
                  Urdu
                </div>
              </div>
            </div>
            <div className="flex flex-col font-pop gap-1">
              <h4 className='text-lightGrey font-medium'>Rating</h4>
              <div className="bg-[#FEF8EE] font-medium py-1 px-2 h-fit w-fit flex flex-row items-center gap-2 text-black rounded-3xl">
                5.0 <Rating name="read-only" value={5} readOnly />
              </div>
            </div>
          </div>
        </div>
        <div className="basis-[35%] bg-white flex flex-col justify-between gap-4 rounded-2xl py-6 px-4 font-pop">
          <div className="flex flex-col gap-2">
            <h2 className='text-xl font-semibold'>AD ID: <span>3445754</span></h2>
            <h4 className='font-medium'>DATE CREATED: <span className='text-lightGrey'>24 Dec 20 15:02PM</span></h4>
            <h4 className='font-medium'>USER ID: <span className='text-lightGrey'>123434</span></h4>
            <h4 className='font-medium'>USER LEVEL: <span className='text-lightGrey'>CATEGORY: LOGO DESIGN {"->"} 3D LOGO</span></h4>
            <div className="flex items-center gap-4">
              <h4>USER ACCOUNT STATUS:</h4>
              <div className="bg-primarygreen/30 border-2 border-primarygreen text-primarygreen py-2 px-4 font-medium rounded-xl">
                GOOD
              </div>
            </div>
          </div>
          <div className="flex gap-4 w-full items-center justify-between">
            <button
              className='bg-primarygreen w-full text-lg rounded-full py-2 px-4 border-2 border-primarygreen text-white hover:bg-transparent hover:text-primarygreen ease-in-out duration-300 font-pop font-medium'
            >
              Accept
            </button>
            <button
              className='bg-red-500 w-full text-lg rounded-full py-2 px-4 border-2 border-red-500 text-white hover:bg-transparent hover:text-red-500 ease-in-out duration-300 font-pop font-medium'
            >
              Decline
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl  py-6 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className='rounded-2xl relative' onClick={() => { navigate("/user-dashboard/service/serviceportfolio") }}>
            <img src="../../assets/Prop/3Dservice.png" alt="" className='h-60 w-full' />
            <div className="flex gap-2 items-center absolute z-20 justify-end top-2 right-2">
              <div className="p-2 bg-white/25 rounded-xl">
                <img src="../../assets/Prop/Edit.png" alt="" className='h-4 w-4' />
              </div>
              <div className="p-2 bg-white/25 rounded-xl">
                <img src="../../assets/Prop/Delete.png" alt="" className='h-4 w-4' />
              </div>
            </div>
            <div className="bg-white/25 absolute bottom-0 w-full py-2 px-4 font-pop text-white">
              <h2>3D logofolio</h2>
            </div>
          </div>
          <div className='rounded-2xl relative' onClick={() => { navigate("/user-dashboard/service/serviceportfolio") }}>
            <img src="../../assets/Prop/MobileApp.png" alt="" className='h-60 w-full' />
            <div className="flex gap-2 items-center absolute z-20 justify-end top-2 right-2">
              <div className="p-2 bg-white/25 rounded-xl">
                <img src="../../assets/Prop/Edit.png" alt="" className='h-4 w-4' />
              </div>
              <div className="p-2 bg-white/25 rounded-xl">
                <img src="../../assets/Prop/Delete.png" alt="" className='h-4 w-4' />
              </div>
            </div>
            <div className="bg-white/25 absolute bottom-0 w-full py-2 px-4 font-pop text-white">
              <h2>Mobile app design</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceAddDetail