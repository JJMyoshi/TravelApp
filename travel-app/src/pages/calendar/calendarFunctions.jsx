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
    let endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 11, 59, 59, 999);
    return new Event(title, location, description, notes, tags, startTime, endTime);
}

export function eventOnDay(date, events){
    for (let key in events) {
        if(key === (date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate())) {
            return true;
        }
    }
    return false;
}