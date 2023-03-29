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
            <Link to='/'><AiOutlineBarChart/><style={{marginLeft:'5px'}}>Dashboard</span></Link>
              
            </li>
       <li>
       <Link to='/UserList'><FiUser/>Users</Link>
       </li>
        <li onClick={toggleDropdown1}> <FiUsers /><style={{marginLeft:'5px'}}>Employees</span> <RiArrowDownSFill/></li>
        {showDropdown && (
          <ul className="dropdown-menu">
          <li>
          <Link to='/employees/PI'> <FiUser /><style={{marginLeft:'5px'}}>Personal informations</span></Link> </li>
          <li>
          <Link to='/employees/SI'> <MdAttachMoney/><style={{marginLeft:'5px'}}>Sales informations</span></Link> 
          </li>
           <li>
           <Link to='/employees/TM'><BsListTask /><style={{marginLeft:'5px'}}>task management</span></Link>
           </li>
          </ul>

        )}
       <li>
       <Link to='/ProductList'><MdOutlineStorefront/><style={{marginLeft:'5px'}}>Products</span>
       </Link>
        </li>
        <li>
        <Link to='/Orders'><MdAttachMoney/><style={{marginLeft:'5px'}}>Orders</span></Link> 
        </li>
            <li onClick={toggleDropdown2}><CgLoadbarDoc /><style={{marginLeft:'5px'}}>Documents </span><RiArrowDownSFill/></li>
        {showDrop && (
          <ul className="dropdown-menu">
           <li>
           <Link to='/documents/PO'><CgLoadbarDoc /><style={{marginLeft:'5px'}}>purchase order</span></Link> 
           </li>
          <li>
          <Link to='/documents/DN'><CgLoadbarDoc /><style={{marginLeft:'5px'}}>Delivery note</span></Link> 
          </li>
          <li>
            <Link to='/bills'><CgLoadbarDoc /><style={{marginLeft:'5px'}}>Bills</span></Link> 
          </li>
          </ul>

        )}
      < li>
      <Link to='/taxes'><HiOutlineDocumentText/><style={{marginLeft:'5px'}}>Taxes</span></Link>
      </li>
      <li>
      <Link to='/Calendar'><MdMailOutline/><style={{marginLeft:'5px'}}>Calendar</span></Link> 
      </li>
       <li><Link to='/Messages'><MdChatBubbleOutline/><style={{marginLeft:'5px'}}>Messages</span></Link> 
       </li>
      </ul>
    </div>
  );
}

export default Sidebar;