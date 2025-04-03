
import Banner from "./components/Banner";
import Contacts from "./components/Contacts";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Experiences from "./components/Experiences";
import React, { Suspense } from "react";
import {
  BannerSkeleton,
  HeroSkeleton,
  AboutSkeleton,
  SkillsSkeleton,
  ToolsSkeleton,
  ProjectsSkeleton,
  ExperiencesSkeleton,
  EducationSkeleton,
} from "./components/skeletons";
import About from "./components/About";
import { getHeroData } from "./lib/data";
export default async function Home() {
  const hero = await getHeroData();
  return (
    <main>
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<AboutSkeleton />}>
        <About />
      </Suspense>
      <Suspense fallback={<BannerSkeleton />}>
        <Banner
          title="Let's Work Together!"
          description="Always looking for new opportunities"
          buttonLink="/#contact"
          buttonText="Collaborate"
        />
      </Suspense>
      <Suspense fallback={<SkillsSkeleton skillsLength={20} />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<ToolsSkeleton toolsLength={6} />}>
        <Tools />
      </Suspense>
      <Suspense fallback={<ProjectsSkeleton />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<BannerSkeleton />}>
        <Banner
          title="Wants to give freelance work!"
          description="Always looking for new opportunities"
          buttonLink="https://www.fiverr.com/harshchandravan/create-custom-web-applications"
          buttonText="Hire Me"
        />
      </Suspense>
      <Suspense fallback={<ExperiencesSkeleton />}>
        <Experiences />
      </Suspense>
      <Suspense fallback={<EducationSkeleton />}>
        <Education />
      </Suspense>
      <Contacts />
      <Suspense fallback={<BannerSkeleton />}>
        <Banner
          title="Wants to hire me for your company"
          description="Always looking for new opportunities"
          buttonLink={hero?.socialData?.resume}
          buttonText="Check out my resume"
        />
      </Suspense>
    </main>
  );
}
