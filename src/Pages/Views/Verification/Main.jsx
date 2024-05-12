import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProfileList from './ProfileList'
import ProfileDetail from './ProfileDetail'

const Main = () => {
    return (
        <div className="w-[95%] m-auto  pt-10 pb-14">
            <Routes>
                <Route
                    path="/"
                    element={<ProfileList />}>
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