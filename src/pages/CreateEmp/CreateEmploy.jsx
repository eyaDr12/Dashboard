import edit from '../../Assets/edit.avif'
import { useState } from "react";
import "./CreateEmploy.css";

export default function CreateUser() {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
            <h1 >CreateEmploy </h1><br/><br/>
   <div style={{display:"flex" ,marginLeft:"16px",marginRight:"10px",marginBottom:"50px"}}>
    <form onSubmit={handleSubmit} className="edit-form">
   
   
      

      <div style={{display:'flex' ,gap:'3.3rem'}}>
        <div className="form-groupemp">
         <input type="text" id="FirstName" placeholder=" First Name" value={FirstName} onChange={(e) => setFirstName(e.target.value)} required className="form-control" style={{width:'300px'}} />
       </div>
       <div className="form-groupemp">
         <input type="text" id="LastName" placeholder="Last Name" value={LastName} onChange={(e) => setLastName(e.target.value)} required className="form-control" style={{width:'300px'}} />
       </div>
       </div><br/>
    <div className="form-groupemp">
    
    <input type="email" id="email" placeholder="Exemple@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="form-control" />
  </div><br/>
    <div className="form-groupemp">
    <input type="text" id="phone" placeholder="(+216) ..." value={phone} onChange={(e) => setPhone(e.target.value)} required className="form-control" />
  </div><br/>
  <br/>
  
  <br/>
        <button type="button"  className="edit_btn">
          Create
        </button>
   
      </form>


      <div className="edit_img">
      <img src={edit} alt=''/>
    </div>
    </div>
      </div>
  );
}
