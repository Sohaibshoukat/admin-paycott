import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { AdsData, ServiceListData } from '../../../assets/Data/SubCategory'
import { HiDotsVertical } from 'react-icons/hi'

const ProductAdds = () => {

    const [ActionModel, setActionModel] = useState(false)

    return (
        <div className='w-[95%] m-auto py-10'>
            <div className="flex flex-col gap-4 lg:flex-row justify-between font-pop lg:items-center">
                <h3 className='text-gray-400 text-sm md:text-lg font-medium'>Total 12 Offers</h3>
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
                        <option value="">Ad's Status</option>
                        <option value="">In Review Ad's</option>
                        <option value="">Active Ad's</option>
                        <option value="">Archive Ad's</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6 my-6">
                {AdsData?.map((item, index) => (
                    <div
                        className="bg-white font-pop h-fit rounded-2xl py-4 px-4 cursor-pointer"
                        key={index}
                    >
                        <div className="flex flex-col md:flex-row gap-4 md:gap-2 justify-between">
                            <div className='w-full lg:w-auto h-40 md:h-auto'>
                                <img src={item.img} alt="" className='rounded-2xl w-full object-cover h-full' />
                            </div>
                            <div className="flex  flex-col gap-4">
                                <div className="flex font-pop flex-col gap-2">
                                    <div className="flex gap-2 w-max items-center">
                                        <img src={item.userimg} alt="" className='w-8 h-8 rounded-full' />
                                        <h3 className='font-medium  w-max'>{item.Name}</h3>
                                    </div>
                                    <div className="bg-primarygreen/30 w-fit font-pop py-1 px-2 rounded-3xl h-fit font-medium text-lg">
                                        ${item.Price}
                                    </div>
                                </div>
                                <h2 className='text-xl font-semibold'>{item.Head}</h2>
                            </div>
                            <div className="flex gap-2">
                                <div
                                    className="relative"
                                    onClick={() => {
                                        if (index == ActionModel) {
                                            setActionModel(null)
                                        } else {
                                            setActionModel(index)
                                        }
                                    }}
                                >
                                    <HiDotsVertical className='text-2xl text-black' />
                                    {ActionModel == index &&
                                        <div className="bg-white rounded-lg absolute bottom-[-300%] right-0 py-2 px-6 font-pop text-lg font-medium shadow-xl">
                                            <h2>Accept</h2>
                                            <h2>Decline</h2>
                                        </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductAdds