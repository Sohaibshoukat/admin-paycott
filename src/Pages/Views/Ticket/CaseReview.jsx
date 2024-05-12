import React from 'react'

const CaseReview = () => {
    return (
        <div className='w-[95%] m-auto py-10'>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="bg-white rounded-2xl py-4 px-6 font-pop basis-[50%]">
                        <h3 className='text-lightGrey text-center pb-4 border-b-2 border-light'>Buyer</h3>
                        <div className="py-4 flex-col gap-4">
                            <div className="flex font-pop gap-2 w-max items-center">
                                <img src={'../../../assets/Prop/avatar.png'} alt="" className='w-10 h-10 rounded-full' />
                                <div>
                                    <h2 className='font-semibold w-max'>Jane Cooper</h2>
                                    <p className='text-sm text-lightGrey'>Germany</p>
                                </div>
                            </div>
                            <div className="flex font-pop flex-col gap-2">
                                <h3 className='text-lightGrey'>Documents</h3>
                                <div className="grid grid-cols-2 gap-4 flex-wrap">
                                    <img src="../../../assets/Prop/IDCard.png" alt="" className='h-40' />
                                    <img src="../../../assets/Prop/IDCard.png" alt="" className='h-40' />
                                    <img src="../../../assets/Prop/IDCard.png" alt="" className='h-40' />
                                    <img src="../../../assets/Prop/IDCard.png" alt="" className='h-40' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl py-4 px-6 font-pop basis-[50%]">
                        <h3 className='text-lightGrey text-center pb-4 border-b-2 border-light'>Seller</h3>
                        <div className="py-4 flex-col gap-4">
                            <div className="flex font-pop gap-2 w-max items-center">
                                <img src={'../../../assets/Prop/avatar.png'} alt="" className='w-10 h-10 rounded-full' />
                                <div>
                                    <h2 className='font-semibold w-max'>Jane Cooper</h2>
                                    <p className='text-sm text-lightGrey'>Germany</p>
                                </div>
                            </div>
                            <div className="flex font-pop flex-col gap-2">
                                <h3 className='text-lightGrey'>Documents</h3>
                                <div className="grid grid-cols-2 gap-4 flex-wrap">
                                    <img src="../../../assets/Prop/IDCard.png" alt="" className='h-40' />
                                    <img src="../../../assets/Prop/IDCard.png" alt="" className='h-40' />
                                    <img src="../../../assets/Prop/IDCard.png" alt="" className='h-40' />
                                    <img src="../../../assets/Prop/IDCard.png" alt="" className='h-40' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col gap-2 font-pop">
                    <h3 className='text-lg font-medium text-lightGrey'>Evidence</h3>
                    <div className="bg-white py-6 px-4 rounded-xl">
                        <div className="flex justify-end">
                            <div className="flex gap-4 font-pop items-center">
                                <button
                                    className='bg-transparent border-2 border-primarygreen py-2 px-4 rounded-full text-primarygreen hover:text-white hover:bg-primarygreen ease-in-out duration-300'
                                >
                                    Preview
                                </button>
                                <button
                                    className='bg-primarygreen border-2 border-primarygreen py-2 px-4 rounded-full text-white hover:text-primarygreen hover:bg-transparent ease-in-out duration-300'
                                >
                                    Download
                                </button>
                            </div>
                        </div>
                        <div className="flex gap-2 flex-wrap items-center">
                            <img src="../../../assets/Prop/IDCard.png" alt="" className='w-64 h-40' />
                            <img src="../../../assets/Prop/IDCard.png" alt="" className='w-64 h-40' />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl  py-6 px-6">
                    <div className="flex flex-col gap-6 h-[100%] justify-between">
                        <div className="h-[60vh] overflow-y-scroll">
                            <div className="flex flex-col gap-2">
                                <h2 className='text-center text-[#868686]'>09:32 Yesterday</h2>
                                <div className="flex flex-col gap-2">
                                    <div className="bg-[#E8E8E8] rounded-xl py-2 px-3 max-w-xs w-fit">
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
                        <div className="flex flex-row font-pop justify-between items-center bg-[#E8E8E8] rounded-3xl py-2 px-4">
                            <div className="flex flex-row items-center gap-2">
                                <img src="../../../assets/Prop/docattach.png" alt="" className='w-8 h-8' />
                                <input
                                    type="text"
                                    placeholder='Message...'
                                    className='text-lg font-normal border-transparent outline-none focus:outline-none focus:border-transparent active:border-transparent active:outline-none bg-transparent'
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

export default CaseReview