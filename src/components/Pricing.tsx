import React from 'react';

const Pricing = () => {
  const pricingPlans = [
    {
      id: 1,
      title: ["AI", "Strategy Call"],
      subtitle: "First time buyers, Solopreneur",
      price: "Try for Free!",
      features: [
        "60mins consultation with AI Expert",
        "Tech stack audit of current workflows",
        "3 Automation ideas tailored to the business",
        "Action plan PDF sent post call"
      ],
      buttonText: "Book a Call",
      buttonClass: "bg-[#A7E5FF] text-[#0F288D]"
    },
    {
      id: 2,
      title: ["AI", "Setup Starter"],
      subtitle: "SMBs or Consultant wanting small AI helps",
      price: "$250",
      features: [
        "1 Basic app automation",
        "Show them N8N & Zapier workflows for automation",
        "Build a custom workflow & Offer Bundled Templates"
      ],
      buttonText: "Book a Call",
      buttonClass: "bg-[#A7E5FF] text-[#0F288D]"
    },
    {
      id: 3,
      title: ["AI", "Full Automation"],
      subtitle: "Business with repetitive ops.",
      price: ["$750", "$1200"],
      features: [
        "End-to-end AI orchestration and implementation",
        "2 Weeks maintenance included i.e implementation in client systems, training them, resolving any"
      ],
      buttonText: "Book a Call",
      buttonClass: "bg-[#A7E5FF] text-[#0F288D]"
    },
    {
      id: 4,
      title: ["AI", "Custom Build"],
      subtitle: "Mid-sized clients / Agencies",
      price: "Discuss for the price",
      features: [
        "Multi-user Setup",
        "AI Asisstants with memory",
        "May include integrations, APIs, Frontend automation"
      ],
      buttonText: "Book a Call",
      buttonClass: "bg-[#A7E5FF] text-[#0F288D]"
    }
  ];

  const handleBookCall = (planName: string) => {
    // Handle booking call for specific plan
    console.log(`Booking call for ${planName}`);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="flex w-full flex-col items-stretch justify-center px-16 py-20 max-md:max-w-full max-md:px-5">
      <div className="self-center flex items-center gap-2 text-5xl text-center tracking-[-0.96px] flex-wrap max-md:max-w-full max-md:text-[40px]">
        <h2 className="text-black font-medium self-stretch my-auto max-md:max-w-full max-md:text-[40px]">
          What do you want to
        </h2>
        <h2 className="font-extrabold bg-clip-text self-stretch my-auto max-md:text-[40px]">
          Automate?
        </h2>
      </div>
      
      <div className="shadow-[163px_139px_60px_rgba(0,0,0,0)] flex w-full items-center gap-6 flex-wrap mt-12 max-md:max-w-full max-md:mt-10">
        {pricingPlans.map((plan) => (
          <article
            key={plan.id}
            className="shadow-[0_3.9px_7.8px_0_rgba(0,0,0,0.02),0_11.7px_31.2px_0_rgba(0,0,0,0.04)] self-stretch min-w-60 overflow-hidden leading-[1.4] grow shrink w-[215px] my-auto px-[23px] rounded-[15.6px] border-[3.9px] border-solid border-[#0F288D] max-md:px-5 bg-gradient-to-b from-[#0F288D] to-[#071446]"
          >
            <div className="flex min-h-[368px] w-full flex-col items-stretch justify-between py-6">
              <div className="flex w-full flex-col items-stretch">
                <div className="flex w-full items-center gap-1 text-[23px] font-extrabold">
                  <span className="text-[#FDFDFD] tracking-[-0.12px] self-stretch my-auto">
                    {plan.title[0]}
                  </span>
                  <span className="tracking-[-0.7px] bg-clip-text self-stretch my-auto text-white">
                    {plan.title[1]}
                  </span>
                </div>
                <div className="rotate-[1.3877787807814457e-17rad] bg-[rgba(15,40,141,0.45)] flex items-center gap-1.5 text-xs text-[#B0BEF7] font-normal tracking-[-0.06px] mt-1 pl-3 pr-[11px] py-2 rounded-[27px]">
                  <span className="text-[#B0BEF7] self-stretch my-auto">
                    {plan.subtitle}
                  </span>
                </div>
              </div>
              
              <div className="rotate-[1.3877787807814457e-17rad] mt-[30px]">
                {Array.isArray(plan.price) ? (
                  <div className="flex gap-2">
                    <div className="flex items-center gap-px whitespace-nowrap leading-[1.1] justify-between w-[105px]">
                      <span className="text-[#8DA1F3] text-[34px] font-medium tracking-[-0.68px] self-stretch my-auto">
                        $
                      </span>
                      <span className="text-[#FDFDFD] text-[47px] font-extrabold tracking-[-0.94px] self-stretch my-auto max-md:text-[40px]">
                        750
                      </span>
                    </div>
                    <div className="flex flex-col items-stretch justify-center w-[11px] py-[9px]">
                      <div className="flex shrink-0 h-[3px] bg-[#CCD5FA] rounded-[29.097px]" />
                    </div>
                    <div className="flex items-center gap-px text-[26px] whitespace-nowrap tracking-[-0.51px] leading-[1.1]">
                      <span className="text-[#8DA1F3] font-medium self-stretch my-auto">
                        $
                      </span>
                      <span className="text-[#FDFDFD] font-extrabold self-stretch my-auto">
                        1200
                      </span>
                    </div>
                  </div>
                ) : plan.id === 4 ? (
                  <div className="w-full text-sm text-[#FCFCFF] font-medium tracking-[-0.07px] pl-[30px] pr-[29px] max-md:px-5">
                    <div className="rotate-[1.3877787807814457e-17rad] border flex min-h-[35px] max-w-full w-[163px] items-center gap-[13px] justify-center p-2 rounded-[7px] border-[rgba(255,255,255,0.06)] border-solid">
                      <span className="text-[#FCFCFF] self-stretch my-auto">
                        {plan.price}
                      </span>
                    </div>
                  </div>
                ) : plan.id === 2 ? (
                  <div className="flex gap-0.5 whitespace-nowrap leading-[1.1]">
                    <span className="text-[#8DA1F3] text-[34px] font-medium tracking-[-0.68px]">
                      $
                    </span>
                    <span className="text-[#FDFDFD] text-[47px] font-extrabold tracking-[-0.94px] max-md:text-[40px]">
                      250
                    </span>
                  </div>
                ) : (
                  <div className="flex gap-0.5 text-[32px] text-[#FDFDFD] font-normal tracking-[-0.64px] leading-[1.1]">
                    <span className="text-[#FDFDFD]">{plan.price}</span>
                  </div>
                )}
              </div>
              
              <div className="rotate-[1.3877787807814457e-17rad] w-full text-xs text-[#FDFDFD] font-medium tracking-[-0.06px] mt-[30px]">
                {plan.features.map((feature, index) => (
                  <div key={index} className="text-[#FDFDFD] leading-4 mb-1">
                    {feature}
                  </div>
                ))}
              </div>
              
              <button
                onClick={() => handleBookCall(plan.title.join(' '))}
                className={`justify-center items-center flex min-h-[38px] w-full text-xs font-bold tracking-[-0.06px] leading-none mt-[30px] px-3 py-[11px] rounded-lg transition-all hover:scale-105 ${plan.buttonClass}`}
              >
                <span className="self-stretch my-auto">
                  {plan.buttonText}
                </span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
