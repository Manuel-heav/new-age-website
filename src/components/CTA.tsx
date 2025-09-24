import React, { useState } from 'react';

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  const handleBookCall = () => {
    // Handle book call action
    console.log('Booking strategy call...');
  };

  return (
    <section id="contact" className="pb-[var(--sds-size-space-1600)] justify-center items-stretch flex w-full flex-col gap-[var(--sds-size-space-800)] max-md:max-w-full">
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
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/90b5ac4abbe6e477b05abc3af86a66d60118a43d?placeholderIfAbsent=true"
                alt="Phone icon"
                className="aspect-[1] object-contain w-10 shrink-0 rounded-[30px]"
              />
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
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/3c5746aaf34e7ce324e9bad279414cfb4bb29bcf?placeholderIfAbsent=true"
                alt="Email icon"
                className="aspect-[1] object-contain w-10 shrink-0 rounded-[30px]"
              />
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
          <form onSubmit={handleSubmit} className="mt-8 space-y-4 max-w-md">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
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
                value={formData.email}
                onChange={handleInputChange}
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
                value={formData.phone}
                onChange={handleInputChange}
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
                value={formData.company}
                onChange={handleInputChange}
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
                value={formData.message}
                onChange={handleInputChange}
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
        
        <button
          onClick={handleBookCall}
          className="justify-center items-center self-stretch flex min-h-14 gap-2 text-xl text-white font-medium text-center tracking-[-0.1px] my-auto px-4 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105"
        >
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
  );
};

export default CTA;
