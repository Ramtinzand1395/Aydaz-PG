import React from "react";
import img from "../../assets/IMG_20240409_222458_090.jpg";
import img2 from "../../assets/purple-neon-border-with-flare-on-the-top-background-free-video.jpg";
import img3 from "../../assets/registerbg.webp";
import hover1 from "../../assets/hover1.jpg";
import hover2 from "../../assets/hover2.jpg";

import TopHeader from "../header/TopHeader";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import ModelImages from "./ModelImages";
const GalleryPage: React.FC = () => {
  const hovercars = [
    {
      id: 1,
      title: "مدل 1",
      image1: hover1,
      image2: hover2,
    },
    {
      id: 2,
      title: "مدل 2",
      image1: hover1,
      image2: hover2,
    },
    {
      id: 3,
      title: "مدل 3",
      image1: hover1,
      image2: hover2,
    },
  ];
  return (
    <div className="">
      <TopHeader />
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        scrollbar={{ draggable: true }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper "
      >
        <SwiperSlide>
          <div className=" ">
            <img title="image" className="h-[90vh] w-full" src={img} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" ">
            <img title="image" className="h-[90vh] w-full" src={img2} />
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className=" ">
            <img title="image" className="h-[90vh] w-full" src={img3} />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* newst */}
      <div className="relative">
        <h2 className="font-bold text-2xl my-10 mx-10">برترین ترین مدل ها</h2>
        <div className="grid grid-cols-3 gap-10 ">
          {hovercars.map((card) => (
            <div key={card.id} className="card ">
              <div className="wrapper">
                <img title="image" src={card.image1} className="cover-image " />
                <div className="title">
                  <p className="text-center font-bold text-4xl">مدل افرو</p>
                </div>
              </div>

              <img title="image" src={card.image2} className="character" />
            </div>
          ))}
        </div>
      </div>
      <ModelImages />
    </div>
  );
};

export default GalleryPage;
