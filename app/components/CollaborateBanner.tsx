import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface CollaborateBannerProps {
  contactLink: string;
}

const CollaborateBanner: React.FC<CollaborateBannerProps> = ({ contactLink }) => {
  return (
    <div className=" my-4 py-12 text-center">
      <div className="text-3xl md:text-4xl font-bold my-2">
        Let's work together!
      </div>
      <div className="text-xl md:text-2xl font-medium my-2">
        Always looking for new opportunities.
      </div>
      <div className="flex justify-center align-center mt-8">
        <Button>
          <Link href={contactLink} target="_blank" rel="noopener noreferrer">
            Collaborate With Me
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CollaborateBanner;
