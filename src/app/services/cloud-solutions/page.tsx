import React from "react";
import Link from "next/link";
import { Cloud, ShieldCheck, Server, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Cloud Solutions | VueData Technologies",
  description: "Helping businesses leverage cloud technology to improve IT infrastructure across Public, Private, Hybrid, and Multi-cloud environments.",
};

export default function CloudSolutionsPage() {
  const pillars = [
    {
      title: "Cloud Strategy & Architecture",
      desc: "Comprehensive assessment of infrastructure readiness, total cost of ownership (TCO) analysis, and multi-year migration roadmaps.",
      icon: Cloud,
    },
    {
      title: "Cloud Migration & Modernization",
      desc: "Re-hosting, re-platforming, and refactoring monolithic legacy architectures into scalable microservices and serverless paradigms.",
      icon: Server,
    },
    {
      title: "Cloud Security & Governance",
      desc: "Zero-trust network architectures, automated compliance scanning, IAM hardening, and round-the-clock SOC monitoring.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Banner */}
      <div className="bg-[#1c2438] text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-block px-3.5 py-1 rounded bg-[#236cb1]/30 border border-[#2faae1]/40 text-[#2faae1] text-xs font-bold uppercase tracking-wider mb-4">
            Services / Cloud Solutions
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 max-w-4xl">
            Helping Businesses Leverage Cloud Technology to Improve IT Infrastructure
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 font-light">
            VueData with their expertise in various types of cloud computing services &amp; models, helps organizations with their cloud transformation initiatives. Our team&apos;s extensive experience on application architecture, development &amp; deployment over Public, Private, Hybrid, and Multi-cloud deployment environments positions us to help organizations navigate cloud opportunities and challenges.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#236cb1] hover:bg-[#1a5288] text-white px-7 py-3 rounded-lg font-semibold text-sm transition-all"
          >
            <span>Start Your Cloud Journey</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#29344a]">
              Bridging Legacy Systems &amp; Modern Cloud Horizons
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We bring a deep understanding of what is possible when legacy systems and cloud solutions coexist and we have a clear vision of the digital future toward which this hybrid world is leading us. We combine those insights with our industry knowledge to drive innovation and transform complex environments into high-performance engines.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Through strategic partnerships with leading cloud hyperscalers like Microsoft Azure, Amazon Web Services (AWS), and Google Cloud Platform (GCP), we deliver enterprise-grade performance, elasticity, and cost optimization.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "DevOps automation with Kubernetes and Infrastructure as Code (Terraform)",
                "FinOps cloud cost governance ensuring continuous optimization",
                "High availability architecture with automated disaster recovery (DR)",
                "Seamless hybrid connectivity with on-premise data centers",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#236cb1] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img
                src="/assets/cloud-services.webp"
                alt="Cloud Computing Infrastructure"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-sky-100 text-[#236cb1] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#29344a] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
