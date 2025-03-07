import {Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import PatientList from "./PatientList";
import DoctorList from "./DoctorList";
import AddDoctor from "./AddDoctor";

const Dashboard = () => (
  <div className="flex flex-col h-screen">
    <Header />
    <div className="flex flex-1 overflow-hidden">
      <Sidebar />
      <div className="flex-1 p-5 overflow-auto bg-gray-100">
        <Routes>
          <Route path="/patients" element={<PatientList />} />
          <Route path="/doctors" element={<DoctorList />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
        </Routes>
      </div>
    </div>
  </div>
);
export default Dashboard;
