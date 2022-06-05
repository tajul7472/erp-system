import React from 'react'
import logo from '../../Icons/logo.png'
import home from '../../Icons/home.png'
import './dashboard.css'
import { AiOutlineRise ,AiOutlineUsergroupAdd,AiOutlineShoppingCart,AiOutlineFall} from 'react-icons/ai'

const Dashboard = () => {
    return (
        <div className='dashboard-section'>
            <div className='header-top'>
                <div className='header-top-logo'>
                    <img src={logo} alt='Header Logo' />
                    <span>Dashboard</span>
                </div>
                <div className='header-top-tittle'>
                    <span><img src={home} /></span>
                    <span>Home</span>
                    <span>Dashboard</span>
                </div>
            </div>

            <div className='dashboard-main-section'>
                <div className='today-total-sale'>
                    <div className='description'>
                        <span>Today Total Sale</span>
                        <h4>150 KG</h4>
                        <h4>5690 TK</h4>
                    </div>
                    <div className='description-icons'>
                        <AiOutlineRise />

                    </div>
                </div>
                <div className='month-total-sale'>
                    <div className='description'>
                        <span>Present Month Total Sale</span>
                        <h4>0 KG</h4>
                        <h4>0 TK</h4>
                    </div>
                    <div className='description-icons'>
                        <AiOutlineRise />

                    </div>
                </div>
                <div className='today-total-purchase'>
                    <div className='description'>
                        <span>Today Total Purchase</span>
                        <h4>0 KG</h4>
                        <h4>0 TK</h4>
                    </div>
                    <div className='description-icons'>
                        <AiOutlineShoppingCart />

                    </div>
                </div>
                <div className='month-total-purchase'>
                    <div className='description'>
                        <span>Present Month Total Purchase</span>
                        <h4>0 KG</h4>
                        <h4>0 TK</h4>
                    </div>
                    <div className='description-icons'>
                        <AiOutlineShoppingCart />

                    </div>
                </div>
                <div className='today-total-due'>
                    <div className='description'>
                        <span>Today Total Due</span>
                        <h4>0 KG</h4>
                        <h4>0 TK</h4>
                    </div>
                    <div className='description-icons'>
                        <AiOutlineFall />

                    </div>
                </div>
                <div className='present-month-total-due'>
                    <div className='description'>
                        <span>Present Month Total Due</span>
                        <h4>0 KG</h4>
                        <h4>0 TK</h4>
                    </div>
                    <div className='description-icons'>
                        <AiOutlineFall />

                    </div>
                </div>
                <div className='total-customer'>
                    <div className='description'>
                        <span>Total Customer</span>
                        <h4>0</h4>
                        
                    </div>
                    <div className='description-icons'>
                        <AiOutlineUsergroupAdd />

                    </div>
                </div>
                <div className='total-supplier'>
                    <div className='description'>
                        <span>Total Supplier</span>
                        <h4>0</h4>
                        
                    </div>
                    <div className='description-icons'>
                        <AiOutlineUsergroupAdd />

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Dashboard