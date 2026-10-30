"use client";

import React from "react";
import Link from "next/link";
import {
  Code2,
  Sparkles,
  Cloud,
  Database,
  Megaphone,
  Settings,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

interface ServiceItem {
  number: string;
  title: string;
  badge: string;
  desc: string;
  image: string;
  href: string;
  accent: string;
  icon: any;
  deliverables: string[];
}

const services: ServiceItem[] = [
  {
    number: "01",
    title: "AI / ML Services",
    badge: "GenAI & Agentic Systems",
    desc: "End-to-end AI solutions leveraging OpenAI, Azure OpenAI, and Google Cloud Vertex AI to optimize enterprise workflows, enhance productivity, and reduce operational costs.",
    image: "/assets/AI_part_2.webp",
    href: "/services/ai-ml",
    accent: "#00C2E8",
    icon: Sparkles,
    deliverables: ["Enterprise RAG Pipelines", "Autonomous AI Agents", "MLOps Infrastructure"],
  },
  {
    number: "02",
    title: "Cloud Solutions",
    badge: "Multi-Cloud Modernization",
    desc: "Comprehensive cloud transformation across Azure, AWS, and GCP. From legacy migration to serverless microservices and automated multi-region disaster recovery.",
    image: "/assets/cloud-services.webp",
    href: "/services/cloud-solutions",
    accent: "#2864FF",
    icon: Cloud,
    deliverables: ["Cloud Migration Roadmap", "Kubernetes & FinOps", "Zero-Downtime DR"],
  },
  {
    number: "03",
    title: "Analytics & Reporting",
    badge: "Data Lakehouse & BI",
    desc: "Modern data warehousing, OLAP, data mining, and predictive modeling using Snowflake, Databricks, and Synapse to deliver actionable executive intelligence.",
    image: "/assets/analytics-services.webp",
    href: "/services/analytics",
    accent: "#7657F6",
    icon: Database,
    deliverables: ["Real-time Data Streaming", "Executive BI Dashboards", "Predictive Analytics"],
  },
  {
    number: "04",
    title: "Application Development",
    badge: "Agile 5DS Full-Stack",
    desc: "Rapid, customer-centric application engineering with React, Next.js, Node.js, and .NET. Designed for high throughput, seamless security, and low latency.",
    image: "/assets/magnet-me-beCkhUB5aIA-unsplash.webp",
    href: "/services/application-services",
    accent: "#2864FF",
    icon: Code2,
    deliverables: ["Cloud-Native Web Platforms", "iOS & Android Cross-Platform", "CI/CD Test Automation"],
  },
  {
    number: "05",
    title: "Digital Marketing",
    badge: "Performance & AEO",
    desc: "Managing data-driven digital media campaigns, search engine optimization, and lifecycle email automation to amplify reach and lower customer acquisition costs.",
    image: "/assets/digimarketing.webp",
    href: "/services/digital-marketing",
    accent: "#00C2E8",
    icon: Megaphone,
    deliverables: ["Omnichannel Paid Ads", "AEO / Search Ranking", "Enterprise Email Automation"],
  },
  {
    number: "06",
    title: "Service Management",
    badge: "ITIL & 24/7 Resilience",
    desc: "Systematic assessment, ITIL audits, and SLA-backed 24/7 managed operations that maximize revenue while eliminating unplanned digital downtime.",
    image: "/assets/data-management.webp",
    href: "/services/service-management",
    accent: "#7657F6",
    icon: Settings,
    deliverables: ["Continuous Observability", "ServiceDesk Modernization", "ISO Compliance Audit"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#F4F7FB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2864FF]/10 text-[#2864FF] text-xs font-bold tracking-wider uppercase mb-3">
              Capabilities &amp; Practices
            </div>
            <h2 className="section-title font-extrabold text-[#071426] tracking-tight">
              End-to-End Expertise Across the Digital Ecosystem
            </h2>
          </div>
          <p className="text-gray-600 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            From strategic cloud architectures to autonomous generative AI systems, we engineer resilient software foundations for high-growth enterprises.
          </p>
        </div>

        {/* 6 High-Fidelity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.number}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-card hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Top Image Preview with Gradient Overlay */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Floating Number & Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-[#071426]/80 backdrop-blur-md text-white font-mono text-xs font-bold border border-white/10">
                      {service.number}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-[#071426] text-[11px] font-bold">
                      {service.badge}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${service.accent}15`, color: service.accent }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-[#071426] group-hover:text-[#2864FF] transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                      {service.desc}
                    </p>

                    {/* Key Deliverables */}
                    <div className="space-y-1.5 mb-6 pt-3 border-t border-gray-100">
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Explore Link */}
                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-gray-50 hover:bg-[#071426] group-hover:text-white transition-all text-xs font-bold text-[#071426]"
                  >
                    <span>Explore Practice</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
