import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Information:React.FC = () => {
  return (
    <div className="lg:mx-10 md:mx-5 mx-2 vboxShadow rounded-md my-10 p-5">
      <h2 className="font-tanha text-2xl text-[#281A3D] font-bold">
        اطلاعات دوره
      </h2>
      <div className=" relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 font-vazir my-5">
          <tbody>
            <tr className="border-b border-gray-200 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap   "
              >
                پیش نیاز
              </th>
              <td className="px-6 py-4">ندارد</td>
              <th className="px-6 py-4  ">مدرک فنی حرفه ای</th>
              <td className="px-6 py-4">$ندارد</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-100">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap   "
              >
                مدت زمان آموزش
              </th>
              <td className="px-6 py-4">10 ساعت</td>
              <th className="px-6 py-4  ">شهریه کلاس فشرده</th>
              <td className="px-6 py-4">$ندارد</td>
            </tr>
            <tr className="border-b border-gray-200  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap   "
              >
                مدرک بین المللی{" "}
              </th>
              <td className="px-6 py-4">10 ساعت</td>
              <th className="px-6 py-4  ">کارورزی</th>
              <td className="px-6 py-4">$ندارد</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-100">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap   "
              >
                تعداد نفرات هر کلاس{" "}
              </th>
              <td className="px-6 py-4">10 </td>
            </tr>
          </tbody>
        </table>
        <button className="relative my-5 rounded px-5 py-2.5 overflow-hidden group bg-[#281A3D]  hover:bg-gradient-to-r hover:from-[#281A3D] hover:to-[#4e3377] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#4e3377] transition-all ease-out duration-300">
        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span className="relative flex items-center font-vazir">
          <FaUser className="ml-5" />
          <Link to={"/login"}> ثبت نام در دوره</Link>
        </span>
      </button>
      </div>
    </div>
  );
};

export default Information;
