import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, TrendingUp, Cpu, ShieldCheck, ArrowRight } from "lucide-react";

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
    title: "The E-commerce Advantage",
    subtitle: "A Study on Boosting Sales, System Agility, and Customer Loyalty",
    category: "E-commerce Modernization",
    bgImage: "/assets/pexels-karolina-grabowska-5717947.webp",
    clientOverview:
      "A fast-growing multi-brand retail enterprise experiencing exponential order volume growth across digital storefronts, constrained by monolithic bottlenecks.",
    challenge: [
      "Rigid legacy platform unable to scale during peak holiday flash sales.",
      "Lengthy release cycles for new promotional campaigns taking up to 3 weeks.",
      "High cart abandonment rates due to sluggish checkout latency.",
    ],
    solution: [
      "Implemented a modular managed services model delivering features in iterative phases.",
      "Transitioned core catalog and checkout services to resilient cloud microservices.",
      "Integrated automated real-time inventory synchronization across multi-warehouse locations.",
    ],
    architecture: [
      "Next.js Headless Storefront",
      "Event-Driven Microservices with RabbitMQ",
      "Stripe & Multi-Currency Payment Gateway",
      "Redis Distributed Cache Layer",
    ],
    metrics: [
      { value: "48%", label: "Faster Page Load Speed" },
      { value: "34%", label: "Increase in Checkout Conversion" },
      { value: "99.99%", label: "Uptime During Black Friday Peak" },
    ],
  },
  "data-integration-casestudy": {
    title: "Connecting the Dots: Data Integration",
    subtitle: "A Case Study in Real-Time Integration for Unified Customer 360 Insights",
    category: "Enterprise Data Hub",
    bgImage: "/assets/high-technology-digital-graph-presentation-by-businesswoman.webp",
    clientOverview:
      "A multinational customer services provider with siloed customer information spanning on-premise ERPs, streaming web events, and fragmented CRM instances.",
    challenge: [
      "Fragmented data across legacy databases preventing a single customer view.",
      "Inability to react in real-time to high-value user triggers or support requests.",
      "Manual batch synchronization resulting in stale data and duplicate communications.",
    ],
    solution: [
      "Engineered a SaaS-based customer engagement hub connecting instantly to any application.",
      "Implemented bi-directional connectors for streaming data, custom ERPs, and marketing suites.",
      "Standardized data schema validation and automated duplicate resolution.",
    ],
    architecture: [
      "Apache Kafka Event Bus",
      "Snowflake Data Lakehouse",
      "Custom REST & GraphQL Integration Gateway",
      "Automated dbt Data Modeling",
    ],
    metrics: [
      { value: "360°", label: "Unified Real-Time Customer Profile" },
      { value: "85%", label: "Reduction in Data Synchronization Latency" },
      { value: "3.2x", label: "Higher Campaign Engagement" },
    ],
  },
  "testing-automation": {
    title: "Enhancing Retail Performance with Test Automation",
    subtitle: "Accelerating Software Velocity with Reusable Frameworks & Continuous Testing",
    category: "QA & Test Automation",
    bgImage: "/assets/pexels-rodnae-productions-7915289.webp",
    clientOverview:
      "A prominent retail solutions developer with bi-weekly release cadences struggling with extensive manual regression testing bottlenecks across web and mobile platforms.",
    challenge: [
      "Manual test execution cycles required 5 days before each production deployment.",
      "Intermittent UI test flakiness leading to false negatives and delayed sprints.",
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
    ],
    metrics: [
      { value: "40%", label: "Reduction in Script Development Effort" },
      { value: "75%", label: "Faster Regression Execution Time" },
      { value: "94%", label: "Automated Critical Path Test Coverage" },
    ],
  },
  "building-a-storefront": {
    title: "Beyond Building a Storefront",
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
    ],
    metrics: [
      { value: "0", label: "Hours of Customer-Facing Downtime" },
      { value: "62%", label: "Reduction in Fraud Investigation Delays" },
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
    ],
    metrics: [
      { value: "10,000+", label: "Transactions Processed Per Second" },
      { value: "<150ms", label: "Average Real-Time Settlement Latency" },
      { value: "100%", label: "Regulatory Compliance Audit Passed" },
    ],
  },
  "cloud-transformation-journey": {
    title: "A Cloud Transformation Journey",
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
      "Formulated an phased migration blueprint leveraging Infrastructure-as-Code and containerization.",
      "Refactored stateful databases to managed multi-zone cloud database instances with automated failover.",
      "Implemented continuous FinOps cost governance and automated workload shutdown rules.",
    ],
    architecture: [
      "Microsoft Azure Multi-Region Cloud",
      "Terraform Infrastructure as Code",
      "Azure Kubernetes Service (AKS)",
      "Automated DR with Geo-Replication",
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
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Banner */}
      <div className="bg-[#1c2438] text-white py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${data.bgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c2438] via-[#1c2438]/90 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/#solutions"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#85c4ff] hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Solutions</span>
          </Link>

          <div className="inline-block px-3.5 py-1 rounded bg-[#236cb1]/40 border border-[#2faae1]/50 text-[#2faae1] text-xs font-bold uppercase tracking-wider mb-4 ml-4">
            {data.category}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 max-w-4xl">
            {data.title}
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl leading-relaxed mb-8 font-light">
            {data.subtitle}
          </p>
        </div>
      </div>

      {/* Metrics Banner */}
      <div className="bg-sky-50 border-y border-sky-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {data.metrics.map((m, idx) => (
              <div key={idx} className="p-4">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#236cb1] mb-1">
                  {m.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-600">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div>
              <h2 className="text-2xl font-bold text-[#29344a] mb-4">
                Client Background
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                {data.clientOverview}
              </p>
            </div>

            {/* Challenges */}
            <div>
              <h2 className="text-2xl font-bold text-[#29344a] mb-4">
                The Business Challenge
              </h2>
              <div className="space-y-3">
                {data.challenge.map((c, i) => (
                  <div key={i} className="flex items-start gap-3 text-gray-700 text-base">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-2xl font-bold text-[#29344a] mb-4">
                The VueData Solution
              </h2>
              <div className="space-y-3">
                {data.solution.map((s, i) => (
                  <div key={i} className="flex items-start gap-3 text-gray-700 text-base">
                    <CheckCircle2 className="w-5 h-5 text-[#236cb1] mt-0.5 shrink-0" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture */}
            <div>
              <h2 className="text-2xl font-bold text-[#29344a] mb-4">
                Architecture &amp; Key Technologies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.architecture.map((tech, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg bg-gray-50 border border-gray-100 flex items-center gap-3 text-sm font-medium text-gray-800"
                  >
                    <Cpu className="w-4 h-4 text-[#2faae1] shrink-0" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 p-8 rounded-2xl bg-gradient-to-br from-[#1c2438] to-[#29344a] text-white shadow-xl">
              <h3 className="text-xl font-bold mb-3">
                Need Similar Results for Your Business?
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                Consult with VueData&apos;s solution architects to design a customized strategy tailored for your enterprise growth.
              </p>
              <Link
                href="/#contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#236cb1] hover:bg-[#1a5288] text-white py-3 px-5 rounded-lg text-sm font-semibold transition-all shadow-md"
              >
                <span>Request Case Study Brief</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
