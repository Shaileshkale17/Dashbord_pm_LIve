import React, { useState } from "react";
import rofImage from "../../assets/ROf Image 1.svg";
import navicon1 from "../../assets/Vector (2).svg";
import navicon2 from "../../assets/Vector (2)-2.svg";
import carbon_customer1 from "../../assets/carbon_customer.svg";
import carbon_customer2 from "../../assets/carbon_customer - Copy.svg";
import material1 from "../../assets/material-symbols_real-estate-agent-outline-sharp - Copy.svg";
import material2 from "../../assets/material-symbols_real-estate-agent-outline-sharp.svg";
import ChannelPartners1 from "../../assets/Vectors (2).svg";
import ChannelPartners2 from "../../assets/Vectors (3).svg";
import Projects1 from "../../assets/ph_buildings-bold - Copy.svg";
import Projects2 from "../../assets/ph_buildings-bold.svg";
import Team1 from "../../assets/ri_team-line - Copy.svg";
import Team2 from "../../assets/ri_team-line.svg";
const Navber = ({
  clickOverview = false,
  DirectVisitors = false,
  ChannelVisitors = false,
  ChannelPartners = false,
  Projects = false,
  Team = false,
}) => {
  return (
    <div className="bg-[#FFFFFF] h-screen text-white flex flex-col pt-5 gap-9 items-center justify-center">
      <div className="flex flex-col gap-5 ">
        <img src={rofImage} alt="ROF" />
        <ul className="flex flex-col gap-4">
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
              DirectVisitors === true ? "bg-[#3D2314] text-[#FFFFFF]" : ""
            }`}>
            {DirectVisitors === true ? (
              <img src={carbon_customer1} alt="" />
            ) : (
              <img src={carbon_customer2} alt="" />
            )}{" "}
            Direct Visitors
          </li>
          <li
            className={`text-[#3D2314] font-medium flex flex-row gap-3 w-48 p-2 ${
              ChannelVisitors === true ? "bg-[#3D2314] text-[#FFFFFF]" : ""
            }`}>
            {ChannelVisitors === true ? (
              <img src={material1} alt="" />
            ) : (
              <img src={material2} alt="" />
            )}{" "}
            Channel Visitors
          </li>
          <li
            className={`text-[#3D2314] font-medium flex flex-row gap-3 w-48 p-2 ${
              ChannelPartners === true ? "bg-[#3D2314] text-[#FFFFFF]" : ""
            }`}>
            {ChannelPartners === true ? (
              <img src={ChannelPartners1} alt="" />
            ) : (
              <img src={ChannelPartners2} alt="" />
            )}{" "}
            Channel Partners
          </li>
          <li
            className={`text-[#3D2314] font-medium flex flex-row gap-3 w-48 p-2 ${
              Projects === true ? "bg-[#3D2314] text-[#FFFFFF]" : ""
            }`}>
            {Projects === true ? (
              <img src={Projects1} alt="" />
            ) : (
              <img src={Projects2} alt="" />
            )}{" "}
            Projects
          </li>
          <li
            className={`text-[#3D2314] font-medium flex flex-row gap-3 w-48 p-2 ${
              Team === true ? "bg-[#3D2314] text-[#FFFFFF]" : ""
            }`}>
            {Team === true ? (
              <img src={Team1} alt="Team" />
            ) : (
              <img src={Team2} alt="Team" />
            )}{" "}
            Team
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
