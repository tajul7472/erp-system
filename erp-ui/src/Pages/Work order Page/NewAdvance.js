import React from 'react'
import logo from '../../Icons/logo.png'
import home from '../../Icons/home.png'
import './newAdvance.css'

const NewAdvance = () => {
    const productLists = [
        { value: '', label: 'Please Select' },
        { value: 'microPrint', label: 'Micro Print' },
        { value: 'pk', label: 'PK' },
        { value: 'single', label: 'Single Jurcey' },
    ]
    const partyLists = [
        { value: '', label: 'Please Select' },
        { value: 'rakib', label: 'Tajul Islam' },
        { value: 'khalid', label: 'Khalid Hossian' },
        { value: 'biruni', label: 'Sha Al Biruni' },
    ]
    return (
        <div className='new-advance-section'>
            <div className='header-top'>
                <div className='header-top-logo'>
                    <img src={logo} alt='Header Logo' />
                    <span>Create Work Order</span>
                </div>
                <div className='header-top-tittle'>
                    <span><img src={home} /></span>
                    <span>Home</span>
                    <span>Create Work Order</span>
                </div>
            </div>

            <div className='advance-main-section'>
                <h3>Work Order Party</h3>
                <div className='order-create-option'>
                    <form className='order-create-form'>
                        <div className="order-create-option-input">
                            <label>Product Select</label>
                            <select id="company" name="companyFor"
                            // onChange={handleChange}
                            >
                                {
                                    productLists.map((item, index) => (
                                        <option key={index} value={item.value}>{item.label}</option>
                                    ))
                                }

                            </select>

                        </div>
                        <div className="order-create-option-input">
                            <label>Party Select</label>
                            <select id="company" name="companyFor"
                            // onChange={handleChange}
                            >
                                {
                                    partyLists.map((item, index) => (
                                        <option key={index} value={item.value}>{item.label}</option>
                                    ))
                                }

                            </select>

                        </div>
                        <div className="order-create-option-input">
                            <label>Order Date</label>
                            <input type="date"
                            />

                        </div>
                        <div className="order-create-option-input">
                            <label>Due Date</label>
                            <input type="date"
                            />

                        </div>
                        <div className="order-create-option-input">
                            <label>Product Description</label>
                            <textarea
                            />

                        </div>
                        <div className="order-create-option-input">
                            <label>Sub Total</label>
                            <input type="text"
                            />

                        </div>

                        <div className="order-create-option-input">
                            <label>Total Amount</label>
                            <input type="text"
                            />

                        </div>

                        <div className="orderBtn">
                            <button className="btn">Save</button>
                        </div>


                    </form>

                </div>


            </div>
        </div>
    )
}

export default NewAdvance