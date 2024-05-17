import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Importing useLocation
import { GrClose } from 'react-icons/gr';
import { IoIosLogOut, IoMdPricetags } from 'react-icons/io';
import { RiProfileLine } from "react-icons/ri"
import { FaMoneyBillAlt, FaProductHunt, FaUserFriends, FaUserPlus, FaUserTimes } from 'react-icons/fa'
import { FaUserCheck } from 'react-icons/fa6'
import { MdAssignmentAdd, MdDesignServices } from 'react-icons/md'
import { RxDashboard } from 'react-icons/rx';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { FiTag, FiUser } from 'react-icons/fi';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { TfiMenuAlt } from 'react-icons/tfi';

const Nav = ({ isMenuOpen, setIsMenuOpen, toggleMenu }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [Users, setUsers] = useState(false)
    const [Marketplace, setMarketplace] = useState(false)

    const [ActiveSubMenu, setActiveSubMenu] = useState(null)

    const tabs = [
        {
            name: 'Dashboard',
            Icon: RxDashboard,
            link: '/admin-dashboard',
        },
        {
            name: 'Verification Center',
            Icon: HiOutlineClipboardDocumentList,
            type: "Main",
            SubLink: [
                {
                    link: "Request",
                    icon: MdDesignServices,
                    to: '/admin-dashboard/verification/request'
                },
                {
                    link: "Pending",
                    icon: FaProductHunt,
                    to: '/admin-dashboard/verification/pending'
                },
            ]
        },
        {
            name: 'Advertising Center',
            Icon: FiTag,
            type: "Main",
            SubLink: [
                {
                    link: "Active",
                    icon: MdDesignServices,
                    to: '/admin-dashboard/add-center/active'
                },
                {
                    link: "Request",
                    icon: FaProductHunt,
                    to: '/admin-dashboard/add-center/request'
                },
                {
                    link: "Archive",
                    icon: FaProductHunt,
                    to: '/admin-dashboard/add-center/archive'
                },
            ]
        },
        {
            name: 'Business Center',
            Icon: IoChatbubbleEllipsesOutline,
            type: "Main",
            SubLink: [
                {
                    link: "Application",
                    icon: MdDesignServices,
                    to: '/admin-dashboard/business-center/application',
                },
                {
                    link: "Active",
                    icon: FaProductHunt,
                    to: '/admin-dashboard/business-center/active'
                },
                {
                    link: "Settings",
                    icon: FaProductHunt,
                    to: '/admin-dashboard/business-center/setting'
                },
            ]
        },
        {
            name: 'Tickets',
            Icon: FiTag,
            type: "Main",
            SubLink: [
                {
                    link: "New Ticket's",
                    icon: MdDesignServices,
                    to: '/admin-dashboard/tickets/new',
                },
                {
                    link: "Pending Ticket's",
                    icon: FaProductHunt,
                    to: '/admin-dashboard/tickets/pending'
                },
                {
                    link: "Archive Ticket's",
                    icon: FaProductHunt,
                    to: '/admin-dashboard/tickets/archive'
                },
            ]
        },
        {
            name: 'Users',
            Icon: FiUser,
            type: "Main",
            SubLink: [
                {
                    link: "Users",
                    icon: MdDesignServices,
                    to: "/admin-dashboard/users/"
                },
                {
                    link: "Admin Roles",
                    icon: FaProductHunt,
                    to: "/admin-dashboard/admin-roles/"
                },
            ]
        },
        {
            name: 'Log',
            Icon: TfiMenuAlt,
            link: "/admin-dashboard/logs/"
        },
        {
            name: "Transactions",
            Icon: MdDesignServices,
            link: "/admin-dashboard/transactions"
        },
        {
            name: "MarketPlace",
            Icon: FaProductHunt,
            type: "Main",
            SubLink: [
                {
                    link: "Overview",
                    icon: MdDesignServices,
                    to: "/admin-dashboard/marketplace/"
                },
                {
                    link: "Service Ad's",
                    icon: MdDesignServices,
                    to: "/admin-dashboard/marketplace/service-ads"
                },
                {
                    link: "Product Ad's",
                    icon: MdDesignServices,
                    to: "/admin-dashboard/marketplace/product-ads"
                },
            ]
        },
        {
            name: "Payment Settings",
            Icon: FaProductHunt,
            link: "/admin-dashboard/payment-setting"
        },
        {
            name: "Media",
            Icon: FaProductHunt,
            link: "/admin-dashboard/media/"
        },
        {
            name: "Rating & Feedback",
            Icon: FaProductHunt,
            link: "/admin-dashboard/rating-feedback"
        },
        {
            name: "Help Center",
            Icon: FaProductHunt,
            link: "/admin-dashboard/help-center/"
        },
        {
            name: "General Settings",
            Icon: FaProductHunt,
            link: "/admin-dashboard/genral-setting"
        },
    ];

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("adminID")
        navigate('/login');
    };

    return (
        <div className={`md:flex flex-col relative top-0 left-0 min-h-[100vh] max-h-[100vh] overflow-hidden`} style={{ overflow: "unset" }}>
            <div className="flex-col absolute z-50 top-[3%] right-[-20%] md:mt-0 xl:hidden">
                <button
                    type="button"
                    className="p-2 text-black text-4xl md:text-5xl focus:outline-none xl:hidden "
                    onClick={() => { setIsMenuOpen(!isMenuOpen); }}
                >
                    <GrClose />
                </button>
            </div>
            <div className="flex basis-[5%] py-2 h-[10%] items-center justify-center pr-2  bg-white">
                <h1 className="ml-2 oxygen-bold text-3xl animate__animated animate__backInLeft animate__slow">paycott.</h1>
            </div>
            <ul className="pb-14 overflow-y-auto max-h-[90vh]  pt-6 font-pop">
                {tabs.map((tab, index) => (
                    <>
                        {tab?.type == "Main" ?
                            <div>
                                <div
                                    className={`flex flex-row items-center cursor-pointer gap-4 px-4 md:px-6 py-4 border-l-2 text-gray-400 ${location.pathname === tab.link ? 'bg-primarygreen/20 text-primarygreen  border-primarygreen' : "border-white"}`}
                                    onClick={() => {
                                        if(tab.name==ActiveSubMenu){
                                            setActiveSubMenu(null)
                                        }else{
                                            setActiveSubMenu(tab.name)
                                        }
                                    }}
                                >
                                    <tab.Icon />
                                    <h2 className='font-pop text-lightGrey font-medium'>{tab.name}</h2>
                                </div>
                                <div className={`py-1 flex flex-col gap-1 ${ActiveSubMenu == tab.name ? 'block' : 'hidden'}`}>
                                    {tab?.SubLink?.map((item2, index2) => (
                                        <Link to={item2.to} key={index2}>
                                            <div 
                                                className={`
                                                    flex flex-row items-center gap-2 px-2  border-l-4 md:px-8 py-2 text-gray-400 
                                                    ${location.pathname === item2?.to ? 'border-primarygreen bg-primarygreen/20 text-primarygreen' : 'border-white'} 
                                                    hover:bg-primarygreen/20 hover:border-primarygreen hover:text-primarygreen ease-in-out duration-300
                                                `}
                                            >
                                                <item2.icon className='text-2xl opacity-0' />
                                                <h2 className='font-pop text-base'>{item2.link}</h2>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            : <Link key={index} to={tab?.link}>
                                <li
                                    className={`
                                px-4 md:px-6 py-4 cursor-pointer font-medium border-l-4 text-lightGrey text-base 
                                ${location.pathname === tab?.link ? 'border-primarygreen bg-primarygreen/20 text-primarygreen' : 'border-white'} 
                                hover:bg-primarygreen/20 hover:border-primarygreen hover:text-primarygreen ease-in-out duration-300`
                                    }
                                >
                                    <div className="flex flex-row gap-4 items-center">
                                        <tab.Icon />
                                        {tab.name}
                                    </div>
                                </li>
                            </Link>}
                    </>
                ))}
            </ul>
            <div
                type="button"
                className="absolute flex flex-row items-center gap-4 bottom-0 left-0 w-full px-4 py-4 font-semibold  text-base bg-primarygreen/80 text-white hover:bg-primarygreen ease-in-out duration-300"
                onClick={handleLogout}
            >
                <IoIosLogOut className='text-2xl' />
                Logout
            </div>
        </div>
    )
}

export default Nav