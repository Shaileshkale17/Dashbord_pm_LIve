import React, { useState } from "react";
import userImg from "../../assets/A1.webp";
const TopNavber = () => {
  const [title, setTitle] = useState("Super Admin");
  const [click, setclick] = useState(false);
  const clickfun = () => {
    if (click === true) {
      setclick(false);
    } else {
      setclick(true);
    }
  };
  return (
    <div
      className={`w-full h-[3.688rem] lg:h-[4.688rem] bg-[#FFFFFF] flex flex-row justify-end px-5 gap-5 items-center font-[Manrope] font-medium relative`}>
      <div className="font-[Manrope]">Welcome! {title}</div>
      <div>
        <img
          src={userImg}
          alt="Userimg"
          className="w-8 rounded-full mr-12"
          onClick={() => clickfun()}
        />
      </div>
      <div
        className={`absolute right-7 top-20 bg-white p-6 ${
          click === true ? "" : "hidden"
        } `}>
        <ul className="flex flex-col gap-2">
          <li className="font-[Manrope] font-medium">Go to Settings</li>
          <li className="font-[Manrope] font-medium">Profile</li>
          <li className="font-[Manrope] font-medium text-[#F13737]">Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavber;
