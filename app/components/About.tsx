import React from "react";
import { getAboutData } from "@/app/lib/data";
import { Stat } from "@/app/lib/definitions";
import AboutImage from "./AboutImage";


export default async function About () {
  const aboutData = await getAboutData();
  return (
    <section className="container flex justify-center items-center my-4 py-12" id="about">
      <div className="mx-auto  flex flex-col md:flex-row">
        <div className="md:w-1/2 flex flex-col items-start justify-start py-4 md:m-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {aboutData?.title}
          </h2>
          <p className="text-gray-700 dark:text-gray-500 text-lg md:text-xl flex-wrap text-justify">
            {aboutData?.description}
          </p>
          <section className=" w-full">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
              <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                {aboutData?.stats?.map((stat:Stat, index:number) => (
                  <div
                    className="flex flex-col items-center justify-center"
                    key={index}
                  >
                    <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                      {stat?.title}
                    </dt>
                    <dd className="font-light text-gray-500 dark:text-gray-400">
                      {stat?.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        </div>
        <AboutImage imagesUrl={aboutData?.imagesUrl} />
      </div>
    </section>
  );
};
