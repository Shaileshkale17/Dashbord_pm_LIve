import { useEffect, useState } from "react";
import Searchsvg from "../../assets/material-symbols_search.svg";
import axios from "axios";
import { format } from "date-fns";
const Table = () => {
  const [valueinput, setvalueinput] = useState("");
  const [data, setdata] = useState([]);

  const deletedAt = async (id) => {
    const res = await axios.delete(
      `https://prodictivity-management-tool2.vercel.app/api/customers/delete/${id}`
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://prodictivity-management-tool2.vercel.app/api/customers/fetch-all`
      );
      setdata(res.data);
    };
    fetchData();
  }, [deletedAt]);

  // Data Time
  const DateupdatedAt = (DateupdatedAt) => {
    const formattedDate = format(DateupdatedAt, "dd MMM | hh:mm a");
    return formattedDate;
  };

  // Define the desired format

  return (
    <>
      {data.length === 0 ? (
        "Loding..."
      ) : (
        <div className="p-4 overflow-x-auto flex flex-col gap-9">
          <h1 className="font-bold ">
            Home / <span className="font-medium">Direct Visitors</span>
          </h1>

          <div className="flex flex-row items-center justify-center">
            <div className="flex justify-center items-center w-[50%] lg:block relative lg:w-[36rem] rounded-full">
              <input
                className="w-full py-2 px-12 rounded-full"
                style={{ border: "2px solid #3D2314" }}
                type="text"
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
              <tr className="text-[9px] lg:text-[15px] text-left">
                <th className="py-2 px-2 lg:px-4 border-b">Date</th>
                <th className="py-2 px-2 lg:px-4 border-b">CustomerID</th>
                <th className="py-2 px-2 lg:px-4 border-b">Full Name</th>
                <th className="py-2 px-2 lg:px-4 border-b">Email ID</th>
                <th className="py-2 px-2 lg:px-4 border-b">Mobile No</th>
                <th className="py-2 px-2 lg:px-4 border-b">Project Name</th>
                <th className="py-2 px-2 lg:px-4 border-b">Team</th>
                <th className="py-2 px-2 lg:px-4 border-b">Attendant</th>
                <th className="py-2 px-2 lg:px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter(({ name }) => {
                  return name.toLowerCase().includes(valueinput.toLowerCase());
                })
                .map((visitor, index) => (
                  <tr className="text-[9px] lg:text-[14px]" key={index}>
                    <td className="py-2 px-2 lg:px-4 border-b">
                      {DateupdatedAt(visitor.updatedAt)}
                    </td>
                    <td className="py-2 px-2 lg:px-4 border-b">
                      {visitor.customerId}
                    </td>
                    <td className="py-2 px-2 lg:px-4 border-b">
                      {visitor.name}
                    </td>
                    <td className="py-2 px-2 lg:px-4 border-b">
                      {visitor.email}
                    </td>
                    <td className="py-2 px-2 lg:px-4 border-b">
                      {visitor.mobile}
                    </td>
                    <td className="py-2 px-2 lg:px-4 border-b">
                      {visitor.projectName}
                    </td>
                    <td className="py-2 px-2 lg:px-4 border-b">
                      {visitor.team}
                    </td>
                    <td className="py-2 px-2 lg:px-4 border-b">
                      {visitor.attendant}
                    </td>
                    <td className="py-2 px-2 lg:px-4 border-b">
                      <button className="text-blue-600 mr-2">Edit</button>
                      <button
                        className="text-red-600"
                        onClick={() => deletedAt(visitor._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Table;
