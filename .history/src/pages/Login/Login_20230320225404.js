import React from 'react';

function LoginForm() {
  const handleFacebookLogin = () => {
    // Redirect the user to the Facebook authentication page
    window.location.href = "https://www.facebook.com/v12.0/dialog/oauth?client_id=YOUR_APP_ID&redirect_uri=YOUR_REDIRECT_URI&scope=email";
  };

  const handleGoogleLogin = () => {
    // Redirect the user to the Google authentication page
    window.location.href = "https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=email";
  };

  return (
    <div className="login-form">
      <form>
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
