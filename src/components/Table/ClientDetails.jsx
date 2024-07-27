import React from "react";
import '../Home.css';
import { IoIosArrowForward } from "react-icons/io";
import Searchsvg from "../../assets/material-symbols_search.svg";
import { CgNotes } from "react-icons/cg";
import { IoCheckmarkOutline } from "react-icons/io5";
import close from '../../assets/close.png';
function ClientDetails() {
  return (
    <>
      <div>
        <div
          style={{ gap: "20px", paddingTop: "30px",  fontFamily: 'Manrope'}}
          className="p-4 overflow-x-auto flex flex-col gap-9 bg-custom-bg;
        "
        >
          <h1
            className="font-bold flex items-center gap-1 font-[Manrope]"
            style={{
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: "500",
            }}
          >
            Home
            <IoIosArrowForward style={{ color: "#1C1B1F" }} />
            <span
              style={{
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "24px",
              }}
              className="font-medium font-[Manrope]"
            >
              Clients
            </span>
          </h1>
        </div>
        <div className="flex flex-row items-center justify-center font-[Manrope]">
              <div className="flex justify-start items-center w-[50%] lg:block relative lg:w-[36rem] rounded-full">
                <input
                  className="w-full py-2 px-12 rounded-full "
                  style={{
                    
                    boxShadow: " 0px 0px 4px 0px #00000040",
                  }}
                  type="text"
                  value=""
                
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


<main className=" overflow-x-hidden overflow-y-auto p-6 font-[Manrope]">

        <div style={{textAlign:'-webkit-center'}} >
        <div className="wrapperF">
          <table className="w-[956px] h-[477px] bg-white shadow-md  overflow-hidden font-[Manrope]">
          
            <thead className="bg-[#D7D7D7] font-[Manrope]">
              <tr className="text-center text-[#4B4B4B] w-[171px]  h-[36px] font-[Manrope]">
                <th style={{
                          fontFamily: "Manrope",
                          fontSize: "12px",
                          fontWeight: "500",
                          lineHeight: "16.39px",
                          color: "#4B4B4B",
                        }} className="px-4 py-2 ">Date</th>
                <th style={{
                          fontFamily: "Manrope",
                          fontSize: "12px",
                          fontWeight: "500",
                          lineHeight: "16.39px",
                          color: "#4B4B4B",
                        }} className="px-4 py-2">Project Name</th>
                <th style={{
                          fontFamily: "Manrope",
                          fontSize: "12px",
                          fontWeight: "500",
                          lineHeight: "16.39px",
                          color: "#4B4B4B",
                        }} className="px-4 py-2">Client Name</th>
                <th style={{
                          fontFamily: "Manrope",
                          fontSize: "12px",
                          fontWeight: "500",
                          lineHeight: "16.39px",
                          color: "#4B4B4B",
                        }} className="px-4 py-2">Duration</th>
                <th style={{
                          fontFamily: "Manrope",
                          fontSize: "12px",
                          fontWeight: "500",
                          lineHeight: "16.39px",
                          color: "#4B4B4B",
                        }} className="px-4 py-2">Notes</th>
                <th style={{
                          fontFamily: "Manrope",
                          fontSize: "12px",
                          fontWeight: "500",
                          lineHeight: "16.39px",
                          color: "#4B4B4B",
                        }} className="px-4 py-2">Executive</th>
                <th style={{
                          fontFamily: "Manrope",
                          fontSize: "12px",
                          fontWeight: "500",
                          lineHeight: "16.39px",
                          color: "#4B4B4B",
                        }} className="px-4 py-2 ">Actions</th>
              </tr>
            </thead>
            
            <tbody className="font-[Manrope]">
              <tr className="text-[#5C5C5C] text-center">
                <td className="px-4 py-2 ">26 June | 5:33 PM</td>
                <td className="px-4 py-2 ">Project Alayas</td>
                <td className="px-4 py-2 ">Rajesh Choudhary</td>
                <td className="px-4 py-2 text-[#000000] " style={{fontWeight:'800'}}>00 : 00</td>
                <td className="px-4 py-2 r">
                  <div style={{textAlign:'-webkit-center'}}>
                    <CgNotes className="w-[20px] h-[22px] text-black " />
                  </div>
                </td>
                <td className="px-4 py-2">Executive</td>
                <td className="px-4 py-2 text-center" style={{textAlign:'-webkit-center'}}>
                  <IoCheckmarkOutline className="w-[24px] h-[24px] text-[#49DA31]" />
                </td>
              </tr>
              <tr className=" text-[#5C5C5C] text-center">
                <td className="px-4 py-2 ">26 June | 5:33 PM</td>
                <td className="px-4 py-2 ">Project Alayas</td>
                <td className="px-4 py-2 ">Rajesh Choudhary</td>
                <td className="px-4 py-2 text-[#000000] " style={{fontWeight:'800'}}>00 : 00</td>
                <td className="px-4 py-2 ">
                  <div style={{textAlign:'-webkit-center'}}>
                    <CgNotes className="w-[20px] h-[22px] text-black" />
                  </div>
                </td>
                <td className="px-4 py-2 ">Executive</td>
                <td className="px-4 py-2  " style={{textAlign:'-webkit-center'}}>
                  <IoCheckmarkOutline className="w-[24px] h-[24px] text-[#49DA31]" />
                </td>
              </tr>
              <tr className=" text-[#5C5C5C] text-center">
                <td className="px-4 py-2">26 June | 5:33 PM</td>
                <td className="px-4 py-2">Project Alayas</td>
                <td className="px-4 py-2">Rajesh Choudhary</td>
                <td className="px-4 py-2 text-[#000000]" style={{fontWeight:'800'}}>00 : 00</td>
                <td className="px-4 py-2">
                  <div style={{textAlign:'-webkit-center'}}>
                    <CgNotes className="w-[20px] h-[22px] text-black" />
                  </div>
                </td>
                <td className="px-4 py-2">Executive</td>
                <td className="px-4 py-2" style={{textAlign:'-webkit-center'}}>
                  <IoCheckmarkOutline className="w-[24px] h-[24px] text-[#49DA31]" />
                </td>
              </tr>
              <tr className=" text-[#5C5C5C] text-center">
                <td className="px-4 py-2">26 June | 5:33 PM</td>
                <td className="px-4 py-2">Project Alayas</td>
                <td className="px-4 py-2">Rajesh Choudhary</td>
                <td className="px-4 py-2 text-[#000000]" style={{fontWeight:'800'}}>00 : 00</td>
                <td className="px-4 py-2">
                  <div style={{textAlign:'-webkit-center'}}>
                    <CgNotes className="w-[20px] h-[22px] text-black" />
                  </div>
                </td>
                <td className="px-4 py-2">Executive</td>
                <td className="px-4 py-2" style={{textAlign:'-webkit-center'}}>
                  <img src={close} className="w-[24px] h-[24px]" />
                </td>
              </tr>
              <tr className="text-[#5C5C5C] text-center">
                <td className="px-4 py-2">26 June | 5:33 PM</td>
                <td className="px-4 py-2">Project Alayas</td>
                <td className="px-4 py-2">Rajesh Choudhary</td>
                <td className="px-4 py-2 text-[#000000]" style={{fontWeight:'800'}}>00 : 00</td>
                <td className="px-4 py-2">
                  <div style={{textAlign:'-webkit-center'}}>
                    <CgNotes className="w-[20px] h-[22px] text-black" />
                  </div>
                </td>
                <td className="px-4 py-2">Executive</td>
                <td className="px-4 py-2" style={{textAlign:'-webkit-center'}}>
                <img src={close} className="w-[24px] h-[24px]" />
                </td>
              </tr>
              <tr className="text-[#5C5C5C] text-center">
                <td className="px-4 py-2">26 June | 5:33 PM</td>
                <td className="px-4 py-2">Project Alayas</td>
                <td className="px-4 py-2">Rajesh Choudhary</td>
                <td className="px-4 py-2 text-[#000000]" style={{fontWeight:'800'}}>00 : 00</td>
                <td className="px-4 py-2">
                  <div style={{textAlign:'-webkit-center'}}>
                    <CgNotes className="w-[20px] h-[22px] text-black" />
                  </div>
                </td>
                <td className="px-4 py-2">Executive</td>
                <td className="px-4 py-2" style={{textAlign:'-webkit-center'}}>
                <img src={close} className="w-[24px] h-[24px]" />
                </td>
              </tr>
              <tr className="text-[#5C5C5C] text-center">
                <td className="px-4 py-2">26 June | 5:33 PM</td>
                <td className="px-4 py-2">Project Alayas</td>
                <td className="px-4 py-2">Rajesh Choudhary</td>
                <td className="px-4 py-2 text-[#000000]" style={{fontWeight:'800'}}>00 : 00</td>
                <td className="px-4 py-2">
                  <div style={{textAlign:'-webkit-center'}}>
                    <CgNotes className="w-[20px] h-[22px] text-black" />
                  </div>
                </td>
                <td className="px-4 py-2">Executive</td>
                <td className="px-4 py-2" style={{textAlign:'-webkit-center'}}>
                  <IoCheckmarkOutline className="w-[24px] h-[24px] text-[#49DA31]" />
                </td>
              </tr>
              <tr className="text-[#5C5C5C] text-center">
                <td className="px-4 py-2">26 June | 5:33 PM</td>
                <td className="px-4 py-2">Project Alayas</td>
                <td className="px-4 py-2">Rajesh Choudhary</td>
                <td className="px-4 py-2 text-[#000000]" style={{fontWeight:'800'}}>00 : 00</td>
                <td className="px-4 py-2">
                  <div style={{textAlign:'-webkit-center'}}>
                    <CgNotes className="w-[20px] h-[22px] text-black" />
                  </div>
                </td>
                <td className="px-4 py-2">Executive</td>
                <td className="px-4 py-2" style={{textAlign:'-webkit-center'}}>
                  <IoCheckmarkOutline className="w-[24px] h-[24px] text-[#49DA31]" />
                </td>
              </tr>
            </tbody>
            
           
          </table>
          
        </div>
</div>        
      </main>

         






      </div>
      
    </>
  );
}

export default ClientDetails;