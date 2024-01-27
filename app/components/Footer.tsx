import { getSectionData } from "@/app/lib/data";
import { Section } from "@/app/lib/definitions";
import Link from "next/link";
import React from "react";

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 1;
  const sectionData=await getSectionData();
  return (
    <footer className="p-4 bg-gray-300 md:p-8 lg:p-10 dark:bg-gray-800 border-t">
      <div className="mx-auto max-w-screen-xl text-center">
        <Link
          href="/"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Harsh Chandravanshi
        </Link>
        <p className="my-6 text-gray-500 dark:text-gray-400">Made with next.js , tailwindcss, shadcn, react-icons and firebase</p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          {sectionData.map((section:Section, index:number) => {
            return (
              <li key={index}>
                <Link
                  href={section.id}
                  className="mr-4 hover:underline md:mr-6 "
                >
                  {section.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {startYear}-{currentYear} All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

