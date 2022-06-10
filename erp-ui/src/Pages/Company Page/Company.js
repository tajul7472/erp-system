import React, { useState, useEffect, useCallback } from "react";
import logo from '../../Icons/logo.png'
import home from '../../Icons/home.png'
import Modal from "./Modal";
import './company.css'

function Company() {
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

  const [companyData, setCompanyData] = useState([
    {
      id: 1,
      companyName: 'Inspirbd',
      companyAddress: 'Dhaka',
      companyContact: '01705386513',
      country: 'Bangladesh',
      category: 'sell'
    },
    {
      id: 2,
      companyName: 'Inspirbd',
      companyAddress: 'Dhaka',
      companyContact: '01705386513',
      country: 'Bangladesh',
      category: 'sell'
    }
  ])
  //Company Data Delete
  const deleteCompanyData = (id) => {
    setCompanyData(companyData.filter((data) => data.id !== id))

  }

  //Add Company Data
  const addCompanyData = (data) => {
    const id = Math.floor(Math.random() * 10000 + 1)
    const newData = { id, ...data }
    setCompanyData([...companyData, newData])

  }

  return (
    <>
      <div className='company-section'>
        <div className='header-top'>
          <div className='header-top-logo'>
            <img src={logo} alt='Header Logo' />
            <span>Company</span>
          </div>
          <div className='header-top-tittle'>
            <span><img src={home} /></span>
            <span>Home</span>
            <span>Company</span>
          </div>
        </div>

        {/* Add Company */}

        <div className="main-section">
          <div className='add-company'>
            <div className='total'>
              <span>Total:</span>
              <span className="total-amount">50</span>
            </div>
            <div className='create-company'>
              <button
                className="openModalBtn"
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                Add Company
              </button>
            </div>
          </div>


          {/* Show and Search */}

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
                  <th>ID</th>
                  <th>Company Name</th>
                  <th>Company Address</th>
                  <th>Contact</th>
                  <th>Country</th>
                  <th>Category</th>
                  <th>Action</th>
                </tr>

                {
                  companyData.map((item) => (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.companyName}</td>
                      <td>{item.companyAddress}</td>
                      <td>{item.companyContact}</td>
                      <td>{item.country}</td>
                      <td>{item.category}</td>
                      <td><button className="deleteBtn" onClick={() => deleteCompanyData(item.id)}>Delete</button><button className="editBtn">Edit</button></td>
                    </tr>
                  ))
                }



              </tbody>
            </table>
          </div>
        </div>
        {modalOpen && <Modal onAdd={addCompanyData} setOpenModal={setModalOpen} />}
      </div>
      
    </>

  )
}

export default Company