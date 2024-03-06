import React from 'react';
import * as Calendar from "./calendarFunctions";
import "./calendarPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight} from "@fortawesome/free-solid-svg-icons";

// Defining view modes
const viewModes = {"Month": 0, "List": 1, "Day": 2};
let viewMode = viewModes["Day"];

// Defining some example events
let tickets = new Calendar.AllDayEvent("DON'T FORGET TO BUY TICKETS", "", "", "", "", new Date("2024-04-07"));
let tour = new Calendar.Event("Calgary Tower Tour", "", "", "", "", new Date("April 7, 2024 13:00:00"), new Date("April 7, 2024 15:30:00"));
let tattooCon = new Calendar.AllDayEvent("Tattoo Convention", "", "", "", "", new Date("2024-04-09"));

// Filling a map of events with example events
let events = {
    "2024-3-7": [tickets, tour],
    "2024-3-9": [tattooCon]
}

let date = new Date();
date.setDate(7);
let today = new Date();
let selected = new Date();
selected.setDate(7);

console.log(Calendar.monthDays(date));
console.log(Calendar.weekDays(date));
console.log(events[((((date.getFullYear() + "-") + (date.getMonth() + 1)) + "-") + date.getDate())]);
console.log(Calendar.eventsOnDay(date, events).map((eve) => {return eve.title}));
export default function CalendarPage() {
    if (viewMode === 0) {
        return (
            <div className="real-calendar-wrapper"> 
                <div className="calendar-wrapper">
                    <div className="calendar-header">
                        <button className="list-button">LIST</button>
                        <button className="day-button">DAY</button>
                        <button className="month-button-selected">MONTH</button>
                    </div>
                    <div className="month-wrapper">
                        <div className="month-year-header-lol"> 
                            <h2><FontAwesomeIcon icon={faCaretLeft}/> {Calendar.months[date.getMonth()]} {date.getFullYear()} <FontAwesomeIcon icon={faCaretRight}/></h2>    
                        </div>
                        <div className="month">
                            <div className="month-header">
                                {Calendar.days.map((days) => {return <div className="month-days"><p>{days[0]}</p></div>})}
                            </div>
                            <div className="month-body">
                                {Calendar.monthDays(date).map((day) => {return <div className={"day-grid" + (day.getMonth() === date.getMonth() ? "" : "-different-month") + (((day.getFullYear() === today.getFullYear()) && (day.getMonth() === today.getMonth()) && (day.getDate() === today.getDate())) ? "-today" : "")}><p>{day.getDate()} <br/> {Calendar.eventOnDay(day, events) ? "\u2022" : "\u00A0"}</p></div>})}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else if (viewMode === 1) {
        return (
            <div className="real-calendar-wrapper"> 
                <div className="calendar-wrapper">
                    <div className="calendar-header">
                        <button className="list-button-selected">LIST</button>
                        <button className="day-button">DAY</button>
                        <button className="month-button">MONTH</button>
                    </div>
                    <div className="list-wrapper">
                        <div className="month-year-header"> 
                            <h2><FontAwesomeIcon icon={faCaretLeft}/> {Calendar.months[Calendar.weekDays(date)[0].getMonth()]} {Calendar.weekDays(date)[0].getDate()} {(Calendar.weekDays(date)[0].getFullYear() === Calendar.weekDays(date)[6].getFullYear()) ? "" : "," + Calendar.months[Calendar.weekDays(date)[0].getFullYear()]} - {(Calendar.weekDays(date)[0].getMonth() === Calendar.weekDays(date)[6].getMonth()) ? "" : Calendar.months[Calendar.weekDays(date)[6].getMonth()]} {Calendar.weekDays(date)[6].getDate()}, {Calendar.weekDays(date)[6].getFullYear()} <FontAwesomeIcon icon={faCaretRight}/></h2>    
                        </div>
                        <div className="week">
                            <div className="week-header">
                                {Calendar.days.map((days) => {return <div className="week-days"><h2>{days[0]}</h2></div>})}
                            </div>
                            <div className="week-body">
                                {Calendar.weekDays(date).map((day) => {return <div className={"week-day-grid" + (((day.getFullYear() === today.getFullYear()) && (day.getMonth() === today.getMonth()) && (day.getDate() === today.getDate())) ? "-today" : "")}><p>{day.getDate()} <br/> {Calendar.eventOnDay(day, events) ? "\u2022" : "\u00A0"}</p></div>})}
                            </div>
                        </div>
                        <div className="list">
                            {Calendar.weekDays(date).map((day) => {return <div classnme="list-day"><h2 className="list-date-label">{Calendar.days[day.getDay()]}, {Calendar.months[day.getMonth()]} {day.getDate()}, {day.getFullYear()}</h2><h3 className='event-listings'>{Calendar.eventOnDay(day, events) ? (Calendar.eventsOnDay(day, events).map((ev) => {return <div className='listed-event'><p className='event-time'>{Calendar.isAllDay(ev) ? "All day\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0" : (Calendar.dateTime(ev.startTime) + "-" + Calendar.dateTime(ev.endTime))}</p><h3 className="event-title">{ev.title}</h3></div>})) : <h4 className='no-events'>No events</h4>}</h3></div>})}
                        </div>
                    </div>
                </div>
            </div>
        );
    } else if (viewMode === 2) {
        return (
            <div className="real-calendar-wrapper"> 
                <div className="calendar-wrapper">
                    <div className="calendar-header">
                        <button className="list-button">LIST</button>
                        <button className="day-button-selected">DAY</button>
                        <button className="month-button">MONTH</button>
                    </div>
                    <div className="day-wrapper">
                        <div className="month-year-header"> 
                            <h2><FontAwesomeIcon icon={faCaretLeft}/> {Calendar.months[selected.getMonth()]} {selected.getDate()}, {selected.getFullYear()} <FontAwesomeIcon icon={faCaretRight}/></h2>    
                        </div>
                        <div className="week">
                            <div className="week-header">
                                {Calendar.days.map((days) => {return <div className="week-days"><p>{days[0]}</p></div>})}
                            </div>
                            <div className="week-body">
                            {Calendar.weekDays(date).map((day) => {return <div className={"week-day-grid" + (((day.getFullYear() === selected.getFullYear()) && (day.getMonth() === selected.getMonth()) && (day.getDate() === selected.getDate())) ? "-selected" : "")}><p>{day.getDate()} <br/> {Calendar.eventOnDay(day, events) ? "\u2022" : "\u00A0"}</p></div>})}
                            </div>
                        </div>
                        <div className="day-list-wrapper">
                            <div className="all-day-list">
                                {Calendar.eventsOnDay(selected, events).map((ev) => {return <div className="all-day-event"><h4 className="all-day-label">{Calendar.isAllDay(ev) ? ("All day:\u00A0\u00A0\u00A0\u00A0\u00A0" + ev.title) : ""}</h4></div>})}
                            </div>
                            <div className="hour-list">
                                {Calendar.getDayHours(0, 24).map((hour) => {return <div className={"hour-row" + (hour % 2 ? "" : "-odd")}><p className="hour-label">{Calendar.formatTime(hour, 0)}</p></div>})}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div> 
                <div className="calendar-wrapper">
                    <h1>Something has gone terribly wrong</h1>
                </div>
            </div>
        );
    }
}