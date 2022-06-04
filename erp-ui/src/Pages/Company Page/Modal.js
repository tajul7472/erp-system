import React, { useState } from "react";
import "./modal.css";
import closeBtn from '../../Icons/close.png'

function Modal({ setOpenModal }) {
    const options = [
        { value: '', label: 'Please Select' },
        { value: 'Purchase', label: 'For Purchase' },
        { value: 'sell', label: 'For Sell' },
        { value: 'workorder', label: 'For Workorder' },
    ]

    const [inputs, setInputs] = useState({

        companyName: '',
        companyAddress: '',
        companyContact: '',
        country: ''
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
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <span>Create Company</span>
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

                            <label>Company Select</label>
                            <select id="company" name="companyFor"
                                onChange={handleChange}
                            >
                                {
                                    options.map((item, index) => (
                                        <option key={index} value={item.value}>{item.label}</option>
                                    ))
                                }

                            </select>

                        </div>
                        <div className="label-with-input">
                            <label>Company Name</label>
                            <input type="text"
                                name="companyName"
                                value={inputs.companyName || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="label-with-input">
                            <label>Company Address</label>
                            <input type="text"
                                name="companyAddress"
                                value={inputs.companyAddress || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="label-with-input">
                            <label>Company Contact Number</label>
                            <input type="text"
                                name="companyContact"
                                value={inputs.companyContact || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="label-with-input">
                            <label>Country</label>
                            <input type="text"
                                name="country"
                                value={inputs.country || ""}
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

export default Modal;