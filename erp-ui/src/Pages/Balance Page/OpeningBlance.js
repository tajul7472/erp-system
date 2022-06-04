import React from 'react'
import logo from '../../Icons/logo.png'
import home from '../../Icons/home.png'
import './openingBalance.css'

const OpeningBlance = () => {
    return (
        <>
            <div className='opening-balance-section'>
                <div className='header-top'>
                    <div className='header-top-logo'>
                        <img src={logo} alt='Header Logo' />
                        <span>Update Opening Balance</span>
                    </div>
                    <div className='header-top-tittle'>
                        <span><img src={home} /></span>
                        <span>Home</span>
                        <span>Update Opening Balance</span>
                    </div>
                </div>
                <div className='opening-balance-main-section'>
                    <div className='update-balance'>
                        <h3>Update Opening Balance</h3>

                    </div>
                    <div className='customer-search-option'>
                        <form className='create-update-form'>


                            <div className="label-with-input">
                                <label>Date</label>
                                <input type="date"
                                />

                            </div>
                            <div className="label-with-input">
                                <label>Update Balance</label>
                                <input type="text"
                                />

                            </div>
                            <div className="update-balance-btn">
                                <button>Update</button>


                            </div>


                        </form>

                    </div>



                </div>



            </div></>

    )
}

export default OpeningBlance