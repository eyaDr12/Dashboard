
import { useState } from "react";
import "./user.css";

export default function User() {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [State, setState] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [Zip, setZip] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
            <h1 className="edit_title">Edit User </h1><br/><br/>
   <div style={{display:"flex"}}>
    <form onSubmit={handleSubmit} className="edit-form">
   
   
      

      <div style={{display:'flex' ,gap:'3.3rem'}}>
        <div className="form-group">
         <input type="text" id="FirstName" placeholder=" First Name" value={FirstName} onChange={(e) => setFirstName(e.target.value)} required className="form-control" style={{width:'300px'}} />
       </div>
       <div className="form-group">
         <input type="text" id="LastName" placeholder="Last Name" value={LastName} onChange={(e) => setLastName(e.target.value)} required className="form-control" style={{width:'300px'}} />
       </div>
       </div><br/>
    <div className="form-group">
    
    <input type="email" id="email" placeholder="Exemple@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="form-control" />
  </div><br/>
    <div className="form-group">
    <input type="text" id="phone" placeholder="(+216) ..." value={phone} onChange={(e) => setPhone(e.target.value)} required className="form-control" />
  </div><br/>
  <div className="form-group">
    <input type="text" id="State" placeholder="State" value={State} onChange={(e) => setState(e.target.value)} required className="form-control" />
  </div><br/>
  <div style={{display:'flex' ,gap:'3.3rem'}}>
  <div className="form-group">
    <input type="text" id="city" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} required className="form-control" style={{width:'300px'}}/>
  </div>
  <div className="form-group">
    <input type="text" id="Zip" placeholder="ZIP code" value={Zip} onChange={(e) => setZip(e.target.value)} required className="form-control" style={{width:'300px'}} />
  </div>
  </div><br/>
  <div className="form-group">
    <input type="text" id="adress" placeholder="home address" value={adress} onChange={(e) => setAdress(e.target.value)} required className="form-control" />
  </div>
  
    
  <br/>
        <button type="button"  className="edit_btn">
          Update
        </button>
   
      </form>


      <div className="edit_img">
      <img src="https://img.freepik.com/free-vector/mobile-app-development-courses-abstract-concept-illustration_335657-4890.jpg?w=740&t=st=1679229755~exp=1679230355~hmac=6532142c1ac67b751bc2a59d7cd8585602661c31421c4e2e75e8f3b1d863a8bf"/>
    </div>
    </div>
      </div>
  );
}
