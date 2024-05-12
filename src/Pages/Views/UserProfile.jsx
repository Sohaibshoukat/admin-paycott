import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserProfile = () => {

    const navigate = useNavigate()

    return (
        <div className="w-[95%] m-auto  pt-10 pb-14">
            <div className='flex flex-col gap-4'>
                <div className="flex justify-end">
                    <div className="flex gap-4 font-pop items-center">
                        <button
                            className='bg-transparent border-2 border-primarygreen py-2 px-4 rounded-full text-primarygreen hover:text-white hover:bg-primarygreen ease-in-out duration-300'
                            onClick={() => { navigate("/admin-dashboard/user/chat-history") }}
                        >
                            User Chat History
                        </button>
                        <button
                            className='bg-primarygreen border-2 border-primarygreen py-2 px-4 rounded-full text-white hover:text-primarygreen hover:bg-transparent ease-in-out duration-300'
                        >
                            Chat With User
                        </button>
                    </div>
                </div>


                <div className="flex flex-col gap-2 font-pop">
                    <h3 className='text-lg font-medium text-lightGrey'>Profile Picture</h3>
                    <div className="bg-white py-6 px-4 rounded-xl">
                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-6 bg-white">Profile Image</div>
                            <div className="flex font-pop text-primarygreen flex-row gap-2 items-center">
                                <img src="../../assets/Prop/ImageProp.png" alt="" className='w-6 h-6' />
                                <h4>Download Image</h4>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col gap-2 font-pop">
                    <h3 className='text-lg font-medium text-lightGrey'>User  Details</h3>
                    <div className="bg-white py-6 px-4 rounded-xl flex flex-col gap-8">
                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-6 bg-white">User Level</div>
                            <div className="flex justify-between font-pop text-lightGrey flex-row gap-2 items-center">
                                <h4>Level 1</h4>
                                <img src="../../assets/Prop/tick.png" alt="" className='w-6 h-6' />
                            </div>
                        </div>
                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-6 bg-white">User Name</div>
                            <div className="flex justify-between font-pop text-lightGrey flex-row gap-2 items-center">
                                <h4>Kristin Elbert</h4>
                                <img src="../../assets/Prop/tick.png" alt="" className='w-6 h-6' />
                            </div>
                        </div>
                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-6 bg-white">Email</div>
                            <div className="flex justify-between font-pop text-lightGrey flex-row gap-2 items-center">
                                <h4>Kristin.Elbert@gmail.com</h4>
                                <img src="../../assets/Prop/tick.png" alt="" className='w-6 h-6' />
                            </div>
                        </div>
                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-6 bg-white">Registration Date</div>
                            <div className="flex justify-between font-pop text-lightGrey flex-row gap-2 items-center">
                                <h4>19/04/2024</h4>
                                <img src="../../assets/Prop/tick.png" alt="" className='w-6 h-6' />
                            </div>
                        </div>
                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-6 bg-white">Address</div>
                            <div className="flex justify-between font-pop text-lightGrey flex-row gap-2 items-center">
                                <h4>2972 Westheimer Rd. Santa Ana, Illinois 85486 </h4>
                                <img src="../../assets/Prop/tick.png" alt="" className='w-6 h-6' />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col gap-2 font-pop">
                    <h3 className='text-lg font-medium text-lightGrey'>User Status Controls</h3>
                    <div className="bg-white py-6 px-4 rounded-xl flex flex-col gap-6">
                        <div className="relative border-b-2 border-light rounded-xl py-4 px-4">
                            <div className="flex justify-between font-pop text-black font-semibold flex-row gap-2 items-center">
                                <h4>Active</h4>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <div className={`
                                        relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                                        peer-focus:ring-primarygreen/30 dark:peer-focus:ring-primarygreen rounded-full peer 
                                        dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                                        peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
                                        after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 
                                        after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primarygreen
                                    `}
                                    >
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="relative border-b-2 border-light rounded-xl py-4 px-4">
                            <div className="flex justify-between font-pop text-black font-semibold flex-row gap-2 items-center">
                                <h4>In Active</h4>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <div className={`
                                        relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                                        peer-focus:ring-primarygreen/30 dark:peer-focus:ring-primarygreen rounded-full peer 
                                        dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                                        peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
                                        after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 
                                        after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primarygreen
                                    `}
                                    >
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="relative border-b-2 border-light rounded-xl py-4 px-4">
                            <div className="flex justify-between font-pop text-black font-semibold flex-row gap-2 items-center">
                                <h4>Banned</h4>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <div className={`
                                        relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                                        peer-focus:ring-primarygreen/30 dark:peer-focus:ring-primarygreen rounded-full peer 
                                        dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                                        peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
                                        after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 
                                        after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primarygreen
                                    `}
                                    >
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="relative border-b-2 border-light rounded-xl py-4 px-4">
                            <div className="flex justify-between font-pop text-black font-semibold flex-row gap-2 items-center">
                                <h4>Temporarily Suspend</h4>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <div className={`
                                        relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                                        peer-focus:ring-primarygreen/30 dark:peer-focus:ring-primarygreen rounded-full peer 
                                        dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                                        peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
                                        after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 
                                        after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primarygreen
                                    `}
                                    >
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col gap-2 font-pop">
                    <h3 className='text-lg font-medium text-lightGrey'>Verification</h3>
                    <div className="bg-white py-6 px-4 rounded-xl flex flex-col gap-8">
                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-6 bg-white">ID</div>
                            <div className="flex items-center justify-between">
                                <div className="flex font-pop text-primarygreen flex-row gap-2 items-center">
                                    <img src="../../assets/Prop/ImageProp.png" alt="" className='w-6 h-6' />
                                    <h4>MyPassportPhoto.png</h4>
                                </div>
                                <img src="../../assets/Prop/tick.png" alt="" className='w-6 h-6' />
                            </div>
                        </div>
                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-6 bg-white">Residence Registration</div>
                            <div className="flex items-center justify-between">
                                <div className="flex font-pop text-primarygreen flex-row gap-2 items-center">
                                    <img src="../../assets/Prop/ImageProp.png" alt="" className='w-6 h-6' />
                                    <h4>ResidenceRegistration.png</h4>
                                </div>
                                <img src="../../assets/Prop/tick.png" alt="" className='w-6 h-6' />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col gap-2 font-pop">
                    <h3 className='text-lg font-medium text-lightGrey'>Access Controls and Permissions</h3>
                    <div className="bg-white py-6 px-4 rounded-xl flex flex-col gap-6">
                        <div className="relative border-b-2 border-light rounded-xl py-4 px-4">
                            <div className="flex justify-between font-pop text-black font-semibold flex-row gap-2 items-center">
                                <h4>Boost Ad</h4>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <div className={`
                                        relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                                        peer-focus:ring-primarygreen/30 dark:peer-focus:ring-primarygreen rounded-full peer 
                                        dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                                        peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
                                        after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 
                                        after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primarygreen
                                    `}
                                    >
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="relative border-b-2 border-light rounded-xl py-4 px-4">
                            <div className="flex justify-between font-pop text-black font-semibold flex-row gap-2 items-center">
                                <h4>Public</h4>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <div className={`
                                        relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                                        peer-focus:ring-primarygreen/30 dark:peer-focus:ring-primarygreen rounded-full peer 
                                        dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                                        peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
                                        after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 
                                        after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primarygreen
                                    `}
                                    >
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="relative border-b-2 border-light rounded-xl py-4 px-4">
                            <div className="flex justify-between font-pop text-black font-semibold flex-row gap-2 items-center">
                                <h4>Physical  goods</h4>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <div className={`
                                        relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                                        peer-focus:ring-primarygreen/30 dark:peer-focus:ring-primarygreen rounded-full peer 
                                        dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                                        peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
                                        after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 
                                        after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primarygreen
                                    `}
                                    >
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="relative border-b-2 border-light rounded-xl py-4 px-4">
                            <div className="flex justify-between font-pop text-black font-semibold flex-row gap-2 items-center">
                                <h4>Services</h4>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <div className={`
                                        relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                                        peer-focus:ring-primarygreen/30 dark:peer-focus:ring-primarygreen rounded-full peer 
                                        dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                                        peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
                                        after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 
                                        after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primarygreen
                                    `}
                                    >
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    className='bg-primarygreen border-2 border-primarygreen py-2 px-4 rounded-full text-white hover:text-primarygreen hover:bg-transparent ease-in-out duration-300'
                >
                    Update User
                </button>

            </div>
        </div>
    )
}

export default UserProfile