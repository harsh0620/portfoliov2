import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { Button } from "./ui/button";
import { getContactData } from "@/app/lib/data";
import ContactForm from "./ContactForm";
export default async function Contacts(){
  const contactData=await getContactData()
  return (
    <div className="container px-4 my-4 py-12  mx-auto" id="contact">
      <div className="max-w-2xl lg:max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="font-bold mb-4 text-3xl md:text-4xl">Contact me</h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            I'd love to talk about how I can help you.
          </p>
        </div>

        <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
          <ContactForm/>
          {/* <!-- End Card --> */}

          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            <div className="flex gap-x-7 py-6">
              <FaPhone className="mt-1 w-6 h-6" />
              <div className="grow">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  Contact me by phone
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  I'd love to hear you, and help you.
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="tel:8302888090"
                >
                  {contactData?.phone}
                </a>
              </div>
            </div>
            <div className=" flex gap-x-7 py-6">
              <FaEnvelope className="mt-1 w-6 h-6" />
              <div className="grow">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  Contact me by email
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  If you wish to write me an email instead please use
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href={`mailto:${contactData?.email}`}
                >
                 {contactData?.email}
                </a>
              </div>
            </div>
            <div className=" flex gap-x-7 py-6">
              <MdPlace className="mt-1 w-8 h-8" />
              <div className="grow">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  Meet me in person
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  If you want to meet inperson please approach me.
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                 {contactData?.address}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


