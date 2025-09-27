import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LeftArrow from "@/assets/next-left.png";
import RightArrow from "@/assets/next-right.png";
import { NavigationOptions } from "swiper/types";

const OurServices = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const customGradientStyle = {
    backgroundColor: "#0d174e",
    backgroundImage: `
      radial-gradient(at 0% 0%, #7044d3, transparent 40%),
      radial-gradient(at 100% 0%, #071647, transparent 40%),
      radial-gradient(at 0% 100%, #0f184f, transparent 40%),
      radial-gradient(at 100% 100%, #1470ac, transparent 40%),
      radial-gradient(at 50% 50%, #0d174e, transparent 50%)
    `,
  };

  const services = [
    {
      title: "Starter Automation",
      desc: "First-time Buyers or Small Businesses starting with automation.",
      points: [
        "• Basic Automation Setup (e.g., lead capture to email follow-up)",
        "• 1 Basic Workflow (e.g., email sequences, data input forms)",
        "• Tech stack audit for current workflows",
      ],
      completion: "1-2 weeks",
      price: "60",
    },
    {
      title: "Growth Agent",
      desc: "For Businesses looking to scale automation with more Complex Workflows.",
      points: [
        "• Advanced automation workflows (e.g., CRM integration, lead scoring)",
        "• 3–5 workflows setup (including multi-step processes)",
        "• Use of tools like Zapier, N8N for system connections",
      ],
      completion: "2-3 weeks",
      price: "250",
    },
    {
      title: "Enterprise Solutions",
      desc: "For Large Businesses with custom and complex automation needs.",
      points: [
        "• Fully customized automation strategies and implementation",
        "• Unlimited workflows and multi-system integrations",
        "• Dedicated support and performance monitoring",
      ],
      completion: "4+ weeks",
      price: "300",
    },
  ];

  return (
    <div className="w-full relative">
      <div className="max-w-7xl mx-auto relative">
        {/* Custom Navigation Buttons */}
        <div
          ref={prevRef}
          className="block sm:hidden absolute top-1/2 -left-6 z-10 cursor-pointer transform -translate-y-1/2"
        >
          <img
            src={LeftArrow}
            alt="Previous"
            className="w-20 h-20 text-blue-500"
          />
        </div>
        <div
          ref={nextRef}
          className="block sm:hidden absolute top-1/2 -right-6 z-10 cursor-pointer transform -translate-y-1/2"
        >
          <img
            src={RightArrow}
            alt="Next"
            className="w-20 h-20 text-blue-500"
          />
        </div>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={"auto"}
          spaceBetween={20}
          navigation={
            {
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            } as NavigationOptions
          }
          onBeforeInit={(swiper) => {
            if (
              typeof swiper.params.navigation === "object" &&
              swiper.params.navigation
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          pagination={{ clickable: true }}
          centeredSlides={false}
          grabCursor={true}
          className="py-6 overflow-hidden"
        >
          {services.map((service, i) => (
            <SwiperSlide
              key={i}
              className="!w-[90%] md:!w-[75%] lg:!w-[40%] xl:!w-[35%] px-2"
            >
              <div className="bg-white rounded-2xl shadow-md border overflow-hidden">
                <div
                  style={customGradientStyle}
                  className="p-6 flex justify-center"
                >
                  <h3 className="text-2xl md:text-3xl lg:text-4xl w-40 font-bold text-white">
                    {service.title}
                  </h3>
                </div>

                <div className="p-6">
                  <p className="text-sm text-center bg-[#e2d3fd] text-[#0f288d] px-7 py-3 rounded-full mb-4">
                    {service.desc}
                  </p>
                  <ul className="text-sm font-semibold text-gray-700 space-y-2 mb-6">
                    {service.points.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                  <p className="text-sm text-center bg-[#f2f5fe] text-[#0f288d] px-7 py-3 rounded-xl mb-4">
                    Completion:{" "}
                    <span className="font-semibold">{service.completion}</span>
                  </p>

                  <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
                    <div className="text-3xl md:text-4xl font-bold text-gray-900">
                      <span className="text-[#9b9b9b]">$ </span>
                      {service.price}
                    </div>
                    <button className="w-full sm:w-auto px-6 bg-gradient-to-r from-[#103295] to-[#1fb2f8] text-white py-2 rounded-lg hover:from-[#0d2a7b] hover:to-[#1798de] transition-all">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurServices;
