import React from "react";
import "../corsesstyles.css";
import videow from "../../../assets/ALEX_TERRIBLE_O_Fortuna_COVER_RUSSIAN_HATE_PROJECT_.137.mp4";

const Intro:React.FC = () => {
  return (
    <div className="lg:mx-10 md:mx-5 mx-2 vboxShadow rounded-md my-10 p-5">
      <div className="bg-[#281A3D] text-xs md:text-nowrap md:text-base rounded-lg p-5 w-full md:w-fit flex items-center justify-between mb-5">
        <p className="font-tanha   text-red-500 transition-all ease-in-out delay-150 cursor-pointer mx-0 md:mx-5 ">
          ثبت نام
        </p>
        <p className="font-tanha text-white hover:text-red-500 transition-all ease-in-out delay-150 cursor-pointer mx-0 md:mx-5  ">
          اطلاعات دوره
        </p>
        <p className="font-tanha text-white hover:text-red-500 transition-all ease-in-out delay-150 cursor-pointer mx-0 md:mx-5  ">
          سر فصل ها
        </p>
        <p className="font-tanha text-white hover:text-red-500 transition-all ease-in-out delay-150 cursor-pointer mx-0 md:mx-5  ">
          نظرات
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col justify-around items-start">
          <h2 className="font-tanha text-2xl text-[#281A3D] font-bold mb-5 md:mb-0">
            آموزش حضوری دوره بافت مو
          </h2>
          <p className="font-vazir">
            اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن
            های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا
            طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که
            برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ
            استفاده میشود. طراحان وب و گرافیک از این متن برای پرکردن صفحه و
            ارائه شکل کلی طرح استفاده می‌کنند.
          </p>
        </div>
        <div className="">
          <video className=" w-full" controls>
            <source src={videow} type="video/mp4" />
            {/* Add additional source elements for other formats if needed */}
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Intro;
