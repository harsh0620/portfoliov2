import Link from "next/link";
import React from "react";
import { IconType } from "react-icons/lib";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
interface SocialCardInterface {
  link: string;
  logo: IconType;
  toolTip:string
}
const SocialCard: React.FC<SocialCardInterface> = ({ link, logo: Logo,toolTip }) => {
  return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href={link} target="__blank" className="cursor-pointer bg-primary-foreground shadow hover:shadow-md p-1 rounded-full m-2 text-xl transition-transform transform-gpu hover:scale-105">
              <Logo className="m-2 " />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>{toolTip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
  );
};

export default SocialCard;
