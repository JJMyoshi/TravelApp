// Main.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/page_Home';
import Events from '../pages/page_Events';
import Calendar from '../pages/page_Calendar';
import Account from '../pages/page_Account'; // Updated import
import '../App.css'; // Import your CSS file for styling

function Main({ setPageTitle }) {
  return (
    <div className="screen-main">
      <Routes>
        <Route path="/" element={<Home setPageTitle={setPageTitle} />} />
        <Route path="/events" element={<Events setPageTitle={setPageTitle} />} />
        <Route path="/calendar" element={<Calendar setPageTitle={setPageTitle} />} />
        <Route path="/account" element={<Account setPageTitle={setPageTitle} />} /> {/* Updated route */}
      </Routes>
    </div>
  );
}

export default Main;