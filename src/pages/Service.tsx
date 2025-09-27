import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  const faqItems = [
    {
      question:
        "How quickly will I get a response after filling out the inquiry form?",
      answer:
        "You’ll receive a response within 24 hours to schedule your discovery call.",
    },
    {
      question: "What happens during the discovery call?",
      answer:
        "We run a 30-minute call to understand your business goals, challenges, and existing processes. Based on that, we recommend the best AI solution tailored to your needs.",
    },
    {
      question: "Can I test the workflow before it goes live?",
      answer:
        "Yes, we build and test workflows in a sandbox environment first to ensure they work without impacting your real data.",
    },
    {
      question: "What tools do you use for feedback and internal testing?",
      answer:
        "We use Loom videos to explain the workflow logic and gather QA feedback before finalization.",
    },
    {
      question: "How do I provide feedback after delivery?",
      answer:
        "You can share feedback through our feedback form. We also explore upgrades, retainers, or featuring your workflow as a case study based on your experience.",
    },
    {
      question: "Do you offer ongoing support after delivery?",
      answer:
        "Yes, we provide options for upgrades, maintenance retainers, and workflow improvements to support your growth.",
    },
    {
      question: "Who owns the workflow once it’s delivered?",
      answer:
        "You have full ownership of the delivered workflow, including the documentation and setup provided.",
    },
    {
      question:
        "Can you integrate with my existing tools (e.g., Slack, CRM, Notion)?",
      answer:
        "Yes, our workflows are designed to integrate with your existing tools and platforms seamlessly.",
    },
    {
      question: "How much does an AI project cost?",
      answer:
        "Pricing depends on the complexity, integrations, and level of customization required. We provide a transparent estimate after the discovery call.",
    },
    {
      question: "How long will it take to implement my AI solution?",
      answer:
        "Most workflows are delivered within 2–6 weeks, depending on scope and integrations. Timelines are shared during the proposal stage.",
    },
    {
      question: "Is my data safe with New Age AI?",
      answer:
        "Yes. We follow strict security and compliance practices. Your data is never shared outside your project and is only used for implementation.",
    },
    {
      question: "Do you offer custom AI models or only pre-built workflows?",
      answer:
        "We build both—from no-code/low-code automations to custom-trained models—depending on your needs.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We’re industry-agnostic and have worked across SaaS, eCommerce, professional services, and operations teams.",
    },
    {
      question: "What’s the ROI of implementing AI workflows?",
      answer:
        "AI workflows typically save time, reduce manual errors, and scale operations at a lower cost. We help measure ROI by comparing pre- and post-implementation metrics.",
    },
    {
      question: "Do you train our team on how to use the AI workflows?",
      answer:
        "Yes, we provide documentation, Loom walkthroughs, and optional live training sessions.",
    },
    {
      question: "What happens if I need changes after the workflow is live?",
      answer:
        "You can request upgrades or adjustments anytime. We offer retainer packages for ongoing optimization.",
    },
    {
      question: "Do you work with startups as well as established businesses?",
      answer:
        "Yes. We tailor our approach for early-stage startups through to established enterprises.",
    },
    {
      question: "What makes New Age AI different from other AI agencies?",
      answer:
        "We deliver simple, scalable, and documented workflows with a hands-on approach so your team understands and benefits from the solution.",
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
        <section id="faqs" className="px-16 py-16 max-md:px-5">
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
