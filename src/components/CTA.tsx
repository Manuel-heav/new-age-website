import React, { useState } from "react";

const CTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Thank you for your interest! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  const handleBookCall = () => {
    // Handle book call action
    console.log("Booking strategy call...");
    window.location.href = "/contact#meeting";
  };

  return (
    <section
      id="contact"
      className="pb-[var(--sds-size-space-1600)] flex w-full flex-col items-center gap-[var(--sds-size-space-800)]"
    >
      {/* This is the updated section */}
      <div className="flex w-full max-w-6xl flex-col items-center gap-20 px-8 text-center md:flex-row md:items-center md:justify-between md:gap-[40px_100px] md:text-left">
        <div className="flex w-full max-w-[581px] flex-col items-center md:items-start">
          <div className="text-black text-[56px] font-bold leading-[1.1] tracking-[-1.12px] max-md:text-[40px]">
            <span className="font-semibold">Ready to</span>{" "}
            <span className="bg-gradient-to-r from-[#103295] to-[#1fb2f8] bg-clip-text text-transparent">
              Get Started?
            </span>
          </div>
          <p className="text-[#252525] text-2xl font-medium tracking-[-0.12px] mt-4">
            Let's schedule a Call and Explore the possibilities.
          </p>

          <div className="flex w-full max-w-[420px] flex-row justify-center gap-4 text-[#0F288D] mt-4 md:justify-start">
            <div className="flex items-center gap-2 flex-1 shrink p-4 basis-[0%] bg-[#DEDEDE] rounded-full">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/90b5ac4abbe6e477b05abc3af86a66d60118a43d?placeholderIfAbsent=true"
                alt="Phone icon"
                className="aspect-square object-contain w-10 shrink-0"
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

            <div className="flex items-center gap-2 whitespace-nowrap p-4 flex-1 shrink basis-[0%] bg-[#DEDEDE] rounded-full">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/3c5746aaf34e7ce324e9bad279414cfb4bb29bcf?placeholderIfAbsent=true"
                alt="Email icon"
                className="aspect-square object-contain w-10 shrink-0"
              />
              <div>
                <div className="text-[#0F288D] text-xs font-medium tracking-[-0.06px]">
                  Email
                </div>
                <div className="text-[#0F288D] text-base font-bold tracking-[-0.08px]">
                consultation@newageai.co
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleBookCall}
          className="justify-center items-center flex min-h-14 gap-2 text-xl text-white font-medium text-center tracking-[-0.1px] px-4 py-3.5 rounded-xl bg-gradient-to-r from-[#103295] to-[#1fb2f8] hover:from-[#0d2a7b] hover:to-[#1798de] transition-all transform hover:scale-105"
        >
          <span className="my-auto">Book Strategy Call</span>
        </button>
      </div>

      <div className="w-full overflow-hidden mt-8 max-md:max-w-full">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/c58ad579539d672555bc5c1fd3a2cb558eea6677?placeholderIfAbsent=true"
          alt="AI automation workflow visualization"
          className="aspect-[3.5] object-contain w-full"
        />
      </div>
    </section>
  );
};

export default CTA;
