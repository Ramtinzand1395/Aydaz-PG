import React from "react";
import logo from "../../assets/baft2.png";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer:React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
        <div className="footer1 h-[60vh] p-10  ">
          <div className="flex items-center justify-center  ">
            <img
              src={logo}
              className="mx-5 bg-white rounded-full p-2 w-20 h-20 "
              alt=""
            />
            <h2>آکادمی آیداز</h2>
          </div>
          <div className="text-center mt-10">
            <p>
              اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به
              متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند.
            </p>
          </div>
        </div>
        <div className="footer2 h-[60vh] flex items-center flex-col justify-around p-10">
          <h2>راه های ارتباطی </h2>
          <p>تلگرام : 0913855555</p>
          <p>اینستاگرام : 0913855555</p> <p>واتس آپ : 0913855555</p>{" "}
          <p>شماره تماس : 0913855555</p>
          <p className="text-start">آدرس : کرمان - خیابان هزار و یک شب</p>
          <div className="flex items-center justify-end w-full ml-10 ">
            <FaInstagram size={30} className="ml-10" />
            <FaTelegram size={30} className="ml-10" />
            <FaWhatsapp  size={30} className="ml-10"/>
          </div>
        </div>
        <div className="footer3 h-[60vh]  flex items-center flex-col justify-around p-10">
         <h2>دسترسی سریع</h2>
         <Link to={"#"}>
    خانه
         </Link>
         <Link to={"#"}>
         آموزشگاه
         </Link><Link to={"#"}>
         فروشگاه
         </Link><Link to={"#"}>
         نمونه کار ها
         </Link><Link to={"#"}>
         وبلاگ
         </Link><Link to={"#"}>
         درباره ما
         </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
