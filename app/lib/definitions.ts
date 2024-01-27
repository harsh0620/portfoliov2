export type HeroDefinition = {
  title: string;
  descriptionTypeWriter: string[];
  socialData: {
    github: string;
    linkedin: string;
    twitter: string;
    resume: string;
    instagram: string;
  };
  heroImage: string;
};
export interface PortfolioItem {
  heroData: HeroDefinition;
  aboutData: {
    title: string;
  };
}

export type Stat = {
  title: string;
  description: string;
};
export interface AboutImages {
  imagesUrl: {
    imageUrlsystem: string;
    imageUrllight: string;
    imageUrldark: string;
  };
}
export type Skill={
  title:string,
  imageUrl:string
}
export type Tool={
  title:string,
  imageUrl:string
}
export type Experience={
  companyName:string,
  description:string[],
  designation:string,
  duration:string,
  isLatest:boolean,
}
export type Education={
  cgpa:string,
  college:string,
  courses:string,
  degree:string,
  duration:string,
  isLatest:boolean,
}
export interface TypeWriter{
  optionsData:string[]
}
export type Section={
  id:string,
  title:string,

}
export interface SectionData{
  sectionData:Section[]
}
export type Project=
  {
    title: string;
    id:string
    shortDescription: string;
    longDescription:{
      introduction:string,
      problemStatement:string,
      description:string,
      keyFeatures:string[],
      technologies:string[]
      gallery:string[],
    }
    imageUrl: string;
    liveLink: string;
    codeLink: string;
    isInProgress: boolean;
  };
  export interface LongDescription{
    longDescription:{
      introduction:string,
      problemStatement:string,
      description:string,
      keyFeatures:string[],
      technologies:string[]
      gallery:string[],
    }
  }
export interface ProjectsCard {
  project: {
    title: string;
    id:string
    shortDescription: string;
    longDescription:{
      introduction:string,
      problemStatement:string,
      description:string,
      keyFeatures:string[],
      technologies:string[]
      gallery:string[],
    }
    imageUrl: string;
    liveLink: string;
    codeLink: string;
    isInProgress: boolean;
  };
}