import React, { useState } from "react";
import logo from '../../Icons/logo.png'
import home from '../../Icons/home.png'
import './purchase.css'

const NewParchase = () => {
  const product = [
    { value: '', label: 'Please Select' },
    { value: 'Purchase', label: 'For Purchase' },
    { value: 'sell', label: 'For Sell' },
    { value: 'workorder', label: 'For Workorder' }
  ]
  const supplier = [
    { value: '', label: 'Please Select' },
    { value: 'Purchase', label: 'For Purchase' },
    { value: 'sell', label: 'For Sell' },
    { value: 'workorder', label: 'For Workorder' }
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

    quantityKG: '',
    quantityPound: '',
    unitPriceKg: '',
    unitPricePound: '',
    totalPurchasePrice: '',
    actualPurchasePrice: '',
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

      quantityKG: '',
      quantityPound: '',
      unitPriceKg: '',
      unitPricePound: '',
      totalPurchasePrice: '',
      actualPurchasePrice: '',
      amount: '',
      remarks: ''

    })
  }
  return (
    <div className='purchase-section'>
      <div className='header-top'>
        <div className='header-top-logo'>
          <img src={logo} alt='Header Logo' />
          <span>New Purchase</span>
        </div>
        <div className='header-top-tittle'>
          <span><img src={home} /></span>
          <span>Home</span>
          <span>New  Purchase</span>
        </div>
      </div>
      <div className='purchase-info'>
        <h3>Purchase Information</h3>
        <div className='purchase-info-input'>
          <form className='purchase-info-form' onSubmit={handleSubmit}>
            <div className="purchase-label-with-input">

              <label>Select Product</label>
              <select id="company" name="companyFor"
                onChange={handleChange}
              >
                {
                  product.map((item, index) => (
                    <option key={index} value={item.value}>{item.label}</option>
                  ))
                }

              </select>

            </div>
            <div className="purchase-label-with-input">

              <label>Select Supplier</label>
              <select id="company" name="companyFor"
                onChange={handleChange}
              >
                {
                  supplier.map((item, index) => (
                    <option key={index} value={item.value}>{item.label}</option>
                  ))
                }

              </select>

            </div>
            <div className="purchase-label-with-input">
              <label>Quantity (kg)</label>
              <input type="text"
                name="quantityKG"
                value={inputs.quantityKG || ""}
                onChange={handleChange} />

            </div>
            <div className="purchase-label-with-input">
              <label>Quantity (Pound)</label>
              <input type="text"
                name="quantityPound"
                value={inputs.quantityPound || ""}
                onChange={handleChange} />

            </div>
            <div className="purchase-label-with-input">
              <label>Unit Price (kg)</label>
              <input type="text"
                name="unitPriceKg"
                value={inputs.unitPriceKg || ""}
                onChange={handleChange} />

            </div>
            <div className="purchase-label-with-input">
              <label>Unit Price (Pound)</label>
              <input type="text"
                name="unitPricePound"
                value={inputs.unitPricePound || ""}
                onChange={handleChange} />

            </div>
            <div className="purchase-label-with-input">
              <label>Total Purchase Price</label>
              <input type="text"
                name="totalPurchasePrice"
                value={inputs.totalPurchasePrice || ""}
                onChange={handleChange} />

            </div>
            <div className="purchase-label-with-input">
              <label>Actual Purchase Price</label>
              <input type="text"
                name="actualPurchasePrice"
                value={inputs.actualPurchasePrice || ""}
                onChange={handleChange} />

            </div>



          </form>
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
                <button>Create Purchase</button>
                <span className="customer-clear-btn"><button>Clear</button></span>

              </div>
             </div>
            </form>

          </div>

        </div>

      </div>
    </div>
  )
}

export default NewParchase