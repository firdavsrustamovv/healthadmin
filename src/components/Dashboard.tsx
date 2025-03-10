import {Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import PatientList from "../pages/PatientList";
import DoctorList from "../pages/DoctorList";
import AddDoctor from "../pages/AddDoctor";
import MainDashboard from "../pages/MainDashboard";

const Dashboard = () => (
  <div className="flex flex-col h-screen">
    <Header />
    <div className="flex flex-1 overflow-hidden">
      <Sidebar />
      <div className="flex-1 p-5 overflow-auto bg-gray-100">
        <Routes>
          <Route path="/mainDashboard" element={<MainDashboard/>}/>
          <Route path="/patients" element={<PatientList />} />
          <Route path="/doctors" element={<DoctorList />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
        </Routes>
      </div>
    </div>
  </div>
);
export default Dashboard;
