import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="justify-between items-center flex w-full leading-none flex-wrap bg-[#FCFCFF] px-16 py-6 max-md:max-w-full max-md:px-5">
      <div className="self-stretch flex min-w-60 items-center gap-2 text-[19px] font-semibold tracking-[-0.38px] flex-1 shrink basis-[0%] my-auto pr-10 max-md:max-w-full">
        <div className="self-stretch flex items-center gap-2 my-auto">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/710624f1dfb15d4dee1539b48c0a468e1e13e0ed?placeholderIfAbsent=true"
            alt="New Age AI Logo"
            className="aspect-[1] object-contain w-[60px] self-stretch shrink-0 my-auto rounded-[28px]"
          />
          <div className="bg-clip-text self-stretch my-auto bg-gradient-to-r from-[#0f288d] to-[#1fbcff] text-transparent">
            New Age AI
          </div>
        </div>
      </div>

      <nav className="self-stretch flex min-w-60 items-center gap-6 font-medium text-center flex-wrap my-auto max-md:max-w-full">
        <div className="self-stretch flex min-w-60 items-center gap-6 text-lg text-[#130231] tracking-[-0.09px] my-auto max-md:max-w-full">
          <Link
            to="/"
            className="text-[#130231] self-stretch my-auto hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-[#130231] self-stretch my-auto hover:text-blue-600 transition-colors"
          >
            About us
          </Link>
          <Link
            to="/projects"
            className="text-[#130231] self-stretch my-auto hover:text-blue-600 transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/service"
            className="text-[#130231] self-stretch my-auto hover:text-blue-600 transition-colors"
          >
            Service
          </Link>
          <Link
            to="/contact"
            className="text-[#130231] self-stretch my-auto hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>
        </div>

        <button className="justify-center items-center self-stretch flex min-h-12 gap-2 text-base text-[#FCFCFF] tracking-[-0.08px] my-auto px-4 py-[13px] rounded-[11.25px] bg-gradient-to-r from-[#0f288d] to-[#1fbcff] hover:from-[#0c2073] hover:to-[#17a2e5] transition-all">
          <span className="text-[#FCFCFF] self-stretch my-auto font-normal">
            Contact Now
          </span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
