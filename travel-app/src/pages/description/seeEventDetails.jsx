import React from 'react';
import './seeEventDetails.css';

function SeeEventDetails() {
  return (
    <div className="event-card">
      <div className="event-field">
        <label className="event-label">Title:</label>
        <input className="event-input" type="text" placeholder="Calgary Tower Tour" />
      </div>
      <div className="event-field">
        <label className="event-label">Location:</label>
        <input className="event-input" type="text" placeholder="101 9 Ave SW, Calgary, AB T2P 1J9" />
      </div>
      <div className="event-field">
        <label className="event-label">Start Time:</label>
        <input className="event-input-small" type="date" />
        <input className="event-input-small" type="time" />
      </div>
      <div className="event-field">
        <label className="event-label">End Time:</label>
        <input className="event-input-small" type="date" />
        <input className="event-input-small" type="time" />
      </div>
      <div className="event-field">
        <label className="event-label">Description:</label>
        <textarea className="event-textarea">The Calgary Tower is a free-standing observation tower in Downtown Calgary, Alberta, Canada. It is located at 101 9th Avenue SW, Calgary, AB T2P 1J9</textarea>
      </div>
      <div className="event-field">
        <label className="event-label">Notes:</label>
        <textarea className="event-textarea">#Music #Sports #Downtown #AllAges #All #Wheelchair #ClosedCaption #ASL</textarea>
      </div>
      {/* Buttons */}
      <div className="event-actions">
        {/* Your buttons here */}
        <div className="event-actions">
            <button className="event-add-calendar">Add to Event</button>
        </div>
      </div>
    </div>
  );
}

export default SeeEventDetails;
