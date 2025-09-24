import React from "react";
import resultBg from "@/assets/homepage-result-bg.png";
import card2 from "@/assets/Card_2.png";
import card3 from "@/assets/Card_3.png";

const Results = () => {
  return (
    <section
      className="relative flex w-full flex-col overflow-hidden text-[#FCFCFF] font-medium tracking-[-3.28px] px-[70px] max-md:text-[40px] max-md:pb-[100px] max-md:px-5"
      style={{
        fontFamily: "'Manrope', sans-serif",
        backgroundImage: `url(${resultBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Import font here so it only loads when this component is rendered */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');`}
      </style>
      {/* Title */}
      <h2 className="pl-10 text-[230px] font-light leading-none mb-4 max-md:text-[40px] max-md:pl-5">
        Result
      </h2>

      {/* Cards */}
      <div className="flex justify-end pr-10 gap-8 max-md:flex-col max-md:items-center">
        <img
          src={card2}
          alt="Client Onboarding Faster"
          className="w-[400px] h-auto -mt-10 max-md:w-[220px] max-md:mt-0"
        />
        <img
          src={card3}
          alt="Hours Saved"
          className="w-[400px] h-auto max-md:w-[220px]"
        />
      </div>

      <img src="assets/Card_2.png" alt="" />
    </section>
  );
};

export default Results;
