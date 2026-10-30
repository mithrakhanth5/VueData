"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface SolutionItem {
  id: string;
  category: string;
  headline: string;
  desc: string;
  bgImage: string;
  href: string;
  highlights: string[];
}

const solutions: SolutionItem[] = [
  {
    id: "ecommerce",
    category: "E-commerce",
    headline: "Growing beyond entry level system",
    desc: "We build modular approach (managed services) to deliver features in phases. This allows the business to prioritize features based on the needs and set an established process for adding new features and functionality.",
    bgImage: "/assets/pexels-karolina-grabowska-5717947.webp",
    href: "/solutions/e-commerce-casestudy",
    highlights: [
      "Modular managed services delivery",
      "Seamless phase-by-phase rollout",
      "Optimized checkout conversion rates",
    ],
  },
  {
    id: "data-integration",
    category: "Data Integration",
    headline: "Get a 360° view of end customers",
    desc: "A SaaS-based customer engagement hub that connects instantly to any application, streaming data, on-premise, or custom enterprise systems. The engagement hub helps you build integrations to connect with any application that impacts customer experience.",
    bgImage: "/assets/high-technology-digital-graph-presentation-by-businesswoman.webp",
    href: "/solutions/data-integration-casestudy",
    highlights: [
      "Universal connectors for streaming & batch data",
      "Omnichannel real-time customer insights",
      "Unified customer 360 profile",
    ],
  },
  {
    id: "test-automation",
    category: "Test Automation",
    headline: "Accelerate your automation testing",
    desc: "Using our customizable and reusable Test Automation Framework and libraries, you can cut the automation script development effort by 40%. With all the plumbing in place, the QA team was able to focus on test coverage. Talk to us to know more about how we can accelerate your testing process.",
    bgImage: "/assets/pexels-rodnae-productions-7915289.webp",
    href: "/solutions/testing-automation",
    highlights: [
      "40% reduction in test script development effort",
      "Reusable cross-browser test frameworks",
      "CI/CD continuous testing integration",
    ],
  },
  {
    id: "storefront",
    category: "Beyond building a storefront",
    headline: "Expanding your online presence",
    desc: "Each digital transformation has a story behind and here, it's the end of life of Magento Platform 1.X. The challenge was to migrate all ECommerce sites to latest Magento Platform (2.x) to keep the business continuity while in parallel plan to move away from Magento platform dependency.",
    bgImage: "/assets/ai-shopping-e-comm.webp",
    href: "/solutions/building-a-storefront",
    highlights: [
      "Zero-downtime Magento 2.x migration",
      "Decoupled headless architecture",
      "Future-proof commerce roadmap",
    ],
  },
  {
    id: "payment",
    category: "Scaling payment solutions",
    headline: "Facilitating payment integration across banks",
    desc: "One of our clients aimed to expand its services by building a scalable, secure platform providing insurance on deposits, clearing, and settlement areas. The platform and gateway must be generic and compatible with real-time/batch inter-bank networks, without interrupting existing deployments.",
    bgImage: "/assets/pexels-tim-douglas-6205512.webp",
    href: "/solutions/payments-solution",
    highlights: [
      "High-throughput inter-bank gateway",
      "Real-time & batch settlement protocols",
      "Bank-grade security and compliance",
    ],
  },
  {
    id: "cloud",
    category: "A Cloud transformation journey",
    headline: "Cloud computing for digital transformation",
    desc: "Increasing infrastructure cost with third-party and on-premises hosting, they did not have a clear cloud strategy and needed help in reducing infrastructure cost and scaling their user base.",
    bgImage: "/assets/cloud-computing.webp",
    href: "/solutions/cloud-transformation-journey",
    highlights: [
      "Significant cloud infrastructure TCO reduction",
      "Auto-scaling elastic infrastructure",
      "Multi-region high availability",
    ],
  },
];

export default function SolutionsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="solutions" className="py-24 bg-[#1e2538] text-white relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#236cb1]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2faae1]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Innovative Solutions to your Complex Business challenges
          </h2>
          <div className="w-16 h-1 bg-[#2faae1] mx-auto rounded-full" />
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {solutions.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeTab === index
                  ? "bg-[#236cb1] text-white shadow-lg shadow-blue-900/50 scale-105"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Active Solution Showcase */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 min-h-[460px] flex flex-col lg:flex-row">
          {/* Background image with gradient */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700"
            style={{
              backgroundImage: `url(${solutions[activeTab].bgImage})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#181f30] via-[#1c2438]/95 to-[#1c2438]/80 lg:to-transparent" />

          {/* Solution Content */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl flex flex-col justify-between">
            <div>
              <div className="inline-block px-3.5 py-1 rounded bg-[#236cb1]/30 border border-[#2faae1]/40 text-[#2faae1] text-xs font-bold uppercase tracking-wider mb-4">
                {solutions[activeTab].category}
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                {solutions[activeTab].headline}
              </h3>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                {solutions[activeTab].desc}
              </p>

              {/* Highlights */}
              <div className="space-y-2 mb-8">
                {solutions[activeTab].highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-[#2faae1] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Link
                href={solutions[activeTab].href}
                className="inline-flex items-center gap-2 bg-[#236cb1] hover:bg-[#1d5b96] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-lg shadow-md transition-all group"
              >
                <span>Read Full Case Study</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
