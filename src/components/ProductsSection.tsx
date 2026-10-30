"use client";

import React, { useState } from "react";
import { ExternalLink, Sparkles, Tv, Database, MessageSquare, Truck, Search, CheckCircle2 } from "lucide-react";
import { asset } from "../lib/assets";

interface Product {
  id: string;
  name: string;
  tagline: string;
  category: string;
  desc: string;
  image: string;
  link: string;
  accent: string;
  icon: any;
  features: string[];
}

const products: Product[] = [
  {
    id: "go-boss",
    name: "Go-BOSS",
    tagline: "Custom Branded OTT & Content Streaming Engine",
    category: "Streaming Media Platform",
    desc: "Go-BOSS lets you build your own streaming service, enabling you to manage, publish and monetize your content. You can also release custom branded apps to multiple platforms and app stores in no time. You own the content experience, and we own the platform.",
    image: "/assets/streaming.webp",
    link: "https://www.go-boss.com/",
    accent: "#00C2E8",
    icon: Tv,
    features: [
      "Multi-platform app publishing (iOS, Android, Roku, Apple TV)",
      "Flexible monetization models (SVOD, TVOD, AVOD)",
      "Dynamic adaptive bitrate video streaming infrastructure",
    ],
  },
  {
    id: "db-daas",
    name: "DB-DaaS",
    tagline: "Automated Database CI/CD Release Platform",
    category: "Database DevOps SaaS",
    desc: "DB-DaaS is a robust, scalable platform for optimizing database release automation. It integrates easily with existing CI/CD environments, aligning with your current development processes, compliance governance, and database guidelines.",
    image: "/assets/portrait-happy-young-male-network-engineer-with-laptop-hand-working-datacenter.webp",
    link: "https://www.db-daas.com/",
    accent: "#2864FF",
    icon: Database,
    features: [
      "Automated schema migration & drift detection",
      "Seamless integration with Jenkins, GitHub Actions & Azure DevOps",
      "Comprehensive role-based compliance & audit logs",
    ],
  },
  {
    id: "perchat-ai",
    name: "Perchat.ai",
    tagline: "Autonomous Conversational AI for Enterprise Support",
    category: "Enterprise Generative AI",
    desc: "Perchat.ai is an AI-powered conversational platform that enables businesses to automate customer interactions across omnichannel touchpoints, delivering instant, contextual, and human-like support at global enterprise scale.",
    image: "/assets/Perchat.webp",
    link: "https://www.perchat.ai/",
    accent: "#7657F6",
    icon: MessageSquare,
    features: [
      "Enterprise RAG with private vector knowledge bases",
      "Multi-channel support (Web, WhatsApp, Slack, Teams)",
      "Continuous sentiment analytics & agent handoff",
    ],
  },
  {
    id: "shipkasa",
    name: "ShipKasa",
    tagline: "Intelligent Multi-Carrier Shipping & Fulfillment SaaS",
    category: "Logistics Automation",
    desc: "ShipKasa is a scalable shipping label software designed to simplify fulfillment workflows, optimize shipping costs across global carriers, and support enterprise business growth through faster, more efficient shipping operations.",
    image: "/assets/Shipkasa.webp",
    link: "https://www.shipkasa.com/",
    accent: "#00C2E8",
    icon: Truck,
    features: [
      "Real-time rate shopping across FedEx, UPS, USPS & DHL",
      "Automated batch label generation & tracking updates",
      "Instant ERP & E-commerce integration (Shopify, Magento, SAP)",
    ],
  },
  {
    id: "pagerank-ai",
    name: "PageRank.ai",
    tagline: "AI Search, AEO & GEO Visibility Optimization",
    category: "AI Search Optimization",
    desc: "PageRank.ai is an AI-powered SEO, AEO, and GEO optimization platform for ecommerce brands. Improve your visibility on Google and earn more citations and recommendations across ChatGPT, Gemini, and Perplexity. See where your brand appears and what to fix to earn more citations, traffic, and sales.",
    image: "/assets/Pagerank.webp",
    link: "https://www.pagerank.ai/",
    accent: "#2864FF",
    icon: Search,
    features: [
      "Generative Engine Optimization (GEO) tracking",
      "AI recommendation benchmark against competitors",
      "Actionable semantic schema & citation fixes",
    ],
  },
];

export default function ProductsSection() {
  const [activeProduct, setActiveProduct] = useState(0);
  const current = products[activeProduct];

  return (
    <section id="products" className="py-24 bg-[#071426] text-white relative overflow-hidden">
      {/* Ambient Lighting & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#2864FF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-[#00C2E8]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#7657F6]/15 border border-[#7657F6]/30 text-[#00C2E8] text-xs font-bold tracking-wider uppercase mb-3">
            Proprietary Enterprise IP
          </div>
          <h2 className="section-title font-extrabold text-white tracking-tight mb-4">
            Enterprise Products Derived from Innovative Engineering
          </h2>
          <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed">
            Born out of addressing complex engineering and business challenges for our clients, these specialized software platforms drive efficiency at scale.
          </p>
        </div>

        {/* Product Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {products.map((p, idx) => {
            const Icon = p.icon;
            const isSelected = idx === activeProduct;

            return (
              <button
                key={p.id}
                onClick={() => setActiveProduct(idx)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                  isSelected
                    ? "bg-[#0C1D35] text-white border-2 border-[#00C2E8] shadow-glow-cyan scale-105"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                <Icon className="w-4 h-4" style={{ color: isSelected ? p.accent : "currentColor" }} />
                <span>{p.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Product Featurette */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-br from-[#0C1D35]/95 to-[#071426]/95 backdrop-blur-2xl shadow-cardDark">
          {/* Left Description Column */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/10 text-white border border-white/10">
                  {current.category}
                </span>
                <span className="text-xs text-[#00C2E8] font-semibold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Proprietary SaaS
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {current.name}
              </h3>

              <div className="text-sm font-semibold text-[#85c4ff]">
                {current.tagline}
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                {current.desc}
              </p>

              <div className="space-y-2.5 pt-4">
                {current.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-[#00C2E8] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <a
                href={current.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs inline-flex items-center gap-2"
              >
                <span>Visit {current.name} Official Website</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Product Device Frame / Mockup */}
          <div className="lg:col-span-5 p-8 lg:p-10 flex items-center justify-center bg-black/30 border-t lg:border-t-0 lg:border-l border-white/10">
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black/60 group">
              <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#0C1D35] border-b border-white/10">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="text-[10px] text-gray-400 font-mono ml-2">
                  {current.link.replace("https://", "")}
                </span>
              </div>

              <div className="relative aspect-video max-h-[340px] overflow-hidden">
                <img
                  src={asset(current.image)}
                  alt={current.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
