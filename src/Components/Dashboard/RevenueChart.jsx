import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';



const RevenueChart = () => {

    const dataset = [
        {
            2023: 400,
            2024: -200,
            month: 'Jan',
        },
        {
            2023: 200,
            2024: 1000,
            month: 'Fev',
        },
        {
            2023: 100,
            2024: 2000,
            month: 'Mar',
        },
        {
            2023: -1000,
            2024: 1000,
            month: 'Apr',
        },
        {
            2023: -1763,
            2024: 3232,
            month: 'May',
        },
        {
            2023: 2331,
            2024: 334,
            month: 'June',
        },

    ];

    const valueFormatter = (value) => `$${value}`;


    return (
        <div className="bg-white rounded-lg basis-[67.777%] py-6 px-6">
            <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="basis-[67.77%] border-r-0 md:border-r-2 border-light h-auto">
                    <div className="flex flex-col font-pop gap-2">
                        <h2 className='text-lg font-semibold'>Total Revenue</h2>
                        <div className="flex gap-6 items-center">
                            <div className="flex gap-2 items-center">
                                <div className="w-4 h-4 bg-[#696CFF]"></div>
                                <p className='text-lightGrey'>2024</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="w-4 h-4 bg-[#03C3EC]"></div>
                                <p className='text-lightGrey'>2023</p>
                            </div>
                        </div>
                    </div>
                    <BarChart
                        xAxis={[{ scaleType: 'band', data: ['Jan', 'Feb', 'March', 'April', 'May', 'Jun'] }]}
                        dataset={dataset}
                        width={500}
                        height={300}
                        series={[
                            { dataKey: '2023', label: '2023', valueFormatter },
                            { dataKey: '2024', label: '2024', valueFormatter },
                        ]}
                        slotProps={{
                            bar: {
                                clipPath: `inset(0px round 10px 10px 10px 10px)`,
                            },
                        }}
                    />
                </div>
                <div className="basis-[33.333%]">
                    <div className="flex flex-col gap-2 items-center">
                        <select
                            name=""
                            id=""
                            className='border-2 border-[#696CFF] rounded-xl font-pop py-2 px-2 bg-transparent text-[#696CFF]'
                        >
                            <option value="">2024</option>
                            <option value="">2023</option>
                            <option value="">2022</option>
                            <option value="">2021</option>
                            <option value="">2020</option>
                        </select>
                        <div className="flex flex-col gap-4 my-4">
                            <div className="flex text-xl flex-col gap-2 font-pop items-center justify-center relative">
                                <Gauge
                                    value={78}
                                    startAngle={-110}
                                    endAngle={110}
                                    height={200}
                                    width={300}
                                    sx={{
                                        [`& .${gaugeClasses.valueText}`]: {
                                            fontSize: 30,
                                            transform: 'translate(0px, 0px)',
                                        },
                                    }}
                                    text={
                                        ({ value, valueMax }) => `${value}
                                        
                                        Salary`
                                    }
                                />
                                <h2 className="font-pop text-lg text-lightGrey font-semibold">62% Salary Volume</h2>
                            </div>

                        </div>
                    </div>
                    <div className="flex gap-2 mt-4 justify-center items-center">
                        <div className="flex font-pop gap-2 items-center">
                            <img src="../assets/Prop/DollarSign.png" alt="" className='w-12 h-12' />
                            <div className="flex flex-col">
                                <p className="text-lightGrey">2023</p>
                                <h4 className="font-semibold text-lg">$32.5k</h4>
                            </div>
                        </div>
                        <div className="flex font-pop gap-2 items-center">
                            <img src="../assets/Prop/Wallet.png" alt="" className='w-12 h-12' />
                            <div className="flex flex-col">
                                <p className="text-lightGrey">2023</p>
                                <h4 className="font-semibold text-lg">$32.5k</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RevenueChart