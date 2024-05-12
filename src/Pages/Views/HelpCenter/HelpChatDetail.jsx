import React from 'react'

const HelpChatDetail = () => {

    return (
        <>
            <div className='h-[90vh]'>
                <div className="flex flex-col px-6 py-4 gap-6 h-[100%] justify-between">
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
                                            <img src="../../assets/Prop/call.png" alt="" className='w-10 h-10' />
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
                        <div className="flex w-[100%] flex-row items-center gap-2">
                            <img src="../../assets/Prop/docattach.png" alt="" className='w-8 h-8' />
                            <input
                                type="text"
                                placeholder='Message...'
                                className='text-lg w-[100%] font-normal border-transparent outline-none focus:outline-none focus:border-transparent active:border-transparent active:outline-none bg-transparent'
                            />
                        </div>
                        <img src="../../assets/Prop/messagesend.png" alt="" className='w-8 h-8' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HelpChatDetail