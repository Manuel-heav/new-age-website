import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aiTechImage from "@/assets/ai-tech-new.png";
import humanElementImage from "@/assets/human-element-new.png";
import humanElementImageMobile from "@/assets/human-element-mobile.png";
import aboutUsDesktop from "../assets/about-us-desktop.png";
import aboutUsTablet from "../assets/about-us-tablet.png";
import aboutUsMobile from "../assets/about-us-mobile.png";
import Zapier from "../assets/Zapier-Logo-Small.png";
import Make from "../assets/make-logo.png";
import Quote from "../assets/about-us-quote.png";
import Rocket from "../assets/rocket.png";
import Brain from "../assets/brain.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="w-full">
        {/* Hero Section */}
        <section className="relative h-[500px] sm:h-[450px] md:h-[500px] lg:h-[600px] p-6 sm:p-10 md:p-16">
          {/* Desktop Image */}
          <div className="hidden lg:block absolute inset-0 overflow-hidden px-16">
            <img
              src={aboutUsDesktop}
              alt="About us"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          {/* Tablet Image */}
          <div className="hidden md:block lg:hidden absolute inset-0 overflow-hidden px-12">
            <img
              src={aboutUsTablet}
              alt="About us"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          {/* Mobile Image */}
          <div className="block md:hidden overflow-hidden px-4">
            <img
              src={aboutUsMobile}
              alt="About us"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          {/* Buttons */}
          <div className="relative mt-12 md:absolute md:bottom-4 md:left-1/2 md:transform md:-translate-x-1/2 md:mt-0 w-full flex flex-row justify-center items-center gap-6 px-6">
            {/* Filled gradient (Book) - gradient on inner span */}
            <button className="relative px-0.5 py-0.5 rounded-lg w-full sm:w-auto bg-transparent">
              <span className="block rounded-md px-8 py-4 font-semibold text-lg bg-gradient-to-r from-[#103295] to-[#1fb2f8] text-white text-center">
                Book Strategy Call
              </span>
            </button>

            {/* Bordered gradient (Pricing) - gradient on outer, white inner */}
            <button className="relative px-0.5 py-0.5 rounded-lg w-full sm:w-auto bg-gradient-to-r from-[#102a8e] to-[#1fb4f9]">
              <span className="block bg-white rounded-md px-8 py-4 font-semibold text-lg text-[#0f288d] text-center">
                See Pricing
              </span>
            </button>
          </div>
        </section>

        {/* Quote Section */}
        <section className="bg-white px-6 py-16 mt-20 md:px-16 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base sm:text-lg md:text-2xl text-gray-700 leading-relaxed font-semibold">
              <span className="bg-clip-text bg-gradient-to-r from-[#103295] to-[#1fb2f8] text-transparent font-semibold text-lg sm:text-xl md:text-3xl">
                New Age Guardian
              </span>{" "}
              <span className="text-lg sm:text-xl md:text-3xl">
                was founded to help founders spend more time on strategy, not
                spreadsheets
              </span>
            </p>
          </div>
        </section>

        {/* Fast No Code Section */}
        <section className="bg-gray-50 px-6 py-16 md:px-16 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image first on mobile */}
              <div className="flex justify-center order-1 md:order-2">
                <img
                  src={aiTechImage}
                  alt="AI Automation Technology"
                  className="w-full max-w-md rounded-2xl shadow-lg"
                />
              </div>

              {/* Text second on mobile */}
              <div className="p-6 rounded-lg order-2 md:order-1">
                <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  Fast <span className="text-[#9b9b9b]">/</span> No Code{" "}
                  <span className="text-[#9b9b9b]">/</span>
                  <span className="hidden md:inline">
                    <br />
                  </span>
                  AI <span className="text-[#9b9b9b]">/</span> SOPs
                </h1>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                  Transform your business processes with powerful AI automation,
                  all without writing a single line of code.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Human Element Section */}
        <section className="px-6 py-16 md:px-16 lg:px-20">
          <div className="mx-auto">
            {/* Mobile Image */}
            <img
              src={humanElementImageMobile}
              alt="Human Element - We combine AI with human insight to truly understand your business needs"
              className="block md:hidden w-full rounded-2xl shadow-lg"
            />
            {/* Tablet and Desktop Image */}
            <img
              src={humanElementImage}
              alt="Human Element - We combine AI with human insight to truly understand your business needs"
              className="hidden md:block w-full rounded-2xl shadow-lg"
            />
          </div>
        </section>

        {/* Tools Section */}
        <section className="bg-gray-50 px-6 py-16 md:px-16 lg:px-20">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#727273] mb-10">
              Tools
            </h3>

            <div
              className="
        grid 
        grid-cols-3 
        gap-y-8 
        gap-x-6
        sm:grid-cols-3
        md:flex md:flex-wrap md:justify-center md:items-center md:gap-x-12 lg:gap-x-16
      "
            >
              {/* ChatGPT */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-x-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png"
                  alt="ChatGPT"
                  className="h-12 md:h-9 mx-auto"
                />
                <span className="text-lg md:text-2xl font-bold text-black mt-2 md:mt-0">
                  ChatGPT
                </span>
              </div>

              {/* Zapier */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-x-3">
                <img
                  src={Zapier}
                  alt="Zapier"
                  className="h-20 md:h-40 mx-auto"
                />
              </div>

              {/* Notion */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-x-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg"
                  alt="Notion"
                  className="h-12 md:h-9 mx-auto"
                />
                <span className="text-lg md:text-2xl font-bold text-black mt-2 md:mt-0">
                  Notion
                </span>
              </div>

              {/* Slack */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-x-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg"
                  alt="Slack"
                  className="h-12 md:h-9 mx-auto"
                />
                <span className="text-lg md:text-2xl font-bold text-black mt-2 md:mt-0">
                  Slack
                </span>
              </div>

              {/* Make */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-x-3">
                <img src={Make} alt="Make" className="h-16 md:h-20 mx-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="px-0 md:px-16 lg:px-20 py-16 flex flex-col items-center justify-center text-center">
          <img
            src={Quote}
            alt="Quote"
            className="mb-12 w-full h-48 sm:h-36 md:h-auto object-cover"
          />
          <div className="max-w-8xl mx-auto px-6 md:px-0">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed font-medium">
              We work best with fast-moving{" "}
              <span className="bg-clip-text bg-gradient-to-r from-[#103295] to-[#1fb2f8] text-transparent font-bold">
                Founders
              </span>{" "}
              and{" "}
              <span className="bg-clip-text bg-gradient-to-r from-[#103295] to-[#1fb2f8] text-transparent font-bold">
                Agencies
              </span>
            </p>
          </div>
        </section>

        {/* What Sets Us Apart Section */}
        <section className="bg-white px-6 py-16 md:px-16 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* First Card */}
              <div className="relative">
                <div className="border-t border-gray-200 mb-6"></div>
                <img src={Rocket} alt="Rocket" className="mb-6 w-20 h-20" />
                <h4 className="text-xl md:text-2xl text-gray-500 mb-2">
                  What Sets Us Apart
                </h4>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Speed, Clarity, Execution
                </h3>
              </div>

              {/* Second Card */}
              <div className="relative">
                <div className="border-t border-gray-200 mb-6"></div>
                <img src={Brain} alt="Brain" className="mb-6 w-20 h-20" />
                <h4 className="text-xl md:text-2xl text-gray-500 mb-2">
                  Built Different
                </h4>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  We don’t give AI advice
                </h3>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
