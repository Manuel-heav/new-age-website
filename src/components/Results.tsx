import React from "react";
import resultBg from "@/assets/homepage-result-bg.png";
import card2 from "@/assets/Card_2.png";
import card3 from "@/assets/Card_3.png";

const Results = () => {
  return (
    <section
      className="relative flex w-full flex-col overflow-hidden bg-cover bg-center px-5 pt-8 pb-[100px] font-medium tracking-[-3.28px] text-[#FCFCFF] md:px-[70px] md:pt-0 md:pb-0"
      style={{
        fontFamily: "'Manrope', sans-serif",
        backgroundImage: `url(${resultBg})`,
      }}
    >
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');`}
      </style>

      {/* Title */}
      <h2 className="pl-5 text-[40px] font-light leading-[0.8] m-0 md:pl-36 md:text-[230px] md:-mt-8">
        Result
      </h2>

      {/* This container groups the images so they can be stacked below the title */}
      <div className="flex justify-center items-center mt-8 md:mt-0 md:justify-end md:pr-10">
        <img
          src={card2}
          alt="Client Onboarding Faster"
          className="w-[220px] h-auto md:w-[650px] md:h-[650px] md:-mt-10"
        />
        <img
          src={card3}
          alt="Hours Saved"
          className="w-[220px] h-auto z-10 -ml-28 md:w-[600px] md:h-[600px] md:-ml-60 md:mr-40"
        />
      </div>
    </section>
  );
};

export default Results;
