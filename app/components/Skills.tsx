import React from "react";
import SkillsCard from "./SkillsCard";
import { getSkillsData } from "@/app/lib/data";
import { Skill } from "@/app/lib/definitions";
export default async function Skills () {
  const skillsData=await getSkillsData();
  return (
    <div className={`container flex flex-col items-center justify-start h-auto my-4 py-12  `} id="skills">
      <div className="flex items-center justify-center">
        <div className={`text-3xl md:text-4xl font-bold mb-4 `}>Skills</div>
      </div>
      <div className="flex items-center justify-center w-full mt-3 py-4">
        <div className="w-full flex flex-wrap justify-center items-center">
            {skillsData?.map((skill:Skill, id:number) => (
              <SkillsCard key={id} skill={skill?.title} imageLink={skill?.imageUrl} />
            ))}
        </div>
      </div>
    </div>
  );
};

