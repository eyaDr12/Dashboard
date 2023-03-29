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
    <img src='https://i0.wp.com/izoguern.com/wp-content/uploads/2019/06/syrup-de-dattes.jpg?resize=768%2C768&ssl=1' alt=''/>
      <span className="userShowUsername">Syrup of Dattes</span>
      </center>
  </div><br/>
  
  <div className="userShowBottom">
  
    
    <span className="userShowTitle">Order Details</span><br/>
    <div className="userShowInfo">
      <AiOutlinePhone className="userShowIcon" />
      <span className="userShowInfoTitle">user+216 123 456 67</span>
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
