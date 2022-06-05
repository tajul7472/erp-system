import React from 'react'
import logo from '../../Icons/logo.png'
import home from '../../Icons/home.png'

const AllEmployee = () => {
    const productList = [
        {
            id: 1012,
            name: 'Tajul Isalm',
            designation: 'Owner',
            joindate: '1/5/2022',
            email: 'tajul@gmail.com',
            phone: '01705386513',
            address: 'Dhaka',
            nid: '01589526',
            salary: '25000'
        },
        {

            id: 1012,
            name: 'Tajul Isalm',
            designation: 'Owner',
            joindate: '1/5/2022',
            email: 'tajul@gmail.com',
            phone: '01705386513',
            address: 'Dhaka',
            nid: '01589526',
            salary: '25000'
        }
    ]
    return (
        <div className='all-employee-section'>
            <div className='header-top'>
                <div className='header-top-logo'>
                    <img src={logo} alt='Header Logo' />
                    <span> Employee Details</span>
                </div>
                <div className='header-top-tittle'>
                    <span><img src={home} /></span>
                    <span>Home</span>
                    <span> Employee Details</span>
                </div>
            </div>

            <div className='closing-balance-main-section'>
                <h3>All Employee Details</h3>
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
                                <th>ID </th>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>Joining Date</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>NID Number</th>
                                <th>Salary</th>
                                <th>Action</th>



                            </tr>
                            {
                                productList.map((item) => (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.designation}</td>
                                        <td>{item.joindate}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.email}</td>
                                        <td>{item.address}</td>
                                        <td>{item.nid}</td>
                                        <td>{item.salary}</td>
                                        <td><button className="deleteBtn">Delete</button><button className="editBtn">Edit</button></td>

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

export default AllEmployee