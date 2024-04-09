import React, { useState } from 'react';
import "./page_SignUp.css";

const SignUp = ({ onCreateAccount, onBack }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState(null);
  const [signupSuccess, setSignupSuccess] = useState(false); // State to track signup success
  const [showMessage, setShowMessage] = useState(false); // State to control visibility of message

  const hardcodedFirstName = 'John';
  const hardcodedLastName = 'Smith';
  const hardcodedEmail = 'john.smith123@gmail.com';
  const hardcodedPassword = '$Password123';

  const handleCreateAccount = () => {
    // Reset error message
    setError(null);

    // Check if entered values match hardcoded ones
    if (firstName !== hardcodedFirstName ||
        lastName !== hardcodedLastName ||
        email !== hardcodedEmail ||
        password1 !== hardcodedPassword ||
        password2 !== hardcodedPassword) {
      setError('One or more fields are empty');
      return;
    }

    // Perform account creation logic
    onCreateAccount({
      firstName,
      lastName,
      email,
      password: password1 // Assuming you only need one password field
    });

    // Optional: Clear form fields after successful submission
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword1('');
    setPassword2('');

    // Set signup success state to true
    setSignupSuccess(true);

    // Show success message for 5 seconds
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  };

  const handleBack = () => {
    onBack();
  }

  return (
    <div className="createAccount-container">
        <div className="header-container">
            <h1 className="header-title">Where Calgary</h1>
            <button className="back-button" onClick={handleBack}>Back</button>
        </div>
      <div className="sign-up-header">
        <h4>Sign Up</h4>
      </div>

      {/* Error message */}
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <div className="detail-headers">
        <p><span className="required">*</span> Enter Your First Name</p>
      </div>
      <div className="enterFirstName-box">
        <input
          type="text"
          className="first-name-textfield"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="detail-headers">
        <p><span className="required">*</span> Enter Your Last Name</p>
      </div>
      <div className="enterLastName-box">
        <input
          type="text"
          className="last-name-textfield"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className="detail-headers">
        <p><span className="required">*</span> Enter Your Email Address</p>
      </div>
      <div className="enter-new-email-field">
        <input
          type="text"
          className="newAccountEmailField"
          placeholder="Email (eg.johndoe@example.com)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="detail-headers">
        <p><span className="required">*</span> Enter Your Password</p>
      </div>
      <div className="enter-new-password-field">
        <input
          type="password"
          className="newAccountPassword1"
          placeholder="Password (at least 8 characters long)"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
        />
      </div>

      <div className="detail-headers">
        <p><span className="required">*</span> Re-enter Your Password</p>
      </div>
      <div className="confirm-new-password-field">
        <input
          type="password"
          className="newAccountPassword2"
          placeholder="Confirm Password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
      </div>

      <div className="container">
        <div className="captcha-field">
          <input type="checkbox" id="robotCheckbox" />
          <label htmlFor="robotCheckbox">I am not a robot</label>
        </div>
      </div>

      <div className="create-account-field">
        <button onClick={handleCreateAccount}>Create Account</button>

      </div>

    </div>
  );
};

export default SignUp;