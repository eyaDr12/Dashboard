import "./featuredInfo.css";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import {FcSalesPerformance}from "react-icons/fc";
import {FcConferenceCall}from "react-icons/fc";
import {FcReadingEbook}from "react-icons/fc";
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
export default function FeaturedInfo() {
  return (
    <div className="featured">
    
      <div className="featuredItem1">
      <div className="icones">
        <PeopleAltRoundedIcon style={{fontSize:'40px', color:'#3bb300'}}/>
          </div>
          <div style={{marginLeft:'20px'}}>
        <span className="featuredTitle">Users</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">50</span>
          <span className="featuredMoneyRate">
            -11.4 <AiOutlineCaretDown  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      </div>
      <div className="featuredItem2">
      <div className="icones">
          <TimelineRoundedIcon style={{fontSize:'45px', color:'#e6e600',marginLeft:'-5px'}}/>
          </div>
          <div style={{marginLeft:'20px'}}>
        <span className="featuredTitle">Sales</span>
        
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">800 DT</span>
          <span className="featuredMoneyRate">
            -1.4 <AiOutlineCaretDown className="featuredIcon negative"/>
          </span>
          
        </div>
      
      </div>
      </div>
      <div className="featuredItem">
      <div className="icones">
          <FcReadingEbook/>
          </div>
          <div>
        <span className="featuredTitle" >Orders</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">60</span>
          <span className="featuredMoneyRate">
            +2.4 <AiOutlineCaretUp className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      </div>
    </div>
  );
}
