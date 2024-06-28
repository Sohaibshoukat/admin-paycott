import React, { useContext, useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { MdDelete, MdEdit } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { BaseURL } from '../../../assets/Data/BaseURL'
import axios from 'axios'
import AlertContext from '../../../Context/Alert/AlertContext'
import { convertDateFormat } from '../../../assets/Data/DateFunction'

const Home = () => {

    const navigate = useNavigate()

    const [currentRoleData, setCurrentRoleData] = useState([]);
    const [adminData, setAdminData] = useState([]);
    const [filteredAdminData, setFilteredAdminData] = useState([]);

    const AletContext = useContext(AlertContext);
    const { showAlert } = AletContext;

    const [editId, setEditId] = useState(null)
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRole, setSelectedRole] = useState('');

    const fetchRolesData = async () => {
        try {
            const response = await axios.get(`${BaseURL}/adminrole/rolesdata`,{
                headers:{
                    AdminODSToken: sessionStorage.getItem('token')
                }
            });
            setCurrentRoleData(response.data);
        } catch (error) {
            console.error('Error fetching roles:', error);
            showAlert('Error fetching roles', 'danger');
        }
    };

    const fetchAdminData = async () => {
        try {
            const response = await fetch(`${BaseURL}/adminauth/getAdmin`, {
                headers: {
                    AdminODSToken: sessionStorage.getItem('token')
                }
            });
            const data = await response.json()
            setAdminData(data);
            setFilteredAdminData(data); // Initialize filtered data
        } catch (error) {
            console.error('Error fetching roles:', error);
            showAlert('Error fetching roles', 'danger');
        }
    };

    useEffect(() => {
        fetchAdminData()
        fetchRolesData()
    }, [])

    useEffect(() => {
        filterAdminData();
    }, [searchTerm, selectedRole, adminData])

    const filterAdminData = () => {
        let filteredData = adminData;

        if (searchTerm) {
            filteredData = filteredData.filter(item =>
                item.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.Email.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedRole) {
            filteredData = filteredData.filter(item =>
                item.AdmRole && item.AdmRole._id === selectedRole
            );
        }

        setFilteredAdminData(filteredData);
    };

    const deleteRole = async (id) => {
        try {
            await fetch(`${BaseURL}/adminauth/deleteadmin/${id}`, {
                method: "DELETE",
                headers: {
                    AdminODSToken: sessionStorage.getItem('token')
                }
            });
            showAlert('Admin deleted successfully', 'success');
            fetchAdminData(); // Refresh roles after deletion
        } catch (error) {
            console.error('Error deleting role:', error);
            showAlert('Error deleting role', 'danger');
        }
    };

    return (
        <div className="">
            <div className="flex justify-end">
                <div className="flex gap-4 my-4 font-pop items-center">
                    <button
                        className='bg-transparent border-2 border-primarygreen py-2 px-4 rounded-full text-primarygreen hover:text-white hover:bg-primarygreen ease-in-out duration-300'
                        onClick={() => { navigate("/admin-dashboard/admin-roles/role") }}
                    >
                        Add New Role
                    </button>
                    <button
                        className='bg-primarygreen border-2 border-primarygreen py-2 px-4 rounded-full text-white hover:text-primarygreen hover:bg-transparent ease-in-out duration-300'
                        onClick={() => { navigate("/admin-dashboard/admin-roles/add-admin") }}
                    >
                        Add New Staff Member
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-4 lg:flex-row justify-between font-pop lg:items-center">
                <div className="flex gap-2 md:gap-6 items-center">
                    <h3 className='text-gray-400 text-sm md:text-lg font-medium'>Total {filteredAdminData.length} Admin Roles</h3>
                    <div className="bg-gray-300 rounded-2xl px-1 md:px-3">
                        <select
                            name=""
                            id=""
                            value={selectedRole}
                            onChange={(e) => setSelectedRole(e.target.value)}
                            className={`bg-transparent border-none outline-none 
                                    focus:outline-none focus:border-none focus:outline-transparent
                                    active:border-none active:outline-none text-sm md:text-lg font-normal
                        `}
                        >
                            <option value="">All Users</option>
                            {currentRoleData?.map((item) => (
                                <option key={item._id} value={item._id}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="flex gap-3 items-center bg-gray-300 rounded-full py-1 px-4">
                    <FaSearch className='text-gray-400 text-lg md:text-2xl' />
                    <input
                        type="text"
                        placeholder='Search...'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className='bg-transparent text-sm md:text-lg border-none outline-none focus:outline-none focus:border-none active:outline-none '
                    />
                </div>
            </div>
            <div className='bg-transparent overflow-x-auto font-pop w-full my-2 md:my-6'>
                <table className='w-full border-spacing-y-4 border-separate'>
                    <thead>
                        <tr>
                            <th scope="col" className="px-2 md:px-6 py-1 md:py-3 text-left w-[30%] font-medium text-gray-500 uppercase">Email</th>
                            <th scope="col" className="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">User</th>
                            <th scope="col" className="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Role</th>
                            <th scope="col" className="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Date</th>
                            <th scope="col" className="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredAdminData?.map((item, index) => (
                            <tr key={index} className='cursor-pointer'>
                                <td className="px-2 md:px-6 rounded-l-2xl bg-white my-3 text-base md:text-lg font-semibold py-3 text-left w-max min-w-[30%]">
                                    <h2 className='w-max'>{item?.Email}</h2>
                                </td>
                                <td className="px-2 md:px-6 bg-white my-3 py-1 md:py-3 font-normal text-left ">
                                    <div className="flex font-medium flex-row gap-2 items-center">
                                        <img src={item?.ProfilePhoto} alt="" className='w-8 h-8 rounded-full' />
                                        <h2 className='w-max'>{item?.Name}</h2>
                                    </div>
                                </td>
                                <td className="px-2 md:px-6 bg-white my-3 py-1 md:py-3 text-left font-semibold ">
                                    <h2 className='w-max'>{item?.AdmRole?.name}</h2>
                                </td>
                                <td className="px-2 md:px-6 text-gray-400 bg-white my-3 py-1 md:py-3 text-left ">
                                    <h2 className='w-max'>{convertDateFormat(item?.date)}</h2>
                                </td>
                                <td className="px-2 md:px-6 bg-white my-3 py-1 md:py-3 text-left rounded-r-2xl">
                                    <div className="flex gap-2 items-center">
                                        <MdEdit
                                            className='text-primarygreen text-lg'
                                            onClick={() => {
                                                setEditId(item._id)
                                                navigate(`/admin-dashboard/admin-roles/add-admin?editid=${item._id}`)
                                            }}
                                        />
                                        <MdDelete
                                            className='text-red-500 text-lg'
                                            onClick={() => { deleteRole(item._id) }}
                                        />
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

export default Home
