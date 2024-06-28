import React from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const Invoice = ({ InvoiceModel, setInvoiceModel }) => {
    
    const downloadInvoice = () => {
        const invoice = document.getElementById('invoice')
        html2canvas(invoice).then((canvas) => {
            const imgData = canvas.toDataURL('image/png')
            const pdf = new jsPDF('p', 'mm', 'a4')
            const imgProps = pdf.getImageProperties(imgData)
            const pdfWidth = pdf.internal.pageSize.getWidth()
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
            pdf.save('invoice.pdf')
        })
    }

    return (
        <div>
            {InvoiceModel &&
                <div className='fixed z-[9999] top-0 left-0 w-screen h-screen'>
                    <div className="absolute z-40 bg-black/50 w-full h-full" onClick={() => { setInvoiceModel(false) }}></div>
                    <div className="bg-white relative px-6 pt-6 pb-6 rounded-xl my-10 z-50 h-[90%] flex flex-col gap-4 w-[90%] lg:w-[70%] mx-auto max-h-[90vh] overflow-y-auto">
                        <button
                            className='bg-primarygreen border-2 border-primarygreen hover:bg-transparent hover:text-primarygreen font-pop text-lg text-white font-semibold w-fit self-end rounded-xl py-2 px-4 ease-in-out duration-300'
                            onClick={downloadInvoice}
                        >
                            Download
                        </button>
                        <div className="bg-white shadow-xl " id="invoice">
                            <div className="bg-primarygreen py-4 px-4 flex justify-between items-center font-pop">
                                <h2 className='text-2xl text-white font-bold'>Paycott</h2>
                                <div className="flex flex-col items-end gap-1 font-pop text-white">
                                    <h4 className='text-lg font-medium'>ARoye Khan</h4>
                                    <h5>Ph No: +92 345 0987834</h5>
                                    <h5>Email ID: company@gmail.com</h5>
                                </div>
                            </div>
                            <div className="py-6 min-h-[90vh] px-4 flex flex-col gap-44 justify-between">
                                <div className="flex flex-col gap-6">
                                    <div className="flex justify-between">
                                        <div className="flex font-pop flex-col gap-1">
                                            <p>Invoice To:</p>
                                            <h4 className='font-semibold text-lg'>Zayn Ahamed</h4>
                                        </div>
                                        <div className="flex flex-col gap-1 items-end font-pop">
                                            <h2 className='text-2xl font-bold'>INVOICE</h2>
                                            <p className='text-lightGrey text-sm font-medium'>24 May 2023</p>
                                            <p className='text-lightGrey text-sm font-medium'>01 July 2023</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="relative border-b-2 border-black overflow-x-auto">
                                            <table className="w-full font-pop text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <thead className="text-sm text-gray-700 uppercase border-b-2 border-black dark:bg-gray-700 dark:text-gray-400">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-3">
                                                            ITEM DESCRIPTION
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            PRICE
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            TOTAL
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="bg-white font-pop border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            Logo Design
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            $2000
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            $2000
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white font-pop border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            Flyer Design
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            $2000
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            $2000
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white font-pop dark:bg-gray-800">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            Website Design
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            $2000
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            $4000
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="relative overflow-x-auto">
                                            <table className="w-full font-pop text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <thead className="text-sm text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-3">
                                                            BANK INFO
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            SUB TOTAL
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 font-normal">
                                                            $10500
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="bg-white font-pop border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            Account No: 7584 8747 8485
                                                        </th>
                                                        <td className="px-6 py-4 font-bold">
                                                            TAX
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            $200
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white font-pop border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            Code: 13B 57 62
                                                        </th>
                                                        <td className="px-6 py-4 font-semibold">
                                                            GRAND TOTAL
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            $10700
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-col font-pop gap-2 border-b-2 border-light">
                                        <h3 className='text-lg font-bold'>Notes</h3>
                                        <p>Add the notes for the invoice</p>
                                    </div>
                                    <p className='font-bold font-pop text-center'>Thank You For Your Business</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Invoice
