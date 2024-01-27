import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface HireBannerProps {
  fiverrLink: string;
}

const HireBanner: React.FC<HireBannerProps> = ({ fiverrLink }) => {
  return (
    <div className="  py-4 my-4 text-center">
      <div className="text-3xl md:text-4xl font-bold my-2">
        Let's work together!
      </div>
      <div className="text-xl md:text-2xl font-medium my-2">
        Always looking for new opportunities.
      </div>
      <div className="flex justify-center align-center my-2">
        <Button >
          <Link href={fiverrLink} target="_blank" rel="noopener noreferrer">
            Hire Me
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default HireBanner;
