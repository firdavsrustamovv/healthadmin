import { Link } from "react-router-dom";



const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-5 flex flex-col">
        <h2 className="text-2xl font-bold mb-5 text-center">Admin Panel</h2>
        <nav className="space-y-4 flex-1">
      <Link to="/patients" className="block p-3 bg-gray-800 rounded hover:bg-gray-700">Patient List</Link>
      <Link to="/doctors" className="block p-3 bg-gray-800 rounded hover:bg-gray-700">Doctor List</Link>
      <Link to="/add-doctor" className="block p-3 bg-gray-800 rounded hover:bg-gray-700">Add New Doctor</Link>
    </nav>
    </div>
  )
}

export default Sidebar