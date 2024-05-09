import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';

const TransactionChart = () => {
    const pieParams = { height: 150, width: 150, margin: { right: 5 } };
    const palette = ['#03C3EC', '#71DD37', '#696CFF'];
    const data = [
        { id: 0, value: 10, label: 'Deposit' },
        { id: 1, value: 15, label: 'Withdraws' },
        { id: 2, value: 20, label: 'Purchase' },
    ];
    return (
        <div className="bg-white rounded-lg basis-[33.33%] py-6 px-6">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col font-pop gap-2">
                    <h2 className='text-lg font-semibold'>Transactions</h2>
                    <p className='text-lightGrey'>42.82k Total Transactions</p>
                </div>
            </div>
            <div className="flex flex-row my-4 justify-between items-center">
                <div className="flex flex-col font-pop gap-2">
                    <h2 className='text-2xl font-semibold'>8,258</h2>
                    <p className='text-lightGrey'>Total Transactions</p>
                </div>
                <PieChart
                    colors={palette}
                    series={[
                        {
                            data,
                            highlightScope: { faded: 'global', highlighted: 'item' },
                            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                        },
                    ]}
                    {...pieParams}
                // height={200}
                />

            </div>
            <div className="flex flex-col gap-4">
                <div className="flex font-pop text-lightGrey text-lg justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <img src="../assets/Prop/PurchaseTrans.png" alt="" className='w-8 h-8' />
                        <h3>Purchases</h3>
                    </div>
                    <h4>82.5k</h4>
                </div>
                <div className="flex font-pop text-lightGrey text-lg justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <img src="../assets/Prop/WithdrawTrans.png" alt="" className='w-8 h-8' />
                        <h3>Withdrawals</h3>
                    </div>
                    <h4>82.5k</h4>
                </div>
                <div className="flex font-pop text-lightGrey text-lg justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <img src="../assets/Prop/DepositTrans.png" alt="" className='w-8 h-8' />
                        <h3>Deposit</h3>
                    </div>
                    <h4>82.5k</h4>
                </div>
            </div>
        </div>
    )
}

export default TransactionChart