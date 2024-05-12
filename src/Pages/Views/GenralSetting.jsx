import React, { useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { Countries, Currency, language, navigationMenu } from '../../assets/Data/Navigation'
import Select from 'react-select'


const GenralSetting = () => {

    return (
        <div className="w-[95%] m-auto  pt-10 pb-14">
            <div className='flex flex-col gap-4'>


                <div className="flex flex-col gap-2 font-pop">
                    <h3 className='text-lg font-medium text-lightGrey'>Header Settings</h3>
                    <div className="bg-white flex flex-col gap-6 py-6 px-4 rounded-xl">
                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-3 bg-white">Navigation pages</div>
                            <div className="flex font-pop  flex-row gap-2 items-center">
                                <Select
                                    options={navigationMenu}
                                    isMulti
                                    name="colors"
                                    className="basic-multi-select border-none outline-none w-full px-4 font-pop"
                                    classNamePrefix="select"
                                />
                            </div>

                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 font-pop">
                    <h3 className='text-lg font-medium text-lightGrey'>Footer Settings</h3>
                    <div className="bg-white flex flex-col gap-6 py-6 px-4 rounded-xl">
                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-3 bg-white">Footer Menu</div>
                            <div className="flex font-pop  flex-row gap-2 items-center">
                                <Select
                                    options={navigationMenu}
                                    isMulti
                                    name="colors"
                                    className="basic-multi-select border-none outline-none w-full px-4 font-pop"
                                    classNamePrefix="select"
                                />
                            </div>

                        </div>
                    </div>
                </div>


                <div className="flex flex-col gap-2 font-pop">
                    <h3 className='text-lg font-medium text-lightGrey'>Currency Settings</h3>
                    <div className="bg-white flex flex-col gap-6 py-6 px-4 rounded-xl">
                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-3 bg-white">Currency</div>
                            <div className="flex font-pop  flex-row gap-2 items-center">
                                <Select
                                    options={Currency}
                                    isMulti
                                    name="colors"
                                    className="basic-multi-select border-none outline-none w-full px-4 font-pop"
                                    classNamePrefix="select"
                                />
                            </div>

                        </div>
                    </div>
                </div>


                <div className="flex flex-col gap-2 font-pop">
                    <h3 className='text-lg font-medium text-lightGrey'>Country Settings</h3>
                    <div className="bg-white flex flex-col gap-6 py-6 px-4 rounded-xl">
                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-3 bg-white">Country Selection</div>
                            <div className="flex font-pop  flex-row gap-2 items-center">
                                <Select
                                    options={Countries}
                                    isMulti
                                    name="colors"
                                    className="basic-multi-select border-none outline-none w-full px-4 font-pop"
                                    classNamePrefix="select"
                                />
                            </div>

                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 font-pop">
                    <h3 className='text-lg font-medium text-lightGrey'>Language Settings</h3>
                    <div className="bg-white flex flex-col gap-6 py-6 px-4 rounded-xl">
                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-3 bg-white">Language Selection</div>
                            <div className="flex font-pop  flex-row gap-2 items-center">
                                <Select
                                    options={language}
                                    isMulti
                                    name="colors"
                                    className="basic-multi-select border-none outline-none w-full px-4 font-pop"
                                    classNamePrefix="select"
                                />
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

export default GenralSetting