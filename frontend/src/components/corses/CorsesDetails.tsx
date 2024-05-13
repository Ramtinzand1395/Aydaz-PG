import React from "react";
import "./corsesstyles.css";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
interface CorsesDetailsprops {
  title: string;
  corseDetails: string;
  image: string;
}
const CorsesDetails: React.FC<CorsesDetailsprops> = ({
  title,
  corseDetails,
  image,
}) => {
  return (
    <div className="infoShadow mx-2 md:mx-5 lg:mx-10 my-10 rounded-md p-5">
      <div className=" rounded-md">
        <img className="w-full h-[50vh]" src={image} alt="" />
      </div>
      <h3 className="text-[#281A3D] text-lg font-bold font-vazir my-10">
        {title}
      </h3>
      <p className="font-vazir text-justify">{corseDetails}</p>
      <button className="relative my-5 rounded px-5 py-2.5 overflow-hidden group bg-[#281A3D]  hover:bg-gradient-to-r hover:from-[#281A3D] hover:to-[#4e3377] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#4e3377] transition-all ease-out duration-300">
        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span className="relative flex items-center font-vazir">
          <FaUser className="ml-5" />
          <Link to={"/login"}> ثبت نام در دوره</Link>
        </span>
      </button>
    </div>
  );
};

export default CorsesDetails;
