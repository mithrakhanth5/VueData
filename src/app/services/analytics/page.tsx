import React from "react";
import Link from "next/link";
import {
  BarChart3,
  Database,
  LineChart,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Cpu,
} from "lucide-react";

export const metadata = {
  title: "Analytics & Big Data Engineering Practice | VueData Technologies",
  description:
    "Transforming complex data silos into real-time business intelligence, executive dashboards, predictive modeling, and modern lakehouse architectures.",
};

export default function AnalyticsPage() {
  const capabilities = [
    {
      title: "Modern Lakehouse & Data Warehousing",
      desc: "Unified analytical platforms engineered with Snowflake, Databricks, BigQuery, and Azure Synapse, consolidating structured transactions and streaming telemetries.",
      icon: Database,
      accent: "#7657F6",
      deliverables: ["Automated Data Catalog & Governance", "ACID Compliant Delta Storage", "Near-Zero Maintenance Scaling"],
    },
    {
      title: "Real-Time Telemetry & Executive BI Dashboards",
      desc: "Interactive visualization suites built on Power BI, Tableau, and Looker that translate massive data volumes into intuitive, board-level decision matrices.",
      icon: BarChart3,
      accent: "#00C2E8",
      deliverables: ["Sub-Second DirectQuery Latency", "Automated Alert Thresholds", "Mobile-Optimized KPI Suites"],
    },
    {
      title: "Predictive Analytics & Customer 360 Modeling",
      desc: "Algorithmic forecasting, churn propensity models, and multi-touch attribution that empower leadership teams to anticipate market movements proactively.",
      icon: LineChart,
      accent: "#2864FF",
      deliverables: ["Predictive Demand Forecasting", "Dynamic Customer Segmentation", "Automated Anomaly Detection"],
    },
  ];

  const dataPlatforms = [
    { name: "Snowflake", role: "Cloud Data Lakehouse" },
    { name: "Databricks", role: "Unified Spark Analytics" },
    { name: "Azure Synapse", role: "Enterprise BI Compute" },
    { name: "Apache Kafka", role: "Event Stream Backbone" },
    { name: "Power BI", role: "Executive Intelligence" },
    { name: "dbt & Airflow", role: "ELT Pipeline Orchestration" },
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
            <span>Practice Areas / Analytics &amp; Big Data</span>
          </div>

          <h1 className="hero-title font-extrabold tracking-tight text-white mb-6 max-w-4xl">
            Analysis of Data to Provide Businesses with Insights &amp; Intelligence
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-10 font-light">
            Organizations continue rapid expansion in BI, Big Data, and Data Science through modern OLAP, data mining, and predictive modeling. VueData designs scalable data ecosystems that turn information fragments into competitive market dominance.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/#contact" className="btn-primary text-xs">
              <span>Discuss Your Data Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/solutions/data-integration-casestudy" className="btn-secondary text-xs">
              <span>Explore Data 360 Case Study</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2864FF]/10 text-[#2864FF] text-xs font-bold uppercase tracking-wider">
              High-Velocity Data Engineering
            </div>

            <h2 className="section-title font-extrabold text-[#071426] tracking-tight">
              Actionable Intelligence Over Disconnected Dashboards
            </h2>

            <p className="text-gray-600 text-base leading-relaxed">
              Collecting data alone does not generate enterprise value. Too often, companies invest heavily in BI tooling only to discover disjointed metrics, stale data warehouses, and low user trust.
            </p>

            <p className="text-gray-600 text-base leading-relaxed">
              VueData brings disciplined data modeling, automated testing with dbt, and real-time streaming architectures. We unify your fragmented operational databases into a clean semantic layer that business executives, analysts, and automated AI agents can rely upon with confidence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Low-latency streaming ingestion via Apache Kafka and Event Hubs",
                "Automated data cataloging, lineage tracking, and Master Data Management",
                "Granular row-level security and strict GDPR/HIPAA compliance",
                "Self-service semantic models that democratize executive discovery",
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
                src="/assets/analytics-services.webp"
                alt="Big Data Analytics Lakehouse"
                className="w-full h-auto rounded-2xl object-cover"
              />
              <div className="p-4 flex items-center justify-between text-xs text-white">
                <span className="font-mono text-[#00C2E8]">Real-Time Streaming Engine</span>
                <span className="text-gray-400">Low-Latency OLAP</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title font-extrabold text-[#071426] tracking-tight mb-3">
              Data &amp; Analytics Capabilities
            </h2>
            <p className="text-gray-500 text-sm">
              From raw event collection to predictive ML feature stores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-[#F4F7FB] border border-gray-200/80 hover:border-[#7657F6]/40 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: `${cap.accent}20`, color: cap.accent }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-[#071426] mb-3">
                      {cap.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                      {cap.desc}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-gray-200/80">
                    {cap.deliverables.map((d, idx) => (
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

        {/* Data Stack Bar */}
        <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-[#071426] text-white">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl font-bold text-white mb-2">
              Supported Lakehouse &amp; BI Tooling
            </h3>
            <p className="text-xs text-gray-400">
              Modern data stack platforms supported across all our deployments.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {dataPlatforms.map((plat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-xs font-bold text-white mb-1">{plat.name}</div>
                <div className="text-[10px] text-[#00C2E8] font-mono">{plat.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
