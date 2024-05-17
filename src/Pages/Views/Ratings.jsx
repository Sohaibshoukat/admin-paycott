import React from 'react'
import RatingCard from '../../Components/Dashboard/RatingCard'
import { Rating } from '@mui/material'
import { MdEdit } from 'react-icons/md'

const Ratings = () => {
  return (
    <div>
      <div className="flex gap-4">
        <div className="basis-[70%] py-10 px-6">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col font-pop gap-2">
              <h3 className='text-2xl font-bold'>All Reviews</h3>
              <p className='text-lightGrey'>6 Reviews</p>
            </div>
            <div className="flex flex-col gap-4">
              <RatingCard />
              <RatingCard />
              <RatingCard />
              <RatingCard />
              <RatingCard />
              <RatingCard />
              <RatingCard />
              <RatingCard />
            </div>
          </div>
        </div>
        <div className="basis-[30%] relative h-auto">
          <div className="bg-white h-full py-6 px-6">
            <div className="flex flex-col sticky top-0 gap-4">

              <div className="border-2 border-light py-4 px-4 rounded-2xl">
                <div className="flex justify-between font-pop items-center">
                  <h5 className='text-lightGrey'>From Profile</h5>
                  <div className="flex font-pop gap-2 w-max items-center">
                    <img src={'../../assets/Prop/avatar.png'} alt="" className='w-10 h-10 rounded-full' />
                    <div>
                      <h2 className='font-semibold w-max'>Jane Cooper</h2>
                      <p className='text-sm text-lightGrey'>Germany</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-2 border-light py-4 px-4 rounded-2xl">
                <div className="flex justify-between font-pop items-center">
                  <h5 className='text-lightGrey'>To Profile</h5>
                  <div className="flex font-pop gap-2 w-max items-center">
                    <img src={'../../assets/Prop/avatar.png'} alt="" className='w-10 h-10 rounded-full' />
                    <div>
                      <h2 className='font-semibold w-max'>Jane Cooper</h2>
                      <p className='text-sm text-lightGrey'>Germany</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-2 border-light py-4 px-4 rounded-2xl">
                <div className="flex flex-col gap-2 font-pop">
                  <div className="flex justify-between">
                    <h5 className='text-lightGrey'>Rating</h5>
                    <MdEdit className='text-primarygreen text-lg' />
                  </div>
                  <div className='ml-4'>
                    <div className="flex gap-2 items-center">
                      <h2 className='font-medium w-max'>5.0</h2>
                      <Rating name="read-only" value={5} readOnly />
                    </div>
                    <p className='text-sm text-lightGrey'>2 days ago</p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-light py-4 px-4 rounded-2xl">
                <div className="flex flex-col gap-2 font-pop">
                <div className="flex justify-between">
                <h5 className='text-lightGrey'>FeedBack</h5>
                    <MdEdit className='text-primarygreen text-lg' />
                  </div>
                  <div className='ml-4'>
                    <p className=''>Fast, Good Communication, Brilliant Design!</p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-light py-4 px-4 rounded-2xl">
                <div className="flex flex-col gap-2 font-pop">
                  <h5 className='text-lightGrey'>Order Details</h5>
                  <div className="flex justify-between ">
                    <div className="flex flex-col gap-1">
                      <p className='text-lightGrey'>Title:</p>
                      <h4 className='font-semibold'>3D logo</h4>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className='text-lightGrey'>Price:</p>
                      <h4 className='font-semibold'>$130</h4>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className='text-lightGrey'>Delivery time:</p>
                      <h4 className='font-semibold'>3 days</h4>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className='text-lightGrey'>Description:</p>
                    <h4 className='font-normal'>Lorem ipsum dolor sits amet consectetur. Phasellus nec magnis massa cras amet interdum posuere lectus.</h4>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ratings