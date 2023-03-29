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
            <Link to='/'><AiOutlineBarChart/><span style={{}}>Dashboard</span></Link>
              
            </li>
       <li>
       <Link to='/UserList'><FiUser/>Users</Link>
       </li>
        <li onClick={toggleDropdown1}> <FiUsers /><span style={{}}>Employees</span> <RiArrowDownSFill/></li>
        {showDropdown && (
          <ul className="dropdown-menu">
          <li>
          <Link to='/employees/PI'> <FiUser /><span style={{}}>Personal informations</span></Link> </li>
          <li>
          <Link to='/employees/SI'> <MdAttachMoney/><span style={{}}>Sales informations</span></Link> 
          </li>
           <li>
           <Link to='/employees/TM'><BsListTask /><span style={{}}>task management</span></Link>
           </li>
          </ul>

        )}
       <li>
       <Link to='/ProductList'><MdOutlineStorefront/><span style={{}}>Products</span>
       </Link>
        </li>
        <li>
        <Link to='/Orders'><MdAttachMoney/><span style={{}}>Orders</span></Link> 
        </li>
            <li onClick={toggleDropdown2}><CgLoadbarDoc /><span style={{}}>Documents </span><RiArrowDownSFill/></li>
        {showDrop && (
          <ul className="dropdown-menu">
           <li>
           <Link to='/documents/PO'><CgLoadbarDoc /><span style={{}}>purchase order</span></Link> 
           </li>
          <li>
          <Link to='/documents/DN'><CgLoadbarDoc /><span style={{}}>Delivery note</span></Link> 
          </li>
          <li>
            <Link to='/bills'><CgLoadbarDoc /><span style={{}}>Bills</span></Link> 
          </li>
          </ul>

        )}
      < li>
      <Link to='/taxes'><HiOutlineDocumentText/><span style={{}}>Taxes</span></Link>
      </li>
      <li>
      <Link to='/Calendar'><MdMailOutline/><span style={{}}>Calendar</span></Link> 
      </li>
       <li><Link to='/Messages'><MdChatBubbleOutline/><span style={{}}>Messages</span></Link> 
       </li>
      </ul>
    </div>
  );
}

export default Sidebar;