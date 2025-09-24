import React from 'react';

const Footer = () => {
  const navigationLinks = {
    company: [
      { name: 'Workflow Map', href: '/#workflow' },
      { name: 'Projects', href: '/projects' }
    ],
    service: [
      { name: 'Our Service', href: '/contact' },
      { name: 'Pricing', href: '/#pricing' },
      { name: 'FAQs', href: '#faqs' }
    ],
    insight: [
      { name: 'Contact', href: '/contact' }
    ]
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/new-age-ai-products-and-services/',
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/5e1030e774d0cfa89ecf14f45cc34f230db8c682?placeholderIfAbsent=true"
    },
    {
      name: 'Twitter',
      href: '#',
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/fbca29055cc4251d2e3172b3d7246bee6e3745f4?placeholderIfAbsent=true"
    }
  ];

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
              <div className="bg-clip-text self-stretch my-auto">
                New Age AI
              </div>
            </div>
            <p className="text-base leading-[1.3] tracking-[-0.32px] bg-clip-text mt-2">
              We work best with fast-moving
            </p>
          </div>
          
          <div className="flex items-center gap-6 mt-14 max-md:mt-10">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                />
              </a>
            ))}
          </div>
        </div>
        
        <nav className="flex min-w-60 gap-10 text-base text-black font-medium tracking-[-0.08px] leading-none max-md:max-w-full">
          <div className="flex flex-col items-stretch justify-center w-[130px]">
            <div className="flex w-full text-black font-semibold whitespace-nowrap pb-4">
              <h3>Company</h3>
            </div>
            {navigationLinks.company.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mt-2 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="flex flex-col items-stretch justify-center w-[130px]">
            <div className="flex w-full text-black font-semibold whitespace-nowrap pb-4">
              <h3>Service</h3>
            </div>
            {navigationLinks.service.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mt-2 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="flex flex-col items-stretch justify-center w-[130px]">
            <div className="flex w-full text-black font-semibold whitespace-nowrap pb-4">
              <h3>Insight</h3>
            </div>
            {navigationLinks.insight.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mt-2 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
