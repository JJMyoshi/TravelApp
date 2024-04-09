import React, { useState } from 'react';
import "./page_Account.css"; // Import your CSS file for styling

const ForgotPassword = ({ onCancel, onResetPassword }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = () => {
    // Reset error message
    setError('');

    // Validate email
    if (!email) {
      setError('Please enter your email');
      return;
    }

    // Perform logic to reset password here (e.g., send reset link to email)
    // For simplicity, let's assume the reset password succeeds if email is provided
    onResetPassword(email); // Call the onResetPassword function passed as a prop
  };
  

  return (
    <div className="forgot-password-container">
      <h1 className="forgot-password-header">Forgot Password</h1>
      <p className="forgot-password-description">Enter your email to reset your password:</p>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="forgot-password-email"
      />
      {error && <p className="forgot-password-error">{error}</p>}
      <div className="forgot-password-button-container">
        <button className="forgot-password-button" onClick={handleResetPassword}>Reset Password</button>
        <button className="forgot-password-button" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default ForgotPassword;
