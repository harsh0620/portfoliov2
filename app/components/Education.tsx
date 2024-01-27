import { getEducationData } from "@/app/lib/data";
import { Education } from "@/app/lib/definitions";
import React from "react";
import { FaSchool } from "react-icons/fa";

export default async function Education() {
  const educationData=await getEducationData();
  return (
    <div className="container my-4 py-12  max-w-2xl  " id="education">
      <div className="flex items-center justify-center">
        <div className={`text-3xl md:text-4xl font-bold mb-4 `}>Education</div>
      </div>
      <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-3 py-4">
        {educationData?.map((education:Education, index:number) => (
          <li className="mb-10 ms-6 " key={index}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <FaSchool className="w-3 h-3  text-blue-800 dark:text-blue-300" />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {education?.college}{" "}
              {education?.isLatest && (
                <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                  Latest
                </span>
              )}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {education?.duration}
            </time>
            <h2 className="block mb-2 text-sm font-normal leading-none ">
              Degree: {education?.degree} CGPA: {education?.cgpa}
            </h2>
            

            <div className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
              {education?.courses}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};
