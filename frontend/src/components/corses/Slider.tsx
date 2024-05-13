import React from "react";
import img from "../../assets/IMG_20240409_222458_090.jpg";
import img2 from "../../assets/purple-neon-border-with-flare-on-the-top-background-free-video.jpg";
import img3 from "../../assets/registerbg.webp";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./corsesstyles.css";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

const Slider:React.FC = () => {
  return (
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
          <img title="image" className="h-[50vh] w-full" src={img} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" ">
          <img title="image" className="h-[50vh] w-full" src={img2} />
        </div>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <div className=" ">
          <img title="image" className="h-[50vh] w-full" src={img3} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
