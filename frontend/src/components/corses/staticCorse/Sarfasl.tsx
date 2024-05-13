import React from "react";
import "../corsesstyles.css";
const Sarfasl:React.FC = () => {
  return (
    <div className="lg:mx-10 md:mx-5 mx-2 vboxShadow rounded-md my-10 p-5">
      <h2 className="font-tanha text-2xl text-[#281A3D] font-bold ">
        سر فصل های دوره حضوری
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <div className="font-vazir my-5">
          <ul>
            <li>آشنایی با انواع مژه</li>
            <li>آشنایی با مواد و ابزار اکستنشن مژه</li>
            <li>آشنایی با انواع روش های اکستنشن مژه</li>
            <li>آموزش اکستنشن مژه تار به تار و کلاسیک</li>
            <li>آموزش اکستنشن مژه سه بعدی 3D</li>
            <li>آموزش اکستنشن نچرال</li>
            <li>آموزش اکستنشن مژه روسی</li>
            <li>آموزش اکستنشن فانتزی و رنگی</li>
            <li>آموزش ترمیم و ریموو کاشت مژه</li>
            <li>آموزش افکت مختلف برای انواع چشم</li>
            <li>آموزش انواع تکنیک های کاربردی روز</li>
            <li>آموزش اکستنشن های اسپایکی، والیوم، مگاوالیوم، هیبریدی</li>
          </ul>
        </div>
        <div className="justify-end flex">
          <div className="bg-[#281A3D] whyShadow rounded-md flex flex-col items-start justify-around p-5 w-full md:w-fit">
            <h2 className="font-tanha text-2xl text-white font-bold ">
              چرا آموشگاه آیدا
            </h2>
            <ul className="font-vazir text-white">
              <li>مشاوره رایگان تاسیس آرایشگاه زنانه</li>
              <li>امکان پرداخت اقساطی</li>
              <li>مدرک فنی حرفه ای بین المللی قابل ترجمه</li>
              <li>ارتباط شما با سالن‌های آرایشی در صورت امکان</li>
              <li>معرفی خوابگاه (مخصوص هنرجویان شهرستانی)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sarfasl;
