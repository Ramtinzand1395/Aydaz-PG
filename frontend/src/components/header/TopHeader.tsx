import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import Menu from "../menu/Menu";
import { Link } from "react-router-dom";

const TopHeader:React.FC = () => {
  const [Openmenu, setOpenmenu] = useState(false);
  return (
    <div className=" flex items-center justify-between p-2 px-5">
      {/* menu */}
      <div className="">
        <TiThMenu
          onClick={() => setOpenmenu(true)}
          size={40}
          className="text-[#281A3D]"
        />
        {Openmenu && <Menu Openmenu={Openmenu} setOpenmenu={setOpenmenu} />}
      </div>
      {/* menu */}
      <div className="text-center">
        <h2 className="font-bold text-xs md:text-xl whitespace-nowrap">
          این یه سایت معمولی نیست! ✨چون قراره تورو به درآمد برسونه✨
        </h2>
      </div>
      {/* menu */}
      <div className="  justify-end hidden md:flex">
        <button className="relative rounded px-5 py-2.5 overflow-hidden group bg-[#281A3D]  hover:bg-gradient-to-r hover:from-[#281A3D] hover:to-[#4e3377] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#4e3377] transition-all ease-out duration-300">
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative flex items-center">
            <FaUser className="ml-5" />
            <Link to={"/login"}>ورود/ثبت نام</Link>
          </span>
        </button>
      </div>
    </div>
  );
};

export default TopHeader;
