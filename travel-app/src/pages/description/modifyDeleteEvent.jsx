import React from 'react';
import './modifyDeleteEvent.css';

function ModifyDeleteEvent() {
  return (
    <div className="event-detail-form">
      <h1>Modify/Delete</h1>
      <div className="event-detail-header">
        <input type="text" className="event-input" placeholder="Calgary Tower Tour" />
        <input type="text" className="event-input" placeholder="101 9 Ave SW, Calgary, AB T2P 1J9" />
      </div>
      <div className="event-detail-toggle">
        <label className="event-label">
          <span className="event-title">All-Day:</span>
          <input type="checkbox" className="event-checkbox"/>
        </label>
      </div>
      <div className="event-detail-timing">
        <div className="event-timing-row">
            <label className="event-label-starts">
                <span className="event-title">Starts:</span>
            </label>
            <input type="text" className="event-input" placeholder="02/19/2024 10:30 AM" />
        </div>
        <div className="event-timing-row">
            <label className="event-label-ends">
                <span className="event-title">Ends:</span>
            </label>
            <input type="text" className="event-input" placeholder="02/19/2024 11:30 AM" />
        </div>
      </div>

      <div className="event-detail-description">
        <label className="event-label">
          <span className="event-title">Description:</span>
          <textarea className="event-textarea" placeholder="Enter your notes here..."></textarea>
        </label>
      </div>
      <div className="event-detail-notes">
        <label className="event-label">
          <span className="event-title">Notes:</span>
          <textarea className="event-textarea" placeholder="Enter your notes here..."></textarea>
        </label>
      </div>
      <div className="event-detail-actions">
        <div className="event-actions-row">
            <button className="save">Save Changes</button>
            <button className="cancel">Cancel</button>
        </div>
        <button className="delete">Delete Event</button>
       </div>
    </div>
  );
}

export default ModifyDeleteEvent;
