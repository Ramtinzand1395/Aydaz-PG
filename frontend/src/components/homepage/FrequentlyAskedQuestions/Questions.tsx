import React, { useState } from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";

const Questions = () => {
  const questions = [
    {
      id: 1,
      question: "چگونه میتوانم در دوره های آموزشی آکادمی آیداز شرکت کنم؟",
      answer: "not anserd",
    },
    {
      id: 2,
      question: " آیا دوره های آموزشی آکادمی آیداز همراه با گواهینامه هیتند؟",
      answer:
        "بعله تمامی هنرآموزان ما میتواند در پایان دوره   با ثبت اسم شخصی گواهینماه معتبر آکادمی را دریافت کنند که به مهارت های آموخته شده توسط آنها تاییدیه میدهد.",
    },
    {
      id: 3,
      question:
        "آیا دوره های آموزشی آکادمی آیداز به صورت آنلاین یا حضوری برگژار میشوند؟",
      answer:
        "بله، تمامی دوره‌های آموزشی ما هم به صورت آنلاین  و هم حضوری برگزار می‌شوند. این امکان را به دانشجویان می‌دهد که از هر کجا که باشند و با توجه به زمانی که برای آموزش دارند، به دوره‌های مورد نظرشان دسترسی داشته باشند.",
    },
    {
      id: 4,
      question: "آیا محتوای آموزشی آکادمی آیداز به روز میشنوند ؟",
      answer:
        "بله، آکادمی ما به‌طور مداوم محتوای دوره‌های آموزشی را بررسی می‌کنند و آن را آپدیت می‌کنند تا با آخرین تکنیک ها و تخصص های بافتمو هم‌گام باشد.",
    },
    {
      id: 5,
      question: "آیا امکان دسترسی به محتوای آموزشی پس از پایان دوره وجود دارد؟",
      answer:
        "بله، دانشجویان پس از پایان دوره‌های آموزشی، به صورت دائمی دسترسی به محتوای آموزشی خریداری شده خود دارند و در قسمت داشبرد ثبتنامی خودشان قرار میکیرد و هر زمانی  که بخواهند میتوانند به آن مراجعه کنند و از آموزش ها دیدن کنند.",
    },
  ];

  const [openQuestionId, setOpenQuestionId] = useState(null);

  const toggleAnswer = (id) => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };

  return (
    <div className="container mx-10 grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
      <div className="text-center md:text-start">
        <h3 className="font-bold md:text-4xl lg:text-6xl mb-5 text-[#281A3D]">
          سوالات متداول
        </h3>
        <h4 className="text-4xl mb-5"> پرتکرار ترین </h4>
        <p className="text-4xl mb-5">
          سوالات
          <span className="text-yellow-500 text-4xl m-2 "> کاربران</span>
        </p>
      </div>
      <div className="col-span-2">
        {questions.map((item) => (
          <div
            key={item.id}
            className="bg-[#281A3D] mb-2 text-white rounded-md cursor-pointer faq-item"
            onClick={() => toggleAnswer(item.id)}
          >
            <div className="flex items-center justify-between p-5">
              <div className="">
                <h4 className="">{item.question}</h4>
              </div>
              <div className="">
                <FaArrowAltCircleDown size={30} className={`${openQuestionId === item.id ? "rotateUp" : "rotatedown"}`} />
              </div>
            </div>
            {openQuestionId === item.id && (
              <div className="bg-[#B2A3BA] p-5 mt-4 text-black answer-box">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
