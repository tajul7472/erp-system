import React, { useState } from "react";
import "./stockModal.css";
import closeBtn from '../../Icons/close.png'

function StockModal({ setOpenModal }) {
    const products = [
        { value: '', label: 'Please Select' },
        { value: 'Purchase', label: 'Micro Print' },
        { value: 'sell', label: 'Cotron' },
        { value: 'workorder', label: 'Single Jersy' },
    ]

    const [inputs, setInputs] = useState({

        supplier: '',
        product: '',
        quentity: '',
        stockQuentity: ''
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        setInputs({

            companyName: '',
            companyAddress: '',
            companyContact: '',
            country: ''
        })
    }

    return (
        <div className="modalBackground">
            <div className="stock-modalContainer">
                <div className="titleCloseBtn">
                    <span>Create Stock</span>
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        <img src={closeBtn} />
                    </button>
                </div>

                <div className="body">
                    <form className="create-form" onSubmit={handleSubmit}>
                        <div className="label-with-input">

                            <label>Select Purchse Product</label>
                            <select id="company" name="companyFor"
                                onChange={handleChange}
                            >
                                {
                                    products.map((item, index) => (
                                        <option key={index} value={item.value}>{item.label}</option>
                                    ))
                                }

                            </select>

                        </div>
                        <div className="label-with-input">
                            <label>Supplier</label>
                            <input type="text"
                                name="supplier"
                                value={inputs.supplier || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="label-with-input">
                            <label>Product</label>
                            <input type="text"
                                name="product"
                                value={inputs.product || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="label-with-input">
                            <label>Quentity (kg)</label>
                            <input type="text"
                                name="quentity"
                                value={inputs.quentity || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="label-with-input">
                            <label>Stock Quentity (kg)</label>
                            <input type="text"
                                name="stockQuentity"
                                value={inputs.stockQuentity || ""}
                                onChange={handleChange} />

                        </div>

                      
                        <div className="footer">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                        id="cancelBtn"
                    >
                        Cancel
                    </button>
                    <button>Save</button>
                </div>
                    </form>
                </div>
               
            </div>
        </div>
    );
}

export default StockModal;