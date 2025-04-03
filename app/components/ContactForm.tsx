"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { Loader2 } from "lucide-react";
const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [isHuman, setIsHuman] = useState(false); // State to track whether the user is human
  const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLICKEY ?? "";
  const template = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE ?? "";
  const service = process.env.NEXT_PUBLIC_EMAIL_SERVICE ?? "";
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";
  // Helper function for input validation
  function validateInput(value: string, fieldName: string): boolean {
    if (!value.trim()) {
      window.alert(`Please enter ${fieldName}.`);
      return false;
    }

    // Validate email format
    if (fieldName === "Email" && !isValidEmail(value)) {
      window.alert("Please enter a valid email address.");
      return false;
    }

    // Validate phone number format
    if (fieldName === "Phone Number" && !isValidPhoneNumber(value)) {
      window.alert("Please enter a valid phone number.");
      return false;
    }

    // Validate name length (assuming a minimum length of 2 characters)
    if (
      (fieldName === "First Name" || fieldName === "Last Name") &&
      value.trim().length < 2
    ) {
      window.alert(`${fieldName} should be at least 2 characters long.`);
      return false;
    }

    return true;
  }

  // Helper function to validate email format
  function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Helper function to validate phone number format
  function isValidPhoneNumber(phoneNumber: string): boolean {
    // Add your phone number validation logic here
    // This example assumes a simple validation for numeric characters and length
    const phoneRegex = /^[0-9]+$/;
    return phoneRegex.test(phoneNumber) && phoneNumber.length >= 10; // Adjust the length as needed
  }

  const handleRecaptchaChange = (value: string | null) => {
    setIsHuman(!!value);
  };
  const recaptchaStyle = {
    width: "100%", // Set the width to match other input fields
    marginBottom: "16px", // Add some margin for spacing
  };
  async function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isHuman) {
      window.alert("Please complete the reCAPTCHA challenge.");
      return;
    }
    if (
      !validateInput(firstName, "First Name") ||
      !validateInput(lastName, "Last Name") ||
      !validateInput(email, "Email") ||
      !validateInput(phone, "Phone Number") ||
      !validateInput(message, "Message")
    ) {
      return;
    }
    const formData = {
      firstName,
      lastName,
      phone,
      email,
      message,
    };
    emailjs.init(publicKey);
    try {
      setIsLoading(true);
      const result = await emailjs.send(service, template, formData, publicKey);
      setIsLoading(false);
      window.alert(
        "Email sent successfully!.I will get back to you in 1-2 days.Please ensure your email is correct."
      );
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      window.alert("Error sending email. Please try again later.");
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    setPhone("");
  }
  return (
    <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
      <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
        Fill in the form
      </h2>
      <form onSubmit={(e) => sendEmail(e)}>
        <div className="grid gap-4">
          {/* <!-- Grid --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="hs-firstname-contacts-1" className="sr-only">
                First Name
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                name="hs-firstname-contacts-1"
                id="hs-firstname-contacts-1"
                className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="First Name"
              />
            </div>

            <div>
              <label htmlFor="hs-lastname-contacts-1" className="sr-only">
                Last Name
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                name="hs-lastname-contacts-1"
                id="hs-lastname-contacts-1"
                className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Last Name"
              />
            </div>
          </div>
          {/* <!-- End Grid --> */}

          <div>
            <label htmlFor="hs-email-contacts-1" className="sr-only">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="hs-email-contacts-1"
              id="hs-email-contacts-1"
              autoComplete="email"
              className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Email(Please ensure you enter correct email)"
            />
          </div>

          <div>
            <label htmlFor="hs-phone-number-1" className="sr-only">
              Phone Number
            </label>
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              name="hs-phone-number-1"
              id="hs-phone-number-1"
              className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Phone Number"
            />
          </div>

          <div>
            <label htmlFor="hs-about-contacts-1" className="sr-only">
              Details
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="hs-about-contacts-1"
              name="hs-about-contacts-1"
              rows={4}
              className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Details"
            ></textarea>
          </div>
          <div
            style={recaptchaStyle}
            className="flex justify-center items-center"
          >
            <div>
              <ReCAPTCHA
                sitekey={recaptchaSiteKey}
                onChange={handleRecaptchaChange}
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
        {/* <!-- End Grid --> */}

        <div className="mt-4 grid">
          <Button disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </div>

        <div className="mt-3 text-center">
          <p className="text-sm text-gray-500">
            I'll get back to you in 1-2 days.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
