import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HelpCenter from './HelpCenter'
import HelpChatDetail from './HelpChatDetail'
import NewChat from './NewChat'
import ActiveChat from './ActiveChat'
import CloseChat from './CloseChat'

const HelpMain = () => {
    return (
        <div className='min-h-[inherit]'>
            <Routes>
                <Route
                    path="/"
                    element={<NewChat />}>
                </Route>
                <Route
                    path="/active"
                    element={<ActiveChat />}>
                </Route>
                <Route
                    path="/close-chat"
                    element={<CloseChat />}>
                </Route>
                <Route
                    path="/chat"
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