import React from 'react'
import ArchiveAdd from './ArchiveAdd'
import RequestAdd from './RequestAdd'
import ActiveAdd from './ActiveAdd'
import { Route, Routes } from 'react-router-dom'

const AdvertisingCenter = () => {
  return (
    <div className="w-[95%] m-auto  pt-10 pb-14">
      <Routes>
        <Route
          path="/archive"
          element={<ArchiveAdd />}>
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