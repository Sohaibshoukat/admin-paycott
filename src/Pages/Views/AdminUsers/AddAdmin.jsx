import React, { useContext, useEffect, useState } from 'react'
import AlertContext from '../../../Context/Alert/AlertContext';
import { BaseURL } from '../../../assets/Data/BaseURL';
import axios from 'axios';
import { json, useNavigate } from 'react-router-dom';

const AddAdmin = () => {

    const navigate = useNavigate()

    const alertContext = useContext(AlertContext);
    const { showAlert } = alertContext;

    const [currentRoleData, setCurrentRoleData] = useState([]);
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [AdmRoleid, setAdmRoleid] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const urlParams = new URLSearchParams(window.location.search);
    const editid = urlParams.get('editid');

    const fetchAdminData = async () => {
        try {
            const response = await fetch(`${BaseURL}/adminauth/getAdmin/${editid}`,{
                headers:{
                    AdminODSToken:sessionStorage.getItem('token')
                }
            });
            const data = await response.json()
            setName(data.Name)
            setEmail(data.Email)
            setAdmRoleid(data.AdmRole._id)
        } catch (error) {
            console.error('Error fetching roles:', error);
            showAlert('Error fetching roles', 'danger');
        }
    };

    useEffect(() => {
        if(editid!==null){
            fetchAdminData()
        }
    }, [editid])
    

    const fetchRolesData = async () => {
        try {
            const response = await axios.get(`${BaseURL}/adminrole/rolesdata`,{
                headers:{
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

    useEffect(() => {
        fetchRolesData()
    }, [])

    const handleSubmit = async (e) => {
        setIsSubmitting(true)

        if (Name == "" || Email == '' || AdmRoleid == '') {
            showAlert("Fill all the Details", 'danger')
        }

        try {

            if(editid!==null){
                await fetch(`${BaseURL}/adminauth/editadmin/${editid}`, {
                    method:'PUT',
                    headers:{
                        "Content-Type": "application/json",
                        AdminODSToken:sessionStorage.getItem('token')
                    },
                    body: JSON.stringify({
                        Name,
                        Email,
                        AdmRoleid
                    })
                });
                showAlert('Role Edit successfully', 'success');
                setIsSubmitting(false)
                navigate('/admin-dashboard/admin-roles/')
            }else{
                await fetch(`${BaseURL}/adminauth/createadmin`, {
                    method:'POST',
                    headers:{
                        "Content-Type": "application/json",
                        AdminODSToken:sessionStorage.getItem('token')
                    },
                    body: JSON.stringify({
                        Name,
                        Email,
                        AdmRoleid
                    })
                });
                showAlert('Role added successfully', 'success');
                setIsSubmitting(false)
                navigate('/admin-dashboard/admin-roles/')
            }

        } catch (error) {
            setIsSubmitting(false)
            console.error('Error saving role:', error);
            showAlert('Error saving role', 'danger');
        }
    };


    return (
        <div className='flex flex-col gap-4 font-pop'>
            <h2 className='font-semibold text-xl'>{editid!==null ? "Edit" : "Invite"} Users</h2>
            <div className="flex justify-center my-6">
                <div className="bg-white flex flex-col gap-4 py-4 px-4 w-[90%] md:w-[50%] xl:w-[30%] rounded-2xl">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Email</label>
                        <input
                            type="text"
                            value={Email}
                            name='email'
                            id='email'
                            onChange={(e) => { setEmail(e.target.value) }}
                            placeholder='Enter Email'
                            className='py-2 px-4 rounded-lg border-2 border-light'
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Name</label>
                        <input
                            type="text"
                            value={Name}
                            onChange={(e) => { setName(e.target.value) }}
                            placeholder='Enter Name'
                            className='py-2 px-4 rounded-lg border-2 border-light'
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Role</label>
                        <select
                            name=""
                            value={AdmRoleid}
                            onChange={(e) => { setAdmRoleid(e.target.value) }}
                            id=""
                            className='py-2 px-4 rounded-lg border-2 border-light'
                        >
                            <option value="">Select Role</option>
                            {currentRoleData?.map((item, index) => (
                                <option value={item._id} key={index}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                    <button
                        className={`bg-primarygreen border-2 border-primarygreen py-2 px-4 rounded-full text-white hover:text-primarygreen hover:bg-transparent ease-in-out duration-300 ${isSubmitting && "opacity-30"}`}
                        disabled={isSubmitting}
                        onClick={
                            () => {
                                if (!isSubmitting) {
                                    handleSubmit()
                                }
                            }
                        }
                    >
                        {editid!==null?"Update":"Add"} Member
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddAdmin