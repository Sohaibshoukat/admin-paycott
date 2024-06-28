import React from 'react'

const LogDetail = () => {
    return (
        <div className='w-[90%] mx-auto py-10'>
            <div className="bg-white rounded-xl flex flex-col gap-2 py-4 px-6 font-pop">
                <h2 className='text-2xl font-semibold '>Transaction Log Detail</h2>
                <div className="flex flex-col gap-4 mt-6">
                    <img src={"../../assets/Prop/avatar.png"} alt="" className='w-28 h-28 rounded-full' />
                    <div className="flex font-pop flex-col gap-2">
                        <h2 className='text-xl font-semibold'>Liam Ridley</h2>
                        <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                    </div>
                    <div className="flex font-pop flex-col gap-2">
                        <h2 className='text-xl font-semibold'>Transaction Amount</h2>
                        <p>$150</p>
                    </div>
                    <div className="flex font-pop flex-col gap-2">
                        <h2 className='text-xl font-semibold'>Transaction Type</h2>
                        <p>Withdraw</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-6 my-4">
                    <div className="flex flex-col gap-2 font-pop">
                        <h2 className='font-medium text-lg'>Currency</h2>
                        <p>US Dollar</p>
                    </div>
                    <div className="flex flex-col gap-2 font-pop">
                        <h2 className='font-medium text-lg'>Location</h2>
                        <p>Santa Ana, Illinois 85486</p>
                    </div>
                    <div className="flex flex-col gap-2 font-pop">
                        <h2 className='font-medium text-lg'>Currency</h2>
                        <p>US Dollar</p>
                    </div>
                    <div className="flex flex-col gap-2 font-pop">
                        <h2 className='font-medium text-lg'>Device</h2>
                        <p>I-Phone</p>
                    </div>
                    <div className="flex flex-col gap-2 font-pop">
                        <h2 className='font-medium text-lg'>Receiving Account</h2>
                        <p>PayPaal</p>
                    </div>
                    <div className="flex flex-col gap-2 font-pop">
                        <h2 className='font-medium text-lg'>Time</h2>
                        <p>5:00 PM 10 DEC 2024</p>
                    </div>
                    <div className="flex flex-col gap-2 font-pop">
                        <h2 className='font-medium text-lg'>Verfied By</h2>
                        <p>Email</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogDetail