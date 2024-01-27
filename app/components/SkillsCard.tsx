import React from "react";

interface SkillsCardInterface {
    skill: string;
    imageLink?: string; 
}
const SkillsCard: React.FC<SkillsCardInterface> = ({ skill,imageLink }) => {
  return (
    <div  className="md:h-32 md:w-32 h-28 w-28 m-4 flex flex-col justify-center items-center dark:hover:shadow-white dark:hover:shadow-md border border-gray-200  shadow hover:shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-lg ">
      <img
        src={imageLink}
        alt={skill}
        className="md:h-12 md:w-12 h-8 w-8 pointer-events-none"
      />
      <h3 className={`font-medium text-center mt-1`}>{skill}</h3>
    </div>
  );
};

export default SkillsCard;
