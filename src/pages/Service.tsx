import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Service = () => {
  const serviceCards = [
    {
      title: "Starter Automation",
      price: "$60",
      description: "First time buyers, Solopreneur",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      title: "Growth Agent", 
      price: "$60",
      description: "First time buyers, Solopreneur",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "Premium Package",
      price: "$120", 
      description: "Scale your business",
      gradient: "from-green-600 to-blue-600"
    }
  ];

  const automationCards = [
    {
      title: "AI Strategy Call",
      subtitle: "First time buyers, Solopreneur", 
      price: "Try for Free!",
      features: [
        "60mins consultation with AI Expert",
        "Tech stack audit of current workflows", 
        "3 Automation ideas tailored to the business",
        "Action plan PDF sent post call"
      ],
      buttonText: "Book a Call",
      highlight: true
    },
    {
      title: "AI Setup Starter",
      subtitle: "SMBs or Consultant wanting small AI helps",
      price: "$250",
      features: [
        "1 Basic app automation",
        "Show them N8N & Zapier workflows for automation",
        "Build a custom workflow & Offer Bundled Templates"
      ],
      buttonText: "Book a Call"
    },
    {
      title: "AI Full Automation", 
      subtitle: "Business with repetitive ops.",
      price: "$750 - $1200",
      features: [
        "End-to-end AI orchestration and implementation",
        "2 Weeks maintenance included i.e implementation in client systems, training them, resolving any"
      ],
      buttonText: "Book a Call"
    },
    {
      title: "AI Custom Build",
      subtitle: "Enterprise & Custom Solutions",
      price: "Custom Quote",
      features: [
        "Fully customized AI solutions",
        "Dedicated project manager",
        "24/7 support and maintenance"
      ],
      buttonText: "Get Quote"
    }
  ];

  const faqItems = [
    {
      question: "How quickly will I get a response after filling out the inquiry form?",
      answer: "You’ll receive a response within 24 hours to schedule your discovery call."
    },
    {
      question: "What happens during the discovery call?",
      answer: "We run a 30-minute call to understand your business goals, challenges, and existing processes. Based on that, we recommend the best AI solution tailored to your needs."
    },
    {
      question: "Can I test the workflow before it goes live?",
      answer: "Yes, we build and test workflows in a sandbox environment first to ensure they work without impacting your real data."
    },
    {
      question: "What tools do you use for feedback and internal testing?",
      answer: "We use Loom videos to explain the workflow logic and gather QA feedback before finalization."
    },
    {
      question: "How do I provide feedback after delivery?",
      answer: "You can share feedback through our feedback form. We also explore upgrades, retainers, or featuring your workflow as a case study based on your experience."
    },
    {
      question: "Do you offer ongoing support after delivery?",
      answer: "Yes, we provide options for upgrades, maintenance retainers, and workflow improvements to support your growth."
    },
    {
      question: "Who owns the workflow once it’s delivered?",
      answer: "You have full ownership of the delivered workflow, including the documentation and setup provided."
    },
    {
      question: "Can you integrate with my existing tools (e.g., Slack, CRM, Notion)?",
      answer: "Yes, our workflows are designed to integrate with your existing tools and platforms seamlessly."
    },
    {
      question: "How much does an AI project cost?",
      answer: "Pricing depends on the complexity, integrations, and level of customization required. We provide a transparent estimate after the discovery call."
    },
    {
      question: "How long will it take to implement my AI solution?",
      answer: "Most workflows are delivered within 2–6 weeks, depending on scope and integrations. Timelines are shared during the proposal stage."
    },
    {
      question: "Is my data safe with New Age AI?",
      answer: "Yes. We follow strict security and compliance practices. Your data is never shared outside your project and is only used for implementation."
    },
    {
      question: "Do you offer custom AI models or only pre-built workflows?",
      answer: "We build both—from no‑code/low‑code automations to custom‑trained models—depending on your needs."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We’re industry‑agnostic and have worked across SaaS, eCommerce, professional services, and operations teams."
    },
    {
      question: "What’s the ROI of implementing AI workflows?",
      answer: "AI workflows typically save time, reduce manual errors, and scale operations at a lower cost. We help measure ROI by comparing pre‑ and post‑implementation metrics."
    },
    {
      question: "Do you train our team on how to use the AI workflows?",
      answer: "Yes, we provide documentation, Loom walkthroughs, and optional live training sessions."
    },
    {
      question: "What happens if I need changes after the workflow is live?",
      answer: "You can request upgrades or adjustments anytime. We offer retainer packages for ongoing optimization."
    },
    {
      question: "Do you work with startups as well as established businesses?",
      answer: "Yes. We tailor our approach for early‑stage startups through to established enterprises."
    },
    {
      question: "What makes New Age AI different from other AI agencies?",
      answer: "We deliver simple, scalable, and documented workflows with a hands‑on approach so your team understands and benefits from the solution."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FCFCFF]">
      <Header />
      
      <main className="w-full">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="bg-gradient-to-br from-[#071446] via-[#1e3a8a] to-[#3730a3] px-16 py-20 text-center text-white max-md:px-5 rounded-3xl mx-8 mt-8">
            <div className="max-w-4xl mx-auto relative z-10">
              <h1 className="text-5xl font-bold mb-6 max-md:text-3xl">
                We've Got<br />
                <span className="text-white">
                  a Package for You
                </span>
              </h1>
              <p className="text-lg text-blue-100 mb-8 max-md:text-base">
                Whether you're just starting with Automation<br />
                Or want to Scale it
              </p>
              <div className="flex gap-4 justify-center max-md:flex-col max-md:items-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-base">
                  Book Strategy Call
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#071446] px-8 py-3 rounded-lg text-base">
                  See Pricing
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Service Section */}
        <section className="px-16 py-16 max-md:px-5">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="lg:w-1/3">
                <h2 className="text-4xl font-bold text-[#130231] mb-4">
                  Our<br />Service
                </h2>
              </div>
              
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
                {serviceCards.map((card, index) => (
                  <Card key={index} className="relative overflow-hidden border-0 shadow-lg">
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-90`}></div>
                    <CardContent className="relative z-10 p-6 text-white text-center">
                      <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                      <p className="text-sm opacity-90 mb-4">{card.description}</p>
                      <div className="text-2xl font-bold mb-4">{card.price}</div>
                      <Button className="w-full bg-white text-gray-800 hover:bg-gray-100 rounded-lg">
                        Select
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What do you want to Automate Section */}
        <section className="px-16 py-16 max-md:px-5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[#130231] mb-12 max-md:text-2xl">
              What do you want to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                Automate?
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {automationCards.map((card, index) => (
                <Card key={index} className="relative border-2 border-gray-200 rounded-xl overflow-hidden bg-gradient-to-br from-[#071446] to-[#1e3a8a] text-white">
                  <CardHeader className="text-center p-6">
                    <div className="text-xs text-blue-200 mb-2">{card.subtitle}</div>
                    <CardTitle className="text-lg font-bold text-white mb-4">
                      {card.title}
                    </CardTitle>
                    <div className="text-2xl font-bold text-white mb-4">
                      {card.price}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6 pt-0">
                    <ul className="space-y-2 mb-6 text-sm">
                      {card.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-blue-100">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 text-sm">
                      {card.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Result Section */}
        <section className="px-16 py-16 bg-gradient-to-br from-[#071446] to-[#1e3a8a] text-white max-md:px-5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl font-bold mb-16 max-md:text-4xl">Result</h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg transform rotate-3">
                <div className="text-sm text-gray-600 mb-2">CLIENT ONBOARDING</div>
                <div className="text-4xl font-bold text-blue-600">5x</div>
                <div className="text-lg font-semibold">Faster</div>
              </div>
              
              <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg transform -rotate-2">
                <div className="text-sm text-gray-600 mb-2">SAVED</div>
                <div className="text-4xl font-bold text-orange-500">12</div>
                <div className="text-lg font-semibold">Hours/Week</div>
              </div>
              
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div className="w-16 h-16 border-4 border-blue-600 rounded-full relative">
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-blue-600"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 bg-blue-600"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Get Started Section */}
        <section className="px-16 py-16 max-md:px-5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#130231] mb-4 max-md:text-2xl">
              Ready to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                Get Started?
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's Schedule a Call and Explore the possibilities.
            </p>
            
            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-sm text-gray-600">100% Refund</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-sm text-gray-600">Satisfaction</span>
              </div>
            </div>
            
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg text-base">
              Book Strategy Call
            </Button>
          </div>
          
          <div className="mt-16 relative">
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
              <div className="relative z-10 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold mb-2">🤝</div>
                  <p className="text-sm opacity-90">Partnership & Trust</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faqs" className="px-16 py-16 max-md:px-5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[#130231] mb-12">FAQs</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqItems.map((item, index) => (
                <Accordion key={index} type="single" collapsible className="w-full">
                  <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg px-4">
                    <AccordionTrigger className="text-left font-medium text-[#130231]">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
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