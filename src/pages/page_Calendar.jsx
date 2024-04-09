// pages/Page_Calendar.jsx
import React, { useState, useRef } from 'react';
import '../pages/page_Calendar.css'; // Import your CSS file for styling
import CalgaryMap from '../assets/CalgaryMap3.png';
import WhereLogo from '../assets/CurrentLocationRed.png';
import CalgaryAll from '../assets/CalgaryAll.png';
import CalgaryFiltered from '../assets/CalgaryFiltered2.png';
import CalgarySelected from '../assets/CalgarySelected.png';
import CalgaryDetails from '../assets/CalgaryDetails.png';
import MealIcon from '../assets/MealIcon.png';
import Location from '../assets/LocationPerson.png';


const Page_Calendar = () => {
  const [zoomLevel, setZoomLevel] = useState(2);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartY, setDragStartY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const mapRef = useRef(null);
  const [currentMap, setCurrentMap] = useState(CalgaryMap);
  const [isItem1Checked, setIsItem1Checked] = useState(false);

  const handleZoomIn = () => {
    setZoomLevel(prevZoomLevel => prevZoomLevel + 0.4);
  };

  const handleZoomOut = () => {
    setZoomLevel(prevZoomLevel => prevZoomLevel - 0.4);
  };

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setDragStartX(event.clientX - offsetX);
    setDragStartY(event.clientY - offsetY);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      setOffsetX(event.clientX - dragStartX);
      setOffsetY(event.clientY - dragStartY);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  const handleMouseWheel = (event) => {
    if (event.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  const handleResetZoom = () => {
    setZoomLevel(2);
    setOffsetX(0);
    setOffsetY(0);
  };


  const handleWhereLogoClick = () => {
    setCurrentMap(CalgaryAll);
  };

  const handleCheckboxChange = () => {
    if (!isItem1Checked) {
      setCurrentMap(CalgaryFiltered);
    } else {
      setCurrentMap(CalgaryAll);
    }
    setIsItem1Checked(!isItem1Checked);
  };



  const handleChangeImage = () => {
    setCurrentMap(CalgaryAll); // Change the map to CalgaryAll
  };

  const handleLocationButtonClick = (location) => {
    // Handle location button click to center and zoom in on the specified location
    // Adjust the offsetX and offsetY to center the map on the specified location
    switch (location) {
      case 'NE':
        const locX_NE = -65;
        const locY_NE = 135;
        setOffsetX(locX_NE);
        setOffsetY(locY_NE);
        setZoomLevel(3);
        break;
      case 'SE':
        const locX_SE = -60
        const locY_SE = -50
        setOffsetX(locX_SE);
        setOffsetY(locY_SE);
        setZoomLevel(2.5);
        break;
      case 'SW':
        const locX_SW = 45;
        const locY_SW = -50;
        setOffsetX(locX_SW);
        setOffsetY(locY_SW);
        setZoomLevel(2.5);
        break;
      case 'NW':
        const locX_NW = 45;
        const locY_NW = 135;
        setOffsetX(locX_NW);
        setOffsetY(locY_NW);
        setZoomLevel(3);
        break;
      case 'Downtown':
        const locX_Downtown = -20;
        const locY_Downtown = 50;
        setOffsetX(locX_Downtown);
        setOffsetY(locY_Downtown);
        setZoomLevel(7);
        break;
      case 'All':
        const locX_All = 0;
        const locY_All = 0;
        setOffsetX(locX_All);
        setOffsetY(locY_All);
        setZoomLevel(1.5);
        break;
      default:
        // Do nothing
        break;
    }
  };

  return (
    <div>
      <div
        className="map-container"
        onWheel={handleMouseWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {/* Update this img tag to use currentMap for its src attribute */}
        <img
  ref={mapRef}
  src={isItem1Checked ? CalgaryAll : currentMap} // Conditionally set src based on isItem1Checked
  alt={isItem1Checked ? "Calgary All" : "Calgary Map"} // Alt text based on the state
  className="map-image"
  style={{
    transform: `scale(${zoomLevel}) translate(${offsetX}px, ${offsetY}px)`,
  }}
/>
        <img
        src={WhereLogo}
        alt="whereLogo"
        className="resetButton"
        onClick={handleChangeImage} // This onClick handler is defined to switch the map image
      />
        {/* Conditional rendering for the filtered image */}
        {isItem1Checked && (
        <img src={CalgaryFiltered} alt="Filtered Image" className="item-image" style={{ zIndex: 1 }} />
      )}
      </div>
      <div className="filters-container">
        <div className="location-buttons">
          {/* Buttons for changing map locations */}
          <button onClick={() => handleLocationButtonClick('NW')}>NW</button>
          <button onClick={() => handleLocationButtonClick('NE')}>NE</button>
          <button onClick={() => handleLocationButtonClick('SW')}>SW</button>
          <button onClick={() => handleLocationButtonClick('SE')}>SE</button>
          <button onClick={() => handleLocationButtonClick('Downtown')}>Downtown</button>
          <button onClick={() => handleLocationButtonClick('All')}>All</button>
        </div>
        
        {/* Checkbox for filtering */}
        <div className="checkbox-container">
          <div className="checkbox-item">
          <input
        type="checkbox"
        id="check1"
        checked={isItem1Checked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="check1">Filter</label>
          </div>
          
          {/* Other checkboxes and their associated logic */}
        </div>
      </div>
    </div>
  );
  
};

export default Page_Calendar;
