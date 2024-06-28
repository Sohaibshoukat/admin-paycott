import React, { useContext, useEffect, useState } from 'react'
import { FaCamera } from 'react-icons/fa'
import { BaseURL } from '../../../assets/Data/BaseURL'
import AlertContext from '../../../Context/Alert/AlertContext'

const MainProfile = () => {

    const [Name, setName] = useState('')
    const [Gender, setGender] = useState('')

    
    const AletContext = useContext(AlertContext);
    const { showAlert } = AletContext;

    const fetchAdminData = async () => {
        try {
            const response = await fetch(`${BaseURL}/profileadmin/getadmin`, {
                headers: {
                    "AdminODSToken": sessionStorage.getItem('token')
                }
            });
            const data = await response.json();
            if (response.ok) {
                setName(data.adminData.Name);
                setGender(data.adminData.Gender)
            } else {
                showAlert(data.message, 'danger');
            }
        } catch (error) {
            showAlert(error.message, 'danger');
        }
    };

    const updateAdminData = async () => {
        try {
            const response = await fetch(`${BaseURL}/profileadmin/updateadmin`, {
                method: 'PUT',
                headers: {
                    "AdminODSToken": sessionStorage.getItem('token'),
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    Name: Name,
                    Gender:Gender
                })
            });
            const data = await response.json();
            if (data.success) {
                showAlert('Porfile Updated', 'success');
            } else {
                showAlert(data.message, 'danger');
            }
        } catch (error) {
            showAlert(error.message, 'danger');
        }
    };

    useEffect(() => {
        fetchAdminData();
    }, []);

    return (
        <div className='w-[95%] lg:w-[90%] m-auto py-10'>
            <div className={`flex font-Para flex-col justify-center items-center rounded-2xl`}>
                <div className="bg-white w-full py-6 px-6 m-auto rounded-xl">
                    <div className="flex flex-col gap-2 w-[90%] md:w-[80%] m-auto">
                        <div className="relative self-center">
                            <img src={"../Owner.png"} alt="" className='w-40 h-36 rounded-full' />
                            <div className="absolute bottom-2 bg-black p-2 rounded-full z-10 right-0">
                                <label htmlFor="fileupload">
                                    <FaCamera className="text-white cursor-pointer" />
                                </label>
                                <input type="file" name='fileupload' id='fileupload' className='opacity-0 absolute' />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 font-pop gap-x-10 gap-y-6">
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor=""
                                    className='text-gray font-medium'
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder='Enter Name'
                                    className='border-2 border-primarygreen font-normal bg-transparent py-2 px-4 rounded-xl'
                                    value={Name}
                                    onChange={(e) => { setName(e.target.value) }}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor=""
                                    className='text-gray font-medium'
                                >
                                    Gender
                                </label>
                                <select 
                                    name="" 
                                    id=""
                                    value={Gender}
                                    onChange={(e) => { setGender(e.target.value) }}
                                    className='border-2 border-primarygreen font-normal bg-transparent py-2 px-4 rounded-xl'
                                >   
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                        <button
                            className='bg-primarygreen rounded-xl py-2 px-4 font-pop border-2 my-4 border-primarygreen text-white hover:bg-transparent hover:text-primarygreen ease-in-out duration-300'
                            onClick={updateAdminData}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainProfile