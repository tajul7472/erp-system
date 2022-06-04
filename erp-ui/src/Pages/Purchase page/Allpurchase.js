import React from 'react'
import logo from '../../Icons/logo.png'
import home from '../../Icons/home.png'
import './allPurchase.css'

const Allpurchase = () => {
    const comapny = [
        { value: '', label: 'Please Select' },
        { value: 'Purchase', label: 'For Purchase' },
        { value: 'sell', label: 'For Sell' },
        { value: 'workorder', label: 'For Workorder' }
    ]
    const supplier = [
        { value: '', label: 'Please Select Company First' },
        { value: 'Purchase', label: 'For Purchase' },
        { value: 'sell', label: 'For Sell' },
        { value: 'workorder', label: 'For Workorder' }
    ]
    const productList=[
        {
            Id:1012,
            productName:'Micro Febric',
            supplierName:'Tajul Islam',
            quentityKG:'1000',
            unitPrice:'14565',
            totalPRice:'5862054',
            actualPrice:'566565556',
            totalPaid:'456655',
            dueAmount:'6055',
            status:'Unpaid'
            

        },
        {
            
            Id:1012,
            productName:'Micro Febric',
            supplierName:'Tajul Islam',
            quentityKG:'1000',
            unitPrice:'14565',
            totalPRice:'5862054',
            actualPrice:'566565556',
            totalPaid:'456655',
            dueAmount:'6055',
            status:'Unpaid'
        }
    ]

    return (
        <div className='all-purchase-section'>
            <div className='header-top'>
                <div className='header-top-logo'>
                    <img src={logo} alt='Header Logo' />
                    <span>All Purchase</span>
                </div>
                <div className='header-top-tittle'>
                    <span><img src={home} /></span>
                    <span>Home</span>
                    <span>All  Purchase</span>
                </div>
            </div>

            <div className='all-purchasea-main-section'>
                <div className='customer-search-option'>
                    <form className='customer-search-form'>
                        <div className="customer-search-option-input">
                            <label>Company Select</label>
                            <select id="company" name="companyFor"
                            // onChange={handleChange}
                            >
                                {
                                    comapny.map((item, index) => (
                                        <option key={index} value={item.value}>{item.label}</option>
                                    ))
                                }

                            </select>

                        </div>
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
                            <span className="customer-clear-btn"><button> Report</button></span>


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
                                <th>ID</th>
                                <th>Product Name</th>
                                <th>Supplier Name</th>
                                <th>Quantity (kg)</th>
                                <th>Unit Price (kg)</th>
                                <th>Total Purchase Price</th>
                                <th>Actual Purchase Price</th>
                                <th>Total Paid</th>
                                <th>Due Amount</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                           {
                               productList.map((item)=>(
                                   <tr>
                                       <td>{item.Id}</td>
                                       <td>{item.productName}</td>
                                       <td>{item.supplierName}</td>
                                       <td>{item.quentityKG}</td>
                                       <td>{item.unitPrice}</td>
                                       <td>{item.totalPRice}</td>
                                       <td>{item.actualPrice}</td>
                                       <td>{item.totalPaid}</td>
                                       <td>{item.dueAmount}</td>
                                       <td>{item.status}</td>
                                       <td><button className="editBtn">Action</button></td>
                                   </tr>
                               ))
                           }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Allpurchase