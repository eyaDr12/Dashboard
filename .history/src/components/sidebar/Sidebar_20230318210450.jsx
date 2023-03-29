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
import {BsListTask} from "react-icons/bs"
function Sidebar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDrop, setShowDrop] = useState(false);

  const toggleDropdown1 = () => {
    setShowDropdown(!showDropdown);
  };
  const toggleDropdown2 = () => {
    setShowDrop(!showDrop);
  };

  return (
    <div className="sidebar">
    
      <ul className="sidebar-menu">
        <li >
            <Link to='/'><AiOutlineBarChart/><span class>Dashboard</span></Link>
              
            </li>
       <li>
       <Link to='/UserList'><FiUser/>Users</Link>
       </li>
        <li onClick={toggleDropdown1}> <FiUsers /><span class>Employees</span> <RiArrowDownSFill/></li>
        {showDropdown && (
          <ul className="dropdown-menu">
          <li>
          <Link to='/employees/PI'> <FiUser /><span class>Personal informations</span></Link> </li>
          <li>
          <Link to='/employees/SI'> <MdAttachMoney/><span class>Sales informations</span></Link> 
          </li>
           <li>
           <Link to='/employees/TM'><BsListTask /><span class>task management</span></Link>
           </li>
          </ul>

        )}
       <li>
       <Link to='/ProductList'><MdOutlineStorefront/><span class>Products</span>
       </Link>
        </li>
        <li>
        <Link to='/Orders'><MdAttachMoney/><span class>Orders</span></Link> 
        </li>
            <li onClick={toggleDropdown2}><CgLoadbarDoc /><span class>Documents </span><RiArrowDownSFill/></li>
        {showDrop && (
          <ul className="dropdown-menu">
           <li>
           <Link to='/documents/PO'><CgLoadbarDoc /><span class>purchase order</span></Link> 
           </li>
          <li>
          <Link to='/documents/DN'><CgLoadbarDoc /><span class>Delivery note</span></Link> 
          </li>
          <li>
            <Link to='/bills'><CgLoadbarDoc /><span class>Bills</span></Link> 
          </li>
          </ul>

        )}
      < li>
      <Link to='/taxes'><HiOutlineDocumentText/><span class>Taxes</span></Link>
      </li>
      <li>
      <Link to='/Calendar'><MdMailOutline/><span class>Calendar</span></Link> 
      </li>
       <li><Link to='/Messages'><MdChatBubbleOutline/><span class>Messages</span></Link> 
       </li>
      </ul>
    </div>
  );
}

export default Sidebar;