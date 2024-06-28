import React from 'react'
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';

const MarktPlaceAddDetail = () => {
    const navigate = useNavigate()
    return (
        <div className='m-auto flex flex-col gap-6'>
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="basis-[65%] border-2 border-light bg-white flex flex-col gap-4 rounded-2xl py-4 px-6">
                    <div className="flex font-pop flex-row justify-between items-center">
                        <h2 className='text-2xl font-semibold'>DJI APX5</h2>
                        <div className="bg-primarygreen/30 font-pop py-1 px-2 rounded-3xl h-fit font-medium text-xl">
                            $2500
                        </div>
                    </div>
                    <div className="w-full">
                        <img src="../../assets/Prop/Car2.png" alt="" className='w-full h-auto object-cover' />
                    </div>
                    <div className="flex font-pop flex-col gap-2">
                        <h3 className='text-lightGrey text-lg font-medium'>Description</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Lectus lacus mi vel phasellus pulvinar enim pharetra etiam. Enim suspendisse egestas sit libero donec. Iaculis ullamcorper malesuada ut nibh maecenas aliquam imperdiet nec in. Mauris suscipit amet elementum diam nulla risus lobortis imperdiet quam. Nec ipsum ipsum posuere nibh neque amet proin tellus.</p>
                        <p>Convallis tincidunt arcu egestas risus. Vel et orci tincidunt urna at. Turpis vestibulum eleifend cursus sed tempor morbi. Sit vel tempor elit elementum neque sed. Et scelerisque risus venenatis tortor vestibulum adipiscing ipsum.</p>
                    </div>
                </div>
                <div className="flex basis-[35%] flex-col gap-4">
                    <div className="h-fit bg-white rounded-2xl py-4 px-4 border-2 border-light ">
                        <h3 className='border-b-2 border-light text-center py-4 text-lightGrey font-pop'>Seller info</h3>
                        <div className="flex flex-col font-pop gap-4 py-4">
                            <div className="flex gap-2">
                                <img src="../../assets/Prop/avatar.png" alt="" className='w-12 h-12 rounded-full' />
                                <div className="flex flex-col gap-0">
                                    <h2 className='text-lg font-medium'>Cameron Williamson</h2>
                                    <p className='text-lightGrey'>United States</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white flex flex-col justify-between gap-4 rounded-2xl py-6 px-4 font-pop">
                        <div className="flex flex-col gap-2">
                            <h2 className='text-xl font-semibold'>AD ID: <span>3445754</span></h2>
                            <h4 className='font-medium'>DATE CREATED: <span className='text-lightGrey'>24 Dec 20 15:02PM</span></h4>
                            <h4 className='font-medium'>USER ID: <span className='text-lightGrey'>123434</span></h4>
                            <h4 className='font-medium'>USER LEVEL: <span className='text-lightGrey'>CATEGORY: LOGO DESIGN {"->"} 3D LOGO</span></h4>
                            <div className="flex items-center gap-4">
                                <h4>USER ACCOUNT STATUS:</h4>
                                <div className="bg-primarygreen/30 border-2 border-primarygreen text-primarygreen py-2 px-4 font-medium rounded-xl">
                                    GOOD
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 w-full items-center justify-between">
                            <button
                                className='bg-primarygreen w-full text-lg rounded-full py-2 px-4 border-2 border-primarygreen text-white hover:bg-transparent hover:text-primarygreen ease-in-out duration-300 font-pop font-medium'
                            >
                                Accept
                            </button>
                            <button
                                className='bg-red-500 w-full text-lg rounded-full py-2 px-4 border-2 border-red-500 text-white hover:bg-transparent hover:text-red-500 ease-in-out duration-300 font-pop font-medium'
                            >
                                Decline
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MarktPlaceAddDetail