import {
    AiOutlineCalendar,
    AiOutlineAim,
    AiOutlineMail,
    AiOutlineUser,
    AiOutlinePhone,
   
  } from "react-icons/ai";
  import user from '.'
  
  export default function User() {
    return (
<div className="userShow">
    <img src="" alt=""/>
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
