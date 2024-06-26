import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const CloseChat = () => {
    const navigate = useNavigate()

    const Data = [
        {
            ID: "100",
            Sender: {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            Assigned: "Inzamam Yousaf",
            Status: "Resolved",
            Date: "10 Dec"
        },
        {
            ID: "100",
            Sender: {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            Assigned: "Inzamam Yousaf",
            Status: "Resolved",
            Date: "10 Dec"
        },
        {
            ID: "100",
            Sender: {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            Assigned: "Inzamam Yousaf",
            Status: "Resolved",
            Date: "10 Dec"
        },
        {
            ID: "100",
            Sender: {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            Assigned: "Inzamam Yousaf",
            Status: "Resolved",
            Date: "10 Dec"
        },
        {
            ID: "100",
            Sender: {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            Assigned: "Inzamam Yousaf",
            Status: "Resolved",
            Date: "10 Dec"
        },
    ]

    return (
        <div className="w-[95%] m-auto  pt-10 pb-14">
            <div className="flex flex-col gap-4 lg:flex-row justify-between font-pop lg:items-center">
                <div className="flex gap-2 md:gap-6 items-center">
                    <h3 className='text-gray-400 text-sm md:text-lg font-medium'>Total 17 Close Request</h3>
                </div>
                <div className="flex gap-3 items-center bg-gray-300 rounded-full py-2 px-4">
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
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">ID</th>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Sender</th>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Resolved By</th>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Status</th>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Date</th>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Chat</th>
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
                                        <img src={item?.Sender?.img} alt="" className='w-8 h-8 rounded-full' />
                                        <h2 className='font-semibold'>
                                            {item?.Sender?.Name}
                                        </h2>
                                    </div>
                                </td>
                                <td class="px-2 md:px-6 font-pop text-sm md:text-base bg-white my-3 py-3 text-left ">
                                    <h2 className='font-semibold w-max'>
                                        {item.Assigned}
                                    </h2>
                                </td>
                                <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 text-left font-semibold ">
                                    <div
                                        className={`
                                            py-2 px-4 rounded-lg border-2 w-max font-medium
                                            ${item.Status == "Pending" ? "bg-[#3992F2]/10 border-[#3992F2] text-[#3992F2]"
                                                : item.Status == "Under review" ? "bg-[#F9B754]/10 border-[#F9B754] text-[#F9B754]"
                                                    : "bg-[#EFFBF1] border-[#63D577] text-[#63D577]"}
                                        `}
                                    >
                                        {item?.Status}
                                    </div>
                                </td>
                                <td class="px-2 md:px-6 font-pop text-sm md:text-base bg-white my-3 py-3 text-left ">
                                    <h2 className='font-semibold w-max'>
                                        {item.Date}
                                    </h2>
                                </td>
                                <td class="px-2 md:px-6 rounded-r-2xl text-gray-400 bg-white my-3 py-1 md:py-3 text-left ">
                                    <div className="flex gap-4 font-pop items-center">
                                        <button
                                            className='bg-transparent w-max border-2 border-primarygreen py-2 px-4 rounded-full text-primarygreen hover:text-white hover:bg-primarygreen ease-in-out duration-300'
                                            onClick={() => { navigate("/admin-dashboard/help-center/chat-detail") }}
                                        >
                                            Chats
                                        </button>
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

export default CloseChat