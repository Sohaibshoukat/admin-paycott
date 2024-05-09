import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';


const UserRegister = () => {
    return (
        <div className="bg-white rounded-lg basis-[40%] py-6 px-6">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col font-pop gap-2">
                    <h2 className='text-lg font-semibold'>User Registered</h2>
                    <p className='text-lightGrey'>Total User Registered: 280.98k</p>
                </div>
            </div>
            <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                    {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                    {
                        data: [6, 3.5, 6, 10, 2.5, 9],
                    },
                    {
                        data: [9, 10.5, 7, 10, 5.5, 10],
                    },
                ]}
                width={500}
                height={300}
            />
        </div>
    )
}

export default UserRegister