import React, { useContext, useEffect, useState } from 'react'
import Nav from '../Components/Nav'
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import AlertContext from '../Context/Alert/AlertContext';
import Home from './Views/Home';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosLogOut } from 'react-icons/io';
import { IoNotificationsOutline } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa';
import Transaction from './Views/Transaction';
import User from './Views/User';
import UserTransactions from './Views/UserTransactions';
import UserProfile from './Views/UserProfile';
import UserChatHistory from './Views/UserChatHistory';
import ChatDetail from './Views/ChatDetail';
import Main from './Views/Verification/Main';
import Ratings from './Views/Ratings';
import PaymentSetting from './Views/PaymentSetting';
import GenralSetting from './Views/GenralSetting';
import MainTicket from './Views/Ticket/Main';
import HelpCenter from './Views/HelpCenter/HelpCenter';
import HelpMain from './Views/HelpCenter/Main';
import MainMarket from './Views/Marktplace/MainMarket';
import Media from './Views/Media';
import Logs from './Views/Logs';
import MainUser from './Views/AdminUsers/MainUser';
import AdvertisingCenter from './Views/AdvertisingCenter.jsx/AdvertisingCenter';
import MainBusiness from './Views/BusinessCenter/MainBusiness';
import { BaseURL } from '../assets/Data/BaseURL';
import MainProfile from './Views/Profile/MainProfile';
import Setting from './Views/BusinessCenter/Setting';
import AdminSetting from './Views/Profile/AdminSetting/AdminSetting';
import LogDetail from './Views/LogDetail';
import TransactionDetail from './Views/TransactionDetail';

const AdminDashboard = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const [Profile, setProfile] = useState(false)

    const location = useLocation()
    const navigate = useNavigate()

    const [Name, setName] = useState('')
    const [ProfileImage, setProfileImage] = useState('')

    const AletContext = useContext(AlertContext);
    const { showAlert } = AletContext;

    const fetchAdminData = async () => {
        try {
            const response = await fetch(`${BaseURL}/adminauth/getAdminself`, {
                headers: {
                    AdminODSToken: sessionStorage.getItem('token')
                }
            });
            const data = await response.json()
            setName(data.Name)
            setProfileImage(data.ProfilePhoto)
        } catch (error) {
            console.error('Error fetching roles:', error);
            showAlert('Error fetching roles', 'danger');
        }
    };

    useEffect(() => {
        fetchAdminData()
    }, [])


    const handleLogout = () => {
        sessionStorage.removeItem("token");
        navigate('/login');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            navigate('/admin-dashboard')
        } else {
            navigate('/login')
        }
    }, [])




    return (
        <>
            <div className='flex flex-row min-h-[100vh] max-h-[100vh] overflow-hidden bg-[#f3f3f3]'>
                <div
                    className={`xl:basis-[15%] xl:w-[15%] border-r-2 border-light z-50 absolute xl:relative w-[80%] md:w-[55%] h-[100%] ${isMenuOpen && 'hidden'} xl:block xl:w-auto bg-white`}
                    style={{ overflow: "unset" }}
                >
                    <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} toggleMenu={toggleMenu} />
                </div>
                <div className="basis-[100%] max-h-[100vh] xl:basis-[85%] xl:w-[85%] w-[100%] relative">
                    <div className='flex flex-row items-center justify-between gap-0 md:gap-20 h-auto shadow-xl py-2 md:py-4 bg-white px-4 md:px-10 '>
                        <button
                            type="button"
                            className={`nline-flex p-2 text-2xl md:text-3xl xl:hidden rounded-md bg-transparent hover:bg-gray-100 focus:outline-none`}
                            onClick={toggleMenu}
                        >
                            <GiHamburgerMenu />
                        </button>
                        <h2 className='text-lg md:text-2xl font-pop font-bold'>Dashboard</h2>
                        <IoIosLogOut className='text-3xl md:text-3xl xl:hidden' onClick={handleLogout} />
                        <div className="xl:flex flex-row gap-3 items-center hidden">
                            <div className="bg-gray-100 lg:block hidden font-semibold rounded-full p-2 text-primarygreen font-pop text-lg">
                                en
                            </div>
                            <div className="bg-gray-100 lg:block hidden font-semibold rounded-full p-2 text-gray-600 font-pop text-2xl">
                                <IoNotificationsOutline />
                            </div>
                            <div className='flex flex-row gap-2 items-center cursor-pointer relative' onClick={() => { setProfile(!Profile) }}>
                                <img src={ProfileImage} alt="" className='rounded-full w-8 md:w-12 h-8 md:h-12' />
                                <h2 className='font-pop text-base md:text-lg font-semibold'>{Name}</h2>
                                <FaChevronDown className='text-lg' />
                                {Profile && <div className="flex rounded-xl z-[999999999] right-0 w-[100%] flex-col gap-2 bg-white absolute top-[100%] shadow-2xl  font-pop text-lg font-medium py-2 px-4">
                                    <Link to={"/admin-dashboard/profile"}>
                                        <h3>Profile</h3>
                                    </Link>
                                    <Link to={"/admin-dashboard/profilesetting"}>
                                        <h3>Setting</h3>
                                    </Link>
                                    <Link to={"/"}>
                                        <h3>
                                            SignOut
                                        </h3>
                                    </Link>
                                </div>}
                            </div>
                        </div>
                    </div>
                    <div className='max-h-[90vh] min-h-[90vh] overflow-y-auto'>
                        <Routes>
                            <Route
                                path="/"
                                element={<Home />}>
                            </Route>
                            <Route
                                path="/profile"
                                element={<MainProfile />}>
                            </Route>
                            <Route
                                path="/profilesetting"
                                element={<AdminSetting />}>
                            </Route>
                            <Route
                                path="/verification/*"
                                element={<Main />}>
                            </Route>
                            <Route
                                path="/add-center/*"
                                element={<AdvertisingCenter />}>
                            </Route>
                            <Route
                                path="/business-center/*"
                                element={<MainBusiness />}>
                            </Route>
                            <Route
                                path="/tickets/*"
                                element={<MainTicket />}>
                            </Route>
                            <Route
                                path="/transactions"
                                element={<Transaction />}>
                            </Route>
                            <Route
                                path="/transaction-detail"
                                element={<TransactionDetail />}>
                            </Route>
                            <Route
                                path="/users"
                                element={<User />}>
                            </Route>
                            <Route
                                path="/admin-roles/*"
                                element={<MainUser />}>
                            </Route>
                            <Route
                                path="/user/transaction"
                                element={<UserTransactions />}>
                            </Route>
                            <Route
                                path="/user/Profile"
                                element={<UserProfile />}>
                            </Route>
                            <Route
                                path="/user/chat-history"
                                element={<UserChatHistory />}>
                            </Route>
                            <Route
                                path="/user/chat-detail"
                                element={<ChatDetail />}>
                            </Route>
                            <Route
                                path="/rating-feedback"
                                element={<Ratings />}>
                            </Route>
                            <Route
                                path="/logs"
                                element={<Logs />}>
                            </Route>
                            <Route
                                path="/transaction-log-detail"
                                element={<LogDetail />}>
                            </Route>
                            <Route
                                path="/payment-setting"
                                element={<PaymentSetting />}>
                            </Route>
                            <Route
                                path="/genral-setting"
                                element={<GenralSetting />}>
                            </Route>
                            <Route
                                path="/media"
                                element={<Media />}>
                            </Route>
                            <Route
                                path="/help-center/*"
                                element={<HelpMain />}>
                            </Route>
                            <Route
                                path="/marketplace/*"
                                element={<MainMarket />}>
                            </Route>
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard
