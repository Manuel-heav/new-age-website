import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import companyStep1 from '@/assets/company-step-big-1.png';
import companyStep2 from '@/assets/company-step-big-2.png';
import companyStep3 from '@/assets/company-step-big-3.png';

const CompanySteps = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3;

  const slides = [
    {
      id: 1,
      image: companyStep1,
      title: "Collaborative Planning",
      description: "Teams working together to analyze data and create strategic business solutions through collaborative planning sessions."
    },
    {
      id: 2,
      image: companyStep2,
      title: "Partnership Building",
      description: "Building strong partnerships and relationships through effective communication and shared business goals."
    },
    {
      id: 3,
      image: companyStep3,
      title: "Data-Driven Results",
      description: "Leveraging analytics and data insights to drive measurable business outcomes and continuous improvement."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide(prev => prev === totalSlides ? 1 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => prev === 1 ? totalSlides : prev - 1);
  };

  const goToSlide = (slideNumber: number) => {
    setCurrentSlide(slideNumber);
  };

  return (
    <section className="w-full pt-[var(--sds-size-space-1200)] pb-[var(--sds-size-space-1200)] gap-[var(--sds-size-space-1200)] px-0">
      <div className="w-full text-center leading-[1.1] gap-[var(--sds-size-space-200)] max-md:max-w-full">
        <h2 className="text-5xl font-extrabold tracking-[-0.96px] bg-clip-text max-md:max-w-full max-md:text-[40px]">
          Empowering Your Business
        </h2>
        <p className="text-[#1A1A1A] text-[40px] font-normal tracking-[-0.8px] mt-2 max-md:max-w-full">
          Every Step of the Way
        </p>
      </div>
      
      <div className="flex min-h-[621px] w-full max-w-[1272px] flex-col items-stretch mt-12 mx-auto max-md:max-w-full max-md:mt-10">
        <div className="flex w-full flex-col items-stretch justify-center py-px max-md:max-w-full">
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border mx-4">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <img
                  src={slides[currentSlide - 1].image}
                  alt={slides[currentSlide - 1].title}
                  className="aspect-[4/3] object-cover w-full rounded-xl shadow-lg"
                />
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <h3 className="text-3xl font-bold text-card-foreground mb-4">
                  {slides[currentSlide - 1].title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {slides[currentSlide - 1].description}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="self-center flex items-center gap-4 justify-center mt-8 p-2">
          <button 
            onClick={prevSlide}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          
          <div className="flex items-center gap-3 mx-6">
            {[1, 2, 3].map((slideNumber) => (
              <button
                key={slideNumber}
                onClick={() => goToSlide(slideNumber)}
                className="transition-all"
                aria-label={`Go to slide ${slideNumber}`}
              >
                <div
                  className={`rounded-full transition-all ${
                    currentSlide === slideNumber
                      ? 'bg-primary w-4 h-4'
                      : 'bg-muted-foreground/40 w-3 h-3'
                  }`}
                />
              </button>
            ))}
          </div>
          
          <button 
            onClick={nextSlide}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompanySteps;
