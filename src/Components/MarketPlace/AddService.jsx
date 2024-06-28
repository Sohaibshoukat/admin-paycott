import React, { useContext, useEffect, useState } from 'react'
import AlertContext from '../../Context/Alert/AlertContext';
import axios from 'axios';
import { BaseURL } from '../../assets/Data/BaseURL';

const AddService = ({ ModelService, setModelService, fetchServices, EditService, setEditService }) => {
    const [categoryName, setCategoryName] = useState("");
    const [Skills, setSkills] = useState([
        {
            skill: "",
            subSkill: [
                {
                    name: ""
                }
            ]
        }
    ]);

    const AletContext = useContext(AlertContext);
    const { showAlert } = AletContext;

    const handleCategoryNameChange = (e) => {
        setCategoryName(e.target.value);
    }

    const handleSkillChange = (index, e) => {
        const newSkills = [...Skills];
        newSkills[index].skill = e.target.value;
        setSkills(newSkills);
    }

    const handleSubSkillChange = (skillIndex, subSkillIndex, e) => {
        const newSkills = [...Skills];
        newSkills[skillIndex].subSkill[subSkillIndex].name = e.target.value;
        setSkills(newSkills);
    }

    const addSubSkill = (skillIndex) => {
        const newSkills = [...Skills];
        newSkills[skillIndex].subSkill.push({ name: "" });
        setSkills(newSkills);
    }

    const addSkill = () => {
        const newSkills = [...Skills];
        newSkills.push({ skill: "", subSkill: [{ name: "" }] });
        setSkills(newSkills);
    }

    const fetchServiceSkills = async () => {
        try {
            const response = await fetch(`${BaseURL}/Marketplace/Service/servicecategoryDetail/${EditService}`, {
                headers: {
                    AdminODSToken: sessionStorage.getItem('token')
                }
            });
            const data = await response.json()
            setCategoryName(data.name)
            const parsedSkills = await data.Skills.map(skill => ({
                skill: skill.skill,
                subSkill: skill.subSkill.map(sub => ({
                    name: sub.name
                }))
            }));
            setSkills(parsedSkills);
        } catch (error) {
            showAlert('Error fetching Services', 'danger');
        }
    };

    useEffect(() => {
        if (EditService) {
            fetchServiceSkills()
        }
    }, [EditService])

    const handleAddService = async () => {
        try {
            let response;
            if (EditService) {
                response = await axios.put(`${BaseURL}/Marketplace/Service/editservicecategory/${EditService}`, {
                    name: categoryName,
                    skills: Skills
                }, {
                    headers: {
                        AdminODSToken: sessionStorage.getItem('token')
                    }
                });
            } else {
                response = await axios.post(`${BaseURL}/Marketplace/Service/addservicecategory`, {
                    name: categoryName,
                    skills: Skills
                }, {
                    headers: {
                        AdminODSToken: sessionStorage.getItem('token')
                    }
                });
            }
            setEditService(null)
            setModelService(false)
            showAlert("Service Added", 'success');
            fetchServices();
        } catch (error) {
            showAlert(error.message, 'danger');
        }
    }

    const handleDeleteService = async () => {
        try {
            await axios.delete(`${BaseURL}/Marketplace/Service/servicecategoryDel/${EditService}`, {
                headers: {
                    AdminODSToken: sessionStorage.getItem('token')
                }
            });
            setEditService(null);
            setModelService(false);
            showAlert("Service Deleted", 'success');
            fetchServices();
        } catch (error) {
            showAlert(error.message, 'danger');
        }
    }

    return (
        <>
            {ModelService &&
                <div className='fixed top-0 left-0 z-50 bg-transparent w-screen h-screen font-pop flex-col'>
                    <div className="bg-black/40 absolute z-30 top-0 left-0 w-screen h-screen" onClick={() => { setModelService(false) }}></div>
                    <div className="bg-white rounded-2xl py-6 px-6 my-6 w-[95%] md:w-[70%] xl:w-[40%] mx-auto mt-10 relative z-50 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
                        <h1 className='font-semibold text-2xl'>{!EditService ? "Add" : "Edit"} Service Category</h1>
                        <div className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder='Category Name'
                                value={categoryName}
                                onChange={handleCategoryNameChange}
                                className="w-full px-6 border-2 border-transparent font-pop text-base rounded-full  bg-[#E8E8E8] py-2 focus:border-primarygreen focus:outline-none"
                            />
                            {Skills.map((item, index) => (
                                <div className="flex flex-col gap-2" key={index}>
                                    <input
                                        type="text"
                                        placeholder='Skill'
                                        value={item.skill}
                                        onChange={(e) => handleSkillChange(index, e)}
                                        className="w-full px-6 border-2 border-transparent font-pop text-base rounded-full  bg-[#E8E8E8] py-2 focus:border-primarygreen focus:outline-none"
                                    />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {item.subSkill?.map((item2, index2) => (
                                            <input
                                                type="text"
                                                placeholder='Sub Skill'
                                                key={index2}
                                                value={item2.name}
                                                onChange={(e) => handleSubSkillChange(index, index2, e)}
                                                className="w-full px-6 border-2 border-transparent font-pop text-base rounded-full  bg-[#E8E8E8] py-2 focus:border-primarygreen focus:outline-none"
                                            />
                                        ))}
                                    </div>
                                    <button
                                        onClick={() => addSubSkill(index)}
                                        className="px-2 md:px-6 bg-green-500 hover:bg-transparent  hover:bg-white-500 font-medium hover:text-black font-pop text-sm md:text-lg py-2 md:py-3 border border-black-500 hover:border-green-500 rounded-full  text-white"
                                    >
                                        Add Another SubSkill
                                    </button>
                                </div>
                            ))}
                            <button
                                onClick={addSkill}
                                className="px-2 md:px-6 bg-green-500 hover:bg-transparent  hover:bg-white-500 font-medium hover:text-black font-pop text-sm md:text-lg py-2 md:py-3 border border-black-500 hover:border-green-500 rounded-full  text-white"
                            >
                                Add Another Skill
                            </button>

                            <div className="flex gap-4 items-center">
                                {EditService &&<button
                                    onClick={handleDeleteService}
                                    className="my-4 px-2 md:px-6 bg-green-500 hover:bg-transparent  hover:bg-white-500 font-medium hover:text-black font-pop text-sm md:text-lg py-2 md:py-3 border border-black-500 hover:border-green-500 rounded-full  text-white"
                                >
                                    Delete Service
                                </button>}
                                <button
                                    onClick={handleAddService}
                                    className="my-4 px-2 md:px-6 bg-green-500 hover:bg-transparent  hover:bg-white-500 font-medium hover:text-black font-pop text-sm md:text-lg py-2 md:py-3 border border-black-500 hover:border-green-500 rounded-full  text-white"
                                >
                                    {EditService ? "Edit" : "Add"} Service
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default AddService
