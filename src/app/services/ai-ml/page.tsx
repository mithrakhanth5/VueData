import React from "react";
import Link from "next/link";
import { Bot, Cpu, Zap, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "AI / ML Services | VueData Technologies",
  description: "Next-Gen AI Solutions: Empowering Intelligent Decisions with Generative AI, OpenAI, Azure, and Google Cloud Vertex AI.",
};

export default function AiMlServicesPage() {
  const capabilities = [
    {
      title: "AI-driven Shopping Experience",
      desc: "Personalized recommendation engines, visual search, and predictive shopping carts that increase conversion rates and average order values.",
      icon: Zap,
    },
    {
      title: "GenAI Virtual Agents",
      desc: "Context-aware conversational assistants built with enterprise LLMs, retrieval-augmented generation (RAG), and proprietary business knowledge bases.",
      icon: Bot,
    },
    {
      title: "Robotic Process Automation & Computer Vision",
      desc: "Intelligent document processing, automated quality inspection, and cognitive workflows that cut manual operational overhead by up to 60%.",
      icon: Cpu,
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Banner */}
      <div className="bg-[#1c2438] text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-block px-3.5 py-1 rounded bg-[#236cb1]/30 border border-[#2faae1]/40 text-[#2faae1] text-xs font-bold uppercase tracking-wider mb-4">
            Services / AI &amp; ML
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 max-w-4xl">
            Next-Gen AI Solutions: Empowering Intelligent Decisions
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 font-light">
            VueData is a global leader in AI and ML services, catering to diverse organizations worldwide, from nimble startups to expansive enterprises. Our mastery in data engineering, data science, and cutting-edge technologies empowers clients to harness the full potential of generative AI models.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#236cb1] hover:bg-[#1a5288] text-white px-7 py-3 rounded-lg font-semibold text-sm transition-all"
          >
            <span>Consult Our AI Experts</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#29344a]">
              Unlocking Value with Generative &amp; Predictive Intelligence
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Through our expertise, clients attain unparalleled insights from their data, paving the way for advanced AI solutions that significantly elevate business productivity, slash operational expenses, and drive substantial revenue growth across various industry verticals.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We leverage leading foundation models from OpenAI, Azure AI, AWS Bedrock, and Google Cloud&apos;s Vertex AI to design bespoke domain-adapted systems that adhere to the highest enterprise security, governance, and compliance standards.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Enterprise RAG architecture with semantic vector search",
                "Fine-tuning & model evaluation for private domain data",
                "Automated data pipeline engineering & MLOps infrastructure",
                "Continuous security, audit trails, and privacy protection",
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
                src="/assets/AI_part_2.webp"
                alt="AI Machine Learning Solutions"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#29344a]">
              Key Solution Areas
            </h2>
            <div className="w-12 h-1 bg-[#236cb1] mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
    </div>
  );
}
