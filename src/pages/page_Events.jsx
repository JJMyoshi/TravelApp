import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCalendar,
  faArrowRight,
  faArrowLeft,
  faPlus,
  faArrowDownShortWide,
} from "@fortawesome/free-solid-svg-icons";
import "./page_Events.css";
import PageEventsSearch from "./page_Events_filter"; // Import the component containing search content
import CalgaryTowerEventHeader from "../assets/CalgaryTowerEventHeader.jpg";
import CalgaryTowerMap from "../assets/CalgaryTowerMap.png";

export default function Page_Events() {
  const containerStyle = {
    backgroundImage: `url(${CalgaryTowerEventHeader})`,
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'center', // Adjust as needed
    position: 'relative', // Required for z-index to work
    height: '600px'
  };

  const [inclusiveFilters, setInclusiveFilters] = useState({
    when: [],
    what: [],
    where: [],
    ages: [],
    admission: [],
  });
  const [showSearchContainer, setShowSearchContainer] = useState(false);
  const [showEventsWrapper, setShowEventsWrapper] = useState(true); // Initially set to true
  const [eventsWrapperMaxHeight, setEventsWrapperMaxHeight] = useState("525px"); // Default max-height
  const [eventsWrapperOverflow, setEventsWrapperOverflow] = useState("auto"); // Default overflow
  const [locationFilter, setLocationFilter] = useState("All"); // State to store the selected location filter (Default: All)
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState(
    // // Retrieve events from localStorage or use default events if not available
    // const storedEvents = localStorage.getItem('events');
    // return storedEvents ? JSON.parse(storedEvents) :
    [
      {
        date: "13",
        month: "Apr",
        title: "CPSC481 Demonstration",
        time: "7:00pm - 9:30pm",
        location: "University of Calgary",
        quadrant: "NW",
        city: "Calgary",
        type: "Other",
        price: 0,
        description: "PLACEHOLDER DESCRIPTION"
      },
      {
        date: "14",
        month: "Apr",
        title: "Public Skating",
        time: "9:00am - 3:00pm",
        location: "Bowness Community Association",
        quadrant: "NW",
        city: "Calgary",
        type: "Sports & Recreation",
        price: 10,
        description: "PLACEHOLDER DESCRIPTION"
      },
      {
        date: "25",
        month: "Apr",
        title: "I-See-Food: the Musical",
        time: "2:00pm - 3:00pm",
        location: "3320 Sunridge Way NE",
        quadrant: "NE",
        city: "Calgary",
        type: "Theatre, Comedy & Performing Arts",
        price: 70,
        description: "PLACEHOLDER DESCRIPTION"
      },
      {
        date: "16",
        month: "Apr",
        title: "Guest Speaker: Ted Lasso",
        time: "2:00pm - 4:00pm",
        location: "Marlborough Mall",
        quadrant: "NE",
        city: "Calgary",
        type: "Theatre, Comedy & Performing Arts",
        price: 50,
        description: "PLACEHOLDER DESCRIPTION"
      },
      {
        date: "17",
        month: "Apr",
        title: "Calgary Tower Tour",
        time: "2:00pm - 3:00pm",
        location: "Calgary Tower",
        quadrant: "Downtown",
        city: "Calgary",
        type: "Museums, Galleries & Exhibitions",
        price: 30,
        description: "Come one, come all, and explore the building that's defined the Calgary skyline for over 50 years!\n\nOn this guided tour you'll get to visit one of Canada's most iconic buildings while also learning about the rich history of its construction.\n\nPrices of admission:\nFree for children 5 and under\n$15 for youths aged 6-17\n$30 for adults aged 18-59\nFree for seniors aged 60 and above"
      },
      {
        date: "18",
        month: "Apr",
        title: "Open Mic Event",
        time: "8:00pm - 9:00pm",
        location: "Koi Bar",
        quadrant: "Downtown",
        city: "Calgary",
        type: "Music",
        price: 0,
        description: "PLACEHOLDER DESCRIPTION"
      },
      {
        date: "19",
        month: "Apr",
        title: "Pre-Pre-Pre-Pre-Calgary Stampede",
        time: "All Day",
        location: "Big Four, Stampede Grounds",
        quadrant: "SW",
        city: "Calgary",
        type: "Festivals & Special Events",
        price: 10,
        description: "PLACEHOLDER DESCRIPTION"
      },
      {
        date: "20",
        month: "Apr",
        title: "Free Food Giveaway (NOT A SCAM)",
        time: "2:00pm - 3:00pm",
        location: "Sue Higgins Park",
        quadrant: "SE",
        city: "Calgary",
        type: "Food & Drinks",
        price: 0,
        description: "PLACEHOLDER DESCRIPTION"
      },
      {
        date: "21",
        month: "Apr",
        title: "Shawnessy Festival",
        time: "10:00pm - 7:00pm",
        location: "22 Midlake Blvd SE",
        quadrant: "SW",
        city: "Calgary",
        type: "Festivals & Special Events",
        price: 0,
        description: "PLACEHOLDER DESCRIPTION"
      },
      {
        date: "22",
        month: "Apr",
        title: "Hoods Up: Vintage Cars",
        time: "April 22 - May 16",
        location: "Heritage Park",
        quadrant: "SW",
        city: "Calgary",
        type: "Festivals & Special Events",
        price: 10,
        description: "PLACEHOLDER DESCRIPTION"
      },
      // Add more events here...
    ]
  );
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedQuadrant, setSelectedQuadrant] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [showDropdownFilters, setShowDropdownFilters] = useState(false);
  const [showSortFilters, setSortFilters] = useState(false);
  const [sortOption, setSortOption] = useState("Low-High"); // State to store the selected sorting option
  const [showDetailsScreen, setShowDetailsScreen] = useState(false); // State to manage details screen visibility

  useEffect(() => {
    // Update localStorage whenever events change
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const toggleSearchContainer = () => {
    setShowSearchContainer((prevState) => !prevState);
  };

  const toggleEventsWrapper = () => {
    setShowEventsWrapper((prevState) => !prevState);
    // Update max-height and overflow based on showEventsWrapper state
    setEventsWrapperMaxHeight((prevState) =>
      prevState === "525px" ? "150px" : "525px"
    );
    setEventsWrapperOverflow((prevState) =>
      prevState === "auto" ? "hidden" : "auto"
    );
  };

  const handleLocationFilter = (location) => {
    setLocationFilter(location);
  };

  const handleSearchInputChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  const handleAddEventClick = (event) => {
    // Show popup when add button is clicked
    setShowPopup(true);
    setSelectedEvent(event);
  };

  const handleConfirmAddEvent = () => {
    // Remove selected event from events array
    const updatedEvents = events.filter((ev) => ev !== selectedEvent);
    setEvents(updatedEvents);
    // Close popup
    setShowPopup(false);
  };

  const handleStartDateChange = (event) => {
    const { value } = event.target;
    setStartDate(value);
  };

  const handleEndDateChange = (event) => {
    const { value } = event.target;
    setEndDate(value);
  };

  const handleQuadrantFilterChange = (event) => {
    const { value } = event.target;
    setSelectedQuadrant(value);
  };

  const handleTypeFilterChange = (event) => {
    const { value } = event.target;
    setSelectedType(value);
  };

  const toggleDropdownFilters = () => {
    setShowDropdownFilters((prevState) => !prevState);
  };

  const toggleSortFilters = () => {
    setSortFilters((prevState) => !prevState);
  };

  const handleSortOptionChange = (event) => {
    const { value } = event.target;
    setSortOption(value);
  };

  const handleReset = () => {
    setSelectedType("All"); // Reset selected type
    setSelectedQuadrant("All");
    // You can add similar statements for other fields if needed
  };

  // Handles clicking the view button of a specific event
  const handleDetailsButtonClick = (event) => {
    setSelectedEvent(event);
    setShowDetailsScreen(true);
  };

  // Returns to events page when back button is pressed on events details page
  const handleBackToEvents = () => {
    setShowDetailsScreen(false);
    setSelectedEvent(null); // Reset selected event
  };

  return (
    <div>
      {showDetailsScreen ? (
        <div className="detailsWrapper">
          <div className="detailsHeader">
            <button onClick={handleBackToEvents} className="backButton"><FontAwesomeIcon icon={faArrowLeft} /></button>
            <h1>{selectedEvent.title}</h1>
          </div>
          <div className="detailsBody">
            <div className="detailsDate"><p>
              <b>Date:</b> {selectedEvent.month} {selectedEvent.date} <br/>
              <b>Time:</b> {selectedEvent.time}
            </p></div>
            <div className="detailsLocation"><p><b>Location:</b><br/>{selectedEvent.location} | {selectedEvent.quadrant}</p></div>
          </div>
          <div className="detailsDescription">
            <p>{" "}<span
              dangerouslySetInnerHTML={{
              __html: selectedEvent.description.replace(/\n/g, "<br>")
              }}
            /></p>
          </div>
            <div className="detailsExport">
              <div className="detailsAddToCalendar">
                <p><b>Add Event to Calendar</b></p><br/>
                <div className="detailsButtonWrapper">
                  <button className="detailsOutlookButton">Outlook</button>
                  <button className="detailsGoogleButton">Google</button>
                  <button className="detailsAppleButton">Apple</button>
                </div>
              </div>
            <button className="detailsShareEventPage">Share Event Page</button>
          </div>
          <div className="detailsMap"></div>
        </div>
      ) : (
        <div>
          <div className="search">
            <input
              type="text"
              className="searchTerm"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <button type="submit" className="searchButton">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
            </button>
          </div>
          <div className="filters">
            <div className="date-range">
              <FontAwesomeIcon icon={faCalendar} className="calendar-icon" />
              <input
                type="date"
                id="start-date"
                name="start-date"
                onChange={handleStartDateChange}
              />
              <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
              <input
                type="date"
                id="end-date"
                name="end-date"
                onChange={handleEndDateChange}
              />
            </div>
            <div className="dropdown-filters">
              <button className="dropdown-button" onClick={toggleDropdownFilters}>
                Filters
              </button>
              {showDropdownFilters && (
                <div className="dropdown-content">
                  <div className="quadrant-filter">
                    <label htmlFor="quadrant-filter" className="quadrant-label">
                      Quadrant:
                    </label>
                    <select
                      id="quadrant-filter"
                      value={selectedQuadrant}
                      onChange={handleQuadrantFilterChange}
                    >
                      <option value="All">All</option>
                      <option value="NW">NW</option>
                      <option value="NE">NE</option>
                      <option value="SW">SW</option>
                      <option value="SE">SE</option>
                      <option value="Downtown">Downtown</option>
                    </select>
                  </div>
                  <div className="type-filter">
                    <label htmlFor="type-filter" className="filter-label">
                      Type:
                    </label>
                    <select
                      id="type-filter"
                      value={selectedType}
                      onChange={handleTypeFilterChange}
                    >
                      <option value="All">All</option>
                      <option value="Sports & Recreation">
                        Sports & Recreation
                      </option>
                      <option value="Theatre, Comedy & Performing Arts">
                        Theatre, Comedy & Performing Arts
                      </option>
                      <option value="Museums, Galleries & Exhibitions">
                        Museums, Galleries & Exhibitions
                      </option>
                      <option value="Music">Music</option>
                      <option value="Festivals & Special Events">
                        Festivals & Special Events
                      </option>
                      <option value="Food & Drinks">Food & Drinks</option>
                      <option value="Family">Family</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <button onClick={handleReset} className="reset-button">Reset</button>
                </div>
              )}
            </div>
          </div>
          <div className="sort-by">
            <button className="sort-button" onClick={toggleSortFilters}>
              Sort By{" "}
              <FontAwesomeIcon icon={faArrowDownShortWide} className="sort-icon" />
            </button>
            {showSortFilters && (
              <div className="dropdown-content">
                <div className="price-sort">
                  <input
                    type="radio"
                    id="price1"
                    name="price"
                    value="Low-High"
                    checked={sortOption === "Low-High"}
                    onChange={handleSortOptionChange}
                  ></input>
                  <label htmlFor="price1">Price Low to High</label>
                  <br></br>
                  <input
                    type="radio"
                    id="price2"
                    name="price"
                    value="High-Low"
                    checked={sortOption === "High-Low"}
                    onChange={handleSortOptionChange}
                  ></input>
                  <label htmlFor="price2">Price High to Low</label>
                  <br></br>
                  <input
                    type="radio"
                    id="date"
                    name="date"
                    value="Date1"
                    checked={sortOption === "Date1"}
                    onChange={handleSortOptionChange}
                  ></input>
                  <label htmlFor="date1">Date (Earliest to Latest)</label>
                  <br></br>
                  <input
                    type="radio"
                    id="date"
                    name="date"
                    value="Date2"
                    checked={sortOption === "Date2"}
                    onChange={handleSortOptionChange}
                  ></input>
                  <label htmlFor="date2">Date (Latest to Earliest)</label>
                </div>
              </div>
            )}
          </div>
          <div
            className="events-wrapper"
            style={{
              maxHeight: eventsWrapperMaxHeight,
              overflow: eventsWrapperOverflow,
            }}
          >
            {/* Render events here */}
            {events
              .filter((event) => {
                // Filter by search query, date range, quadrant, and type
                console.log(events);
                return (
                  (event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    event.quadrant.toLowerCase().includes(searchQuery.toLowerCase())) &&
                  (!startDate ||
                    new Date(event.month + " " + event.date + ", 2024") >=
                      new Date(startDate)) &&
                  (!endDate ||
                    new Date(event.month + " " + event.date + ", 2024") <=
                      new Date(endDate)) &&
                  (selectedQuadrant === "All" ||
                    event.quadrant === selectedQuadrant) &&
                  (selectedType === "All" || event.type === selectedType)
                );
              })
              .sort((a, b) => {
                // Sort by price based on the selected option
                if (sortOption === "Low-High") {
                  return a.price - b.price;
                } else if (sortOption === "High-Low") {
                  return b.price - a.price;
                } else if (sortOption === "Date1") {
                  // Custom comparator function for sorting by date
                  const dateA = new Date(a.month + " " + a.date + ", 2024");
                  const dateB = new Date(b.month + " " + b.date + ", 2024");
                  return dateA - dateB;
                } else if (sortOption === "Date2") {
                  // Custom comparator function for sorting by date
                  const dateA = new Date(a.month + " " + a.date + ", 2024");
                  const dateB = new Date(b.month + " " + b.date + ", 2024");
                  return dateB - dateA;
                }
              })
              .map((event, index) => (
                <div className="event-container" key={index}>
                  <div className="event-date">
                    <div className="date-number">
                      <h1>{event.date}</h1>
                    </div>
                    <div className="month">
                      <h2>{event.month}</h2>
                    </div>
                    {/* <div className="add-event">
                      <button className="add-button" onClick={() => handleAddEventClick(event)}>
                        <FontAwesomeIcon icon={faPlus} className="plusIcon" />
                      </button>
                    </div> */}
                  </div>
                  <div className="event-title">
                    <h1>{event.title}</h1>
                    <p>{event.time}</p>
                    <p>
                      {event.location} | {event.quadrant}
                    </p>
                  </div>
                  <button className="details-button" onClick={() => handleDetailsButtonClick(event)}>View</button>
                </div>
              ))}
            {events.filter((event) => {
              return (
                (event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  event.quadrant.toLowerCase().includes(searchQuery.toLowerCase())) &&
                (!startDate ||
                  new Date(event.month + " " + event.date + ", 2024") >=
                    new Date(startDate)) &&
                (!endDate ||
                  new Date(event.month + " " + event.date + ", 2024") <=
                    new Date(endDate)) &&
                (selectedQuadrant === "All" ||
                  event.quadrant === selectedQuadrant) &&
                (selectedType === "All" || event.type === selectedType)
              );
            }).length === 0 && (
              <div className="no-events-message">
                <p>
                  Sorry, there are no events that match your search. Please try
                  again.
                </p>
              </div>
            )}
          </div>
          {/* Popup component */}
          {/* {showPopup && (
            <div className="overlay">
              <div className="confirmation-message">
                <div className="confirmation-box">
                  <p>
                    Are you sure you want to add "{selectedEvent.title}" to your
                    calendar?
                  </p>
                  <button
                    className="confirm-button"
                    onClick={handleConfirmAddEvent}
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="cancel-button"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )} */}
        </div>
      )}
    </div>
  )};