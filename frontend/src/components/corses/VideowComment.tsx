import React from "react";
import img from "../../assets/IMG_20240409_222458_280.jpg";
const VideowComment:React.FC = () => {
  const comments = [
    {
      id: 1,
      image: img,
      username: "ramtin",
      date: "2024/12/02",
      comment: "با سلام دوره بسیار عالی و پر محتوا بود :-)",
    },
    {
        id: 2,
        image: img,
        username: "ramtin2",
        date: "2024/12/22",
        comment: "با سلام دوره بسیار عالی و پر محتوا نبود ;-)",
      },
  ];
  return (
    <div className="infoShadow mx-2 md:mx-5 lg:mx-10 my-10 rounded-md p-5">
      <h2 className="text-[#281A3D] text-3xl font-bold font-tanha p-10">
        نظرات کاربران
      </h2>
      <p className="font-vazir">نظر خود را در مورد دوره وارد کنید</p>
      <textarea title="comments" cols={50} rows={10} className="border-2 w-full my-2"></textarea>
      {comments.map((comment) => (
        <div key={comment.id} className="flex items-center  my-5">
          <img src={comment.image} className="w-20 h-20 rounded-full ml-5" alt="" />
          <div className="border-2 p-5 w-full h-fit rounded-md">
            <div className="flex items-center">
                <p className="border-l-2 p-3 ml-5">
                    {comment.username}
                </p>
                <p>
                    {comment.date}
                </p>
            </div>
            <div className="mt-4">
                {comment.comment}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideowComment;
