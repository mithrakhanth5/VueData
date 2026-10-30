import React from "react";
import Link from "next/link";
import {
  Code2,
  Smartphone,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  GitBranch,
  Rocket,
  RefreshCw,
  Terminal,
} from "lucide-react";
import { asset } from "../../../lib/assets";

export const metadata = {
  title: "Application Engineering & Modernization Practice | VueData Technologies",
  description:
    "Optimize business processes and improve overall customer experiences with bespoke cloud-native enterprise applications, mobile platforms, and the 5DS Agile engineering methodology.",
};

export default function ApplicationServicesPage() {
  const steps5DS = [
    { step: "01", name: "Discover", desc: "User research, system telemetry audits & technical feasibility scoping." },
    { step: "02", name: "Define", desc: "Architecture blueprints, API contracts & security compliance definitions." },
    { step: "03", name: "Design", desc: "Interactive Figma design systems, fluid responsive UX & atomic UI components." },
    { step: "04", name: "Develop", desc: "Test-driven engineering, clean modular code & microservices integration." },
    { step: "05", name: "Deploy & Support", desc: "Automated CI/CD release, continuous telemetry monitoring & 24/7 SLA maintenance." },
  ];

  const pillars = [
    {
      title: "Full-Stack Enterprise Web Platforms",
      desc: "Cloud-native web applications engineered using React, Next.js, TypeScript, Node.js, and .NET Core, delivering ultra-fast initial load times and resilient API backbones.",
      icon: Code2,
      accent: "#2864FF",
      highlights: ["SSR / SSG Optimization", "Modular Microservices Architecture", "OAuth 2.0 / SAML Enterprise SSO"],
    },
    {
      title: "Cross-Platform & Native Mobile Apps",
      desc: "Engaging iOS and Android experiences built with React Native and Flutter, incorporating native performance, offline synchronization, and hardware integrations.",
      icon: Smartphone,
      accent: "#00C2E8",
      highlights: ["Shared Cross-Platform Codebase", "Biometric Authentication & Local Vault", "Real-Time Push & Background Sync"],
    },
    {
      title: "Application Re-Engineering & Modernization",
      desc: "Decoupling legacy codebases, migrating from end-of-life platforms, and wrapping existing ERPs in modern GraphQL and REST APIs without disrupting daily business.",
      icon: ShieldCheck,
      accent: "#7657F6",
      highlights: ["API Gateway Decoupling", "Automated QA Regression Testing", "Zero Downtime Database Cutovers"],
    },
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
            <span>Practice Areas / Application Engineering</span>
          </div>

          <h1 className="hero-title font-extrabold tracking-tight text-white mb-6 max-w-4xl">
            Optimize Business Processes and Improve the Overall Customer Experience
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-10 font-light">
            Our application services deliver end-to-end software development tailored to complex business requirements. Backed by our battle-tested 5DS methodology, we engineer secure, customer-centric systems using modern Agile delivery models.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/#contact" className="btn-primary text-xs">
              <span>Start an Engineering Sprint</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/solutions/testing-automation" className="btn-secondary text-xs">
              <span>Explore QA Automation Impact</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Engineering Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2864FF]/10 text-[#2864FF] text-xs font-bold uppercase tracking-wider">
              Engineering Rigor &amp; Velocity
            </div>

            <h2 className="section-title font-extrabold text-[#071426] tracking-tight">
              Crafting Software That Scales Beyond Expectations
            </h2>

            <p className="text-gray-600 text-base leading-relaxed">
              Modern digital enterprises require software that combines consumer-grade UX with military-grade architectural durability. Our engineering squads are composed of seasoned full-stack developers, system architects, and UX strategists.
            </p>

            <p className="text-gray-600 text-base leading-relaxed">
              We practice strict continuous integration, trunk-based development, and comprehensive test automation, ensuring that new features are deployed to production smoothly and without regression defects.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Micro-frontend and decoupled headless UI architectures",
                "High-performance REST & GraphQL federated schemas",
                "DevSecOps automated dependency scanning and SAST/DAST",
                "Dedicated post-launch observability and SLA warranty",
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
                src={asset("/assets/magnet-me-beCkhUB5aIA-unsplash.webp")}
                alt="Agile Full-Stack Software Engineering"
                className="w-full h-auto rounded-2xl object-cover"
              />
              <div className="p-4 flex items-center justify-between text-xs text-white">
                <span className="font-mono text-[#00C2E8]">5DS Agile Delivery</span>
                <span className="text-gray-400">Production Velocity</span>
              </div>
            </div>
          </div>
        </div>

        {/* The 5DS Methodology Section - Thoughtworks style */}
        <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-[#071426] text-white">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block px-3 py-1 rounded bg-[#00C2E8]/10 text-[#00C2E8] text-xs font-mono uppercase tracking-wider mb-2">
              Our Methodology
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              The 5DS Engineering Delivery Framework
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-2">
              A disciplined, repeatable process that guarantees predictable outcomes and transparent client milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps5DS.map((s) => (
              <div key={s.step} className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xl font-bold text-[#00C2E8] mb-2">{s.step}</div>
                  <h4 className="text-base font-bold text-white mb-2">{s.name}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  {pillar.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
