import React, { useState } from "react";
import "./customerModal.css";
import closeBtn from '../../Icons/close.png'

function Modal({ setOpenModal,onAdd }) {
    const options = [
        { value: '', label: 'Please Select' },
        { value: 'Tashfia Export', label: 'Tashfia Export' },
        { value: 'Tashfia Export', label: 'Eurotex Ltd' },
        { value: 'Tashfia Export', label: 'Corona Transport' },
    ]

    const [inputs, setInputs] = useState({
        
        customerName: '',
        Designation: '',
        previousDue: '',
        Nationality: '',
        presentAddress: '',
        PermanentAddress: '',
        personalNumber:'',
        optionalNumber:'',
        customerEmail:'',
        customerNid:'',
        referance:'',
        image:''
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
            

            customerName: '',
            Designation: '',
            previousDue: '',
            Nationality: '',
            presentAddress: '',
            PermanentAddress: '',
            contact:'',
            optionalNumber:'',
            customerEmail:'',
            customerNid:'',
            referance:'',
            image:''

        })
        setOpenModal(false);
    }

    return (
        <div className="customer-modalBackground">
            <div className="customer-modalContainer">
                <div className="customer-titleCloseBtn">
                    <span>Create Customer</span>
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        <img src={closeBtn} />
                    </button>
                </div>

                <div className="customer-body">
                    <form className="customer-create-form" onSubmit={handleSubmit}>
                        <div className="customer-label-with-input">

                            <label>Company Select</label>
                            <select id="customerId" name="companyName"
                                onChange={handleChange}
                            >
                                {
                                    options.map((item, index) => (
                                        <option key={index} value={item.value}>{item.label}</option>
                                    ))
                                }

                            </select>

                        </div>
                        <div className="customer-label-with-input">
                            <label>Customer Name</label>
                            <input type="text"
                                name="customerName"
                                value={inputs.customerName || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="customer-label-with-input">
                            <label>Designation</label>
                            <input type="text"
                                name="Designation"
                                value={inputs.Designation || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="customer-label-with-input">
                            <label>Previous Due</label>
                            <input type="text"
                                name="previousDue"
                                value={inputs.previousDue || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="customer-label-with-input">
                            <label>Nationality</label>
                            <input type="text"
                                name="Nationality"
                                value={inputs.Nationality || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="customer-label-with-input">
                            <label>Present Address</label>
                            <input type="text"
                                name="presentAddress"
                                value={inputs.presentAddress || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="customer-label-with-input">
                            <label>Permanent Address</label>
                            <input type="text"
                                name="PermanentAddress"
                                value={inputs.PermanentAddress || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="customer-label-with-input">
                            <label>Personal Phone Number</label>
                            <input type="text"
                                name="contact"
                                value={inputs.contact || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="customer-label-with-input">
                            <label>Optional Phone Number</label>
                            <input type="text"
                                name="optionalNumber"
                                value={inputs.optionalNumber || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="customer-label-with-input">
                            <label>Customer Email</label>
                            <input type="text"
                                name="customerEmail"
                                value={inputs.customerEmail || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="customer-label-with-input">
                            <label>Customer NID</label>
                            <input type="text"
                                name="customerNid"
                                value={inputs.customerNid || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="customer-label-with-input">
                            <label>Referance</label>
                            <input type="text"
                                name="referance"
                                value={inputs.referance || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="customer-label-with-image">
                            <label>Image </label>
                            <input type="file" multiple accept="image/*"
                                name="image"
                                value={inputs.image || ""}
                                
                                onChange={handleChange} />

                        </div>


                        <div className="customer-footer">
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