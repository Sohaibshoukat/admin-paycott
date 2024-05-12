import React from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'

const ProfileDetail = () => {
    return (
        <div className='flex flex-col gap-4'>

            <div className="bg-white rounded-xl py-6 px-6">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="relative self-center">
                        <img src={"../../assets/Prop/avatar.png"} alt="" className='w-28 h-28 rounded-full' />
                    </div>
                </div>
                <div className="flex flex-col gap-6 mt-6">
                    <div className="flex font-pop flex-col gap-2">
                        <h2 className='text-xl font-semibold'>Liam Ridley</h2>
                        <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                    </div>
                    <div className="flex font-pop flex-col gap-2">
                        <div className="flex gap-2 items-center">
                            <img src="../../assets/Prop/Mobile.png" alt="" className='w-6 h-6' />
                            <p>(316) 555-0116</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src="../../assets/Prop/Gmail.png" alt="" className='w-6 h-6' />
                            <p>liamridley@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex font-pop flex-col gap-2">
                        <div className="flex gap-2 items-center">
                            <h3 className='text-lg text-lightGrey'>Your Skills</h3>
                            <p className='text-primarygreen text-sm'>Add new</p>
                        </div>
                        <div className="flex flex-wrap gap-2 items-center">
                            <div className="flex gap-2 items-center bg-[#EFFBF1] border-2 border-primarygreen text-primarygreen py-1 px-4 rounded-2xl">
                                Adobe Photoshop
                                <IoCloseCircleOutline className='text-lg' />
                            </div>
                            <div className="flex gap-2 items-center bg-[#EFFBF1] border-2 border-primarygreen text-primarygreen py-1 px-4 rounded-2xl">
                                Adobe Photoshop
                                <IoCloseCircleOutline className='text-lg' />
                            </div>
                            <div className="flex gap-2 items-center bg-[#EFFBF1] border-2 border-primarygreen text-primarygreen py-1 px-4 rounded-2xl">
                                Adobe Photoshop
                                <IoCloseCircleOutline className='text-lg' />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2 font-pop">
                <h3 className='text-lg font-medium text-lightGrey'>ID Card</h3>
                <div className="bg-white py-6 px-4 rounded-xl">
                    <div className="flex justify-end">
                        <div className="flex gap-4 font-pop items-center">
                            <button
                                className='bg-transparent border-2 border-primarygreen py-2 px-4 rounded-full text-primarygreen hover:text-white hover:bg-primarygreen ease-in-out duration-300'
                                onClick={() => { navigate("/admin-dashboard/user/chat-history") }}
                            >
                                Preview
                            </button>
                            <button
                                className='bg-primarygreen border-2 border-primarygreen py-2 px-4 rounded-full text-white hover:text-primarygreen hover:bg-transparent ease-in-out duration-300'
                            >
                                Download
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-2 flex-wrap items-center">
                        <img src="../../assets/Prop/IDCard.png" alt="" className='w-64 h-40' />
                        <img src="../../assets/Prop/IDCard.png" alt="" className='w-64 h-40' />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2 font-pop">
                <h3 className='text-lg font-medium text-lightGrey'>Residence Registration</h3>
                <div className="bg-white py-6 px-4 rounded-xl">
                    <div className="flex justify-end">
                        <div className="flex gap-4 font-pop items-center">
                            <button
                                className='bg-transparent border-2 border-primarygreen py-2 px-4 rounded-full text-primarygreen hover:text-white hover:bg-primarygreen ease-in-out duration-300'
                                onClick={() => { navigate("/admin-dashboard/user/chat-history") }}
                            >
                                Preview
                            </button>
                            <button
                                className='bg-primarygreen border-2 border-primarygreen py-2 px-4 rounded-full text-white hover:text-primarygreen hover:bg-transparent ease-in-out duration-300'
                            >
                                Download
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-2 flex-wrap items-center font-pop">
                        <h3 className='text-xl'>No Document Uploaded</h3>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2 font-pop">
                <h3 className='text-lg font-medium text-lightGrey'>Verification Actions</h3>
                <div className="bg-white py-6 px-4 rounded-xl">
                    <div className="relative border-2 border-light rounded-xl py-4 px-4">
                        <div className="absolute -top-3 px-2 left-6 bg-white">Verification</div>
                        <div className="flex font-pop text-black flex-row gap-2 items-center">
                            <select
                                name=""
                                id=""
                                className="border-none outline-none w-full px-4 font-pop"
                            >
                                <option value="">Select Action</option>
                                <option value="Declined">Declined</option>
                                <option value="Approved">Approved</option>
                                <option value="Pending">Pending</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex flex-col gap-2 font-pop">
                <h3 className='text-lg font-medium text-lightGrey'>Request Document</h3>
                <div className="bg-white py-6 px-4 rounded-xl">
                    <div className="relative border-2 border-light rounded-xl py-4 px-4">
                        <div className="absolute -top-3 px-2 left-6 bg-white">Missing Documents</div>
                        <div className="flex font-pop text-black flex-row gap-2 items-center">
                            <input
                                type="text"
                                placeholder='Write documents name which are missing...?'
                                className="border-none outline-none w-full px-4 font-pop"
                            />
                        </div>
                    </div>
                </div>
            </div>


            <button
                className='bg-primarygreen border-2 border-primarygreen py-2 px-4 rounded-full text-white hover:text-primarygreen hover:bg-transparent ease-in-out duration-300'
            >
                Send Request Message
            </button>

        </div>
    )
}

export default ProfileDetail