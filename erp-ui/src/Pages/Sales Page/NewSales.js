import React, { useState } from "react";
import logo from '../../Icons/logo.png'
import home from '../../Icons/home.png'
import { AiOutlineShoppingCart } from "react-icons/ai"

import './sales.css'

const NewSales = () => {
    const customerList = [
        { value: '', label: 'Please Select' },
        { value: 'Purchase', label: 'Tajul Islam' },
        { value: 'sell', label: 'Khalid Hossain' },
        { value: 'workorder', label: 'Shah al Biruni' },
    ]
    const referenceList = [
        { value: '', label: 'Please Select' },
        { value: 'Purchase', label: 'Tajul Islam' },
        { value: 'sell', label: 'Khalid Hossain' },
        { value: 'workorder', label: 'Shah al Biruni' },
    ]

    const payment = [
        { value: '', label: 'Please Select' },
        { value: 'Cash', label: 'Cash' },
        { value: 'Bkash', label: 'Bkash' },
        { value: 'Bank', label: 'Bank' },
        { value: 'Card', label: 'Card' },
        { value: 'Cheque', label: 'Cheque' }
      ]

    const [inputs, setInputs] = useState({

        amount: '',
        remarks: ''
    
      });
    
    
    
      const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        setInputs({
    

          amount: '',
          remarks: ''
    
        })
      }
    return (
        <div className='sales-section'>
            <div className='header-top'>
                <div className='header-top-logo'>
                    <img src={logo} alt='Header Logo' />
                    <span>New Sales</span>
                </div>
                <div className='header-top-tittle'>
                    <span><img src={home} /></span>
                    <span>Home</span>
                    <span>New Sales</span>
                </div>
            </div>

            <div className='alert-section'>
                <p>Be careful to create. You can not edit/delete after create this.</p>
            </div>

            <div className='slaes-customer-select-section'>
                <form className='slaes-customer-select-section-form'>
                    <div className="slaes-search-option-input">
                        <label>Customer Select</label>
                        <select id="sales" name="salesFor"
                        // onChange={handleChange}
                        >
                            {
                                customerList.map((item, index) => (
                                    <option key={index} value={item.value}>{item.label}</option>
                                ))
                            }

                        </select>

                    </div>
                    <div className="slaes-search-option-input">
                        <label>Sales Date</label>
                        <input type="date"
                        />

                    </div>
                    <div className="slaes-search-option-input">
                        <label>Reference</label>
                        <select id="sales" name="salesFor"
                        // onChange={handleChange}
                        >
                            {
                                referenceList.map((item, index) => (
                                    <option key={index} value={item.value}>{item.label}</option>
                                ))
                            }

                        </select>

                    </div>
                </form>
            </div>

            <div className='sales-main-section'>
                <div className="slaes-product-input">
                    <span className='sales-icon'><AiOutlineShoppingCart /></span>

                    <input type="text" placeholder='Product Name'
                    />

                </div>
                <div className='sales-product-table'>
                    <table>
                        <tbody>
                            <tr>
                                <th>Product Name</th>
                                <th>Stock(kg)</th>
                                <th>Quentity(kg)</th>
                                <th>Quentity(Pound)</th>
                                <th>Role</th>
                                <th>Chalan No</th>
                                <th>Unit Price(kg)</th>
                                <th>Unit Price(Pound)</th>
                                <th>Total Price(Tk)</th>

                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='sales-card'>
                    <div className='sales-quentiy'>
                        <span>Quantity(KG): </span>
                        <span>0</span>
                    </div>
                    <div className='sales-total'>
                        <span>Grand Total: </span>
                        <span>0</span>
                    </div>
                </div>

            </div>

            <div className="payments-section">
            <h3>Payment Methods</h3>
            <form className="payment-section-form" onSubmit={handleSubmit} >
              <div className="purchase-label-with-input">
                <label>Amount</label>
                <input type="text"
                  name="amount"
                  value={inputs.amount || ""}
                  onChange={handleChange} />

              </div>
              <div className="purchase-label-with-input">

                <label>Payment Type</label>
                <select id="company" name="companyFor"
                  onChange={handleChange}
                >
                  {
                    payment.map((item, index) => (
                      <option key={index} value={item.value}>{item.label}</option>
                    ))
                  }

                </select>

              </div>
              <div className="payment-label-with-textarea">
                <label>Remarks</label>
                <textarea type="text"
                  name="remarks"
                  value={inputs.remarks || ""}
                  onChange={handleChange} />

              </div>
             <div className="payment-btn">
             <div className="customer-search-btn">
                <button>Save</button>
                <span className="customer-clear-btn"><button>Clear</button></span>

              </div>
             </div>
            </form>

          </div>



        </div>
    )
}

export default NewSales