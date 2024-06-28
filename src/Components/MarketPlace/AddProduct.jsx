import React, { useContext, useEffect, useState } from 'react'
import AlertContext from '../../Context/Alert/AlertContext';
import axios from 'axios';
import { BaseURL } from '../../assets/Data/BaseURL';

const AddProduct = ({ ModelProduct, setModelProduct, fetchProduct, EditProduct, setEditProduct }) => {
    const [categoryName, setCategoryName] = useState("");

    const AletContext = useContext(AlertContext);
    const { showAlert } = AletContext;

    const handleCategoryNameChange = (e) => {
        setCategoryName(e.target.value);
    }

    const fetchProductSkills = async () => {
        try {
            const response = await fetch(`${BaseURL}/Marketplace/Product/productcategoryDetail/${EditProduct}`, {
                headers: {
                    AdminODSToken: sessionStorage.getItem('token')
                }
            });
            const data = await response.json()
            setCategoryName(data.name)
        } catch (error) {
            showAlert('Error fetching Products', 'danger');
        }
    };

    useEffect(() => {
        if (EditProduct) {
            fetchProductSkills()
        }
    }, [EditProduct])

    const handleAddProduct = async () => {
        try {
            let response;
            if (EditProduct) {
                response = await axios.put(`${BaseURL}/Marketplace/Product/editproductcategory/${EditProduct}`, {
                    name: categoryName,
                }, {
                    headers: {
                        AdminODSToken: sessionStorage.getItem('token')
                    }
                });
            } else {
                response = await axios.post(`${BaseURL}/Marketplace/Product/addproductcategory`, {
                    name: categoryName,
                }, {
                    headers: {
                        AdminODSToken: sessionStorage.getItem('token')
                    }
                });
            }
            setEditProduct(null)
            setModelProduct(false)
            setCategoryName("")
            showAlert("Product Added", 'success');
            fetchProduct();
        } catch (error) {
            showAlert(error.message, 'danger');
        }
    }

    const handleDeleteProduct = async () => {
        try {
            await axios.delete(`${BaseURL}/Marketplace/Product/productcategoryDel/${EditProduct}`, {
                headers: {
                    AdminODSToken: sessionStorage.getItem('token')
                }
            });
            setEditProduct(null);
            setModelProduct(false);
            showAlert("Product Deleted", 'success');
            fetchProduct();
        } catch (error) {
            showAlert(error.message, 'danger');
        }
    }

    return (
        <>
            {ModelProduct &&
                <div className='fixed top-0 left-0 z-50 bg-transparent w-screen h-screen font-pop flex-col'>
                    <div className="bg-black/40 absolute z-30 top-0 left-0 w-screen h-screen" onClick={() => { setModelProduct(false) }}></div>
                    <div className="bg-white rounded-2xl py-6 px-6 my-6 w-[95%] md:w-[70%] xl:w-[40%] mx-auto mt-10 relative z-50 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
                        <h1 className='font-semibold text-2xl'>{!EditProduct ? "Add" : "Edit"} Product Category</h1>
                        <div className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder='Category Name'
                                value={categoryName}
                                onChange={handleCategoryNameChange}
                                className="w-full px-6 border-2 border-transparent font-pop text-base rounded-full  bg-[#E8E8E8] py-2 focus:border-primarygreen focus:outline-none"
                            />

                            <div className="flex gap-4 items-center">
                                {EditProduct && <button
                                    onClick={handleDeleteProduct}
                                    className="my-4 px-2 md:px-6 bg-green-500 hover:bg-transparent  hover:bg-white-500 font-medium hover:text-black font-pop text-sm md:text-lg py-2 md:py-3 border border-black-500 hover:border-green-500 rounded-full  text-white"
                                >
                                    Delete Product
                                </button>}
                                <button
                                    onClick={handleAddProduct}
                                    className="my-4 px-2 md:px-6 bg-green-500 hover:bg-transparent  hover:bg-white-500 font-medium hover:text-black font-pop text-sm md:text-lg py-2 md:py-3 border border-black-500 hover:border-green-500 rounded-full  text-white"
                                >
                                    {EditProduct ? "Edit" : "Add"} Product
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default AddProduct
