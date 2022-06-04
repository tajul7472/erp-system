import React, { useState, useEffect, useCallback } from "react";
import logo from '../../Icons/logo.png'
import home from '../../Icons/home.png'
import AddExpensesModal from "./AddExpensesModal";

const AllExpenses = () => {
  const expenseCategory = [
    { value: '', label: 'Please Select ' },
    { value: 'salary', label: 'Salary Expense' },
    { value: 'lunch', label: 'Lunch Bill' },
    { value: 'electric', label: 'Electricity Bill' }
]

const productList = [
    {
        Id: 1012,
        date: '1/5/2022',
        category: 'Salary Expense',
        name: 'Tajul Islam',
        amount: '1000',
        remarks: '14565'



    },
    {

        Id: 1012,
        date: '1/5/2022',
        category: 'Lunch Bill',
        name: 'Tajul Islam',
        amount: '1000',
        remarks: '14565'
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
    <div className='all-expense-section'>
         <div className='header-top'>
                <div className='header-top-logo'>
                    <img src={logo} alt='Header Logo' />
                    <span>All Expenses</span>
                </div>
                <div className='header-top-tittle'>
                    <span><img src={home} /></span>
                    <span>Home</span>
                    <span>All Expenses</span>
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
                                    expenseCategory.map((item, index) => (
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
                                Add Expense
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
                                productList.map((item) => (
                                    <tr>
                                        <td>{item.Id}</td>
                                        <td>{item.date}</td>
                                        <td>{item.category}</td>
                                        <td>{item.name}</td>
                                        <td className>{item.amount}</td>
                                        <td>{item.remarks}</td>
                                        <td><button className="deleteBtn">Delete</button><button className="editBtn">Edit</button></td>
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
            {modalOpen && <AddExpensesModal setOpenModal={setModalOpen} />}


    </div>
  )
}

export default AllExpenses