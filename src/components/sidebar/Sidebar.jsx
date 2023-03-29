import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import {HiOutlineDocumentText} from 'react-icons/hi'
import {CgLoadbarDoc} from 'react-icons/cg'
import { AiOutlineBarChart} from "react-icons/ai";
import {FiUser,FiUsers} from 'react-icons/fi'
import {
  MdMailOutline,
  MdAttachMoney,
  MdChatBubbleOutline,
  MdOutlineStorefront} from "react-icons/md";
import {RiArrowDownSFill,RiArrowUpSFill } from "react-icons/ri"

import LogoN from '../../Assets/LogoN.png'

function Sidebar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [clicked1, setClicked1] = useState(false);

  
  const toggleDropdown1 = () => {
    setShowDropdown(!showDropdown);
    setClicked1(!clicked1);
  };
  

  return (
    <div className="sidebar">
   
      <ul className="sidebar-menu">
    
        <li >
       
            <Link to='/'><AiOutlineBarChart/><span style={{marginLeft:'6px'}}>Dashboard</span></Link>
              
            </li>
       
       <li>
       <Link to='/UserList'><FiUser/><span style={{marginLeft:'6px'}}>Users</span></Link>
       </li>
       <li onClick={toggleDropdown1}> <Link ><FiUsers /><span style={{marginLeft:'6px'}}>Employees</span>   
       <span style={{marginLeft:'42px'}}>{ clicked1 ? <RiArrowUpSFill  /> :<RiArrowDownSFill  />}</span>
            </Link></li>
        {showDropdown && (
          <ul className="dropdown-menu">
          <li>
          <Link to='/EmployList'> <FiUser /><span style={{marginLeft:'6px'}}>Personal informations</span></Link> </li>
          <li>
          <Link to='/Sale'> <MdAttachMoney/><span style={{marginLeft:'6px'}}>Sales informations</span></Link> 
          </li>
          
          </ul>

        )}
       <li>
       <Link to='/ProductList'><MdOutlineStorefront/><span style={{marginLeft:'6px'}}>Products</span>
       </Link>
        </li>
        <li>
        <Link to='/Orders'><MdAttachMoney/><span style={{marginLeft:'6px'}}>Orders</span></Link> 
        </li>
           
       
        
          <li>
            <Link to='/BillTab'><CgLoadbarDoc /><span style={{marginLeft:'6px'}}>Bills</span></Link> 
          </li>
          

        
      < li>
      <Link to='/Declaration'><HiOutlineDocumentText/><span style={{marginLeft:'6px'}}>Taxes</span></Link>
      </li>
    
      <li>
      <Link to='/Calendar'><MdMailOutline/><span style={{marginLeft:'6px'}}>Calendar</span></Link> 
      </li>
       <li><Link to='/Message'><MdChatBubbleOutline/><span style={{marginLeft:'6px'}}>Messages</span></Link> 
       </li>
      </ul>
      <div className="Logo">
          <img className="LogoN" src={LogoN} alt="logo" />
        </div>
    </div>
  );
}

export default Sidebar;