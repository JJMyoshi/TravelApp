import React from 'react';
import './addYYCEvent.css';
export default function addYYCEvent() {
    return (
        <div className="container">
            <h1>Add Event</h1>
            <input type="text" placeholder="Event Title" value="Calgary Tower Tour" readOnly />
            <input type="text" placeholder="Address" value="101 9 Ave SW, Calgary, AB T2P 1J9" readOnly />
            <div className="toggle-switch">
                <label className="toggle-label">All-Day</label>
                <input type="checkbox" />
            </div>
            <div className="time-container">
                <p className="label">Start Time: 02/19/2024 10:30 AM</p>
            </div>
            <div className="end-container">
                <p className="label">End Time: 02/19/2024 11:30 AM</p>
            </div>
            <div className="description-outside">
                <label className="description-label">Description:</label>
            </div>
            <textarea placeholder="Description" readonly="readOnly">Come see Calgary from the top of the Calgary Tower! </textarea>
            <div className="notes-outside">
                <label className="notes-label">Notes:</label>
            </div>
            <textarea placeholder="Notes">Enter your notes here...</textarea>
            <div className="button-container">
                <button className="button button-primary">Add Event</button>
                <button className="button button-secondary">Cancel</button>
            </div>
        </div>
    )
}