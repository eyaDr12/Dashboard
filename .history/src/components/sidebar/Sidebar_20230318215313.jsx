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
import Logo from '../../logoLogo.png'

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
    <div className="topLeft">
          <img className="logo" src={Logo} alt="logo" />
        </div>
      <ul className="sidebar-menu">
        <li >
            <Link to='/'><AiOutlineBarChart/><span style={{marginLeft:'6px'}}>Dashboard</span></Link>
              
            </li>
       <li>
       <Link to='/UserList'><FiUser/><span style={{marginLeft:'6px'}}>Users</span></Link>
       </li>
       <li onClick={toggleDropdown1}> <Link ><FiUsers /><span style={{marginLeft:'6px'}}>Employees</span> <RiArrowDownSFill/></Link></li>
        {showDropdown && (
          <ul className="dropdown-menu">
          <li>
          <Link to='/employees/PI'> <FiUser /><span style={{marginLeft:'6px'}}>Personal informations</span></Link> </li>
          <li>
          <Link to='/employees/SI'> <MdAttachMoney/><span style={{marginLeft:'6px'}}>Sales informations</span></Link> 
          </li>
           <li>
           <Link to='/employees/TM'><BsListTask /><span style={{marginLeft:'6px'}}>task management</span></Link>
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
            <li onClick={toggleDropdown2}> <Link ><CgLoadbarDoc /><span style={{marginLeft:'6px'}}>Documents </span><RiArrowDownSFill/> </Link ></li>
        {showDrop && (
          <ul className="dropdown-menu">
           <li>
           <Link to='/documents/PO'><CgLoadbarDoc /><span style={{marginLeft:'6px'}}>purchase order</span></Link> 
           </li>
          <li>
          <Link to='/documents/DN'><CgLoadbarDoc /><span style={{marginLeft:'6px'}}>Delivery note</span></Link> 
          </li>
          <li>
            <Link to='/bills'><CgLoadbarDoc /><span style={{marginLeft:'6px'}}>Bills</span></Link> 
          </li>
          </ul>

        )}
      < li>
      <Link to='/taxes'><HiOutlineDocumentText/><span style={{marginLeft:'6px'}}>Taxes</span></Link>
      </li>
      <li>
      <Link to='/Calendar'><MdMailOutline/><span style={{marginLeft:'6px'}}>Calendar</span></Link> 
      </li>
       <li><Link to='/Messages'><MdChatBubbleOutline/><span style={{marginLeft:'6px'}}>Messages</span></Link> 
       </li>
      </ul>
    </div>
  );
}

export default Sidebar;