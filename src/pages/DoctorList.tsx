import { Card, CardContent } from "@mui/material";
import { Doctors } from "../utils/constants";

const DoctorList = () => (
  <Card className="p-5 shadow-lg">
  <CardContent>
    <table className="min-w-full border-collapse block md:table">
      <thead className="block md:table-header-group">
        <tr className="border-b border-gray-300 block md:table-row">
        <th className="bg-gray-100 p-2 block md:table-cell">Id</th>
          <th className="bg-gray-100 p-2 block md:table-cell">Name</th>
          <th className="bg-gray-100 p-2 block md:table-cell">Specialization</th>
         
        </tr>
      </thead>
      <tbody className="block md:table-row-group">
        {Doctors.map((doctor) => (
          <tr className="border-b border-gray-300 block md:table-row text-center hover:bg-gray-100 cursor-pointer">
          <td className="p-2 block md:table-cell">{doctor.id}</td>
          <td className="p-2 block md:table-cell">{doctor.name}</td>
          <td className="p-2 block md:table-cell">{doctor.specialty}</td>
          </tr>
        ))}
      </tbody>
    </table>
    
  </CardContent>
</Card>
);

export default DoctorList;
