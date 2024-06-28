import React from 'react'
import Rating from '@mui/material/Rating';

const RatingComp = () => {
    return (
        <div className='py-2 font-pop'>
            <div className="flex flex-col lg:flex-row gap-4 font-pop justify-between">
                <div className="flex flex-row gap-2">
                    <div>
                        <img src={"../../Assets/Prop/avatar.png"} alt="" className='w-8 h-8 rounded-full' />
                    </div>
                    <div className="flex flex-col gap-0">
                        <h3 className='text-lg font-semibold'>Jane Cooper</h3>
                        <h4 className='text-lightGrey'>Germany</h4>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className=" font-medium py-1 px-2 h-fit w-fit flex flex-row items-center gap-2 text-black rounded-3xl">
                        5.0 <Rating name="read-only" value={5} readOnly />
                    </div>
                    <h4 className='text-lightGrey'>2 days ago</h4>
                </div>
            </div>
            <p className='MY-2'>Stunning ui/ux design, professional communication and understanding business requirements. Thanks</p>
        </div>
    )
}

export default RatingComp