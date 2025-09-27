"use client";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import phoneOneSmall from "@/assets/phone-mockup-preview-SMALL.png";
import phoneOneBig from "@/assets/phone-mockup-preview-BIG.png";
import phoneTwoSmall from "@/assets/phone-mockup-preview-SMALL-second.png";
import phoneTwoBig from "@/assets/phone-mockup-preview-BIG-second.png";
import phoneThreeSmall from "@/assets/phone-mockup-preview-SMALL-third.png";
import phoneThreeBig from "@/assets/phone-mockup-preview-BIG-third.png";
import aiTechImage from "@/assets/ai-tech-new.png";
import CTA from "@/components/CTA";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Projects = () => {
  const [clickedPhone, setClickedPhone] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const iframeRefs = useRef([]);

  const youtubeLinks = [
    "https://www.youtube.com/embed/8Dq-56hD3Fo?autoplay=1&mute=1&enablejsapi=1",
    "https://www.youtube.com/embed/X3tr5ax78V4?autoplay=1&mute=1&enablejsapi=1",
    "https://www.youtube.com/embed/xQknAlRnaM4?autoplay=1&mute=1&enablejsapi=1",
  ];

  useEffect(() => {
    if (clickedPhone !== null) {
      const timer = setTimeout(() => {
        const nextIndex = (currentVideoIndex + 1) % youtubeLinks.length;
        setCurrentVideoIndex(nextIndex);

        const iframe = iframeRefs.current[clickedPhone];
        if (iframe) {
          iframe.src = youtubeLinks[nextIndex];
        }
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [clickedPhone, currentVideoIndex, youtubeLinks]);

  const handlePhoneClick = (idx) => {
    setClickedPhone(idx);
    setCurrentVideoIndex(0);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gray-50 px-6 py-16 md:px-16 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-7xl font-medium text-black inline-block tracking-tight max-md:text-5xl">
              Proven{" "}
              <span className="font-bold bg-clip-text bg-gradient-to-r from-blue-800 to-sky-400 text-transparent">
                Results,
              </span>{" "}
              Real{" "}
              <span className="font-bold bg-clip-text bg-gradient-to-r from-blue-800 to-sky-400 text-transparent">
                Impact
              </span>
            </h2>
          </div>
        </section>

        {/* Phone Mockups Section */}
        <section className="py-16 mb-10 bg-white relative">
          <div className="relative mx-auto">
            {/* Desktop / Tablet */}
            <div className="hidden md:flex items-center justify-center space-x-4">
              {[phoneTwoBig, phoneThreeBig, phoneOneBig].map((img, idx) => (
                <div key={idx} className={idx === 1 ? "w-1/3" : "w-1/4"}>
                  {clickedPhone === idx ? (
                    <div
                      className="relative w-full"
                      style={{ aspectRatio: "9/19.5" }}
                    >
                      <iframe
                        ref={(el) => (iframeRefs.current[idx] = el)}
                        className="w-full h-full rounded-[2.5rem] shadow-2xl border-8 border-gray-800"
                        src={`${
                          youtubeLinks[currentVideoIndex]
                        }&t=${Date.now()}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`phone ${idx + 1}`}
                      className="w-full cursor-pointer"
                      onClick={() => handlePhoneClick(idx)}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Swiper */}
            <div className="md:hidden">
              <Swiper
                spaceBetween={16}
                slidesPerView={"auto"}
                centeredSlides={true}
                initialSlide={1}
                grabCursor={true}
                className="w-full py-20"
              >
                {[phoneTwoSmall, phoneThreeSmall, phoneOneSmall].map(
                  (img, idx) => (
                    <SwiperSlide
                      key={idx}
                      className={
                        "!w-[50%] flex justify-center transition-transform duration-300 " +
                        "[&.swiper-slide-active]:scale-150 [&.swiper-slide-active]:z-30 " +
                        "[&.swiper-slide-active]:opacity-100 [&:not(.swiper-slide-active)]:opacity-60 " +
                        "[&:not(.swiper-slide-active)]:scale-90"
                      }
                    >
                      {clickedPhone === idx ? (
                        <div
                          className="relative w-full"
                          style={{ aspectRatio: "9/19.5" }}
                        >
                          <iframe
                            ref={(el) => (iframeRefs.current[idx] = el)}
                            className="w-full h-full rounded-[1.5rem] shadow-xl border-4 border-gray-800"
                            src={`${
                              youtubeLinks[currentVideoIndex]
                            }&t=${Date.now()}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      ) : (
                        <img
                          src={img || "/placeholder.svg"}
                          alt={`phone ${idx + 1}`}
                          className="w-full h-auto object-contain cursor-pointer"
                          onClick={() => handlePhoneClick(idx)}
                        />
                      )}
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </div>
          </div>
        </section>

        {/* Fast No Code Section */}
        <section className="max-w-7xl mx-auto flex items-center justify-center md:bg-[#f2f5fe] px-6 py-16 md:px-16 lg:px-20 mb-28 md:rounded-3xl">
          <div className="w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image first on mobile */}
              <div className="flex justify-center order-1 md:order-2">
                <img
                  src={aiTechImage || "/placeholder.svg"}
                  alt="AI Automation Technology"
                  className="w-full max-w-md rounded-2xl shadow-lg"
                />
              </div>

              {/* Text second on mobile */}
              <div className="p-6 rounded-lg order-2 md:order-1 text-center md:text-left">
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  Cadabra App
                </h2>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                  Transform your business processes with powerful AI automation,
                  all without writing a single line of code.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fast No Code Section */}
        <section className="max-w-7xl mx-auto md:bg-[#f2f5fe] px-6 py-16 md:px-16 lg:px-20 mb-28 md:rounded-3xl md:shadow-md flex items-center justify-center">
          <div className="w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image always first */}
              <div className="flex justify-center">
                <img
                  src={aiTechImage || "/placeholder.svg"}
                  alt="AI Automation Technology"
                  className="w-full max-w-md rounded-2xl shadow-lg"
                />
              </div>

              {/* Text always second */}
              <div className="p-6 rounded-lg flex flex-col items-center md:items-start text-center md:text-left">
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  Cadabra App
                </h2>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                  Transform your business processes with powerful AI automation,
                  all without writing a single line of code.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
