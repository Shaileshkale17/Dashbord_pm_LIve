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
import { Link } from "react-router-dom";

const Navber = () => {
  const [activeItem, setActiveItem] = useState("Overview");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="bg-[#FFFFFF] h-screen text-white flex flex-col justify-around gap-16 lg:gap-0 items-center ">
      <div className="flex flex-col gap-5 W-[70%] md::w-auto">
        <Link to="/">
          <img
            src={rofImage}
            alt="ROF"
            className="sm:w-[70%] mt-8 lg:mt-0 xl:w-full "
          />
        </Link>
        <ul className="flex flex-col gap-4">
          <Link to="/">
            <li
              className={`text-[#3D2314] font-medium flex flex-row gap-3 w-28 cursor-pointer lg:w-52 p-2 text-sm lg:text-lg font-[Manrope] ${
                activeItem === "Overview" ? "bg-[#3D2314] text-[#FFFFFF]" : ""
              }`}
              onClick={() => handleItemClick("Overview")}>
              {activeItem === "Overview" ? (
                <img src={navicon2} alt="" className="w-4 lg:w-auto" />
              ) : (
                <img src={navicon1} alt="" />
              )}
              Overview
            </li>
          </Link>
          <Link to="/Direct_Visitors">
            <li
              className={`text-[#3D2314] cursor-pointer font-medium flex flex-row gap-3 w-28 lg:w-52 p-2 text-sm lg:text-lg font-[Manrope] ${
                activeItem === "DirectVisitors"
                  ? "bg-[#3D2314] text-[#FFFFFF]"
                  : ""
              }`}
              onClick={() => handleItemClick("DirectVisitors")}>
              {activeItem === "DirectVisitors" ? (
                <img src={carbon_customer1} alt="" />
              ) : (
                <img src={carbon_customer2} alt="" />
              )}
              Direct Visitors
            </li>
          </Link>
          <Link to="/Channel_Visitors">
            <li
              className={`text-[#3D2314] cursor-pointer font-medium flex flex-row gap-3 w-28 lg:w-52 p-2 text-sm lg:text-lg font-[Manrope] ${
                activeItem === "ChannelVisitors"
                  ? "bg-[#3D2314] text-[#FFFFFF]"
                  : ""
              }`}
              onClick={() => handleItemClick("ChannelVisitors")}>
              {activeItem === "ChannelVisitors" ? (
                <img src={material1} alt="" />
              ) : (
                <img src={material2} alt="" />
              )}
              Channel Visitors
            </li>
          </Link>
          <Link to="/Channel_Partners">
            <li
              className={`text-[#3D2314] cursor-pointer font-medium flex flex-row gap-3 w-28 lg:w-52 p-2 text-sm lg:text-lg font-[Manrope] ${
                activeItem === "ChannelPartners"
                  ? "bg-[#3D2314] text-[#FFFFFF]"
                  : ""
              }`}
              onClick={() => handleItemClick("ChannelPartners")}>
              {activeItem === "ChannelPartners" ? (
                <img src={ChannelPartners1} alt="" />
              ) : (
                <img src={ChannelPartners2} alt="" />
              )}
              Channel Partners
            </li>
          </Link>
          <Link to="/Project">
            <li
              className={`text-[#3D2314] cursor-pointer font-medium flex flex-row gap-3 w-28 lg:w-52 p-2 text-sm lg:text-lg font-[Manrope] ${
                activeItem === "Projects" ? "bg-[#3D2314] text-[#FFFFFF]" : ""
              }`}
              onClick={() => handleItemClick("Projects")}>
              {activeItem === "Projects" ? (
                <img src={Projects1} alt="" />
              ) : (
                <img src={Projects2} alt="" />
              )}
              Projects
            </li>
          </Link>
          <li
            className={`text-[#3D2314] cursor-pointer font-medium flex flex-row gap-3 w-28 lg:w-52 p-2 text-sm lg:text-lg font-[Manrope] ${
              activeItem === "Team" ? "bg-[#3D2314] text-[#FFFFFF]" : ""
            }`}
            onClick={() => handleItemClick("Team")}>
            {activeItem === "Team" ? (
              <img src={Team1} alt="Team" />
            ) : (
              <img src={Team2} alt="Team" />
            )}
            Team
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-col gap-4">
          <li
            className={`text-[#3D2314] cursor-pointer font-medium flex flex-row gap-3 w-28 lg:w-52 p-2 text-sm lg:text-lg font-[Manrope] `}>
            <img src={Settings2} alt="Settings" />
            Settings
          </li>
          <li
            className={`text-[red] cursor-pointer font-medium flex flex-row gap-3 w-28 lg:w-52 p-2 text-[s] lg:text-lg font-[Manrope] `}>
            <img src={Logout2} alt="Logout" />
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
