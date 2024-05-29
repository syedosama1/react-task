import React from "react";
import "../components/member-dashboard.css";
import Pagination from "./PaginationTable";
const MemberDashboard = () => {
  

  return (
    <>
    <div className="membership-manager">
      <h2>Membership Management</h2>

      <div className="stats">
        <div className="stat-item">
          <h2>100</h2>
          <p>Entire</p>
        </div>
        <div className="stat-item">
          <h2>10</h2>
          <p>Waiting for approval</p>
        </div>
        <div className="stat-item">
          <h2>80</h2>
          <p>Approved</p>
        </div>
        <div className="stat-item">
          <h2>10</h2>
          <p>Approval denied</p>
        </div>
      </div>

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
          <label>Dormant:</label>
          <input type="checkbox" /> Entire
          <input type="checkbox" /> PC
          <input type="checkbox" /> Mobile App
          <input type="checkbox" /> Mobile Web
        </div>
        <div className="filter-row">
          <label>Investor Type:</label>
          <input type="checkbox" /> Entire
          <input type="checkbox" /> PC
          <input type="checkbox" /> Mobile App
          <input type="checkbox" /> Mobile Web
        </div>
        <div className="filter-row">
          <label>Loan type:</label>
          <input type="checkbox" /> Entire
          <input type="checkbox" /> PC
          <input type="checkbox" /> Mobile App
          <input type="checkbox" /> Mobile Web
        </div>
        <div className="filter-row">
          <label>Investment type approval:</label>
          <input type="checkbox" /> Entire
          <input type="checkbox" /> Posting
          <input type="checkbox" /> Not Posted
        </div>
        <div className="filter-row">
          <label>Investment/Loan status:</label>
          <input type="checkbox" /> Entire
          <input type="checkbox" /> PC
          <input type="checkbox" /> Mobile App
          <input type="checkbox" /> Mobile Web
        </div>
        <div className="filter-row">
          <label>Blacklist:</label>
          <input type="checkbox" /> Entire
          <input type="checkbox" /> Waiting for Approval
          <input type="checkbox" /> Approved
          <input type="checkbox" /> Approval Initiated
        </div>
        <div className="filter-row">
          <label>Investment Status:</label>
          <input type="checkbox" /> Entire
          <input type="checkbox" /> Waiting for Approval
          <input type="checkbox" /> Approved
          <input type="checkbox" /> Approval Initiated
        </div>
        <div className="filter-row">
          <label>Loan availability:</label>
          <input type="checkbox" /> Entire
          <input type="checkbox" /> Waiting for Approval
          <input type="checkbox" /> Approved
          <input type="checkbox" /> Approval Initiated
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
      <Pagination/>
      </>
  );
};

export default MemberDashboard;
