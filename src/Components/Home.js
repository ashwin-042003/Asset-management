import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'
import bgImg from './Images/bg1.jpg'
import { useAuth } from './Auth'

const Home = () => {
  const context = useAuth()
  return (
    <div>
    <div className='main'>
      <h1>Asset Management</h1>
      <ul className = "navbar">
                <div className = "it">
                    <li className="list item1"><NavLink className="items" to="/">Home</NavLink></li>
                    <li className="list item2"><NavLink className="items" to="/aboutus" >About Us</NavLink></li>
                    {context.user === "admin" && <li className="list item3"><NavLink className="items" to="/admin" >Admin</NavLink></li>}
                   { context.user && <li className="list item4"><NavLink className = "items" to="/user" >User</NavLink></li>}
                   <li className="list item5"><NavLink className = "items" to="/login" >Login</NavLink></li>
                   <li className="list item6"><NavLink className = "items" to="/signup" >Sign Up</NavLink></li>
                </div>               
            </ul>
    </div>
    <div className='heading'>
        <h1>What is Asset Management ?</h1>
        <img src={bgImg} alt="bgimg"/>
        <p>Asset management is the strategic process of overseeing and maximizing the value of assets owned by individuals, organizations, or entities. These assets can encompass both tangible items like property, equipment, vehicles, and inventory, as well as intangible assets such as patents, trademarks, and intellectual property. The primary objective of asset management is to optimize the performance, utilization, and value of these assets throughout their lifecycle. This involves various activities including acquisition, tracking, maintenance, depreciation, disposal, and strategic planning. Key aspects of asset management include asset tracking to monitor location and condition, maintenance scheduling to ensure operational efficiency, depreciation calculation to account for value reduction over time, risk management to mitigate potential threats, financial planning to align with organizational goals, compliance with regulations, and data management and analytics to inform decision-making. Effective asset management can lead to improved operational efficiency, cost savings, risk reduction, compliance adherence, and informed decision-making, making it essential for organizations to implement robust asset management practices.</p>
    </div>
    </div>
    
  )
}

export default Home
