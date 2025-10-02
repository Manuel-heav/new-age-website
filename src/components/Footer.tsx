import React from "react";
import { SocialIcon } from "react-social-icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const navigationLinks = {
    company: [
      { name: "Workflow Map", href: "/#workflow" },
      { name: "Projects", href: "/projects" },
    ],
    service: [
      { name: "Our Service", href: "/service" },
      { name: "Pricing", href: "/#pricing" },
      { name: "FAQs", href: "/service/#faqs" },
    ],
    insight: [
      { name: "Contact", href: "/contact" },
      { name: "Best practices", href: "/#companysteps" },
    ],
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/new-age-ai-products-and-services/",
    },
    {
      name: "Email",
      href: "mailto:consultation@newageai.co",
      customIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fbca29055cc4251d2e3172b3d7246bee6e3745f4?placeholderIfAbsent=true",
    },
  ];

  // Helper function to decide if link is internal
  const isInternal = (href) => href.startsWith("/");

  return (
    <footer className="justify-center items-center flex min-h-[466px] w-full gap-[40px_96px] overflow-hidden bg-[#FCFCFF] pb-[120px] px-16 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <div className="self-stretch flex min-w-60 w-full gap-[40px_120px] flex-wrap flex-1 shrink basis-[0%] my-auto py-20 border-[rgba(0,0,0,0.1)] border-t max-md:max-w-full">
        <div className="flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] max-md:max-w-full">
          <div className="flex w-full flex-col items-stretch font-semibold max-md:max-w-full">
            <div className="flex items-center gap-2.5 text-[23px] tracking-[-0.45px] leading-none">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/395481fce8295c3ca6521c6abbbed45d4494524e?placeholderIfAbsent=true"
                alt="New Age AI Logo"
                className="aspect-[1] object-contain w-[72px] self-stretch shrink-0 my-auto rounded-[34px]"
              />
              <div className="bg-clip-text bg-gradient-to-r from-[#103295] to-[#1fb2f8] text-transparent self-stretch my-auto">
                New Age AI
              </div>
            </div>
            <p className="text-lg leading-[1.3] tracking-[-0.32px] bg-clip-text bg-gradient-to-r from-[#103295] to-[#1fb2f8] text-transparent mt-2">
              We work best with fast-moving
            </p>
          </div>

          <div className="flex items-center gap-6 mt-14 max-md:mt-10">
            {socialLinks.map((social) =>
              social.customIcon ? (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition-opacity"
                >
                  <img
                    src={social.customIcon}
                    alt={`${social.name} icon`}
                    style={{ height: 40, width: 40 }}
                  />
                </a>
              ) : (
                <SocialIcon
                  key={social.name}
                  url={social.href}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ height: 40, width: 40 }}
                  className="hover:opacity-75 transition-opacity"
                />
              )
            )}
          </div>
        </div>

        <nav className="flex flex-col md:flex-row md:gap-10 text-base">
          {/* Dynamically render columns */}
          {Object.entries(navigationLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col mb-8 md:mb-0">
              <h3 className="font-semibold text-black pb-4">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>
              {links.map((link) => {
                // Prefer native anchors for hash links so the browser scrolls to the element
                const isHashLink = link.href.includes("#");

                // Scroll to top for specific pages
                const handleClick = () => {
                  if (
                    ["Projects", "Contact", "Our Service"].includes(link.name)
                  ) {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                };

                if (isHashLink) {
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-gray-500 mt-3 hover:text-blue-600 transition-colors"
                    >
                      {link.name}
                    </a>
                  );
                }

                return isInternal(link.href) ? (
                  <NavLink
                    key={link.name}
                    to={link.href}
                    onClick={handleClick}
                    className="text-gray-500 mt-3 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </NavLink>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-500 mt-3 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
