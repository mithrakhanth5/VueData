import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  TrendingUp,
  Cpu,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Layers,
  Activity,
  AlertTriangle,
} from "lucide-react";

interface CaseStudyData {
  title: string;
  subtitle: string;
  category: string;
  bgImage: string;
  clientOverview: string;
  challenge: string[];
  solution: string[];
  architecture: string[];
  metrics: { value: string; label: string }[];
}

const caseStudies: Record<string, CaseStudyData> = {
  "e-commerce-casestudy": {
    title: "The E-commerce Advantage: Boosting Sales & Loyalty",
    subtitle: "A Study on Scaling High-Throughput Digital Storefronts with Modular Managed Services",
    category: "E-commerce Modernization",
    bgImage: "/assets/pexels-karolina-grabowska-5717947.webp",
    clientOverview:
      "A fast-growing multi-brand retail enterprise experiencing exponential order volume growth across digital storefronts, constrained by legacy monolithic checkout bottlenecks.",
    challenge: [
      "Rigid legacy platform unable to scale during peak holiday flash sales, resulting in severe slowdowns.",
      "Lengthy release cycles for new promotional campaigns taking up to 3 weeks to deploy.",
      "High cart abandonment rates due to sluggish multi-step checkout latency.",
    ],
    solution: [
      "Implemented a modular managed services delivery model releasing commerce features in decoupled phases.",
      "Transitioned core catalog and checkout services to resilient cloud microservices.",
      "Integrated automated real-time inventory synchronization across multi-warehouse logistics nodes.",
    ],
    architecture: [
      "Next.js Headless Storefront",
      "Event-Driven Microservices with RabbitMQ",
      "Stripe & Multi-Currency Payment Gateway",
      "Redis Distributed Cache Layer",
      "Algolia Instant Search",
    ],
    metrics: [
      { value: "48%", label: "Faster Page Load Speed" },
      { value: "34%", label: "Increase in Checkout Conversion" },
      { value: "99.99%", label: "Uptime During Black Friday Peak" },
    ],
  },
  "data-integration-casestudy": {
    title: "Connecting the Dots: Unified Customer 360",
    subtitle: "A Case Study in Real-Time Integration for Actionable Enterprise Insights",
    category: "Enterprise Data Hub",
    bgImage: "/assets/high-technology-digital-graph-presentation-by-businesswoman.webp",
    clientOverview:
      "A multinational customer services provider with siloed customer information spanning on-premise ERPs, streaming web events, and fragmented CRM instances.",
    challenge: [
      "Fragmented data across legacy relational databases preventing a single customer view.",
      "Inability to react in real-time to high-value user triggers or urgent support escalations.",
      "Manual batch synchronization resulting in stale data and duplicate marketing communications.",
    ],
    solution: [
      "Engineered a SaaS-based customer engagement hub connecting instantly to any application.",
      "Implemented bi-directional connectors for streaming data, custom ERPs, and marketing automation.",
      "Standardized data schema validation and automated duplicate customer entity resolution.",
    ],
    architecture: [
      "Apache Kafka Event Bus",
      "Snowflake Data Lakehouse",
      "Custom REST & GraphQL Integration Gateway",
      "Automated dbt Data Modeling",
      "Power BI Executive Dashboards",
    ],
    metrics: [
      { value: "360°", label: "Unified Real-Time Customer Profile" },
      { value: "85%", label: "Reduction in Data Latency" },
      { value: "3.2x", label: "Higher Campaign Engagement" },
    ],
  },
  "testing-automation": {
    title: "Enhancing Retail Performance with Test Automation",
    subtitle: "Accelerating Software Velocity with Reusable Frameworks & Continuous CI/CD Testing",
    category: "QA & Test Automation",
    bgImage: "/assets/pexels-rodnae-productions-7915289.webp",
    clientOverview:
      "A prominent retail solutions developer with bi-weekly release cadences struggling with extensive manual regression testing bottlenecks across web and mobile platforms.",
    challenge: [
      "Manual test execution cycles required 5 days before each production deployment.",
      "Intermittent UI test flakiness leading to false negatives and delayed sprint sign-offs.",
      "Incomplete test coverage across diverse mobile viewports and legacy browsers.",
    ],
    solution: [
      "Deployed VueData's customizable, reusable Test Automation Framework and component libraries.",
      "Integrated continuous testing directly into the GitHub Actions CI/CD deployment pipeline.",
      "Automated regression suites covering 1,200+ test scenarios across multiple browsers.",
    ],
    architecture: [
      "Playwright & Selenium Grid",
      "TypeScript Reusable Test Harness",
      "Dockerized CI/CD Test Runners",
      "Allure Test Telemetry & Reporting",
      "BrowserStack Cross-Device Cloud",
    ],
    metrics: [
      { value: "40%", label: "Script Effort Development Cut" },
      { value: "75%", label: "Faster Regression Execution Time" },
      { value: "94%", label: "Automated Critical Path Coverage" },
    ],
  },
  "building-a-storefront": {
    title: "Beyond Building a Storefront: Decoupled Commerce",
    subtitle: "Migrating from End-of-Life Platforms to a Resilient Future-Proof Architecture",
    category: "E-commerce Transformation",
    bgImage: "/assets/ai-shopping-e-comm.webp",
    clientOverview:
      "An established luxury lifestyle brand facing the end-of-life of Magento 1.X, requiring seamless migration while maintaining uninterrupted business operations.",
    challenge: [
      "Urgent imperative to upgrade from unsupported legacy software without business disruption.",
      "Balancing strict fraud prevention measures with an effortless customer checkout experience.",
      "Mitigating heavy technical debt and custom plugin dependencies.",
    ],
    solution: [
      "Devised a dual-track strategy: seamless Magento 2.x migration in parallel with decoupled API architecture.",
      "Implemented advanced automated fraud scoring APIs that reduce false transaction rejections.",
      "Built headless design system components for consistent cross-device branding.",
    ],
    architecture: [
      "Magento 2.x Enterprise Backend",
      "Tailwind & React UI Component Library",
      "Signifyd & Riskified Fraud Prevention APIs",
      "Algolia Instant Search Integration",
      "Cloudflare Edge Caching",
    ],
    metrics: [
      { value: "0", label: "Hours of Customer-Facing Downtime" },
      { value: "62%", label: "Reduction in Fraud Delays" },
      { value: "28%", label: "Increase in Mobile Conversion" },
    ],
  },
  "payments-solution": {
    title: "Scaling Payment Solutions Across Inter-Bank Networks",
    subtitle: "Facilitating High-Throughput Payment Gateways with Real-Time Inter-Bank Settlement",
    category: "Fintech & Payments",
    bgImage: "/assets/pexels-tim-douglas-6205512.webp",
    clientOverview:
      "A financial infrastructure consortium requiring a scalable, ultra-secure gateway connecting diverse banking partners with real-time clearing and deposit insurance.",
    challenge: [
      "Strict zero-tolerance requirements for financial transaction drops or data inconsistency.",
      "Diverse legacy protocols and proprietary messaging standards across participating banks.",
      "High regulatory compliance standards for encryption, auditability, and fraud logging.",
    ],
    solution: [
      "Built a generic, extensible gateway supporting both real-time settlement and scheduled batch networks.",
      "Implemented hardware-security module (HSM) encryption and tokenization across all payment payload lines.",
      "Engineered automated consensus reconciliation to catch discrepancies instantaneously.",
    ],
    architecture: [
      "ISO 20022 Financial Messaging Engine",
      "Distributed Event Sourcing Architecture",
      "Hardware-Secured Tokenization Vault",
      "Multi-Region Active-Active Cloud Deployment",
      "Kubernetes Enterprise Mesh",
    ],
    metrics: [
      { value: "10,000+", label: "Transactions Processed Per Second" },
      { value: "<150ms", label: "Average Real-Time Settlement Latency" },
      { value: "100%", label: "Regulatory Compliance Audit Passed" },
    ],
  },
  "cloud-transformation-journey": {
    title: "A Structured Cloud Transformation Journey",
    subtitle: "Migrating from On-Premises Hosting to Elastic, Cost-Optimized Cloud Infrastructure",
    category: "Cloud Migration",
    bgImage: "/assets/cloud-computing.webp",
    clientOverview:
      "A fast-scaling enterprise burdened by escalating third-party hosting fees and lack of an elastic cloud scaling strategy during seasonal traffic surges.",
    challenge: [
      "Spiraling colocation and hardware maintenance overhead with unpredictable fixed expenditures.",
      "Lengthy server provisioning delays stifling rapid feature experimentation.",
      "Single points of failure with inadequate disaster recovery capabilities.",
    ],
    solution: [
      "Formulated a phased migration blueprint leveraging Infrastructure-as-Code and containerization.",
      "Refactored stateful databases to managed multi-zone cloud database instances with automated failover.",
      "Implemented continuous FinOps cost governance and automated workload shutdown rules.",
    ],
    architecture: [
      "Microsoft Azure Multi-Region Cloud",
      "Terraform Infrastructure as Code",
      "Azure Kubernetes Service (AKS)",
      "Automated DR with Geo-Replication",
      "Azure Monitor & Datadog APM",
    ],
    metrics: [
      { value: "42%", label: "Total Cost of Ownership (TCO) Reduction" },
      { value: "99.995%", label: "Application Availability SLA" },
      { value: "15 Mins", label: "Full Disaster Recovery RTO" },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = caseStudies[slug];

  if (!data) {
    notFound();
  }

  return (
    <div className="pt-20 bg-white">
      {/* Cinematic Case Study Hero */}
      <div className="bg-[#071426] text-white py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
          style={{ backgroundImage: `url(${data.bgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071426] via-[#071426]/90 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/#solutions"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00C2E8] hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Solutions</span>
          </Link>

          <div className="inline-block px-3.5 py-1 rounded-md bg-[#2864FF]/20 border border-[#2864FF]/40 text-[#00C2E8] text-xs font-bold uppercase tracking-wider mb-4 ml-4">
            {data.category}
          </div>

          <h1 className="hero-title font-extrabold tracking-tight text-white mb-4 max-w-4xl">
            {data.title}
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl leading-relaxed mb-6 font-light">
            {data.subtitle}
          </p>
        </div>
      </div>

      {/* Verified Metrics Bar */}
      <div className="bg-[#F4F7FB] border-y border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {data.metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#2864FF] mb-1">
                  {m.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#071426] uppercase tracking-wider">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Editorial Breakdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Case Narrative */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2864FF]/10 text-[#2864FF] text-xs font-bold uppercase tracking-wider mb-3">
                Client Profile
              </div>
              <h2 className="text-2xl font-bold text-[#071426] mb-3">
                Organizational Context
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                {data.clientOverview}
              </p>
            </div>

            {/* Challenges */}
            <div className="p-8 rounded-3xl bg-rose-50/50 border border-rose-100 space-y-4">
              <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>The Core Business Friction</span>
              </div>
              <h2 className="text-2xl font-bold text-[#071426]">
                Identified Operational Bottlenecks
              </h2>
              <div className="space-y-3 pt-2">
                {data.challenge.map((c, i) => (
                  <div key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                    <span className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* The Solution */}
            <div className="p-8 rounded-3xl bg-sky-50/50 border border-sky-100 space-y-4">
              <div className="flex items-center gap-2 text-[#2864FF] font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>The VueData Approach</span>
              </div>
              <h2 className="text-2xl font-bold text-[#071426]">
                Architectural Transformation &amp; Delivery
              </h2>
              <div className="space-y-3 pt-2">
                {data.solution.map((s, i) => (
                  <div key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#2864FF] mt-1 shrink-0" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Stack */}
            <div>
              <h2 className="text-2xl font-bold text-[#071426] mb-4">
                Architecture &amp; Key Technologies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.architecture.map((tech, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#F4F7FB] border border-gray-200/80 flex items-center gap-3 text-xs sm:text-sm font-semibold text-gray-800"
                  >
                    <Cpu className="w-4 h-4 text-[#00C2E8] shrink-0" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Sidebar CTA */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 p-8 rounded-3xl bg-[#071426] text-white shadow-2xl border border-white/10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00C2E8]/20 text-[#00C2E8] text-xs font-bold uppercase tracking-wider">
                Partner With VueData
              </div>
              <h3 className="text-2xl font-bold tracking-tight">
                Achieve Similar Results for Your Enterprise
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                Schedule a confidential working session with our technical architects to analyze your systems and formulate an accelerated modernization plan.
              </p>
              <Link
                href="/#contact"
                className="w-full btn-primary text-xs flex items-center justify-center gap-2"
              >
                <span>Request Custom Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
