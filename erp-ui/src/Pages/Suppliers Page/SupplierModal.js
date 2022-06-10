import React, { useState } from "react";
import "./supplierModal.css";
import closeBtn from '../../Icons/close.png'

function Modal({ setOpenModal,onAdd }) {
    const options = [
        { value: '', label: 'Please Select' },
        { value: 'Tashfia Export', label: 'Tashfia Export' },
        { value: 'Tashfia Export', label: 'Eurotex Ltd' },
        { value: 'Tashfia Export', label: 'Corona Transport' },
    ]


    const [inputs, setInputs] = useState({

        supplierName: '',
        Designation: '',
        previousDue: '',
        Nationality: '',
        presentAddress: '',
        PermanentAddress: '',
        contact: '',
        optionalNumber: '',
        supplierEmail: '',
        supplierNid: '',
        referance: '',
        image: ''
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

            supplierName: '',
            Designation: '',
            previousDue: '',
            Nationality: '',
            presentAddress: '',
            PermanentAddress: '',
            contact: '',
            optionalNumber: '',
            supplierEmail: '',
            supplierNid: '',
            referance: '',
            image: ''

        })
        setOpenModal(false)
    }

    return (
        <div className="supplier-modalBackground">
            <div className="supplier-modalContainer">
                <div className="supplier-titleCloseBtn">
                    <span>Create supplier</span>
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        <img src={closeBtn} />
                    </button>
                </div>

                <div className="supplier-body">
                    <form className="supplier-create-form" onSubmit={handleSubmit}>
                        <div className="supplier-label-with-input">

                            <label>Company Select</label>
                            <select id="company" name="companyName"
                                onChange={handleChange}
                            >
                                {
                                    options.map((item, index) => (
                                        <option key={index} value={item.value}>{item.label}</option>
                                    ))
                                }

                            </select>

                        </div>
                        <div className="supplier-label-with-input">
                            <label>Supplier Name</label>
                            <input type="text"
                                name="supplierName"
                                value={inputs.supplierName || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="supplier-label-with-input">
                            <label>Designation</label>
                            <input type="text"
                                name="Designation"
                                value={inputs.Designation || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="supplier-label-with-input">
                            <label>Previous Due</label>
                            <input type="text"
                                name="previousDue"
                                value={inputs.previousDue || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="supplier-label-with-input">
                            <label>Nationality</label>
                            <input type="text"
                                name="Nationality"
                                value={inputs.Nationality || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="supplier-label-with-input">
                            <label>Present Address</label>
                            <input type="text"
                                name="presentAddress"
                                value={inputs.presentAddress || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="supplier-label-with-input">
                            <label>Permanent Address</label>
                            <input type="text"
                                name="PermanentAddress"
                                value={inputs.PermanentAddress || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="supplier-label-with-input">
                            <label>Personal Phone Number</label>
                            <input type="text"
                                name="contact"
                                value={inputs.contact || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="supplier-label-with-input">
                            <label>Optional Phone Number</label>
                            <input type="text"
                                name="optionalNumber"
                                value={inputs.optionalNumber || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="supplier-label-with-input">
                            <label>Supplier Email</label>
                            <input type="text"
                                name="supplierEmail"
                                value={inputs.supplierEmail || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="supplier-label-with-input">
                            <label>Supplier NID</label>
                            <input type="text"
                                name="supplierNid"
                                value={inputs.supplierNid || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="supplier-label-with-input">
                            <label>Referance</label>
                            <input type="text"
                                name="referance"
                                value={inputs.referance || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="supplier-label-with-image">
                            <label>Image </label>
                            <input type="file" multiple accept="image/*"
                                name="image"
                                value={inputs.image || ""}

                                onChange={handleChange} />

                        </div>


                        <div className="supplier-footer">
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