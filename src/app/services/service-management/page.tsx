import React from "react";
import Link from "next/link";
import { Settings, ShieldAlert, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Service Management | VueData Technologies",
  description: "Ensuring businesses are aligned with their objectives and customer requirements through assessment, audit, ITIL alignment, and disaster recovery.",
};

export default function ServiceManagementPage() {
  const domains = [
    {
      title: "ITIL Process Design & Optimization",
      desc: "Structured alignment of incident, problem, change, and release management workflows to accelerate issue resolution and operational consistency.",
      icon: Settings,
    },
    {
      title: "Disaster Recovery & Business Continuity",
      desc: "Comprehensive business impact analysis, automated multi-zone failovers, and rigorous disaster recovery testing to ensure zero data loss.",
      icon: ShieldAlert,
    },
    {
      title: "24/7 Managed Services & NOC Support",
      desc: "Round-the-clock infrastructure observability, proactive incident triage, and guaranteed SLA response times to keep digital systems running flawlessly.",
      icon: Clock,
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Banner */}
      <div className="bg-[#1c2438] text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-block px-3.5 py-1 rounded bg-[#236cb1]/30 border border-[#2faae1]/40 text-[#2faae1] text-xs font-bold uppercase tracking-wider mb-4">
            Services / Service Management
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 max-w-4xl">
            Ensuring Businesses Are Aligned with Their Objectives &amp; Customer Requirements
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 font-light">
            VueData provides service management support to ensure your business maximizes revenue while minimizing downtime. Our strategists, architects, developers, and engineers have world-class skills in operations, process design, and large-scale enterprise project delivery.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#236cb1] hover:bg-[#1a5288] text-white px-7 py-3 rounded-lg font-semibold text-sm transition-all"
          >
            <span>Optimize Your IT Operations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#29344a]">
              Maximizing Uptime, Minimizing Risk
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Service management is a set of workflows and technologies that enables development, delivery, and management of IT-related services to be as efficient as possible. It aims to increase productivity, lower costs, and improve end-user satisfaction.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our teams conduct systematic audits, compliance reviews, and roadmap consultations that identify vulnerabilities before they impact mission-critical operations.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Proactive telemetry and APM performance monitoring (Datadog, Dynatrace, New Relic)",
                "Service desk modernization leveraging ServiceNow and Jira Service Management",
                "Strict adherence to ISO/IEC 20000 and ISO 27001 security baselines",
                "Routine tabletop disaster simulation exercises and automated failover validation",
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
                src="/assets/data-management.webp"
                alt="Enterprise Service Management"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {domains.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-sky-100 text-[#236cb1] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#29344a] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
