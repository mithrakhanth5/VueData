import React from "react";
import Link from "next/link";
import {
  Bot,
  Cpu,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  ShieldCheck,
  Workflow,
  BrainCircuit,
} from "lucide-react";
import { asset } from "../../../lib/assets";

export const metadata = {
  title: "AI / ML & Generative AI Practice | VueData Technologies",
  description:
    "Next-Gen AI Solutions: Empowering Intelligent Enterprise Decisions with Generative AI, OpenAI, Azure OpenAI, and Google Cloud Vertex AI.",
};

export default function AiMlServicesPage() {
  const capabilities = [
    {
      title: "AI-Driven Hyper-Personalization",
      desc: "Real-time behavioral recommendation engines, visual product discovery, and predictive carts that increase conversion rates and customer lifetime value.",
      icon: Zap,
      accent: "#00C2E8",
      highlights: ["Algorithmic Affinity Modeling", "Sub-50ms Inference Latency", "Omnichannel Dynamic Pricing"],
    },
    {
      title: "Enterprise GenAI & RAG Virtual Agents",
      desc: "Domain-tailored conversational copilots built with retrieval-augmented generation (RAG) over private vector knowledge stores with zero external data leakage.",
      icon: Bot,
      accent: "#2864FF",
      highlights: ["Multi-Agent Tool Orchestration", "SOC-2 & GDPR Privacy Guardrails", "Multi-Modal Document Synthesis"],
    },
    {
      title: "Cognitive Process Automation & Vision",
      desc: "Intelligent document processing, automated defect inspection, and robotic vision pipelines that cut manual operational expenditures by up to 60%.",
      icon: Cpu,
      accent: "#7657F6",
      highlights: ["Automated Invoice & Claims Ingestion", "Computer Vision Quality Assurance", "Human-in-the-Loop Triage"],
    },
  ];

  const techStack = [
    { name: "Azure OpenAI", category: "Foundation Models" },
    { name: "Google Vertex AI", category: "Enterprise Platform" },
    { name: "OpenAI GPT-4o", category: "Cognitive Reasoning" },
    { name: "LangChain / LlamaIndex", category: "RAG Framework" },
    { name: "Pinecone & pgvector", category: "Vector Store" },
    { name: "Hugging Face & PyTorch", category: "Fine-Tuning" },
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Cinematic Hero */}
      <div className="bg-[#071426] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00C2E8]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#2864FF]/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00C2E8]/10 border border-[#00C2E8]/30 text-[#00C2E8] text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Practice Areas / AI &amp; Machine Learning</span>
          </div>

          <h1 className="hero-title font-extrabold tracking-tight text-white mb-6 max-w-4xl">
            Next-Gen AI Solutions: Empowering Intelligent Decisions
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-10 font-light">
            VueData is a global leader in AI and ML services, catering to forward-looking organizations worldwide—from nimble scale-ups to Fortune 500 enterprises. We engineer secure, private generative AI models and scalable data pipelines that slash costs and elevate productivity.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/#contact" className="btn-primary text-xs">
              <span>Schedule AI Strategy Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/#solutions" className="btn-secondary text-xs">
              <span>View AI Case Studies</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Engineering Value Proposition */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2864FF]/10 text-[#2864FF] text-xs font-bold uppercase tracking-wider">
              Strategic Value Delivery
            </div>

            <h2 className="section-title font-extrabold text-[#071426] tracking-tight">
              From Experimental Prototypes to Mission-Critical Production AI
            </h2>

            <p className="text-gray-600 text-base leading-relaxed">
              While many organizations experiment with generic chatbots, enterprise adoption demands strict data governance, guaranteed latency bounds, and auditable outputs. VueData bridges the gap between raw foundation models and domain-grounded business outcomes.
            </p>

            <p className="text-gray-600 text-base leading-relaxed">
              We leverage leading foundation models from OpenAI, Azure AI, AWS Bedrock, and Google Cloud&apos;s Vertex AI to design bespoke systems that integrate directly into your proprietary ERP, CRM, and customer data platforms.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Enterprise RAG architecture with hybrid keyword-vector search",
                "Domain-specific fine-tuning and continuous evaluation harness",
                "Automated data pipeline engineering & MLOps infrastructure",
                "Strict role-based privacy protection and SOC 2 compliance",
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
                src={asset("/assets/AI_part_2.webp")}
                alt="AI Machine Learning Architecture"
                className="w-full h-auto rounded-2xl object-cover"
              />
              <div className="p-4 flex items-center justify-between text-xs text-white">
                <span className="font-mono text-[#00C2E8]">Enterprise MLOps Model</span>
                <span className="text-gray-400">Production Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Capability Pillars */}
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title font-extrabold text-[#071426] tracking-tight mb-3">
              Core AI &amp; Machine Learning Capabilities
            </h2>
            <p className="text-gray-500 text-sm">
              Custom-tailored solutions designed to deliver rapid time-to-value across every business unit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-[#F4F7FB] border border-gray-200/80 hover:border-[#2864FF]/40 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
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
                    {cap.highlights.map((h, idx) => (
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

        {/* Technology Ecosystem Grid */}
        <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-[#071426] text-white">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl font-bold text-white mb-2">
              Supported AI Frameworks &amp; Model Runtimes
            </h3>
            <p className="text-xs text-gray-400">
              We leverage vetted, state-of-the-art enterprise AI tooling to construct deterministic pipelines.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map((tech, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-xs font-bold text-white mb-1">{tech.name}</div>
                <div className="text-[10px] text-[#00C2E8] font-mono">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
