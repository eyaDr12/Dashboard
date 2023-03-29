import React from "react";
import "./topbar.css";
import { AiOutlineBell } from  "react-icons/ai" ;
import LogoNav from '../../Assets/LogoNav.png'


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
      <div className="topLeft">
          <img className="logo" src={LogoNav} alt="logo" />
        </div>
        <div class="container-input">
  <input type="text" placeholder="Search" name="text" class="input"/>
  <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
              <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
</div>
      
        <div className="topRight">
          <div className="topbarIconContainer">
            <AiOutlineBell />
            <span className="topIconBadge">0</span>
          </div>
         
         
          <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" className="topAvatar" />
        </div>
      </div>
      </div>
  );
}
