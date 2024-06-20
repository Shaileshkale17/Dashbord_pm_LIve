import React, { useState } from "react";
import rofImage from "../../assets/ROf Image 1.svg";
import navicon1 from "../../assets/Vector (2).svg";
import navicon2 from "../../assets/Vector (2)-2.svg";
import carbon_customer1 from "../../assets/carbon_customer.svg";
import carbon_customer2 from "../../assets/carbon_customer - Copy.svg";
const Navber = ({ clickOverview = false }) => {
  return (
    <div className="bg-[#FFFFFF] h-screen text-white flex flex-col pt-5 gap-9 items-center justify-center">
      <div className="flex flex-col gap-5 ">
        <img src={rofImage} alt="ROF" />
        <ul>
          <li
            className={`text-[#3D2314] font-medium flex flex-row gap-3 w-48 p-2 ${
              clickOverview === true ? "bg-[#3D2314] text-[#FFFFFF]" : ""
            }`}>
            {clickOverview === true ? (
              <img src={navicon2} alt="" />
            ) : (
              <img src={navicon1} alt="" />
            )}{" "}
            Overview
          </li>
          <li
            className={`text-[#3D2314] font-medium flex flex-row gap-3 w-48 p-2 ${
              clickOverview === true ? "bg-[#3D2314] text-[#FFFFFF]" : ""
            }`}>
            {clickOverview === true ? (
              <img src={carbon_customer1} alt="" />
            ) : (
              <img src={carbon_customer2} alt="" />
            )}{" "}
            Direct Visitors
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
