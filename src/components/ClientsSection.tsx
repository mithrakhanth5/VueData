"use client";

import React from "react";

interface Client {
  name: string;
  logo: string;
  url: string;
}

const clients: Client[] = [
  {
    name: "Microsoft",
    logo: "/assets/Vuedata website logos/Microsoft-removebg-preview.png",
    url: "https://www.microsoft.com/en-in",
  },
  {
    name: "DocuSign",
    logo: "/assets/Vuedata website logos/DocuSign-removebg-preview.png",
    url: "https://www.docusign.in/",
  },
  {
    name: "Samsung",
    logo: "/assets/Vuedata website logos/Samsung-removebg-preview.png",
    url: "https://www.samsung.com/in/",
  },
  {
    name: "Blue Nile",
    logo: "/assets/Vuedata website logos/Blue_Nile-removebg-preview.png",
    url: "https://www.bluenile.com/",
  },
  {
    name: "Aspen Dental",
    logo: "/assets/Vuedata website logos/AspenDental-removebg-preview.png",
    url: "https://www.aspendental.com/",
  },
  {
    name: "Rad Power Bikes",
    logo: "/assets/Vuedata website logos/Rad_Power_Bikes-removebg-preview.png",
    url: "https://www.radpowerbikes.com/",
  },
  {
    name: "NEOU",
    logo: "/assets/Vuedata website logos/neou-removebg-preview.png",
    url: "https://neoufitness.com/",
  },
  {
    name: "1091 Pictures",
    logo: "/assets/Vuedata website logos/1091-removebg-preview.png",
    url: "https://www.1091pictures.com/",
  },
  {
    name: "Berkshire Grey",
    logo: "/assets/Vuedata website logos/Berkshire_Grey-removebg-preview.png",
    url: "https://www.berkshiregrey.com/",
  },
  {
    name: "Relief Factor",
    logo: "/assets/Vuedata website logos/Relief-factor-new-logo.png",
    url: "https://www.relieffactor.com/",
  },
  {
    name: "OrangePay",
    logo: "/assets/Vuedata website logos/Orangepay-removebg-preview.png",
    url: "https://orangepay.com.sg/",
  },
  {
    name: "Mythical Games",
    logo: "/assets/Vuedata website logos/mythical-removebg-preview.png",
    url: "https://mythicalgames.com/",
  },
  {
    name: "Alertive",
    logo: "/assets/Vuedata website logos/Alertive-removebg-preview.png",
    url: "https://sentinelhealthcare.wpcomstaging.com/",
  },
];

export default function ClientsSection() {
  return (
    <section id="clients" className="py-20 bg-[#f7f8fa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-wider text-[#29344a] uppercase mb-4">
            CLIENTS
          </h2>
          <div className="w-16 h-1 bg-[#236cb1] mx-auto rounded-full" />
        </div>
      </div>

      {/* Infinite scrolling logo row */}
      <div className="relative w-full overflow-hidden flex items-center py-4">
        {/* Gradients on edges for smooth blend */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f7f8fa] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f7f8fa] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-10 sm:gap-14">
          {[...clients, ...clients].map((client, idx) => (
            <a
              key={idx}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 sm:p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300 w-44 h-24 shrink-0 group grayscale hover:grayscale-0 opacity-80 hover:opacity-100"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 max-w-[130px] object-contain transition-transform group-hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
