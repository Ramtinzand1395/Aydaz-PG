import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import cicle from "../../../assets/1.png";
 import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
const CircleSlider: React.FC = () => {
  return (
    <div className="mx-2">
      <Swiper
        spaceBetween={50}
        //   slidesPerView={6}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className=""
        scrollbar={{ draggable: true }}
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          630: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <div className="flex items-center flex-col justify-center ">
            <img src={cicle} alt="" />
            <h3 className="text-lg">جدیدترین ها</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="flex items-center flex-col justify-center">
            <img src={cicle} className="w-20 md:w-auto" alt="" />
            <h3 className="text-lg">درباره من</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="flex items-center flex-col justify-center">
            <img src={cicle} className="w-20 md:w-auto" alt="" />
            <h3 className="text-lg">مشاوره خرید</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="flex items-center flex-col justify-center">
            <img src={cicle} className="w-20 md:w-auto" alt="" />
            <h3 className="text-lg">پیشنهاد ویژه</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="flex items-center flex-col justify-center">
            <img src={cicle} className="w-20 md:w-auto" alt="" />
            <h3 className="text-lg">رضایت دوره</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="flex items-center flex-col justify-center">
            <img src={cicle} className="w-20 md:w-auto" alt="" />
            <h3 className="text-lg">هنرجویان</h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CircleSlider;
