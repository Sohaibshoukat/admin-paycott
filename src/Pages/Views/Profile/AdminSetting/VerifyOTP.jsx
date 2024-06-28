import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BaseURL } from '../../../../assets/Data/BaseURL';
import AlertContext from '../../../../Context/Alert/AlertContext';

const VerifyOTP = ({ setStep }) => {

    const [OTP, setOTP] = useState('')

    const alertcontext = useContext(AlertContext);
    const { showAlert } = alertcontext

    const navigate = useNavigate()

    const handleSubmit = async () => {
        try {
            const response = await fetch(`${BaseURL}/profileadmin/verifyOTP`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "AdminODSToken": sessionStorage.getItem('token')
                },
                body: JSON.stringify({
                    otp: OTP 
                })
            });
            const data = await response.json();
            if (data.success) {
                showAlert("OTP Verified", 'success');
                setStep(3);
            } else {
                showAlert(data.message, 'danger');
            }
        } catch (error) {
            showAlert(error.message, 'danger');
        }
    };

    return (
        <>
            <div className={`flex font-pop flex-col justify-center items-center rounded-md m-5 md:m-10 `}>
                <div className="bg-white w-[95%] md:w-[80%] py-6 px-6 m-auto" style={{ boxShadow: "1px 1px 7.800000190734863px 0px #00000040" }}>
                    <div className="flex flex-col md:flex-row gap-2 md:border-b-2 md:border-lightgray">
                        <div className="py-2 px-4 text-lightgray font-normal">
                            Forget Password
                        </div>
                        <div className="border-b-2 border-primarygreen py-2 px-4 text-primarygreen font-medium">
                            Verify OTP
                        </div>
                        <div className="py-2 px-4 text-lightgray font-normal">
                            Change Password
                        </div>
                    </div>
                    <div className=" py-6 flex flex-col gap-6" >
                        <h2 className='text-lg font-bold text-primarygreen'>Verify code</h2>
                        <p >An authentication code has been sent to your email.</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor=""
                                    className='text-primarygreen font-medium'
                                >
                                    Enter Code
                                </label>
                                <input
                                    type="text"
                                    value={OTP}
                                    onChange={(e) => { setOTP(e.target.value) }}
                                    placeholder='Enter Code'
                                    className='border-2 border-primarygreen font-normal bg-transparent py-2 px-4 rounded-xl'
                                />
                                <p>Didn’t receive a code? <span className='text-red-500'>Resend</span></p>
                            </div>
                            <button
                                onClick={handleSubmit}
                                className='bg-primarygreen rounded-xl py-2 px-4 border-2 border-primarygreen text-white hover:bg-transparent hover:text-primarygreen ease-in-out duration-300'
                            >
                                Verify
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VerifyOTP;
