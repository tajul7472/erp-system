import React, { useState } from "react";
import './addDepositModal.css'

import closeBtn from '../../Icons/close.png'

function AddDepositModal({ setOpenModal,onAdd }) {
    const options = [
        { value: '', label: 'Please Select' },
        { value: 'bank', label: 'Bank Deposit' },
        { value: 'card', label: 'Card Deposit' },
        { value: 'cash', label: 'Cash Deposit' },
    ]


    const [inputs, setInputs] = useState({
        depositCategory:'',
        employeName: '',
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
        onAdd(inputs)
        setInputs({

            depositCategory:'',
            employeName: '',
            amount: '',
            remarks: ''

        })
        setOpenModal(false)
    }
    

    return (
        <div className="add-deposit-modalBackground">
            <div className="add-deposit-modalContainer">
                <div className="add-deposit-titleCloseBtn">
                    <span>Create New Deposit</span>
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        <img src={closeBtn} />
                    </button>
                </div>

                <div className="add-deposit-body">
                    <form className="add-deposit-create-form" onSubmit={handleSubmit}>
                        <div className="add-deposit-label-with-input">
                            <label>Category Select</label>
                            <select id="company" name="depositCategory"
                            onChange={handleChange}
                            >
                                {
                                    options.map((item, index) => (
                                        <option key={index} value={item.value}>{item.label}</option>
                                    ))
                                }

                            </select>

                        </div>






                        <div className="add-deposit-label-with-input">
                            <label>Name</label>
                            <input type="text"
                                name="employeName"
                                value={inputs.employeName || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="add-deposit-label-with-input">
                            <label>Amount</label>
                            <input type="text"
                                name="amount"
                                value={inputs.amount || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="add-deposit-label-with-input">
                            <label>Remarks</label>
                            <input type="text"
                                name="remarks"
                                value={inputs.remarks || ""}
                                onChange={handleChange} />

                        </div>




                        <div className="add-deposit-footer">
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

export default AddDepositModal;