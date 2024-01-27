import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface BannerProps {
  title:string,
  description:string,
  buttonText:string,
  buttonLink:string
}

const Banner:React.FC<BannerProps> = ({title,description,buttonText,buttonLink}) => {
  return (
    <div className="container my-4 py-12 text-center">
    <div className="text-3xl md:text-4xl font-bold my-2">
     {title}
    </div>
    <div className="text-gray-700 dark:text-gray-500 text-xl md:text-2xl font-medium my-2">
      {description}
    </div>
    <div className="flex justify-center align-center mt-8">
      <Button>
        <Link href={buttonLink} target="_blank" rel="noopener noreferrer">
          {buttonText}
        </Link>
      </Button>
    </div>
  </div>
  )
}

export default Banner