import React, { useState } from 'react';
import whereLogo from '../assets/WhereLogoGreen.png';
import "./page_Account.css";

const Login = ({ onLogin, onSignUp, onForgotPassword }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Initialize error as null

  const handleLogin = () => {
    // Reset error message
    setError(null);

    // Check for empty fields
    if (!username || !password) {
      setError('Please enter both email and password');
      return;
    }

    // Check for invalid credentials
    if (
        username !== 'john.smith123@gmail.com' ||
        (password !== '$Password123' && password !== '12345678') // Update the condition to check for either of the two valid passwords
      ) {
        setError('Incorrect email or password');
        return;
      }

    // Perform authentication logic here (e.g., call an API)
    // For simplicity, let's assume authentication succeeds if username and password are not empty
    onLogin(); // Call the onLogin function passed as a prop
  };

  return (
    <div className="login-container">
      <div className="header-container">
        <h1 className="header-title">Where Calgary</h1>
      </div>
      <div className="login-field-logo">
        <img src={whereLogo} alt="whereLogo" className="whereLogo" style={{ width: '100px', height: 'auto' }} />
      </div>
      {/* Render error message container with fixed height */}
      <div className="error-message-container">
        {error && (
          <div className="login-field-error">
            <div className="error-message">{error}</div>
          </div>
        )}
      </div>
      <div className="login-field-email">
        <input
          type="text"
          className="emailField"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="login-field-password">
        <input
          type="password"
          className="passwordField"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="login-field-forgotPassword">
        {/* Update the link to point to the Forgot Password route */}
        <a href="#" className="forgot-password-link" onClick={onForgotPassword}>
          Forgot Password?
        </a>
      </div>
      <div className="login-field-loginbutton">
        <button className="login-button" onClick={handleLogin}>Login</button>
      </div>
      <div className="login-field-signUp">
        <div className="sign-up-text">Don't have an account?</div>
        <button className="signup-button" onClick={onSignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default Login;
