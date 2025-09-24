import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "I'm so Amazed by this Al Chatbot and still a NEWBIE, but I am progressing. I am on my way to LOVING THIS AI GUY!!",
      author: "AI Chatbot",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/8559cde1d85afa8752521dd1ea31d0054ba77f05?placeholderIfAbsent=true"
    },
    {
      id: 2,
      text: "WOW! I am so amazed, Its really a best app for all. I am a writer and I needed a grammar checker and gla I found this.",
      author: "iGrammar",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/ef31eca22ad09b3f5b440cb0e5a380ab70b31677?placeholderIfAbsent=true"
    },
    {
      id: 3,
      text: "This app is an awesome app worth every subscription if you are a student you can learn and also figure out languages and how their grammar work very great app.",
      author: "iGrammar",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/ef31eca22ad09b3f5b440cb0e5a380ab70b31677?placeholderIfAbsent=true"
    },
    {
      id: 4,
      text: "I'm so Amazed by this Al Chatbot and still a NEWBIE, but I am progressing. I am on my way to LOVING THIS AI GUY!!",
      author: "AI Chatbot",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/f7adf0d6852fc29f6c3b50817cf7af8394e89cae?placeholderIfAbsent=true"
    },
    {
      id: 5,
      text: "WOW! I am so amazed, Its really a best app for all. I am a writer and I needed a grammar checker and gla I found this.",
      author: "iGrammar",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/8559cde1d85afa8752521dd1ea31d0054ba77f05?placeholderIfAbsent=true"
    },
    {
      id: 6,
      text: "This app is an awesome app worth every subscription if you are a student you can learn and also figure out languages and how their grammar work very great app.",
      author: "iGrammar",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/8559cde1d85afa8752521dd1ea31d0054ba77f05?placeholderIfAbsent=true"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="flex w-full flex-col items-stretch justify-center py-[104px] max-md:py-[100px]">
      <div className="w-full text-[56px] text-[#1A1A1A] font-bold text-center tracking-[-1.12px] leading-[1.1] max-md:max-w-full max-md:text-[40px]">
        <h2 className="text-[#1A1A1A] max-md:max-w-full max-md:text-[40px]">
          What they're saying...
        </h2>
      </div>
      
      <div className="shadow-[222px_135px_73px_rgba(0,0,0,0)] self-center flex w-full flex-col text-2xl tracking-[-0.12px] mt-12 max-md:max-w-full max-md:mt-10 overflow-hidden">
        <div 
          className="flex items-center gap-8 flex-nowrap transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (485 + 32)}px)` }}
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="min-w-[400px] max-w-[485px] min-h-[333px] overflow-hidden w-[485px] bg-[#F2F5FE] p-10 rounded-[20px] max-md:max-w-full max-md:px-5 flex-shrink-0"
            >
              <blockquote className="text-[#1A1A1A] font-medium leading-[35px]">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex w-full items-center gap-5 text-[#464646] font-semibold mt-[51px] max-md:mt-10">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.author} avatar`}
                  className="aspect-[1] object-contain w-[60px] self-stretch shrink-0 my-auto rounded-[10px]"
                />
                <div className="self-stretch flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] my-auto">
                  <cite className="text-[#464646] not-italic">
                    {testimonial.author}
                  </cite>
                  <div className="flex min-h-6" />
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
