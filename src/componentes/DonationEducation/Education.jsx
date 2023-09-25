import { useLoaderData, useParams } from "react-router-dom";

const Education = () => {
  const educations = useLoaderData();
  const { id } = useParams();
  const idPint = parseInt(id);
  const education = educations.find((education) => education.id === idPint);
  console.log(education);
  return (
    <div className="my-7">
      <img className="h-[500px] w-full" src={education.picture} alt="" />
      <h2 className="font-bold text-4xl mt-8">{education.Title}</h2>
      <p className="mt-6 text-[#0B0B0BB3]">{education.Title_Description}</p>
    </div>
  );
};

export default Education;
