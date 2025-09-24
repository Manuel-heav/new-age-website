import { Star } from "lucide-react";
import React, { useState, useEffect } from "react";

// A simple custom hook to get the window width
const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const windowWidth = useWindowSize();

  const testimonials = [
    {
      id: 1,
      text: "I'm so Amazed by this Al Chatbot and still a NEWBIE, but I am progressing. I am on my way to LOVING THIS AI GUY!!",
      author: "AI Chatbot",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/f7adf0d6852fc29f6c3b50817cf7af8394e89cae?placeholderIfAbsent=true",
    },
    {
      id: 2,
      text: "WOW! I am so amazed, Its really a best app for all. I am a writer and I needed a grammar checker and gla I found this.",
      author: "iGrammar",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/ef31eca22ad09b3f5b440cb0e5a380ab70b31677?placeholderIfAbsent=true",
    },
    {
      id: 3,
      text: "This app is an awesome app worth every subscription if you are a student you can learn and also figure out languages.",
      author: "iGrammar",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/ef31eca22ad09b3f5b440cb0e5a380ab70b31677?placeholderIfAbsent=true",
    },
    {
      id: 4,
      text: "I'm so Amazed by this Al Chatbot and still a NEWBIE, but I am progressing. I am on my way to LOVING THIS AI GUY!!",
      author: "AI Chatbot",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/f7adf0d6852fc29f6c3b50817cf7af8394e89cae?placeholderIfAbsent=true",
    },
    {
      id: 5,
      text: "WOW! I am so amazed, Its really a best app for all. I am a writer and I needed a grammar checker and gla I found this.",
      author: "iGrammar",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/ef31eca22ad09b3f5b440cb0e5a380ab70b31677?placeholderIfAbsent=true",
    },
    {
      id: 6,
      text: "This app is an awesome app worth every subscription if you are a student you can learn and also figure out languages.",
      author: "iGrammar",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/ef31eca22ad09b3f5b440cb0e5a380ab70b31677?placeholderIfAbsent=true",
    },
  ];

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  useEffect(() => {
    // Disable slider on mobile
    if (isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile, testimonials.length]);

  const getSliderTransform = () => {
    if (isMobile) return { transform: "translateX(0)" };

    const cardWidth = isTablet ? 400 : 485;
    const gap = isTablet ? 24 : 32;
    const offset = currentIndex * (cardWidth + gap);

    return { transform: `translateX(-${offset}px)` };
  };

  return (
    <section className="flex w-full flex-col items-stretch justify-center py-20 md:py-[104px]">
      <div className="w-full text-center text-4xl font-bold tracking-tighter text-[#1A1A1A] md:text-5xl lg:text-[56px] lg:leading-[1.1]">
        <h2 className="text-[#1A1A1A] font-semibold">What they're saying...</h2>
      </div>

      <div className="mt-12 self-center w-full max-w-full overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out md:gap-6 lg:gap-8 flex-col md:flex-row px-10"
          style={getSliderTransform()}
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="w-full flex-shrink-0 rounded-[20px] bg-[#F2F5FE] p-8 shadow-[0_8px_24px_rgba(0,0,0,0.15)] md:w-[400px] md:p-8 lg:w-[485px] lg:p-10"
              style={{ minHeight: isMobile ? "auto" : "333px" }}
            >
              <blockquote className="text-lg font-medium leading-relaxed text-[#1A1A1A] md:text-xl md:leading-9">
                {testimonial.text}
              </blockquote>

              <div className="mt-8 flex w-full items-center justify-start gap-4 md:mt-10 md:gap-5">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.author} avatar`}
                  className="my-auto aspect-square w-14 rounded-[10px] object-contain md:w-[60px]"
                />
                <div className="flex flex-col items-start">
                  <cite className="not-italic text-[#464646] text-xl font-semibold">
                    {testimonial.author}
                  </cite>
                  <div className="mt-1 flex gap-1">
                    {Array(5)
                      .fill(0)
                      .map((_, index) => (
                        <Star
                          key={index}
                          fill="#ffcc00"
                          strokeWidth={0}
                          size={20}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
