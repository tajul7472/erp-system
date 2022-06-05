import React from 'react'
import logo from '../../Icons/logo.png'
import home from '../../Icons/home.png'
import './depositExpense.css'

const DepositExpenses = () => {
    return (
        <div className='deposit-and-expense-section'>
            <div className='header-top'>
                <div className='header-top-logo'>
                    <img src={logo} alt='Header Logo' />
                    <span> Deposit and Expense</span>
                </div>
                <div className='header-top-tittle'>
                    <span><img src={home} /></span>
                    <span>Home</span>
                    <span> Deposit and Expense</span>
                </div>
            </div>

            <div className='deposit-and-expense-main-section'>
                <h3>All Deposit and Expense</h3>
                <div className='customer-search-option'>
                    <form className='customer-search-form'>


                        <div className="customer-search-option-input">
                            <label>From Date</label>
                            <input type="date"
                            />

                        </div>
                        <div className="customer-search-option-input">
                            <label>To Date</label>
                            <input type="date"
                            />

                        </div>
                        <div className="customer-search-btn">
                            <button>Report</button>


                        </div>


                    </form>

                </div>

            </div>



        </div>
    )
}

export default DepositExpenses