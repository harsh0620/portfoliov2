import React from "react";
import { Button } from "./ui/button";
import { MdFeedback } from "react-icons/md";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
const GiveFeedback = () => {
  return (
    <div className="relative">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon">
              <Link href={"https://forms.gle/u8fAQQnMKtLHWhrk8"} target="__blank">
                <div className="relative">
                  <MdFeedback className="cursor-pointer h-5 w-5" />
                  <div className="@apply absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                </div>
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Give Feedback</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default GiveFeedback;
