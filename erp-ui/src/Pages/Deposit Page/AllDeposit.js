import React, { useState, useEffect, useCallback } from "react";
import logo from '../../Icons/logo.png'
import home from '../../Icons/home.png'
import AddDepositModal from "./AddDepositModal";
import './allDeposit.css'

const AllDeposit = () => {
    const depositCategory = [
        { value: '', label: 'Please Select ' },
        { value: 'bank', label: 'Bank Deposit' },
        { value: 'card', label: 'Card Deposit' },
        { value: 'cash', label: 'Cash Deposit' }
    ]

    const [deposit, setDeposit] = useState([
        {
            id: 1012,
            date: '1/5/2022',
            depositCategory: 'Bank Deposit',
            employeName: 'Tajul Islam',
            amount: '1000',
            remarks: '14565'



        },
        {

            id: 1013,
            date: '1/5/2022',
            depositCategory: 'Cash Deposit',
            employeName: 'Tajul Islam',
            amount: '1000',
            remarks: '14565'
        }
    ])

    // Add All Deposit
    const addDeposit = (data) => {
        const id = Math.floor(Math.random() * 1000 + 1)
        const newDepost = ({ id, ...data })
        setDeposit([...deposit, newDepost])
    }

    //Delete all deposit
    const deleteAllCategory = (id) => {
        setDeposit(deposit.filter((data) => data.id !== id))

    }

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
        <div className='all-deposit-section'>
            <div className='header-top'>
                <div className='header-top-logo'>
                    <img src={logo} alt='Header Logo' />
                    <span>All Deposit</span>
                </div>
                <div className='header-top-tittle'>
                    <span><img src={home} /></span>
                    <span>Home</span>
                    <span>All Deposit</span>
                </div>
            </div>

            <div className='all-deposit-main-section'>
                <div className='customer-search-option'>
                    <form className='customer-search-form'>

                        <div className="customer-search-option-input">
                            <label>Category Select</label>
                            <select id="company" name="companyFor"
                            // onChange={handleChange}
                            >
                                {
                                    depositCategory.map((item, index) => (
                                        <option key={index} value={item.value}>{item.label}</option>
                                    ))
                                }

                            </select>

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
                        <div className="customer-search-option-input">
                            <label>Name</label>
                            <input type="text"
                            />

                        </div>
                        <div className="customer-search-option-input">
                            <label>Amount</label>
                            <input type="text"
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
                                Add Deposit
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
                                <th>Category</th>
                                <th> Name</th>
                                <th>Amount</th>
                                <th>Remarks</th>
                                <th>Action</th>
                            </tr>
                            {
                                deposit.map((item) => (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.date}</td>
                                        <td>{item.depositCategory}</td>
                                        <td>{item.employeName}</td>
                                        <td >{item.amount}</td>
                                        <td>{item.remarks}</td>
                                        <td><button className="deleteBtn" onClick={() => deleteAllCategory(item.id)}>Delete</button>
                                            <button className="editBtn">Edit</button></td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <th>Total</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>50 Tk</th>
                                <th></th>
                                <th></th>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
            {modalOpen && <AddDepositModal setOpenModal={setModalOpen} onAdd={addDeposit} />}


        </div>
    )
}

export default AllDeposit