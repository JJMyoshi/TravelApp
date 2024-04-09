import "./page_Events.css";
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function page_Events_filter({
  inclusiveFilters,
  setInclusiveFilters,
  exclusiveFilters,
  setExclusiveFilters
}) {

  const toggleFilter = (type, value) => {
    setInclusiveFilters(prevState => {
      const isSelected = Array.isArray(prevState[type]) && prevState[type].includes(value);
  
      if (isSelected) {
        return {
          ...prevState,
          [type]: Array.isArray(prevState[type]) ? prevState[type].filter(item => item !== value) : []
        };
      } else {
        let updatedValues;
        if (value === "All" || value === "All Ages") {
          updatedValues = [value];
        } else {
          updatedValues = Array.isArray(prevState[type]) ? prevState[type].filter(item => item !== "All" && item !== "All Ages") : [];
          updatedValues.push(value);
        }
        return {
          ...prevState,
          [type]: updatedValues
        };
      }
    });
  
    // setExclusiveFilters(prevState => {
    //   // Check if the value is already selected
    //   const isSelected = Array.isArray(prevState[type]) && prevState[type].includes(value);
  
    //   if (isSelected) {
    //     // If already selected, remove the value
    //     return {
    //       ...prevState,
    //       [type]: Array.isArray(prevState[type]) ? prevState[type].filter(item => item !== value) : []
    //     };
    //   } else {
    //     // If not selected, add the value
    //     // If "All" is selected, remove other options
    //     let updatedValue;
    //     if (value === "All" || value === "All Ages") {
    //       updatedValue = [value];
    //     } else {
    //       updatedValue = Array.isArray(prevState[type]) ? prevState[type].filter(item => item !== "All") : [];
    //       updatedValue.push(value);
    //     }
    //     return {
    //       ...prevState,
    //       [type]: updatedValue
    //     };
    //   }
    // });
  };
  
  

  // const handleFilterClick = (type, value) => {
  //   setExclusiveFilters(prevState => ({
  //     ...prevState,
  //     [type]: value
  //   }));
  // };
  
  // const [activeItems, setActiveItems] = useState([]);

  // const handleItemClick = (item) => {
  //   if (activeItems.includes(item)) {
  //     // If the item is already active, remove it from the activeItems array
  //     setActiveItems(activeItems.filter(activeItem => activeItem !== item));
  //   } else {
  //     // If the item is not active, add it to the activeItems array
  //     setActiveItems([...activeItems, item]);
  //   }
  // };
  

  return (
    <div>
      <div className="filter-container">
        <div className="filter-type">
            <h1>WHEN</h1>
            <div className="filter-list">
            <u className={inclusiveFilters.when.includes("Today") ? "active" : ""}        onClick={() => toggleFilter("when", "Today")}>Today</u>
            <u className={inclusiveFilters.when.includes("Tomorrow") ? "active" : ""}        onClick={() => toggleFilter("when", "Tomorrow")}>Tomorrow</u>
            <u className={inclusiveFilters.when.includes("This Week") ? "active" : ""}        onClick={() => toggleFilter("when", "This Week")}>This Week</u>
            <u className={inclusiveFilters.when.includes("Next Week") ? "active" : ""}        onClick={() => toggleFilter("when", "Next Week")}>Next Week</u>
            <u className={inclusiveFilters.when.includes("Past") ? "active" : ""}        onClick={() => toggleFilter("when", "Past")}>Past Events</u>
            <u className={inclusiveFilters.when.includes("Custom Dates") ? "active" : ""}        onClick={() => toggleFilter("when", "Custom Dates")}>Custom Dates</u>
            </div>
        </div>

        <div className="filter-type">
            <h1>WHAT</h1>
            <div className="filter-list">
              <u  className={inclusiveFilters.what.includes("Music") ? "active" : ""}   onClick={() => toggleFilter("what", "Music")}> Music </u>
              <u  className={inclusiveFilters.what.includes("Sports") ? "active" : ""}   onClick={() => toggleFilter("what", "Sports")}> Sports </u>
              <u  className={inclusiveFilters.what.includes("Theatre") ? "active" : ""}   onClick={() => toggleFilter("what", "Theatre")}> Theatre </u>
              <u  className={inclusiveFilters.what.includes("Culinary") ? "active" : ""}   onClick={() => toggleFilter("what", "Culinary")}> Culinary </u>
              <u  className={inclusiveFilters.what.includes("Markets") ? "active" : ""}   onClick={() => toggleFilter("what", "Markets")}> Markets </u>
              <u  className={inclusiveFilters.what.includes("Others") ? "active" : ""}   onClick={() => toggleFilter("what", "Others")}> Others </u>
            </div>
        </div>

        <div className="filter-type">
            <h1>WHERE</h1>
            <div className="filter-list">
                <u className={inclusiveFilters.where.includes("All") ? "active" : ""}       onClick={() => toggleFilter("where", "All")}>All</u>
                <u className={inclusiveFilters.where.includes("Downtown") ? "active" : ""}  onClick={() => toggleFilter("where", "Downtown")}>Downtown</u>
                <u className={inclusiveFilters.where.includes("NW") ? "active" : ""}        onClick={() => toggleFilter("where", "NW")}>NW</u>
                <u className={inclusiveFilters.where.includes("NE") ? "active" : ""}        onClick={() => toggleFilter("where", "NE")}>NE</u>
                <u className={inclusiveFilters.where.includes("SW") ? "active" : ""}        onClick={() => toggleFilter("where", "SW")}>SW</u>
                <u className={inclusiveFilters.where.includes("SE") ? "active" : ""}        onClick={() => toggleFilter("where", "SE")}>SE</u>
            </div>
        </div>

        <div className="filter-type">
            <h1>AGES</h1>
            <div className="filter-list">
                <u className={inclusiveFilters.ages.includes("All Ages") ? "active" : ""} onClick={() => toggleFilter("ages", "All Ages")}>All Ages</u>
                <u className={inclusiveFilters.ages.includes("Family Friendly") ? "active" : ""} onClick={() => toggleFilter("ages", "Family Friendly")}>Family Friendly</u>
                <u className={inclusiveFilters.ages.includes("18+") ? "active" : ""} onClick={() => toggleFilter("ages", "18+")}>18+</u>
            </div>
        </div>

        <div className="filter-type">
            <h1>ADMISSION</h1>
            <div className="filter-list">
                <u className={inclusiveFilters.admission.includes("All") ? "active" : ""} onClick={() => toggleFilter("admission", "All")}>All</u>
                <u className={inclusiveFilters.admission.includes("Ticketed") ? "active" : ""} onClick={() => toggleFilter("admission", "Ticketed")}>Ticketed</u>
                <u className={inclusiveFilters.admission.includes("Free") ? "active" : ""} onClick={() => toggleFilter("admission", "Free")}>Free</u>
            </div>
        </div>
      </div>
    </div>
  );
}
