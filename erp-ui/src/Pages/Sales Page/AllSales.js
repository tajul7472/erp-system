import React from 'react'
import logo from '../../Icons/logo.png'
import home from '../../Icons/home.png'
import './allSales.css'

const AllSales = () => {
    const company = [
        { value: '', label: 'Please Select ' },
        { value: 'Purchase', label: 'Inspirbdsoft' },
        { value: 'sell', label: 'Tashfia Export' },
        { value: 'workorder', label: 'Eurotex' }
    ]
    const customer = [
        { value: '', label: 'Please Select ' },
        { value: 'Purchase', label: 'Tajul Islam' },
        { value: 'sell', label: 'Khalid Hossain' },
        { value: 'workorder', label: 'Sha al Biruni' }
    ]
    const status = [
        { value: '', label: 'Please Select Category ' },
        { value: 'paid', label: 'Paid' },
        { value: 'unpaid', label: 'Unpaid' }

    ]
    const productList=[
        {
            customerId:1012,
            date:'1/5/2022',
            companyName:'Tashfia Export',
            customerName:'Tajul Islam',
            totalAmount:'79952552',
            paidAmount:'145645',
            dueAmount:'58620',
            invoiceNo:'589',
            paymentStatus:'Unpaid',
            

        },
        {
            
            customerId:1012,
            date:'1/5/2022',
            companyName:'Tashfia Export',
            customerName:'Tajul Islam',
            totalAmount:'79952552',
            paidAmount:'145645',
            dueAmount:'58620',
            invoiceNo:'589',
            paymentStatus:'Unpaid',
        }
    ]
    return (
        <div className='all-slaes-section'>
            <div className='header-top'>
                <div className='header-top-logo'>
                    <img src={logo} alt='Header Logo' />
                    <span>All Sales</span>
                </div>
                <div className='header-top-tittle'>
                    <span><img src={home} /></span>
                    <span>Home</span>
                    <span>All Sales</span>
                </div>
            </div>

            <div className='all-sales-main-section'>
                <div className='customer-search-option'>
                    <form className='customer-search-form'>

                        <div className="customer-search-option-input">
                            <label>Company Select</label>
                            <select id="company" name="companyFor"
                            // onChange={handleChange}
                            >
                                {
                                    company.map((item, index) => (
                                        <option key={index} value={item.value}>{item.label}</option>
                                    ))
                                }

                            </select>

                        </div>
                        <div className="customer-search-option-input">
                            <label>Customer Select</label>
                            <select id="company" name="companyFor"
                            // onChange={handleChange}
                            >
                                {
                                    customer.map((item, index) => (
                                        <option key={index} value={item.value}>{item.label}</option>
                                    ))
                                }

                            </select>

                        </div>
                        <div className="customer-search-option-input">
                            <label>Payment Status</label>
                            <select id="company" name="companyFor"
                            // onChange={handleChange}
                            >
                                {
                                    status.map((item, index) => (
                                        <option key={index} value={item.value}>{item.label}</option>
                                    ))
                                }

                            </select>

                        </div>
                        <div className="customer-search-option-input">
                            <label>Invoice Number</label>
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
                                <th>Customer ID</th>
                                <th>Date</th>
                                <th>Company Name</th>
                                <th>Customer Name</th>
                                <th>Total Amount</th>
                                <th>Paid Amount</th>
                                <th>Due Amount</th>
                                <th>Invoice Number</th>
                                <th>Payment Status</th>
                                <th>Action</th>
                            </tr>
                           {
                               productList.map((item)=>(
                                   <tr>
                                       <td>{item.customerId}</td>
                                       <td>{item.date}</td>
                                       <td>{item.companyName}</td>
                                       <td>{item.customerName}</td>
                                       <td>{item.totalAmount}</td>
                                       <td>{item.paidAmount}</td>
                                       <td>{item.dueAmount}</td>
                                       <td>{item.invoiceNo}</td>
                                       <td>{item.paymentStatus}</td>
                                       <td><button className="editBtn">Action</button></td>
                                   </tr>
                               ))
                           }
                            <tr>
                                <th>Total</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>TK 0</th>
                                <th>TK 0</th>
                                <th>Tk 0</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AllSales