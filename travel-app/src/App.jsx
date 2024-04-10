import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Containers
import OuterContainer from './components/OuterContainer';
import HeaderContainer from './components/innerContainer/HeaderContainer';
import BodyContainer from './components/innerContainer/BodyContainer';
import FooterContainer from './components/innerContainer/FooterContainer';

// Footer / Header Related Imports
import HeaderTitle from './components/innerContainer/HeaderTitle';

// Account
import AccountOptionsPages from './pages/account/accountOptionsPage';
import CreateAccount from './pages/account/createAccount';
import ChangePassword from './pages/account/changePassword';
import ForgotPassword from './pages/account/forgotPassword';
import LoginPage from './pages/account/loginPage';

// Calendar
import CalendarPage from './pages/calendar/calendarPage';

// Description
import AddCustomEvent from './pages/description/addCustomEvent';
import AddYYCEvent from './pages/description/addYYCEvent';
import ModifyDeleteEvent from './pages/description/modifyDeleteEvent';
import SeeCalendarDetails from './pages/description/seeCalendarDetails';
import SeeEventDetails from './pages/description/seeEventDetails';

// Events
import EventSearch from './pages/events/eventSearch';
import EventPage from './pages/events/eventPage';
import EventSort from './pages/events/eventSort';

// HomeTab
import HelpPage from './pages/homeTab/helpPage';
import HomePage from './pages/homeTab/homePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <OuterContainer>
          {/* The Mobile 9:16 Layout */}
          <HeaderContainer>
            {/* Top Header */}
            <HeaderTitle header_title={'Where Calgary'} />
          </HeaderContainer>

          <BodyContainer>
            {/* Body Container */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/account" element={<AccountOptionsPages />} />
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/change-password" element={<ChangePassword />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/add-custom-event" element={<AddCustomEvent />} />
              <Route path="/add-yyc-event" element={<AddYYCEvent />} />
              <Route path="/modify-delete-event" element={<ModifyDeleteEvent />} />
              <Route path="/see-calendar-details" element={<SeeCalendarDetails />} />
              <Route path="/see-event-details" element={<SeeEventDetails />} />
              <Route path="/event-search" element={<EventSearch />} />
              <Route path="/event-page" element={<EventPage />} />
              <Route path="/event-sort" element={<EventSort />} />
              <Route path="/help" element={<HelpPage />} />
            </Routes>
          </BodyContainer>

          <FooterContainer>
            {/* Bottom Footer */}
            <Link to="/">Home</Link>
            <Link to="/account">Account</Link>
            <Link to="/calendar">Calendar</Link>
            <Link to="/event-page">Events</Link>
            <Link to="/help">Help</Link>
          </FooterContainer>
        </OuterContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
