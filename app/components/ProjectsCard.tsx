import { ProjectsCard } from "@/app/lib/definitions";
import Link from "next/link";
import React from "react";
import { FaCode, FaPlay } from "react-icons/fa";

const ProjectsCard: React.FC<ProjectsCard> = ({ project }) => {
  const {
    imageUrl,
    id,
    title,
    shortDescription,
    liveLink,
    codeLink,
    isInProgress,
  } = project;
  return (
    <div className="max-w-xs bg-white border dark:hover:shadow-white dark:hover:shadow-md border-gray-200 rounded-lg shadow hover:shadow-md dark:bg-gray-800 dark:border-gray-700 md:m-4 m-2">
      <Link href={`/project/${id}`}>
        <img className="rounded-t-lg" src={imageUrl} alt="" />
      </Link>
      <div className="p-5">
        <Link href={`/project/${id}`}>
          <h5 className="mb-2 flex items-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
            {isInProgress && (
              <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                WIP
              </span>
            )}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {shortDescription}
        </p>
        <div className="flex justify-start items-center">
          <Link
            href={liveLink}
            target="_blank"
            className="inline-flex items-center p-2 text-sm font-medium text-center border border-gray-200  shadow hover:shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-full mr-2"
          >
            <FaPlay />
          </Link>
          <Link
            href={codeLink}
            target="_blank"
            className="inline-flex items-center p-2 text-sm font-medium text-center border border-gray-200  shadow hover:shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-full mr-2"
          >
            <FaCode />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
