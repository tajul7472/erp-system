import React from 'react'
import logo from '../../Icons/logo.png'
import home from '../../Icons/home.png'
import './closingBalance.css'

const DailyOpeningBalance = () => {
    const productList = [
        {
            sl: 1012,
            date: '1/5/2022',
            openingBalance: '145698',
            closingBalance: '6663'
        },
        {

            sl: 1012,
            date: '1/5/2022',
            openingBalance: '145698',
            closingBalance: '6663'
        }
    ]
    return (
        <div className='closing-blance-section'>
            <div className='header-top'>
                <div className='header-top-logo'>
                    <img src={logo} alt='Header Logo' />
                    <span>Opening and Closing Balance</span>
                </div>
                <div className='header-top-tittle'>
                    <span><img src={home} /></span>
                    <span>Home</span>
                    <span>Opening and Closing Balance</span>
                </div>
            </div>

            <div className='closing-balance-main-section'>
                <h3>Opening and Closing Balance</h3>
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
                                <th>Opening Balance</th>
                                <th>Closing Balance</th>

                            </tr>
                            {
                                productList.map((item) => (
                                    <tr>
                                        <td>{item.sl}</td>
                                        <td>{item.date}</td>
                                        <td>{item.openingBalance}</td>
                                        <td>{item.closingBalance}</td>

                                    </tr>
                                ))
                            }
                            <tr>
                                <th></th>
                                <th>Total</th>
                                <th>Tk 456655</th>
                                <th></th>


                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    )
}

export default DailyOpeningBalance