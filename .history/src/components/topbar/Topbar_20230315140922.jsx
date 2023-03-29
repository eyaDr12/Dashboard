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
  <svg fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
    <path d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z" fill-rule="evenodd"></path>
</svg>
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
