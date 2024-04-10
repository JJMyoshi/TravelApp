import React from 'react';
import Modal from 'react-modal';

const UnmatchingPasswordModal = ({ isOpen, onClose }) => {
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
      backgroundColor: 'white', // Change color as needed
      color: 'black',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontSize: '17px', // Adjust the font size as needed
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '10px',
    },
    closeButton: {
      margin: '10px 0',
      padding: '10px',
      backgroundColor: 'black', // Gray
      color: '#fff', // White
      fontSize: 'px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Unmatching Password Modal"
      style={customStyles}
    >
      <h2>PASSWORDS DO NOT MATCH</h2>
      <div style={customStyles.buttonContainer}>
        <button style={customStyles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default UnmatchingPasswordModal;
