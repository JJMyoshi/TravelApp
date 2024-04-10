import React from 'react';
import './addCustomEvent.css';

function AddCustomEvent() {
    return (
      <div className="addEvent-container">
        <h1 className="addEvent-title">Custom Event</h1>
        <div className="input-container">
          <h2 className="addEvent-label">Title:</h2>
          <input type="text" className="addEvent-input" placeholder="Title" />
        </div>
        <div className="input-container">
          <h2 className="addEvent-label">Location:</h2>
          <input type="text" className="addEvent-input" placeholder="Location" />
        </div>
        <div className="input-container">
          <h2 className="addEvent-label">Time:</h2>
          <input type="text" className="addEvent-input" placeholder="Time" />
        </div>
        <div className="input-container">
          <h2 className="addEvent-label">Description:</h2>
          <textarea className="addEvent-textarea" placeholder="Description"></textarea>
        </div>
        <div className="input-container">
          <h2 className="addEvent-label">Notes:</h2>
          <textarea className="addEvent-textarea" placeholder="Notes"></textarea>
        </div>
        <div className="input-container">
          <h2 className="addEvent-label">Tags:</h2>
          <input type="text" className="addEvent-input" placeholder="Tags" />
        </div>
        <button className="addEvent-button">Add Custom Event</button>
      </div>
    );
  }
  
  export default AddCustomEvent;
  