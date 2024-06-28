import React, { useContext, useEffect, useState } from 'react'
import AlertContext from '../../../Context/Alert/AlertContext';
import axios from 'axios';
import { BaseURL } from '../../../assets/Data/BaseURL';

const Setting = () => {
    const alertcontext = useContext(AlertContext);
    const { showAlert } = alertcontext
    const [data, setData] = useState([]);
    const [accountType, setAccountType] = useState('');
    const [price, setPrice] = useState('');
    const [fees, setFees] = useState('');
    const [cents, setCents] = useState('');

    const fetchData = async () => {
        try {
            const response = await fetch(`${BaseURL}/setting/businessSettings`, {
                headers: {
                    AdminODSToken: sessionStorage.getItem('token')
                }
            });
            const responsedata = await response.json()
            setData(responsedata);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchAccountData = async (id) => {
        try {
            const response = await fetch(`${BaseURL}/setting/businessSett/${id}`, {
                headers: {
                    AdminODSToken: sessionStorage.getItem('token')
                }
            });
            const responsedata = await response.json()
            setPrice(responsedata.Price);
            setFees(responsedata.Fees);
            setCents(responsedata.Cent);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleUpdate = async (id) => {
        try {
            const response = await axios.put(`${BaseURL}/setting/UpdateBusinessAccount/${id}`, {
                Price: price,
                Fees: fees,
                Cent: cents
            }, {
                headers: {
                    AdminODSToken: sessionStorage.getItem('token')
                }
            });
            showAlert(response.data.message, 'success');
            fetchData();
        } catch (error) {
            console.error('Error updating data:', error);
            showAlert('Error updating data', 'danger');
        }
    };

    const handleTogglePopular = async (id) => {
        try {
            const response = await fetch(`${BaseURL}/setting/popularaccount/${id}`, {
                method: "PUT",
                headers: {
                    AdminODSToken: sessionStorage.getItem('token')
                }
            });
            const responseData = await response.json()
            showAlert(responseData.message, 'success');
            fetchData();
        } catch (error) {
            console.error('Error updating popular status:', error);
            showAlert('Error updating popular status', 'danger');
        }
    };

    return (
        <div>
            <div className='flex flex-col gap-4 my-2 md:my-6'>
                <h2 className='font-pop text-lg font-semibold text-gray-500'>Buyer Setting</h2>
                <div className='bg-transparent overflow-x-auto font-pop w-full '>
                    <table className='w-full overflow-x-scroll font-pop border-spacing-y-4 border-separate'>
                        <thead>
                            <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left w-[30%] font-medium text-gray-500 uppercase">Account Name</th>
                            <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Price</th>
                            <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Fees Percentage</th>
                            <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Cents</th>
                        </thead>
                        <tbody>
                            {data?.map((item, index) => (
                                <tr key={index}>
                                    <td class="px-2 md:px-6 rounded-l-2xl font-pop text-sm md:text-base bg-white my-3 py-3 text-left ">
                                        <h2 className='font-semibold'>
                                            {item.AccountType}
                                        </h2>
                                    </td>
                                    <td class="px-2 md:px-6 bg-white my-3 text-base md:text-lg font-semibold py-3 text-left w-max min-w-[30%]">
                                        <h2 className='font-semibold'>
                                            {item?.Price}
                                        </h2>
                                    </td>
                                    <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 font-normal text-left ">
                                        <h2 className='w-max'>{item?.Fees}</h2>
                                    </td>
                                    <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 text-left ">
                                        <h2 className='w-max'>{item?.Cent}</h2>
                                    </td>
                                    <td class="px-2 md:px-6 rounded-r-2xl text-gray-400 bg-white my-3 py-1 md:py-3 text-left ">
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" name='CreditCard' checked={item.Popular} className="sr-only peer" onChange={() => { handleTogglePopular(item._id) }} />
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
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='flex flex-col gap-4 my-2 md:my-6'>
                <h2 className='font-pop text-lg font-semibold text-gray-500'>Seller Setting</h2>
                <div className='bg-transparent overflow-x-auto font-pop w-full '>
                    <table className='w-full overflow-x-scroll font-pop border-spacing-y-4 border-separate'>
                        <thead>
                            <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left w-[30%] font-medium text-gray-500 uppercase">Account Name</th>
                            <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Price</th>
                            <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Fees Percentage</th>
                            <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Cents</th>
                        </thead>
                        <tbody>
                            {data?.map((item, index) => (
                                <tr key={index}>
                                    <td class="px-2 md:px-6 rounded-l-2xl font-pop text-sm md:text-base bg-white my-3 py-3 text-left ">
                                        <h2 className='font-semibold'>
                                            {item.AccountType}
                                        </h2>
                                    </td>
                                    <td class="px-2 md:px-6 bg-white my-3 text-base md:text-lg font-semibold py-3 text-left w-max min-w-[30%]">
                                        <h2 className='font-semibold'>
                                            {item?.Price}
                                        </h2>
                                    </td>
                                    <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 font-normal text-left ">
                                        <h2 className='w-max'>{item?.Fees}</h2>
                                    </td>
                                    <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 text-left ">
                                        <h2 className='w-max'>{item?.Cent}</h2>
                                    </td>
                                    <td class="px-2 md:px-6 rounded-r-2xl text-gray-400 bg-white my-3 py-1 md:py-3 text-left ">
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" name='CreditCard' checked={item.Popular} className="sr-only peer" onChange={() => { handleTogglePopular(item._id) }} />
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
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='flex flex-col my-4 gap-4'>
                <div className="flex flex-col gap-2 font-pop">
                    <h3 className='text-lg font-medium text-lightGrey'>Business Buyer Account Fees</h3>
                    <div className="bg-white flex flex-col gap-6 py-6 px-4 rounded-xl">
                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-3 bg-white">Account Level</div>
                            <div className="flex font-pop  flex-row gap-2 items-center">
                                <select
                                    type='number'
                                    name=""
                                    id=""
                                    placeholder='6%'
                                    value={accountType}
                                    onChange={(e) => {
                                        setAccountType(e.target.value)
                                        fetchAccountData(e.target.value)
                                    }
                                    }
                                    className="border-none outline-none w-full px-4 font-pop"
                                >
                                    <option value="">Select Account Type</option>
                                    {data?.map((item, index) => (
                                        <option value={item._id} key={index}>{item.AccountType}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-3 bg-white">Price</div>
                            <div className="flex font-pop  flex-row gap-2 items-center">
                                <input
                                    type='number'
                                    name=""
                                    id=""
                                    value={price}
                                    onChange={(e) => { setPrice(e.target.value) }}
                                    placeholder='6%'
                                    className="border-none outline-none w-full px-4 font-pop"
                                />
                            </div>
                        </div>

                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-3 bg-white">Fee Percentage</div>
                            <div className="flex font-pop  flex-row gap-2 items-center">
                                <input
                                    type='number'
                                    name=""
                                    id=""
                                    value={fees}
                                    onChange={(e) => { setFees(e.target.value) }}
                                    placeholder='6%'
                                    className="border-none outline-none w-full px-4 font-pop"
                                />
                            </div>
                        </div>

                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-3 bg-white">Cents</div>
                            <div className="flex font-pop  flex-row gap-2 items-center">
                                <input
                                    type='number'
                                    name=""
                                    id=""
                                    value={cents}
                                    onChange={(e) => { setCents(e.target.value) }}
                                    placeholder='Enter the cents value '
                                    className="border-none outline-none w-full px-4 font-pop"
                                />
                            </div>
                        </div>

                    </div>
                </div>


                <button
                    className='bg-primarygreen font-pop border-2 border-primarygreen py-2 px-4 rounded-full text-white hover:text-primarygreen hover:bg-transparent ease-in-out duration-300'
                    onClick={() => {
                        handleUpdate(accountType)
                    }}
                >
                    Update
                </button>

            </div>
            <div className='flex flex-col my-4 gap-4'>
                <div className="flex flex-col gap-2 font-pop">
                    <h3 className='text-lg font-medium text-lightGrey'>Business Seller Account Fees</h3>
                    <div className="bg-white flex flex-col gap-6 py-6 px-4 rounded-xl">
                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-3 bg-white">Account Level</div>
                            <div className="flex font-pop  flex-row gap-2 items-center">
                                <select
                                    type='number'
                                    name=""
                                    id=""
                                    placeholder='6%'
                                    value={accountType}
                                    onChange={(e) => {
                                        setAccountType(e.target.value)
                                        fetchAccountData(e.target.value)
                                    }
                                    }
                                    className="border-none outline-none w-full px-4 font-pop"
                                >
                                    <option value="">Select Account Type</option>
                                    {data?.map((item, index) => (
                                        <option value={item._id} key={index}>{item.AccountType}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-3 bg-white">Price</div>
                            <div className="flex font-pop  flex-row gap-2 items-center">
                                <input
                                    type='number'
                                    name=""
                                    id=""
                                    value={price}
                                    onChange={(e) => { setPrice(e.target.value) }}
                                    placeholder='6%'
                                    className="border-none outline-none w-full px-4 font-pop"
                                />
                            </div>
                        </div>

                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-3 bg-white">Fee Percentage</div>
                            <div className="flex font-pop  flex-row gap-2 items-center">
                                <input
                                    type='number'
                                    name=""
                                    id=""
                                    value={fees}
                                    onChange={(e) => { setFees(e.target.value) }}
                                    placeholder='6%'
                                    className="border-none outline-none w-full px-4 font-pop"
                                />
                            </div>
                        </div>

                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-3 bg-white">Cents</div>
                            <div className="flex font-pop  flex-row gap-2 items-center">
                                <input
                                    type='number'
                                    name=""
                                    id=""
                                    value={cents}
                                    onChange={(e) => { setCents(e.target.value) }}
                                    placeholder='Enter the cents value '
                                    className="border-none outline-none w-full px-4 font-pop"
                                />
                            </div>
                        </div>

                    </div>
                </div>
                <button
                    className='bg-primarygreen font-pop border-2 border-primarygreen py-2 px-4 rounded-full text-white hover:text-primarygreen hover:bg-transparent ease-in-out duration-300'
                    onClick={() => {
                        handleUpdate(accountType)
                    }}
                >
                    Update
                </button>
            </div>
        </div>
    )
}

export default Setting