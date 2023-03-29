import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FcGoogle}  from 'react-icons/fc';
import {BsFacebook}  from 'react-icons/bs';
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: gérer la soumission du formulaire
  };

  return (
  
    <div className="login-form-container">
      
      <form className="login-form" onSubmit={handleSubmit}>
      <h1 className="h3_login">Login</h1><br/><br/>
        <div className="form-group">
          <label htmlFor="email" >Email :</label><br/>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control4"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" >Password:</label><br/>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control4"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <span  className="span_login "> <Link to='/' style={{color:"#dcca87"}}>Forgot password?</Link></span><br/><br/>
        <button type="submit" className="login_btn">Login</button><br/><br/>
        <span style={{marginLeft:"6px"}}  className="span_login ">You don't have an account ? <Link to='/signup'style={{color:"#dcca87"}}>Create an account</Link></span>
        <div className='Hr_container'>
          <hr className="hr_login"/>
          <center>
        <p className='p_login'>OR</p>
        </center>
        <hr className="hr_login"/>
        
        </div>
      
        <div className="login_icons">
          <button  className="btn__icon"><FcGoogle className="google_icon" /> <span  style={{marginLeft:'4px'}}>Google</span></button>
          <button className="btn__icon"><BsFacebook className="facebook_icon" /><span  style={{marginLeft:'4px'}}>Facebook</span></button>
        </div>
        

      </form>
     
    </div>
   
  );
}

export default Login;
