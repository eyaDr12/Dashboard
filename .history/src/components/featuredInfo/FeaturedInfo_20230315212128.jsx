import "./featuredInfo.css";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import {FcSalesPerformance}from "react-icons/fc";
import {FcConferenceCall}from "react-icons/fc";
import {FcReadingEbook}from "react-icons/fc";
export default function FeaturedInfo() {
  return (
    <div className="featured">
    
      <div className="featuredItem">
      <div className="icones">
        <FcConferenceCall/>
          </div>
          
        <span className="featuredTitle">Users</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">50</span>
          <span className="featuredMoneyRate">
            -11.4 <AiOutlineCaretDown  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="icones">
          <FcSalesPerformance/>
          </div>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">800 DT</span>
          <span className="featuredMoneyRate">
            -1.4 <AiOutlineCaretDown className="featuredIcon negative"/>
          </span>
          
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
      
        <span className="featuredTitle" >Orders</span>
    
        <div className="icones">
          <FcReadingEbook/>
          </div>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">60</span>
          <span className="featuredMoneyRate">
            +2.4 <AiOutlineCaretUp className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
