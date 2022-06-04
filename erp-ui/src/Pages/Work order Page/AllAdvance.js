import React from 'react'
import logo from '../../Icons/logo.png'
import home from '../../Icons/home.png'

import './allAdvance.css'

const AllAdvance = () => {

    const productList = [
        { value: '', label: 'Please Select ' },
        { value: 'pk', label: 'PK' },
        { value: 'single', label: ' Single jersy' },
        { value: 'microPrint', label: 'Micro Print' }
    ]
    const customer = [
        { value: '', label: 'Please Select ' },
        { value: 'Purchase', label: 'Tajul Islam' },
        { value: 'sell', label: 'Khalid Hossain' },
        { value: 'workorder', label: 'Sha al Biruni' }
    ]
    const productLists=[
        {
            partyId:1012,
            productName:'Single Jersy',
            companyName:'Tashfia Export',
            partyName:'Tajul Islam',
            contact:'79952552',
            totalAmount:'145645',
            orderDate:'4/6/2022',
            dueDate:'9/7/2022'
            
            

        },
        {
            
            partyId:1012,
            productName:'Single Jersy',
            companyName:'Tashfia Export',
            partyName:'Tajul Islam',
            contact:'79952552',
            totalAmount:'145645',
            orderDate:'4/6/2022',
            dueDate:'9/7/2022'
        }
    ]
    return (
        <div className='all-advance-section'>
            <div className='header-top'>
                <div className='header-top-logo'>
                    <img src={logo} alt='Header Logo' />
                    <span>All Work Order</span>
                </div>
                <div className='header-top-tittle'>
                    <span><img src={home} /></span>
                    <span>Home</span>
                    <span>All Work Order</span>
                </div>
            </div>

            <div className='all-advance-main-section'>
                <div className='customer-search-option'>
                    <form className='customer-search-form'>

                        <div className="customer-search-option-input">
                            <label>Product Select</label>
                            <select id="company" name="companyFor"
                            // onChange={handleChange}
                            >
                                {
                                    productList.map((item, index) => (
                                        <option key={index} value={item.value}>{item.label}</option>
                                    ))
                                }

                            </select>

                        </div>
                        <div className="customer-search-option-input">
                            <label>Party Select</label>
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
                            <label>Order Date</label>
                            <input type="date"
                            />

                        </div>

                        <div className="customer-search-btn">
                            <button>Search</button>
                            <span className="customer-clear-btn"><button> Clear</button></span>



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
                                <th>Party ID</th>
                                <th>Product Name</th>
                                <th>Company Name</th>
                                <th>Party Name</th>
                                <th>Contact</th>
                                <th>Total Amount</th>
                                <th>Order Date</th>
                                <th>Due Date</th>
                                <th>Action</th>
                            </tr>
                           {
                               productLists.map((item)=>(
                                   <tr>
                                       <td>{item.partyId}</td>
                                       <td>{item.productName}</td>
                                       <td>{item.companyName}</td>
                                       <td>{item.partyName}</td>
                                       <td>{item.contact}</td>
                                       <td>{item.totalAmount}</td>
                                       <td>{item.orderDate}</td>
                                       <td>{item.dueDate}</td>
                                       
                                       <td><button className="editBtn">Action</button></td>
                                   </tr>
                               ))
                           }
                            <tr>
                                <th>Total</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>TK 0</th>
                                <th></th>
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

export default AllAdvance