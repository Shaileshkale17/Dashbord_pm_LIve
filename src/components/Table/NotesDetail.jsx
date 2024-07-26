import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { TbBrandTelegram } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";

import Searchsvg from "../../assets/material-symbols_search.svg";
import close from "../../assets/add_notes (white).png";
import info from "../../assets/carbon_customer.png";
import info2 from '../../assets/hugeicons_manager.png';
import info3 from '../../assets/eos-icons_admin-outlined.png';
import '../Home.css';

const TabBar = ({ activeTab, setActiveTab }) => (
  <div className="flex mb-4 justify-center fab">
    {["All", "Client", "Manger", "Super Admin"].map((tab) => (
      <button
        key={tab}
        style={{ borderRadius: "24px 0px 0px 24px", borderRadius: "0px",fontFamily:'Manrope', }}
        className={` px-4 py-2 ${
          activeTab === tab
            ? "bg-[#3D2314] text-white"
            : "bg-white text-[#3D2314]"
        }`}
        onClick={() => setActiveTab(tab)}
      >
        {tab}
      </button>
    ))}
      
  </div>
);

function NotesDetails() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div>
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
              color:'black'
            }}
          >
            Home
            <IoIosArrowForward style={{ color: "black" }} />
            <span
              style={{
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "24px",
                color:'black'
              }}
              className="font-medium"
            >
             Notes
            </span>
          </h1>
        </div>
      <br />
      <div className="flex flex-row items-center justify-center">
        <div className="flex justify-start items-center w-[50%] lg:block relative lg:w-[36rem] rounded-full">
          <input
            className="w-full py-2 px-12 rounded-full "
            style={{
              width:'619px',
height: '48px',
fontFamily:'Manrope',
padding: '12px 24px 12px 48px',
gap: '24px',
borderRadius: '27px',
opacity: '0px',

              boxShadow: " 0px 0px 4px 0px #00000040",
            }}
            type="text"
            value=""
            placeholder="Search"
          />
          <img
            style={{ top: "0.8rem" }}
            src={Searchsvg}
            alt="Search"
            className="absolute left-4"
          />
        </div>
        <div style={{ position: "absolute", right: "145px" }}>
          <button
            className="flex bg-[#3D2314] text-white w-[162px] h-[48px] gap-[12px]"
            style={{ borderRadius: "26px", padding: "12px 24px",fontFamily:'Manrope', }}
          >
            <img src={close} />
            <span style={{fontFamily:'Manrope',}}>add Notes </span>
          </button>
        </div>
      </div>

      <br />
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <br />
      <div className="Cards gap-4 flex flex-wrap px-7 cardT">
        
          <div className="flex flex-wrap gap-10 ">
            <div className=" bg-white rounded-lg shadow-md p-4 w-[287px]">
              <div className="flex justify-around items-center mb-4">
                <div className="">
                  <img src={info} className="text-[60px]" />
                </div>
                <div>
                  <h2
                    style={{ fontWeight: "700", textAlign: "justify" ,fontFamily:'Manrope',}}
                    className="text-[14px] text-center text-[#3D2314]"
                  >
                    Anand Jaiswal
                  </h2>
                  <br />
                  <div className="flex flex-wrap">
                    <div>
                      <p
                        className="text-[#3D2314] text-[14px]"
                        style={{ textAlign: "justify",fontFamily:'Manrope', }}
                      >
                        24 June | 12:50 am
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="flex justify-between mb-4 gap-[10px]">
                <p
                  style={{
                    fontSize: "12px",
                    lineHeight: "16.39px",
                    fontWeight: "400",
                    fontFamily: "Manrope",
                  }}
                >
                  Discussed budget and preferred location. Client is interested
                  in a 2-bedroom condo in a central area with easy access to
                  public transportation. Suggested scheduling a property tour
                  for next week.
                </p>
              </div>
            </div>
            <div className=" bg-white rounded-lg shadow-md p-4 w-[287px]">
              <div className="flex justify-around items-center mb-4">
                <div className="">
                  <img src={info} className="text-[60px]" />
                </div>
                <div>
                  <h2
                    style={{ fontWeight: "700", textAlign: "justify",fontFamily:'Manrope', }}
                    className="text-[14px] text-center text-[#3D2314]"
                  >
                    Ramesh Kulkarni
                  </h2>
                  <br />
                  <div className="flex flex-wrap">
                    <div>
                      <p
                        className="text-[#3D2314] text-[14px]"
                        style={{ textAlign: "justify",fontFamily:'Manrope', }}
                      >
                        24 June | 12:50 am
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="flex justify-between mb-4 gap-[10px]">
                <p
                  style={{
                    fontSize: "12px",
                    lineHeight: "16.39px",
                    fontWeight: "400",
                    fontFamily: "Manrope",
                  }}
                >
                 Client expressed interest in [Property Name]. Followed up on email with additional details and brochure. Awaiting response.
                </p>
              </div>
            </div>
            <div className=" bg-white rounded-lg shadow-md p-4 w-[287px]">
              <div className="flex justify-around items-center mb-4">
                <div className="">
                  <img src={info2} className="text-[60px]" />
                </div>
                <div>
                  <h2
                    style={{ fontWeight: "700", textAlign: "justify",fontFamily:'Manrope', }}
                    className="text-[14px] text-center text-[#3D2314]"
                  >
                    Manager
                  </h2>
                  <br />
                  <div className="flex flex-wrap">
                    <div>
                      <p
                        className="text-[#3D2314] text-[14px]"
                        style={{ textAlign: "justify" ,fontFamily:'Manrope',}}
                      >
                        24 June | 12:50 am
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="flex justify-between mb-4 gap-[10px]">
                <p
                  style={{
                    fontSize: "12px",
                    lineHeight: "16.39px",
                    fontWeight: "400",
                    fontFamily: "Manrope",
                  }}
                >
                  Discussed Riyaana Dey’s  financing options and need for pre-approval assistance.
                </p>
              </div>
            </div>
            <div className=" bg-white rounded-lg shadow-md p-4 w-[287px]">
              <div className="flex justify-around items-center mb-4">
                <div className="">
                  <img src={info3} className="text-[60px]" />
                </div>
                <div>
                  <h2
                    style={{ fontWeight: "700", textAlign: "justify",fontFamily:'Manrope', }}
                    className="text-[14px] text-center text-[#3D2314]"
                  >
                    Superadmin
                    
                  </h2>
                  <br />
                  <div className="flex flex-wrap">
                    <div>
                      <p
                        className="text-[#3D2314] text-[14px]"
                        style={{ textAlign: "justify" ,fontFamily:'Manrope',}}
                      >
                        24 June | 12:50 am
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="flex justify-between mb-4 gap-[10px]">
                <p
                  style={{
                    fontSize: "12px",
                    lineHeight: "16.39px",
                    fontWeight: "400",
                    fontFamily: "Manrope",
                  }}
                >
                 Confirmation on available closing dates for shortlisted properties.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-10">
          <div className=" bg-white rounded-lg shadow-md p-4  w-[287px]">
              <div className="flex justify-around items-center mb-4">
                <div className="">
                  <img src={info} className="text-[60px]" />
                </div>
                <div>
                  <h2
                    style={{ fontWeight: "700", textAlign: "justify",fontFamily:'Manrope', }}
                    className="text-[14px] text-center text-[#3D2314]"
                  >
                    Sharukh
                  </h2>
                  <br />
                  <div className="flex flex-wrap">
                    <div>
                      <p
                        className="text-[#3D2314] text-[14px]"
                        style={{ textAlign: "justify" ,fontFamily:'Manrope',}}
                      >
                        24 June | 12:50 am
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="flex justify-between mb-4 gap-[10px]">
                <p
                  style={{
                    fontSize: "12px",
                    lineHeight: "16.39px",
                    fontWeight: "400",
                    fontFamily: "Manrope",
                  }}
                >
                  Discussed budget and preferred location. Client is interested
                  in a 2-bedroom condo in a central area with easy access to
                  public transportation. Suggested scheduling a property tour
                  for next week.
                </p>
              </div>
            </div>
            <div className=" bg-white rounded-lg shadow-md p-4  w-[287px]">
              <div className="flex justify-around items-center mb-4">
                <div className="">
                  <img src={info} className="text-[60px]" />
                </div>
                <div>
                  <h2
                    style={{ fontWeight: "700", textAlign: "justify",fontFamily:'Manrope', }}
                    className="text-[14px] text-center text-[#3D2314]"
                  >
                    Rasika Pandey
                  </h2>
                  <br />
                  <div className="flex flex-wrap">
                    <div>
                      <p
                        className="text-[#3D2314] text-[14px]"
                        style={{ textAlign: "justify" ,fontFamily:'Manrope',}}
                      >
                        24 June | 12:50 am
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="flex justify-between mb-4 gap-[10px]">
                <p
                  style={{
                    fontSize: "12px",
                    lineHeight: "16.39px",
                    fontWeight: "400",
                    fontFamily: "Manrope",
                  }}
                >
                  Discussed budget and preferred location. Client is interested
                  in a 2-bedroom condo in a central area with easy access to
                  public transportation. Suggested scheduling a property tour
                  for next week.
                </p>
              </div>
            </div>
            <div className=" bg-white rounded-lg shadow-md p-4  w-[287px]">
              <div className="flex justify-around items-center mb-4">
                <div className="">
                  <img src={info} className="text-[60px]" />
                </div>
                <div>
                  <h2
                    style={{ fontWeight: "700", textAlign: "justify",fontFamily:'Manrope', }}
                    className="text-[14px] text-center text-[#3D2314]"
                  >
                    Riyaana Dey
                  </h2>
                  <br />
                  <div className="flex flex-wrap">
                    <div>
                      <p
                        className="text-[#3D2314] text-[14px]"
                        style={{ textAlign: "justify",fontFamily:'Manrope', }}
                      >
                        24 June | 12:50 am
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="flex justify-between mb-4 gap-[10px]">
                <p
                  style={{
                    fontSize: "12px",
                    lineHeight: "16.39px",
                    fontWeight: "400",
                    fontFamily: "Manrope",
                  }}
                >
                  Discussed budget and preferred location. Client is interested
                  in a 2-bedroom condo in a central area with easy access to
                  public transportation. Suggested scheduling a property tour
                  for next week.
                </p>
              </div>
            </div>
            <div className=" bg-white rounded-lg shadow-md p-4  w-[287px]">
              <div className="flex justify-around items-center mb-4">
                <div className="">
                  <img src={info} className="text-[60px]" />
                </div>
                <div>
                  <h2
                    style={{ fontWeight: "700", textAlign: "justify",fontFamily:'Manrope', }}
                    className="text-[14px] text-center text-[#3D2314]"
                  >
                    Prasad Fadnavis
                  </h2>
                  <br />
                  <div className="flex flex-wrap">
                    <div>
                      <p
                        className="text-[#3D2314] text-[14px]"
                        style={{ textAlign: "justify",fontFamily:'Manrope', }}
                      >
                        24 June | 12:50 am
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="flex justify-between mb-4 gap-[10px]">
                <p
                  style={{
                    fontSize: "12px",
                    lineHeight: "16.39px",
                    fontWeight: "400",
                    fontFamily: "Manrope",
                  }}
                >
                  Discussed budget and preferred location. Client is interested
                  in a 2-bedroom condo in a central area with easy access to
                  public transportation. Suggested scheduling a property tour
                  for next week.
                </p>
              </div>
            </div>
         
          </div>

          <div className="flex flex-wrap gap-10 ">
          <div className=" bg-white rounded-lg shadow-md p-4  w-[287px]">
              <div className="flex justify-around items-center mb-4">
                <div className="">
                  <img src={info} className="text-[60px]" />
                </div>
                <div>
                  <h2
                    style={{ fontWeight: "700", textAlign: "justify" ,fontFamily:'Manrope',}}
                    className="text-[14px] text-center text-[#3D2314]"
                  >
                    Sharukh
                  </h2>
                  <br />
                  <div className="flex flex-wrap">
                    <div>
                      <p
                        className="text-[#3D2314] text-[14px]"
                        style={{ textAlign: "justify",fontFamily:'Manrope', }}
                      >
                        24 June | 12:50 am
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="flex justify-between mb-4 gap-[10px]">
                <p
                  style={{
                    fontSize: "12px",
                    lineHeight: "16.39px",
                    fontWeight: "400",
                    fontFamily: "Manrope",
                  }}
                >
                  Discussed budget and preferred location. Client is interested
                  in a 2-bedroom condo in a central area with easy access to
                  public transportation. Suggested scheduling a property tour
                  for next week.
                </p>
              </div>
            </div>
            <div className=" bg-white rounded-lg shadow-md p-4  w-[287px]">
              <div className="flex justify-around items-center mb-4">
                <div className="">
                  <img src={info} className="text-[60px]" />
                </div>
                <div>
                  <h2
                    style={{ fontWeight: "700", textAlign: "justify",fontFamily:'Manrope', }}
                    className="text-[14px] text-center text-[#3D2314]"
                  >
                    Rasika Pandey
                  </h2>
                  <br />
                  <div className="flex flex-wrap">
                    <div>
                      <p
                        className="text-[#3D2314] text-[14px]"
                        style={{ textAlign: "justify" ,fontFamily:'Manrope',}}
                      >
                        24 June | 12:50 am
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="flex justify-between mb-4 gap-[10px]">
                <p
                  style={{
                    fontSize: "12px",
                    lineHeight: "16.39px",
                    fontWeight: "400",
                    fontFamily: "Manrope",
                  }}
                >
                  Discussed budget and preferred location. Client is interested
                  in a 2-bedroom condo in a central area with easy access to
                  public transportation. Suggested scheduling a property tour
                  for next week.
                </p>
              </div>
            </div>
            <div className=" bg-white rounded-lg shadow-md p-4  w-[287px]">
              <div className="flex justify-around items-center mb-4">
                <div className="">
                  <img src={info} className="text-[60px]" />
                </div>
                <div>
                  <h2
                    style={{ fontWeight: "700", textAlign: "justify",fontFamily:'Manrope', }}
                    className="text-[14px] text-center text-[#3D2314]"
                  >
                    Riyaana Dey
                  </h2>
                  <br />
                  <div className="flex flex-wrap">
                    <div>
                      <p
                        className="text-[#3D2314] text-[14px]"
                        style={{ textAlign: "justify" ,fontFamily:'Manrope',}}
                      >
                        24 June | 12:50 am
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="flex justify-between mb-4 gap-[10px]">
                <p
                  style={{
                    fontSize: "12px",
                    lineHeight: "16.39px",
                    fontWeight: "400",
                    fontFamily: "Manrope",
                  }}
                >
                  Discussed budget and preferred location. Client is interested
                  in a 2-bedroom condo in a central area with easy access to
                  public transportation. Suggested scheduling a property tour
                  for next week.
                </p>
              </div>
            </div>
            <div className=" bg-white rounded-lg shadow-md p-4  w-[287px]">
              <div className="flex justify-around items-center mb-4">
                <div className="">
                  <img src={info} className="text-[60px]" />
                </div>
                <div>
                  <h2
                    style={{ fontWeight: "700", textAlign: "justify",fontFamily:'Manrope', }}
                    className="text-[14px] text-center text-[#3D2314]"
                  >
                    Prasad Fadnavis
                  </h2>
                  <br />
                  <div className="flex flex-wrap">
                    <div>
                      <p
                        className="text-[#3D2314] text-[14px]"
                        style={{ textAlign: "justify",fontFamily:'Manrope', }}
                      >
                        24 June | 12:50 am
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="flex justify-between mb-4 gap-[10px]">
                <p
                  style={{
                    fontSize: "12px",
                    lineHeight: "16.39px",
                    fontWeight: "400",
                    fontFamily: "Manrope",
                  }}
                >
                  Discussed budget and preferred location. Client is interested
                  in a 2-bedroom condo in a central area with easy access to
                  public transportation. Suggested scheduling a property tour
                  for next week.
                </p>
              </div>
            </div>
         
          </div>


          

          
        
      </div>
    </div>
  );
}

export default NotesDetails;
