import React from "react";
import videow from "../../../assets/ALEX_TERRIBLE_O_Fortuna_COVER_RUSSIAN_HATE_PROJECT_.137.mp4";
// import left1 from "../../../assets/Subtract.png";

const VideowPlayer: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 p-2 my-5 md:p-5 lg:p-10">
        <h3 className="text-[#281A3D]  my-10 mx-2 md:mx-5 lg:mx-10 font-bold text-4xl">
          چرا آنلاین آموزش ببینم!؟
        </h3>
        <div className="  w-full flex-col my-5 flex items-center justify-center">
          <video className=" " controls>
            <source src={videow} type="video/mp4" />
            {/* Add additional source elements for other formats if needed */}
            Your browser does not support the video tag.
          </video>
          <p className="m-10 text-lg text-center">
            بافتمو خیلی قشنگ و سادست ازتو یه آدم قوی اما حساس میسازه از تو یک
            انسان هدفمند میسازه،که خلق کننده هنر باشی و با این هنر زیبا میتونی
            خودتو یه درآمد برسونی حالا با من همراه شو تا دنیای خودمو بهت نشون
            بدم!
          </p>
        </div>
      </div>
      {/* <div className="relative">
        <img src={left1} className="absolute top-0 left-0" alt="" />
      </div> */}
    </>
  );
};

export default VideowPlayer;
