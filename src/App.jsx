import React, { useState } from 'react';
import Footer from './components/Screen_Footer';
import Header from './components/Screen_Header';
import Page_Login from './pages/page_Login';
import Page_SignUp from './pages/page_SignUp';
import Page_Home from './pages/page_Home';
import Page_Events from './pages/page_Events';
import Page_Calendar from './pages/page_Calendar';
import Page_Account from './pages/page_Account';
import Page_ForgotPassword from './pages/page_ForgotPassword'; // Import the Forgot Password page component
import MiniWeather from './assets/MiniWeather.png';
import whereLogo from './assets/WhereLogoGreen.png';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login'); // Start with login page

  const handlePageChange = (pageName) => {
    setCurrentPage(pageName.toLowerCase());
  };

  const handleLogin = () => {
    setCurrentPage('home'); // Redirect to home page after login
  };

  const handleSignUp = () => {
    setCurrentPage('signup'); // Redirect to signup page after sign-up
  };

  const handleForgotPassword = () => {
    setCurrentPage('forgot-password'); // Redirect to forgot password page
  };

  const handleLogout = () => {
    setCurrentPage('login'); // Redirect to login page after logout
  };

  const renderFooter = () => {
    if (currentPage === 'login' || currentPage === 'signup' || currentPage === 'forgot-password') {
      return null; // Don't render footer on login, signup, or forgot password pages
    }
    return (
      <div className='footer-container'>
        <Footer
          onHomeClick={() => handlePageChange('Home')}
          onEventsClick={() => handlePageChange('Events')}
          onCalendarClick={() => handlePageChange('Calendar')}
          onAccountClick={() => handlePageChange('Account')}
        />
      </div>
    );
  };

  return (
    <div className='outer-container'>
      <div className='mobile-container'>
        {/* Conditionally render header */}
        {currentPage !== 'login' && currentPage !== 'signup' && (
          <div className='header-container'>
            <div className="logo-field">
              <img src={whereLogo} alt="whereLogo" className="where-logo" style={{ width: '30px', height: 'auto', marginRight: '10px', marginBottom: '12px'}}/>
            </div>
            <Header pageTitle={'Where Calgary'}></Header>
            <div className="second-logo-field">
              <img src={MiniWeather} alt="miniWeather" className="mini-weather-logo" style={{ height: '40px', width: 'auto'}}/>
            </div>
          </div>
        )}

        <div className='body-container'>
          <main>
            {/* Render different pages based on currentPage */}
            {currentPage === 'login' && <Page_Login onLogin={handleLogin} onSignUp={handleSignUp} onForgotPassword={handleForgotPassword}/>}
            {currentPage === 'signup' && <Page_SignUp onCreateAccount={handleLogin} onBack={handleLogout}/>}
            {currentPage === 'home' && <Page_Home />}
            {currentPage === 'events' && <Page_Events />}
            {currentPage === 'calendar' && <Page_Calendar />}
            {currentPage === 'account' && <Page_Account onLogout={handleLogout} onDelete={handleLogout}/>}
            {currentPage === 'forgot-password' && <Page_ForgotPassword onResetPassword={handleLogout} onCancel={handleLogout} />}
          </main>
        </div>

        {/* Render footer */}
        {renderFooter()}
      </div>
    </div>
  );
};

export default App;
