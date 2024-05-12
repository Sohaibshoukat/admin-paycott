import React from 'react'
import { Pagination } from '@mui/material'
import { FaSearch } from 'react-icons/fa'

const Media = () => {
    const Data = [
        {
            ID: "100",
            "User": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            "Username": "Albert",
            Email: "Albert.watson@gmail.com",
            IDcardFront: "../../assets/Prop/IDCard.png",
            IDcardBack: "../../assets/Prop/IDCard.png",
            ResidenceRegistration: "../../assets/Prop/IDCard.png",
        },
        {
            ID: "100",
            "User": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            "Username": "Albert",
            Email: "Albert.watson@gmail.com",
            IDcardFront: "../../assets/Prop/IDCard.png",
            IDcardBack: "../../assets/Prop/IDCard.png",
            ResidenceRegistration: "../../assets/Prop/IDCard.png",
        },
        {
            ID: "100",
            "User": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            "Username": "Albert",
            Email: "Albert.watson@gmail.com",
            IDcardFront: "../../assets/Prop/IDCard.png",
            IDcardBack: "../../assets/Prop/IDCard.png",
            ResidenceRegistration: "../../assets/Prop/IDCard.png",
        },
        {
            ID: "100",
            "User": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            "Username": "Albert",
            Email: "Albert.watson@gmail.com",
            IDcardFront: "../../assets/Prop/IDCard.png",
            IDcardBack: "../../assets/Prop/IDCard.png",
            ResidenceRegistration: "../../assets/Prop/IDCard.png",
        },
        {
            ID: "100",
            "User": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            "Username": "Albert",
            Email: "Albert.watson@gmail.com",
            IDcardFront: "../../assets/Prop/IDCard.png",
            IDcardBack: "../../assets/Prop/IDCard.png",
            ResidenceRegistration: "../../assets/Prop/IDCard.png",
        },
        {
            ID: "100",
            "User": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            "Username": "Albert",
            Email: "Albert.watson@gmail.com",
            IDcardFront: "../../assets/Prop/IDCard.png",
            IDcardBack: "../../assets/Prop/IDCard.png",
            ResidenceRegistration: "../../assets/Prop/IDCard.png",
        },
        {
            ID: "100",
            "User": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            "Username": "Albert",
            Email: "Albert.watson@gmail.com",
            IDcardFront: "../../assets/Prop/IDCard.png",
            IDcardBack: "../../assets/Prop/IDCard.png",
            ResidenceRegistration: "../../assets/Prop/IDCard.png",
        },

    ]

    return (
        <div className="w-[95%] m-auto  pt-10 pb-14">
            <div className="flex flex-col gap-4 lg:flex-row justify-between font-pop lg:items-center">
                <div className="flex gap-2 md:gap-6 items-center">
                    <h3 className='text-gray-400 text-sm md:text-lg font-medium'>Total 1200 Records</h3>
                    <Pagination count={3} page={10} variant="outlined" shape="rounded" />
                </div>
                <div className="flex gap-3 items-center bg-gray-300 rounded-full py-1 px-4">
                    <FaSearch className='text-gray-400 text-lg md:text-2xl' />
                    <input
                        type="text"
                        placeholder='Search...'
                        className='bg-transparent text-sm md:text-lg border-none outline-none focus:outline-none focus:border-none active:outline-none '
                    />
                </div>
            </div>
            <div className='bg-transparent overflow-x-auto font-pop w-full my-2 md:my-6'>
                <table className='w-full overflow-x-scroll font-pop border-spacing-y-4 border-separate'>
                    <thead>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">
                            <div className="w-max">
                                ID
                            </div>
                        </th>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">
                            <div className="w-max">
                                User
                            </div>
                        </th>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">
                            <div className="w-max">
                                UserName
                            </div>
                        </th>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">
                            <div className="w-max">
                                Email
                            </div>
                        </th>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">
                            <div className="w-max">
                                ID Card Front
                            </div>
                        </th>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">
                            <div className="w-max">
                                ID Card Back
                            </div>
                        </th>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">
                            <div className="w-max">
                                Residence Registration
                            </div>
                        </th>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase"></th>
                    </thead>
                    <tbody>
                        {Data?.map((item, index) => (
                            <tr key={index}>
                                <td class="px-2 md:px-6 rounded-l-2xl font-pop text-sm md:text-base bg-white my-3 py-3 text-left ">
                                    <h2 className='font-semibold'>
                                        #{item.ID}
                                    </h2>
                                </td>
                                <td class="px-2 md:px-6 bg-white my-3 text-base md:text-lg font-semibold py-3 text-left w-max min-w-[30%]">
                                    <div className="flex w-max gap-2 items-center">
                                        <img src={item?.User?.img} alt="" className='w-8 h-8 rounded-full' />
                                        <h2 className='font-semibold'>
                                            {item?.User?.Name}
                                        </h2>
                                    </div>
                                </td>
                                <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 font-normal text-left ">
                                    <h2 className='w-max font-semibold'>@{item?.Username}</h2>
                                </td>
                                <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 text-left font-semibold ">
                                    <h2 className='w-max font-semibold'>${item?.Email}</h2>
                                </td>
                                <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 text-left ">
                                    <img src={item.IDcardFront} alt="" className='w-20 h-14' />
                                </td>
                                <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 text-left ">
                                    <img src={item.IDcardBack} alt="" className='w-20 h-14' />
                                </td>
                                <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 text-left ">
                                    <img src={item.ResidenceRegistration} alt="" className='w-20 h-14' />
                                </td>
                                <td class="px-2 md:px-6 rounded-r-2xl text-gray-400 bg-white my-3 py-1 md:py-3 text-left ">
                                    <div className='w-8 h-8'>
                                        <img src="../../assets/Prop/download.png" alt=""  />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Media