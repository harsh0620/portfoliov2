'use client'
import { AboutImages } from '@/app/lib/definitions';
import { useTheme } from 'next-themes'
import React from 'react'

const AboutImage:React.FC<AboutImages> = ({imagesUrl}) => {
    const {theme}=useTheme();
  return (
    <div className="md:w-1/2 flex flex-col   items-center justify-center md:m-2">
          <div className="flex justify-between">
            <img
              src={
                theme == "dark"
                  ? `${imagesUrl?.imageUrldark}`
                  : theme == "light"
                  ? `${imagesUrl?.imageUrllight}`
                  : `${imagesUrl?.imageUrlsystem}`
              }
              alt="anshyati"
              className=""
            />
          </div>
        </div>
  )
}

export default AboutImage