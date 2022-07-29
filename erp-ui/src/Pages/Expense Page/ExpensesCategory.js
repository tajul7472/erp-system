import React, { useState, useEffect, useCallback } from "react";
import logo from '../../Icons/logo.png'
import home from '../../Icons/home.png'
import ExponseModal from "./ExponseModal";
import './expensesCategory.css'

const ExpensesCategory = () => {
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

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      Name: 'Salary Expense',
      remark: 'All Employe salary expense '

    },
    {
      id: 2,
      Name: 'Party Lunch Bill',
      remark: 'Samir Fasion party lunch bill'
    }
  ])

  //Add Expenses
  const addExpenses = (data) => {
    const id = Math.floor(Math.random() * 1000 + 1)
    const newExpense = ({ id, ...data })
    setExpenses([...expenses, newExpense])

  }

  // Delete Expense
  const deleteExpenses=(id)=>{
    setExpenses(expenses.filter((data)=>data.id!==id))
  }
  return (
    <div className='expenses-section'>
      <div className='header-top'>
        <div className='header-top-logo'>
          <img src={logo} alt='Header Logo' />
          <span>Expense Category</span>
        </div>
        <div className='header-top-tittle'>
          <span><img src={home} /></span>
          <span>Home</span>
          <span>Expense Category</span>
        </div>
      </div>

      <div className='expenses-main-section'>
        <h3>Create New Expenses Category</h3>
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


        <div className="expenses-show">
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
                expenses.map((item) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.Name}</td>
                    <td>{item.remark}</td>

                    <td><button className="deleteBtn" onClick={()=>deleteExpenses(item.id)}>Delete</button>
                      <button className="editBtn">Edit</button></td>
                  </tr>
                ))
              }



            </tbody>
          </table>
        </div>




      </div>

      {modalOpen && <ExponseModal setOpenModal={setModalOpen} onAdd={addExpenses} />}

    </div>
  )
}

export default ExpensesCategory