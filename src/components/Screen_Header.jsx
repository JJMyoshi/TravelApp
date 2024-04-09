// Screen_Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import your CSS file for styling

function Screen_Header({ pageTitle }) {
  return (
    <div className="screen-header">
      <h1>{pageTitle}</h1>
    </div>
  );
}
export default Screen_Header;
