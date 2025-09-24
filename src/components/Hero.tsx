import React from "react";

const Hero = () => {
  const handleBookCall = () => {
    window.location.href = "/contact#meeting";
  };

  const handleSeePricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex w-full flex-col overflow-hidden items-stretch pt-[88px] pb-[25px]">
      {/* Background Ellipse */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[700px] rounded-full blur-3xl opacity-60 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(31,188,255,0.3) 0%, rgba(15,40,141,0.15) 60%, transparent 100%)",
        }}
      />

      <div className="self-center flex w-[692px] max-w-full flex-col items-stretch">
        <div className="flex w-full flex-col items-center text-center leading-[1.1] max-md:max-w-full">
          <div className="flex justify-center w-full">
            <div className="flex justify-center w-full">
              <div className="flex gap-2 text-[80px] font-bold tracking-[-1.28px] max-md:max-w-full max-md:text-[40px] text-center whitespace-nowrap">
                <h1>
                  <span className="bg-clip-text bg-gradient-to-r from-[#0f288d] to-[#1fbcff] text-transparent max-md:text-[40px]">
                    Automate
                  </span>{" "}
                  <span className="text-[#00364D] max-md:max-w-full max-md:text-[40px]">
                    Your Operations
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <div className="flex gap-2 text-5xl tracking-[-0.96px] mt-2 max-md:max-w-full max-md:text-[40px]">
            <h2 className="text-[#002433] font-medium max-md:text-[40px]">
              In Days,
            </h2>
            <h2 className="text-[#1A1A1A] font-normal max-md:text-[40px]">
              Not Months
            </h2>
          </div>
        </div>

        <div className="self-center flex items-center gap-4 text-xl font-medium tracking-[-0.1px] leading-none flex-wrap mt-[30px]">
          <button
            onClick={handleBookCall}
            className="justify-center items-center self-stretch flex min-h-14 gap-2 font-normal text-white text-center my-auto px-4 py-3.5 rounded-xl bg-gradient-to-r from-[#0f288d] to-[#1fbcff] hover:from-[#0c2073] hover:to-[#17a2e5] transition-all transform hover:scale-105"
          >
            <span className="self-stretch my-auto">Book Strategy Call</span>
          </button>

          <button
            onClick={handleSeePricing}
            className="relative justify-center items-center self-stretch flex min-h-14 gap-2 text-[#0F288D] my-auto px-4 py-3.5 rounded-xl border-2 border-transparent bg-white hover:bg-[#0F288D] hover:text-white transition-all transform hover:scale-105 overflow-hidden"
          >
            <span className="relative self-stretch my-auto z-10">
              See Pricing
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f288d] to-[#1fbcff] rounded-xl p-[2px]">
              <div className="w-full h-full bg-white rounded-[10px]"></div>
            </div>
          </button>
        </div>
      </div>

      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/fe54ab4ab0abc40074c062b4d58900707a3e2f7d?placeholderIfAbsent=true"
        alt="AI Automation Dashboard"
        className="aspect-[3.92] object-contain w-full mt-8 max-md:max-w-full animate-slide-in-left"
      />
    </section>
  );
};

export default Hero;
