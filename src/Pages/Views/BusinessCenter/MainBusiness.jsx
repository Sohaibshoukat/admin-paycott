import React from 'react'
import Application from './Application'
import Active from './Active'
import Setting from './Setting'
import { Route, Routes } from 'react-router-dom'
import ActiveAccount from './ActiveAccount'
import AccountDetail from './AccountDetail'

const MainBusiness = () => {
    return (
        <div>
            <div className="w-[95%] m-auto  pt-10 pb-14">
                <Routes>
                    <Route
                        path="/application"
                        element={<Application />}>
                    </Route>
                    <Route
                        path="/new-detail"
                        element={<AccountDetail />}>
                    </Route>
                    <Route
                        path="/active"
                        element={<Active />}>
                    </Route>
                    <Route
                        path="/active-detail"
                        element={<ActiveAccount />}>
                    </Route>
                    <Route
                        path="/setting"
                        element={<Setting />}>
                    </Route>
                </Routes>
            </div>
        </div>
    )
}

export default MainBusiness