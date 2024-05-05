import React from "react";
import {
  FaUber,
  FaDoorClosed,
  FaHome,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { MdClose } from "react-icons/md";

import { Link } from "react-router-dom";

const Menu = ({ Openmenu, setOpenmenu }) => {
  const menuItems = [
    {
      id: 1,
      title: "خانه",
      path: "/",
    },
    {
      id: 2,
      title: "آموزشگاه",
    },
    {
      id: 3,
      title: "فروشگاه",
    },
    {
      id: 4,
      title: "گالری عکس",
      path: "/gallery",
    },
    {
      id: 5,
      title: "وبلاگ",
    },
    {
      id: 6,
      title: "تماس با ما",
    },
    {
      id: 6,
      title: "درباره ما",
    },
  ];
  //Prevent rerender
  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Stop event propagation to prevent closing the modal when clicked inside
    event.stopPropagation();
  };
  return (
    <>
      <div
        onClick={() => setOpenmenu(false)}
        className="bg-gray-200 bg-opacity-60 z-10 w-full h-full fixed top-0 left-0"
      >
        <div
          className={`fixed top-0 right-0 h-full w-[60vw] md:w-[50vw] lg:w-[25vw] rounded-tl-2xl rounded-bl-2xl bg-[#281A3D] ${
            Openmenu ? "open_menu" : "close_menu"
          }`}
          onClick={handleModalClick}
        >
          {/* Top-menu */}
          <div className="flex items-center justify-around border-b-2 border-white p-2">
            <div className="flex items-center">
              <FaUber className="text-white" size={50} />
              <h1 className="text-white">آکادمی آیدا</h1>
            </div>
            <MdClose
              onClick={() => setOpenmenu(false)}
              className="text-white cursor-pointer"
            />
          </div>
          {/* Top-menu-end */}
          {/* menu */}
          <div className="my-5">
            {menuItems.map((item) => (
              <div className="px-5 py-2">
                <Link to={`${item?.path}`}>
                  <button className="relative text-start px-5 py-3 w-full overflow-hidden font-medium text-black bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#48315D] opacity-0 group-hover:opacity-100"></span>
                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease flex items-center">
                      <FaHome className="ml-2" size={20} />
                      {item.title}
                    </span>
                  </button>
                </Link>
              </div>
            ))}
          </div>
          {/* menu-end */}
          {/* bottom-menu */}
          <div className="p-2">
            <p className="text-white">شماره تماس :091384552508</p>
            <p className="text-white">آدرس : کرمان- خیابان هزار و یک شب</p>
            <div className="flex items-center justify-around absolute w-full bottom-5">
              <FaInstagram size={40} color="white" />
              <FaTelegram size={40} color="white" />
              <FaWhatsapp size={40} color="white" />
            </div>
          </div>
          {/* bottom-menu-end */}
        </div>
      </div>
    </>
  );
};

export default Menu;
