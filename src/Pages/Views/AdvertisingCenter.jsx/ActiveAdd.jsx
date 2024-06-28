import React, { useState } from 'react'
import { ServiceListData } from '../../../assets/Data/SubCategory'
import { HiDotsVertical } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom';

const ActiveAdd = () => {
    const [ActionModel, setActionModel] = useState(null);
    const navigate=useNavigate()
    const Data = [
        {
            adid: '43567',
            date: '10 DEC 2024',
            Marketplace: 'Marketplace',
            Category: 'Logo & Brand->',
            useId: '45678',
            boosted: 'no',
            views: '4567899',
            sales: '85',
            status: "ACTIVE"
        },
        {
            adid: '43567',
            date: '10 DEC 2024',
            Marketplace: 'Services',
            Category: 'Logo & Brand->',
            useId: '45678',
            boosted: 'Yes',
            views: '4567899',
            sales: '85',
            status: "InACTIVE"
        },
        {
            adid: '43567',
            date: '10 DEC 2024',
            Marketplace: 'Marketplace',
            Category: 'Logo & Brand->',
            useId: '45678',
            boosted: 'no',
            views: '4567899',
            sales: '85',
            status: "ACTIVE"
        },
        {
            adid: '43567',
            date: '10 DEC 2024',
            Marketplace: 'Services',
            Category: 'Logo & Brand->',
            useId: '45678',
            boosted: 'no',
            views: '4567899',
            sales: '85',
            status: "InACTIVE"
        },
        {
            adid: '43567',
            date: '10 DEC 2024',
            Marketplace: 'Services',
            Category: 'Logo & Brand->',
            useId: '45678',
            boosted: 'no',
            views: '4567899',
            sales: '85',
            status: "ACTIVE"
        },
        {
            adid: '43567',
            date: '10 DEC 2024',
            Marketplace: 'Services',
            Category: 'Logo & Brand->',
            useId: '45678',
            boosted: 'no',
            views: '4567899',
            sales: '85',
            status: "ACTIVE"
        },
        {
            adid: '43567',
            date: '10 DEC 2024',
            Marketplace: 'Services',
            Category: 'Logo & Brand->',
            useId: '45678',
            boosted: 'no',
            views: '4567899',
            sales: '85',
            status: "InACTIVE"
        },
        {
            adid: '43567',
            date: '10 DEC 2024',
            Marketplace: 'Services',
            Category: 'Logo & Brand->',
            useId: '45678',
            boosted: 'no',
            views: '4567899',
            sales: '85',
            status: "ACTIVE"
        },
        {
            adid: '43567',
            date: '10 DEC 2024',
            Marketplace: 'Services',
            Category: 'Logo & Brand->',
            useId: '45678',
            boosted: 'yes',
            views: '4567899',
            sales: '85',
            status: "ACTIVE"
        },
    ]

    return (
        <div>
            <div className="flex flex-col gap-4 lg:flex-row justify-between font-pop lg:items-center">
                <h3 className='text-gray-400 text-sm md:text-lg font-medium'>Total 12 Active Ad's</h3>
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

            <div className='bg-transparent overflow-x-auto font-pop w-full my-2 md:my-6'>
                <table className='w-full border-spacing-y-4 border-separate'>
                    <thead>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">All</th>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Ad ID</th>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">DATE</th>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">MARKETPLACE</th>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">CATEGORY</th>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">User-ID</th>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Boosted</th>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Views</th>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Sales</th>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Status</th>
                    </thead>
                    <tbody>
                        {Data?.map((item, index) => (
                            <tr key={index} className='cursor-pointer'>
                                <td class="px-2 rounded-l-2xl md:px-6 bg-white my-3 text-base md:text-lg font-semibold py-3 text-left w-max min-w-[30%]">
                                    <div className="flex font-medium w-max flex-row gap-2 items-center">
                                        <button
                                            onClick={() => {
                                                if (item?.Marketplace == "Marketplace") {
                                                    navigate("/admin-dashboard/add-center/market-add-detail")
                                                } else {
                                                    navigate("/admin-dashboard/add-center/service-add-detail")
                                                }
                                            }}
                                            className='bg-primarygreen border-2 border-primarygreen py-2 px-4 text-white font-pop rounded-full hover:bg-transparent hover:text-primarygreen ease-in-out duration-300 w-max'
                                        >
                                            View Detail
                                        </button>                                    </div>
                                </td>
                                <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 font-normal text-left ">
                                    <h2 className='w-max'>{item?.adid}</h2>
                                </td>
                                <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 font-normal text-left ">
                                    <h2 className='w-max'>{item?.date}</h2>
                                </td>
                                <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 font-normal text-left ">
                                    <h2 className='w-max'>{item?.Marketplace}</h2>
                                </td>
                                <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 font-normal text-left ">
                                    <h2 className='w-max'>{item?.Category}</h2>
                                </td>
                                <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 font-normal text-left ">
                                    <h2 className='w-max'>{item?.useId}</h2>
                                </td>
                                <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 text-left font-semibold ">
                                    <h2 className={`'w-max' ${item.boosted=="no"?'text-red-600':'text-green-600'}`}>{item?.boosted}</h2>
                                </td>
                                <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 text-left ">
                                    <h2 className='w-max'>{item?.views}</h2>
                                </td>
                                <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 font-normal text-left ">
                                    <h2 className='w-max'>{item?.sales}</h2>
                                </td>
                                <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 font-normal text-left rounded-r-xl ">
                                    <h2 className={`'w-max' ${item.status=="ACTIVE"?'text-green-600':'text-red-600'}`}>{item?.status}</h2>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ActiveAdd