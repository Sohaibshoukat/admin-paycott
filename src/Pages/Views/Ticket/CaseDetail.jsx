import React from 'react'
import BuyerInformation from './BuyerInformation'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import SellerInformation from './SellerInformation'
import Communication from './Communication'
import Resolution from './Resolution'
import { FaCheckCircle } from 'react-icons/fa'
import { MdNavigateNext } from 'react-icons/md'
import CaseReview from './CaseReview'

const CaseDetail = () => {

    const location = useLocation();


    const Nav = [
        {
            Name: "Seller Information",
            Link: "/admin-dashboard/tickets/case-detail/seller-info"
        },
        {
            Name: "Buyer Information",
            Link: "/admin-dashboard/tickets/case-detail/buyer-info"
        },
        {
            Name: "Communication",
            Link: "/admin-dashboard/tickets/case-detail/communication"
        },
        {
            Name: "Case Review",
            Link: "/admin-dashboard/tickets/case-detail/case-review"
        },
        {
            Name: "Resolution",
            Link: "/admin-dashboard/tickets/case-detail/resolution"
        }
    ]
    return (
        <div>
            <div className="border-b-2 border-lightGrey py-6 px-6">
                <div className="flex flex-col lg:flex-row gap-4 justify-center lg:items-center">
                    {Nav.map((item,index)=>(
                        <Link to={item.Link} key={index}>
                        <div 
                            className={`flex text-lg font-semibold gap-1 items-center font-pop ${location.pathname === item.Link ?"text-primarygreen":"text-lightGrey"}`}
                            key={index}
                        >
                                <FaCheckCircle/>
                                <h3>{item.Name}</h3>
                                <MdNavigateNext/>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div>
                <Routes>
                    <Route
                        path="/seller-info"
                        element={<SellerInformation />}>
                    </Route>
                    <Route
                        path="/buyer-info"
                        element={<BuyerInformation />}>
                    </Route>
                    <Route
                        path="/communication"
                        element={<Communication />}>
                    </Route>
                    <Route
                        path="/case-review"
                        element={<CaseReview />}>
                    </Route>
                    <Route
                        path="/resolution"
                        element={<Resolution />}>
                    </Route>
                </Routes>
            </div>
        </div>
    )
}

export default CaseDetail