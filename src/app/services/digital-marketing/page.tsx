import React from "react";
import Link from "next/link";
import {
  Megaphone,
  Search,
  Mail,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  BarChart,
  Users,
} from "lucide-react";
import { asset } from "../../../lib/assets";

export const metadata = {
  title: "Digital Marketing & Growth Transformation Practice | VueData Technologies",
  description:
    "Increase brand awareness, organic search visibility, and customer lifetime value in a targeted, measurable way with performance media, AEO, and email lifecycle automation.",
};

export default function DigitalMarketingPage() {
  const channels = [
    {
      title: "Omnichannel Paid Acquisition & Performance Media",
      desc: "Algorithmic paid media campaigns across Google Ads, Meta, LinkedIn, and programmatic display networks, constantly optimized for high conversion and low CAC.",
      icon: Megaphone,
      accent: "#00C2E8",
      highlights: ["Multi-Touch Attribution Modeling", "Granular B2B Account-Based Marketing", "Automated Bid Optimization"],
    },
    {
      title: "Enterprise SEO, AEO & Content Authority",
      desc: "Advanced search engine optimization paired with artificial engine optimization (AEO) to secure brand citations across ChatGPT, Perplexity, and Google Search.",
      icon: Search,
      accent: "#2864FF",
      highlights: ["Semantic Schema Structuring", "Generative Engine Visibility Benchmarks", "Technical Core Web Vitals Audits"],
    },
    {
      title: "Enterprise Email Lifecycle Automation & CRM",
      desc: "VueData's proprietary EM Framework leveraging Salesforce Marketing Cloud, HubSpot, and Marketo for behavioral journeys, cart abandonment, and loyalty retention.",
      icon: Mail,
      accent: "#7657F6",
      highlights: ["Dynamic Behavioral Drip Sequences", "Algorithmic Send-Time Optimization", "Predictive Churn Re-engagement"],
    },
  ];

  const tools = [
    { name: "Google Ads & GA4", category: "Performance & Telemetry" },
    { name: "Salesforce Marketing Cloud", category: "Enterprise CRM Automation" },
    { name: "HubSpot Enterprise", category: "Inbound & Lifecycle" },
    { name: "PageRank.ai", category: "Proprietary AEO Engine" },
    { name: "Meta Business Suite", category: "Social Paid Media" },
    { name: "Semrush & Ahrefs", category: "SEO Intelligence" },
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Cinematic Hero */}
      <div className="bg-[#071426] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00C2E8]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#2864FF]/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00C2E8]/15 border border-[#00C2E8]/30 text-[#00C2E8] text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Practice Areas / Digital Marketing &amp; Growth</span>
          </div>

          <h1 className="hero-title font-extrabold tracking-tight text-white mb-6 max-w-4xl">
            Increase Brand Awareness &amp; Engage Customers in a Targeted, Measurable Way
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-10 font-light">
            Guiding your digital marketing transformation, our specialists partner with your marketing team from initial channel audits to full lifecycle automation. We combine creative storytelling with quantitative data analytics to optimize customer acquisition.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/#contact" className="btn-primary text-xs">
              <span>Request Marketing Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="https://www.pagerank.ai/" target="_blank" rel="noopener noreferrer" className="btn-secondary text-xs">
              <span>Explore PageRank.ai Tool</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2864FF]/10 text-[#2864FF] text-xs font-bold uppercase tracking-wider">
              Data-Led Customer Acquisition
            </div>

            <h2 className="section-title font-extrabold text-[#071426] tracking-tight">
              Precision Targeting Powered by Full-Funnel Analytics
            </h2>

            <p className="text-gray-600 text-base leading-relaxed">
              We leverage an array of analytical instrumentation and multi-touch attribution techniques that uncover the exact touchpoints driving client conversion across channels.
            </p>

            <p className="text-gray-600 text-base leading-relaxed">
              Engage with our email marketing and growth specialists to discover how VueData&apos;s custom EM Framework turns cold subscribers into devoted brand champions using the market&apos;s top marketing automation platforms.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Full-funnel attribution and automated conversion tracking",
                "Conversion rate optimization (CRO) and personalized landing page funnels",
                "Generative AI-optimized content for multi-platform distribution",
                "Deep CRM integration for closed-loop revenue reporting",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#00C2E8] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-[#071426] p-2">
              <img
                src={asset("/assets/digimarketing.webp")}
                alt="Digital Marketing Campaign Strategy"
                className="w-full h-auto rounded-2xl object-cover"
              />
              <div className="p-4 flex items-center justify-between text-xs text-white">
                <span className="font-mono text-[#00C2E8]">Precision Growth Modeling</span>
                <span className="text-gray-400">High ROAS Engine</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Channels Grid */}
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title font-extrabold text-[#071426] tracking-tight mb-3">
              Growth &amp; Marketing Solutions
            </h2>
            <p className="text-gray-500 text-sm">
              Engineered to maximize return on ad spend (ROAS) and customer lifetime value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {channels.map((chan, i) => {
              const Icon = chan.icon;
              return (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-[#F4F7FB] border border-gray-200/80 hover:border-[#00C2E8]/40 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: `${chan.accent}20`, color: chan.accent }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-[#071426] mb-3">
                      {chan.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                      {chan.desc}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-gray-200/80">
                    {chan.highlights.map((h, idx) => (
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

        {/* Marketing Platforms Bar */}
        <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-[#071426] text-white">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl font-bold text-white mb-2">
              Marketing Technology Integrations
            </h3>
            <p className="text-xs text-gray-400">
              Platforms and CRM environments managed daily by our growth engineering teams.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((t, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-xs font-bold text-white mb-1">{t.name}</div>
                <div className="text-[10px] text-[#00C2E8] font-mono">{t.category}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
