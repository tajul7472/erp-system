import React, { useState, useEffect, useCallback } from "react";
import logo from '../../Icons/logo.png'
import home from '../../Icons/home.png'
import CustomerModal from './CustomerModal.js'

import './customer.css'

function Customer() {
    const options = [
        { value: '', label: 'Please Select' },
        { value: 'Tashfia Export', label: 'Tashfia Export' },
        { value: 'Tashfia Export', label: 'Eurotex Ltd' },
        { value: 'Tashfia Export', label: 'Corona Transport' },
    ]

    const [modalOpen, setModalOpen] = useState(false);
    const keyPress = useCallback(e => {
        if (e.key === 'Escape' && modalOpen) {
            setModalOpen(false)
        }
    }, [setModalOpen, modalOpen])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress])

    const [customerData, setCustomerData] = useState([
        {
            id: 1012,
            companyName: 'InspirBd',
            customerName: 'Tajul Islam',
            contact: '01705386513',
            image: '../../Icons/home.png',
            previousDue: '58620',
            totalPaid: '6565',
            totalDue: '8566'
        },
        {

            id: 1012,
            companyName: 'Brain Station 23',
            customerName: 'Tajul Islam',
            contact: '01705386513',
            image: '../../Icons/home.png',
            previousDue: '58620',
            totalPaid: '6565',
            totalDue: '8566'
        }
    ])

    //Add Customer Data
    const addCuctomerData = (data) => {
        const id = Math.floor(Math.random() * 1000 + 1)
        const newData = ({ id, ...data })
        setCustomerData([...customerData, newData])

    }
    return (
        <div className='customer-section'>
            <div className='header-top'>
                <div className='header-top-logo'>
                    <img src={logo} alt='Header Logo' />
                    <span>Customer</span>
                </div>
                <div className='header-top-tittle'>
                    <span><img src={home} /></span>
                    <span>Home</span>
                    <span>Customer</span>
                </div>
            </div>

            <div className='customer-main-section'>
                <div className='customer-search-option'>
                    <form className='customer-search-form'>
                        <div className="customer-search-option-input">
                            <label>Company Select</label>
                            <select id="company" name="companyFor"
                            // onChange={handleChange}
                            >
                                {
                                    options.map((item, index) => (
                                        <option key={index} value={item.value}>{item.label}</option>
                                    ))
                                }

                            </select>

                        </div>
                        <div className="customer-search-option-input">
                            <label>Customer Name</label>
                            <input type="text"
                            />

                        </div>
                        <div className="customer-search-option-input">
                            <label>Customer ID</label>
                            <input type="text"
                            />

                        </div>
                        <div className="customer-search-option-input">
                            <label>Phone Number</label>
                            <input type="text"
                            />

                        </div>
                        <div className="customer-search-btn">
                            <button>Search</button>
                            <span className="customer-clear-btn"><button>Clear</button></span>

                        </div>


                    </form>

                </div>
                <div className='add-customer'>
                    <div className='total'>
                        <span>Total:</span>
                        <span className="total-amount">50</span>
                    </div>
                    <div className='create-customer'>
                        <button
                            className="openModalBtn"
                            onClick={() => {
                                setModalOpen(true);
                            }}
                        >
                            Add Customer
                        </button>
                    </div>
                </div>
                <div className="show-search-section">
                    <div className="show">
                        <span>Show</span>
                        <span>
                            <select>
                                <option>10</option>
                                <option>25</option>
                                <option>50</option>
                                <option>100</option>
                            </select>
                        </span>
                        <span>Entries</span>
                    </div>
                    <div className="search-option">
                        <label>Search:
                            <input type="text"
                                name="search"
                            />
                        </label>
                    </div>

                </div>

                <div className="company-table">
                    <table>
                        <tbody>
                            <tr>
                                <th>Customer ID</th>
                                <th>Company Name</th>
                                <th>Customer Name</th>
                                <th>Contact</th>
                                <th>image</th>
                                <th>Previous Due</th>
                                <th>Total Paid</th>
                                <th>Total Due</th>
                                <th>Action</th>
                            </tr>
                            {
                                customerData.map((item) => (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.companyName}</td>
                                        <td>{item.customerName}</td>
                                        <td>{item.contact}</td>
                                        {/* <td>{item.image}</td> */}
                                        <td><img src={item.image} /></td>
                                        <td>{item.previousDue}</td>
                                        <td>{item.totalPaid}</td>
                                        <td>{item.totalDue}</td>
                                        <td><button className="editBtn">Action</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>


            {modalOpen && <CustomerModal setOpenModal={setModalOpen} onAdd={addCuctomerData} />}

        </div>
    )
}

export default Customer