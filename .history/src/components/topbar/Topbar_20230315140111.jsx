import React from "react";
import "./topbar.css";
import { AiOutlineBell, AiOutlineSetting } from  "react-icons/ai" ;
import LogoNav from '../../logo/LogoNav.png'
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
      <div className="topLeft">
          <img className="logo" src={LogoNav} alt="logo" />
        </div>
        <form class="form">
      <button>
          <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
              <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
      </button>
      <input class="input" placeholder="Type your text" required="" type="text"/>
      <button class="reset" type="reset">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
      </button>
  </form>
        <div className="topRight">
          <div className="topbarIconContainer">
            <AiOutlineBell />
            <span className="topIconBadge">0</span>
          </div>
          <div className="topbarIconContainer">
            <AiOutlineSetting />
          </div>
          </div>
          <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" className="topAvatar" />
        </div>
      </div>
  );
}
