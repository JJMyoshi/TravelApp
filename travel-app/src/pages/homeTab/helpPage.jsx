import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import AccountLogo from '../../assets/AccountLogo.png';
import CalendarLogo from '../../assets/CalendarLogo.png';
import CustomerServiceLogo from '../../assets/CustomerServiceLogo.png';
import EventsLogo from '../../assets/EventsLogo.png';
import HomeLogo from '../../assets/HomeLogo.png';
import PrivacyPolicyLogo from '../../assets/PrivacyPolicyLogo.png';
import './homeTab.css';

export default function HelpPage() {
  const spaceBetweenStyle = {
    margin: '15px',
  };

  const containerStyle = {
    height: '560px', // Set a fixed height for the container
    overflowY: 'auto', // Enable vertical scrolling if the content overflows
    display: 'flex',
    flexDirection: 'column', // Arrange items vertically
    backgroundColor: 'white', // Set background color to white
  };

  const row2Style = {
    ...spaceBetweenStyle, // Apply the margin style
  };

  const row3Style = {
    // You can add styles specific to row3 if needed
  };

  return (
    <div className="helpPage-containerA" style={containerStyle}>

      <div className="contain-Description">
         <br></br>
         <h2>
          <p>WHERE CALGARY is your complete and up-to-guide on the best things happening in Calgary - all in the palm of your hand.</p>
          <br></br>
          <p>Whether you're a local or a visitor, let WHERE CALGARY be your go-to source for making the most of your time in this vibrant city. </p>
        </h2>
        <br></br>
      </div>

      <div className="contain-Home" style={spaceBetweenStyle}>
        <img src={HomeLogo} alt="HomeLogo" className="HomeLogo" 
            style={{ width: '25px', height: 'auto' }}
            />
        <h2> Home Screen </h2>
        Access up-to-date weather forecasts from WeatherNetwork and easily plan your day. Tap the weather icon for detailed forecasts and conditions. Need assistance? Find help instantly with the convenient help button."
      </div>

      <div className="contain-CalgaryGuide" style={spaceBetweenStyle}>
        <img src={EventsLogo} alt="EventsLogo" className="EventsLogo" 
            style={{ width: '25px', height: 'auto' }}
            />
        <h2> Find Events </h2>
        <p>
        Here "Explore the heart of Calgary, Alberta, right at your fingertips! Uncover 
        a treasure trove of information, ranging from the finest dining spots to 
        hidden gems for local shopping and engaging activities. Whether you're a food 
        enthusiast, a dedicated shopper, or an adventure seeker, our curated guide has
         got you covered.
         </p>
      </div>

      <div className="contain-Calendar" style={spaceBetweenStyle}>
      <img src={CalendarLogo} alt="CalendarLogo" className="CalendarLogo" 
            style={{ width: '25px', height: 'auto' }}
            />
        <h2> Calendar </h2>
      
        <p>Enhance your schedule with YYC Events by integrating them into your personalized
          calendar. Discover exciting local happenings and effortlessly manage your plans.
           To view and edit your events, simply tap the calendar button located on the 
           bottom navigation bar. Stay organized and never miss out on the vibrant events 
           around you. </p>

        
      </div>

      <div className="contain-Account" style={spaceBetweenStyle}>
      <img src={AccountLogo} alt="AccountLogo" className="AccountLogo" 
            style={{ width: '25px', height: 'auto' }}
            />
        <h2> Account </h2>
        Take control of your account with ease. Safeguard your privacy by logging out securely, fortify 
        your account with a password change, or make a decisive choice with the option to
         delete your account.
      </div>

      <div className="contain-CustomerService" style={spaceBetweenStyle}>
      <img src={CustomerServiceLogo} alt="CustomerServiceLogo" className="CustomerServiceLogo" 
            style={{ width: '25px', height: 'auto' }}
            />
        <h2> Customer Service </h2>
        <p>"Encountering issues or have questions? We're here to help! </p>
        <p>Reach out to our
        dedicated customer service team at 123-123-2345 or whereCalgary@gmail.com for prompt assistance. 
        </p>
        <p>Your solution is just a call away!</p>
      </div>

      <div className="contain-PrivacyPolicy" style={spaceBetweenStyle}>
      <img src={PrivacyPolicyLogo} alt="PrivacyPolicyLogo" className="PrivacyPolicyLogo" 
            style={{ width: '25px', height: 'auto' }}
            />
        <h2> Privacy Policy </h2>
        <p> 
        "Your privacy matters to us. Our Privacy Policy outlines how we collect, use,
         and protect your personal information. Rest assured, your data is handled 
         with the utmost care and transparency. For a detailed understanding of our 
         privacy practices, please visit https://wherecalgary.ca/privacy. 
         We prioritize the security of your information and are committed to 
         maintaining your trust. /</p>
      </div>

      <div className="contain-BuildVersion" style={spaceBetweenStyle}>
      <img src={CalendarLogo} alt="CalendarLogo" className="CalendarLogo" 
            style={{ width: '25px', height: 'auto' }}
            />
        <h2> Version </h2>
        <p style={{ display: 'block' }}>Build Version: 2.0</p>
        <p style={{ display: 'block' }}>App Version: 1.3.1</p>
        <p style={{ display: 'block' }}>Data Version: 1.2</p>
        <br></br>

      </div>
    </div>
  );
}
