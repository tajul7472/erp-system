import React, { useState } from "react";
import './partyModal.css'

import closeBtn from '../../Icons/close.png'

function PartyModal({ setOpenModal }) {
    const options = [
        { value: '', label: 'Please Select' },
        { value: 'Purchase', label: 'For Purchase' },
        { value: 'sell', label: 'For Sell' },
        { value: 'workorder', label: 'For Workorder' },
    ]

    const [inputs, setInputs] = useState({

        partyName: '',
        Designation: '',
        
        Nationality: '',
        presentAddress: '',
        PermanentAddress: '',
        personalNumber:'',
        optionalNumber:'',
        partyEmail:'',
        partyNid:'',
        
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
        setInputs({

            partyName: '',
            Designation: '',
           
            Nationality: '',
            presentAddress: '',
            PermanentAddress: '',
            personalNumber:'',
            optionalNumber:'',
            partyEmail:'',
            partyNid:'',
           
            image:''

        })
    }

    return (
        <div className="party-modalBackground">
            <div className="party-modalContainer">
                <div className="party-titleCloseBtn">
                    <span>Create Party</span>
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        <img src={closeBtn} />
                    </button>
                </div>

                <div className="party-body">
                    <form className="party-create-form" onSubmit={handleSubmit}>
                        <div className="party-label-with-input">

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
                        <div className="party-label-with-input">
                            <label>Party Name</label>
                            <input type="text"
                                name="partyName"
                                value={inputs.partyName || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="party-label-with-input">
                            <label>Designation</label>
                            <input type="text"
                                name="Designation"
                                value={inputs.Designation || ""}
                                onChange={handleChange} />

                        </div>
                        
                        <div className="party-label-with-input">
                            <label>Nationality</label>
                            <input type="text"
                                name="Nationality"
                                value={inputs.Nationality || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="party-label-with-input">
                            <label>Present Address</label>
                            <input type="text"
                                name="presentAddress"
                                value={inputs.presentAddress || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="party-label-with-input">
                            <label>Permanent Address</label>
                            <input type="text"
                                name="PermanentAddress"
                                value={inputs.PermanentAddress || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="party-label-with-input">
                            <label>Personal Phone Number</label>
                            <input type="text"
                                name="personalNumber"
                                value={inputs.personalNumber || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="party-label-with-input">
                            <label>Optional Phone Number</label>
                            <input type="text"
                                name="optionalNumber"
                                value={inputs.optionalNumber || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="party-label-with-input">
                            <label>Party Email</label>
                            <input type="text"
                                name="partyEmail"
                                value={inputs.partyEmail || ""}
                                onChange={handleChange} />

                        </div>
                        <div className="party-label-with-input">
                            <label>Party NID</label>
                            <input type="text"
                                name="partyNid"
                                value={inputs.partyNid || ""}
                                onChange={handleChange} />

                        </div>
                       
                        <div className="party-label-with-image">
                            <label>Image </label>
                            <input type="file" multiple accept="image/*"
                                name="image"
                                value={inputs.image || ""}
                                
                                onChange={handleChange} />

                        </div>


                        <div className="party-footer">
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

export default PartyModal;