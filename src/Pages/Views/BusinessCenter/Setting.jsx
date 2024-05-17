import React from 'react'

const Setting = () => {

    return (
        <div>
            <div className='flex flex-col gap-4'>
                <div className="flex flex-col gap-2 font-pop">
                    <h3 className='text-lg font-medium text-lightGrey'>Business Account Fees</h3>
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


                <button
                    className='bg-primarygreen font-pop border-2 border-primarygreen py-2 px-4 rounded-full text-white hover:text-primarygreen hover:bg-transparent ease-in-out duration-300'
                >
                    Update
                </button>

            </div>
        </div>
    )
}

export default Setting