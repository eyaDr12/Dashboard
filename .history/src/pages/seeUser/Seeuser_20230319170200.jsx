import {
    AiOutlineAim,
    AiOutlineMail,
    AiOutlinePhone,
   
  } from "react-icons/ai";
import {FaRegUserCircle}  from 'react-icons/fa'
  import './Seeuser.css'
  export default function User() {
    return (
      <div style={{height:'90vh'}}>
       
<div className="userShow">
<center>
    <FaRegUserCircle style={{fontSize:"35px",co}}/>
    </center>
    <div className="userShowTopTitle">
    <center>
      <span className="userShowUsername">Anna Becker</span>
      </center>
  </div><br/>
  
  <div className="userShowBottom">
  
    
    <span className="userShowTitle">Contact Details</span><br/><br/>
    <div className="userShowInfo">
      <AiOutlinePhone className="userShowIcon" />
      <span className="userShowInfoTitle">+216 123 456 67</span>
    </div>
    <div className="userShowInfo">
      <AiOutlineMail className="userShowIcon" />
      <span className="userShowInfoTitle">annabeck99@gmail.com</span>
    </div>
    <div className="userShowInfo">
      <AiOutlineAim className="userShowIcon" />
      <span className="userShowInfoTitle">Tunisia | Sousse Rue...</span>
    </div>
  </div>
</div>
</div>)}
