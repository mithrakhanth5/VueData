import React from "react";
import Link from "next/link";
import { BarChart3, Database, LineChart, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Analytics & Big Data | VueData Technologies",
  description: "Analysis of data to provide businesses with actionable insights and intelligence through OLAP, data mining, and scalable data pipelines.",
};

export default function AnalyticsPage() {
  const capabilities = [
    {
      title: "Data Warehousing & Data Lakes",
      desc: "Modern lakehouse architectures using Snowflake, Databricks, BigQuery, and Azure Synapse for unified structured and unstructured storage.",
      icon: Database,
    },
    {
      title: "Business Intelligence & Visual Dashboards",
      desc: "Interactive reporting suites with Power BI, Tableau, and Looker that translate raw numbers into intuitive executive insights.",
      icon: BarChart3,
    },
    {
      title: "Predictive Analytics & Data Modeling",
      desc: "Statistical forecasting, churn modeling, and automated anomaly detection that equip leaders with forward-looking clarity.",
      icon: LineChart,
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Banner */}
      <div className="bg-[#1c2438] text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-block px-3.5 py-1 rounded bg-[#236cb1]/30 border border-[#2faae1]/40 text-[#2faae1] text-xs font-bold uppercase tracking-wider mb-4">
            Services / Analytics &amp; Reporting
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 max-w-4xl">
            Analysis of Data to Provide Businesses with Insights and Intelligence
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 font-light">
            Organizations are continuing development in the fields of BI, Analytics, and Data Sciences to help determine current and future events through tools such as OLAP, data mining, and data modeling. VueData offers a comprehensive set of Analytics and Big Data services to help clients improve decision-making, customer service, and ROI.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#236cb1] hover:bg-[#1a5288] text-white px-7 py-3 rounded-lg font-semibold text-sm transition-all"
          >
            <span>Discuss Your Data Strategy</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#29344a]">
              Empowering Decision Makers with Actionable Intelligence
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The ability to collect and analyze data shows how well an organization is generating knowledge and value from its operational footprint. While many companies purchase expensive BI software hoping for an automatic solution, technologies alone do not solve data fragmentation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Well-planned analytical processes combined with rightly talented engineers and domain specialists are required to extract maximum leverage from Big Data initiatives. VueData bridges the gap between raw data collection and strategic execution.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Real-time streaming ingestion via Kafka, Kinesis, and Event Hubs",
                "Automated data cataloging, lineage tracking, and Master Data Management (MDM)",
                "Scalable ETL/ELT pipeline automation with dbt and Airflow",
                "Advanced role-based data security and HIPAA/GDPR regulatory compliance",
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
                src="/assets/analytics-services.webp"
                alt="Big Data Analytics and Intelligence"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-sky-100 text-[#236cb1] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#29344a] mb-3">
                  {cap.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
