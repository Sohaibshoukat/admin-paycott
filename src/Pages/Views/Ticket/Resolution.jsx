import React from 'react'

const Resolution = () => {
    return (
        <div className='w-[95%] m-auto py-10'>
            <div className="flex flex-col gap-4">

                <div className="flex flex-col gap-2 font-pop">
                    <h3 className='text-lg font-medium text-lightGrey'>Documents Authenticity Check:</h3>
                    <div className="bg-white py-6 px-4 rounded-xl">
                        <div className="flex justify-end">
                            <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className={`
                                        relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                                        peer-focus:ring-primarygreen/30 dark:peer-focus:ring-primarygreen rounded-full peer 
                                        dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                                        peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
                                        after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 
                                        after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primarygreen
                                    `}
                                >
                                </div>
                            </label>
                        </div>
                        <div className="flex gap-2 flex-wrap items-center">
                            <img src="../../../assets/Prop/IDCard.png" alt="" className='w-64 h-40' />
                            <img src="../../../assets/Prop/IDCard.png" alt="" className='w-64 h-40' />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 font-pop">
                    <h3 className='text-lg font-medium text-lightGrey'>Resolution Option</h3>
                    <div className="bg-white py-6 px-4 rounded-xl flex flex-col gap-6">
                        <div className="relative border-b-2 border-light rounded-xl py-4 px-4">
                            <div className="flex justify-between font-pop text-black font-semibold flex-row gap-2 items-center">
                                <h4>Refund to the buyer</h4>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <div className={`
                                        relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                                        peer-focus:ring-primarygreen/30 dark:peer-focus:ring-primarygreen rounded-full peer 
                                        dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                                        peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
                                        after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 
                                        after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primarygreen
                                    `}
                                    >
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="relative border-b-2 border-light rounded-xl py-4 px-4">
                            <div className="flex justify-between font-pop text-black font-semibold flex-row gap-2 items-center">
                                <h4>Release of funds to the seller</h4>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <div className={`
                                        relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                                        peer-focus:ring-primarygreen/30 dark:peer-focus:ring-primarygreen rounded-full peer 
                                        dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                                        peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
                                        after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 
                                        after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primarygreen
                                    `}
                                    >
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="relative border-b-2 border-light rounded-xl py-4 px-4">
                            <div className="flex justify-between font-pop text-black font-semibold flex-row gap-2 items-center">
                                <h4>Partial refund or adjustment of payment</h4>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <div className={`
                                        relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                                        peer-focus:ring-primarygreen/30 dark:peer-focus:ring-primarygreen rounded-full peer 
                                        dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                                        peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
                                        after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 
                                        after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primarygreen
                                    `}
                                    >
                                    </div>
                                </label>
                            </div>

                            <div className="relative border-2 mt-6 border-light rounded-xl py-4 px-4">
                                <div className="absolute -top-3 px-2 left-3 bg-white">Partial refund</div>
                                <div className="flex font-pop  flex-row gap-2 items-center">
                                    <input
                                        type='number'
                                        name=""
                                        id=""
                                        placeholder='Enter adjustment of payment value'
                                        className="border-none outline-none w-full px-4 font-pop"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <button
                    className='bg-primarygreen border-2 border-primarygreen py-2 px-4 rounded-full text-white hover:text-primarygreen hover:bg-transparent ease-in-out duration-300'
                >
                    Finish the Resolution
                </button>

            </div>
        </div>
    )
}

export default Resolution