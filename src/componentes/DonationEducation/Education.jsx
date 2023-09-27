import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveDonateApplication } from "../utility/localstorage";

const Education = () => {
  const educations = useLoaderData();
  const { id } = useParams();
  const idPint = parseInt(id);
  const education = educations.find((education) => education.id === idPint);
  const { text_color, picture, Price, Title, Title_Description } = education;
  const handleClickButton = () => {
    saveDonateApplication(idPint);
    toast("👌 You have donate successfully");
  };
  return (
    <div className="my-7 ">
      <img className="h-[500px] w-[1250px] " src={picture} alt="" />
      <div className="w-[1250px] h-[160px] bg-black/20 absolute -mt-40 mb-96 "></div>

      <button
        onClick={handleClickButton}
        className="btn text-white relative -top-20 ml-10 "
        style={{ backgroundColor: text_color }}
      >
        Donate {Price}
      </button>
      <h2 className="font-bold text-4xl mt-8">{Title}</h2>
      <p className="mt-6 mb-7 text-[#0B0B0BB3]">{Title_Description}</p>
      <ToastContainer />
    </div>
  );
};

export default Education;
