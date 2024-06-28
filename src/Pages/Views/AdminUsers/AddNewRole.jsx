import React, { useContext, useEffect, useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import AlertContext from '../../../Context/Alert/AlertContext';
import axios from 'axios';
import { BaseURL } from '../../../assets/Data/BaseURL';
import CurrentRoles from '../../../Components/Dashboard/CurrentRoles';

const AddNewRole = () => {
    const alertContext = useContext(AlertContext);
    const { showAlert } = alertContext;

    const [roleName, setRoleName] = useState('');
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [roles, setRoles] = useState([]);
    const [subLinks, setSubLinks] = useState({});
    const [selectedSubLinks, setSelectedSubLinks] = useState({});
    const [currentRoleData, setCurrentRoleData] = useState([]);
    const [editId, setEditId] = useState(null);

    const fetchRolesData = async () => {
        try {
            const response = await axios.get(`${BaseURL}/adminrole/roles`, {
                headers: {
                    AdminODSToken: sessionStorage.getItem('token')
                }
            });
            console.log(response.data);
            setCurrentRoleData(response.data);
        } catch (error) {
            console.error('Error fetching roles:', error);
            showAlert('Error fetching roles', 'danger');
        }
    };

    const fetchRoles = async () => {
        try {
            const response = await axios.get(`${BaseURL}/adminrole/navpages`, {
                headers: {
                    AdminODSToken: sessionStorage.getItem('token')
                }
            });
            console.log(response.data);
            setRoles(response.data);
        } catch (error) {
            console.error('Error fetching roles:', error);
            showAlert('Error fetching roles', 'danger');
        }
    };

    const fetchSubLinks = async (roleId) => {
        try {
            const response = await axios.get(`${BaseURL}/adminrole/navsubpage/${roleId}`, {
                headers: {
                    AdminODSToken: sessionStorage.getItem('token')
                }
            });
            console.log(response.data);
            setSubLinks(prevState => ({ ...prevState, [roleId]: response.data.SubLink }));
        } catch (error) {
            console.error('Error fetching subLinks:', error);
            showAlert('Error fetching subLinks', 'danger');
        }
    };

    const fetchRoleDetails = async (roleId) => {
        try {
            const response = await axios.get(`${BaseURL}/adminrole/roles/${roleId}`, {
                headers: {
                    AdminODSToken: sessionStorage.getItem('token')
                }
            });
            const role = response.data;
            setRoleName(role.name);
            setSelectedRoles(role.Auths?.map(auth => auth.Page._id));
            const subLinksMap = {};
            role.Auths.forEach(auth => {
                console.log(12)
                subLinksMap[auth.Page._id] = auth.SubLink?.map(sub => sub.id);
            });
            setSelectedSubLinks(subLinksMap);
        } catch (error) {
            console.error('Error fetching role details:', error);
            showAlert('Error fetching role details', 'danger');
        }
    };

    useEffect(() => {
        fetchRolesData();
        fetchRoles();
    }, []);

    useEffect(() => {
        selectedRoles.forEach(roleId => {
            if (!subLinks[roleId]) {
                fetchSubLinks(roleId);
            }
        });
    }, [selectedRoles]);

    useEffect(() => {
        if (editId !== null) {
            fetchRoleDetails(editId);
        }
    }, [editId]);

    const handleRoleNameChange = (e) => {
        setRoleName(e.target.value);
    };

    const handleRoleSelection = (roleId) => {
        if (selectedRoles.includes(roleId)) {
            setSelectedRoles(selectedRoles.filter(id => id !== roleId));
        } else {
            setSelectedRoles([...selectedRoles, roleId]);
        }
    };

    const handleSubLinkChange = (roleId, subLinkId) => {
        const selected = selectedSubLinks[roleId] || [];
        if (selected.includes(subLinkId)) {
            setSelectedSubLinks({
                ...selectedSubLinks,
                [roleId]: selected.filter(id => id !== subLinkId)
            });
        } else {
            setSelectedSubLinks({
                ...selectedSubLinks,
                [roleId]: [...selected, subLinkId]
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const Auths = selectedRoles?.map(roleId => ({
            Page: roleId,
            SubLink: (selectedSubLinks[roleId] || [])?.map(id => ({ id }))
        }));

        try {
            if (editId) {
                await axios.put(`${BaseURL}/adminrole/editrole/${editId}`, {
                    name: roleName,
                    Auths
                }, {
                    headers: {
                        AdminODSToken: sessionStorage.getItem('token')
                    }
                });
                showAlert('Role updated successfully', 'success');
            } else {
                await axios.post(`${BaseURL}/adminrole/createrole`, {
                    name: roleName,
                    Auths
                },{
                    headers:{
                        AdminODSToken: sessionStorage.getItem('token')
                    }
                });
                showAlert('Role added successfully', 'success');
            }
            fetchRolesData();
            setEditId(null);
            setRoleName('');
            setSelectedRoles([]);
            setSelectedSubLinks({});
        } catch (error) {
            console.error('Error saving role:', error);
            showAlert('Error saving role', 'danger');
        }
    };

    return (
        <>
            <div className="">
                <CurrentRoles currentRoleData={currentRoleData} fetchRolesData={fetchRolesData} setEditId={setEditId} />
            </div>
            <div className='font-pop flex flex-col gap-4'>
                <h2 className='text-xl font-semibold'>{editId ? 'Edit Role' : 'Add New Role'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="bg-white flex flex-col gap-4 font-pop rounded-2xl py-4 px-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Role Name</label>
                            <input
                                type="text"
                                placeholder='Enter Role Name'
                                className='py-2 px-4 rounded-lg border-2 border-light'
                                value={roleName}
                                onChange={handleRoleNameChange}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Select Role Authorities</label>
                            <div className="py-4 flex flex-wrap items-center gap-2">
                                {roles?.map((item, index) => (
                                    <div
                                        className={`cursor-pointer border-2 rounded-2xl py-1 px-2 font-pop ${selectedRoles.includes(item._id) ? 'bg-primarygreen/50 border-primarygreen' : 'border-light bg-white'}`}
                                        onClick={() => handleRoleSelection(item._id)}
                                        key={index}
                                    >
                                        {item?.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {selectedRoles?.map(roleId => (
                            <>
                                {(subLinks[roleId] || [])?.length > 0 && <div className="flex flex-col gap-2" key={roleId}>
                                    <label htmlFor="">Select SubCategories for {roles.find(role => role._id === roleId)?.name}</label>
                                    <div className="border-2 border-light py-4 px-4 rounded-xl my-4 flex flex-col gap-2">
                                        {(subLinks[roleId] || [])?.map((item, index) => (
                                            <div className="relative rounded-xl" key={index}>
                                                <div className="flex justify-between font-pop text-black flex-row gap-2 items-center">
                                                    <h4>{item?.link}</h4>
                                                    <label className="inline-flex items-center cursor-pointer">
                                                        <input
                                                            type="checkbox"
                                                            checked={(selectedSubLinks[roleId] || []).includes(item._id)}
                                                            onChange={() => handleSubLinkChange(roleId, item._id)}
                                                            className="sr-only peer"
                                                        />
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
                                        ))}
                                    </div>
                                </div>}
                            </>
                        ))}
                        <button
                            type="submit"
                            className='bg-primarygreen border-2 border-primarygreen py-2 px-4 rounded-full text-white hover:text-primarygreen hover:bg-transparent ease-in-out duration-300'
                        >
                            {editId ? 'Update Role' : 'Add Role'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddNewRole;
