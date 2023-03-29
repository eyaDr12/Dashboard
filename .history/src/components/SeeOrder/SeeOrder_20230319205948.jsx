import {
    AiOutlineAim,
    AiOutlineMail,
    AiOutlinePhone,
   
  } from "react-icons/ai";
  import './SeeOrder.css'
  export default function SeeOrder() {
    return (
      <div style={{height:'90vh'}}>
       
<div className="userShow">

    <div className="userShowTopTitle">
    <center>
   
      <span className="userShowUsername">Syrup of Dattes</span>
      </center>
  </div><br/>
  
  <div className="userShowBottom">
  
    
    <span className="userShowTitle">Order Details</span><br/>
    <div className="userShowInfo">
      <AiOutlinePhone className="userShowIcon" />
      <span className="userShowInfoTitle">user: +216 123 456 67</span>
    </div>
    <div className="userShowInfo">
      <AiOutlineMail className="userShowIcon" />
      <span className="userShowInfoTitle">Email:annabeck99@gmail.com</span>
    </div>
    <div className="userShowInfo">
      <AiOutlineAim className="userShowIcon" />
      <span className="userShowInfoTitle">Address:Tunisia | Sousse Rue...</span>
    </div>
    <div className="userShowInfo">
    
      <span className="userShowInfoTitle">Quantity:2</span>
    </div>
  </div>
</div>
</div>)}
