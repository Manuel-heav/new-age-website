import React from "react";

const WhoItsFor = () => {
  const targetAudience = [
    {
      id: 1,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/dfdfa81a23ce525a7729962861d22a52af487816?placeholderIfAbsent=true",
      title: "Agencies",
      className:
        "flex min-w-60 items-center gap-3.5 text-center grow shrink w-[261px]",
    },
    {
      id: 2,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/df4f4d89717d4f78e06737967441f8964240df5d?placeholderIfAbsent=true",
      title: ["Busy", "Founders"],
      className:
        "flex min-w-60 gap-3.5 text-[39px] tracking-[-0.78px] grow shrink w-[261px]",
    },
    {
      id: 3,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0664e6a2807b54da2a9d4518eff1531450d43565?placeholderIfAbsent=true",
      title: "Consultants",
      className:
        "flex min-w-60 items-center gap-3.5 text-center grow shrink w-[261px]",
    },
  ];

  return (
    <section className="flex w-full flex-col items-center justify-center px-8 sm:px-8 md:px-16 lg:px-32 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="w-full">
        <h2 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 md:mb-8">
          Who it's for?
        </h2>

        <div className="flex flex-col md:flex-row md:flex-wrap gap-6 md:gap-8 lg:gap-12 text-2xl sm:text-3xl md:text-4xl text-black font-light tracking-tight">
          {targetAudience.map((item) => (
            <div
              key={item.id}
              className="flex flex-row md:min-w-[200px] items-center gap-4 mr-60 lg:gap-4 md:gap-1 w-full md:w-auto"
            >
              <div className="flex flex-row gap-2">
                <div className="w-0 h-12 sm:h-16 md:h-20 lg:h-24 bg-[#D1BBFC] border-2 border-[#D1BBFC] flex-shrink-0" />
                <img
                  src={item.image}
                  alt={
                    Array.isArray(item.title)
                      ? item.title.join(" ")
                      : item.title
                  }
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full flex-shrink-0 object-contain"
                />
              </div>
              {Array.isArray(item.title) ? (
                <div className="flex flex-col font-normal">
                  <div>{item.title[0]}</div>
                  <div>{item.title[1]}</div>
                </div>
              ) : (
                <div className="font-normal">{item.title}</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 md:mt-8 text-2xl sm:text-3xl md:text-4xl font-semibold text-right">
          <p className="bg-clip-text bg-gradient-to-r from-[#071446] to-[#1eb4f8] text-transparent px-4 sm:px-8 md:px-16 lg:px-56">
            ...that drowning in manual work
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
