import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";

const Header = () => {
  const handleBookCall = (planName: string) => {
    // Handle booking call for specific plan
    console.log(`Booking call for ${planName}`);
    window.location.href = "/contact#meeting";
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeLinkStyle = {
    fontWeight: "bold",
  };

  return (
    <header className="justify-between items-center flex w-full leading-none flex-wrap bg-[#FCFCFF] px-4 sm:px-8 md:px-16 py-4 md:py-6">
      <div className="flex items-center gap-2 text-[19px] font-semibold tracking-[-0.38px]">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/710624f1dfb15d4dee1539b48c0a468e1e13e0ed?placeholderIfAbsent=true"
          alt="New Age AI Logo"
          className="aspect-[1] object-contain w-[50px] md:w-[60px] rounded-[28px]"
        />
        <div className="bg-clip-text bg-gradient-to-r from-[#0f288d] to-[#1fbcff] text-transparent">
          New Age AI
        </div>
      </div>

      <div className="md:hidden">
        <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
      </div>

      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col md:flex-row md:flex items-center gap-4 md:gap-6 font-medium text-center w-full md:w-auto mt-4 md:mt-0`}
      >
        <NavLink
          to="/home"
          className="text-[#130231] hover:text-blue-600 transition-colors py-2 md:py-0"
          style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="text-[#130231] hover:text-blue-600 transition-colors py-2 md:py-0"
          style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
        >
          About Us
        </NavLink>
        <NavLink
          to="/projects"
          className="text-[#130231] hover:text-blue-600 transition-colors py-2 md:py-0"
          style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
        >
          Projects
        </NavLink>
        <NavLink
          to="/service"
          className="text-[#130231] hover:text-blue-600 transition-colors py-2 md:py-0"
          style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
        >
          Services
        </NavLink>
        <NavLink
          to="/contact"
          className="text-[#130231] hover:text-blue-600 transition-colors py-2 md:py-0"
          style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
        >
          Contact
        </NavLink>

        <button
          onClick={() => handleBookCall("Contact Now")}
          className="justify-center items-center flex min-h-12 gap-2 text-base text-[#FCFCFF] tracking-[-0.08px] px-4 py-[13px] rounded-[11.25px] bg-gradient-to-r from-[#0f288d] to-[#1fbcff] hover:from-[#0c2073] hover:to-[#17a2e5] transition-all w-full md:w-auto mt-4 md:mt-0"
        >
          <span className="text-[#FCFCFF] font-normal">Contact Now</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
