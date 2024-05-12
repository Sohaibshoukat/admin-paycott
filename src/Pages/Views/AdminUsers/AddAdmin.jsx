import React from 'react'

const AddAdmin = () => {
    return (
        <div className='flex flex-col gap-4 font-pop'>
            <h2 className='font-semibold text-xl'>Invite Users</h2>
            <div className="flex justify-center my-6">
                <div className="bg-white flex flex-col gap-4 py-4 px-4 w-[90%] md:w-[50%] xl:w-[30%] rounded-2xl">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Email</label>
                        <input
                            type="text"
                            placeholder='Enter Email'
                            className='py-2 px-4 rounded-lg border-2 border-light'
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Name</label>
                        <input
                            type="text"
                            placeholder='Enter Name'
                            className='py-2 px-4 rounded-lg border-2 border-light'
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Role</label>
                        <select
                            name=""
                            id=""
                            className='py-2 px-4 rounded-lg border-2 border-light'
                        >
                            <option value="">Help Center</option>
                            <option value="">Manager</option>
                            <option value="">Help Center</option>
                            <option value="">Help Center</option>
                        </select>
                    </div>
                    <button
                        className='bg-primarygreen border-2 border-primarygreen py-2 px-4 rounded-full text-white hover:text-primarygreen hover:bg-transparent ease-in-out duration-300'
                    >
                        Add Member
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddAdmin