import React, { useState } from 'react';
import Footer_Button from './Button';
import '../App.css'; // Import your CSS file for styling
import HomeLogo from '../assets/Footer_HomeLogo.png';
import CalendarLogo from '../assets/Footer_CalendarLogo.png';
import EventsLogo from '../assets/Footer_EventsLogo.png';
import AccountLogo from '../assets/Footer_AccountLogo.png';

const Screen_Footer = ({ onHomeClick, onEventsClick, onCalendarClick, onAccountClick }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    switch (buttonName) {
      case 'HOME':
        onHomeClick();
        break;
      case 'EVENTS':
        onEventsClick();
        break;
      case 'CALENDAR':
        onCalendarClick();
        break;
      case 'ACCOUNT':
        onAccountClick();
        break;
      default:
        break;
    }
  };

  return (
    <footer className='footer-button'>

      <button onClick={() => handleButtonClick('HOME')} className={activeButton === 'HOME' ? "footer-button-with-image active" : "footer-button-with-image"}>
        <span>HOME</span>
        <img src={HomeLogo} style={{ width: '30px', height: 'auto' }} alt="Home" />
      </button>

      <button onClick={() => handleButtonClick('EVENTS')} className={activeButton === 'EVENTS' ? "footer-button-with-image active" : "footer-button-with-image"}>
        <span>EVENTS</span>
        <img src={CalendarLogo} style={{ width: '28px', height: 'auto' }} alt="Events" />
      </button>

      <button onClick={() => handleButtonClick('CALENDAR')} className={activeButton === 'CALENDAR' ? "footer-button-with-image active" : "footer-button-with-image"}>
        <span>LANDMARKS</span>
        <img src={EventsLogo} style={{ width: '45px', height: 'auto' }} alt="Calendar" />
      </button>

      <button onClick={() => handleButtonClick('ACCOUNT')} className={activeButton === 'ACCOUNT' ? "footer-button-with-image active" : "footer-button-with-image"}>
        <span>ACCOUNT</span>
        <img src={AccountLogo} style={{ width: '30px', height: 'auto' }} alt="Account" />
      </button>

    </footer>
  );
};

export default Screen_Footer;
