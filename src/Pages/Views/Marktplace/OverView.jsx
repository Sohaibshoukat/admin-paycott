import React, { useContext, useEffect, useState } from 'react'
import { LineChart, PieChart } from '@mui/x-charts'
import { CategoryList, MarketPlaceCategoryList, SubCategoryList } from '../../../assets/Data/SubCategory';
import { IoAdd } from 'react-icons/io5';
import AddService from '../../../Components/MarketPlace/AddService';
import { BaseURL } from '../../../assets/Data/BaseURL';
import AlertContext from '../../../Context/Alert/AlertContext';
import { FaRegEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import axios from 'axios';
import AddProduct from '../../../Components/MarketPlace/AddProduct';

const OverView = () => {
    const pieParams = { height: "100%", width: "100%", margin: { right: 5 } };
    const palette = ['#CB3CFF', '#0038FF', '#00C2FF'];

    const [ModelService, setModelService] = useState(false)
    const [Servics, setServics] = useState([])
    const [ServiceSelect, setServiceSelect] = useState(null)
    const [ServiceSkills, setServiceSkills] = useState([])
    const [EditService, setEditService] = useState(null)

    const [ModelProduct, setModelProduct] = useState(false)
    const [Product, setProduct] = useState([])
    const [ProductSelect, setProductSelect] = useState(null)
    const [ProductSkills, setProductSkills] = useState([])
    const [EditProduct, setEditProduct] = useState(null)

    const AletContext = useContext(AlertContext);
    const { showAlert } = AletContext;

    const fetchServices = async () => {
        try {
            const response = await fetch(`${BaseURL}/Marketplace/Service/servicecategoryname`, {
                headers: {
                    AdminODSToken: sessionStorage.getItem('token')
                }
            });
            const data = await response.json()
            setServics(data);
        } catch (error) {
            showAlert('Error fetching Services', 'danger');
        }
    };

    const fetchProduct = async () => {
        try {
            const response = await fetch(`${BaseURL}/Marketplace/Product/productcategoryname`, {
                headers: {
                    AdminODSToken: sessionStorage.getItem('token')
                }
            });
            const data = await response.json()
            setProduct(data);
        } catch (error) {
            showAlert('Error fetching Services', 'danger');
        }
    };

    const fetchServiceSkills = async () => {
        try {
            const response = await fetch(`${BaseURL}/Marketplace/Service/servicecategoryDetail/${ServiceSelect}`, {
                headers: {
                    AdminODSToken: sessionStorage.getItem('token')
                }
            });
            const data = await response.json()
            setServiceSkills(data);
        } catch (error) {
            showAlert('Error fetching Services', 'danger');
        }
    };

    useEffect(() => {
        fetchServices()
        fetchProduct()
    }, [])

    useEffect(() => {
        if (ServiceSelect) {
            fetchServiceSkills()
        }
    }, [ServiceSelect])

    const handleDeleteServiceSkill = async (id, skillid) => {
        try {
            
            await axios.delete(`${BaseURL}/Marketplace/Service/service/${id}/skills/${skillid}`, {
                headers: {
                    AdminODSToken: sessionStorage.getItem('token')
                }
            });
            showAlert("Skill Deleted", 'success');
            fetchServiceSkills();
        } catch (error) {
            showAlert(error.message, 'danger');
        }
    }

    const handleDeleteServiceSubSkill = async (id, skillid,subskillid) => {
        try {
            
            await axios.delete(`${BaseURL}/Marketplace/Service/service/${id}/skills/${skillid}/subskills/${subskillid}`, {
                headers: {
                    AdminODSToken: sessionStorage.getItem('token')
                }
            });
            showAlert("Sub Skill Deleted", 'success');
            fetchServiceSkills();
        } catch (error) {
            showAlert(error.message, 'danger');
        }
    }


    return (
        <>
            {<AddService ModelService={ModelService} setModelService={setModelService} fetchServices={fetchServices} EditService={EditService} setEditService={setEditService} />}
            {<AddProduct ModelProduct={ModelProduct} setModelProduct={setModelProduct} fetchProduct={fetchProduct} EditProduct={EditProduct} setEditProduct={setEditProduct} />}
            <div className='w-[95%] m-auto py-10'>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col lg:flex-row justify-between gap-6">
                        <div className="basis-[55%]">
                            <div className="flex font flex-col gap-4">
                                <div className="flex  font-pop items-center justify-between">
                                    <div className="flex flex-col gap-1 font-pop">
                                        <h3 className='font-normal'>Total sales</h3>
                                        <h1 className='font-semibold text-2xl'>$240.8K</h1>
                                    </div>
                                    <div>
                                        <select
                                            name=""
                                            id=""
                                            className='bg-primarygreen border-none outline-none rounded-lg py-2 px-6 text-white'
                                        >
                                            <option value="">Today</option>
                                            <option value="">2 Days</option>
                                            <option value="">1 Week</option>
                                            <option value="">1 Month</option>
                                            <option value="">6 month</option>
                                            <option value="">1 year</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <LineChart
                                        xAxis={[{ scaleType: 'point', data: ['Jan', 'Feb', 'March', 'April', 'May', 'Jun'] }]}
                                        series={[
                                            {
                                                data: [2, 5.5, 2, 8.5, 1.5, 5],
                                                area: true,
                                            },
                                        ]}
                                        height={300}
                                        margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
                                        grid={{ vertical: true, horizontal: true }}
                                    />
                                </div>

                            </div>
                        </div>
                        <div className="basis-[40%]">
                            <div className="flex flex-col justify-between gap-8 font-pop">
                                <h2 className='text-2xl font-semibold'>MarketPlace</h2>
                                <div className="w-full">
                                    <PieChart
                                        colors={palette}
                                        series={[
                                            {
                                                data: [
                                                    { id: 0, value: 10, label: 'series A' },
                                                    { id: 1, value: 15, label: 'series B' },
                                                    { id: 2, value: 20, label: 'series C' },
                                                ],
                                                innerRadius: 150,
                                                outerRadius: 98,
                                                paddingAngle: 5,
                                                cornerRadius: 5,
                                                startAngle: -90,
                                                endAngle: 90,
                                                cx: 149,
                                                cy: 144,
                                            }
                                        ]}
                                        {...pieParams}
                                    />
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex font-pop gap-2 items-center">
                                        <div className="w-4 h-4 rounded-full bg-[#CB3CFF]"></div>
                                        <h5>Sell</h5>
                                    </div>
                                    <div className="flex font-pop gap-2 items-center">
                                        <div className="w-4 h-4 rounded-full bg-[#0038FF]"></div>
                                        <h5>Buy</h5>
                                    </div>
                                    <div className="flex font-pop gap-2 items-center">
                                        <div className="w-4 h-4 rounded-full bg-[#00C2FF]"></div>
                                        <h5>Complete</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex font-pop flex-col gap-4">
                        <h2 className='text-xl'>MarketPlace Category</h2>
                        <div className="py-4 flex flex-wrap items-center gap-2">
                            {Product?.map((item, index) => (
                                <div
                                    className={`cursor-pointer group relative rounded-2xl py-1 px-2 border-2 font-pop bg-white border-white`}
                                    key={index}
                                >
                                    {item.name}
                                    <div className="gap-2 hidden group-hover:flex  absolute -top-[30%] right-[-5%] items-center text-xl ease-in-out duration-300">
                                        <FaRegEdit className='text-red-500' onClick={() => {
                                            setEditProduct(item._id)
                                            setModelProduct(true)
                                        }} />
                                    </div>
                                </div>
                            ))}
                            <div
                                className={`cursor-pointer font-pop rounded-2xl py-1 px-2 border-2  bg-primarygreen text-white flex gap-1 items-center`}
                                onClick={() => { setModelProduct(true) }}
                            >
                                <IoAdd className='text-lg' />
                                Add
                            </div>
                        </div>
                    </div>

                    <div className="flex font-pop flex-col gap-4">
                        <h2 className='text-xl'>Service Category</h2>
                        <div className="py-4 flex flex-wrap items-center gap-2">
                            {Servics.map((item, index) => (
                                <div
                                    className={`cursor-pointer rounded-2xl py-1 group px-2 relative border-2 font-pop ${ServiceSelect == item._id ? "bg-primarygreen/30 border-primarygreen" : "bg-white border-white"} `}
                                    onClick={() => { setServiceSelect(item._id) }}
                                    key={index}
                                >
                                    {item?.name}
                                    <div className="gap-2 hidden group-hover:flex  absolute -top-[30%] right-[-5%] items-center text-xl ease-in-out duration-300">
                                        <FaRegEdit className='text-red-500' onClick={() => {
                                            setEditService(item._id)
                                            setModelService(true)
                                        }} />
                                    </div>
                                </div>
                            ))}
                            <div
                                className={`cursor-pointer font-pop rounded-2xl py-1 px-2 border-2  bg-primarygreen text-white flex gap-1 items-center`}
                                onClick={() => { setModelService(true) }}
                            >
                                <IoAdd className='text-lg' />
                                Add
                            </div>
                        </div>
                        <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-4">
                            {ServiceSkills?.Skills?.map((item, index) => (
                                <div className="bg-white group font-pop h-fit rounded-2xl py-4 px-6 flex flex-col gap-4 ease-in-out duration-300" key={index}>
                                    <div className="flex justify-between items-center">
                                        <h2 className='text-xl font-medium'>{item?.skill}</h2>
                                        <div className="gap-2 hidden group-hover:flex items-center text-xl ease-in-out duration-300">
                                            <AiFillDelete className="text-red-400" onClick={() => { handleDeleteServiceSkill(ServiceSkills._id, item._id) }} />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {item?.subSkill?.map((item2, index2) => (
                                            <p
                                                key={index2}
                                                className='flex justify-between items-center group'
                                            >
                                                {item2.name}
                                                <AiFillDelete className="text-black hidden group-hover:block" onClick={() => { handleDeleteServiceSubSkill(ServiceSkills._id, item._id, item2._id) }} />
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default OverView