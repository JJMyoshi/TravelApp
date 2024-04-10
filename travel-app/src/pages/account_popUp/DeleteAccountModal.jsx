import React from 'react';
import Modal from 'react-modal';

const DeleteAccountModal = ({ isOpen, onClose, onConfirm }) => {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '300px',
      height: '175px',
      backgroundColor: 'white', // Light gray background
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      color: 'black',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '20px',
    },
    confirmButton: {
      margin: '10px 0',
      padding: '10px',
      backgroundColor: 'red', // Blue
      color: '#fff', // White
      border: 'none',
      fontSize: '12px',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    cancelButton: {
      margin: '10px 0',
      padding: '10px',
      backgroundColor: 'black', // Gray
      color: '#fff', // White
      fontSize: '12px',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Delete Account Modal"
      style={customStyles}
    >
      <h2>ARE YOU SURE YOU WISH TO DELETE YOUR ACCOUNT?</h2>
      <div style={customStyles.buttonContainer}>
        <button style={customStyles.confirmButton} onClick={onConfirm}>
          DELETE
        </button>
        <button style={customStyles.cancelButton} onClick={onClose}>
          CANCEL
        </button>
      </div>
    </Modal>
  );
};

export default DeleteAccountModal;