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
import Settings1 from "../../assets/Settings - Copy.svg";
import Settings2 from "../../assets/Settings.svg";
import Logout1 from "../../assets/Logout Copy.svg";
import Logout2 from "../../assets/logout.svg";
const Navber = ({
  clickOverview = false,
  DirectVisitors = false,
  ChannelVisitors = false,
  ChannelPartners = false,
  Projects = false,
  Team = false,
  Settings = false,
  Logout = false,
}) => {
  return (
    <div className="bg-[#FFFFFF] h-screen text-white flex flex-col justify-around gap-16 lg:gap-0 items-center ">
      <div className="flex flex-col gap-5 W-[70%] md::w-auto">
        <img
          src={rofImage}
          alt="ROF"
          className="sm:w-[70%] mt-8 lg:mt-0 xl:w-full"
        />
        <ul className="flex flex-col gap-4">
          <li
            className={`text-[#3D2314] font-medium flex flex-row gap-3 w-28 lg:w-48 p-2 text-sm lg:text-lg font-[Manrope] ${
              clickOverview === true ? "bg-[#3D2314] text-[#FFFFFF]" : ""
            }`}>
            {clickOverview === true ? (
              <img src={navicon2} alt="" className="w-4 lg:w-auto" />
            ) : (
              <img src={navicon1} alt="" />
            )}{" "}
            Overview
          </li>
          <li
            className={`text-[#3D2314] font-medium flex flex-row gap-3 w-28 lg:w-48 p-2 text-sm lg:text-lg font-[Manrope] ${
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
            className={`text-[#3D2314] font-medium flex flex-row gap-3 w-28 lg:w-48 p-2 text-sm lg:text-lg font-[Manrope] ${
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
            className={`text-[#3D2314] font-medium flex flex-row gap-3 w-28 lg:w-48 p-2 text-sm lg:text-lg font-[Manrope] ${
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
            className={`text-[#3D2314] font-medium flex flex-row gap-3 w-28 lg:w-48 p-2 text-sm lg:text-lg font-[Manrope] ${
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
            className={`text-[#3D2314] font-medium flex flex-row gap-3 w-28 lg:w-48 p-2 text-sm lg:text-lg font-[Manrope] ${
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
      <div>
        <ul className="flex flex-col gap-4">
          <li
            className={`text-[#3D2314] font-medium flex flex-row gap-3 w-28 lg:w-48 p-2 text-sm lg:text-lg font-[Manrope] ${
              Settings === true ? "bg-[#3D2314] text-[#FFFFFF]" : ""
            }`}>
            {Settings === true ? (
              <img src={Settings1} alt="Settings" />
            ) : (
              <img src={Settings2} alt="Settings" />
            )}
            Settings
          </li>
          <li
            className={` text-[red] font-medium flex flex-row gap-3 w-28 lg:w-48 p-2 text-[s] lg:text-lg font-[Manrope] ${
              Logout === true ? "bg-[#3D2314] " : ""
            }`}>
            {Logout === true ? (
              <img src={Logout1} alt="Settings" />
            ) : (
              <img src={Logout2} alt="Settings" />
            )}
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
