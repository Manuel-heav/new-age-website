import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import aiTechImage from '@/assets/ai-tech-new.png';
import humanElementImage from '@/assets/human-element-new.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="w-full">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-600 px-6 py-20 md:px-16 lg:px-20 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tight">
                We Help
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                Lean Business
              </h2>
              <p className="text-xl md:text-2xl mb-8">
                Scale with Smart Automation
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Book Strategy Call
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  See Pricing
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="bg-white px-6 py-16 md:px-16 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              <span className="text-blue-600 font-semibold">New Age Guardian</span> was founded to help founders spend more time on strategy, not spreadsheets
            </p>
          </div>
        </section>

        {/* Fast No Code Section */}
        <section className="bg-gray-50 px-6 py-16 md:px-16 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="border-2 border-dashed border-blue-400 p-6 rounded-lg">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Fast / No Code /<br />
                  AI / SOPs
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Transform your business processes with powerful AI automation, all without writing a single line of code.
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src={aiTechImage} 
                  alt="AI Automation Technology"
                  className="w-full max-w-md rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Human Element Section */}
        <section className="bg-white px-6 py-16 md:px-16 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <img 
              src={humanElementImage} 
              alt="Human Element - We combine AI with human insight to truly understand your business needs"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </section>

        {/* Tools Section */}
        <section className="bg-gray-50 px-6 py-16 md:px-16 lg:px-20">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">
              Tools
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">GPT</span>
                </div>
                <span className="font-semibold">ChatGPT</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Z</span>
                </div>
                <span className="font-semibold">zapier</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">N</span>
                </div>
                <span className="font-semibold">Notion</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">S</span>
                </div>
                <span className="font-semibold">slack</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">M</span>
                </div>
                <span className="font-semibold">make</span>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-600 px-6 py-16 md:px-16 lg:px-20 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl mb-8">
              We work best with fast-moving <span className="text-blue-200 font-bold">Founders</span> and <span className="text-blue-200 font-bold">Agencies</span>
            </p>
          </div>
        </section>

        {/* What Sets Us Apart Section */}
        <section className="bg-white px-6 py-16 md:px-16 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white text-2xl">🚀</div>
                </div>
                <h4 className="text-lg text-gray-600 mb-2">What Sets Us Apart</h4>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Speed, Clarity, Execution
                </h3>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white text-2xl">🧠</div>
                </div>
                <h4 className="text-lg text-gray-600 mb-2">Built Different</h4>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  We don't give AI advice
                </h3>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;