import React from "react";
import img from "../../assets/IMG_20240409_222458_090.jpg";
import img2 from "../../assets/purple-neon-border-with-flare-on-the-top-background-free-video.jpg";
import img3 from "../../assets/registerbg.webp";
import img4 from "../../assets/1.png";
import hover1 from "../../assets/hover1.jpg";
import hover2 from "../../assets/hover2.jpg";
const ModelImages = () => {
  const fakeData = [
    {
      id: 1,
      image: [
        { id: 1, image: img },
        { id: 2, image: img2 },
        { id: 3, image: img3 },
        { id: 4, image: img4 },
        { id: 5, image: hover1 },
        { id: 6, image: hover2 },
      ],
      title: "مدل",
      text: "پس از اتمام دوره آموزش اکستنش مژه و کاشت مژه شما با تمام ابزارهای مور نیاز برای انجام اکستنشن مژه آشنا خواهید شد و به صورت حرفه ای، انواع  روش های اکستنشن مژه را بر روی تمام فرم های چشم اجرا کنید. و به مهم ترین متدهای روز اکستنشن مژه مانند  اکستنشن کلاسیک، اکستنشن والیوم،  اکستننشن مژه مگاوالیوم، اکستنشن مژه روسی، اکستنشن مژه اسپانکی و آموزش مراقبت های بعد از اکستنشن مژه مسلط شوید",
    },
    {
        id: 1,
        image: [
          { id: 1, image: img },
          { id: 2, image: img2 },
          { id: 3, image: img3 },
          { id: 4, image: img4 },
          { id: 5, image: hover1 },
          { id: 6, image: hover2 },
        ],
        title: "مدل",
        text: "پس از اتمام دوره آموزش اکستنش مژه و کاشت مژه شما با تمام ابزارهای مور نیاز برای انجام اکستنشن مژه آشنا خواهید شد و به صورت حرفه ای، انواع  روش های اکستنشن مژه را بر روی تمام فرم های چشم اجرا کنید. و به مهم ترین متدهای روز اکستنشن مژه مانند  اکستنشن کلاسیک، اکستنشن والیوم،  اکستننشن مژه مگاوالیوم، اکستنشن مژه روسی، اکستنشن مژه اسپانکی و آموزش مراقبت های بعد از اکستنشن مژه مسلط شوید",
      }, {
        id: 1,
        image: [
          { id: 1, image: img },
          { id: 2, image: img2 },
          { id: 3, image: img3 },
          { id: 4, image: img4 },
          { id: 5, image: hover1 },
          { id: 6, image: hover2 },
        ],
        title: "مدل",
        text: "پس از اتمام دوره آموزش اکستنش مژه و کاشت مژه شما با تمام ابزارهای مور نیاز برای انجام اکستنشن مژه آشنا خواهید شد و به صورت حرفه ای، انواع  روش های اکستنشن مژه را بر روی تمام فرم های چشم اجرا کنید. و به مهم ترین متدهای روز اکستنشن مژه مانند  اکستنشن کلاسیک، اکستنشن والیوم،  اکستننشن مژه مگاوالیوم، اکستنشن مژه روسی، اکستنشن مژه اسپانکی و آموزش مراقبت های بعد از اکستنشن مژه مسلط شوید",
      }, {
        id: 1,
        image: [
          { id: 1, image: img },
          { id: 2, image: img2 },
          { id: 3, image: img3 },
          { id: 4, image: img4 },
          { id: 5, image: hover1 },
          { id: 6, image: hover2 },
        ],
        title: "مدل",
        text: "پس از اتمام دوره آموزش اکستنش مژه و کاشت مژه شما با تمام ابزارهای مور نیاز برای انجام اکستنشن مژه آشنا خواهید شد و به صورت حرفه ای، انواع  روش های اکستنشن مژه را بر روی تمام فرم های چشم اجرا کنید. و به مهم ترین متدهای روز اکستنشن مژه مانند  اکستنشن کلاسیک، اکستنشن والیوم،  اکستننشن مژه مگاوالیوم، اکستنشن مژه روسی، اکستنشن مژه اسپانکی و آموزش مراقبت های بعد از اکستنشن مژه مسلط شوید",
      },
  ];
  return (
    <>
      {fakeData.map((data,index) => (
        <div key={data.id} className="md:m-10 m-1">
          <div className={`w-fit p-5 rounded-t-lg  ${index % 2 !==0 ? "bg-[#281A3D]" : "bg-[#48315D]"}`} >
            <h3 className="text-white font-bold text-lg">{data.title} </h3>
          </div>
          <div className={`bg-[#281A3D] rounded-md rounded-tr-none p-5 text-white boxShadowModel  ${index % 2 !==0 ? "bg-[#281A3D]" : "bg-[#48315D]"}`}>
            <p>{data.text}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5 my-10 image-container">
              {data.image.map((image) => (
                <img className="md:h-[30vh] h-auto w-full rounded-2xl " src={image.image} />
              ))}
            </div>
            <button className="relative inline-block text-lg group">
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-[#281A3D] rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#281A3D] group-hover:-rotate-180 ease"></span>
                <span className="relative">نمایش بیشتر</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#281A3D] rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ModelImages;
