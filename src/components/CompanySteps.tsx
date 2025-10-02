import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import companyStep1 from "@/assets/company-step-big-1.png";
import companyStep2 from "@/assets/company-step-big-2.png";
import companyStep3 from "@/assets/company-step-big-3.png";

const CompanySteps = () => {
  const [currentSlide, setCurrentSlide] = useState(2);
  const totalSlides = 3;

  const slides = [
    {
      id: 1,
      image: companyStep1,
      title: "Collaborative Planning",
      description:
        "Teams working together to analyze data and create strategic business solutions through collaborative planning sessions.",
    },
    {
      id: 2,
      image: companyStep2,
      title: "Partnership Building",
      description:
        "Building strong partnerships and relationships through effective communication and shared business goals.",
    },
    {
      id: 3,
      image: companyStep3,
      title: "Data-Driven Results",
      description:
        "Leveraging analytics and data insights to drive measurable business outcomes and continuous improvement.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides ? 1 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? totalSlides : prev - 1));
  };

  const goToSlide = (slideNumber: number) => {
    setCurrentSlide(slideNumber);
  };

  // get left/middle/right for carousel
  const middle = slides.find((s) => s.id === currentSlide)!;
  const left = slides.find(
    (s) => s.id === (currentSlide === 1 ? totalSlides : currentSlide - 1)
  )!;
  const right = slides.find(
    (s) => s.id === (currentSlide === totalSlides ? 1 : currentSlide + 1)
  )!;

  const orderedSlides = [left, middle, right];

  return (
    <section id="companysteps" className="w-full py-24">
      <div className="w-full text-center leading-[1.1]">
        <h2 className="text-5xl md:text-7xl font-bold tracking-[-1px] bg-clip-text bg-gradient-to-r from-[#0f288d] to-[#1fbcff] text-transparent">
          Empowering Your Business
        </h2>
        <p className="text-[#1A1A1A] text-2xl md:text-5xl font-normal tracking-[-0.8px] mt-4">
          Every Step of the Way
        </p>
      </div>

      {/* Mobile (stacked) */}
      <div className="md:hidden mt-12 flex flex-col gap-8">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="flex flex-col items-center text-center px-4 pt-6 pb-8 rounded-2xl shadow-xl border bg-white"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="rounded-xl object-cover mb-4 w-full h-[250px]"
            />
            <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
            <p className="text-base text-muted-foreground">
              {slide.description}
            </p>
          </div>
        ))}
      </div>

      {/* Tablet & Desktop carousel */}
      <div className="hidden md:flex relative items-center justify-center mt-16 w-full">
        <div className="flex items-center justify-center w-full overflow-hidden">
          <div className="flex gap-8 transition-transform duration-500 ease-in-out justify-center">
            {orderedSlides.map((slide, index) => {
              const isMiddle = slide.id === currentSlide;
              const isLeft = index === 0;
              const isRight = index === 2;

              return (
                <div
                  key={slide.id}
                  className={`flex flex-col items-center text-center px-6 pt-6 pb-8 mb-10 rounded-3xl shadow-2xl border border-border transition-all duration-500
                  ${
                    isMiddle
                      ? "scale-105 opacity-100 bg-white z-20"
                      : "scale-95 opacity-50 bg-white/70 z-10"
                  }
                  ${isLeft ? "-mr-20 lg:-mr-40" : ""} 
                  ${isRight ? "-ml-20 lg:-ml-40" : ""}`}
                  style={{
                    width: window.innerWidth < 1024 ? "400px" : "600px",
                  }}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className={`rounded-2xl object-cover mb-6 w-full ${
                      window.innerWidth < 1024 ? "h-[300px]" : "h-[400px]"
                    }`}
                  />
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                    {slide.title}
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
                    {slide.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Navigation (only tablet & desktop) */}
      <div className="hidden md:flex self-center items-center gap-4 justify-center mt-8 p-2">
        <button
          onClick={prevSlide}
          className="flex items-center justify-center"
          aria-label="Previous slide"
        >
          <ArrowLeft
            className="w-6 h-6 font-extrabold text-[#999999]"
            style={{ strokeWidth: "3" }}
          />
        </button>

        <div className="flex items-center gap-3 mx-6">
          {slides.map((slide) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(slide.id)}
              className="transition-all"
              aria-label={`Go to slide ${slide.id}`}
            >
              <div
                className={`rounded-full transition-all ${
                  currentSlide === slide.id
                    ? "bg-primary w-4 h-4"
                    : "bg-muted-foreground/40 w-3 h-3"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="flex items-center justify-center"
          aria-label="Next slide"
        >
          <ArrowRight
            className="w-6 h-6 text-[#999999]"
            style={{ strokeWidth: "3" }}
          />
        </button>
      </div>
    </section>
  );
};

export default CompanySteps;
