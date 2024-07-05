import React, { useState } from "react";
import userImg from "../../assets/A2.png";

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
      className={`bottom-shadow w-full h-[3.688rem] lg:h-[50px] bg-white bg-opacity-50  flex flex-row justify-end px-5 gap-5 items-center font-[Manrope] font-medium relative shadow-b-lg shadow-Black-1000`}>
      <div className="font-[Manrope] "><b>Welcome! {title} </b> </div> 
       {/* bg-[#FFFFFF] */}
      <div>
        <img
          src={userImg}
          alt="Userimg"
          className="w-8 rounded-full mr-12 cursor-pointer"
          onClick={() => clickfun()}
        />
      </div>
      <div
        className={`absolute right-7 top-14 bg-white p-6 ${
          click === true ? "" : "hidden"
        } `}>
        <ul className="flex flex-col gap-2 ">
          <li className="font-[Manrope] cursor-pointer font-medium  ">
            Go to Settings
          </li>
          <li className="font-[Manrope] cursor-pointer font-medium">Profile</li>
          <li className="font-[Manrope] cursor-pointer font-medium text-[#F13737]">
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavber;
