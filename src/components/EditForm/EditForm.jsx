import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

import "../Home.css";
import { Link } from 'react-router-dom';




const FormEdit = () => {
 
    return (
    <>
    <div>
        <div className="flex flex-wrap ">
          <div className="ml-8 mt-8">
          <h1
              className="font-bold flex items-center gap-1"
              style={{
                fontFamily: "Poppins",
                fontSize: "24px",
                fontWeight: "500",
              }}>
              Home
              <IoIosArrowForward style={{ color: "#1C1B1F" }} />
              <Link to="/Direct_Visitors">
              <span
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "24px",
                }}
                className="font-medium">
                Direct Visitors
              </span>
              </Link>
           
              <IoIosArrowForward style={{ color: "#1C1B1F" }} />
              <span
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "24px",
                }}
                className="font-medium">
                Customer ID
              </span>
            </h1>
          </div>
          <div className="lg:ml-[710px] mt-5" >
            <button 
              className="flex lg:px-8 lg:py-4 bg-[#3D2314] lg:relative lg:top-0 text-white rounded-full"
            //   onClick={handleEdit}
            >
              <h4 className="w-[17px] h-[17px] lg:mt-1 lg:relative lg:right-2 gap-2">
                <FaRegEdit />
              </h4>
              <p className="text-[16px]">Edit Details</p>
            </button>
          </div>
        </div>
        <main className="flex flex-wrap gap-5 lg:ml-8 lg:mt-10">
          <div
            className="lg:w-[695px] lg:h-[683px] bg-[#FFFFFF] p-[24px] rounded-2xl mb-6 lg:mb-0 lg:mr-4"
            style={{ borderRadius: "24px" ,boxShadow: '0px 0px 6.7px 0px #632E04'
            }}
          >
            <h2
              className="text-[20px] text-center font-[Manrope] mb-4"
              style={{ fontWeight: "700" }}
            >
              Customer Details
            </h2>
            <form>
              <div className="form-compont">
                <div>
                  <div className="flex flex-wrap gap-[40px]">
                    <div>
                      <label
                        htmlFor="first_name"
                        className="block text-[#000000] text-[16px] font-[Manrope]"
                        style={{ fontWeight: "500" }}
                      >
                        Customer Name
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        className="lg:w-[393px] lg:h-[47px] p-2 border-[2px] border-[#3D2314] rounded-lg mt-1"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[#000000] text-[16px] font-[Manrope]"
                      >
                        Phone number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="lg:w-[214px] lg:h-[47px] p-2 border-[2px] border-[#3D2314] rounded-lg mt-1"
                        placeholder="9425846894"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        required
                      />
                    </div>
                  </div>
                  <div className="lg:mt-1">
                    <label
                      htmlFor="email"
                      className="block text-[#000000] text-[16px] font-[Manrope]"
                    >
                      Email ID
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="lg:w-[393px] lg:h-[47px] p-2 border-[2px] border-[#3D2314] rounded-lg mt-1"
                      placeholder="johndoe@gmail.com"
                      required
                    />
                  </div>
                </div>

                <div className="mt-1">
                  <div className="flex flex-wrap gap-[40px]">
                    <div>
                      <label
                        htmlFor="Project A"
                        className="block text-[#000000] text-[16px] font-[Manrope]"
                      >
                        Project
                      </label>
                      <input
                        type="text"
                        id="Project A"
                        className="lg:w-[393px] lg:h-[47px] p-2 border-[2px] border-[#3D2314] rounded-lg mt-1"
                        placeholder="Project A"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="Customer ID"
                        className="block text-[#000000] text-[16px] font-[Manrope]"
                      >
                        Customer ID
                      </label>
                      <input
                      readOnly
                        type="text"
                        id="Customer ID"
                        className="lg:w-[214px] lg:h-[47px] p-2 border-[2px] border-[#3D2314] rounded-lg mt-1"
                        placeholder="ROF0001"
                        required
                      />
                    </div>
                  </div>
                  <div className="lg:mt-1">
                    <label
                      htmlFor="attendant"
                      className="block text-[#000000] text-[16px] font-[Manrope]"
                      style={{ fontWeight: "500" }}
                    >
                      Attendant
                    </label>
                    <input
                      type="text"
                      id="attendant"
                      className="lg:w-[393px] lg:h-[47px] p-2 border-[2px] border-[#3D2314] rounded-lg mt-1"
                      placeholder="Samyak Gandhi"
                      required
                    />
                  </div>
                </div>

                <div className="lg:flex lg:flex-wrap gap-[24px] lg:mt-1">
                  <div>
                    <label
                      className="block text-[#000000] text-[16px] font-[Manrope]"
                      style={{ fontWeight: "500" }}
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      className="lg:w-[149px] lg:h-[47px] p-2 border-[2px] border-[#3D2314] rounded-lg mt-1"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-[#000000] text-[16px] font-[Manrope]"
                      style={{ fontWeight: "500" }}
                    >
                      Response Time
                    </label>
                    <input
                      type="time"
                      className="lg:w-[149px] lg:h-[47px] p-2 border-[2px] border-[#3D2314] rounded-lg mt-1"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-[#000000] text-[16px] font-[Manrope]"
                      style={{ fontWeight: "500" }}
                    >
                      Meeting Duration
                    </label>
                    <input
                      type="time"
                      className="lg:w-[149px] lg:h-[47px] p-2 border-[2px] border-[#3D2314] rounded-lg mt-1"
                    />
                  </div>
                </div>

                <div className="textarear-comp">
                  <div className="mt-1">
                    <label
                      className="block text-[#000000] text-[16px] font-[Manrope]"
                      style={{ fontWeight: "500" }}
                    >
                      Executive Notes
                    </label>
                    <textarea className="lg:w-[647px] lg:h-[100px] border-[2px] border-[#3D2314] rounded-lg mt-1"></textarea>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div style={{
            boxShadow:' 0px 0px 6.7px 0px #632E04'
          }} className="lg:w-[555px] lg:h-[683px] bg-[#FFFFFF] p-[8px] rounded-2xl">
            <div className="mt-4">
              <h2
                className="text-center mb-4 text-[#000000] text-[20px] font-[Manrope]"
                style={{ fontWeight: "700" }}
              >
                Customer Activity Log
              </h2>
            </div>
            <table className="w-full text-leftm ">
              <thead className="">
                <tr className=" text-[#FFFFFF]">
                  <th
                    className="border-b p-2  bg-[#3D2314] "
                    style={{ fontSize: "14px", fontWeight: "400" }}
                  >
                    Serial No
                  </th>
                  <th
                    className="border-b p-2 bg-[#3D2314]"
                    style={{ fontSize: "14px", fontWeight: "400" }}
                  >
                    Date
                  </th>
                  <th
                    className="border-b p-2 bg-[#3D2314]"
                    style={{ fontSize: "14px", fontWeight: "400" }}
                  >
                    Timing
                  </th>
                  <th
                    className="border-b p-2 bg-[#3D2314]"
                    style={{ fontSize: "14px", fontWeight: "400" }}
                  >
                    Project
                  </th>
                  <th
                    className="border-b p-2 bg-[#3D2314]"
                    style={{ fontSize: "14px", fontWeight: "400" }}
                  >
                    Attendant
                  </th>
                </tr>
              </thead>
              <tbody
                className=" border-b p-2  text-[#000000] text-[16px]  font-[Manrope] "
                style={{ fontWeight: "500" }}
              >
                <tr>
                  <td className="border-b p-2 ">1</td>
                  <td className="border-b p-2 ">12/05/2024</td>
                  <td className="border-b p-2 ">08:24 AM</td>
                  <td className="border-b p-2 ">Project A</td>
                  <td className="border-b p-2 ">Samyak Gandhi</td>
                </tr>
                <tr>
                  <td className="border-b p-2">2</td>
                  <td className="border-b p-2">12/05/2024</td>
                  <td className="border-b p-2">08:24 AM</td>
                  <td className="border-b p-2">Project A</td>
                  <td className="border-b p-2">Samyak Gandhi</td>
                </tr>
                   {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    
    
    </>
  )
}

export default FormEdit;