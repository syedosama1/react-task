import React from 'react';
import { FaBell, FaCog } from 'react-icons/fa';
import { AiOutlineExport } from 'react-icons/ai';
import "../components/header.css"
const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-left">
          <div className="avatar">
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR4ne9OhDCN7edNhw2TLRbmOgLwzUxE9TWWdnsylkgIU4m0GouA"
              alt="Avatar"
            />
          </div>
          <div className="username">
            <p>Manager Kim</p>
            <span>Loan Management Team</span>
          </div>
        </div>
        <div className="header-icons">
          <button className="notification-bar">
            <FaBell />
          </button>
          <div className="search-bar">
            <select>
              <option value="option1">Search</option>
              <option value="option2">Dashboard</option>
              <option value="option3">Member Management</option>
              <option value="option4">Sales Management</option>
              <option value="option5">Funding Management</option>
            </select>
          </div>
          <button className="zoom-icon">
            <AiOutlineExport />
          </button>
          <button className="setting-bar">
            <FaCog />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
