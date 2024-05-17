import React from 'react'
import Tickets from './Tickets'
import { Route, Routes } from 'react-router-dom'
import CaseDetail from './CaseDetail'
import PendingTickets from './PendingTickets'
import ResolvedTickets from './ResolvedTickets'

const MainTicket = () => {
    return (
        <div>
            <Routes>
                <Route
                    path="/new"
                    element={<Tickets />}>
                </Route>
                <Route
                    path="/pending"
                    element={<PendingTickets />}>
                </Route>
                <Route
                    path="/archive"
                    element={<ResolvedTickets />}>
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