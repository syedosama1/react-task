import React from "react";
import "./member-list.css";
import PaginationTable from "./PaginationTable";

const MemberShipList = () => {
  return (
    <div>
      <div className="membership-management">
        <h2>Member Management</h2>
        <form className="filter-form">
          <div className="filter-row">
            <label>Join Date:</label>
            <button type="button">Entire</button>
            <button type="button">Today</button>
            <button type="button">Yesterday</button>
            <button type="button">1 week</button>
            <button type="button">1 month</button>
            <button type="button">3 months</button>

            <input type="date" placeholder="Start date" />
            <input type="date" placeholder="End date" />
          </div>
          <div className="filter-row">
            <label>Channel:</label>
            <label>
              <input type="checkbox" /> Entire
            </label>
            <label>
              <input type="checkbox" /> PC
            </label>
            <label>
              <input type="checkbox" /> Mobile App
            </label>
            <label>
              <input type="checkbox" /> Mobile Web
            </label>
          </div>
          <div className="filter-row">
            <label>Posting:</label>
            <label>
              <input type="checkbox" /> Entire
            </label>
            <label>
              <input type="checkbox" /> Posting
            </label>
            <label>
              <input type="checkbox" /> Not Posted
            </label>
          </div>
          <div className="filter-row">
            <label>Search:</label>
            <select>
              <option value="">Select...</option>
            </select>
            <input type="text" placeholder="Search" />
          </div>

          <div className="buttons">
            <button className="button-primary">Search</button>
            <button className="button-secondary">Reset</button>
          </div>
        </form>
      </div>
      <PaginationTable />
    </div>
  );
};

export default MemberShipList;
