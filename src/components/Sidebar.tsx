import React from "react";
import { NavLink } from "react-router-dom";

interface CustomNavLinkProps {
    to: string;
    children: React.ReactNode;
}

const Sidebar = () => {
  const CustomNavLink: React.FC<CustomNavLinkProps> = ({to, children}) => (
    <NavLink to={to} className={({isActive}) => isActive ? "block p-3 bg-gray-700 rounded hover:bg-gray-600" : "block p-3 bg-gray-800 rounded hover:bg-gray-700"}>{children}</NavLink>
  )
  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-5 flex flex-col">
        <h2 className="text-2xl font-bold mb-5 text-center">Admin Panel</h2>
        <nav className="space-y-3 flex-1">
      <CustomNavLink to="/mainDashboard">Dashboard</CustomNavLink>
      <CustomNavLink to="/patients">Patient List</CustomNavLink>
      <CustomNavLink to="/doctors">Doctor List</CustomNavLink>
      <CustomNavLink to="/add-doctor">Add New Doctor</CustomNavLink>
    </nav>
    </div>
  )
}

export default Sidebar  