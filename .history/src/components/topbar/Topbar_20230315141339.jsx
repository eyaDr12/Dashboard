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
        <div class="container-input">
  <input type="text" placeholder="Search" name="text" class="input"/>
  <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
</div>

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
