import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import AddAdmin from './AddAdmin'
import AddNewRole from './AddNewRole'

const MainUser = () => {
    return (
        <div className='w-[95%] m-auto py-10'>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}>
                </Route>
                <Route
                    path="/add-admin"
                    element={<AddAdmin />}>
                </Route>
                <Route
                    path="/role"
                    element={<AddNewRole />}>
                </Route>
            </Routes>
        </div>
    )
}

export default MainUser