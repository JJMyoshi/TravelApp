import React from 'react';
import Modal from 'react-modal';

const LogOutModal = ({ isOpen, onClose, onConfirm }) => {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '300px',
      height: '200px',
      backgroundColor: 'white', // Light gray background
      color: 'black',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontSize: '30px'
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '20px',
    },
    confirmButton: {
      margin: '10px 0',
      padding: '10px',
      backgroundColor: 'green', // Blue
      color: '#fff', // White
      border: 'none',
      fontSize: '20px',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    cancelButton: {
      margin: '10px 0',
      padding: '10px',
      backgroundColor: '#6c757d', // Gray
      color: '#fff', // White
      fontSize: '20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Log Out Modal"
      style={customStyles}
    >
      <h2>LOG OUT?</h2>
      <div style={customStyles.buttonContainer}>
        <button style={customStyles.confirmButton} onClick={onConfirm}>
          CONFIRM
        </button>
        <button style={customStyles.cancelButton} onClick={onClose}>
          CANCEL
        </button>
      </div>
    </Modal>
  );
};

export default LogOutModal;
