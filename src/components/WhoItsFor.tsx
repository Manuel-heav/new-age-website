import React from 'react';

const WhoItsFor = () => {
  const targetAudience = [
    {
      id: 1,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/dfdfa81a23ce525a7729962861d22a52af487816?placeholderIfAbsent=true",
      title: "Agencies",
      className: "flex min-w-60 items-center gap-3.5 text-center grow shrink w-[261px]"
    },
    {
      id: 2,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/df4f4d89717d4f78e06737967441f8964240df5d?placeholderIfAbsent=true",
      title: ["Busy", "Founders"],
      className: "flex min-w-60 gap-3.5 text-[39px] tracking-[-0.78px] grow shrink w-[261px]"
    },
    {
      id: 3,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/0664e6a2807b54da2a9d4518eff1531450d43565?placeholderIfAbsent=true",
      title: "Consultants",
      className: "flex min-w-60 items-center gap-3.5 text-center grow shrink w-[261px]"
    }
  ];

  return (
    <section className="flex w-full flex-col items-stretch justify-center px-20 py-[95px] max-md:px-5">
      <div className="max-md:max-w-full">
        <h2 className="text-black text-[52px] font-bold tracking-[-1.03px] max-md:max-w-full max-md:text-[40px]">
          Who it's for?
        </h2>
        
        <div className="flex w-full gap-[40px_53px] text-4xl text-black font-light whitespace-nowrap tracking-[-0.72px] flex-wrap mt-8 max-md:max-w-full">
          {targetAudience.map((item) => (
            <div key={item.id} className={item.className}>
              <div className="self-stretch w-0 shrink-0 h-[91px] bg-[#D1BBFC] my-auto border-[rgba(209,187,252,1)] border-solid border-[3px]" />
              <img
                src={item.image}
                alt={Array.isArray(item.title) ? item.title.join(' ') : item.title}
                className="aspect-[1] object-contain w-[93px] self-stretch shrink-0 my-auto rounded-[50%]"
              />
              {Array.isArray(item.title) ? (
                <div className="h-[94px] w-[165px]">
                  <div>{item.title[0]}</div>
                  <div>{item.title[1]}</div>
                </div>
              ) : (
                <div className="self-stretch my-auto">{item.title}</div>
              )}
            </div>
          ))}
        </div>
        
        <div className="flex w-full flex-col text-[40px] font-semibold text-right tracking-[-0.8px] mt-8 px-[70px] max-md:max-w-full max-md:pl-5">
          <p className="bg-clip-text max-md:max-w-full">
            ...that drowning in manual work
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
