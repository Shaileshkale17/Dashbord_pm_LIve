import React, { useState } from "react";
import Dashboard from "../../assets/category.svg";
import message from "../../assets/message-text.svg";
import Calendar from "../../assets/calendar.svg";
import Ellipse from "../../assets/Ellipse 6.svg";
const Navber = () => {
  const [noftDashboard, setnoftDashboard] = useState(true);
  const [noftMessages, setnoftMessages] = useState(true);
  const [noftCalendar, setnoftCalendar] = useState(true);
  return (
    <div className="bg-[#151515] text-white flex flex-col pt-5 gap-9 items-center justify-center">
      <div>
        <h1>LOGO image</h1>
      </div>
      <div>
        <ul className="flex gap-5 flex-col h-screen">
          <li className="flex flex-row gap-5 items-center">
            <img src={Dashboard} alt="" />
            Dashboard
            {noftDashboard === true ? <img src={Ellipse} /> : ""}
          </li>
          <li className="flex flex-row gap-5 items-center">
            <img src={message} alt="" />
            Messages
            {noftMessages === true ? <img src={Ellipse} /> : ""}
          </li>
          <li className="flex flex-row gap-5 items-center">
            <img src={Calendar} alt="" />
            Calendar
            {noftCalendar === true ? <img src={Ellipse} /> : ""}
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
