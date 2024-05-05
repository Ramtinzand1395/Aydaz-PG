import React from "react";
import TopHeader from "./TopHeader";
import ayda from "../../assets/sdf 1 copy.png";
import baft from "../../assets/purpell copy.png";
import "./hederStyles.css";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdCastForEducation } from "react-icons/md";
const Header: React.FC = () => {
  return (
    <div>
      <TopHeader />
      <div className="grid grid-cols-12 gap-2 h-[50vh] md:h-[90vh] bg-[#281A3D] mb-10">
        <div className="col-span-2 hidden md:block baft-animation">
          <img className="w-full h-[40vw]" src={baft} alt="" />
        </div>
        <div className=" flex flex-col justify-around rounded-xl p-5 h-auto  mt-5 md:mt-[10vh] mr-5 md:mr-0 text_animation col-span-6 md:col-span-5 ">
          <h2
            dir="ltr"
            className="font-bold whitespace-nowrap text-start
          lg:text-5xl md:text-2xl text-lg 
           text-white "
          >
            AydaZ Academy
          </h2>
          <p
            dir="ltr"
            className=" whitespace-nowrap font-bold
          lg:text-3xl md:text-xl text-lg text-end text-white"
          >
            brids style
          </p>
          <p
            className=" whitespace-nowrap  
          lg:text-3xl md:text-xl text-sm  text-center text-white font-vazir"
          >
            آموزش و خدمات تخصصی بافتمو در ایران
          </p>
          <div className="">
            <button className="relative rounded px-5 py-2.5 overflow-hidden group bg-white hover:bg-gradient-to-r hover:from-white hover:to-black text-black hover:ring-2 hover:ring-offset-2 hover:ring-[#4e3377] transition-all ease-out duration-300">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative flex items-center  font-vazir">
                <FaUser className="ml-5" />
                <Link to={"/login"}>ورود/ثبت نام</Link>
              </span>
            </button>
            <button className="relative mx-5 rounded px-5 py-2.5 overflow-hidden group bg-white hover:bg-gradient-to-r hover:from-white hover:to-black text-black hover:ring-2 hover:ring-offset-2 hover:ring-[#4e3377] transition-all ease-out duration-300">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative flex items-center  font-vazir">
                <MdCastForEducation className="ml-5" />
                <Link to={"/login"}>آموزش ها </Link>
              </span>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center image_animation header-image col-span-6 md:col-span-5">
          <img className=" w-[30vw] h-[30vw]" src={ayda} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
