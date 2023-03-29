import "./featuredInfo.css";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import {FcSalesPerformance}from "react-icons/fc";
import {FcConferenceCall}from "react-icons/fc";
import {FcReadingEbook}from "react-icons/fc";
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import DescriptionIcon from '@mui/icons-material/Description';
export default function FeaturedInfo() {
  return (
    <div className="featured">
    
      <div className="featuredItem1">
      <div className="icones">
        <PeopleAltRoundedIcon style={{fontSize:'30px', color:'#3bb300'}}/>
          </div><br/>
   <span className="featuredMoney">50</span>

        <div className="featuredMoneyContainer">
        <span className="featuredTitle">New Client</span>
          <span className="featuredMoneyRate">
            -11.4 <AiOutlineCaretDown  className="featuredIcon negative"/>
          </span>
        </div>
        
      
      </div>
      <div className="featuredItem2">
      <div className="icones">
          <TimelineRoundedIcon style={{fontSize:'35px', color:'#e6e600',marginLeft:'-5px'}}/>
          </div>
         
          <br/>
        
          <span className="featuredMoney">800 DT</span>

        <div className="featuredMoneyContainer">
        <span className="featuredTitle">Sales</span>
          <span className="featuredMoneyRate">
            -1.4 <AiOutlineCaretDown className="featuredIcon negative"/>
          </span>
          
        
      
      </div>
      </div>
      <div className="featuredItem3">
      <div className="icones">
          <FcReadingEbook/>
          </div>
          <br/>
          <span className="featuredMoney">60</span>

        <div className="featuredMoneyContainer">
        <span className="featuredTitle" >Orders</span>

          <span className="featuredMoneyRate">
            +2.4 <AiOutlineCaretUp className="featuredIcon"/>
          </span>
       
       
      </div>
      </div>
    </div>
  );
}
