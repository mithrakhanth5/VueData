import React from "react";
import Link from "next/link";
import {
  Cloud,
  ShieldCheck,
  Server,
  ArrowRight,
  CheckCircle2,
  Workflow,
  Sparkles,
  RefreshCw,
  Gauge,
  Lock,
} from "lucide-react";
import { asset } from "../../../lib/assets";

export const metadata = {
  title: "Cloud Solutions & Migration Practice | VueData Technologies",
  description:
    "Helping enterprises leverage cloud technology to improve IT infrastructure across Public, Private, Hybrid, and Multi-Cloud deployment environments.",
};

export default function CloudSolutionsPage() {
  const pillars = [
    {
      title: "Cloud Strategy, TCO & Well-Architected Reviews",
      desc: "Holistic evaluation of application portfolio readiness, total cost of ownership (TCO) benchmarks, and actionable multi-phase cloud adoption blueprints.",
      icon: Cloud,
      accent: "#00C2E8",
      deliverables: ["Legacy Dependency Mapping", "FinOps ROI Projection", "Architecture Risk Audit"],
    },
    {
      title: "Re-Platforming, Modernization & Microservices",
      desc: "Deconstructing legacy monoliths into elastic containerized services running on Kubernetes (AKS/EKS), serverless functions, and event-driven backbones.",
      icon: Server,
      accent: "#2864FF",
      deliverables: ["Zero-Downtime Data Migration", "Kubernetes Auto-Scaling", "Decoupled Event Streaming"],
    },
    {
      title: "Zero-Trust Security, Compliance & Disaster Recovery",
      desc: "Hardened cloud postures incorporating identity-driven access policies, automated cryptographic key rotation, and multi-region automated failovers.",
      icon: ShieldCheck,
      accent: "#7657F6",
      deliverables: ["Multi-Region RTO < 15 Mins", "SOC 2 & ISO 27001 Alignment", "Continuous Vulnerability Scanning"],
    },
  ];

  const cloudPartners = [
    { name: "Microsoft Azure", tier: "Gold Certified Partner", icon: "Azure" },
    { name: "Amazon Web Services", tier: "Advanced Consulting", icon: "AWS" },
    { name: "Google Cloud Platform", tier: "Enterprise Partner", icon: "GCP" },
    { name: "HashiCorp Terraform", tier: "IaC Automation", icon: "IaC" },
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Cinematic Hero */}
      <div className="bg-[#071426] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#2864FF]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#00C2E8]/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2864FF]/15 border border-[#2864FF]/30 text-[#00C2E8] text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Practice Areas / Cloud Solutions</span>
          </div>

          <h1 className="hero-title font-extrabold tracking-tight text-white mb-6 max-w-4xl">
            Helping Businesses Leverage Cloud Technology to Improve IT Infrastructure
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-10 font-light">
            VueData with extensive expertise across Public, Private, Hybrid, and Multi-Cloud environments helps organizations navigate complex digital transformation. We unite legacy systems with modern cloud velocity to drive unprecedented resilience.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/#contact" className="btn-primary text-xs">
              <span>Initiate Cloud Readiness Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/solutions/cloud-transformation-journey" className="btn-secondary text-xs">
              <span>Read Cloud Transformation Study</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Engineering Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2864FF]/10 text-[#2864FF] text-xs font-bold uppercase tracking-wider">
              Hybrid &amp; Multi-Cloud Architecture
            </div>

            <h2 className="section-title font-extrabold text-[#071426] tracking-tight">
              Coexistence of Legacy Depth &amp; Cloud Elasticity
            </h2>

            <p className="text-gray-600 text-base leading-relaxed">
              We bring a deep understanding of what is possible when legacy systems and modern cloud solutions coexist. We combine these architectural insights with deep industry knowledge to drive innovation and transform complex enterprise environments into high-performance engines.
            </p>

            <p className="text-gray-600 text-base leading-relaxed">
              As a Microsoft Gold Certified Partner with extensive deployments across AWS and Google Cloud, we eliminate vendor lock-in and optimize cloud spend through continuous FinOps governance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Infrastructure as Code (Terraform / Bicep) for deterministic provisioning",
                "Automated zero-downtime database cutovers and replication",
                "FinOps cost visibility driving average 30-45% infrastructure savings",
                "Comprehensive Disaster Recovery orchestration with geo-redundancy",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#2864FF] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-[#071426] p-2">
              <img
                src={asset("/assets/cloud-services.webp")}
                alt="Cloud Infrastructure Architecture"
                className="w-full h-auto rounded-2xl object-cover"
              />
              <div className="p-4 flex items-center justify-between text-xs text-white">
                <span className="font-mono text-[#00C2E8]">Multi-Region Cloud Grid</span>
                <span className="text-gray-400">99.995% SLA</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title font-extrabold text-[#071426] tracking-tight mb-3">
              Cloud Transformation Offerings
            </h2>
            <p className="text-gray-500 text-sm">
              Tailored services spanning every phase of enterprise cloud lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-[#F4F7FB] border border-gray-200/80 hover:border-[#2864FF]/40 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: `${pillar.accent}20`, color: pillar.accent }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-[#071426] mb-3">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-gray-200/80">
                    {pillar.deliverables.map((d, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cloud Hyperscalers Bar */}
        <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-[#071426] text-white">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl font-bold text-white mb-2">
              Hyperscale Ecosystem &amp; Certifications
            </h3>
            <p className="text-xs text-gray-400">
              Validated partnership tiers across top infrastructure providers.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {cloudPartners.map((partner, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="text-sm font-bold text-white mb-1">{partner.name}</div>
                <div className="text-xs text-[#00C2E8] font-mono">{partner.tier}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
