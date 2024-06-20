import React, { useState } from "react";
import userImg from "../../assets/A1.webp";
const TopNavber = () => {
  const [title, setTitle] = useState("Super Admin");

  return (
    <div
      className={`w-full h-[3.688rem] lg:h-[4.688rem] bg-[#FFFFFF] flex flex-row justify-end px-5 gap-5 items-center font-[Manrope] font-medium`}>
      <div className="font-[Manrope]">Welcome! {title}</div>
      <div>
        <img src={userImg} alt="Userimg" className="w-8 rounded-full mr-12" />
      </div>
    </div>
  );
};

export default TopNavber;
