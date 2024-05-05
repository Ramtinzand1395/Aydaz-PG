import React, { useEffect, useRef, useState } from "react";
import "./gallerystyles.css";
const HomeGallery: React.FC = () => {
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
    <div className="gallerybackground w-full h-[100vh] ">
      <div className="grid grid-cols-3 ">
        <div className=""></div>
        <div className="flex flex-col items-start justify-center gap-10 h-[80vh] col-span-2 container">
          <h3
            ref={h4Ref}
            className={`font-bold text-6xl text-[#281A3D] ${
              isVisible ? "title_animation" : ""
            }`}
          >
            گالری هنربافتمو من
          </h3>
          <p className={`mx-5 ${isVisible ? "text_animation" : ""}`}>
            اگه نمیدونی چه بافتی بهت میاد یا اینکه نمیدونی نکات یک بافت خوب چیه
            دکمه پایین و کلیک کن
          </p>
          <button className="relative inline-block text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-[#281A3D] rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#281A3D] group-hover:-rotate-180 ease"></span>
              <span className="relative">نمایش بیشتر</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#281A3D] rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
