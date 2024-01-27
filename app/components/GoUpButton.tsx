"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "./ui/button";

const GoUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 100); // Adjust the value based on when you want the button to appear
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleGoUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className={`${isVisible ? "visible" : "invisible"}`}
      onClick={handleGoUp}
    >
      <FaArrowUp className="cursor-pointer h-[1.2rem] w-[1.2rem] " />
    </Button>
  );
};

export default GoUpButton;
