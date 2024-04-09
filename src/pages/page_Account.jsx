import React, { useState } from 'react';
import './page_Account.css'; // Import your CSS file for styling

const Page_Account = ({ onLogout, onDelete }) => {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isLogOutModalOpen, setLogOutModalOpen] = useState(false);
  const [isChangePasswordModalOpen, setChangePasswordModalOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState('');

  const clearFields = () => {
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
    setError('');
  };

  const openDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const confirmDelete = () => {
    console.log('Account deleted!');
    closeDeleteModal();
    onDelete();
  };

  const openLogOutModal = () => {
    setLogOutModalOpen(true);
  };

  const closeLogOutModal = () => {
    setLogOutModalOpen(false);
  };

  const confirmLogOut = () => {
    console.log('User logged out!');
    closeLogOutModal();
    onLogout(); // Call the onLogout function passed as a prop
  };

  const openChangePasswordModal = () => {
    setChangePasswordModalOpen(true);
    clearFields();
  };

  const closeChangePasswordModal = () => {
    setChangePasswordModalOpen(false);
    setError(''); // Reset error message when closing modal
  };

  const validatePassword = () => {
    if (currentPassword === '' || newPassword === '' || confirmNewPassword === '') {
      setError('One or more fields are empty.');
      return false;
    }
    if (currentPassword !== '$Password123') {
        setError('Incorrect current password.');
        return false;
    }
    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters.');
      return false;
    }
    if (newPassword === currentPassword) {
      setError('New password must be different.');
      return false;
    }
    if (newPassword !== confirmNewPassword) {
      setError('Passwords do not match.');
      return false;
    }

    return true;
  };

  const confirmChangePassword = () => {
    if (validatePassword()) {
      console.log('Password changed!');
      closeChangePasswordModal();
    }
  };

  return (
    <div>
      <h1 className="account-header">Account Settings</h1>

      <div className="user-info">
        <h2>Personal Information</h2>
        <p><b>First Name:</b> John</p>
        <p><b>Last Name:</b> Smith</p>
        <p><b>Email:</b> john.smith123@gmail.com</p>
      </div>

      <div className="accountOptions-container">
        <div className="accountOptions-field-changePassword">
          <button onClick={openChangePasswordModal}>
            Change Password
          </button>
        </div>

        <div className="accountOptions-field-deleteAccount">
          <button onClick={openDeleteModal}>
            Delete Account
          </button>
        </div>

        <div className="accountOptions-field-logOut">
          <button onClick={openLogOutModal}>
            Log Out
          </button>
        </div>
      </div>

      {isChangePasswordModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Change Password</h2>
            {error && <p className="error-message">{error}</p>}
            <p>Fill out the following fields:</p>
            <input type="password" placeholder="Current Password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
            <input type="password" placeholder="New Password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
            <input type="password" placeholder="Confirm New Password" value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)} />
            <div className="button-container">
              <button className="button-first" onClick={confirmChangePassword}>Change Password</button>
              <button className="button-second" onClick={closeChangePasswordModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Delete Account</h2>
            <p>Are you sure you want to delete your account?</p>
            <div className="button-container">
              <button className="button-first" onClick={confirmDelete}>Yes, delete my account</button>
              <button className="button-second" onClick={closeDeleteModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {isLogOutModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Log Out</h2>
            <p>Are you sure you want to log out?</p>
            <div className="button-container">
              <button className="button-first" onClick={confirmLogOut}>Yes, log me out</button>
              <button className="button-second" onClick={closeLogOutModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Page_Account;
