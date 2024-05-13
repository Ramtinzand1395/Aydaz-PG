import React, { useState } from "react";
import { FaArrowAltCircleDown, FaLock } from "react-icons/fa";
import { videoType } from "../types/corsesTypes";
interface CorsesVideowsprops {
  videow: videoType[];
  headerVideo: string;
}
const CorsesVideows: React.FC<CorsesVideowsprops> = ({
  videow,
  headerVideo,
}) => {
  console.log(videow);

  const [openQuestionId, setOpenQuestionId] = useState<number | null>(null);

  const toggleAnswer = (id: number) => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };
  return (
    <div className="infoShadow mx-2 md:mx-5 lg:mx-10 my-10 rounded-md p-5">
      <h2 className="text-[#281A3D] text-3xl font-bold font-tanha p-10">
        فهرست آموزش ها
      </h2>
      <div className="">
        <video className=" w-full" controls>
          <source src={headerVideo} type="video/mp4" />
          {/* Add additional source elements for other formats if needed */}
          Your browser does not support the video tag.
        </video>
      </div>
      {videow.map((c) => (
        <>
          <div
            onClick={() => toggleAnswer(c.id)}
            className="bg-gray-100 vboxShadow w-full rounded-2xl p-5 mt-5  cursor-pointer"
          >
            <div className="flex items-center justify-between border-b-2 p-2">
              <div className="flex items-center justify-around">
                <div className="bg-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                  {c.id}
                </div>
                <h4 className="font-tanha mx-5">{c.title}</h4>
                <span>
                  <FaLock />
                </span>
              </div>
              <div className="flex items-center">
                <span className=" ">{c.time}</span>
                <div className="mr-5">
                  <FaArrowAltCircleDown
                    size={30}
                    className={`${
                      openQuestionId === c.id ? "rotateUp" : "rotatedown"
                    }`}
                  />
                </div>
              </div>
            </div>
            <div className="mt-2 ">
              {openQuestionId === c.id && (
                <>
                  <video className="w-full h-[50vh] " controls>
                    <source src={c.video} type="video/mp4" />
                    {/* Add additional source elements for other formats if needed */}
                    Your browser does not support the video tag.
                  </video>
                  <p className="font-vazir mt-5">{c.subtitle}</p>
                </>
              )}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default CorsesVideows;
