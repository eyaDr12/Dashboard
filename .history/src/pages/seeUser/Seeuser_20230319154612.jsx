import {
    AiOutlineCalendar,
    AiOutlineAim,
    AiOutlineMail,
    AiOutlineUser,
    AiOutlinePhone,
   
  } from "react-icons/ai";
  
  
  export default function User() {
    return (
<div className="userShow">
    <img r
    <div className="userShowTopTitle">
      <span className="userShowUsername">Anna Becker</span>
  </div>
  <div className="userShowBottom">
    <span className="userShowTitle">Account Details</span>
   
    
    <span className="userShowTitle">Contact Details</span>
    <div className="userShowInfo">
      <AiOutlinePhone className="userShowIcon" />
      <span className="userShowInfoTitle">+1 123 456 67</span>
    </div>
    <div className="userShowInfo">
      <AiOutlineMail className="userShowIcon" />
      <span className="userShowInfoTitle">annabeck99@gmail.com</span>
    </div>
    <div className="userShowInfo">
      <AiOutlineAim className="userShowIcon" />
      <span className="userShowInfoTitle">New York | USA</span>
    </div>
  </div>
</div>)}
