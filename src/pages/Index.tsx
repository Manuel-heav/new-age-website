import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CompanySteps from "@/components/CompanySteps";
import Results from "@/components/Results";
import WhoItsFor from "@/components/WhoItsFor";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import WorkflowMap from "@/components/WorkflowMap";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import howItWorks01 from "@/assets/how-it-works-01.png";
import howItWorks02 from "@/assets/how-it-works-02.png";
import howItWorks03 from "@/assets/how-it-works-03.png";

const Index = () => {
  return (
    <div className="flex flex-col px-20 max-md:pl-5">
      <div className="w-full max-w-screen-xl overflow-hidden bg-[#FCFCFF] max-md:max-w-full mx-auto">
        <Header />

        <main>
          <Hero />

          <section className="py-32 px-4 relative">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold text-foreground mb-4">
                How it{" "}
                <span className="bg-clip-text bg-gradient-to-r from-[#0f288d] to-[#1fbcff] text-transparent">
                  Works?
                </span>
              </h2>
            </div>

            {/* Cards container */}
            <div className="flex justify-center items-stretch gap-8 max-w-6xl mx-auto max-md:flex-col max-md:gap-6 -mt-8 md:-mt-12 lg:-mt-16">
              {[
                { img: howItWorks01, title: "Intake",  desc: "Understanding your challenges to create a solution." },
                { img: howItWorks02, title: "Build",   desc: "Developing smart workflows that suit your business." },
                { img: howItWorks03, title: "Deliver", desc: "Launching AI solutions that drive measurable success." },
              ].map((card, i) => (
                <div
                  key={i}
                  className="bg-[#f2f5fe] flex-1 bg-card rounded-xl p-6 md:p-6 lg:p-8 shadow-lg border border-border transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer"
                  style={{ boxShadow: "20px -20px 30px -10px rgba(0, 0, 0, 0.3)" }}
                >
                  <div className="text-center">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain mx-auto mb-4 md:mb-5 lg:mb-6 filter drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
                    />
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-card-foreground mb-2 md:mb-3 lg:mb-4">
                      {card.title}
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground text-[#6d6e73] leading-relaxed font-[350]">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <CompanySteps />
          <Results />
          <WhoItsFor />
          <Testimonials />
          <Pricing />
          <WorkflowMap />
          <CTA />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
