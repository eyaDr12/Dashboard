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
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
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
      <div className="sidebar-header">
        <h3>My Sidebar</h3>
      </div>
      <ul className="sidebar-menu">
        <li >
            <Link to='/'><AiOutlineBarChart/>Dashboard</Link>
              
            </li>
       <li>
       <Link to='/UserList'><FiUser/>Users</Link>
       </li>
        <li onClick={toggleDropdown1}> <FiUsers />Employees <RiArrowDownSFill/></li>
        {showDropdown && (
          <ul className="dropdown-menu">
          <li>
          <Link to='/employees/PI'> <FiUser />Personal informations</Link> </li>
          <li>
          <Link to='/employees/SI'> <TimelineRoundedIcon />Sales informations</Link> 
          </li>
           <li>
           <Link to='/employees/TM'><BsListTask />task management</Link>
           </li>
          </ul>

        )}
       <li>
       <Link to='/ProductList'><MdOutlineStorefront/>Products
       </Link>
        </li>
        <li>
        <Link to='/Orders'><MdAttachMoney/>Orders</Link> 
        </li>
            <li onClick={toggleDropdown2}><CgLoadbarDoc />Documents <RiArrowDownSFill/></li>
        {showDrop && (
          <ul className="dropdown-menu">
           <li>
           <Link to='/'><CgLoadbarDoc />purchase order</Link> 
           </li>
          <li>
          <Link to='/'><CgLoadbarDoc />Delivery note</Link> 
          </li>
          <li>
            <Link to='/'><CgLoadbarDoc />Bills</Link> 
          </li>
          </ul>

        )}
      < li>
      <HiOutlineDocumentText/>Taxes</li>
    <li><MdMailOutline/>Calendar</li>
       <li><MdChatBubbleOutline/>Messages</li>
      </ul>
    </div>
  );
}

export default Sidebar;