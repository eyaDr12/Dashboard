import React, { useState } from "react";
import "./Login.css";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted!");
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2 className="h2log">Connexion</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Adresse e-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" onClick={()=>navigate('/Home')}>Se connecter</button>
        </form>
        <div className="alternative-actions">
          <a href="#">Mot de passe oublié ?</a>
          <Link to='/signup'>Créer un compte </Link> 
        </div>
      </div>
    </div>
  );
};

export default Login;