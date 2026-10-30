"use client";

import React from "react";
import { asset } from "../lib/assets";

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
    <section id="clients" className="py-24 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2864FF]/10 text-[#2864FF] text-xs font-bold tracking-wider uppercase mb-3">
          Enterprise Partnerships
        </div>
        <h2 className="section-title font-extrabold text-[#071426] tracking-tight">
          Trusted by Industry Innovators Worldwide
        </h2>
        <p className="text-gray-500 text-sm max-w-xl mx-auto mt-2">
          From high-growth tech disruptors to established global conglomerates, we empower digital transformation across sectors.
        </p>
      </div>

      {/* Infinite scrolling marquee logo row */}
      <div className="relative w-full overflow-hidden flex items-center py-6">
        {/* Soft Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-8 sm:gap-12">
          {[...clients, ...clients].map((client, idx) => (
            <a
              key={idx}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-[#F4F7FB] hover:bg-white rounded-2xl border border-gray-200/80 hover:border-[#2864FF]/40 shadow-sm hover:shadow-xl transition-all duration-300 w-48 h-24 shrink-0 group"
            >
              <img
                src={asset(client.logo)}
                alt={client.name}
                className="max-h-11 max-w-[130px] object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
