import React, { useState, useEffect, useCallback } from "react";
import logo from '../../Icons/logo.png'
import home from '../../Icons/home.png'
import DepositModal from "./DepositModal";
import './deposit.css'

const DepositCategory = () => {
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

  const [category, setCategory] = useState([
    {
      id: 1,
      categoryName: 'Bank Deposit',
      remarks: 'Deposit from Samir Fasion '

    },
    {
      id: 2,
      categoryName: 'Card Deposit',
      remarks: 'Card Deposit By GM Sir'
    }
  ])

  //Add CategoryName
  const addCategory = (data) => {
    const id = Math.floor(Math.random() * 1000 + 1)
    const newCategoryName = ({ id, ...data })
    setCategory([...category, newCategoryName])

  }
  
  //Delete CategoryName
  const deleteCategory=(id)=>{
    setCategory(category.filter((data)=>data.id!==id))
  }
  return (
    <div className='deposit-section'>
      <div className='header-top'>
        <div className='header-top-logo'>
          <img src={logo} alt='Header Logo' />
          <span>Deposit Category</span>
        </div>
        <div className='header-top-tittle'>
          <span><img src={home} /></span>
          <span>Home</span>
          <span>Deposit Category</span>
        </div>
      </div>

      <div className='deposit-main-section'>
        <h3>Create New Deposit Category</h3>
        <div className='add-customer'>
          <div className='total'>
            <span>Total:</span>
            <span className="total-amount">50</span>
          </div>
          <div className='create-customer'>
            <button
              className="openModalBtn"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Add Category
            </button>
          </div>
        </div>


        <div className="deposit-show">
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

        <div className="company-table">
          <table>
            <tbody>
              <tr>
                <th>ID</th>
                <th>Category Name</th>
                <th>Remarks</th>
                <th>Action</th>
              </tr>

              {
                category.map((item) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.categoryName}</td>
                    <td>{item.remarks}</td>

                    <td><button className="deleteBtn" onClick={()=>deleteCategory(item.id)}>Delete</button>
                      <button className="editBtn">Edit</button></td>
                  </tr>
                ))
              }



            </tbody>
          </table>
        </div>




      </div>

      {modalOpen && <DepositModal setOpenModal={setModalOpen} onAdd={addCategory} />}

    </div>
  )
}

export default DepositCategory