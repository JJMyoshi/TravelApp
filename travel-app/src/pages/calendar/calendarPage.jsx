import React from 'react';
import * as Calendar from "./calendarFunctions";
import "./calendarPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight} from "@fortawesome/free-solid-svg-icons";

// Defining view modes
const viewModes = {"Month": 0, "List": 1, "Day": 2};
let viewMode = viewModes["Month"];
function setMode(mode) {
    viewMode = viewModes[mode];
}

// Defining some example events
let tickets = new Calendar.AllDayEvent("DON'T FORGET TO BUY TICKETS", "", "", "", "", new Date("2024-04-07"));
let tour = new Calendar.Event("Calgary Tower Tour", "", "", "", "", new Date("April 7, 2024 13:00:00"), new Date("April 7, 2024 15:30:00"));
let tattooCon = new Calendar.AllDayEvent("Tattoo Convention", "", "", "", "", new Date("2024-04-09"));

// Filling a map of events with example events
let events = {
    "2024-3-7": {tickets, tour},
    "2024-3-9": {tattooCon}
}

let date = new Date();
let today = new Date();
console.log(Calendar.monthDays(date));
export default function CalendarPage() {
    if (viewMode === 0) {
        return (
            <div className="real-calendar-wrapper"> 
                <div className="calendar-wrapper">
                    <div className="calendar-header">
                        <button className="list-button" onClick = {setMode("List")}>LIST</button>
                        <button className="day-button" onClick = {setMode("Day")}>DAY</button>
                        <button className="month-button-selected">MONTH</button>
                    </div>
                    <div className="month-wrapper">
                        <div className="month-year-header"> 
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
                        <button className="day-button" onClick = {setMode("Day")}>DAY</button>
                        <button className="month-button" onClick = {setMode("Month")}>MONTH</button>
                    </div>
                </div>
            </div>
        );
    } else if (viewMode === 2) {
        return (
            <div className="real-calendar-wrapper"> 
                <div className="calendar-wrapper">
                    <div className="calendar-header">
                        <button className="list-button" onClick = {setMode("List")}>LIST</button>
                        <button className="day-button-selected">DAY</button>
                        <button className="month-button" onClick = {setMode("Month")}>MONTH</button>
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