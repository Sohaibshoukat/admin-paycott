import React from 'react'
import { FaDownload } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Logs = () => {

  const navigate = useNavigate()

  const Data = [
    {
      User: "Kristan Watson",
      Date: "10 Dec 2023",
      Email: "kristanwatson@gmail.com",
      Role: "Buyer",
      LogType: "Transaction"
    },
    {
      User: "Kristan Watson",
      Date: "10 Dec 2023",
      Email: "kristanwatson@gmail.com",
      Role: "Buyer",
      LogType: "Login"
    },
    {
      User: "Kristan Watson",
      Date: "10 Dec 2023",
      Email: "kristanwatson@gmail.com",
      Role: "Buyer",
      LogType: "Withdraw"
    },
    {
      User: "Kristan Watson",
      Date: "10 Dec 2023",
      Email: "kristanwatson@gmail.com",
      Role: "Buyer",
      LogType: "Adds"
    },
    {
      User: "Kristan Watson",
      Date: "10 Dec 2023",
      Email: "kristanwatson@gmail.com",
      Role: "Buyer",
      LogType: "Order"
    },
    {
      User: "Kristan Watson",
      Date: "10 Dec 2023",
      Email: "kristanwatson@gmail.com",
      Role: "Buyer",
      LogType: "Login"
    },
    {
      User: "Kristan Watson",
      Date: "10 Dec 2023",
      Email: "kristanwatson@gmail.com",
      Role: "Buyer",
      LogType: "Withdraw"
    },
    {
      User: "Kristan Watson",
      Date: "10 Dec 2023",
      Email: "kristanwatson@gmail.com",
      Role: "Buyer",
      LogType: "Adds"
    },
    {
      User: "Kristan Watson",
      Date: "10 Dec 2023",
      Email: "kristanwatson@gmail.com",
      Role: "Buyer",
      LogType: "Order"
    },
    {
      User: "Kristan Watson",
      Date: "10 Dec 2023",
      Email: "kristanwatson@gmail.com",
      Role: "Buyer",
      LogType: "Login"
    },
    {
      User: "Kristan Watson",
      Date: "10 Dec 2023",
      Email: "kristanwatson@gmail.com",
      Role: "Buyer",
      LogType: "Withdraw"
    },
    {
      User: "Kristan Watson",
      Date: "10 Dec 2023",
      Email: "kristanwatson@gmail.com",
      Role: "Buyer",
      LogType: "Adds"
    },
  ]

  return (
    <div className="w-[95%] m-auto  pt-10 pb-14">
      <div className="flex flex-col gap-4 lg:flex-row justify-between font-pop lg:items-center">
        <div className="flex gap-4 text-gray-400 font-pop md:gap-6 items-center">
          <div className="flex gap-1 items-center">
            <h3 className='font-medium'>Logs:</h3>
            <select
              name=""
              id=""
              className='border-none outline-none bg-transparent font-pop'
            >
              <option value="">All</option>
              <option value="">Orders</option>
              <option value="">Login</option>
              <option value="">Withdraw</option>
              <option value="">Adds</option>
            </select>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="date"
              className='bg-transparent py-1 px-2 rounded-xl border-[1px] border-lightGrey'
            />
            <h2 className='font-bold'>-</h2>
            <input
              type="date"
              className='bg-transparent py-1 px-2 rounded-xl border-[1px] border-lightGrey'
            />
          </div>
        </div>
        <div className="flex gap-2 font-pop text-lightGrey items-center">
          <FaDownload className='text-xl' />
          <h2>Download CSV</h2>
        </div>
      </div>
      <div className='bg-transparent overflow-x-auto font-pop w-full my-2 md:my-6'>
        <table className='w-full overflow-x-scroll font-pop border-spacing-y-4 border-separate'>
          <thead>
            <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Date</th>
            <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">User</th>
            <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Email</th>
            <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Role</th>
            <th scope="col" class="px-2 md:px-6 py-1 md:py-3 text-left font-medium text-gray-500 uppercase">Log Type</th>
          </thead>
          <tbody>
            {Data?.map((item, index) => (
              <tr key={index} onClick={() => { navigate("/admin-dashboard/transaction-log-detail") }} className='cursor-pointer'>
                <td class="px-2 md:px-6 rounded-l-2xl font-pop text-sm md:text-base bg-white my-3 py-3 text-left ">
                  <h2 className='font-normal w-max text-lightGrey'>
                    {item.Date}
                  </h2>
                </td>
                <td class="px-2 md:px-6 bg-white my-3 text-base md:text-lg font-semibold py-3 text-left w-max min-w-[30%]">
                  <h2 className='font-semibold w-max'>
                    {item?.User}
                  </h2>
                </td>
                <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 font-normal text-left ">
                  <h2 className='w-max'>{item?.Email}</h2>
                </td>
                <td class="px-2 md:px-6 bg-white my-3 py-1 md:py-3 text-left font-semibold ">
                  <h2 className='w-max'>{item?.Role}</h2>
                </td>
                <td class="px-2 md:px-6 rounded-r-2xl bg-white my-3 py-1 md:py-3 text-left ">
                  <h2 className='w-max'>{item?.LogType}</h2>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Logs