import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HelpCenter from './HelpCenter'
import HelpChatDetail from './HelpChatDetail'

const HelpMain = () => {
    return (
        <div className='min-h-[inherit]'>
            <Routes>
                <Route
                    path="/"
                    element={<HelpCenter />}>
                </Route>
                <Route
                    path="/chat-detail"
                    element={<HelpChatDetail />}>
                </Route>
            </Routes>
        </div>
    )
}

export default HelpMain