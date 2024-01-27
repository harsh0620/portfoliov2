import SocialCard from "./SocialCard";
import {
  FaDownload,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Suspense } from "react";
import { getHeroData } from "@/app/lib/data";
import Image from "next/image";
import TypeWriter from "./TypeWriter";

export default async function Hero() {
  const hero = await getHeroData();
  return (
    <div className=" flex">
      <section className="flex-grow  bg-gradient-to-b ">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 ">
          <div className="grid min-h-screen  grid-cols-1 mx-auto lg:grid-cols-12 gap-x-6 gap-y-8 lg:max-w-none">
            <div className="self-end lg:pb-20 lg:col-span-1"></div>
            <div className="self-center lg:col-span-4 text-center md:mt-0 mt-[20%]">
              <div className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                {hero?.title}
              </div>
              <div className="text-2xl md:text-3xl font-bold mb-5  text-center">
                <TypeWriter optionsData={hero?.descriptionTypeWriter}/>
              </div>
              <div className="mt-2 flex justify-center items-center ">
                <SocialCard
                  link={hero?.socialData?.github}
                  logo={FaGithub}
                  toolTip="Github"
                />
                <SocialCard
                  link={hero?.socialData?.linkedin}
                  logo={FaLinkedin}
                  toolTip="Linkedin"
                />
                <SocialCard
                  link={hero?.socialData?.twitter}
                  logo={FaTwitter}
                  toolTip="Twitter"
                />
                <SocialCard
                  link={hero?.socialData?.instagram}
                  logo={FaInstagram}
                  toolTip="Instagram"
                />
                <SocialCard
                  link={hero?.socialData?.resume}
                  logo={FaDownload}
                  toolTip="Resume"
                />
              </div>
            </div>

            <div className="self-end lg:pb-20 lg:col-span-1"></div>

            <div className="self-center lg:col-span-5 border-b-4 ">
              <Suspense
                fallback={
                  <div className="w-[400px] h-[60vh] bg-gray-200 rounded-lg animate-pulse"></div>
                }
              >
                <Image
                  className="h-auto mx-auto"
                  src={hero?.heroImage|| "./hero.png"}
                  alt="heroImage"
                  width={320}
                  height={400}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
