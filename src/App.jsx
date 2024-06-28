import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AlertState from './Context/Alert/AlertState'
import Alert from './Components/Alert'
import Redirect from './Pages/Redirect'
import Login from './Pages/Login'
import AdminDashboard from './Pages/AdminDashboard'
import CreatePassword from './Pages/CreatePassword'

function App() {
  return (
    <>
      <BrowserRouter>
        <AlertState>
          <Alert />
          <div className='overflow-hidden'>
            <Routes>
              <Route path="/" element={<Redirect />} />
              <Route path="/login" element={<Login />} />
              <Route path="/createpassword/:id" element={<CreatePassword />} />
              <Route path="/admin-dashboard/*" element={<AdminDashboard />} /> {/* Using * for sublinks */}
            </Routes>
          </div>
        </AlertState>
      </BrowserRouter>
    </>
  )
}

export default App
