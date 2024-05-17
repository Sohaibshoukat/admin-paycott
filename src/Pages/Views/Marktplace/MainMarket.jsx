import React from 'react'
import OverView from './OverView'
import { Route, Routes } from 'react-router-dom'
import Adds from './Adds'
import ProductAdds from './ProductAdds'

const MainMarket = () => {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={<OverView />}>
                </Route>
                <Route
                    path="/service-ads"
                    element={<Adds />}>
                </Route>
                <Route
                    path="/product-ads"
                    element={<ProductAdds />}>
                </Route>
            </Routes>
        </div>
    )
}

export default MainMarket