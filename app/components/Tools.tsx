import React from "react";
import SkillsCard from "./SkillsCard";
import { getToolsData } from "@/app/lib/data";
import { Tool } from "@/app/lib/definitions";
export default async function Tools(){
const toolsData = await getToolsData();
  return (
    <div className={`container flex flex-col items-center justify-start h-auto my-4 py-12 `}>
      <div className="flex items-center justify-center">
        <div className={`text-3xl md:text-4xl font-bold mb-4 `}>Tools</div>
      </div>
      <div className="flex items-center justify-center w-full mt-3 py-4">
        <div className="w-full flex flex-wrap justify-center items-center">
            {toolsData?.map((tool:Tool, id:number) => (
              <SkillsCard key={id} skill={tool?.title} imageLink={tool?.imageUrl}/>
            ))}
        </div>
      </div>
    </div>
  );
};


