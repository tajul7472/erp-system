import React, { useState } from "react";
import logo from '../../Icons/logo.png'
import home from '../../Icons/home.png'
import './createEmploye.css'

const CreateEmploye = () => {
  const [inputs, setInputs] = useState({

    Name: '',
    designation: '',
    joinDate: '',
    email: '',
    phone: '',
    nid: '',
    presentAddress: '',
    permanentAddress: '',
    salary: ''


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

      Name: '',
      designation: '',
      joinDate: '',
      email: '',
      phone: '',
      nid: '',
      presentAddress: '',
      permanentAddress: '',
      salary: ''
    })
  }
  return (
    <div className='create-employe-section'>
      <div className='header-top'>
        <div className='header-top-logo'>
          <img src={logo} alt='Header Logo' />
          <span>Create Employee Details</span>
        </div>
        <div className='header-top-tittle'>
          <span><img src={home} /></span>
          <span>Home</span>
          <span>Create Employee Details</span>
        </div>
      </div>

      <div className='create-product-section'>
        <h3>Create Employee Details</h3>
        <div className='add-product'>
          <form className="product-create-form" onSubmit={handleSubmit}>
            <div className="product-label-with-input">
              <label>Name</label>
              <input type="text"
                name="Name"
                value={inputs.Name || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Designation</label>
              <input type="text"
                name="designation"
                value={inputs.designation || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Joining Date</label>
              <input type="date"
                name="joinDate"
                value={inputs.joinDate || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Email</label>
              <input type="email"
                name="email"
                value={inputs.email || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Phone</label>
              <input type="text"
                name="phone"
                value={inputs.phone || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>NID</label>
              <input type="text"
                name="nid"
                value={inputs.nid || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Present Address</label>
              <input type="text"
                name="presentAddress"
                value={inputs.presentAddress || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Permanent Address</label>
              <input type="text"
                name="permanentAddress"
                value={inputs.permanentAddress || ""}
                onChange={handleChange} />

            </div>

            <div className="product-label-with-input">
              <label>Salary</label>
              <input type="text"
                name="salary"
                value={inputs.salary || ""}
                onChange={handleChange} />

            </div>



            <div className="productBtn">
              <button className="btn">Save</button>
            </div>
          </form>

        </div>

      </div>

    </div>
  )
}

export default CreateEmploye