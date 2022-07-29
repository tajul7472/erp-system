import React, { useState, useEffect, useCallback } from "react";
import logo from '../../Icons/logo.png'
import home from '../../Icons/home.png'
import PartyModal from "./PartyModal";
import './party.css'

const Party = () => {
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

    const [partyData, setPartyData] = useState([
        {
            id: 1012,
            companyName: 'InspirBd',
            partyName: 'Tajul Islam',
            contact: '01705386513',
            email: 'tajul@gmail.com',
            presentAddress: 'Dhaka',
            image: '../../Icons/home.png'

        },
        {

            id: 1055,
            companyName: 'InspirBd',
            partyName: 'Tajul Islam',
            contact: '01705386513',
            email: 'tajul@gmail.com',
            presentAddress: 'Dhaka',
            image: '../../Icons/home.png'
        }
    ])

    //Add PartyData
    const addParty = (party) => {
        const id = Math.floor(Math.random() * 1000 + 1)
        const newParty=({id,...party})
        setPartyData([...partyData,newParty])

    }

    //Delete PartyData
    const deleteParty=(id)=>{
        setPartyData(partyData.filter((data)=>data.id!==id))
    }


    return (
        <div className='create-party-section'>
            <div className='header-top'>
                <div className='header-top-logo'>
                    <img src={logo} alt='Header Logo' />
                    <span>Create Party</span>
                </div>
                <div className='header-top-tittle'>
                    <span><img src={home} /></span>
                    <span>Home</span>
                    <span>Create Party</span>
                </div>
            </div>

            <div className='create-party-main-section'>
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
                            Add Party
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
                                <th>Party ID</th>
                                <th>Company Name</th>
                                <th>Party Name</th>
                                <th>Contact</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                            {
                                partyData.map((item) => (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.companyName}</td>
                                        <td>{item.partyName}</td>
                                        <td>{item.contact}</td>
                                        <td>{item.email}</td>
                                        <td>{item.presentAddress}</td>
                                        {/* <td>{item.image}</td> */}
                                        <td><img src={item.image} /></td>

                                        {/* <td><button className="editBtn">Action</button></td> */}
                                        <td><button className="deleteBtn" onClick={()=>deleteParty(item.id)} >Delete</button>
                                            <button className="editBtn">Edit</button></td>

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>


            </div>
            {modalOpen && <PartyModal setOpenModal={setModalOpen} onAdd={addParty}/>}

        </div>
    )
}

export default Party