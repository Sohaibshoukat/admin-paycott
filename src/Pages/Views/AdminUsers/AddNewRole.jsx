import React from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'

const AddNewRole = () => {

    const Data = [
        {
            Roles: "Help Center",
            "Date": "10 Dec"
        },
        {
            Roles: "User Manager",
            "Date": "10 Dec"
        },
        {
            Roles: "Verification Center",
            "Date": "10 Dec"
        },
    ]

    const Roles=[
        "User Managment",
        "Header",
        "Super Admin",
        "Admin",
        "Tracking",
        "Verification",
        "Help Center",
    ]


    return (
        <>
            <div className="">
                <div className="flex flex-col gap-4 lg:flex-row justify-between font-pop lg:items-center">
                    <div className="flex gap-2 md:gap-6 items-center">
                        <h3 className='text-gray-400 text-sm md:text-lg font-medium'>Total 4 Roles</h3>
                    </div>
                </div>
                <div className='bg-transparent overflow-x-auto font-pop w-full my-2 md:my-6'>
                    <table className='w-full border-spacing-y-4 border-separate'>
                        <thead>
                            <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Role</th>
                            <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Date</th>
                            <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Actions</th>
                        </thead>
                        <tbody>
                            {Data?.map((item, index) => (
                                <tr key={index} className='cursor-pointer'>
                                    <td class="px-2 rounded-l-2xl md:px-6 bg-white my-3 py-1 md:py-3 text-left font-semibold ">
                                        <h2 className='w-max'>{item?.Roles}</h2>
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
            <div className='font-pop flex flex-col gap-4'>
                <h2 className='text-xl font-semibold'>Add New Role</h2>
                <div>
                    <div className="bg-white flex flex-col gap-4 font-pop rounded-2xl py-4 px-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Role Name</label>
                            <input
                                type="text"
                                placeholder='Enter New Role Name'
                                className='py-2 px-4 rounded-lg border-2 border-light'
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Select Role Authorities</label>
                            <div className="py-4 flex flex-wrap items-center gap-2">
                                {Roles.map((item, index) => (
                                    <div
                                        className={`cursor-pointer border-2 border-light rounded-2xl py-1 px-2 font-pop bg-white`}
                                        key={index}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button
                            className='bg-primarygreen border-2 border-primarygreen py-2 px-4 rounded-full text-white hover:text-primarygreen hover:bg-transparent ease-in-out duration-300'
                        >
                            Add Role
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNewRole