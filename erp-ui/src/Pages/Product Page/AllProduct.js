import React from 'react'
import logo from '../../Icons/logo.png'
import home from '../../Icons/home.png'
import './allProduct.css'

const AllProduct = () => {
    const productList=[
        {
            Id:1012,
            productName:'Micro Febric',
            partyName:'Tajul Islam',
            colorName:'Black',
            slNo:'1456',
            gsm:'58620',
            receiveDate:'1/5/2022',
            roll:'8566',
            dia:'60',
            orderNumber:'4565',
            finishGsm:'270'

        },
        {
            
            Id:1012,
            productName:'Micro Febric',
            partyName:'Tajul Islam',
            colorName:'Black',
            slNo:'1456',
            gsm:'58620',
            receiveDate:'1/5/2022',
            roll:'8566',
            dia:'60',
            orderNumber:'4565',
            finishGsm:'270'
        }
    ]
    return (
        <div className='all-product-section'>
            <div className='header-top'>
                <div className='header-top-logo'>
                    <img src={logo} alt='Header Logo' />
                    <span>All Product</span>
                </div>
                <div className='header-top-tittle'>
                    <span><img src={home} /></span>
                    <span>Home</span>
                    <span>All Product</span>
                </div>
            </div>
            <div className='allProduct-main-section'>
                <div className='allProduct-search-option'>
                    <form className='allProduct-search-form'>

                        <div className="allProduct-search-option-input">
                            <label>Product Name</label>
                            <input type="text"
                            />

                        </div>
                        <div className="allProduct-search-option-input">
                            <label>Product Bar Code</label>
                            <input type="text"
                            />

                        </div>
                        <div className="allProduct-search-option-input">
                            <label>Party Name</label>
                            <input type="text"
                            />

                        </div>
                        <div className="allProduct-search-btn">
                            <button>Search</button>
                            <span className="allProduct-clear-btn"><button>Clear</button></span>

                        </div>


                    </form>

                </div>
                <div className='show-all-product'>
                    <div className='total'>
                        <span>Total:</span>
                        <span className="total-amount">50</span>
                    </div>
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
                </div>
                <div className="company-table">
                    <table>
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <th>Product Name</th>
                                <th>Party Name</th>
                                <th>Color Name</th>
                                <th>S/L No</th>
                                <th>G.G.S.M</th>
                                <th>Receive Date</th>
                                <th>Roll</th>
                                <th>Dia</th>
                                <th>Order Number</th>
                                <th>Finish GSM</th>
                                <th>Action</th>
                            </tr>
                           {
                               productList.map((item)=>(
                                   <tr>
                                       <td>{item.Id}</td>
                                       <td>{item.productName}</td>
                                       <td>{item.partyName}</td>
                                       <td>{item.colorName}</td>
                                       <td>{item.slNo}</td>
                                       <td>{item.gsm}</td>
                                       <td>{item.receiveDate}</td>
                                       <td>{item.roll}</td>
                                       <td>{item.dia}</td>
                                       <td>{item.orderNumber}</td>
                                       <td>{item.finishGsm}</td>
                                       <td><button className="editBtn">Action</button></td>
                                   </tr>
                               ))
                           }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AllProduct