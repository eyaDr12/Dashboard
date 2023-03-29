import React from 'react';

function Login() {
  const handleFacebookLogin = () => {
    // Redirect the user to Facebook authentication page
    window.location.href = 'https://www.facebook.com/v12.0/dialog/oauth?client_id=<YOUR_APP_ID>&redirect_uri=<YOUR_REDIRECT_URI>&response_type=token';
  };

  const handleGoogleLogin = () => {
    // Redirect the user to Google authentication page
    window.location.href = 'https://accounts.google.com/o/oauth2/auth?client_id=<YOUR_CLIENT_ID>&redirect_uri=<YOUR_REDIRECT_URI>&response_type=token&scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission and authentication here
  };

  return (
    <div className="login-form">
      <form onSubmit={handleFormSubmit}>
        <input type="email" placeholder="Email" />
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

export default LoginForm;
