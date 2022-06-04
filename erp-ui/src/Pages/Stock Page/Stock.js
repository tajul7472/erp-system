import React, { useState, useEffect, useCallback } from "react";
import logo from '../../Icons/logo.png'
import home from '../../Icons/home.png'
import StockModal from "./StockModal";
import './stock.css'

const Stock = () => {
    const supplier = [
        { value: '', label: 'Please Select Company First' },
        { value: 'Purchase', label: 'For Purchase' },
        { value: 'sell', label: 'For Sell' },
        { value: 'workorder', label: 'For Workorder' }
    ]
    const productList = [
        {
            Id: 1012,
            date: '1/5/2022',
            productName: 'Micro Febric',
            supplierName: 'Tajul Islam',
            quentityKG: '1000',
            availableKG: '14565'



        },
        {

            Id: 1012,
            date: '1/5/2022',
            productName: 'Micro Febric',
            supplierName: 'Tajul Islam',
            quentityKG: '1000',
            availableKG: '14565'

        }
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
    return (
        <div className='stock-section'>
            <div className='header-top'>
                <div className='header-top-logo'>
                    <img src={logo} alt='Header Logo' />
                    <span>Stock</span>
                </div>
                <div className='header-top-tittle'>
                    <span><img src={home} /></span>
                    <span>Home</span>
                    <span>Stock</span>
                </div>
            </div>
            <div className='all-purchasea-main-section'>
                <div className='customer-search-option'>
                    <form className='customer-search-form'>

                        <div className="customer-search-option-input">
                            <label>Supplier Select</label>
                            <select id="company" name="companyFor"
                            // onChange={handleChange}
                            >
                                {
                                    supplier.map((item, index) => (
                                        <option key={index} value={item.value}>{item.label}</option>
                                    ))
                                }

                            </select>

                        </div>
                        <div className="customer-search-option-input">
                            <label>Product Name</label>
                            <input type="text"
                            />

                        </div>
                        <div className="customer-search-option-input">
                            <label>Date From</label>
                            <input type="date"
                            />

                        </div>
                        <div className="customer-search-option-input">
                            <label>Date To</label>
                            <input type="date"
                            />

                        </div>
                        <div className="customer-search-btn">
                            <button>Search</button>
                            <span className="customer-clear-btn"><button> Clear</button></span>


                        </div>


                    </form>

                </div>
                <div className="main-section">
                    <div className='add-company'>
                        <div className='total'>
                            <span>Total:</span>
                            <span className="total-amount">50</span>
                        </div>
                        <div className='create-company'>
                            <button
                                className="openModalBtn"
                                onClick={() => {
                                    setModalOpen(true);
                                }}
                            >
                                Add Stock
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

                </div>
                <div className="company-table">
                    <table>
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <th>Date</th>
                                <th>Product Name</th>
                                <th>Supplier Name</th>
                                <th>Quantity (kg)</th>
                                <th>Available Quentity(kg)</th>
                                <th>Action</th>
                            </tr>
                            {
                                productList.map((item) => (
                                    <tr>
                                        <td>{item.Id}</td>
                                        <td>{item.date}</td>
                                        <td>{item.productName}</td>
                                        <td>{item.supplierName}</td>
                                        <td className="quentity-kg">{item.quentityKG}</td>
                                        <td>{item.availableKG}</td>
                                        <td><button className="editBtn">Action</button></td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <th>Total</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>50 kg</th>
                                <th>45 kg</th>
                                <th></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {modalOpen && <StockModal setOpenModal={setModalOpen} />}
        </div>
    )
}

export default Stock