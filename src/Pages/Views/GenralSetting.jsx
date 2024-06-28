import React, { useContext, useEffect, useState } from 'react'
import { Countries, Currency, language, navigationMenu } from '../../assets/Data/Navigation'
import Select from 'react-select'
import { BaseURL } from '../../assets/Data/BaseURL'
import AlertContext from '../../Context/Alert/AlertContext'
import axios from 'axios'

const GenralSetting = () => {

    const [navpage, setnavpage] = useState([])

    const [ID, setID] = useState(null)
    const [SelectedHeader, setSelectedHeader] = useState([])
    const [SelectedFooter, setSelectedFooter] = useState([])
    const [SelectedCountry, setSelectedCountry] = useState([])
    const [SelectedCurrency, setSelectedCurrency] = useState([])
    const [SelectedLanguage, setSelectedLanguage] = useState([])

    const AletContext = useContext(AlertContext);
    const { showAlert } = AletContext;

    const fetchnavpage = async () => {
        try {
            const response = await fetch(`${BaseURL}/setting/navpages`, {
                headers: {
                    AdminODSToken: sessionStorage.getItem('token')
                }
            });
            const data = await response.json()
            const newdata = data?.map((item) => ({
                value: item?._id, label: item?.link
            }));
            setnavpage(newdata);
        } catch (error) {
            console.error('Error fetching roles:', error);
            showAlert('Error fetching navigation pages', 'danger');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const Header = SelectedHeader?.map((item) => ({ nav: item.value }));
        const Footer = SelectedFooter?.map((item) => ({ nav: item.value }));
        const Currency = SelectedCurrency?.map((item) => item.value);
        const Country = SelectedCountry?.map((item) => item.value);
        const Language = SelectedLanguage?.map((item) => item.value);

        try {
            const response = await axios.put(`${BaseURL}/setting/changegenralsetting/${ID}`, {
                Header, Footer, Currency, Country, Language
            }, {
                headers: {
                    AdminODSToken: sessionStorage.getItem('token')
                }
            });
            showAlert('Setting Updated successfully', 'success');
        } catch (error) {
            showAlert('Error updating settings', 'danger');
        }
    };

    const fetchsetting = async () => {
        try {
            const response = await fetch(`${BaseURL}/setting/genralsetting`, {
                headers: {
                    AdminODSToken: sessionStorage.getItem('token')
                }
            });
            const data = await response.json();

            setID(data[0]._id);
            setSelectedHeader(data[0].Header?.map((item) => ({
                value: item?.nav?._id, label: item?.nav?.link
            })));
            setSelectedFooter(data[0].Footer?.map((item) => ({
                value: item?.nav?._id, label: item?.nav?.link
            })));
            setSelectedCurrency(data[0].Currency?.map((item) => ({
                value: item, label: item
            })));
            setSelectedCountry(data[0].Country?.map((item) => ({
                value: item, label: item
            })));
            setSelectedLanguage(data[0].Language?.map((item) => ({
                value: item, label: item
            })));
        } catch (error) {
            console.error('Error fetching settings:', error);
            showAlert('Error fetching settings', 'danger');
        }
    };

    useEffect(() => {
        fetchnavpage()
        fetchsetting()
    }, [])

    return (
        <div className="w-[95%] m-auto pt-10 pb-14">
            <div className='flex flex-col gap-4'>
                <div className="flex flex-col gap-2 font-pop">
                    <h3 className='text-lg font-medium text-lightGrey'>Header Settings</h3>
                    <div className="bg-white flex flex-col gap-6 py-6 px-4 rounded-xl">
                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-3 bg-white">Navigation pages</div>
                            <div className="flex font-pop flex-row gap-2 items-center">
                                <Select
                                    options={navpage}
                                    value={SelectedHeader}
                                    onChange={setSelectedHeader}
                                    isMulti
                                    className="basic-multi-select border-none outline-none w-full px-4 font-pop"
                                    classNamePrefix="select"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 font-pop">
                    <h3 className='text-lg font-medium text-lightGrey'>Footer Settings</h3>
                    <div className="bg-white flex flex-col gap-6 py-6 px-4 rounded-xl">
                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-3 bg-white">Footer Menu</div>
                            <div className="flex font-pop flex-row gap-2 items-center">
                                <Select
                                    options={navpage}
                                    value={SelectedFooter}
                                    onChange={setSelectedFooter}
                                    isMulti
                                    className="basic-multi-select border-none outline-none w-full px-4 font-pop"
                                    classNamePrefix="select"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 font-pop">
                    <h3 className='text-lg font-medium text-lightGrey'>Currency Settings</h3>
                    <div className="bg-white flex flex-col gap-6 py-6 px-4 rounded-xl">
                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-3 bg-white">Currency</div>
                            <div className="flex font-pop flex-row gap-2 items-center">
                                <Select
                                    options={Currency}
                                    value={SelectedCurrency}
                                    onChange={setSelectedCurrency}
                                    isMulti
                                    className="basic-multi-select border-none outline-none w-full px-4 font-pop"
                                    classNamePrefix="select"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 font-pop">
                    <h3 className='text-lg font-medium text-lightGrey'>Country Settings</h3>
                    <div className="bg-white flex flex-col gap-6 py-6 px-4 rounded-xl">
                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-3 bg-white">Country Selection</div>
                            <div className="flex font-pop flex-row gap-2 items-center">
                                <Select
                                    options={Countries}
                                    value={SelectedCountry}
                                    onChange={setSelectedCountry}
                                    isMulti
                                    className="basic-multi-select border-none outline-none w-full px-4 font-pop"
                                    classNamePrefix="select"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 font-pop">
                    <h3 className='text-lg font-medium text-lightGrey'>Language Settings</h3>
                    <div className="bg-white flex flex-col gap-6 py-6 px-4 rounded-xl">
                        <div className="relative border-2 border-light rounded-xl py-4 px-4">
                            <div className="absolute -top-3 px-2 left-3 bg-white">Language Selection</div>
                            <div className="flex font-pop flex-row gap-2 items-center">
                                <Select
                                    options={language}
                                    value={SelectedLanguage}
                                    onChange={setSelectedLanguage}
                                    isMulti
                                    className="basic-multi-select border-none outline-none w-full px-4 font-pop"
                                    classNamePrefix="select"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    className='bg-primarygreen border-2 border-primarygreen py-2 px-4 rounded-full text-white hover:text-primarygreen hover:bg-transparent ease-in-out duration-300'
                    onClick={handleSubmit}
                >
                    Update
                </button>
            </div>
        </div>
    )
}

export default GenralSetting
