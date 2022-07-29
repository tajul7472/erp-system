import React, { useState } from "react";
import './depositModal.css'

import closeBtn from '../../Icons/close.png'

function DepositModal({ setOpenModal }) {


    const [inputs, setInputs] = useState({

        categoryName: '',
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


            categoryName: '',
            remarks: ''

        })
        setOpenModal(false)
    }

    return (
        <div className="deposit-modalBackground">
            <div className="deposit-modalContainer">
                <div className="deposit-titleCloseBtn">
                    <span>Create Deposit Category</span>
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        <img src={closeBtn} />
                    </button>
                </div>

                <div className="deposit-body">
                    <form className="deposit-create-form" onSubmit={handleSubmit}>





                        <div className="deposit-label-with-input">
                            <label>Category Name</label>
                            <input type="text"
                                name="categoryName"
                                value={inputs.categoryName || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="deposit-label-with-input">
                            <label>Remarks</label>
                            <input type="text"
                                name="remarks"
                                value={inputs.remarks || ""}
                                onChange={handleChange} />

                        </div>




                        <div className="deposit-footer">
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

export default DepositModal;