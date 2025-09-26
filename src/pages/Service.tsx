import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import serviceDesktop from "../assets/service-desktop.png";
import serviceTablet from "../assets/service-tablet.png";
import serviceMobile from "../assets/service-mobile.png";
import OurServices from "@/components/OurServices";
import Pricing from "@/components/Pricing";
import Results from "@/components/Results";
import CTA from "@/components/CTA";

const Service = () => {
  const automationCards = [
    {
      title: "AI Strategy Call",
      subtitle: "First time buyers, Solopreneur",
      price: "Try for Free!",
      features: [
        "60mins consultation with AI Expert",
        "Tech stack audit of current workflows",
        "3 Automation ideas tailored to the business",
        "Action plan PDF sent post call",
      ],
      buttonText: "Book a Call",
      highlight: true,
    },
    {
      title: "AI Setup Starter",
      subtitle: "SMBs or Consultant wanting small AI helps",
      price: "$250",
      features: [
        "1 Basic app automation",
        "Show them N8N & Zapier workflows for automation",
        "Build a custom workflow & Offer Bundled Templates",
      ],
      buttonText: "Book a Call",
    },
    {
      title: "AI Full Automation",
      subtitle: "Business with repetitive ops.",
      price: "$750 - $1200",
      features: [
        "End-to-end AI orchestration and implementation",
        "2 Weeks maintenance included i.e implementation in client systems, training them, resolving any",
      ],
      buttonText: "Book a Call",
    },
    {
      title: "AI Custom Build",
      subtitle: "Enterprise & Custom Solutions",
      price: "Custom Quote",
      features: [
        "Fully customized AI solutions",
        "Dedicated project manager",
        "24/7 support and maintenance",
      ],
      buttonText: "Get Quote",
    },
  ];

  const faqItems = [
    {
      question: "Question 1",
      answer:
        "This is the answer to question 1 about our AI automation services.",
    },
    {
      question: "Question 1",
      answer:
        "This is another answer explaining our processes and methodologies.",
    },
    {
      question: "Question 1",
      answer: "Here we explain more details about our service offerings.",
    },
    {
      question: "Question 1",
      answer: "Additional information about pricing and packages.",
    },
    {
      question: "Question 1",
      answer: "More details about implementation and support.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FCFCFF]">
      <Header />

      <main className="w-full mt-10">
        {/* Hero Section */}
        <section className="relative h-[500px] sm:h-[450px] md:h-[500px] lg:h-[600px] p-6 sm:p-10 md:p-16">
          {/* Desktop Image */}
          <div className="hidden lg:block absolute inset-0 overflow-hidden px-16">
            <img
              src={serviceDesktop}
              alt="About us"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          {/* Tablet Image */}
          <div className="hidden md:block lg:hidden absolute inset-0 overflow-hidden px-12">
            <img
              src={serviceTablet}
              alt="About us"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          {/* Mobile Image */}
          <div className="block md:hidden overflow-hidden px-4">
            <img
              src={serviceMobile}
              alt="About us"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          {/* Buttons */}
          <div className="relative mt-12 md:absolute md:bottom-4 md:left-1/2 md:transform md:-translate-x-1/2 md:mt-0 w-full flex flex-row justify-center items-center gap-6 px-6">
            {/* Filled gradient (Book) - gradient on inner span */}
            <button className="relative px-0.5 py-0.5 rounded-lg w-full sm:w-auto bg-transparent">
              <span className="block rounded-md px-8 py-4 font-semibold text-lg bg-gradient-to-r from-[#103295] to-[#1fb2f8] text-white text-center">
                Book Strategy Call
              </span>
            </button>

            {/* Bordered gradient (Pricing) - gradient on outer, white inner */}
            <button className="relative px-0.5 py-0.5 rounded-lg w-full sm:w-auto bg-gradient-to-r from-[#102a8e] to-[#1fb4f9]">
              <span className="block bg-white rounded-md px-8 py-4 font-semibold text-lg text-[#0f288d] text-center">
                See Pricing
              </span>
            </button>
          </div>
        </section>

        <section className="px-16 py-16 mt-20 max-md:px-5">
          <div className="mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-32">
              {/* Left side text */}
              <h2 className="text-4xl sm:text-6xl lg:text-8xl font-semibold text-[#130231] -mb-28 sm:-mb-0">
                Our <br className="hidden sm:block" />
                Services
              </h2>

              <div className="max-w-full lg:max-w-[70%]">
                <OurServices />
              </div>
            </div>
          </div>
        </section>

        {/* What do you want to Automate Section */}
        <div className="mt-28">
          <Pricing />
        </div>

        {/* Result Section */}
        <div className="mt-28">
          <Results />
        </div>

        {/* Ready to Get Started Section */}
        <div className="mt-28">
          <CTA />
        </div>

        {/* FAQ Section */}
        <section className="px-16 py-16 max-md:px-5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-semibold text-center text-[#130231] mb-12">
              FAQs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqItems.map((item, index) => (
                <Accordion
                  key={index}
                  type="single"
                  collapsible
                  className="w-full"
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border border-gray-200 rounded-lg px-4"
                  >
                    <AccordionTrigger className="text-left font-medium text-[#130231]">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#6b84fd]">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Service;
