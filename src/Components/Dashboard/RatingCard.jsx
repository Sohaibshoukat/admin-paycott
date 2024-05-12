import { Rating } from '@mui/material'
import React from 'react'

const RatingCard = () => {
    return (
        <div className='bg-white flex flex-col gap-4 rounded-2xl py-4 font-pop px-6'>
            <div className="flex justify-between">
                <div className="flex font-pop gap-2 w-max items-center">
                    <img src={'../../assets/Prop/avatar.png'} alt="" className='w-14 h-14 rounded-full' />
                    <div className="flex flex-col gap-1">
                        <h2 className='font-semibold w-max'>Jane Cooper</h2>
                        <p className='text-lightGrey'>Germany</p>
                    </div>
                </div>
                <div className="flex flex-col font-pop gap-1">
                    <div className="flex gap-2 items-center">
                        <h2 className='font-medium w-max'>5.0</h2>
                        <Rating name="read-only" value={5} readOnly />
                    </div>
                    <p className='text-lightGrey'>2 days ago</p>
                </div>
            </div>
            <p className='md:text-lg'>Stunning ui/ux design, professional communication and understanding business requirements. Thanks</p>
        </div>
    )
}

export default RatingCard