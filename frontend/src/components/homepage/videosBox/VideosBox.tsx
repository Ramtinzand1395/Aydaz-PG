import React, { useEffect, useRef, useState } from "react";
import left1 from "../../../assets/Subtract.png";
import left2 from "../../../assets/Vector 10.png";
import rigth from "../../../assets/Subtract (1).png";
import videowImage1 from "../../../assets/IMG_20240409_222458_090.jpg";
import videowImage2 from "../../../assets/IMG_20240409_222458_280.jpg";
import "./videostyles.css";
import { Link } from "react-router-dom";
const VideosBox: React.FC = () => {
  const videoName = [
    {
      id: 1,
      title: "دوره حضوری(صفر تا صد بافتمو در 5 روز)",
      image: videowImage1,
      btntext: "مشاهده دوره حضوری",
      link: "face-to-face course",
    },
    {
      id: 2,
      title: "دوره آنلاین صفر تا صد بافتمو",
      image: videowImage2,
      btntext: "مشاهده دوره صفر تا صد",
      link: "/corses/Zero to 100 weave online course",
    },
    {
      id: 3,
      title: "دوره آنلاین آپدیت بافتمو",
      image: videowImage1,
      btntext: "مشاهده دوره آپدیت بافتمو",
      link: "/corses/Baftmo update online course",
    },
    {
      id: 4,
      title: "دوره آنلاین موردی بافتمو",
      image: videowImage1,
      btntext: "مشاهده دوره موردی بافتمو",
      link: "/corses/Baftmo case online course",
    },
    {
      id: 5,
      title: "دوره آنلاین رایگان",
      image: videowImage1,
      btntext: "مشاهده دوره رایگان",
      link: "/corses/Free Online Course",
    },
    {
      id: 6,
      title: "دوره آنلاین ماهیانه",
      image: videowImage1,
      btntext: "مشاهده دوره ماهیانه",
      link: "/corses/monthly lesson",
    },
  ];

  const [isBox, setIsBox] = useState(false);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsBox(true);
          observer.unobserve(entry.target);
        }
      });
    });

    boxRefs.current
      .filter((ref) => ref !== null)
      .forEach((ref) => {
        if (ref) {
          observer.observe(ref);
        }
      });

    return () => {
      boxRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="relative my-20 bg-purple-300 w-auto h-auto py-5">
      <img src={left1} className="absolute top-0 left-0" alt="" />
      <img src={left2} className="absolute bottom-0 left-0" alt="" />
      <img src={rigth} className="absolute top-0 rigth-0" alt="" />
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 z-10 ${
          isBox ? "Corces_animation " : ""
        } `}
      >
        {videoName.map((videow, index) => (
          <div
            ref={(element) => (boxRefs.current[index] = element)}
            className={`bg-white bg-opacity-50 border-2 h-[40vh]  w-auto mt-10 rounded-xl flex items-center justify-around flex-col relative `}
            key={videow.id}
          >
            <div className="h-[10vh]"></div>
            <img
              className="rounded-xl w-[80%] h-[20vh] absolute -top-5  "
              src={videow.image}
              alt=""
            />
            <h3 className="font-bold md:text-xl text-lg">{videow.title}</h3>
            <Link to={`${videow.link}`}>
              <button className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#695078] rounded-xl group">
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#281A3D] rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#48315D] rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  {videow.btntext}
                </span>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosBox;
