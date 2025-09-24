import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import phoneMockups from '@/assets/phone-mockups.png';
import aiChipBlue from '@/assets/ai-chip-blue.jpg';
import ctaHandshake from '@/assets/cta-handshake.png';

const Projects = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gray-50 px-6 py-16 md:px-16 lg:px-20">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Proven <span className="text-blue-600">Results</span>, Real <span className="text-blue-600">Impact</span>
            </h1>
          </div>
        </section>

        {/* Phone Mockups Section */}
        <section className="bg-white px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <img 
              src={phoneMockups} 
              alt="AI Chat, Email Builder, and Business Dashboard Apps" 
              className="w-full max-w-3xl mx-auto"
            />
          </div>
        </section>

        {/* Cadabra App Section 1 */}
        <section className="bg-gray-50 px-6 py-16 md:px-16 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Cadabra App
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Transform your business processes with powerful AI automation, all without writing a single line of code.
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src={aiChipBlue} 
                  alt="AI Technology Chip" 
                  className="w-full max-w-md rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Cadabra App Section 2 */}
        <section className="bg-white px-6 py-16 md:px-16 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center md:order-1">
                <img 
                  src={aiChipBlue} 
                  alt="AI Technology Chip" 
                  className="w-full max-w-md rounded-2xl shadow-lg"
                />
              </div>
              <div className="md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Cadabra App
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Transform your business processes with powerful AI automation, all without writing a single line of code.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="pb-[var(--sds-size-space-1600)] justify-center items-stretch flex w-full flex-col gap-[var(--sds-size-space-800)] max-md:max-w-full px-6 py-16">
          <div className="self-center flex w-[956px] max-w-full items-center gap-[40px_100px] leading-none justify-between flex-wrap">
            <div className="self-stretch min-w-60 w-[581px] gap-[var(--sds-size-space-400)] my-auto max-md:max-w-full">
              <div className="text-black text-[56px] font-bold leading-[1.1] tracking-[-1.12px] max-md:max-w-full max-md:text-[40px]">
                <span className="font-semibold">Ready to</span>{" "}
                <span className="font-extrabold">Get Started?</span>
              </div>
              <p className="text-[#252525] text-2xl font-medium tracking-[-0.12px] mt-4 max-md:max-w-full">
                Let's schedule a Call and Explore the possibilities.
              </p>
              
              <div className="flex w-[420px] max-w-full gap-4 text-[#0F288D] mt-4">
                <div className="flex gap-2 flex-1 shrink basis-[0%] pt-[var(--sds-size-space-300)] pr-[var(--sds-size-space-300)] pb-[var(--sds-size-space-300)] pl-[var(--sds-size-space-300)] bg-[#DEDEDE] rounded-[1000px]">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  <div>
                    <div className="text-[#0F288D] text-xs font-medium tracking-[-0.06px]">
                      Phone number
                    </div>
                    <div className="text-[#0F288D] text-base font-bold tracking-[-0.08px]">
                      +1234567890
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2 whitespace-nowrap flex-1 shrink basis-[0%] pt-[var(--sds-size-space-300)] pr-[var(--sds-size-space-300)] pb-[var(--sds-size-space-300)] pl-[var(--sds-size-space-300)] bg-[#DEDEDE] rounded-[1000px]">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✉</span>
                  </div>
                  <div>
                    <div className="text-[#0F288D] text-xs font-medium tracking-[-0.06px]">
                      Email
                    </div>
                    <div className="text-[#0F288D] text-base font-bold tracking-[-0.08px]">
                      abc@gmail.com
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form className="mt-8 space-y-4 max-w-md">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your automation needs..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium py-3 px-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <button className="justify-center items-center self-stretch flex min-h-14 gap-2 text-xl text-white font-medium text-center tracking-[-0.1px] my-auto px-4 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105">
              <span className="self-stretch my-auto">
                Book Strategy Call
              </span>
            </button>
          </div>
          
          <div className="w-full overflow-hidden mt-8 max-md:max-w-full">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/c58ad579539d672555bc5c1fd3a2cb558eea6677?placeholderIfAbsent=true"
              alt="AI automation workflow visualization"
              className="aspect-[3.5] object-contain w-full max-md:max-w-full"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;