import React from "react";
import Link from "next/link";
import {
  Settings,
  ShieldAlert,
  Clock,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Activity,
  Server,
  Cpu,
} from "lucide-react";
import { asset } from "../../../lib/assets";

export const metadata = {
  title: "Service Management & 24/7 SRE Practice | VueData Technologies",
  description:
    "Ensuring enterprises maximize uptime, minimize operational disruption, and align with ITIL best practices through observability, audits, and disaster recovery.",
};

export default function ServiceManagementPage() {
  const pillars = [
    {
      title: "ITIL Process Design & Workflow Automation",
      desc: "Structured alignment of incident, problem, change, and configuration management workflows to accelerate issue resolution and eliminate recurring manual bottlenecks.",
      icon: Settings,
      accent: "#7657F6",
      highlights: ["Service Catalog Consolidation", "Root Cause Analysis (RCA) Frameworks", "Change Advisory Board (CAB) Tooling"],
    },
    {
      title: "Automated Disaster Recovery & Business Continuity",
      desc: "Systematic business impact analyses (BIA), multi-region active-active database replication, and automated disaster failovers tested with regular chaos drills.",
      icon: ShieldAlert,
      accent: "#2864FF",
      highlights: ["RTO < 15 Mins / RPO Near-Zero", "Automated Chaos Engineering Drills", "ISO 22301 Continuity Alignment"],
    },
    {
      title: "24/7 Managed Services & NOC / SRE Observability",
      desc: "Around-the-clock site reliability engineering, telemetry monitoring (Datadog, Dynatrace), and strict SLA-backed incident response to ensure seamless operation.",
      icon: Clock,
      accent: "#00C2E8",
      highlights: ["Sub-15 Minute Severity-1 Triage", "Proactive Capacity & Drift Telemetry", "ISO 20000 / 27001 Certified SRE Ops"],
    },
  ];

  const tools = [
    { name: "ServiceNow", role: "ITSM Enterprise Suite" },
    { name: "Jira Service Management", role: "Agile Service Desk" },
    { name: "Datadog & Dynatrace", role: "Full-Stack APM" },
    { name: "PagerDuty", role: "Automated Incident Escalation" },
    { name: "Splunk & ELK", role: "Security & Audit Logging" },
    { name: "Terraform", role: "Disaster Recovery Automation" },
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Cinematic Hero */}
      <div className="bg-[#071426] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#7657F6]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#00C2E8]/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#7657F6]/15 border border-[#7657F6]/30 text-[#00C2E8] text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Practice Areas / Service Management</span>
          </div>

          <h1 className="hero-title font-extrabold tracking-tight text-white mb-6 max-w-4xl">
            Ensuring Businesses Are Aligned with Their Objectives &amp; Customer Requirements
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-10 font-light">
            VueData provides world-class service management support to ensure your digital operations maximize revenue while minimizing downtime. Our strategists, architects, and SRE engineers possess decades of deep experience in high-availability operations.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/#contact" className="btn-primary text-xs">
              <span>Request SRE / ITIL Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/#about" className="btn-secondary text-xs">
              <span>View Global Delivery Centers</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2864FF]/10 text-[#2864FF] text-xs font-bold uppercase tracking-wider">
              Operational Resilience
            </div>

            <h2 className="section-title font-extrabold text-[#071426] tracking-tight">
              Maximizing Uptime, Eliminating Unplanned Disruptions
            </h2>

            <p className="text-gray-600 text-base leading-relaxed">
              Service management is the foundation that enables reliable development, delivery, and scaling of IT systems. In modern high-throughput environments, every minute of unexpected downtime damages brand equity and revenue.
            </p>

            <p className="text-gray-600 text-base leading-relaxed">
              Our teams conduct systematic audits, compliance reviews, and roadmap consultations that identify single points of failure before they manifest. We provide round-the-clock proactive monitoring backed by stringent SLAs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Proactive telemetry and APM performance monitoring across hybrid clouds",
                "Service desk modernization leveraging ServiceNow and Jira Service Management",
                "Strict adherence to ISO/IEC 20000 and ISO 27001 operational standards",
                "Routine tabletop disaster simulation exercises and automated failover validation",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#7657F6] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-[#071426] p-2">
              <img
                src={asset("/assets/data-management.webp")}
                alt="24/7 Service Management & SRE"
                className="w-full h-auto rounded-2xl object-cover"
              />
              <div className="p-4 flex items-center justify-between text-xs text-white">
                <span className="font-mono text-[#00C2E8]">24/7 NOC &amp; SRE Grid</span>
                <span className="text-gray-400">99.99% Availability</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title font-extrabold text-[#071426] tracking-tight mb-3">
              Service Management Offerings
            </h2>
            <p className="text-gray-500 text-sm">
              Operational excellence designed to protect enterprise integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-[#F4F7FB] border border-gray-200/80 hover:border-[#7657F6]/40 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
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

        {/* ITSM Tools Grid */}
        <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-[#071426] text-white">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl font-bold text-white mb-2">
              Observability &amp; ITSM Platforms
            </h3>
            <p className="text-xs text-gray-400">
              Industry-standard monitoring, ticketing, and SRE orchestration tooling.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-xs font-bold text-white mb-1">{tool.name}</div>
                <div className="text-[10px] text-[#00C2E8] font-mono">{tool.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
