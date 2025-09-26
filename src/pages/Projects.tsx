import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import phoneMockups from "@/assets/phone-mockups.png";
import aiChipBlue from "@/assets/ai-chip-blue.jpg";
import ctaHandshake from "@/assets/cta-handshake.png";
import aiTechImage from "@/assets/ai-tech-new.png";
import CTA from "@/components/CTA";

const Projects = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gray-50 px-6 py-16 md:px-16 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-7xl font-medium text-black inline-block tracking-tight max-md:text-5xl">
              Proven{" "}
              <span className="font-bold bg-clip-text bg-gradient-to-r from-blue-800 to-sky-400 text-transparent">
                Results,
              </span>{" "}
              Real{" "}
              <span className="font-bold bg-clip-text bg-gradient-to-r from-blue-800 to-sky-400 text-transparent">
                Impact
              </span>
            </h2>
          </div>
        </section>

        {/* Phone Mockups Section */}
        <section className="bg-white px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <img
              src={phoneMockups}
              alt="AI Chat, Email Builder, and Business Dashboard Apps"
              className="w-full max-w-3xl mx-auto"
            />
          </div>
        </section>

        {/* Fast No Code Section */}
        <section className="max-w-7xl mx-auto flex items-center justify-center md:bg-[#f2f5fe] px-6 py-16 md:px-16 lg:px-20 mb-28 md:rounded-3xl">
          <div className="w-full">
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
              <div className="p-6 rounded-lg order-2 md:order-1 text-center md:text-left">
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  Cadabra App
                </h2>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                  Transform your business processes with powerful AI automation,
                  all without writing a single line of code.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fast No Code Section */}
        <section className="max-w-7xl mx-auto md:bg-[#f2f5fe] px-6 py-16 md:px-16 lg:px-20 mb-28 md:rounded-3xl md:shadow-md flex items-center justify-center">
          <div className="w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image always first */}
              <div className="flex justify-center">
                <img
                  src={aiTechImage}
                  alt="AI Automation Technology"
                  className="w-full max-w-md rounded-2xl shadow-lg"
                />
              </div>

              {/* Text always second */}
              <div className="p-6 rounded-lg flex flex-col items-center md:items-start text-center md:text-left">
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  Cadabra App
                </h2>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                  Transform your business processes with powerful AI automation,
                  all without writing a single line of code.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
