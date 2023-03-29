import { useState } from "react";
import "./newUser.css";
import create from '../../logo/create.jpg'

export default function NewUser() {
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
   <h1 className="createUser_title">Create User </h1><br/><br/>
 
   


    <form onSubmit={handleSubmit} className="createUser-form">
    <div className="create_img">
      <img src={create} alt='' />
    </div>
    <div  style={{marginLeft:"50px"}}>
   

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
        <button type="button"  className="create_btn">
          Create
        </button>
        </div>
      </form>


      
    </div>
      
  );
}
