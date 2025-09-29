import React from "react";
import aiSystemImage from "../assets/AI_system.png";
import mobileImage from "../assets/mobile.png";
import { NavLink } from "react-router-dom";

const Proven = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center px-16 py-20 max-md:max-w-full max-md:px-5">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-medium text-black inline-block tracking-tight max-md:text-4xl">
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

      <div className="grid md:grid-cols-2 gap-20 w-full max-w-6xl mb-12">
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          <div className="h-60 flex justify-center items-center">
            <img
              src={mobileImage}
              alt="AI App Mobile"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              AI App Mobile
            </h3>
            <p className="text-gray-600">
              Designed to enhance user experience and deliver real-time value
              with seamless AI integration.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          <div className="h-60 flex justify-center items-center">
            <img
              src={aiSystemImage}
              alt="AI System"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              AI System
            </h3>
            <p className="text-gray-600">
              Organize and manage your AI-powered products and services with a
              smart system that delivers efficiency and impact.
            </p>
          </div>
        </div>
      </div>

      <NavLink
        to="/projects"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <button className="px-8 py-3 text-lg font-semibold text-blue-800 bg-white border-2 border-blue-400 rounded-xl hover:bg-blue-50 transition-colors">
          See All Projects
        </button>
      </NavLink>
    </section>
  );
};

export default Proven;
