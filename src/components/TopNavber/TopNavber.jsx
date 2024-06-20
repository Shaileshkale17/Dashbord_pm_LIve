import React, { useState } from "react";
import setting from "../../assets/setting-2.svg";
import notification from "../../assets/notification.svg";
import userimg from "../../assets/A1.webp";
import searchsvg from "../../assets/search-normal.svg";
import Ellipse from "../../assets/Ellipse 6.svg";
const TopNavber = () => {
  const [search, setsearch] = useState("");
  const [settinginotifi, setsettingnotifi] = useState(false);
  const [notificationnotifi, setnotificationnotifi] = useState(true);
  const [usernotifi, setUsernotifi] = useState(false);
  return (
    <div
      className={`w-full h-16 bg-[#151515] flex flex-row justify-between px-5 items-center `}>
      <div>
        <div className="relative ">
          {search.length == 0 ? (
            <img src={searchsvg} alt="" className="absolute top-3 right-3 " />
          ) : (
            ""
          )}
          <input
            type="search"
            name=""
            id=""
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            className="border-solid rounded-2xl py-2 px-3 w-80"
            placeholder="search your data"
          />
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <div className="relative">
          {settinginotifi === true ? (
            <img src={Ellipse} className="absolute top-1 right-1 w-3" />
          ) : (
            ""
          )}

          <img
            src={setting}
            alt="setting"
            className="w-10 bg-black rounded-full h-auto p-2"
          />
        </div>
        <div className="relative">
          {notificationnotifi === true ? (
            <img src={Ellipse} className="absolute top-1 right-1 w-3" />
          ) : (
            ""
          )}
          <img
            src={notification}
            alt="setting"
            className="w-10 bg-black rounded-full h-auto p-2"
          />
        </div>
        <div className="relative">
          {usernotifi === true ? (
            <img src={Ellipse} className="absolute top-1 right-1 w-3" />
          ) : (
            ""
          )}
          <img
            src={userimg}
            alt="userImage"
            className="w-10 bg-black rounded-full h-auto p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default TopNavber;
