import "./eventPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function eventSearch() {
    return (
        <div>
            <div class="search">
                <input type="text" class="searchTerm" placeholder="Search..." />
                <button type="submit" class="searchButton">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
                </button>
            </div>
            <div class="event-container">
                <div class="event-date">
                    <div class="date-number">
                        <h1>13</h1>
                    </div>
                    <div class="month">
                        <h2>April</h2>
                    </div>
                    <div class="add-event">
                        <button class="add-button">
                            <FontAwesomeIcon icon={faPlus} className="plusIcon" />
                        </button>
                    </div>
                </div>
                <div class="event-title">
                    <h1>Open Mic Event</h1>
                    <p>8:00pm - 8:30pm</p>
                    <p>Koi Bar | Calgary, AB</p>
                </div>
                <button class="details-button">View</button>
            </div>
            <div className="overlay">
                <div className="confirmation-message">
                    <div className="confirmation-box">
                        <p>Are you sure you want to add 'Open Mic Event' to your calendar?</p>
                        <button class="confirm-button">Confirm</button>
                        <button class="cancel-button">Cancel</button>
                    </div>
                </div>
            </div>
            {/* <div className="overlay">
                <div className="confirmation-message">
                    <div className="confirmation-box">
                        <p>There is a time conflict with 'Trip to Banff' in your Calendar. Would you like to change it for 'Open Mic Event'?</p>
                        <button class="confirm-button">Confirm</button>
                        <button class="cancel-button">Cancel</button>
                    </div>
                </div>
            </div> */}
            <div class="event-container">
                <div class="event-date">
                    <div class="date-number">
                        <h1>14</h1>
                    </div>
                    <div class="month">
                        <h2>April</h2>
                    </div>
                    <div class="add-event">
                        <button class="add-button">
                            <FontAwesomeIcon icon={faPlus} className="plusIcon" />
                        </button>
                    </div>
                </div>
                <div class="event-title">
                    <h1>Calgary Tower Tour</h1>
                    <p>2:00pm - 3:00pm</p>
                    <p>Calgary Tower | Calgary, AB</p>
                </div>
                <button class="details-button">View</button>
            </div>
            <div class="event-container">
                <div class="event-date">
                    <div class="date-number">
                        <h1>16</h1>
                    </div>
                    <div class="month">
                        <h2>April</h2>
                    </div>
                    <div class="add-event">
                        <button class="add-button">
                            <FontAwesomeIcon icon={faPlus} className="plusIcon" />
                        </button>
                    </div>
                </div>
                <div class="event-title">
                    <h1>Calgary Flames Game</h1>
                    <p>7:00pm - 10:00pm</p>
                    <p>Scotiabank Saddledome | Calgary, AB</p>
                </div>
                <button class="details-button">View</button>
            </div>
        </div>
    );
}