import { Pagination } from '@mui/material'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

const UserTransactions = () => {

    const Data = [
        {
            "Price": "183",
            "Rciver": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            "Date": "10 Dec",
            "Controls": "Release funds",
            "Order": "#37873817182718",
            "Administrative": "funds issues"
        },
        {
            "Price": "183",
            "Rciver": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            "Date": "10 Dec",
            "Controls": "Hold funds",
            "Order": "#37873817182718",
            "Administrative": "funds issues"
        },
        {
            "Price": "183",
            "Rciver": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            "Date": "10 Dec",
            "Controls": "Release funds",
            "Order": "#37873817182718",
            "Administrative": "funds issues"
        },
        {
            "Price": "183",
            "Rciver": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            "Date": "10 Dec",
            "Controls": "Hold funds",
            "Order": "#37873817182718",
            "Administrative": "funds issues"
        },
        {
            "Price": "183",
            "Rciver": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            "Date": "10 Dec",
            "Controls": "Release funds",
            "Order": "#37873817182718",
            "Administrative": "funds issues"
        },
        {
            "Price": "183",
            "Rciver": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            "Date": "10 Dec",
            "Controls": "Hold funds",
            "Order": "#37873817182718",
            "Administrative": "funds issues"
        },
        {
            "Price": "183",
            "Rciver": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            "Date": "10 Dec",
            "Controls": "Release funds",
            "Order": "#37873817182718",
            "Administrative": "funds issues"
        },
        {
            "Price": "183",
            "Rciver": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            "Date": "10 Dec",
            "Controls": "Hold funds",
            "Order": "#37873817182718",
            "Administrative": "funds issues"
        },
        {
            "Price": "183",
            "Rciver": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            "Date": "10 Dec",
            "Controls": "Release funds",
            "Order": "#37873817182718",
            "Administrative": "funds issues"
        },
        {
            "Price": "183",
            "Rciver": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            "Date": "10 Dec",
            "Controls": "Hold funds",
            "Order": "#37873817182718",
            "Administrative": "funds issues"
        }
    ]

    return (
        <div>
            <div className="flex gap-4 items-center mb-6">
                <img src="../../assets/Prop/avatar.png" alt="" className='w-20 h-20 rounded-full' />
                <div className="flex font-pop flex-col gap-1">
                    <h2 className='text-xl font-semibold'>Jane Cooper</h2>
                    <p className='text-lightGrey'>Germany</p>
                </div>
            </div>
            <div>
                <div className="flex flex-col gap-4 lg:flex-row justify-between font-pop lg:items-center">
                    <div className="flex gap-2 md:gap-6 items-center">
                        <h3 className='text-gray-400 text-sm md:text-lg font-medium'>Total 1200 Transaction</h3>
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
                                    Date
                                </div>
                            </th>
                            <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">
                                <div className="w-max">
                                    Transaction To
                                </div>
                            </th>
                            <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">
                                <div className="w-max">
                                    Finanial Control
                                </div>
                            </th>
                            <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">
                                <div className="w-max">
                                    Order
                                </div>
                            </th>
                            <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">
                                <div className="w-max">
                                    Administrative actions
                                </div>
                            </th>
                            <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">
                                <div className="w-max">
                                    Total
                                </div>
                            </th>
                        </thead>
                        <tbody>
                            {Data?.map((item, index) => (
                                <tr key={index}>
                                    <td class="px-2 md:px-6 rounded-l-2xl font-pop text-sm md:text-base bg-white my-3 py-3 text-left ">
                                        <h2 className='font-semibold w-max'>
                                            {item.Date}
                                        </h2>
                                    </td>
                                    <td class="px-2 md:px-6 bg-white my-3 text-base md:text-lg font-semibold py-3 text-left w-max min-w-[30%]">
                                        <div className="flex gap-2 w-max items-center">
                                            <img src={item?.Rciver?.img} alt="" className='w-8 h-8 rounded-full' />
                                            <h2 className='font-semibold w-max'>
                                                {item?.Rciver?.Name}
                                            </h2>
                                        </div>
                                    </td>
                                    <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 font-normal text-left ">
                                        <div
                                            className={`
                                            py-1 px-2 rounded-lg border-2 w-max font-medium
                                            ${item.Controls == "Hold funds" ? "bg-[#FCEBEC] border-[#DD3242] text-[#DD3242]"
                                                    : "bg-[#EFFBF1] border-[#63D577] text-[#63D577]"}
                                        `}
                                        >
                                            {item.Controls}
                                        </div>
                                    </td>
                                    <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 text-left font-semibold ">
                                        <h2 className='w-max'>{item?.Order}</h2>
                                    </td>
                                    <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 text-left ">
                                        <h2 className='w-max'>{item?.Administrative}</h2>
                                    </td>
                                    <td class="px-2 md:px-6 rounded-r-2xl text-gray-400 bg-white my-3 py-1 md:py-3 text-left ">
                                        <h2 className='w-max'>${item?.Price}</h2>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserTransactions