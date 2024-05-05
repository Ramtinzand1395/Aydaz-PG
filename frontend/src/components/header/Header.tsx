import React from "react";
import TopHeader from "./TopHeader";
import ayda from "../../assets/Ayda-top-header copy.png";
import baft from "../../assets/baft2.png";
const Header = () => {
  return (
    <div>
      <TopHeader />
      <div className="relative">
        <div className="absolute top-0 right-0"></div>
      </div>
      <div className="grid grid-cols-12 gap-2 ">
        <div className="md:col-span-2 hidden md:block">
          <img className="w-full h-[40vw]" src={baft} alt="" />
        </div>
        <div className=" flex flex-col justify-around rounded-xl p-5 h-auto  mt-5 md:mt-[10vh] mr-5 md:mr-0 text_animation col-span-6 md:col-span-5">
          <h2
            dir="ltr"
            className="font-bold whitespace-nowrap text-start
          lg:text-5xl md:text-2xl text-lg 
           text-[#281A3D] "
          >
            AydaZ Academy
          </h2>
          <p
            dir="ltr"
            className=" whitespace-nowrap
          lg:text-3xl md:text-xl text-lg text-end"
          >
            brids style
          </p>
          <p
            className=" whitespace-nowrap font-bold
          lg:text-3xl md:text-xl text-lg  text-center"
          >
            آموزش و خدمات تخصصی بافتمو در ایران
          </p>
        </div>
        <div className="justify-end flex image_animation col-span-6 md:col-span-5">
          <img className="" src={ayda} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
