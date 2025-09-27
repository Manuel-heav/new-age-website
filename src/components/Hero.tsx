import React from "react";

const Hero = () => {
  const handleBookCall = () => {
    window.location.href = "/contact#meeting";
  };

  const handleSeePricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // ADD `isolate` HERE to create a new stacking context.
    // REMOVED `overflow-hidden` which was clipping the ellipse.
    <section className="relative isolate flex w-full flex-col items-stretch pt-[88px] pb-[25px]">
      {/* Background Ellipse */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[700px] rounded-full blur-3xl opacity-60 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(31,188,255,0.3) 0%, rgba(15,40,141,0.15) 60%, transparent 100%)",
        }}
      />

      {/* The rest of your component remains the same... */}
      <div className="flex w-full flex-col items-center p-4">
        {/* Main Content Container */}
        <div className="w-full max-w-5xl flex flex-col items-center">
          {/* Headline Section */}
          <div className="w-full flex flex-col items-center text-center leading-tight">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-bold tracking-tighter lg:tracking-[-1.28px]">
              <span className="bg-clip-text bg-gradient-to-r from-[#0f288d] to-[#1fbcff] text-transparent">
                Automate
              </span>{" "}
              <span className="text-[#00364D]">Your Operations</span>
            </h1>

            <div className="flex flex-row flex-wrap justify-center gap-x-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight lg:tracking-[-0.96px] mt-2">
              <h2 className="font-medium text-[#002433]">In Days,</h2>
              <h2 className="font-normal text-[#1A1A1A]">Not Months</h2>
            </div>
          </div>

          {/* Button Group */}
          <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-8">
            <button
              onClick={handleBookCall}
              className="flex justify-center items-center min-h-[48px] text-base font-medium text-white text-center px-4 py-2 rounded-xl bg-gradient-to-r from-[#0f288d] to-[#1fbcff] hover:from-[#0c2073] hover:to-[#17a2e5] transition-all transform hover:scale-105"
            >
              <span>Book Strategy Call</span>
            </button>

            <button
              onClick={handleSeePricing}
              className="relative flex justify-center items-center min-h-[48px] text-base font-medium text-[#0F288D] my-auto px-4 py-2 rounded-xl border-2 border-transparent transition-all transform hover:scale-105 overflow-hidden group hover:text-white"
            >
              <span className="relative z-10">See Pricing</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0f288d] to-[#1fbcff] rounded-xl p-[2px]">
                <div className="w-full h-full bg-white rounded-[10px] group-hover:bg-opacity-0 transition-all"></div>
              </div>
            </button>
          </div>
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
