import { useState } from "react";
import whereLogo from '../assets/WhereLogoGreen.png';
import weatherImage from '../assets/WeatherPic.png';
import backgroundImage from '../assets/CalgaryBackground.png';
import './page_Home.css'; // Import the CSS file

export default function page_Home() {
    const containerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', // Adjust as needed
        backgroundPosition: 'center', // Adjust as needed
        position: 'relative', // Required for z-index to work
        height: '650px'
    };

    return (
         <div className="helpPage-container" style = {containerStyle}>
            <div className="logo-field">
                <img src={whereLogo} alt="whereLogo" className="whereLogo" />
            </div>
            <div className="weather-image-field">
                <img src={weatherImage} alt="weatherImage" className="weatherImage" />
            </div>
            <div className="weather-button-field">
                <button>
                    WeatherNetwork.ca
                </button>
            </div>
            <div className="help-field">
                <button>
                    Help
                </button>
            </div>
        </div>
    );
}
