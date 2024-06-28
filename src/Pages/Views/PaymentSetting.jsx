import React, { useContext, useEffect, useState } from 'react'
import { BaseURL } from '../../assets/Data/BaseURL'
import axios from 'axios'
import AlertContext from '../../Context/Alert/AlertContext';

const PaymentSetting = () => {

    const AletContext = useContext(AlertContext);
    const { showAlert } = AletContext;

    const [BuyerSetting, setBuyerSetting] = useState({
        FeePercen: "",
        Cent: ""
    })

    const [WithdrawSetting, setWithdrawSetting] = useState({
        FeePercen: "",
    })

    const [PaymentMethods, setPaymentMethods] = useState({
        PayPal: false,
        CreditCard: false,
        Ideal: false,
        Klarna: false,
    })

    const [AccountSetting, setAccountSetting] = useState({
        NomralAccount: "",
        Level1: "",
        Level2: "",
        Level3: "",
        Standard: "",
        Premium: "",
        Ultimate: ""
    })

    const onbuyerchange = (e) => {
        setBuyerSetting({
            ...BuyerSetting,
            [e.target.name]: e.target.value
        })
    }


    const onWithdrawchange = (e) => {
        setWithdrawSetting({
            ...WithdrawSetting,
            [e.target.name]: e.target.value
        })
    }

    const onAccountchange = (e) => {
        setAccountSetting({
            ...AccountSetting,
            [e.target.name]: e.target.value
        })
    }

    const onpaymentchange = (name) => {
        console.log(name)
        console.log(PaymentMethods)
        setPaymentMethods({
            ...PaymentMethods,
            [name]: !PaymentMethods[name]
        })
    }

    const handleBuyerSubmit = async () => {
        try {
            const response = await axios.post(`${BaseURL}/setting/changebuyersetting`, BuyerSetting, {
                headers: {
                    AdminODSToken: sessionStorage.getItem('token')
                }
            });
            showAlert('Setting Updated successfully', 'success');
        } catch (error) {
            showAlert('Error updating settings', 'danger');
        }
    };


    const handleWithdrawSubmit = async () => {
        try {
            const response = await axios.post(`${BaseURL}/setting/changewithdrawsetting`, WithdrawSetting, {
                headers: {
                    AdminODSToken: sessionStorage.getItem('token')
                }
            });
            showAlert('Setting Updated successfully', 'success');
        } catch (error) {
            showAlert('Error updating settings', 'danger');
        }
    };

    const handleAccountSubmit = async () => {
        try {
            const response = await axios.post(`${BaseURL}/setting/changeAccountpricing`, AccountSetting, {
                headers: {
                    AdminODSToken: sessionStorage.getItem('token')
                }
            });
            showAlert('Setting Updated successfully', 'success');
        } catch (error) {
            showAlert('Error updating settings', 'danger');
        }
    };

    const handlePaymentSubmit = async () => {
        try {
            const response = await axios.post(`${BaseURL}/setting/changepaymentsetting`, PaymentMethods, {
                headers: {
                    AdminODSToken: sessionStorage.getItem('token')
                }
            });
            showAlert('Setting Updated successfully', 'success');
        } catch (error) {
            showAlert('Error updating settings', 'danger');
        }
    };



    const fetchBuyerData = async () => {
        try {
            const response = await fetch(`${BaseURL}/setting/buyersetting`, {
                headers: {
                    AdminODSToken: sessionStorage.getItem('token')
                }
            });
            const data = await response.json()
            setBuyerSetting({
                FeePercen: data[0]?.FeePercen,
                Cent: data[0]?.Cent
            })
        } catch (error) {
            console.error('Error fetching roles:', error);
            showAlert('Error fetching roles', 'danger');
        }
    };

    const fetchWithdrawData = async () => {
        try {
            const response = await fetch(`${BaseURL}/setting/withdrawsetting`, {
                headers: {
                    AdminODSToken: sessionStorage.getItem('token')
                }
            });
            const data = await response.json()
            setWithdrawSetting({
                FeePercen: data[0]?.FeePercen,
            })
        } catch (error) {
            console.error('Error fetching roles:', error);
            showAlert('Error fetching roles', 'danger');
        }
    };

    const fetchAccountData = async () => {
        try {
            const response = await fetch(`${BaseURL}/setting/Accountpricesetting`, {
                headers: {
                    AdminODSToken: sessionStorage.getItem('token')
                }
            });
            const data = await response.json()
            setAccountSetting({
                NomralAccount: data[0]?.NomralAccount,
                Level1: data[0]?.Level1,
                Level2: data[0]?.Level2,
                Level3: data[0]?.Level3,
                Standard: data[0]?.Standard,
                Premium: data[0]?.Premium,
                Ultimate: data[0]?.Ultimate
            })
        } catch (error) {
            console.error('Error fetching roles:', error);
            showAlert('Error fetching roles', 'danger');
        }
    };

    const fetchPaymentMethodData = async () => {
        try {
            const response = await fetch(`${BaseURL}/setting/paymentsetting`, {
                headers: {
                    AdminODSToken: sessionStorage.getItem('token')
                }
            });
            const data = await response.json()
            setPaymentMethods({
                PayPal: data[0]?.PayPal,
                CreditCard: data[0]?.CreditCard,
                Ideal: data[0]?.Ideal,
                Klarna: data[0]?.Klarna,
            })
        } catch (error) {
            console.error('Error fetching roles:', error);
            showAlert('Error fetching roles', 'danger');
        }
    };

    useEffect(() => {
        fetchAccountData()
        fetchWithdrawData()
        fetchBuyerData()
        fetchPaymentMethodData()
    }, [])


    return (
        <div className="w-[95%] m-auto  pt-10 pb-14">
            <div className='flex flex-col gap-4'>
                <div className="flex flex-col gap-2 font-pop">
                    <h3 className='text-lg font-medium text-lightGrey'>Buyer Settings</h3>
                    <div className="bg-white flex flex-col gap-6 py-6 px-4 rounded-xl">
                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-3 bg-white">Fee Percentage</div>
                            <div className="flex font-pop  flex-row gap-2 items-center">
                                <input
                                    type='number'
                                    name="FeePercen"
                                    id="FeePercen"
                                    value={BuyerSetting.FeePercen}
                                    onChange={onbuyerchange}
                                    placeholder='Enter the percentage on specific cents'
                                    className="border-none outline-none w-full px-4 font-pop"
                                />
                            </div>
                        </div>

                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-3 bg-white">Cents</div>
                            <div className="flex font-pop  flex-row gap-2 items-center">
                                <input
                                    type='number'
                                    name="Cent"
                                    value={BuyerSetting.Cent}
                                    onChange={onbuyerchange}
                                    id=""
                                    placeholder='Enter the cents value '
                                    className="border-none outline-none w-full px-4 font-pop"
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        className='bg-primarygreen border-2 border-primarygreen py-2 px-4 rounded-full text-white hover:text-primarygreen hover:bg-transparent ease-in-out duration-300'
                        onClick={handleBuyerSubmit}
                    >
                        Update
                    </button>
                </div>

                <div className="flex flex-col gap-2 font-pop">
                    <h3 className='text-lg font-medium text-lightGrey'>Withdraw Settings</h3>
                    <div className="bg-white flex flex-col gap-6 py-6 px-4 rounded-xl">
                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-3 bg-white">Fee Percentage</div>
                            <div className="flex font-pop  flex-row gap-2 items-center">
                                <input
                                    type='number'
                                    name="FeePercen"
                                    id="FeePercen"
                                    value={WithdrawSetting.FeePercen}
                                    onChange={onWithdrawchange}
                                    placeholder='6%'
                                    className="border-none outline-none w-full px-4 font-pop"
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        className='bg-primarygreen border-2 border-primarygreen py-2 px-4 rounded-full text-white hover:text-primarygreen hover:bg-transparent ease-in-out duration-300'
                        onClick={handleWithdrawSubmit}
                    >
                        Update
                    </button>
                </div>

                <div className="flex flex-col gap-2 font-pop">
                    <h3 className='text-lg font-medium text-lightGrey'>Account Settings</h3>
                    <div className="bg-white flex flex-col gap-6 py-6 px-4 rounded-xl">

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                            <div className="relative border-2 border-light rounded-xl py-4 px-4">
                                <div className="absolute -top-3 px-2 left-3 bg-white">Normal Account</div>
                                <div className="flex font-pop  flex-row gap-2 items-center">
                                    <input
                                        type='number'
                                        name="NomralAccount"
                                        id="NomralAccount"
                                        value={AccountSetting.NomralAccount}
                                        onChange={onAccountchange}
                                        placeholder='6%'
                                        className="border-none outline-none w-full px-4 font-pop"
                                    />
                                </div>
                            </div>

                            <div className="relative border-2 border-light rounded-xl py-4 px-4">
                                <div className="absolute -top-3 px-2 left-3 bg-white">Level 1</div>
                                <div className="flex font-pop  flex-row gap-2 items-center">
                                    <input
                                        type='number'
                                        name="Level1"
                                        id="Level1"
                                        value={AccountSetting.Level1}
                                        onChange={onAccountchange}
                                        placeholder='6%'
                                        className="border-none outline-none w-full px-4 font-pop"
                                    />
                                </div>
                            </div>

                            <div className="relative border-2 border-light rounded-xl py-4 px-4">
                                <div className="absolute -top-3 px-2 left-3 bg-white">Level 2</div>
                                <div className="flex font-pop  flex-row gap-2 items-center">
                                    <input
                                        type='number'
                                        name="Level2"
                                        id="Level2"
                                        value={AccountSetting.Level2}
                                        onChange={onAccountchange}
                                        placeholder='6%'
                                        className="border-none outline-none w-full px-4 font-pop"
                                    />
                                </div>
                            </div>

                            <div className="relative border-2 border-light rounded-xl py-4 px-4">
                                <div className="absolute -top-3 px-2 left-3 bg-white">Top Rated</div>
                                <div className="flex font-pop  flex-row gap-2 items-center">
                                    <input
                                        type='number'
                                        name="Level3"
                                        id="Level3"
                                        value={AccountSetting.Level3}
                                        onChange={onAccountchange}
                                        placeholder='6%'
                                        className="border-none outline-none w-full px-4 font-pop"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                    <button
                        className='bg-primarygreen border-2 border-primarygreen py-2 px-4 rounded-full text-white hover:text-primarygreen hover:bg-transparent ease-in-out duration-300'
                        onClick={handleAccountSubmit}
                    >
                        Update
                    </button>
                </div>


                <div className="flex flex-col gap-2 font-pop">
                    <h3 className='text-lg font-medium text-lightGrey'>Payment Methods</h3>
                    <div className="bg-white py-6 px-4 rounded-xl flex flex-col gap-6">
                        <div className="relative border-b-2 border-light rounded-xl py-4 px-4">
                            <div className="flex justify-between font-pop text-black font-semibold flex-row gap-2 items-center">
                                <h4>Credit Card</h4>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" name='CreditCard' checked={PaymentMethods.CreditCard} className="sr-only peer" onChange={() => { onpaymentchange("CreditCard") }} />
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
                                <h4>PayPal</h4>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" checked={PaymentMethods.PayPal} onChange={() => { onpaymentchange("PayPal") }} />
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
                                <h4>Ideal</h4>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" checked={PaymentMethods.Ideal} onChange={() => { onpaymentchange("Ideal") }} />
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
                                <h4>Klarna</h4>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" checked={PaymentMethods.Klarna} onChange={() => { onpaymentchange("Klarna") }} />
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
                    <button
                        className='bg-primarygreen border-2 border-primarygreen py-2 px-4 rounded-full text-white hover:text-primarygreen hover:bg-transparent ease-in-out duration-300'
                        onClick={handlePaymentSubmit}
                    >
                        Update
                    </button>
                </div>


            </div>
        </div>
    )
}

export default PaymentSetting