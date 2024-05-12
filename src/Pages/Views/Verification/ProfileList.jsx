import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { MdDelete, MdEdit } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const ProfileList = () => {

    const navigate = useNavigate()

    const Data = [
        {
            "Email": "AlbertWatson.@gmail.com",
            "User": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            "Verification": "Pending",
            "Date": "10 Dec"
        },
        {
            "Email": "AlbertWatson.@gmail.com",
            "User": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            "Verification": "Approved",
            "Date": "10 Dec"
        },
        {
            "Email": "AlbertWatson.@gmail.com",
            "User": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            "Verification": "Decliend",
            "Date": "10 Dec"
        },
        {
            "Email": "AlbertWatson.@gmail.com",
            "User": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            "Verification": "Pending",
            "Date": "10 Dec"
        },
        {
            "Email": "AlbertWatson.@gmail.com",
            "User": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            "Verification": "Approved",
            "Date": "10 Dec"
        },
        {
            "Email": "AlbertWatson.@gmail.com",
            "User": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            "Verification": "Decliend",
            "Date": "10 Dec"
        },
        {
            "Email": "AlbertWatson.@gmail.com",
            "User": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            "Verification": "Pending",
            "Date": "10 Dec"
        },
        {
            "Email": "AlbertWatson.@gmail.com",
            "User": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            "Verification": "Approved",
            "Date": "10 Dec"
        },
        {
            "Email": "AlbertWatson.@gmail.com",
            "User": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            "Verification": "Decliend",
            "Date": "10 Dec"
        }
    ]


    return (
        <div className="">
            <div className="flex flex-col gap-4 lg:flex-row justify-between font-pop lg:items-center">
                <div className="flex gap-2 md:gap-6 items-center">
                    <h3 className='text-gray-400 text-sm md:text-lg font-medium'>Total 1200 Users</h3>
                    <div className="bg-gray-300 rounded-2xl px-1 md:px-3">
                        <select
                            name=""
                            id=""
                            className={`bg-transparent border-none outline-none 
                                    focus:outline-none focus:border-none focus:outline-transparent
                                    active:border-none active:outline-none text-sm md:text-lg font-normal
                            `}
                        >
                            <option value="">Pending</option>
                            <option value="">Verified</option>
                            <option value="">Blocked</option>
                        </select>
                    </div>
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
                <table className='w-full border-spacing-y-4 border-separate'>
                    <thead>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">User</th>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Email</th>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Verification</th>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Registration Date</th>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Actions</th>
                    </thead>
                    <tbody>
                        {Data?.map((item, index) => (
                            <tr key={index} onClick={() => { navigate("/admin-dashboard/verification/profile-detail") }} className='cursor-pointer'>
                                <td class="px-2 rounded-l-2xl md:px-6 bg-white my-3 text-base md:text-lg font-semibold py-3 text-left w-max min-w-[30%]">
                                    <div className="flex font-medium flex-row gap-2 items-center">
                                        <img src={item.User?.img} alt="" className='w-8 h-8 rounded-full' />
                                        <h2 className='w-max'>{item.User?.Name}</h2>
                                    </div>
                                </td>
                                <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 font-normal text-left ">
                                    <h2 className='w-max'>{item?.Email}</h2>
                                </td>
                                <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 text-left font-semibold ">
                                    <div
                                        className={`
                                            py-2 px-4 rounded-lg border-2 w-max font-medium
                                            ${item.Verification == "Decliend" ? "bg-[#FCEBEC] border-[#DD3242] text-[#DD3242]"
                                                : item.Verification == "Pending" ? "bg-[#F9B754]/30 border-[#F9B754] text-[#F9B754]"
                                                    : "bg-[#EFFBF1] border-[#63D577] text-[#63D577]"}
                                        `}
                                    >
                                        {item?.Verification}
                                    </div>
                                </td>
                                <td class="px-2 md:px-6 text-gray-400 bg-white my-3 py-1 md:py-3 text-left ">
                                    <h2 className='w-max'>{item.Date}</h2>
                                </td>
                                <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 text-left rounded-r-2xl">
                                    <div className="flex gap-2 items-center">
                                        <MdEdit className='text-primarygreen text-lg' />
                                        <MdDelete className='text-red-500 text-lg' />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProfileList