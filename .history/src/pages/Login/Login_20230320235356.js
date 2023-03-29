import React from 'react';
import './Login.css'

function Login() {
  const handleFacebookLogin = () => {
    const appId = 'your_facebook_app_id_here';
    const redirectUri = encodeURIComponent('your_redirect_uri_here');
    const url = `https://www.facebook.com/v12.0/dialog/oauth?client_id=${appId}&redirect_uri=${redirectUri}&response_type=token`;
    window.location.href = url;
  };

  const handleGoogleLogin = () => {
    const clientId = 'your_google_client_id_here';
    const redirectUri = encodeURIComponent('your_redirect_uri_here');
    const scope = encodeURIComponent('https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email');
    const url = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scope}`;
    window.location.href = url;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission and authentication here
  };

  return (
    <div className="login-form">
      <form onSubmit={handleFormSubmit}>
        <input type="email" placeholder="Email"  className='input_lo'/>
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <div className="social-login">
        <button className="facebook-btn" onClick={handleFacebookLogin}>Login with Facebook</button>
        <button className="google-btn" onClick={handleGoogleLogin}>Login with Google</button>
      </div>
    </div>
  );
}

export default Login;
