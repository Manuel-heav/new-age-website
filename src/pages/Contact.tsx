import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  // Calendly assets loader
  useEffect(() => {
    // Inject Calendly stylesheet once
    const cssHref = 'https://assets.calendly.com/assets/external/widget.css';
    if (!document.querySelector(`link[href='${cssHref}']`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = cssHref;
      document.head.appendChild(link);
    }

    // Inject Calendly script once
    const scriptSrc = 'https://assets.calendly.com/assets/external/widget.js';
    if (!document.querySelector(`script[src='${scriptSrc}']`)) {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleOpenCalendly = () => {
    const calendly: any = (window as any).Calendly;
    if (calendly && typeof calendly.initPopupWidget === 'function') {
      calendly.initPopupWidget({ url: 'https://calendly.com/sheilamaelabis/30min' });
    } else {
      // If script hasn't loaded yet, try again shortly
      setTimeout(() => {
        const c2: any = (window as any).Calendly;
        if (c2 && typeof c2.initPopupWidget === 'function') {
          c2.initPopupWidget({ url: 'https://calendly.com/sheilamaelabis/30min' });
        }
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="px-4 py-8 md:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Contact Info & Form */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-8">
                  Get in Touch &<br />
                  Get Started
                </h1>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      📞
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">+1234567890</p>
                      <Button variant="link" className="p-0 h-auto text-white underline text-sm">
                        Chat now
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      ✉️
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">abc@gmail.com</p>
                      <Button variant="link" className="p-0 h-auto text-white underline text-sm">
                        Mail now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full h-12 border-gray-200"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full h-12 border-gray-200"
                    />
                  </div>
                  <div>
                    <Input
                      name="company"
                      placeholder="Company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full h-12 border-gray-200"
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700">
                    Book Now
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-4 py-16 md:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What do you want to <span className="text-blue-600">Automate?</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* AI Strategy Call */}
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-6 text-white text-center">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                    AI Strategy Call
                  </span>
                </div>
                <div className="text-2xl font-bold mb-2 text-yellow-300">Try for Free!</div>
                <p className="text-sm text-white/80 mb-4">First time buyers, Solopreneur</p>
                <ul className="text-sm text-white/90 space-y-2 mb-6 text-left">
                  <li>• 60mins consultation with AI Expert</li>
                  <li>• Tech stack audit of current workflows</li>
                  <li>• 3 Automation ideas tailored to the business</li>
                  <li>• Action plan PDF sent post call</li>
                </ul>
                <Button className="w-full bg-white text-purple-600 hover:bg-gray-100">
                  Book a Call
                </Button>
              </div>

              {/* Setup Starter */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white text-center">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                    AI Setup Starter
                  </span>
                </div>
                <div className="text-3xl font-bold mb-2">$250</div>
                <p className="text-sm text-white/80 mb-4">SMBs or Consultant wanting small AI helps</p>
                <ul className="text-sm text-white/90 space-y-2 mb-6 text-left">
                  <li>• 1 Basic app automation</li>
                  <li>• Show them N8N & Zapier workflows</li>
                  <li>• Build a custom workflow</li>
                  <li>• Offer Bundled Templates</li>
                </ul>
                <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                  Book a Call
                </Button>
              </div>

              {/* Full Automation */}
              <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl p-6 text-white text-center">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                    AI Full Automation
                  </span>
                </div>
                <div className="text-2xl font-bold mb-2">$750 - $1200</div>
                <p className="text-sm text-white/80 mb-4">Business with repetitive ops.</p>
                <ul className="text-sm text-white/90 space-y-2 mb-6 text-left">
                  <li>• End-to-end AI orchestration</li>
                  <li>• 2 Weeks maintenance included</li>
                  <li>• Implementation in client systems</li>
                  <li>• Training and support</li>
                </ul>
                <Button className="w-full bg-white text-indigo-600 hover:bg-gray-100">
                  Book a Call
                </Button>
              </div>

              {/* Custom Build */}
              <div className="bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl p-6 text-white text-center">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                    AI Custom Build
                  </span>
                </div>
                <div className="text-xl font-bold mb-2">Discuss for the price</div>
                <p className="text-sm text-white/80 mb-4">Mid-sized clients / Agencies</p>
                <ul className="text-sm text-white/90 space-y-2 mb-6 text-left">
                  <li>• Multi-user Setup</li>
                  <li>• AI Assistants with memory</li>
                  <li>• Integrations & APIs</li>
                  <li>• Frontend automation</li>
                </ul>
                <Button className="w-full bg-white text-gray-600 hover:bg-gray-100">
                  Book a Call
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Calendly Integration Section */}
        <section id="meeting" className="px-4 py-16 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Set Up<br />Meeting
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Connect with our expert team to learn how AI can supercharge your success.
                </p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8" onClick={handleOpenCalendly}>
                  Schedule Now
                </Button>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-12 text-center">
                <div className="text-white">
                  <div className="text-6xl font-bold mb-4">C</div>
                  <h3 className="text-2xl font-bold">Calendly</h3>
                  <p className="text-blue-100 mt-2">Easy scheduling integration</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="px-4 py-12 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              <span className="text-blue-600">100% Satisfaction Guarantee</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              or We Fix it Free!
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;