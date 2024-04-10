import React from 'react';
import './seeCalendarDetails.css';

export default function SeeCalendarDetails() {
  return (
    <div className="calendarDetails-container">
      <h1>Event Details</h1>
      <div className="detail-pair">
        <h2>Title: </h2>
        <p>Calgary Tower Tour</p>
      </div>
      <div className="detail-pair">
        <h2>Location:</h2>
        <p>101 9 Ave SW, Calgary, AB T2P 1J9</p>
      </div>
      <div className="detail-pair">
        <h2>Time:</h2>
        <p>10:30 AM – 11:30 AM</p>
      </div>
      <div className="detail-pair">
        <h2>Description:</h2>
        <p>Enjoy a guided tour of the iconic Calgary Tower, where you'll learn about the city's history and landmarks from a breathtaking vantage point.</p>
      </div>
      <div className="detail-pair">
        <h2>Notes:</h2>
        <p>Please arrive 15 minutes early to ensure timely check-in. Don't forget your camera for stunning views!</p>
      </div>
      <div className="detail-pair">
        <h2>Tags:</h2>
        <p>#Music #Sports #Downtown #AllAges #All #Wheelchair #ClosedCaption #ASL</p>
      </div>
      <a href="#" className="button">Modify/Delete</a>
    </div>
  );
}
