import React, { useEffect, useRef, useState } from "react";
import ayda from "../../../assets/Group 27.png";
import left from "../../../assets/Subtract (2).png";
import rigth from "../../../assets/Group 56.png";
import "./whyAydastyles.css"
const WhyAyda:React.FC  = () => {
  const [isVisible, setIsVisible] = useState(false);
  const h4Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (h4Ref.current) {
      observer.observe(h4Ref.current);
    }

    return () => {
      if (h4Ref.current) {
        observer.unobserve(h4Ref.current);
      }
    };
  }, []);
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
      <div className="lg:mx-10 md:mx-5 mx-2">
        <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 ">
          <div ref={h4Ref} className={`flex items-center justify-center ${
                isVisible ? 'image_animation' : ''
              }`}>
            <img src={ayda} className="w-[40vw]" alt="" />
          </div>
          <div className="">
          <h4
              ref={h4Ref}
              className={`font-bold lg:text-6xl md:text-4xl text-2xl text-center md:text-start my-10 text-[#281A3D] ${
                isVisible ? 'text_animation' : ''
              }`}
            >              چراآکادمی آیداز؟؟
            </h4>
            <ul className={`text-center md:text-start  ${
                isVisible ? 'list_animation' : ''
              }`}>
              <li className="text-lg my-5">1. پشتیبانی حضوری و آنلاین دوره</li>
              <li className="text-lg my-5">2.آموزش تخصصی بافتمو به سبک جدید</li>
              <li className="text-lg my-5">3.تضمین درآمد (رسوندن هنرجو صفر به استادی در بافتمو)</li>
              <li className="text-lg my-5">4.یادگیری مهارت مربیگری در آموزش</li>
              <li className="text-lg my-5">5. آپدیت رایگان</li>
              <li className="text-lg my-5">6. رزومه تخصصی 8 سال سابقه کاری و آموزشی در حوضه بافتمو</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyAyda;
