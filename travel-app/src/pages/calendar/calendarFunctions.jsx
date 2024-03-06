// This module contains some functionality for the calendar page

export const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Returns the first day of the week
export function firstOfWeek(date) {
    let rDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    rDate.setDate(rDate.getDate() - rDate.getDay()); 
    return rDate;
}

// Spits out an array of the days to be displayed for a given month
export function monthDays(date) {
    let d = firstOfWeek(new Date(date.getFullYear(), date.getMonth(), 1));
    let rArr = [];
    for(let i = 0; i < 42; i++) {
        rArr.push(new Date(d.getFullYear(), d.getMonth(), d.getDate()));
        d.setDate(d.getDate() + 1);
    }
    return rArr;
}

// Spits out an array of the days to be displayed for a given week
export function weekDays(date) {
    let d = firstOfWeek(date);
    let rArr = [];
    for(let i = 0; i < 7; i++) {
        rArr.push(new Date(d.getFullYear(), d.getMonth(), d.getDate()));
        d.setDate(d.getDate() + 1);
    }
    return rArr;
}

// Class for representing events
export class Event {
    constructor(title, location, description, notes, tags, startTime, endTime) {
        this.title = title;
        this.location = location;
        this.description = description;
        this.notes = notes;
        this.tags = tags;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}

// Constructor for all day event
export function AllDayEvent(title, location, description, notes, tags, date) {
    let startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
    let endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);
    return new Event(title, location, description, notes, tags, startTime, endTime);
}

// Checks if there is an event on a given day
export function eventOnDay(date, events){
    for (let key in events) {
        if(key === (date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate())) {
            return true;
        }
    }
    return false;
}

export function eventsOnDay(date, events){
    let rArr = [];
    for (let key in events) {
        if(key === (date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate())) {
            let i = 0;
            while (i < events[key].length) {
                rArr.push(events[key][i]);
                i++;
            }
        }
    }
    return rArr;
}

// Converts date time into a string
export function dateTime(date) {
    let rStr = "";
    rStr = rStr + date.getHours() + ":";
    console.log(rStr);
    if (date.getMinutes() < 10) {
        rStr = rStr + "0";
        console.log(rStr);
    }
    rStr = rStr + date.getMinutes().toString();
    console.log(rStr);
    return rStr;
}