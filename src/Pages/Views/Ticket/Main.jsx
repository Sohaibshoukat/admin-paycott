import React from 'react'
import Tickets from './Tickets'
import { Route, Routes } from 'react-router-dom'
import CaseDetail from './CaseDetail'

const MainTicket = () => {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={<Tickets />}>
                </Route>
                <Route
                    path="/case-detail/*"
                    element={<CaseDetail />}>
                </Route>
            </Routes>
        </div>
    )
}

export default MainTicket