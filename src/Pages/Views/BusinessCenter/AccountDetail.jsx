import React, { useState } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'
import RatingComp from '../../../Components/Dashboard/RatingComp'
import Invoice from '../../../Components/Dashboard/Invoice/Invoice'

const AccountDetail = () => {
  const [InvoiceModel, setInvoiceModel] = useState(false)

  const Data = [
    {
      Title: "Received from Jane C.",
      Dollar: "$123",
      Date: "Dec 01",
      Time: "11:34AM",
      Type: "Receive"
    },
    {
      Title: "Send from Jane C.",
      Dollar: "$123",
      Date: "Dec 01",
      Time: "11:34AM",
      Type: "Send"
    },
    {
      Title: "Send from Jane C.",
      Dollar: "$123",
      Date: "Dec 01",
      Time: "11:34AM",
      Type: "Send"
    },
    {
      Title: "Received from Jane C.",
      Dollar: "$123",
      Date: "Dec 01",
      Time: "11:34AM",
      Type: "Receive"
    },
    {
      Title: "Send from Jane C.",
      Dollar: "$123",
      Date: "Dec 01",
      Time: "11:34AM",
      Type: "Send"
    },
    {
      Title: "Received from Jane C.",
      Dollar: "$123",
      Date: "Dec 01",
      Time: "11:34AM",
      Type: "Receive"
    },
  ]
  return (
    <>
      <Invoice InvoiceModel={InvoiceModel} setInvoiceModel={setInvoiceModel} />
      <div className='flex flex-col gap-4'>

        <div className="flex flex-col lg:flex-row gap-4 items-cneter">
          <div className="bg-white rounded-xl basis-[70%] py-6 px-6">
            <div className="flex flex-col md:flex-row justify-between items-start">
              <div className="relative self-center">
                <img src={"../../assets/Prop/avatar.png"} alt="" className='w-28 h-28 rounded-full' />
              </div>
            </div>
            <div className="flex flex-col gap-6 mt-6">
              <div className="flex font-pop flex-col gap-2">
                <h2 className='text-xl font-semibold'>Liam Ridley</h2>
                <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
              </div>
              <div className="flex font-pop flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <img src="../../assets/Prop/Mobile.png" alt="" className='w-6 h-6' />
                  <p>(316) 555-0116</p>
                </div>
                <div className="flex gap-2 items-center">
                  <img src="../../assets/Prop/Gmail.png" alt="" className='w-6 h-6' />
                  <p>liamridley@gmail.com</p>
                </div>
              </div>
              <div className="flex font-pop flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <h3 className='text-lg text-lightGrey'>Your Skills</h3>
                  <p className='text-primarygreen text-sm'>Add new</p>
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                  <div className="flex gap-2 items-center bg-[#EFFBF1] border-2 border-primarygreen text-primarygreen py-1 px-4 rounded-2xl">
                    Adobe Photoshop
                    <IoCloseCircleOutline className='text-lg' />
                  </div>
                  <div className="flex gap-2 items-center bg-[#EFFBF1] border-2 border-primarygreen text-primarygreen py-1 px-4 rounded-2xl">
                    Adobe Photoshop
                    <IoCloseCircleOutline className='text-lg' />
                  </div>
                  <div className="flex gap-2 items-center bg-[#EFFBF1] border-2 border-primarygreen text-primarygreen py-1 px-4 rounded-2xl">
                    Adobe Photoshop
                    <IoCloseCircleOutline className='text-lg' />
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="basis-[30%] bg-white flex flex-col justify-between gap-4 rounded-2xl py-6 px-4">
            <h3 className='border-b-2 border-light text-center pb-4 text-lightGrey font-pop'>Latest reviews for this seller</h3>
            <div className="flex flex-col font-pop gap-2 max-h-72 overflow-y-auto py-4">
              <RatingComp />
              <RatingComp />
              <RatingComp />
              <RatingComp />
              <RatingComp />
              <RatingComp />
            </div>
            <div
              className="border-2 cursor-pointer hover:bg-primarygreen hover:border-primarygreen hover:text-white font-pop w-full text-center font-medium border-light py-2 px-4 rounded-full ease-in-out duration-300"
            >
              See all Reviews
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 font-pop">
          <h3 className='text-lg font-medium text-lightGrey'>Company Details</h3>
          <div className="bg-white py-6 px-4 rounded-xl flex font-pop flex-col gap-4">
            <div className="flex flex-col lg:flex-row justify-between gap-4">
              <div className='basis-[40%] flex flex-col gap-4'>
                <div className="flex flex-col gap-2">
                  <h1 className='text-lg font-medium'>Company Name</h1>
                  <p className='text-lightGrey'>Impluxor Digital</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className='text-lg font-medium'>CRN Regitser number</h1>
                  <p className='text-lightGrey'>999999999999</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className='text-lg font-medium'>Industry</h1>
                  <p className='text-lightGrey'>Graphic Design</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className='text-lg font-medium'>Address</h1>
                  <p className='text-lightGrey'>109 Model Town Lahore, Punjab, Pkaistan</p>
                </div>
              </div>
              <div className="basis-[40%] flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h1 className='text-lg font-medium'>Description</h1>
                  <p className='text-lightGrey'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est non amet cupiditate, nisi, nostrum error, voluptatum soluta aperiam autem sed ea voluptatem deserunt ab. Esse iste impedit ipsum velit, quidem tempore alias maxime culpa.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className='text-lg font-medium'>Services</h1>
                  <p className='text-lightGrey'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nihil dignissimos atque in beatae aliquid asperiores. Ea culpa deleniti ab dignissimos natus</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              <h1 className='text-lg font-medium'>Shareholder</h1>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col gap-2">
                  <h1 className='font-medium'>Name: <span className='font-normal'>Inzamam Yousaf</span></h1>
                  <p className='text-lightGrey'>Birthday: <span>10 Dec 2002</span></p>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className='font-medium'>Name: <span className='font-normal'>Inzamam Yousaf</span></h1>
                  <p className='text-lightGrey'>Birthday: <span>10 Dec 2002</span></p>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className='font-medium'>Name: <span className='font-normal'>Inzamam Yousaf</span></h1>
                  <p className='text-lightGrey'>Birthday: <span>10 Dec 2002</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="flex flex-col gap-2 font-pop">
          <h3 className='text-lg font-medium text-lightGrey'>ID Card</h3>
          <div className="bg-white py-6 px-4 rounded-xl">
            <div className="flex justify-end">
              <div className="flex gap-4 font-pop items-center">
                <button
                  className='bg-transparent border-2 border-primarygreen py-2 px-4 rounded-full text-primarygreen hover:text-white hover:bg-primarygreen ease-in-out duration-300'
                  onClick={() => { navigate("/admin-dashboard/user/chat-history") }}
                >
                  Preview
                </button>
                <button
                  className='bg-primarygreen border-2 border-primarygreen py-2 px-4 rounded-full text-white hover:text-primarygreen hover:bg-transparent ease-in-out duration-300'
                >
                  Download
                </button>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap items-center">
              <img src="../../assets/Prop/IDCard.png" alt="" className='w-64 h-40' />
              <img src="../../assets/Prop/IDCard.png" alt="" className='w-64 h-40' />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 font-pop">
          <h3 className='text-lg font-medium text-lightGrey'>Residence Registration</h3>
          <div className="bg-white py-6 px-4 rounded-xl">
            <div className="flex justify-end">
              <div className="flex gap-4 font-pop items-center">
                <button
                  className='bg-transparent border-2 border-primarygreen py-2 px-4 rounded-full text-primarygreen hover:text-white hover:bg-primarygreen ease-in-out duration-300'
                  onClick={() => { navigate("/admin-dashboard/user/chat-history") }}
                >
                  Preview
                </button>
                <button
                  className='bg-primarygreen border-2 border-primarygreen py-2 px-4 rounded-full text-white hover:text-primarygreen hover:bg-transparent ease-in-out duration-300'
                >
                  Download
                </button>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap items-center font-pop">
              <h3 className='text-xl'>No Document Uploaded</h3>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 font-pop">
          <h3 className='text-lg font-medium text-lightGrey'>Company Doc</h3>
          <div className="bg-white py-6 px-4 rounded-xl">
            <div className="flex justify-end">
              <div className="flex gap-4 font-pop items-center">
                <button
                  className='bg-transparent border-2 border-primarygreen py-2 px-4 rounded-full text-primarygreen hover:text-white hover:bg-primarygreen ease-in-out duration-300'
                  onClick={() => { navigate("/admin-dashboard/user/chat-history") }}
                >
                  Preview
                </button>
                <button
                  className='bg-primarygreen border-2 border-primarygreen py-2 px-4 rounded-full text-white hover:text-primarygreen hover:bg-transparent ease-in-out duration-300'
                >
                  Download
                </button>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap items-center font-pop">
              <h3 className='text-xl'>No Document Uploaded</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 font-pop">
          <h3 className='text-lg font-medium text-lightGrey'>User Transaction History</h3>
          <div className='flex flex-col gap-2 overflow-x-scroll' >
            <table className=' border-spacing-y-4 border-separate'>
              <tbody className=''>
                {Data.map((item, index) => (
                  <tr className='font-pop '>
                    <td className='flex bg-white  py-4 px-3 md:px-6 gap-4 rounded-l-2xl items-center'>
                      <img
                        src={`../../assets/Prop/${item.Type == "Receive" ? "reciveicon.png" : "sendicon.png"}`}
                        alt=""
                        className='w-6'
                      />
                      <h2 className='font-pop w-max font-medium'>
                        {item.Title}
                      </h2>
                    </td>
                    <td className='text-primarygreen bg-white  py-4 px-3 md:px-6'>
                      <h2 className='w-max'>
                        +{item.Dollar}
                      </h2>
                    </td>
                    <td className='text-gray-400 text-sm bg-white  py-4 px-3 md:px-6'>
                      <h2 className='w-max'>
                        {item.Date}
                      </h2>
                    </td>
                    <td className='text-gray-400 text-sm bg-white  py-4 px-3 md:px-6'>
                      <h2 className='w-max'>
                        {item.Time}
                      </h2>
                    </td>
                    <td className='py-4 px-2 bg-white  rounded-r-2xl'>
                      <img
                        src={`../../assets/Prop/download.png`}
                        alt=""
                        className='w-6'
                        onClick={() => {
                          setInvoiceModel(true)
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-2 font-pop">
          <h3 className='text-lg font-medium text-lightGrey'>Verification Actions</h3>
          <div className="bg-white py-6 px-4 rounded-xl">
            <div className="relative border-2 border-light rounded-xl py-4 px-4">
              <div className="absolute -top-3 px-2 left-6 bg-white">Verification</div>
              <div className="flex font-pop text-black flex-row gap-2 items-center">
                <select
                  name=""
                  id=""
                  className="border-none outline-none w-full px-4 font-pop"
                >
                  <option value="">Select Action</option>
                  <option value="Declined">Declined</option>
                  <option value="Approved">Approved</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
            </div>
          </div>
        </div>


        <button
          className='bg-primarygreen font-pop border-2 border-primarygreen py-2 px-4 rounded-full text-white hover:text-primarygreen hover:bg-transparent ease-in-out duration-300'
        >
          Send Request Message
        </button>

      </div>
    </>
  )
}

export default AccountDetail