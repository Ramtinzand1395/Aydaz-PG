import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import cicle from "../../../assets/1.png";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
const CircleSlider: React.FC = () => {
  const swipreData = [
    {
      id: 1,
      image: cicle,
      title: "جدیدترین ها ",
    },
    {
      id: 2,
      image: cicle,
      title: "درباره من  ",
    },
    {
      id: 3,
      image: cicle,
      title: "مشاوره خرید   ",
    },
    {
      id: 4,
      image: cicle,
      title: "پیشنهاد ویژه  ",
    },
    {
      id: 5,
      image: cicle,
      title: "رضایت دوره  ",
    },
    {
      id: 6,
      image: cicle,
      title: "هنرجویان  ",
    },
  ];
  return (
    <div className="mx-2 ">
      <Swiper
        spaceBetween={50}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        scrollbar={{ draggable: true }}
        breakpoints={{
          320: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          630: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 10,
            spaceBetween: 50,
          },
        }}
      >
        {swipreData.map((data) => (
          <SwiperSlide>
            <div
              key={data.id}
              className="flex items-center flex-col justify-center "
            >
              <img src={data.image} alt="" />
              <h3 className="text-lg font-tanha"> {data.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CircleSlider;
