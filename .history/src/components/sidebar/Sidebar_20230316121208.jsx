import "./sidebar.css";
import {
        MdTimeline,
        MdMailOutline,
        MdDynamicFeed, 
        MdOutlineReport,
        MdWorkOutline,
        MdAttachMoney,
        MdChatBubbleOutline,
        MdOutlineStorefront} from "react-icons/md";

import { AiOutlineBarChart,AiOutlineUser} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
    
          <ul className="sidebarList">
             <Link to='/'>
            <li className="sidebarListItem">
              <AiOutlineBarChart className="sidebarIcon" />
              Dashbored
            </li>
            </Link>
            <Link to='UserList'>
              <li className="sidebarListItem">
                <AiOutlineUser className="sidebarIcon" />
                Users
              </li>
              </Link>
              <Link to='ProductList'>
              <li className="sidebarListItem">
                <MdOutlineStorefront className="sidebarIcon" />
                Products
              </li>
              </Link>
              <Link to='/Orders'>
            <li className="sidebarListItem">
              <MdAttachMoney className="sidebarIcon" />
              Orders
            </li>
            </Link>
            <Link to='/calendar'>
            <li className="sidebarListItem">
              <MdMailOutline className="sidebarIcon" />
              calendar
            </li>
            </Link>

          </ul>
        
          <ul className="sidebarList">
              
           
           
              </ul>
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
           
           
          </ul>
        </div>
      
      </div>

  );
}
