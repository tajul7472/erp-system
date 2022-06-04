import React, { useState, useEffect, useCallback } from "react";
import logo from '../../Icons/logo.png'
import home from '../../Icons/home.png'
import SupplierModal from './SupplierModal.js'

import './supplier.css'

function Supplier() {
    const options = [
        { value: '', label: 'Please Select' },
        { value: 'Purchase', label: 'For Purchase' },
        { value: 'sell', label: 'For Sell' },
        { value: 'workorder', label: 'For Workorder' },
    ]
    const [modalOpen, setModalOpen] = useState(false);
    const keyPress = useCallback(e => {
        if (e.key === 'Escape' && modalOpen) {
            setModalOpen(false)
        }
    }, [setModalOpen, modalOpen])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress])

    const supplierData=[
        {
            supplierId:1012,
            companyName:'InspirBd',
            supplierName:'Tajul Islam',
            contact:'01705386513',
            photo:'../../Icons/home.png',
            previousDue:'58620',
            totalPaid:'6565',
            totalDue:'8566'
        },
        {
            
            supplierId:1012,
            companyName:'Brain Station 23',
            supplierName:'Tajul Islam',
            contact:'01705386513',
            photo:'../../Icons/home.png',
            previousDue:'58620',
            totalPaid:'6565',
            totalDue:'8566'
        }
    ]
    return (
        <div className='supplier-section'>
            <div className='header-top'>
                <div className='header-top-logo'>
                    <img src={logo} alt='Header Logo' />
                    <span>supplier</span>
                </div>
                <div className='header-top-tittle'>
                    <span><img src={home} /></span>
                    <span>Home</span>
                    <span>supplier</span>
                </div>
            </div>

            <div className='supplier-main-section'>
                <div className='supplier-search-option'>
                    <form className='supplier-search-form'>
                        <div className="supplier-search-option-input">
                            <label>Company Select</label>
                            <select id="company" name="companyFor"
                            // onChange={handleChange}
                            >
                                {
                                    options.map((item, index) => (
                                        <option key={index} value={item.value}>{item.label}</option>
                                    ))
                                }

                            </select>

                        </div>
                        <div className="supplier-search-option-input">
                            <label>Supplier Name</label>
                            <input type="text"
                            />

                        </div>
                        <div className="supplier-search-option-input">
                            <label>Supplier ID</label>
                            <input type="text"
                            />

                        </div>
                        <div className="supplier-search-option-input">
                            <label>Phone Number</label>
                            <input type="text"
                            />

                        </div>
                        <div className="supplier-search-btn">
                            <button>Search</button>
                            <span className="supplier-clear-btn"><button>Clear</button></span>

                        </div>


                    </form>

                </div>
                <div className='add-supplier'>
                    <div className='total'>
                        <span>Total:</span>
                        <span className="total-amount">50</span>
                    </div>
                    <div className='create-supplier'>
                        <button
                            className="openModalBtn"
                            onClick={() => {
                                setModalOpen(true);
                            }}
                        >
                            Add Supplier
                        </button>
                    </div>
                </div>
                <div className="show-search-section">
          <div className="show">
            <span>Show</span>
            <span>
              <select>
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
            </span>
            <span>Entries</span>
          </div>
          <div className="search-option">
            <label>Search:
              <input type="text"
                name="search"
              />
            </label>
          </div>

        </div>

                <div className="company-table">
                    <table>
                        <tbody>
                            <tr>
                                <th>Supplier ID</th>
                                <th>Company Name</th>
                                <th>Supplier Name</th>
                                <th>Contact</th>
                                <th>Photo</th>
                                <th>Previous Due</th>
                                <th>Total Paid</th>
                                <th>Total Due</th>
                                <th>Action</th>
                            </tr>
                           {
                               supplierData.map((item)=>(
                                   <tr>
                                       <td>{item.supplierId}</td>
                                       <td>{item.companyName}</td>
                                       <td>{item.supplierName}</td>
                                       <td>{item.contact}</td>
                                       {/* <td>{item.photo}</td> */}
                                       <td><img src={item.photo} /></td>
                                       <td>{item.previousDue}</td>
                                       <td>{item.totalPaid}</td>
                                       <td>{item.totalDue}</td>
                                       <td><button className="editBtn">Action</button></td>
                                   </tr>
                               ))
                           }
                        </tbody>
                    </table>
                </div>
            </div>


            {modalOpen && <SupplierModal setOpenModal={setModalOpen} />}

        </div>
    )
}

export default Supplier