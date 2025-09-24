import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CompanySteps from '@/components/CompanySteps';
import Results from '@/components/Results';
import WhoItsFor from '@/components/WhoItsFor';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import WorkflowMap from '@/components/WorkflowMap';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import howItWorks01 from '@/assets/how-it-works-01.png';
import howItWorks02 from '@/assets/how-it-works-02.png';
import howItWorks03 from '@/assets/how-it-works-03.png';

const Index = () => {
  return (
    <div>
      <div className="w-full max-w-full overflow-hidden bg-[#FCFCFF] max-md:max-w-full">
        <Header />
        
        <main>
          <Hero />
          
          <section className="py-16 px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                How it <span className="text-primary">Works?</span>
              </h2>
            </div>
            
            <div className="flex justify-center items-stretch gap-8 max-w-6xl mx-auto max-md:flex-col max-md:gap-6">
              <div className="flex-1 bg-card rounded-xl p-8 shadow-lg border border-border transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
                <div className="text-center">
                  <img
                    src={howItWorks01}
                    alt="Step 1 - Intake"
                    className="w-32 h-32 object-contain mx-auto mb-6 filter drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
                  />
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">Intake</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Understanding your challenges to create a solution.
                  </p>
                </div>
              </div>
              
              <div className="flex-1 bg-card rounded-xl p-8 shadow-lg border border-border transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
                <div className="text-center">
                  <img
                    src={howItWorks02}
                    alt="Step 2 - Build"  
                    className="w-32 h-32 object-contain mx-auto mb-6 filter drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
                  />
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">Build</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Developing smart workflows that suit your business.
                  </p>
                </div>
              </div>
              
              <div className="flex-1 bg-card rounded-xl p-8 shadow-lg border border-border transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
                <div className="text-center">
                  <img
                    src={howItWorks03}
                    alt="Step 3 - Deliver"
                    className="w-32 h-32 object-contain mx-auto mb-6 filter drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
                  />
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">Deliver</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Launching AI solutions that drive measurable success.
                  </p>
                </div>
              </div>
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
