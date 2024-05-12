import React from 'react'
import OverView from './OverView'
import { Route, Routes } from 'react-router-dom'
import Adds from './Adds'

const MainMarket = () => {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={<OverView />}>
                </Route>
                <Route
                    path="/adds"
                    element={<Adds />}>
                </Route>
            </Routes>
        </div>
    )
}

export default MainMarket