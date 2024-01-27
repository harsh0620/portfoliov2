import { getProjectById } from "@/app/lib/data";

import Link from "next/link";
import React from "react";
import { FaCode, FaPlay } from "react-icons/fa";
import { notFound } from 'next/navigation';
import ProjectDescription from "@/app/components/ProjectDescription";
import BreadCrumb from "@/app/components/BreadCrumb";
export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const project=await getProjectById(id);
  if (!project) {
    notFound();
  }
  return (
    <main>
      <div className="mb-4  ">
      <div
        className="relative w-full h-[40vh] bg-cover bg-start "
        
      ><div className="bg-cover bg-start w-full h-[40vh] bg-blur" style={{
        backgroundImage: `url('${project?.imageUrl}')`,
      }}></div>
        <div className="absolute bottom-0 container flex justify-center items-center  " style={{ transform: 'translateY(50%)' }}>
        <div className=" rounded-lg w-full shadow dark:bg-gray-900 bg-white hover:shadow-md  text-white font-bold text-2xl max-w-3xl" >
          <div className="p-5">
            <BreadCrumb current={id}/>
            <h5 className="my-4 flex items-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {project?.title}
              {project?.isInProgress && (
                <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                  WIP
                </span>
              )}
            </h5>
            <div className="flex justify-start items-center text-primary mt-4">
              <Link
                href={project?.liveLink}
                target="_blank"
                className="inline-flex items-center p-2 text-sm font-medium text-center border border-gray-200  shadow hover:shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-full mr-2"
              >
                <FaPlay />
              </Link>
              <Link
                href={project?.codeLink}
                target="_blank"
                className="inline-flex items-center p-2 text-sm font-medium text-center border border-gray-200  shadow hover:shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-full mr-2"
              >
                <FaCode />
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
      <div className="mt-[100px] container flex justify-center">
      <ProjectDescription longDescription={project?.longDescription}/>
      </div>
    </main>
  );
}
