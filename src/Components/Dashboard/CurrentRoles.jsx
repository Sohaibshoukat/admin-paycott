import React, { useContext, useEffect, useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import AlertContext from '../../Context/Alert/AlertContext';
import { BaseURL } from '../../assets/Data/BaseURL';
import axios from 'axios';
import { convertDateFormat } from '../../assets/Data/DateFunction';

const CurrentRoles = ({ fetchRolesData, currentRoleData, setEditId }) => {
    const alertContext = useContext(AlertContext);
    const { showAlert } = alertContext;


    const deleteRole = async (id) => {
        try {
            await axios.delete(`${BaseURL}/adminrole/deleterole/${id}`);
            showAlert('Role deleted successfully', 'success');
            fetchRolesData(); // Refresh roles after deletion
        } catch (error) {
            console.error('Error deleting role:', error);
            showAlert('Error deleting role', 'danger');
        }
    };

    return (
        <div>
            <div className="flex flex-col gap-4 lg:flex-row justify-between font-pop lg:items-center">
                <div className="flex gap-2 md:gap-6 items-center">
                    <h3 className='text-gray-400 text-sm md:text-lg font-medium'>Total {currentRoleData.length} Roles</h3>
                </div>
            </div>
            <div className='bg-transparent overflow-x-auto font-pop w-full my-2 md:my-6'>
                <table className='w-full border-spacing-y-4 border-separate'>
                    <thead>
                        <tr>
                            <th scope="col" className="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Role</th>
                            <th scope="col" className="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Date</th>
                            <th scope="col" className="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRoleData?.map((item, index) => (
                            <tr key={index} className='cursor-pointer'>
                                <td className="px-2 rounded-l-2xl md:px-6 bg-white my-3 py-1 md:py-3 text-left font-semibold ">
                                    <h2 className='w-max'>{item?.name}</h2>
                                </td>
                                <td className="px-2 md:px-6 text-gray-400 bg-white my-3 py-1 md:py-3 text-left ">
                                    <h2 className='w-max'>{convertDateFormat(item.date)}</h2>
                                </td>
                                <td className="px-2 md:px-6 bg-white my-3 py-1 md:py-3 text-left rounded-r-2xl">
                                    <div className="flex gap-2 items-center">
                                        <MdEdit
                                            className='text-primarygreen text-lg'
                                            onClick={() => setEditId(item._id) }
                                        />
                                        <MdDelete
                                            className='text-red-500 text-lg cursor-pointer'
                                            onClick={() => deleteRole(item._id)}
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

export default CurrentRoles;
