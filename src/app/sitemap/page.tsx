import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ChevronRight, Layers } from "lucide-react";

export const metadata = {
  title: "Sitemap Directory | VueData Technologies",
  description:
    "Comprehensive site navigation map for VueData Technologies services, products, enterprise solutions, and career opportunities.",
};

interface SitemapLink {
  name: string;
  href: string;
  external?: boolean;
}

interface SitemapSection {
  title: string;
  links: SitemapLink[];
}

export default function SitemapPage() {
  const sections: SitemapSection[] = [
    {
      title: "Core Navigation",
      links: [
        { name: "Homepage", href: "/" },
        { name: "About VueData", href: "/#about" },
        { name: "Services & Capabilities", href: "/#services" },
        { name: "Solutions & Case Studies", href: "/#solutions" },
        { name: "Enterprise Products", href: "/#products" },
        { name: "Client Partnerships", href: "/#clients" },
        { name: "Careers & Jobs", href: "/careers" },
        { name: "Contact & Global Offices", href: "/#contact" },
      ],
    },
    {
      title: "Practices & Services",
      links: [
        { name: "AI / ML & Generative AI", href: "/services/ai-ml" },
        { name: "Cloud Solutions & Migration", href: "/services/cloud-solutions" },
        { name: "Analytics & Big Data Lakehouses", href: "/services/analytics" },
        { name: "Application Engineering (5DS)", href: "/services/application-services" },
        { name: "Digital Marketing & Growth", href: "/services/digital-marketing" },
        { name: "Service Management & 24/7 SRE", href: "/services/service-management" },
      ],
    },
    {
      title: "Solutions & Case Studies",
      links: [
        { name: "E-Commerce Scalability Study", href: "/solutions/e-commerce-casestudy" },
        { name: "Customer Data 360 Hub Study", href: "/solutions/data-integration-casestudy" },
        { name: "Test Automation Velocity Study", href: "/solutions/testing-automation" },
        { name: "Platform Migration & Decoupled Storefront", href: "/solutions/building-a-storefront" },
        { name: "Inter-Bank Payment Gateways Study", href: "/solutions/payments-solution" },
        { name: "Cloud Transformation & TCO Study", href: "/solutions/cloud-transformation-journey" },
      ],
    },
    {
      title: "Enterprise Products",
      links: [
        { name: "Go-BOSS (Streaming Platform)", href: "https://www.go-boss.com/", external: true },
        { name: "DB-DaaS (Database CI/CD Automation)", href: "https://www.db-daas.com/", external: true },
        { name: "Perchat.ai (Enterprise AI Chat)", href: "https://www.perchat.ai/", external: true },
        { name: "ShipKasa (Multi-Carrier Logistics)", href: "https://www.shipkasa.com/", external: true },
        { name: "PageRank.ai (AI SEO/AEO Visibility)", href: "https://www.pagerank.ai/", external: true },
      ],
    },
    {
      title: "Company & Compliance",
      links: [
        { name: "Careers & Open Positions", href: "/careers" },
        { name: "Privacy Policy & Security Guidelines", href: "/privacy-policy" },
        { name: "Global Offices (Seattle, Chennai, Bengaluru)", href: "/#contact" },
      ],
    },
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Header Banner */}
      <div className="bg-[#071426] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00C2E8] hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <div className="inline-block px-3 py-1 rounded bg-[#2864FF]/20 text-[#00C2E8] text-xs font-bold uppercase tracking-wider mb-4 ml-3">
            Navigation Index
          </div>
          <h1 className="hero-title font-extrabold tracking-tight text-white mb-4">
            VueData — Site Map Directory
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-3xl font-light">
            Comprehensive directory index to explore all services, engineering case studies, enterprise software products, and company information.
          </p>
        </div>
      </div>

      {/* Directory Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((sec, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#F4F7FB] border border-gray-200/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h2 className="text-base font-bold text-[#071426] border-b border-gray-200 pb-3 mb-4">
                  {sec.title}
                </h2>
                <ul className="space-y-3">
                  {sec.links.map((link, i) => (
                    <li key={i}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-medium text-gray-700 hover:text-[#2864FF] transition-colors group"
                        >
                          <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#2864FF] transition-colors" />
                          <span>{link.name}</span>
                          <ExternalLink className="w-3 h-3 text-gray-400" />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="inline-flex items-center gap-2 text-xs font-medium text-gray-700 hover:text-[#2864FF] transition-colors group"
                        >
                          <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#2864FF] transition-colors" />
                          <span>{link.name}</span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
