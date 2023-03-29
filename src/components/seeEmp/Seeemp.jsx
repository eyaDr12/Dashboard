import {
    AiOutlineMail,
    AiOutlinePhone,
   
  } from "react-icons/ai";
  import user from '../../Assets/user.jpg'
  import '../seeUser/Seeuser.css'
  export default function Seeuser() {
    return (
      <div style={{height:'90vh'}}>
       
<div className="userShow">
<center>
    <img src={user} alt=""/>
    </center>
    <div className="userShowTopTitle">
    <center>
      <span className="userShowUsername">Anas Becker</span>
      </center>
  </div><br/>
  
  <div className="userShowBottom">
  
    
    <span className="userShowTitle">Contact Details</span><br/>
    <div className="userShowInfo">
      <AiOutlinePhone className="userShowIcon" />
      <span className="userShowInfoTitle">+216 123 456 67</span>
    </div>
    <div className="userShowInfo">
      <AiOutlineMail className="userShowIcon" />
      <span className="userShowInfoTitle">annabeck99@gmail.com</span>
    </div>
    
  </div>
</div>
</div>)}
