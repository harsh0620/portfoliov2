'use client'
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "./ui/sheet";
  import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import Link from "next/link";
import { Button } from "./ui/button";
import { SectionData } from '@/app/lib/definitions';
import { usePathname } from 'next/navigation';
const SheetComponent:React.FC<SectionData> = ({sectionData}) => {
  const pathname=usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className='z-[100]'>
          <HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <HamburgerMenuIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Slider</span>
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>Harsh Chandravanshi</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 p-4 justify-center items-center text-center mt-2">
          {sectionData.map((section, index) => (
            <SheetClose
              asChild
              key={index}
              className={clsx(`border p-2 w-full rounded-md`, {
                "bg-primary text-secondary": pathname === section.id,
              })}
            >
              <Link href={section.id}>{section.title}</Link>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default SheetComponent