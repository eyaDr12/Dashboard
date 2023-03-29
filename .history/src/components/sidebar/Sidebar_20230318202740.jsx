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
          <Link to='/'> <FiUser />Personal informations</Link> </li>
          <li>
          <Link to='/'> <TimelineRoundedIcon />Sales informations</Link> 
          </li>
           <li>
           <Link to='/'><BsListTask />task management
           </li>
          </ul>

        )}
       <li><MdOutlineStorefront/>Products</li>
            <li><MdAttachMoney/>Orders</li>
            <li onClick={toggleDropdown2}>Documents <RiArrowDownSFill/></li>
        {showDrop && (
          <ul className="dropdown-menu">
           <li><CgLoadbarDoc />purchase order</li>
          <li><CgLoadbarDoc />Delivery note</li>
            <li><CgLoadbarDoc />Bills</li>
          </ul>

        )}
      < li><HiOutlineDocumentText/>Taxes</li>
    <li><MdMailOutline/>Calendar</li>
       <li><MdChatBubbleOutline/>Messages</li>
      </ul>
    </div>
  );
}

export default Sidebar;