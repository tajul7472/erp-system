import React, { useState } from "react";
import logo from '../../Icons/logo.png'
import home from '../../Icons/home.png'
import "./createProduct.css"

const CreateProduct = () => {
  const [inputs, setInputs] = useState({

    productName: '',
    roll: '',
    fabricType: '',
    dia: '',
    billNumber: '',
    fabricReceiveDate: '',
    partyName: '',
    batchProcessDate: '',
    colorName: '',
    lotNumber: '',
    openTube: '',
    batchNumber: '',
    slNumber: '',
    orderNumber: '',
    ggsm: '',
    styleNumber: '',
    yarnCount: '',
    finishGSM: '',
    yarnLotNumber: ''

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

      productName: '',
      roll: '',
      fabricType: '',
      dia: '',
      billNumber: '',
      fabricReceiveDate: '',
      partyName: '',
      batchProcessDate: '',
      colorName: '',
      lotNumber: '',
      openTube: '',
      batchNumber: '',
      slNumber: '',
      orderNumber: '',
      ggsm: '',
      styleNumber: '',
      yarnCount: '',
      finishGSM: '',
      yarnLotNumber: ''
    })
  }

  return (
    <div className='product-section'>
      <div className='header-top'>
        <div className='header-top-logo'>
          <img src={logo} alt='Header Logo' />
          <span>Add Product</span>
        </div>
        <div className='header-top-tittle'>
          <span><img src={home} /></span>
          <span>Home</span>
          <span>Add Product</span>
        </div>
      </div>

      <div className='create-product-section'>
        <h3>Create Product</h3>
        <div className='add-product'>
          <form className="product-create-form" onSubmit={handleSubmit}>
            <div className="product-label-with-input">
              <label>Product Name</label>
              <input type="text"
                name="productName"
                value={inputs.productName || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Roll</label>
              <input type="text"
                name="roll"
                value={inputs.roll || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Fabric Type</label>
              <input type="text"
                name="fabricType"
                value={inputs.fabricType || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Dia</label>
              <input type="text"
                name="dia"
                value={inputs.dia || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Bill Number</label>
              <input type="text"
                name="billNumber"
                value={inputs.billNumber || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Fabric Receive Date</label>
              <input type="date"
                name="fabricReceiveDate"
                value={inputs.fabricReceiveDate || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Party Name</label>
              <input type="text"
                name="partyName"
                value={inputs.partyName || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Batch Process Date</label>
              <input type="date"
                name="batchProcessDate"
                value={inputs.batchProcessDate || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Color Name</label>
              <input type="text"
                name="colorName"
                value={inputs.colorName || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Lot Number</label>
              <input type="text"
                name="lotNumber"
                value={inputs.lotNumber || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Open/ Tube</label>
              <input type="text"
                name="openTube"
                value={inputs.openTube || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Batch Number</label>
              <input type="text"
                name="batchNumber"
                value={inputs.batchNumber || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>SL Number</label>
              <input type="text"
                name="slNumber"
                value={inputs.slNumber || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Order Number</label>
              <input type="text"
                name="orderNumber"
                value={inputs.orderNumber || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>G.G.S.M</label>
              <input type="text"
                name="ggsm"
                value={inputs.ggsm || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Style Number</label>
              <input type="text"
                name="styleNumber"
                value={inputs.styleNumber || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Yarn Count</label>
              <input type="text"
                name="yarnCount"
                value={inputs.yarnCount || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Finish GSM</label>
              <input type="text"
                name="finishGSM"
                value={inputs.finishGSM || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Yarn Lot Number</label>
              <input type="text"
                name="yarnLotNumber"
                value={inputs.yarnLotNumber || ""}
                onChange={handleChange} />

            </div>
            <div  className="productBtn">
            <button className="btn">Save</button>
            </div>
          </form>

        </div>

      </div>

    </div>
  )
}

export default CreateProduct