import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProfileList from './ProfileList'
import ProfileDetail from './ProfileDetail'
import Pending from './Pending'

const Main = () => {
    return (
        <div className="w-[95%] m-auto  pt-10 pb-14">
            <Routes>
                <Route
                    path="/request"
                    element={<ProfileList />}>
                </Route>
                <Route
                    path="/pending"
                    element={<Pending />}>
                </Route>
                <Route
                    path="/profile-detail"
                    element={<ProfileDetail />}>
                </Route>
            </Routes>
        </div>
    )
}

export default Main