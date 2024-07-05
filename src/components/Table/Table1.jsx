import { useEffect, useState } from "react";
import Searchsvg from "../../assets/material-symbols_search.svg";
import axios from "axios";
import { format } from "date-fns";
import Loding from "../Loding/Loding";
import pencil from "../../assets/pencil.png";
import deleteIcon from "../../assets/deleteIcon.png";
import arrow_forward_ios from "../../assets/arrow_forward_ios.png"

const Table1 = () => {
  const [valueinput, setvalueinput] = useState("");
  const [data, setdata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const deletedAt = async (id) => {
    await axios.delete(
      `https://prodictivity-management-tool2.vercel.app/api/customers/delete/${id}`
    );
    fetchData(); // Refresh data after deletion
  };

  const fetchData = async () => {
    const res = await axios.get(
      `https://prodictivity-management-tool2.vercel.app/api/customers/fetch-all`
    );
    setdata(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Data Time
  const DateupdatedAt = (DateupdatedAt) => {
    const formattedDate = format(new Date(DateupdatedAt), "dd MMM | hh:mm a");
    return formattedDate;
  };

  // Pagination Logic
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data
    .filter(({ name }) => name.toLowerCase().includes(valueinput.toLowerCase()))
    .slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(
    data.filter(({ name }) =>
      name.toLowerCase().includes(valueinput.toLowerCase())
    ).length / recordsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      {data.length === 0 ? (
        <Loding />
      ) : (
        <div className="p-4 overflow-x-auto flex flex-col gap-9 bg-custom-bg;
 ">
  {/* bg: #F7F3E8 */}
          <h1 className="font-bold flex items-center gap-1">
            Home<img src={arrow_forward_ios}/><span className="font-medium">Channel Visitors</span>
          </h1>

          <div className="flex flex-row items-center justify-start">
            <div className="flex justify-start items-center w-[50%] lg:block relative lg:w-[36rem] rounded-full  mr-96 ">
              <input
                className="w-full py-2 px-12 rounded-full "
                style={{ border: "2px solid #3D2314" }}
                type="text"
                value={valueinput}
                onChange={(e) => setvalueinput(e.target.value)}
                placeholder="Search"
              />
              <img
                src={Searchsvg}
                alt="Search"
                className="absolute top-2 left-4"
              />
            </div>
          </div>
          <table className="min-w-full bg-white">
            <thead>
              <tr className="text-[9px] lg:text-[15px] text-left  bg-[#E8E8E8]" >
                <th className="py-2 px-2 lg:px-4 border-b">Date</th>
                <th className="py-2 px-2 lg:px-4 border-b text-center">Response Time</th>
                <th className="py-2 px-2 lg:px-4 border-b text-center">Meeting Duration</th>
                <th className="py-2 px-2 lg:px-4 border-b text-center">Channel Partner ID</th>
                <th className="py-2 px-2 lg:px-4 border-b text-center">Channel Name</th>
                <th className="py-2 px-2 lg:px-4 border-b text-center">Channel Partner Name</th>
                <th className="py-2 px-2 lg:px-4 border-b text-center">Customer Name</th>
                <th className="py-2 px-2 lg:px-4 border-b">Last 4 Digit</th>
                <th className="py-2 px-2 lg:px-4 border-b">Project</th>
                <th className="py-2 px-2 lg:px-4 border-b text-center">Attendant</th>
                <th className="py-2 px-2 lg:px-4 border-b"></th>
              </tr>
            </thead>
            <tbody>
              {currentRecords.map((visitor, index) => (
                <tr className="text-[9px] lg:text-[14px]" key={index}>
                  <td className="py-2 px-2 lg:px-4 border-b ">
                    {DateupdatedAt(visitor.updatedAt)}
                  </td>
                  <td className="py-2 px-2 lg:px-4 border-b text-center">
                    {/* {visitor.customerId} */}
                    00:00
                  </td>
                  <td className="py-2 px-2 lg:px-4 border-b text-center">
                    00:00
                  </td>
                  <td className="py-2 px-2 lg:px-4 border-b text-center">
                  {/* {visitor.name} */}
                  
                  CHROF0001
                    
                  </td>
                  <td className="py-2 px-2 lg:px-4 border-b text-center">
                  {/* {visitor.name} */}
                  Rainbow Oversies pvt ltd
                  </td>
                  <td className="py-2 px-2 lg:px-4 border-b text-center">
                  {/* {visitor.customerId} */}
                  Sameer Chaudhary
                  
                    
                  </td>
                  <td className="py-2 px-2 lg:px-4 border-b text-center">
                    Anand Jaiswal
                    </td>
                  <td className="py-2 px-2 lg:px-4 border-b text-center">
                    {/* {visitor.mobileS} */}1594
                    </td>

                  <td className="py-2 px-2 lg:px-4 border-b text-center">
                    {visitor.projectName}
                    </td>
                  <td className="py-2 px-2 lg:px-4 border-b text-center">
                    {visitor.attendantName}
                    </td>
                  
                  <td className="py-2 px-2 lg:px-4 border-b flex gap-2">
                    <img
                      src={pencil}
                      alt="Edit"
                      className="cursor-pointer"
                      onClick={() => handleEdit(visitor._id)}
                    />
                    <br/>
                    <img
                      src={deleteIcon}
                      alt="Delete"
                      className="cursor-pointer"
                      onClick={() => deletedAt(visitor._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
                {/* <div className="flex justify-end items-center  gap-4">
                  <span>
                   Page {currentPage}-{totalPages} of {totalPages}
                  </span> */}
            <div>
              {/* <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="py-2 px-4 text-[#632E04] rounded">
                &lt;
              </button> */}
              {/* <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="py-2 px-4 text-[#632E04] rounded">
                &gt;
              </button> */}
            </div>
          </div>
        // </div>
      )}
    </>
  );
};

export default Table1;





























