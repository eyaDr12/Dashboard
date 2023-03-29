import {
    AiOutlineCalendar,
    AiOutlineAim,
    AiOutlineMail,
    AiOutlineUser,
    AiOutlinePhone,
   
  } from "react-icons/ai";
  
  
  export default function User() {
    return (
<div className="userContainer">
<div className="userShow">
  <div className="userShowTop">
    <img
      src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt=""
      className="userShowImg"
    />
    <div className="userShowTopTitle">
      <span className="userShowUsername">Anna Becker</span>
    </div>
  </div>
  <div className="userShowBottom">
    <span className="userShowTitle">Account Details</span>
    <div className="userShowInfo">
      <AiOutlineUser className="userShowIcon" />
      <span className="userShowInfoTitle">annabeck99</span>
    </div>
    <div className="userShowInfo">
      <AiOutlineCalendar className="userShowIcon" />
      <span className="userShowInfoTitle">10.12.1999</span>
    </div>
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
</div></div>)}
