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
        <div className=" rounded-xl p-5 h-auto  mt-5 md:mt-[10vh] mr-5 md:mr-0 text_animation col-span-6 md:col-span-5">
          <h2
            className="font-bold whitespace-nowrap
          lg:text-5xl md:text-2xl text-lg 
           text-[#281A3D] mb-2 md:mb-10"
          >
            AydaZ Academy
          </h2>
          <p className="text-xs md:text-lg text-justify">
            اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن
            های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا
            های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا
            متنی ساختگی و بدون معنی است کهمتنی ساختگی و بدون معنی است که
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
