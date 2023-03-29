import { useState } from "react";
import "./EditEmp.css";
import Seeemp from '../../components/seeEmp/Seeemp'
export default function EditUser() {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
   <h1 >Edit User </h1><br/><br/>
 
   


    <form onSubmit={handleSubmit} className="createUser-form">
    <Seeemp/>
    <div  style={{marginLeft:"50px"}}>
   

      <div style={{display:'flex' ,gap:'3.3rem'}}>
        <div className="form-group">
         <input type="text" id="FirstName" placeholder=" First Name" value={FirstName} onChange={(e) => setFirstName(e.target.value)} required className="form-control1" style={{width:'300px'}} />
       </div>
       <div className="form-group">
         <input type="text" id="LastName" placeholder="Last Name" value={LastName} onChange={(e) => setLastName(e.target.value)} required className="form-control1" style={{width:'300px'}} />
       </div>
       </div><br/>
    <div className="form-group">
    
    <input type="email" id="email" placeholder="Exemple@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="form-control1" />
  </div><br/>
    <div className="form-group">
    <input type="text" id="phone" placeholder="(+216) ..." value={phone} onChange={(e) => setPhone(e.target.value)} required className="form-control1" />
  </div><br/>
 
    
  <br/>
        <button type="button"  className="create_btn">
          Update
        </button>
        </div>
      </form>


      
    </div>
      
  );
}
