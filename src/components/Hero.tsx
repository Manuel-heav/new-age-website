import React from 'react';

const Hero = () => {
  const handleBookCall = () => {
    // Navigate to contact meeting section
    window.location.href = '/contact#meeting';
  };

  const handleSeePricing = () => {
    // Scroll to pricing section
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="flex w-full flex-col overflow-hidden items-stretch pt-[88px] pb-[25px]">
      <div className="self-center flex w-[692px] max-w-full flex-col items-stretch">
        <div className="flex w-full flex-col items-center text-center leading-[1.1] max-md:max-w-full">
          <div className="flex gap-2 text-[64px] font-extrabold tracking-[-1.28px] flex-wrap max-md:max-w-full max-md:text-[40px]">
            <h1 className="bg-clip-text max-md:text-[40px]">
              Automate
            </h1>
            <h1 className="text-[#00364D] max-md:max-w-full max-md:text-[40px]">
              Your Operations
            </h1>
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
            className="justify-center items-center self-stretch flex min-h-14 gap-2 text-white text-center my-auto px-4 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105"
          >
            <span className="self-stretch my-auto">
              Book Strategy Call
            </span>
          </button>
          
          <button 
            onClick={handleSeePricing}
            className="justify-center items-center self-stretch flex min-h-14 gap-2 text-[#0F288D] my-auto px-4 py-3.5 rounded-xl border-2 border-solid border-[#0F288D] hover:bg-[#0F288D] hover:text-white transition-all transform hover:scale-105"
          >
            <span className="self-stretch my-auto">
              See Pricing
            </span>
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
