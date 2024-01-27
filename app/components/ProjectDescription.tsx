import { LongDescription } from "@/app/lib/definitions";
import React from "react";

const ProjectDescription: React.FC<LongDescription> = ({ longDescription }) => {
  return (
    <div className="max-w-3xl flex flex-col justify-center mb-12">
      <div className="my-2">
        <h1 className="text-2xl my-2">Introduction</h1>
        <p>{longDescription?.introduction}</p>
      </div>
      <div className="my-2">
        <h1 className="text-2xl my-2">Problem Statement</h1>
        <p>{longDescription?.problemStatement}</p>
      </div>
      <div className="my-2">
        <h1 className="text-2xl my-2">Description</h1>
        <p>{longDescription?.description}</p>
      </div>
      <div className="my-2">
        <h1 className="text-2xl my-2">Key Features</h1>
        <ol>
          {longDescription?.keyFeatures?.map((feature, index) => {
            return <li key={index}>{feature}</li>;
          })}
        </ol>
      </div>
      <div className="my-2">
        <h1 className="text-2xl my-2">Technologies Used</h1>
        <ol>
          {longDescription?.technologies?.map((tech, index) => {
            return <li key={index}>{tech}</li>;
          })}
        </ol>
      </div>
      <div className="my-2">
        <h1 className="text-2xl my-2">Screens</h1>
        {longDescription?.gallery?.map((image, index) => {
          return (
            <div className="w-full mx-auto my-10">
              <div className="w-full h-11 rounded-t-lg border-2 border-black dark:border-white flex justify-start items-center space-x-1.5 px-3">
                <span className="w-3 h-3 rounded-full bg-black dark:bg-white"></span>
                <span className="w-3 h-3 rounded-full bg-black dark:bg-white"></span>
                <span className="w-3 h-3 rounded-full bg-black dark:bg-white"></span>
              </div>
              <div className="border-2 dark:border-white border-black border-t-0 w-full h-94 overflow-y-auto overflow-x-hidden">
                <img
                  className="w-full flex justify-center items-center"
                  src={image}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectDescription;
