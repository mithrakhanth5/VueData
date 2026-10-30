"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, TrendingUp, Layers, ChevronRight } from "lucide-react";

interface SolutionItem {
  id: string;
  category: string;
  headline: string;
  desc: string;
  bgImage: string;
  href: string;
  challenge: string;
  solutionImpact: string;
  metrics: string;
}

const solutions: SolutionItem[] = [
  {
    id: "ecommerce",
    category: "E-Commerce",
    headline: "Growing Beyond Entry-Level Architecture",
    desc: "We built a modular managed services approach to deliver commerce capabilities in decoupled phases. This allows the business to prioritize high-converting features based on real-time market demands and establish an automated process for continuous rollout.",
    bgImage: "/assets/pexels-karolina-grabowska-5717947.webp",
    href: "/solutions/e-commerce-casestudy",
    challenge: "Legacy monolithic cart bottlenecks during viral traffic peaks.",
    solutionImpact: "Modular microservices architecture with elastic catalog scaling.",
    metrics: "+34% Checkout Conversion",
  },
  {
    id: "data-integration",
    category: "Data Integration",
    headline: "Get a 360° Omnichannel View of End Customers",
    desc: "A SaaS-based customer engagement hub that connects instantly to any application, streaming data, on-premise systems, or custom enterprise software. The engagement hub helps you build integrations that directly elevate customer satisfaction and retention.",
    bgImage: "/assets/high-technology-digital-graph-presentation-by-businesswoman.webp",
    href: "/solutions/data-integration-casestudy",
    challenge: "Fragmented customer data across disparate CRM & ERP siloes.",
    solutionImpact: "Unified event streaming pipeline with real-time profile resolution.",
    metrics: "360° Single Customer View",
  },
  {
    id: "test-automation",
    category: "Test Automation",
    headline: "Accelerating Software Delivery Velocity",
    desc: "Using our customizable and reusable Test Automation Framework and component libraries, you can cut automation script development effort by 40%. With all the plumbing in place, QA teams focus entirely on test coverage and defect prevention.",
    bgImage: "/assets/pexels-rodnae-productions-7915289.webp",
    href: "/solutions/testing-automation",
    challenge: "5-day manual testing regressions delaying release velocity.",
    solutionImpact: "Automated multi-browser continuous regression embedded in CI/CD.",
    metrics: "40% Script Effort Reduction",
  },
  {
    id: "storefront",
    category: "Platform Migration",
    headline: "Beyond Building a Storefront",
    desc: "Each digital transformation has a story behind it. Here, facing the end of life of Magento 1.X, the challenge was to migrate all E-commerce sites to the latest modern platform to preserve business continuity while systematically decoupling third-party dependencies.",
    bgImage: "/assets/ai-shopping-e-comm.webp",
    href: "/solutions/building-a-storefront",
    challenge: "Urgent end-of-life migration with zero tolerance for downtime.",
    solutionImpact: "Decoupled headless storefront with intelligent fraud prevention.",
    metrics: "Zero Customer Downtime",
  },
  {
    id: "payment",
    category: "Fintech & Payments",
    headline: "Scaling Payment Gateways Across Inter-Bank Networks",
    desc: "Our client aimed to expand its services by engineering a scalable, secure platform providing insurance on deposits, clearing, and settlement. The platform and gateway are fully compatible with real-time and batch inter-bank networks without interrupting existing deployments.",
    bgImage: "/assets/pexels-tim-douglas-6205512.webp",
    href: "/solutions/payments-solution",
    challenge: "Strict compliance, banking encryption, and zero transaction loss.",
    solutionImpact: "High-throughput inter-bank gateway with automated reconciliation.",
    metrics: "10,000+ Tx / Second",
  },
  {
    id: "cloud",
    category: "Cloud Migration",
    headline: "A Structured Cloud Transformation Journey",
    desc: "Confronted by increasing infrastructure costs with third-party and on-premises hosting, the client lacked an elastic cloud strategy. VueData architected a multi-phase migration to reduce infrastructure expenditures while flawlessly scaling user capacity.",
    bgImage: "/assets/cloud-computing.webp",
    href: "/solutions/cloud-transformation-journey",
    challenge: "Escalating fixed hosting expenditures and rigid capacity limits.",
    solutionImpact: "Multi-region cloud infrastructure with auto-scaling FinOps rules.",
    metrics: "42% TCO Reduction",
  },
];

export default function SolutionsSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = solutions[selectedIdx];

  return (
    <section id="solutions" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2864FF]/10 text-[#2864FF] text-xs font-bold tracking-wider uppercase mb-3">
              Real-World Enterprise Outcomes
            </div>
            <h2 className="section-title font-extrabold text-[#071426] tracking-tight">
              Innovative Solutions to Complex Business Challenges
            </h2>
          </div>
          <p className="text-gray-600 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            Discover how VueData partners with forward-thinking enterprises to navigate architectural inflection points and deliver measurable impact.
          </p>
        </div>

        {/* Tab Selection Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {solutions.map((item, idx) => {
            const isSelected = idx === selectedIdx;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedIdx(idx)}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                  isSelected
                    ? "bg-[#071426] text-white shadow-lg"
                    : "bg-[#F4F7FB] text-gray-600 hover:bg-gray-200/70"
                }`}
              >
                {item.category}
              </button>
            );
          })}
        </div>

        {/* Main Showcase Container - Editorial Style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden border border-gray-200/80 shadow-2xl bg-[#071426] text-white">
          {/* Left Visual & Image with Overlay */}
          <div className="lg:col-span-5 relative min-h-[340px] lg:min-h-[500px] overflow-hidden">
            <img
              src={current.bgImage}
              alt={current.headline}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-[#071426]/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#071426]" />

            <div className="absolute top-6 left-6 z-10">
              <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                {current.category}
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 z-10">
              <div className="p-4 rounded-xl bg-[#0C1D35]/90 backdrop-blur-md border border-white/10">
                <div className="text-[11px] font-semibold text-[#00C2E8] uppercase tracking-wider">
                  Quantifiable Outcome
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-white">
                  {current.metrics}
                </div>
              </div>
            </div>
          </div>

          {/* Right Editorial Storytelling Content */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                {current.headline}
              </h3>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                {current.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-rose-400">
                    The Challenge
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {current.challenge}
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    The Solution
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {current.solutionImpact}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
              <Link
                href={current.href}
                className="inline-flex items-center gap-2 btn-primary text-xs"
              >
                <span>Read Complete Case Study</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <span className="text-xs text-gray-400 font-mono">
                Case Study {selectedIdx + 1} of {solutions.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
