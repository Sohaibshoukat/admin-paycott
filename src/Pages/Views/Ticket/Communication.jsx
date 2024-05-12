import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Communication = () => {
    return (
        <div className='min-h-[inherit] overflow-hidden'>
            <div className="flex flex-col lg:flex-row min-h-[inherit]">
                <div className={`lg:basis-[30%] w-[100%]  lg:h-auto bg-white relative flex flex-col gap-6 py-4 px-6 font-pop `}>
                    <div className="flex flex-col md:flex-row lg:flex-col gap-2">
                        <div className="bg-white border-2 border-[#E9E9E9] py-2 px-4 rounded-2xl">
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row gap-2">
                                    <img src="../../../assets/Prop/avatar.png" alt="" className='rounded-full w-12 h-12' />
                                    <div className="flex flex-col gap-0">
                                        <h2 className='font-medium text-lg'>Buyer</h2>
                                        <p className='text-lightGrey'>Last connect 8 hours ago</p>
                                    </div>
                                </div>
                                <div className="bg-primarygreen w-8 text-center flex flex-col justify-center items-center h-8  rounded-full text-white font-pop">
                                    <h2>1</h2>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border-2 border-[#E9E9E9] py-2 px-4 rounded-2xl">
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row gap-2">
                                    <img src="../../../assets/Prop/avatar.png" alt="" className='rounded-full w-12 h-12' />
                                    <div className="flex flex-col gap-0">
                                        <h2 className='font-medium text-lg'>Seller</h2>
                                        <p className='text-lightGrey'>Last connect 8 hours ago</p>
                                    </div>
                                </div>
                                <div className="bg-primarygreen w-8 text-center flex flex-col justify-center items-center h-8  rounded-full text-white font-pop">
                                    <h2>1</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:basis-[70%] font-pop px-6 py-4">
                    <div className="flex flex-col gap-6 h-[100%] justify-between">
                        <div className="h-[60vh] overflow-y-scroll">
                            <div className="flex flex-col gap-2">
                                <h2 className='text-center text-[#868686]'>09:32 Yesterday</h2>
                                <div className="flex flex-col gap-2">
                                    <div className="bg-lightGrey text-white rounded-xl py-2 px-3 max-w-xs w-fit">
                                        <p className='text-sm md:text-base'>Rhoncus risus purus cursus turpis in aliquet enim dui.</p>
                                    </div>
                                    <div className="flex flex-col self-end gap-1">
                                        <div className="bg-primarygreen self-end text-white rounded-xl py-2 px-3 max-w-xs w-fit">
                                            <p className='text-sm md:text-base'>Rhoncus risus purus cursus turpis in aliquet enim dui.</p>
                                        </div>
                                        <div className="bg-primarygreen self-end text-white rounded-xl py-2 px-3 max-w-xs w-fit">
                                            <p className='text-sm md:text-base'>Rhoncus risus purus cursus turpis in aliquet enim dui.</p>
                                        </div>
                                        <div className="bg-primarygreen self-end text-white rounded-xl py-2 px-3 max-w-xs w-fit">
                                            <div className="flex flex-row gap-2">
                                                <img src="../../../assets/Prop/call.png" alt="" className='w-10 h-10' />
                                                <div className="flex flex-col">
                                                    <h2>Call end</h2>
                                                    <p className='text-sm text-gray-200'>00:39</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-row font-pop justify-between items-center bg-[#ffffff] rounded-3xl py-2 px-4">
                            <div className="flex w-[100%] flex-row items-center gap-2">
                                <img src="../../../assets/Prop/docattach.png" alt="" className='w-8 h-8' />
                                <input
                                    type="text"
                                    placeholder='Message...'
                                    className='text-lg w-[100%] font-normal border-transparent outline-none focus:outline-none focus:border-transparent active:border-transparent active:outline-none bg-transparent'
                                />
                            </div>
                            <img src="../../../assets/Prop/messagesend.png" alt="" className='w-8 h-8' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Communication