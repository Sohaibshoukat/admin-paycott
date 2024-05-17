import React from 'react'
import { ServiceListData } from '../../../assets/Data/SubCategory'

const ArchiveAdd = () => {

    return (
        <div>
            <div className="flex flex-col gap-4 lg:flex-row justify-between font-pop lg:items-center">
                <h3 className='text-gray-400 text-sm md:text-lg font-medium'>Total 12 Archive Ad's</h3>
                <div className="flex gap-2 md:gap-6 items-center">
                    <select
                        name=""
                        id=""
                        className={`border-none outline-none  bg-gray-300 rounded-2xl py-2 px-1 md:px-3
                        focus:outline-none focus:border-none focus:outline-transparent
                        active:border-none active:outline-none text-sm md:text-lg font-normal
                        `}
                    >
                        <option value="">Seller Level</option>
                        <option value="">1st Level</option>
                        <option value="">2nd Level</option>
                        <option value="">Business</option>
                    </select>
                    <select
                        name=""
                        id=""
                        className={`border-none outline-none  bg-gray-300 rounded-2xl py-2 px-1 md:px-3
                        focus:outline-none focus:border-none focus:outline-transparent
                        active:border-none active:outline-none text-sm md:text-lg font-normal
                        `}
                    >
                        <option value="">Ad's Type</option>
                        <option value="">Profile Ad's</option>
                        <option value="">Gig Ad's</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6 my-6">
                {ServiceListData?.map((item, index) => (
                    <div
                        className="bg-white rounded-2xl flex flex-col gap-4 font-pop border-2 border-light py-2 px-4"
                        key={index}
                    >
                        <div className="flex flex-row justify-between">
                            <div className="flex gap-2">
                                <div>
                                    <img src={item.img} alt="" className='w-12 h-12 rounded-full' />
                                </div>
                                <div className="flex flex-col gap-0">
                                    <div className="flex flex-row gap-1 items-center">
                                        {item?.badge && <img src="../../Assets/Prop/badge.png" className='w-4 h-4' />}
                                        <h4 className='text-lightGrey'>Level {item.level}</h4>
                                    </div>
                                    <h3 className='text-lg font-semibold'>{item.Name}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row font-pop gap-1">
                            {item.List.slice(0, 2).map((item2, index2) => (
                                <div className='bg-[#EFFBF1] rounded-full py-1 px-2 text-sm' key={index2}>
                                    {item2}
                                </div>
                            ))}
                            {item?.List?.length > 2 && (
                                <div className='bg-[#EFFBF1] rounded-full p-1 text-sm'>
                                    +{item.List?.length - 2}
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className='font-medium '>{item?.Des}</h2>
                            <div className="flex w-full flex-row gap-1">
                                {item.Sample.map((item2, index2) => (
                                    <img src={item2} alt="" className='w-[33%]' key={index2} />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ArchiveAdd