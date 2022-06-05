import React from 'react'
import logo from '../../Icons/logo.png'
import home from '../../Icons/home.png'
import './profitLoss.css'

const SalesProfitLoss = () => {
    const salesprofit=[
        {
            sl:'01',
            date:'1/5/2022',
            companyName:'Tashfia Export',
            customerName:'Tajul Islam',
            salesAmount:'79952552',
            profitLoss:'145645'
            
            

        },
        {
            
            sl:'02',
            date:'1/5/2022',
            companyName:'Tashfia Export',
            customerName:'Tajul Islam',
            salesAmount:'79952552',
            profitLoss:'145645'
        }
    ]
    return (
        <div className='profit-and-loss-section'>
            <div className='header-top'>
                <div className='header-top-logo'>
                    <img src={logo} alt='Header Logo' />
                    <span> Sales Profit and Loss</span>
                </div>
                <div className='header-top-tittle'>
                    <span><img src={home} /></span>
                    <span>Home</span>
                    <span> Sales Profit and Loss</span>
                </div>
            </div>

            <div className='sales-profit-and-loss-main-section'>
                <h3>Sales Profit and Loss</h3>
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
                            <button>Search</button>
                            <span className="customer-clear-btn"><button>Clear</button></span>

                        </div>


                    </form>

                </div>
                <div className='show-all-product'>
                    <div className='total'>
                        <span>Total:</span>
                        <span className="total-amount">50</span>
                    </div>
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
                </div>

                <div className="company-table">
                    <table>
                        <tbody>
                            <tr>
                                <th>SL</th>
                                <th>Date</th>
                                <th>Company Name</th>
                                <th>Customer Name</th>
                                <th>Sales Amount</th>
                                <th>Profit/Loss</th>
                                
                            </tr>
                           {
                               salesprofit.map((item)=>(
                                   <tr>
                                       <td>{item.sl}</td>
                                       <td>{item.date}</td>
                                       <td>{item.companyName}</td>
                                       <td>{item.customerName}</td>
                                       <td>{item.salesAmount}</td>
                                       <td>{item.profitLoss}</td>
                                       
                                   </tr>
                               ))
                           }
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Total</th>
                                <th>TK 0</th>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            



        </div>
    )
}

export default SalesProfitLoss