"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

interface Product {
  name: string;
  desc: string;
  image: string;
  link: string;
  btnText: string;
}

const products: Product[] = [
  {
    name: "Go-BOSS",
    desc: "Go-BOSS lets you build your own streaming service, enabling you to manage, publish and monetize your content. You can also release custom branded apps to multiple platforms/app stores in no time. You own the content experience, and we own the platform.",
    image: "/assets/streaming.webp",
    link: "https://www.go-boss.com/",
    btnText: "Learn More",
  },
  {
    name: "DB-DaaS",
    desc: "DB-DaaS is a robust scalable platform for optimizing database release automation, integrates easily with the existing CI/CD environments, aligning with the existing development process and guidelines.",
    image: "/assets/portrait-happy-young-male-network-engineer-with-laptop-hand-working-datacenter.webp",
    link: "https://www.db-daas.com/",
    btnText: "Learn More",
  },
  {
    name: "Perchat.ai",
    desc: "Perchat.ai is an AI-powered conversational platform that enables businesses to automate customer interactions across channels, delivering instant, contextual, and human-like support at scale.",
    image: "/assets/Perchat.webp",
    link: "https://www.perchat.ai/",
    btnText: "Learn More",
  },
  {
    name: "ShipKasa",
    desc: "ShipKasa is a scalable shipping label software designed to simplify fulfillment workflows, optimize shipping costs, and support business growth through faster, more efficient shipping operations.",
    image: "/assets/Shipkasa.webp",
    link: "https://www.shipkasa.com/",
    btnText: "Learn More",
  },
  {
    name: "PageRank.ai",
    desc: "PageRank.ai is an AI powered SEO, AEO, and GEO optimization platform for ecommerce brands. Improve your visibility on Google and earn more citations and recommendations across ChatGPT, Gemini, and Perplexity. See where your brand appears, which competitors are winning recommendations, and what to fix to earn more citations, traffic, and sales.",
    image: "/assets/Pagerank.webp",
    link: "https://www.pagerank.ai/",
    btnText: "See how your brand ranks with PageRank.ai",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#29344a] tracking-tight">
            Enterprise Products derived from Innovative solutions for Engineering &amp; Business problems
          </h2>
          <div className="w-16 h-1 bg-[#236cb1] mx-auto mt-4 rounded-full" />
        </div>

        {/* Product Items */}
        <div className="space-y-16 lg:space-y-24">
          {products.map((product, idx) => {
            const isReversed = idx % 2 !== 0;

            return (
              <div
                key={product.name}
                className={`flex flex-col ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-8 lg:gap-14 bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow`}
              >
                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#236cb1] mb-4">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                    {product.desc}
                  </p>
                  <div>
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-[#236cb1] hover:text-[#1a5288] transition-colors group"
                    >
                      <span>{product.btnText}</span>
                      <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-xl overflow-hidden shadow-lg aspect-video max-h-[380px] bg-gray-50 border border-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
