import React from 'react'
import ArchiveAdd from './ArchiveAdd'
import RequestAdd from './RequestAdd'
import ActiveAdd from './ActiveAdd'
import { Route, Routes } from 'react-router-dom'
import ServiceAddDetail from './ServiceAddDetail'
import MarktPlaceAddDetail from './MarktPlaceAddDetail'

const AdvertisingCenter = () => {
  return (
    <div className="w-[95%] m-auto  pt-10 pb-14">
      <Routes>
        <Route
          path="/archive"
          element={<ArchiveAdd />}>
        </Route>
        <Route
          path="/service-add-detail"
          element={<ServiceAddDetail />}>
        </Route>
        <Route
          path="/market-add-detail"
          element={<MarktPlaceAddDetail />}>
        </Route>
        <Route
          path="/add-detail"
          element={<ServiceAddDetail />}>
        </Route>
        <Route
          path="/request"
          element={<RequestAdd />}>
        </Route>
        <Route
          path="/active"
          element={<ActiveAdd />}>
        </Route>
      </Routes>
    </div>
  )
}

export default AdvertisingCenter