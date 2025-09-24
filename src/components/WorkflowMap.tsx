import React from "react";

const WorkflowMap = () => {
  const handleDownload = () => {
    // Handle workflow map download
    console.log("Downloading workflow map...");
    // In a real implementation, this would trigger a file download
  };

  return (
    <section
      id="workflow"
      className="flex min-h-[656px] w-full items-stretch gap-[40px_80px] justify-center flex-wrap px-16 py-[120px] max-md:px-5 max-md:py-[100px]"
    >
      <div className="items-center flex min-w-60 h-[416px] flex-col overflow-hidden aspect-[1] w-[411px] my-auto rounded-2xl">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/0a32da73e84849ca362c1ce85129d3ddfc998681?placeholderIfAbsent=true"
          alt="AI Workflow Map visualization"
          className="aspect-[0.99] object-contain w-full rounded-xl"
        />
      </div>

      <div className="flex min-w-60 flex-col items-stretch justify-center w-[545px] max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <h2 className="text-black text-5xl font-bold max-md:max-w-full max-md:text-[40px]">
            AI Workflow Map
          </h2>
          <p className="text-[#727273] text-lg font-medium leading-[26px] tracking-[-0.09px] mt-4 max-md:max-w-full">
            Discover how AI can optimize your business processes, automate your
            operations for faster, smarter decision-making with our{" "}
            <span className="font-bold">Workflow Map</span>
          </p>
        </div>

        <button
          onClick={handleDownload}
          className="justify-center items-center flex min-h-14 w-60 gap-2 text-xl text-white font-medium whitespace-nowrap text-center tracking-[-0.1px] leading-none mt-12 px-4 py-3.5 rounded-xl bg-gradient-to-r from-[#103295] to-[#1fb2f8] hover:from-[#0d2a7b] hover:to-[#1798de] transition-all transform hover:scale-105 max-md:mt-10"
        >
          <span className="self-stretch my-auto font-normal">Download Now</span>
        </button>
      </div>
    </section>
  );
};

export default WorkflowMap;
