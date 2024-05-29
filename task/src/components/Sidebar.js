import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaChartLine,
  FaDollarSign,
  FaPiggyBank,
  FaFileInvoiceDollar,
  FaCreditCard,
  FaCog,
} from "react-icons/fa";
import { LOGO_URL } from "../utils/dummy";
import "../components/sidebar.css";
const Sidebar = () => {
  const menuItems = [
    { title: "dashboard", link: "/dashboard", icon: <FaTachometerAlt /> },
    { title: "Member Management", link: "/member", icon: <FaUsers /> },
    {
      title: "Sales Management",
      link: "/sales-management",
      icon: <FaChartLine />,
    },
    {
      title: "Funding Management",
      link: "/funding-management",
      icon: <FaDollarSign />,
    },
    {
      title: "Investment Management",
      link: "/investment-management",
      icon: <FaPiggyBank />,
    },
    {
      title: "Bond Management",
      link: "/bond-management",
      icon: <FaFileInvoiceDollar />,
    },
    {
      title: "Payment Management",
      link: "/payment-management",
      icon: <FaCreditCard />,
    },
    { title: "System Management", link: "/system-management", icon: <FaCog /> },
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={LOGO_URL} alt="Sidebar Logo" />
      </div>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink to={item.link} activeClassName="active">
              <span className="menu-icon">{item.icon}</span>
              <span>{item.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
