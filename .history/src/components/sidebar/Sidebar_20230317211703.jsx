import "./sidebar.css";
import React from 'react'
import {HiOutlineDocumentText} from 'react-icons/hi'
import {CgLoadbarDoc} from 'react-icons/cg'
import { AiOutlineBarChart} from "react-icons/ai";
import {FiUsers,FiUser} from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import {
  MdMailOutline,
  MdAttachMoney,
  MdChatBubbleOutline,
  MdOutlineStorefront} from "react-icons/md";
 
function Sidebar() {

  const menuItem=[

    {
      path:"/",
      name:"Dashboard",
      icon:<AiOutlineBarChart/>
    },
    {
      path:"/UserList",
      name:"Users",
      icon:<FiUser/>
      
    },
    {
      path:"/employees",
      name:"Employees",
      icon:<FiUsers/>
    },
    {
      path:"/ProductList",
      name:"Products",
      icon:<MdOutlineStorefront/>
    },
    {
      path:"/Orders",
      name:"Orders",
      icon:<MdAttachMoney/>
    }
    ,
    {
      path:"/bills",
      name:"Bills",
      icon:<CgLoadbarDoc/>
    },
    {
      path:"/taxes",
      name:"Taxes",
      icon:<HiOutlineDocumentText/>
    },
    {
      path:"/Calendar",
      name:"Calendar",
      icon:<MdMailOutline/>
    },
    {
      path:"/Messages",
      name:"Messages",
      icon:<MdChatBubbleOutline/>
    }



]
  return (
    
    
    <div className='container'>
      
      <div className='sidebar' >
      
        <div className='top_section'>
          <h1 className='logo'style={{}}>Izoguern</h1>
          
        </div>


        {
          menuItem.map((item)=>(
            <NavLink to={item.path} className="link" >
              <div className='icon'>{item.icon}</div>
              <div className='link_text' >{item.name}</div>
            </NavLink>
          ))
        }

      </div>
 
    </div>
  
  )
}

export default Sidebar