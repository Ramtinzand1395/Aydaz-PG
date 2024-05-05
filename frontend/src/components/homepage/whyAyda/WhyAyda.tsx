import React from "react";
import ayda from "../../../assets/Group 27.png";
import left from "../../../assets/Subtract (2).png";
import rigth from "../../../assets/Group 56.png";

const WhyAyda:React.FC  = () => {
  return (
    <div className="w-full h-[80vh] relative ">
      <div className="">
        <img src={left} className="absolute bottom-0 left-0 w-[10vw]" alt="" />
        <img
          src={rigth}
          className="absolute bottom-0 right-0 w-[10vw]"
          alt=""
        />
      </div>
      <div className="container">
        <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 ">
          <div className="flex items-center justify-center">
            <img src={ayda} className="w-[40vw]" alt="" />
          </div>
          <div className="">
            <h4 className="font-bold lg:text-6xl md:text-4xl text-2xl text-center md:text-start my-10">
              چراآکادمی آیداز؟؟
            </h4>
            <ul className="text-center md:text-start">
              <li className="text-lg">1. پشتیبانی حضوری و آنلاین دوره</li>
              <li className="text-lg">2.آموزش تخصصی بافتمو به سبک جدید</li>
              <li className="text-lg">3.تضمین درآمد (رسوندن هنرجو صفر به استادی در بافتمو)</li>
              <li className="text-lg">4.یادگیری مهارت مربیگری در آموزش</li>
              <li className="text-lg">5. آپدیت رایگان</li>
              <li className="text-lg">6. رزومه تخصصی 8 سال سابقه کاری و آموزشی در حوضه بافتمو</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyAyda;
