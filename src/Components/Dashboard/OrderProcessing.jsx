import React from 'react'

const OrderProcessing = () => {
    return (
        <div className="bg-white rounded-lg basis-[60%] py-6">
            <div className="flex flex-row justify-between items-center font-pop  px-6 pb-6 border-b-2 border-light">
                <h2 className="text-lg text-lightGrey font-bold">Order processing</h2>
            </div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="font-pop text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Offer
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Completion Rate
                            </th>
                        </tr>
                    </thead>
                    <tbody className="font-pop">
                        <tr className="bg-white text-lightGrey border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4">
                                1
                            </td>
                            <td className="px-6 py-4">
                                Service
                            </td>
                            <td className="px-6 py-4">
                                <div className="bg-primarygreen/30 border-2 w-fit rounded-full border-primarygreen p-2 text-primarygreen ">
                                    Goods
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex gap-2 items-center">
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                        <div className="bg-[#71DD37] h-2.5 rounded-full" style={{ width: "64.91%" }}></div>
                                    </div>
                                    <p>64.91%</p>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white text-lightGrey border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4">
                                2
                            </td>
                            <td className="px-6 py-4">
                                Service
                            </td>
                            <td className="px-6 py-4">
                                <div className="bg-primarygreen/30 border-2 w-fit rounded-full border-primarygreen p-2 text-primarygreen ">
                                    Goods
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex gap-2 items-center">
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                        <div className="bg-[#71DD37] h-2.5 rounded-full" style={{ width: "64.91%" }}></div>
                                    </div>
                                    <p>64.91%</p>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white text-lightGrey border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4">
                                3
                            </td>
                            <td className="px-6 py-4">
                                Service
                            </td>
                            <td className="px-6 py-4">
                                <div className="bg-primarygreen/30 border-2 w-fit rounded-full border-primarygreen p-2 text-primarygreen ">
                                    Goods
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex gap-2 items-center">
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                        <div className="bg-[#71DD37] h-2.5 rounded-full" style={{ width: "64.91%" }}></div>
                                    </div>
                                    <p>64.91%</p>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white text-lightGrey border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4">
                                4
                            </td>
                            <td className="px-6 py-4">
                                Service
                            </td>
                            <td className="px-6 py-4">
                                <div className="bg-primarygreen/30 border-2 w-fit rounded-full border-primarygreen p-2 text-primarygreen ">
                                    Goods
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex gap-2 items-center">
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                        <div className="bg-[#71DD37] h-2.5 rounded-full" style={{ width: "64.91%" }}></div>
                                    </div>
                                    <p>64.91%</p>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white text-lightGrey border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4">
                                5
                            </td>
                            <td className="px-6 py-4">
                                Service
                            </td>
                            <td className="px-6 py-4">
                                <div className="bg-primarygreen/30 border-2 w-fit rounded-full border-primarygreen p-2 text-primarygreen ">
                                    Goods
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex gap-2 items-center">
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                        <div className="bg-[#71DD37] h-2.5 rounded-full" style={{ width: "64.91%" }}></div>
                                    </div>
                                    <p>64.91%</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default OrderProcessing