import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import contactDesktop from "../assets/contact-desktop.png";
import contactTablet from "../assets/contact-tablet.png";
import contactMobile from "../assets/contact-mobile.png";
import GetInTouch from "@/components/GetInTouch";
import calendly from "@/assets/calendly.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  // Calendly assets loader
  useEffect(() => {
    // Inject Calendly stylesheet once
    const cssHref = "https://assets.calendly.com/assets/external/widget.css";
    if (!document.querySelector(`link[href='${cssHref}']`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = cssHref;
      document.head.appendChild(link);
    }

    // Inject Calendly script once
    const scriptSrc = "https://assets.calendly.com/assets/external/widget.js";
    if (!document.querySelector(`script[src='${scriptSrc}']`)) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleOpenCalendly = () => {
    const calendly: any = (window as any).Calendly;
    if (calendly && typeof calendly.initPopupWidget === "function") {
      calendly.initPopupWidget({
        url: "https://calendly.com/sheilamaelabis/30min",
      });
    } else {
      // If script hasn't loaded yet, try again shortly
      setTimeout(() => {
        const c2: any = (window as any).Calendly;
        if (c2 && typeof c2.initPopupWidget === "function") {
          c2.initPopupWidget({
            url: "https://calendly.com/sheilamaelabis/30min",
          });
        }
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-8">
        {/* Hero Section */}
        <GetInTouch />

        {/* What do you want to Automate Section */}
        <div className="mt-28">
          <Pricing />
        </div>

        {/* Fast No Code Section */}
        <section className="max-w-7xl mx-auto flex items-center justify-center px-6 py-16 md:px-16 lg:px-20 mb-28 md:rounded-3xl">
          <div className="w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image first on mobile */}
              <div className="flex justify-center order-1 md:order-2">
                <img
                  src={calendly}
                  alt="AI Automation Technology"
                  className="w-full max-w-md rounded-2xl shadow-lg"
                />
              </div>

              {/* Text second on mobile */}
              <div className="p-6 rounded-lg order-2 md:order-1 text-center md:text-left">
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  Set Up <br /> Meeting
                </h2>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                  Connect with our expert team to learn how AI can supercharge
                  your success.
                </p>
                <Button
                  onClick={handleOpenCalendly}
                  size="lg"
                  className="mt-8 bg-gradient-to-r from-[#103295] to-[#1fb2f8] hover:from-[#0d2a7b] hover:to-[#1798de] px-8 transition-all rounded-xl"
                >
                  Schedule Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="mb-28 bg-[#f1fbff] p-20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              <span className="bg-clip-text bg-gradient-to-r from-[#1348a6] to-[#1b9ae5] text-transparent">
                100% Satisfaction Guarantee
              </span>
            </h3>
            <p className="text-2xl font-semibold">or We Fix it Free!</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
