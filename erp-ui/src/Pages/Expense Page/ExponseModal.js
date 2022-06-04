import React, { useState } from "react";
import './expensesModal.css'

import closeBtn from '../../Icons/close.png'

function ExponseModal({ setOpenModal }) {


    const [inputs, setInputs] = useState({

        employeName: '',
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


            employeName: '',
            remarks: ''

        })
    }

    return (
        <div className="expense-modalBackground">
            <div className="expense-modalContainer">
                <div className="expense-titleCloseBtn">
                    <span>Create Expense Category</span>
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        <img src={closeBtn} />
                    </button>
                </div>

                <div className="expense-body">
                    <form className="expense-create-form" onSubmit={handleSubmit}>





                        <div className="expense-label-with-input">
                            <label>Category Name</label>
                            <input type="text"
                                name="employeName"
                                value={inputs.employeName || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="expense-label-with-input">
                            <label>Remarks</label>
                            <input type="text"
                                name="remarks"
                                value={inputs.remarks || ""}
                                onChange={handleChange} />

                        </div>




                        <div className="expense-footer">
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

export default ExponseModal;