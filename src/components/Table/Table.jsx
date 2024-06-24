import { useState } from "react";
import Searchsvg from "../../assets/material-symbols_search.svg";
const Table = () => {
  // const visitors = Array(5).fill({
  //   date: "26 Jun | 05:33 PM",
  //   customerId: "ROFC001",
  //   fullName: "Sameer Kashyap",
  //   email: "SameerK123@gmail.com",
  //   mobile: "+91 9254962485",
  //   project: "Project A",
  //   team: "Team A",
  //   attendant: "Somesh Reddy",
  // });

  const visitors = [
    {
      date: "26 Jun | 05:33 PM",
      customerId: "ROFC001",
      fullName: "Sameer Kashyap",
      email: "SameerK123@gmail.com",
      mobile: "+91 9254962485",
      project: "Project A",
      team: "Team A",
      attendant: "Somesh Reddy",
    },
    {
      date: "26 Jun | 05:33 PM",
      customerId: "ROFC002",
      fullName: "Sameer Kashyap",
      email: "SameerK123@gmail.com",
      mobile: "+91 9254962485",
      project: "Project A",
      team: "Team A",
      attendant: "Somesh Reddy",
    },
    {
      date: "26 Jun | 05:33 PM",
      customerId: "ROFC003",
      fullName: "Sameer Kashyap",
      email: "SameerK123@gmail.com",
      mobile: "+91 9254962485",
      project: "Project A",
      team: "Team A",
      attendant: "Somesh Reddy",
    },
    {
      date: "26 Jun | 05:33 PM",
      customerId: "ROFC004",
      fullName: "Sameer Kashyap",
      email: "SameerK123@gmail.com",
      mobile: "+91 9254962485",
      project: "Project A",
      team: "Team A",
      attendant: "Somesh Reddy",
    },
  ];

  const [valueinput, setvalueinput] = useState("");

  return (
    <div className="p-4 overflow-x-auto flex flex-col gap-9">
      <h1 className="font-bold mt-8">
        Home / <span className="font-medium">Direct Visitors</span>
      </h1>

      <div className="flex flex-row  items-center justify-center">
        <div className="relative w-[36rem] rounded-full">
          <input
            className="w-full py-2 px-12 rounded-full"
            style={{ border: "2px solid #3D2314" }}
            type="text"
            name=""
            id=""
            value={valueinput}
            onChange={(e) => setvalueinput(e.target.value)}
            placeholder="Search"
          />
          <img
            src={Searchsvg}
            alt="Searchsvg"
            className="absolute top-2 left-4"
          />
        </div>
      </div>

      <table className="min-w-full bg-white">
        <thead>
          <tr className="text-[15px] text-left">
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">CustomerID</th>
            <th className="py-2 px-4 border-b">Full Name</th>
            <th className="py-2 px-4 border-b">Email ID</th>
            <th className="py-2 px-4 border-b">Mobile No</th>
            <th className="py-2 px-4 border-b">Project</th>
            <th className="py-2 px-4 border-b">Team</th>
            <th className="py-2 px-4 border-b">Attendant</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {visitors
            .filter(({ customerId }) => {
              return customerId.indexOf(valueinput) >= 0;
            })
            .map((visitor, index) => (
              <tr className="text-[14px]" key={index}>
                <td className="py-2 px-4 border-b">{visitor.date}</td>
                <td className="py-2 px-4 border-b">{visitor.customerId}</td>
                <td className="py-2 px-4 border-b">{visitor.fullName}</td>
                <td className="py-2 px-4 border-b">{visitor.email}</td>
                <td className="py-2 px-4 border-b">{visitor.mobile}</td>
                <td className="py-2 px-4 border-b">{visitor.project}</td>
                <td className="py-2 px-4 border-b">{visitor.team}</td>
                <td className="py-2 px-4 border-b">{visitor.attendant}</td>
                <td className="py-2 px-4 border-b">
                  <button className="text-blue-600 mr-2">Edit</button>
                  <button className="text-red-600">Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
