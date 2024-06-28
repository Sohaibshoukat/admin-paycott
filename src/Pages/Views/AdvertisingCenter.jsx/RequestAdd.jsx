import React from 'react'
import { useNavigate } from 'react-router-dom'

const RequestAdd = () => {

    const navigate = useNavigate()

    const Data = [
        {
            "Email": "AlbertWatson.@gmail.com",
            "User": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            ID:"4455674",
            Marketplace:"Marketplace",
            Category:"Vehicles->Mercedes Benz->E220 D",
            Addid:"482734",
            Status:"Waiting",
            "Date": "10 Dec 2024"
        },
        {
            "Email": "AlbertWatson.@gmail.com",
            "User": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            ID:"4455674",
            Marketplace:"Services",
            Category:"Logo & Brand->Logo Design->3D Logo",
            Addid:"482734",
            Status:"Waiting",
            "Date": "10 Dec 2024"
        },
        {
            "Email": "AlbertWatson.@gmail.com",
            "User": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            ID:"4455674",
            Marketplace:"Marketplace",
            Category:"Vehicles->Mercedes Benz->E220 D",
            Addid:"482734",
            Status:"Waiting",
            "Date": "10 Dec 2024"
        },
        {
            "Email": "AlbertWatson.@gmail.com",
            "User": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            ID:"4455674",
            Marketplace:"Services",
            Category:"Logo & Brand->Logo Design->3D Logo",
            Addid:"482734",
            Status:"Waiting",
            "Date": "10 Dec 2024"
        },
        {
            "Email": "AlbertWatson.@gmail.com",
            "User": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            ID:"4455674",
            Marketplace:"Marketplace",
            Category:"Vehicles->Mercedes Benz->E220 D",
            Addid:"482734",
            Status:"Waiting",
            "Date": "10 Dec 2024"
        },
        {
            "Email": "AlbertWatson.@gmail.com",
            "User": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            ID:"4455674",
            Marketplace:"Services",
            Category:"Logo & Brand->Logo Design->3D Logo",
            Addid:"482734",
            Status:"Waiting",
            "Date": "10 Dec 2024"
        },
        {
            "Email": "AlbertWatson.@gmail.com",
            "User": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            ID:"4455674",
            Marketplace:"Marketplace",
            Category:"Vehicles->Mercedes Benz->E220 D",
            Addid:"482734",
            Status:"Waiting",
            "Date": "10 Dec 2024"
        },
        {
            "Email": "AlbertWatson.@gmail.com",
            "User": {
                "img": "../../assets/Prop/avatar.png",
                "Name": "Kristin Watson"
            },
            ID:"4455674",
            Marketplace:"Services",
            Category:"Logo & Brand->Logo Design->3D Logo",
            Addid:"482734",
            Status:"Waiting",
            "Date": "10 Dec 2024"
        },
    ]

    return (
        <div>
            <div className="flex flex-col gap-4 lg:flex-row justify-between font-pop lg:items-center">
                <h3 className='text-gray-400 text-sm md:text-lg font-medium'>Total 12 New Ad's Request</h3>
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
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">USER</th>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">USER-ID</th>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">DATE</th>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">MARKETPLACE</th>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">CATEGORY</th>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">AD-ID</th>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">STATUS</th>
                        <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">ACTION</th>
                    </thead>
                    <tbody>
                        {Data?.map((item, index) => (
                            <tr key={index} className='cursor-pointer'>
                                <td class="px-2 rounded-l-2xl md:px-6 bg-white my-3 text-base md:text-lg font-semibold py-3 text-left w-max min-w-[30%]">
                                    <div className="flex font-medium w-max flex-row gap-2 items-center">
                                        <img src={item.User?.img} alt="" className='w-8 h-8 rounded-full' />
                                        <h2 className='w-max'>{item.User?.Name}</h2>
                                    </div>
                                </td>
                                <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 font-normal text-left ">
                                    <h2 className='w-max'>{item?.ID}</h2>
                                </td>
                                <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 font-normal text-left ">
                                    <h2 className='w-max'>{item?.Date}</h2>
                                </td>
                                <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 font-normal text-left ">
                                    <h2 className='w-max'>{item?.Marketplace}</h2>
                                </td>
                                <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 font-normal text-left ">
                                    <h2 className='w-max'>{item?.Category}</h2>
                                </td>
                                <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 font-normal text-left ">
                                    <h2 className='w-max'>{item?.Addid}</h2>
                                </td>
                                <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 text-left font-semibold ">
                                    <div
                                        className={`
                                            py-2 px-4 rounded-lg border-2 w-max font-medium
                                            ${item.Verification == "Waiting" ? "bg-[#FCEBEC] border-[#DD3242] text-[#DD3242]"
                                                : item.Verification == "Pending" ? "bg-[#F9B754]/30 border-[#F9B754] text-[#F9B754]"
                                                    : "bg-[#EFFBF1] border-[#63D577] text-[#63D577]"}
                                        `}
                                    >
                                        {item?.Status}
                                    </div>
                                </td>
                                <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 text-left rounded-r-2xl">
                                    <button 
                                        onClick={()=>{
                                            if(item?.Marketplace=="Marketplace"){
                                                navigate("/admin-dashboard/add-center/market-add-detail") 
                                            }else{
                                                navigate("/admin-dashboard/add-center/service-add-detail") 
                                            }
                                        }}
                                        className='bg-primarygreen border-2 border-primarygreen py-2 px-4 text-white font-pop rounded-full hover:bg-transparent hover:text-primarygreen ease-in-out duration-300 w-max'
                                    >
                                        View Detail
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RequestAdd