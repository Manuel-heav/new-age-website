import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aiTechImage from "@/assets/ai-tech-new.png";
import humanElementImage from "@/assets/human-element-new.jpg";
import aboutUsDesktop from "../assets/about-us-desktop.png";
import aboutUsTablet from "../assets/about-us-tablet.png";
import aboutUsMobile from "../assets/about-us-mobile.png";

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
        <section className="bg-white px-6 py-16 md:px-16 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <img
              src={humanElementImage}
              alt="Human Element - We combine AI with human insight to truly understand your business needs"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </section>

        {/* Tools Section */}
        <section className="bg-gray-50 px-6 py-16 md:px-16 lg:px-20">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">
              Tools
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">GPT</span>
                </div>
                <span className="font-semibold">ChatGPT</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Z</span>
                </div>
                <span className="font-semibold">zapier</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">N</span>
                </div>
                <span className="font-semibold">Notion</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">S</span>
                </div>
                <span className="font-semibold">slack</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">M</span>
                </div>
                <span className="font-semibold">make</span>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-600 px-6 py-16 md:px-16 lg:px-20 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl mb-8">
              We work best with fast-moving{" "}
              <span className="text-blue-200 font-bold">Founders</span> and{" "}
              <span className="text-blue-200 font-bold">Agencies</span>
            </p>
          </div>
        </section>

        {/* What Sets Us Apart Section */}
        <section className="bg-white px-6 py-16 md:px-16 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white text-2xl">🚀</div>
                </div>
                <h4 className="text-lg text-gray-600 mb-2">
                  What Sets Us Apart
                </h4>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Speed, Clarity, Execution
                </h3>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white text-2xl">🧠</div>
                </div>
                <h4 className="text-lg text-gray-600 mb-2">Built Different</h4>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  We don't give AI advice
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
