import { useEffect, useState } from "react";
import Searchsvg from "../../assets/material-symbols_search.svg";
import axios from "axios";
import { format } from "date-fns";
import Loding from "../Loding/Loding";
import { PiNotePencilBold } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import "../Home.css";

const Table3 = () => {
  const [valueinput, setvalueinput] = useState("");
  const [data, setdata] = useState([]);
  //const [currentPage, setCurrentPage] = useState(1);
  //const [recordsPerPage] = useState(10);

  

  /*const fetchData = async () => {
    const res = await axios.get(
      `https://project-rof.vercel.app/api/channels`
    );
    setdata(res.data);
    console(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);*/

  const getData1 = async () => {
    try {
      const res = await axios.get(
        `https://project-rof.vercel.app/api/channels`
      );
      console.log("getDate1", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData1();
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
        <div
          style={{ gap: "10px" }}
          className="Tab3 p-1 overflow-x-auto flex flex-col gap-9 bg-custom-bg h-screen;
        "
        >
          {/* bg: #F7F3E8 */}
          <div
            style={{ gap: "20px", paddingTop: "30px" }}
            className="p-4 overflow-x-auto flex flex-col gap-9 bg-custom-bg;
        "
          >
            <h1
              className="font-bold flex items-center gap-1"
              style={{
                fontFamily: "Poppins",
                fontSize: "24px",
                fontWeight: "500",
              }}
            >
              Home
              <IoIosArrowForward style={{ color: "#1C1B1F" }} />
              <Link to="/Channel_Partners">

              <span
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "24px",
                }}
                className="font-medium"
              >
                Channel Visitors
              </span>

              </Link>
            
              <IoIosArrowForward style={{ color: "#1C1B1F" }} />
              <span
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "24px",
                }}
                className="font-medium"
              >
                Rainbow Overseas
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
                  className="absolute left-4"
                />
              </div>
            </div>
            <div className="outer-wrapper">
              <div className="table-wrapper">
                <table
                  className="min-w-full bg-white"
                  style={{ boxShadow: " 0px 0px 4px 0px #00000040" }}
                >
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
                          padding: "5px",
                          width:'65px'
                        }}
                      >
                        Serial No
                      </th>
                      <th
                        style={{
                          fontFamily: "Manrope",
                          fontSize: "12px",
                          fontWeight: "500",
                          lineHeight: "16.39px",
                          textAlign: "center",
                          paddingLeft: "7px",
                          padding: "5px",
                          width:'149px'

                        }}
                      >
                        Date
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
                          width:'181px'

                        }}
                      >
                        Customer Name
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
                          width:'145px'

                        }}
                      >
                        Last 4 Digit of Mobile No
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
                          width:'155px'

                        }}
                      >
                      List of Channel Partners
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
                          width:'109px'


                        }}
                      >
                        Agent Phone No
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
                          width:'93px'

                        }}
                      >
                        Project
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
                          width:'164px'

                        }}
                      >
                        Attendant
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
                          width:'42px'

                        }}
                      >
                        Edit
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
                          width:'102px'


                        }}
                      >
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr className="text-[9px] lg:text-[14px] " key={item.id}>
                        <td
                          className="py-3 ml-6 text-center flex items-center"
                          style={{ paddingLeft: "5px", textAlign:'center' }}
                        >
                          {index + 1}
                        </td>
                        <td
                          className="py-1 border-b"
                          style={{ paddingLeft: "5px", textAlign:'center' }}
                        >
                          {/* {DateupdatedAt(visitor.updatedAt)} */}

                          26 June | 5:33 PM
                        </td>

                        <td className="py-1 border-b text-center">
                          {/* {visitor.name} */}
                                       Anand Jaiswal
                          <Link
                            style={{
                              fontFamily: "Manrope",
                              fontSize: "14px",
                              fontWeight: "700",
                              lineHeight: "19.12px",
                              textAlign: "left",
                              color: "#000AFF",
                              textDecoration: "underline",
                            }}
                          >
                            {/* {visitor.customerId}  */}
                          </Link>
                        </td>

                        <td className="py-1 border-b text-center">
                          {/* {visitor.name} */} 1234
                        </td>
                        <td className="py-1 border-b text-center">
                          Sameer Choudhary
                        </td>
                        <td className="py-1 border-b text-center">
                          8484815614
                        </td>
                        <td className="py-1 border-b text-center">
                          {/* {visitor.mobileS} */}Project A
                        </td>

                        <td className="py-1 border-b text-center">
                          {/* {visitor.projectName} */} Samyak Gandhi
                        </td>
                     

                        <td className="py-1 px-3 border-b text-center">
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                          <PiNotePencilBold
                            onClick={() => handleEdit(visitor._id)}
                            style={{
                              cursor: "pointer",
                              fontSize: "18px",
                              color: "#632E04",
                            }}
                          />
                          </div>
                          
                        </td>

                        <td className="py-1 px-3 border-b text-center">
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                          <RiDeleteBin6Line
                            onClick={() => deletedAt(visitor._id)}
                            style={{
                              cursor: "pointer",
                              fontSize: "18px",
                              color: "#930000",
                            }}
                          />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          //{" "}
        </div>
      )}
    </>
  );
};

export default Table3;