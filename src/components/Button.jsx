import React from 'react';

const Button = ({ label, onClick, imageSrc }) => {
  return (
    <button onClick={onClick}>
      {imageSrc && <img src={imageSrc} alt="Button Image" className="button-image" />} {/* Render the image if imageSrc prop is provided */}
      {label}
    </button>
  );
};

export default Button;
