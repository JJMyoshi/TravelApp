import "./eventPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function eventPage() {
  return (
    <div>
      <div class="search">
        <input type="text" class="searchTerm" placeholder="Search..." />
        <button type="submit" class="searchButton">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
        </button>
      </div>
      <div class="filter-container">
        <h1>FILTER</h1>
        <div class="filter-type">
            <h1>WHEN</h1>
            <div class="filter-list">
                <u>All</u>
                <u>Today</u>
                <u>Tomorrow</u>
                <u>This Week</u>
                <u>Next Week</u>
                <u>Custom Dates</u>
                <u>Past</u>
            </div>
        </div>
        <div class="filter-type">
            <h1>WHAT</h1>
            <div class="filter-list">
                <u>All</u>
                <u>Music</u>
                <u>Sports</u>
                <u>Theatre</u>
                <u>Markets</u>
                <u>Culinary</u>
                <u>Others</u>
            </div>
        </div>
        <div class="filter-type">
            <h1>WHERE</h1>
            <div class="filter-list">
                <u>All</u>
                <u>Downtown</u>
                <u>NW</u>
                <u>NE</u>
                <u>SW</u>
                <u>SE</u>
            </div>
        </div>
        <div class="filter-type">
            <h1>AGES</h1>
            <div class="filter-list">
                <u>All Ages</u>
                <u>Family Friendly</u>
                <u>18+</u>
            </div>
        </div>
        <div class="filter-type">
            <h1>ADMISSION</h1>
            <div class="filter-list">
                <u>All</u>
                <u>Ticketed</u>
                <u>Free</u>
            </div>
        </div>
      </div>
      <div class="event-container">
        <div class="event-date">
            <div class="date-number">
                <h1>13</h1>
            </div>
            <div class="month">
                <h2>April</h2>
            </div>
        </div>
        <div class="event-title">
            <h1>Open Mic Event</h1>
            <p>8:00pm - 8:30pm</p>
            <p>Koi Bar | Calgary, AB</p>
        </div>
        <button class="details-button">View</button>
    </div>
    </div>
  );
}
