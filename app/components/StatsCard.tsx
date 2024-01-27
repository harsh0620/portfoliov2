import React from "react";

interface StatsCardInterface {
  stat: String;
  description: String;
}
const StatsCard: React.FC<StatsCardInterface> = ({ stat, description }) => {
  return (
    <div 
    className="border border-gray-200 shadow hover:shadow-md dark:hover:shadow-white dark:hover:shadow-sm dark:bg-gray-800 dark:border-gray-700  rounded-lg p-4 w-full m-2"
    >
      <h1 className="text-xl md:text-2xl font-bold mb-4">{stat}</h1>
      <h2 className="text-lg md:text-xl font-semibold">{description}</h2>
    </div>
  );
};

export default StatsCard;
