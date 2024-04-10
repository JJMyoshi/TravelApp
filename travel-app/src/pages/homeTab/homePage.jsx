import {useState} from "react";
import whereLogo from '../../assets/WhereLogoGreen.png';
import weatherImage from '../../assets/WeatherPic.png';
import backgroundImage from '../../assets/CalgaryBackground.png';

export default function homePage() {
    const containerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', // Adjust as needed
        backgroundPosition: 'center', // Adjust as needed
        position: 'relative', // Required for z-index to work
        height: '560px'
    };
    
    const helpButtonStyle = {
        width: '200px',
        height: '50px',
        fontSize: '20px',
    };

    const spaceBetweenStyle = {
        margin: '15px', // Adjust the margin as needed
      };

    return (
    <div class="helpPage-container" style = {containerStyle}> 

        <div class="logo-field">
            <img src={whereLogo} alt="whereLogo" className="whereLogo" 
            style={{ width: '100px', height: 'auto' }}
            />
        </div>
        <div class="weather-image-field">
            <img src={weatherImage} alt="weatherImage" className="weatherImage" 
            style={{ width: '350px', height: 'auto' }}
            />
        </div>
        <div class="weather-button-field">
            <button>
                WeatherNetwork.ca
            </button>
        </div>
        <div class="help-field" style={spaceBetweenStyle}>
            <button style = {helpButtonStyle}>
                Help
            </button>
        </div>
    </div>
    );
}