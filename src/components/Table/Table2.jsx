import { useEffect, useState } from "react";
import { LuPencilLine } from "react-icons/lu";
import Searchsvg from "../../assets/material-symbols_search.svg";

import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";
import { format } from "date-fns";
import Loding from "../Loding/Loding";

import "../Home.css";
import { Link } from "react-router-dom";
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { FaEyeSlash } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

const Table2 = () => {
  const [valueinput, setvalueinput] = useState("");
  const [viewedItems, setViewedItems] = useState([]);
  const [data, setdata] = useState([]);
  //const [currentPage, setCurrentPage] = useState(1);
  //const [recordsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  const handleView = (id) => {
    if (viewedItems.includes(id)) {
      // Item already viewed, remove it from viewedItems
      setViewedItems((prevViewedItems) =>
        prevViewedItems.filter((item) => item !== id)
      );
    } else {
      // Item not viewed, add it to viewedItems
      setViewedItems((prevViewedItems) => [...prevViewedItems, id]);
    }
  };

  /*const deletedAt = async (id, customerId) => {
    const confirmDelete = window.confirm(`Do you really want to delete the record with ID ${customerId}?`);

    if (confirmDelete) {
      await axios.delete(
        `https://project-rof.vercel.app/api/customers/delete/${id}`
      );
      fetchData(); // Refresh data after deletion
    }
  };*/
  const getData1 = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://project-rof.vercel.app/api/channels`
      );
      setdata(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  console.log(data);
  useEffect(() => {
    getData1();
  }, []);

  /*const fetchData = async () => {
    setLoading(true)
    const res = await axios.get(
      ` https://project-rof.vercel.app/api/customers/fetch-all`
    );
    setdata(res.data);
    setLoading(false)
  };*/

  // Data Time
  const DateupdatedAt = (DateupdatedAt) => {
    const formattedDate = format(new Date(DateupdatedAt), "dd MMM | hh:mm a");
    return formattedDate;
  };

  const ResponseAt = (DateupdatedAt) => {
    const formattedDate = format(new Date(DateupdatedAt), "hh:mm a");
    return formattedDate;
  };

  return (
    <div className="arrowss">
      {loading ? (
        <Loding />
      ) : (
        <div
          style={{ gap: "10px" }}
          className="Tab3 p-4 overflow-x-auto flex flex-col gap-9 bg-custom-bg h-screen;
 ">
          {/* bg: #F7F3E8 */}
          <div
            style={{ gap: "20px", paddingLeft: "0px" }}
            className="p-4 overflow-x-auto flex flex-col gap-9 bg-custom-bg;
 ">
            <h1
              className="font-bold flex items-center gap-1"
              style={{
                fontFamily: "Poppins",
                fontSize: "24px",
                fontWeight: "500",
              }}>
              Home
              <IoIosArrowForward style={{ color: "#1C1B1F" }} />
              <span
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "24px",
                }}
                className="font-medium">
                {/* Direct Visitors */}
                Channel Partners
              </span>
            </h1>

            <div className="flex flex-row items-center justify-start">
              <div className="flex justify-start items-center w-[50%] lg:block relative lg:w-[36rem] rounded-full  mr-96 ">
                <input
                  className="w-full py-2 px-12 rounded-full "
                  style={{
                    border: "1px solid #3D2314",
                    boxShadow: " 0px 0px 4px 0px #00000040",
                  }}
                  type="text"
                  value={valueinput}
                  onChange={(e) => setvalueinput(e.target.value)}
                  placeholder="Search"
                />
                <img
                  style={{ top: "0.6rem" }}
                  src={Searchsvg}
                  alt="Search"
                  className="absolute  left-4"
                />
              </div>
            </div>
          </div>
          <div className="outer-wrapper">
            <div className="table-wrapper" style={{ width: "999px" }}>
              {data.length !== 0 ? (
                <table
                  className="min-w-full bg-white"
                  style={{ boxShadow: " 0px 0px 4px 0px #00000040" }}>
                  <thead>
                    <tr className="text-[9px] lg:text-[15px] text-left  bg-[#E8E8E8]">
                      <th
                        style={{
                          fontFamily: "Manrope",
                          fontSize: "12px",
                          fontWeight: "500",
                          lineHeight: "16.39px",
                          textAlign: "left",
                          paddingLeft: "7px",
                          width: "65px",
                          padding: "5px",
                        }}>
                        {/* Date */}
                        Serial No
                      </th>
                      <th
                        className="text-center"
                        style={{
                          fontFamily: "Manrope",
                          fontSize: "12px",
                          fontWeight: "500",
                          lineHeight: "16.39px",
                          textAlign: "center",
                          padding: "5spx",
                          width: "180px",
                        }}>
                        {/* Response Time */}
                        Channel ID
                      </th>
                      <th
                        className="border-b text-center"
                        style={{
                          fontFamily: "Manrope",
                          fontSize: "12px",
                          fontWeight: "500",
                          lineHeight: "16.39px",
                          textAlign: "center",
                          padding: "5px",
                          width: "253px",
                        }}>
                        {/* Meeting Duration */}
                        List of Channel Name
                      </th>
                      <th
                        className="border-b text-center"
                        style={{
                          fontFamily: "Manrope",
                          fontSize: "12px",
                          fontWeight: "500",
                          lineHeight: "16.39px",
                          textAlign: "center",
                          width: "253px",
                        }}>
                        {/* Customer Name */}Email
                      </th>
                      <th
                        className="border-b text-center"
                        style={{
                          fontFamily: "Manrope",
                          fontSize: "12px",
                          fontWeight: "500",
                          lineHeight: "16.39px",
                          textAlign: "center",
                          padding: "5px",
                          width: "109px",
                        }}>
                        Phone No
                      </th>
                      <th
                        className="border-b"
                        style={{
                          fontFamily: "Manrope",
                          fontSize: "12px",
                          fontWeight: "500",
                          lineHeight: "16.39px",
                          textAlign: "center",
                          padding: "5px",
                          width: "170px",
                        }}>
                        Address
                      </th>
                      <th
                        className="border-b text-center"
                        style={{
                          fontFamily: "Manrope",
                          fontSize: "12px",
                          fontWeight: "500",
                          lineHeight: "16.39px",
                          textAlign: "center",
                          padding: "5px",
                          width: "65px",
                        }}></th>
                    </tr>
                  </thead>

                  <tbody>
                    {data
                      .filter(({ name }) =>
                        name.toLowerCase().includes(valueinput.toLowerCase())
                      )
                      .map((visitor, index) => (
                        <tr
                          style={{ paddingLeft: "5px" }}
                          className="py-1 border-b text-[9px] lg:text-[14px]  "
                          key={index}>
                          {/* <td className="p-2">{index + 1}</td> */}
                          <td style={{ paddingLeft: "5px" }}>
                            {/* {DateupdatedAt(visitor.updatedAt)} */}
                            <td className="py-3  ml-6 text-center flex items-center ">
                              {index + 1}
                            </td>
                          </td>

                          <td className="py-3 border-b text-center">
                            {/* {ResponseAt(visitor.updatedAt)} */}
                            <Link
                              style={{
                                fontFamily: "Manrope",
                                fontSize: "14px",
                                fontWeight: "700",
                                lineHeight: "19.12px",
                                textAlign: "left",
                                color: "#000AFF",
                                textDecoration: "underline",
                              }}>
                              {visitor.channelID}
                            </Link>
                          </td>

                          <Link to="/overseas">
                            <td className="py-3  text-center flex items-center justify-center">
                              <FaCircle className="mr-2 text-gray-500 " />
                              <span>{visitor.name} </span>
                            </td>
                          </Link>

                          <td className="  py-3 border-b text-center">
                            454/Big wig, Civil Lines
                          </td>

                          <td className=" py-3 border-b text-center  ">
                            {visitor.email}
                          </td>

                          <td className="  py-3 border-b text-center">
                            {visitor.phone}
                          </td>

                          <td className="  py-3 border-b text-center">
                            {visitor.address}
                          </td>

                          <td className="py-3 text-center px-3">
                            <LuEye
                              onClick={() => handleView(visitor._id)}
                              style={{
                                cursor: "pointer",
                                fontSize: "18px",
                                color: "#00000",
                              }}
                            />
                            {/* {viewedItems.includes(visitor._id) && <span className=""><LuEyeOff /></span>} */}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              ) : (
                <p> No records founds...!</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table2;
