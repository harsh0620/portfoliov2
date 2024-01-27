import Link from "next/link";
import { Button } from "./ui/button";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function SocialCard() {
  return (
    <Link
      href={"/"}
      target="__blank"
      className="cursor-pointer animate-pulse bg-gray-200 shadow hover:shadow-md p-1 rounded-full m-2 text-xl transition-transform transform-gpu hover:scale-105"
    >
      <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
    </Link>
  );
}
export function HeroSkeleton() {
  return (
    <div className="flex">
      <section className="flex-grow bg-gradient-to-b">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid min-h-screen max-w-md grid-cols-1 mx-auto lg:grid-cols-12 gap-x-6 gap-y-8 lg:max-w-none">
            <div className="self-end lg:pb-20 lg:col-span-1"></div>
            <div className="self-center lg:col-span-4 text-center md:mt-0 mt-[20%]">
              <div className="mb-4 flex justify-center text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white animate-pulse">
                {/* Skeleton for title */}
                <span className="skeleton-line skeleton-title"></span>
              </div>
              <div className="flex justify-center text-2xl md:text-3xl font-bold mb-5 text-center animate-pulse">
                {/* Skeleton for description */}
                <span className="skeleton-line skeleton-description"></span>
              </div>
              <div className="mt-2 flex justify-center items-center animate-pulse">
                {/* Skeletons for social cards */}
                <SocialCard />
                <SocialCard />
                <SocialCard />
                <SocialCard />
                <SocialCard />
              </div>
            </div>

            <div className="self-end lg:pb-20 lg:col-span-1"></div>

            <div className="self-center lg:col-span-5 border-b-4 flex justify-center">
              {/* Skeleton for image */}
              <div className="w-[400px] h-[60vh] bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export function AboutSkeleton() {
  return (
    <section
      className="container flex justify-center items-center my-4 py-12 w-full h-screen"
      id="about"
    >
      <div className="mx-auto flex flex-col md:flex-row w-full">
        <div className="md:w-1/2 flex flex-col items-start justify-start py-4 md:m-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-pulse w-full">
            <span className="skeleton-line skeleton-title"></span>
          </h2>
          <p className="text-gray-700 dark:text-gray-500 text-lg md:text-xl flex-wrap text-justify animate-pulse w-full">
            <span className="skeleton-line skeleton-description"></span>
          </p>
          <section className="w-full">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
              <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                {Array.from({ length: 3 }, (_, index) => (
                  <div
                    className="flex flex-col items-center justify-center animate-pulse w-[100px]"
                    key={index}
                  >
                    <dt className="mb-2 text-3xl md:text-4xl font-extrabold animate-pulse w-full">
                      <span className="skeleton-line skeleton-stat-title"></span>
                    </dt>
                    <dd className="font-light text-gray-500 dark:text-gray-400 animate-pulse  w-full">
                      <span className="skeleton-line skeleton-description"></span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        </div>
        <div className="md:w-1/2 flex flex-col items-center justify-center md:m-2">
          <div className="flex justify-between">
            <div className="w-[400px] h-[300px] bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
export function BannerSkeleton() {
  return (
    <div className="container my-4 py-12 text-center">
      <div className="text-3xl flex justify-center md:text-4xl font-bold my-2 animate-pulse">
        <span className="skeleton-line skeleton-title"></span>
      </div>
      <div className="text-gray-700 flex justify-center dark:text-gray-500 text-xl md:text-2xl font-medium my-2 animate-pulse">
        <span className="skeleton-line skeleton-description"></span>
      </div>
      <div className="flex justify-center align-center mt-8 animate-pulse">
        <Button className="w-32 h-10 bg-gray-200 rounded-lg animate-pulse">
          <span></span>
        </Button>
      </div>
    </div>
  );
}
interface skillsinterface {
  skillsLength: number;
}
export const SkillsSkeleton: React.FC<skillsinterface> = ({ skillsLength }) => {
  return (
    <div
      className={`container flex flex-col items-center justify-start h-auto my-4 py-12 `}
      id="skills"
    >
      <div className="flex items-center justify-center animate-pulse">
        <div
          className={`text-3xl md:text-4xl font-bold mb-4 animate-pulse w-[200px] flex justify-center items-center`}
        >
          <span className="skeleton-line skeleton-title h-12"></span>
        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-3 py-4 animate-pulse">
        <div className="w-full flex flex-wrap justify-center items-center">
          {Array.from({ length: skillsLength }, (_, id) => (
            <SkillsCardSkeleton key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};
interface toolsinterface {
  toolsLength: number;
}
export const ToolsSkeleton: React.FC<toolsinterface> = ({ toolsLength }) => {
  return (
    <div
      className={`container flex flex-col items-center justify-start h-auto my-4 py-12 `}
      id="tools"
    >
      <div className="flex items-center justify-center animate-pulse">
        <div
          className={`text-3xl md:text-4xl font-bold mb-4 animate-pulse w-[200px] flex justify-center items-center`}
        >
          <span className="skeleton-line skeleton-title h-12"></span>
        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-3 py-4 animate-pulse">
        <div className="w-full flex flex-wrap justify-center items-center">
          {Array.from({ length: toolsLength }, (_, id) => (
            <SkillsCardSkeleton key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export function SkillsCardSkeleton() {
  return (
    <div className="md:h-32 md:w-32 h-28 w-28 m-4 flex flex-col justify-center items-center dark:hover:shadow-white dark:hover:shadow-md border border-gray-200 shadow hover:shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-lg animate-pulse">
      <div className="md:h-12 md:w-12 h-8 w-8 bg-gray-200 rounded-full animate-pulse"></div>
      <h3 className={`font-medium text-center mt-1 animate-pulse`}>
        <span className="skeleton-line skeleton-skill-name"></span>
      </h3>
    </div>
  );
}
export const ProjectsSkeleton = () => {
  return (
    <div
      className={`container flex flex-col items-center justify-start h-auto my-4 py-12 `}
      id="projects"
    >
      <div className="flex items-center justify-center animate-pulse">
        <div className={`text-3xl md:text-4xl font-bold mb-4 animate-pulse w-[200px] flex justify-center items-center`}>
          <span className="skeleton-line skeleton-title"></span>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center items-center animate-pulse">
        {Array.from({ length: 6 }, (_, index) => (
          <ProjectsCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export const ProjectsCardSkeleton = () => {
  return (
    <div className="w-[320px] bg-gray-200 border dark:hover:shadow-white dark:hover:shadow-md border-gray-200 rounded-lg shadow hover:shadow-md dark:bg-gray-800 dark:border-gray-700 md:m-4 m-2 animate-pulse">
      <Link href="#">
        <div className="rounded-t-lg bg-gray-200 h-40 w-full animate-pulse"></div>
      </Link>
      <div className="p-5 animate-pulse">
        <h5 className="mb-2 flex items-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white animate-pulse">
          <span className="skeleton-line skeleton-title"></span>
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 animate-pulse">
          <span className="skeleton-line skeleton-description"></span>
        </p>
        <div className="flex justify-start items-center animate-pulse">
          <Link
            href="#"
            target="_blank"
            className="inline-flex items-center p-2 text-sm font-medium text-center border border-gray-200 shadow hover:shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-full mr-2 bg-gray-200 animate-pulse"
          >
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
          </Link>
          <Link
            href="#"
            target="_blank"
            className="inline-flex items-center p-2 text-sm font-medium text-center border border-gray-200 shadow hover:shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-full mr-2 bg-gray-200 animate-pulse"
          >
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export const ExperiencesSkeleton = () => {
    return (
      <div className="container my-4 py-12 max-w-2xl animate-pulse" id="work">
        <div className="flex items-center justify-center animate-pulse">
          <div className={`text-3xl md:text-4xl font-bold mb-4 animate-pulse w-[300px] flex justify-center items-center`}>
            <span className="skeleton-line skeleton-title"></span>
          </div>
        </div>
        <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-3 py-4 animate-pulse">
          {Array.from({ length: 3 }, (_, index) => (
            <li className="mb-10 ms-6 animate-pulse" key={index}>
              <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 animate-pulse">
                <div className="w-3 h-3 bg-gray-200 rounded-full animate-pulse"></div>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white animate-pulse">
                <span className="skeleton-line skeleton-company-name"></span>
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 animate-pulse">
                <span className="skeleton-line skeleton-duration"></span>
              </time>
              {Array.from({ length: 3 }, (_, index) => (
                <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400 animate-pulse" key={index}>
                  <span className="skeleton-line skeleton-description"></span>
                </p>
              ))}
            </li>
          ))}
        </ol>
      </div>
    );
  };
export const EducationSkeleton = () => {
    return (
      <div className="container my-4 py-12 max-w-2xl animate-pulse" id="work">
        <div className="flex items-center justify-center animate-pulse">
          <div className={`text-3xl md:text-4xl font-bold mb-4 animate-pulse w-[300px] flex justify-center items-center`}>
            <span className="skeleton-line skeleton-title"></span>
          </div>
        </div>
        <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-3 py-4 animate-pulse">
          {Array.from({ length: 1 }, (_, index) => (
            <li className="mb-10 ms-6 animate-pulse" key={index}>
              <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 animate-pulse">
                <div className="w-3 h-3 bg-gray-200 rounded-full animate-pulse"></div>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white animate-pulse">
                <span className="skeleton-line skeleton-company-name"></span>
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 animate-pulse">
                <span className="skeleton-line skeleton-duration"></span>
              </time>
              {Array.from({ length: 3 }, (_, index) => (
                <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400 animate-pulse" key={index}>
                  <span className="skeleton-line skeleton-description"></span>
                </p>
              ))}
            </li>
          ))}
        </ol>
      </div>
    );
  };
  
  export const ContactsSkeleton = () => {
    return (
      <div className="container px-4 my-4 py-12 mx-auto animate-pulse" id="contact">
        <div className="max-w-2xl lg:max-w-5xl mx-auto animate-pulse">
          <div className="text-center animate-pulse">
            <h1 className="font-bold mb-4 text-3xl md:text-4xl skeleton-title animate-pulse">
              Contact me
            </h1>
            <p className="mt-1 text-gray-600 dark:text-gray-400 animate-pulse">
              I'd love to talk about how I can help you.
            </p>
          </div>
  
          <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
            <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700 animate-pulse">
              <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200 animate-pulse">
                Fill in the form
              </h2>
  
              <form className="animate-pulse">
                <div className="grid gap-4 animate-pulse">
                  {/* Placeholder elements for form fields and blocks */}
                  <div className="skeleton-line skeleton-form-field animate-pulse" />
                  <div className="skeleton-line skeleton-form-field animate-pulse" />
                  <div className="skeleton-line skeleton-form-field animate-pulse" />
                  <div className="skeleton-line skeleton-form-field animate-pulse" />
                  <div className="skeleton-line skeleton-form-field animate-pulse" />
                  {/* Placeholder element for the button */}
                  <button className="skeleton-button animate-pulse"></button>
                </div>
  
                <div className="mt-3 text-center animate-pulse">
                  <p className="text-sm text-gray-500 animate-pulse">
                    I'll get back to you in 1-2 days.
                  </p>
                </div>
              </form>
            </div>
            {/* Placeholder block for contact methods */}
            <div className="divide-y divide-gray-200 dark:divide-gray-800 animate-pulse">
              <div className="flex gap-x-7 py-6 animate-pulse">
                <div className="w-6 h-6 rounded-full bg-gray-200 animate-pulse"></div>
                <div className="grow animate-pulse">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 skeleton-title animate-pulse">
                    Contact me by phone
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 animate-pulse">
                    I'd love to hear you, and help you.
                  </p>
                  <a className="skeleton-link animate-pulse"></a>
                </div>
              </div>
              {/* Placeholder blocks for other contact methods */}
              <div className="flex gap-x-7 py-6 animate-pulse"></div>
              <div className="flex gap-x-7 py-6 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  