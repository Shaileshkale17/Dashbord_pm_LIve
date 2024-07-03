import React from "react";
import ROF1 from "../../assets/Property 1=Defaultlogo.svg";
import ROF2 from "../../assets/Property 1=Variant2logo.svg";
import ROF3 from "../../assets/Property 1=Variant3logo.svg";
import ROF4 from "../../assets/Property 1=Variant4logo.svg";
import Icon from "./Icon";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <svg
        className="animate-pulse-opactity"
        width="178"
        height="194"
        viewBox="0 0 178 194"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          opacity="0.5"
          d="M75.7447 158.558V20.5192L102.255 0V158.558L147.702 110.058L138.234 102.596L117.404 124.981V41.0385L138.234 61.5577V76.4808L178 110.058L89 194L0 110.058L37.8723 76.4808V61.5577L60.5957 41.0385V124.981L39.766 102.596L30.2979 110.058L75.7447 158.558Z"
          fill="#42281B"
        />
      </svg>
    </div>
  );
};

export default Loading;
