import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import '../components/Main.css'; // Ensure you have appropriate styles

const Main = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <div className="content">
        <Header />
        
        <div className="main-content">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default Main;
