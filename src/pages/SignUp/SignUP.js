import React, { useState } from "react";
import './SignUp.css'


function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: gérer la soumission du formulaire
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}`);
  };

  return (
  
    <div className="Signup-form-container">
      
      <form className="signup-form" onSubmit={handleSubmit}>
      <h2 className="h3_signup">Sign Up</h2><br/><br/>
      <div className="form-group">
        <label htmlFor="name">Name :</label><br/>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="form-control" />
      </div>
        <div className="form-group">
          <label htmlFor="email" >Email :</label><br/>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" >Password :</label><br/>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
        <label htmlFor="confirm-password">Confirm Password :</label><br/>
        <input type="password" id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="form-control" />
      </div><br/>
       
        <button type="submit" className="sign_btn">Sign up</button>
        
     
      
     

      </form>
   
    </div>
   
  );
}

export default Login;
