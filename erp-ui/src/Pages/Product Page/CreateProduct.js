import React, { useState } from "react";
import logo from '../../Icons/logo.png'
import home from '../../Icons/home.png'
import "./createProduct.css"

const CreateProduct = () => {
  const [products, setProducts] = useState({

    productName: '',
    roll: '',
    fabricType: '',
    dia: '',
    billNumber: '',
    receiveDate: '',
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
    finishGsm: '',
    yarnLotNumber: ''

  });
//   const addProduct = (product) => {
//     const id = Math.floor(Math.random() * 1000 + 1)
//     const newProduct=({id,...product});
//     setProducts([...products,newProduct])
// }



  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setProducts(values => ({ ...values, [name]: value }));

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(products);
    // addProduct(products)
    setProducts({

      productName: '',
      roll: '',
      fabricType: '',
      dia: '',
      billNumber: '',
      receiveDate: '',
      partyName: '',
      batchProcessDate: '',
      colorName: '',
      lotNumber: '',
      openTube: '',
      batchNumber: '',
      slNo: '',
      orderNumber: '',
      gsm: '',
      styleNumber: '',
      yarnCount: '',
      finishGsm: '',
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
                value={products.productName || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>roll</label>
              <input type="text"
                name="roll"
                value={products.roll || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Fabric Type</label>
              <input type="text"
                name="fabricType"
                value={products.fabricType || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Dia</label>
              <input type="text"
                name="dia"
                value={products.dia || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Bill Number</label>
              <input type="text"
                name="billNumber"
                value={products.billNumber || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Fabric Receive Date</label>
              <input type="date"
                name="receiveDate"
                value={products.receiveDate || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Party Name</label>
              <input type="text"
                name="partyName"
                value={products.partyName || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Batch Process Date</label>
              <input type="date"
                name="batchProcessDate"
                value={products.batchProcessDate || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Color Name</label>
              <input type="text"
                name="colorName"
                value={products.colorName || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Lot Number</label>
              <input type="text"
                name="lotNumber"
                value={products.lotNumber || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Open/ Tube</label>
              <input type="text"
                name="openTube"
                value={products.openTube || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Batch Number</label>
              <input type="text"
                name="batchNumber"
                value={products.batchNumber || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>SL Number</label>
              <input type="text"
                name="slNo"
                value={products.slNo || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Order Number</label>
              <input type="text"
                name="orderNumber"
                value={products.orderNumber || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>G.G.S.M</label>
              <input type="text"
                name="gsm"
                value={products.gsm || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Style Number</label>
              <input type="text"
                name="styleNumber"
                value={products.styleNumber || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Yarn Count</label>
              <input type="text"
                name="yarnCount"
                value={products.yarnCount || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Finish GSM</label>
              <input type="text"
                name="finishGsm"
                value={products.finishGsm || ""}
                onChange={handleChange} />

            </div>
            <div className="product-label-with-input">
              <label>Yarn Lot Number</label>
              <input type="text"
                name="yarnLotNumber"
                value={products.yarnLotNumber || ""}
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