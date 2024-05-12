import React from 'react'

const PaymentSetting = () => {

    return (
        <div className="w-[95%] m-auto  pt-10 pb-14">
            <div className='flex flex-col gap-4'>

                <div className="flex flex-col gap-2 font-pop">
                    <h3 className='text-lg font-medium text-lightGrey'>Buyer Settings</h3>
                    <div className="bg-white flex flex-col gap-6 py-6 px-4 rounded-xl">
                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-3 bg-white">Profile Image</div>
                            <div className="flex font-pop  flex-row gap-2 items-center">
                                <input
                                    type='number'
                                    name=""
                                    id=""
                                    placeholder='Enter the percentage on specific cents'
                                    className="border-none outline-none w-full px-4 font-pop"
                                />
                            </div>
                        </div>

                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-3 bg-white">Cents</div>
                            <div className="flex font-pop  flex-row gap-2 items-center">
                                <input
                                    type='number'
                                    name=""
                                    id=""
                                    placeholder='Enter the cents value '
                                    className="border-none outline-none w-full px-4 font-pop"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 font-pop">
                    <h3 className='text-lg font-medium text-lightGrey'>Seller Settings</h3>
                    <div className="bg-white flex flex-col gap-6 py-6 px-4 rounded-xl">
                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-3 bg-white">Fee Percentage</div>
                            <div className="flex font-pop  flex-row gap-2 items-center">
                                <input
                                    type='number'
                                    name=""
                                    id=""
                                    placeholder='6%'
                                    className="border-none outline-none w-full px-4 font-pop"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 font-pop">
                    <h3 className='text-lg font-medium text-lightGrey'>Withdraw Settings</h3>
                    <div className="bg-white flex flex-col gap-6 py-6 px-4 rounded-xl">
                        
                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-3 bg-white">Account Type</div>
                            <div className="flex font-pop  flex-row gap-2 items-center">
                                <select
                                    type='number'
                                    name=""
                                    id=""
                                    placeholder='6%'
                                    className="border-none outline-none w-full px-4 font-pop"
                                >
                                    <option value="">Business Account</option>
                                    <option value="">Business Account</option>
                                    <option value="">Business Account</option>
                                </select>
                            </div>
                        </div>

                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-3 bg-white">Account Level</div>
                            <div className="flex font-pop  flex-row gap-2 items-center">
                                <select
                                    type='number'
                                    name=""
                                    id=""
                                    placeholder='6%'
                                    className="border-none outline-none w-full px-4 font-pop"
                                >
                                    <option value="">Premium</option>
                                    <option value="">Premium</option>
                                </select>
                            </div>
                        </div>


                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-3 bg-white">Fee Percentage</div>
                            <div className="flex font-pop  flex-row gap-2 items-center">
                                <input
                                    type='number'
                                    name=""
                                    id=""
                                    placeholder='6%'
                                    className="border-none outline-none w-full px-4 font-pop"
                                />
                            </div>
                        </div>

                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-3 bg-white">Cents</div>
                            <div className="flex font-pop  flex-row gap-2 items-center">
                                <input
                                    type='number'
                                    name=""
                                    id=""
                                    placeholder='Enter the cents value '
                                    className="border-none outline-none w-full px-4 font-pop"
                                />
                            </div>
                        </div>

                    </div>
                </div>


                <div className="flex flex-col gap-2 font-pop">
                    <h3 className='text-lg font-medium text-lightGrey'>Payment Methods</h3>
                    <div className="bg-white py-6 px-4 rounded-xl flex flex-col gap-6">
                        <div className="relative border-b-2 border-light rounded-xl py-4 px-4">
                            <div className="flex justify-between font-pop text-black font-semibold flex-row gap-2 items-center">
                                <h4>Credit Card</h4>
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
                                <h4>PayPal</h4>
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
                                <h4>Ideal</h4>
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
                                <h4>Klarna</h4>
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
                    </div>
                </div>

                <button
                    className='bg-primarygreen border-2 border-primarygreen py-2 px-4 rounded-full text-white hover:text-primarygreen hover:bg-transparent ease-in-out duration-300'
                >
                    Update
                </button>

            </div>
        </div>
    )
}

export default PaymentSetting