import { getExperiencesData } from "@/app/lib/data";
import { Experience } from "@/app/lib/definitions";
import React from "react";
import { FaSuitcase } from "react-icons/fa";

export default async function Experiences() {
  const experiencesData = await getExperiencesData();
  return (
    <div className="container my-4 py-12  max-w-2xl  " id="work">
      <div className="flex items-center justify-center">
        <div className={`text-3xl md:text-4xl font-bold mb-4 `}>
          Experiences
        </div>
      </div>
      <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-3 py-4">
        {experiencesData
          ?.sort((a: Experience, b: Experience) => a.id - b.id)
          ?.map((experience: Experience, index: number) => (
            <li className="mb-10 ms-6 " key={index}>
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <FaSuitcase className="w-3 h-3   text-blue-800 dark:text-blue-300" />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {experience?.companyName}{" "}
                {experience?.isLatest && (
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                    Latest
                  </span>
                )}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {experience?.duration}
              </time>
              {experience?.description.map((item, index) => (
                <p
                  className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400"
                  key={index}
                >
                  {item}
                </p>
              ))}
            </li>
          ))}
      </ol>
    </div>
  );
}
