import React from 'react'
import TransactionChart from '../../Components/Dashboard/TransactionChart'
import RevenueChart from '../../Components/Dashboard/RevenueChart'
import OrderProcessing from '../../Components/Dashboard/OrderProcessing'
import UserRegister from '../../Components/Dashboard/UserRegister'


const Home = () => {


    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col xl:flex-row gap-4">
                <TransactionChart />
                <RevenueChart/>
            </div>
            <div className="flex flex-col xl:flex-row gap-4">
                <UserRegister/>
                <OrderProcessing/>
            </div>
        </div>
    )
}

export default Home