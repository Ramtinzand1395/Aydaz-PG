import React from "react";
import videow from "../../../assets/ALEX_TERRIBLE_O_Fortuna_COVER_RUSSIAN_HATE_PROJECT_.137.mp4";
const VideowPlayer: React.FC = () => {
  return (
    <div className="  w-full my-5 flex-col flex items-center justify-center">
      <video className="w-[70vw]" controls>
        <source src={videow} type="video/mp4" />
        {/* Add additional source elements for other formats if needed */}
        Your browser does not support the video tag.
      </video>
      <p className="m-10 text-lg text-center">
        اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های
        برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما
        (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که برای امتحان
        فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود.
        طراحان وب و گرافیک از این متن برای پرکردن صفحه و ارائه شکل کلی طرح
        استفاده می‌کنند.
      </p>
    </div>
  );
};

export default VideowPlayer;
