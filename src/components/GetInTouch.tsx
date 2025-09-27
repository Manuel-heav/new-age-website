import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail } from "lucide-react"; // Assuming lucide-react for icons

// Import all three images
import contactDesktop from "../assets/contact-desktop.png";
import contactTablet from "../assets/contact-tablet.png";
import contactMobile from "../assets/contact-mobile.png";

const GetInTouch = () => {
  const handleBookCall = () => {
    // Handle book call action
    console.log("Booking strategy call...");
    window.location.href = "/contact#meeting";
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="bg-gray-50 flex items-center justify-center p-4 sm:p-8 md:p-16">
      <div className="w-full grid md:grid-cols-2 rounded-3xl overflow-hidden">
        {/* Left Side */}
        <div
          className="p-8 md:p-12 text-white flex flex-col justify-between bg-cover bg-center rounded-r-3xl
                     bg-[image:var(--bg-mobile)] sm:bg-[image:var(--bg-tablet)] md:bg-[image:var(--bg-desktop)]"
          style={
            {
              "--bg-mobile": `url(${contactMobile})`,
              "--bg-tablet": `url(${contactTablet})`,
              "--bg-desktop": `url(${contactDesktop})`,
            } as React.CSSProperties
          }
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
              Get in Touch &<br />
              <span className="bg-clip-text bg-gradient-to-r text-6xl from-[#7da5f5] to-[#d6e7fc] text-transparent">
                Get Started
              </span>
            </h1>
          </div>

          {/* Use a smaller gap on mobile */}
          <div className="flex flex-row gap-2 sm:gap-4">
            {/* Phone Number Card */}
            {/* Adjusted padding for smaller size on mobile */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 w-full flex flex-col">
              <div className="flex items-center">
                {/* Smaller icon container on mobile */}
                <div className="bg-black/40 rounded-full p-1.5 sm:p-2 mr-2 sm:mr-4">
                  {/* Smaller icon on mobile */}
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/80">Phone number</p>
                  {/* Smaller text on mobile */}
                  <p className="text-xs sm:text-sm font-medium">+1234567890</p>
                </div>
              </div>
              <Button
                size="sm"
                /* Smaller button and margin on mobile */
                className="mt-2 sm:mt-3 bg-[#a7e5ff] hover:bg-[#92d4ee] text-blue-900 rounded-lg h-9 px-3 sm:h-10 sm:px-4 self-start"
              >
                Chat now
              </Button>
            </div>

            {/* Email Card */}
            {/* Adjusted padding for smaller size on mobile */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 w-full flex flex-col">
              <div className="flex items-center">
                {/* Smaller icon container on mobile */}
                <div className="bg-black/40 rounded-full p-1.5 sm:p-2 mr-2 sm:mr-4">
                  {/* Smaller icon on mobile */}
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/80">Email</p>
                  {/* Smaller text on mobile */}
                  <p className="text-xs sm:text-sm font-medium">
                    abc@gmail.com
                  </p>
                </div>
              </div>
              <Button
                size="sm"
                /* Smaller button and margin on mobile */
                className="mt-2 sm:mt-3 bg-[#a7e5ff] hover:bg-[#92d4ee] text-blue-900 rounded-lg h-9 px-3 sm:h-10 sm:px-4 self-start"
              >
                Mail now
              </Button>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="p-8 md:p-12">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 flex flex-col h-full"
          >
            <div className="flex-grow space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Name
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full h-12 bg-[#ededed] border-none rounded-lg px-4"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full h-12 bg-[#ededed] border-none rounded-lg px-4"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Company
                </label>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full h-12 bg-[#ededed] border-none rounded-lg px-4"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button
                onClick={handleBookCall}
                type="submit"
                className="w-full sm:w-40 h-16 bg-gradient-to-r from-[#103395] to-[#1eb0f5] text-white text-base font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Book Now
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
