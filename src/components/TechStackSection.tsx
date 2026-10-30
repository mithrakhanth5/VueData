"use client";

import React, { useState } from "react";
import { Cpu, Cloud, Database, Layers, Terminal, Shield } from "lucide-react";

interface TechCategory {
  id: string;
  name: string;
  icon: any;
  technologies: { name: string; role: string; tag: string }[];
}

const categories: TechCategory[] = [
  {
    id: "ai-data",
    name: "AI & Machine Learning",
    icon: Cpu,
    technologies: [
      { name: "Azure OpenAI", role: "Enterprise LLM Foundation", tag: "Generative AI" },
      { name: "Google Vertex AI", role: "Multimodal Models", tag: "AI Platforms" },
      { name: "OpenAI GPT-4o", role: "Cognitive Intelligence", tag: "Agentic AI" },
      { name: "LangChain & LlamaIndex", role: "RAG & Orchestration", tag: "Framework" },
      { name: "PyTorch & HuggingFace", role: "Model Fine-Tuning", tag: "Deep Learning" },
      { name: "Vector DBs (Pinecone/pgvector)", role: "Semantic Embeddings", tag: "Vector Index" },
    ],
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    icon: Cloud,
    technologies: [
      { name: "Microsoft Azure", role: "Gold Partner Tier", tag: "Hyperscale" },
      { name: "Amazon Web Services", role: "Elastic Infrastructure", tag: "Cloud" },
      { name: "Google Cloud Platform", role: "Data & Compute", tag: "Cloud" },
      { name: "Kubernetes (AKS/EKS)", role: "Container Orchestration", tag: "DevOps" },
      { name: "Terraform & IaC", role: "Automated Provisioning", tag: "Infrastructure" },
      { name: "GitHub Actions & CI/CD", role: "Continuous Delivery", tag: "Automation" },
    ],
  },
  {
    id: "data-lakehouse",
    name: "Data & Lakehouse",
    icon: Database,
    technologies: [
      { name: "Snowflake", role: "Cloud Data Lakehouse", tag: "Data Warehouse" },
      { name: "Databricks", role: "Unified Analytics & Spark", tag: "Big Data" },
      { name: "Apache Kafka", role: "Real-Time Event Streaming", tag: "Messaging" },
      { name: "Power BI & Looker", role: "Executive Intelligence", tag: "BI & Viz" },
      { name: "dbt & Airflow", role: "ELT Pipeline Orchestration", tag: "Engineering" },
      { name: "MongoDB & PostgreSQL", role: "Operational Databases", tag: "Persistence" },
    ],
  },
  {
    id: "web-mobile",
    name: "Modern Engineering",
    icon: Layers,
    technologies: [
      { name: "React & Next.js", role: "High-Performance Web", tag: "Frontend" },
      { name: "TypeScript", role: "Type-Safe Architecture", tag: "Language" },
      { name: "Node.js & Express", role: "Microservices Backend", tag: "Runtime" },
      { name: ".NET Core", role: "Enterprise High-Throughput", tag: "Enterprise" },
      { name: "React Native & Flutter", role: "Cross-Platform Mobile", tag: "Mobile" },
      { name: "Tailwind CSS", role: "Responsive Design Systems", tag: "Styling" },
    ],
  },
];

export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState("ai-data");

  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section className="py-24 bg-[#071426] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute -top-32 right-0 w-96 h-96 bg-[#2864FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-0 w-96 h-96 bg-[#00C2E8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00C2E8]/10 border border-[#00C2E8]/30 text-[#00C2E8] text-xs font-bold tracking-wider uppercase mb-3">
            Enterprise Architecture &amp; Ecosystem
          </div>
          <h2 className="section-title font-extrabold text-white tracking-tight mb-4">
            Production-Proven Technology Capabilities
          </h2>
          <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed">
            We architect and operate on leading platforms and standards trusted by Fortune 500 enterprises for scale, resilience, and cryptographic compliance.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = cat.id === activeTab;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-[#2864FF] to-[#00C2E8] text-white shadow-glow scale-105"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentCategory.technologies.map((tech, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0C1D35]/80 backdrop-blur-md border border-white/10 hover:border-[#00C2E8]/50 shadow-cardDark transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#00C2E8] transition-colors">
                  {tech.name}
                </span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-gray-300 font-mono">
                  {tech.tag}
                </span>
              </div>
              <p className="text-xs text-gray-400 font-normal leading-relaxed">
                {tech.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
