import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Sitemap | VueData Technologies",
  description: "Comprehensive site navigation map for VueData Technologies services, products, solutions, and careers.",
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
      title: "Main Navigation",
      links: [
        { name: "Home", href: "/" },
        { name: "Services", href: "/#services" },
        { name: "Solutions", href: "/#solutions" },
        { name: "Products", href: "/#products" },
        { name: "Clients", href: "/#clients" },
        { name: "Careers", href: "/careers" },
        { name: "Contact Us", href: "/#contact" },
      ],
    },
    {
      title: "Services & Capabilities",
      links: [
        { name: "AI / ML Services", href: "/services/ai-ml" },
        { name: "Cloud Solutions", href: "/services/cloud-solutions" },
        { name: "Analytics & Reporting", href: "/services/analytics" },
        { name: "Application Development", href: "/services/application-services" },
        { name: "Digital Marketing", href: "/services/digital-marketing" },
        { name: "Service Management", href: "/services/service-management" },
      ],
    },
    {
      title: "Enterprise Solutions & Case Studies",
      links: [
        { name: "E-commerce Case Study", href: "/solutions/e-commerce-casestudy" },
        { name: "Data Integration Case Study", href: "/solutions/data-integration-casestudy" },
        { name: "Test Automation Case Study", href: "/solutions/testing-automation" },
        { name: "Beyond Building a Storefront", href: "/solutions/building-a-storefront" },
        { name: "Scaling Payment Solutions", href: "/solutions/payments-solution" },
        { name: "Cloud Transformation Journey", href: "/solutions/cloud-transformation-journey" },
      ],
    },
    {
      title: "Enterprise Products",
      links: [
        { name: "DB-DAAS", href: "https://www.db-daas.com/", external: true },
        { name: "Go-BOSS", href: "https://www.go-boss.com/", external: true },
        { name: "Perchat.ai", href: "https://www.perchat.ai/", external: true },
        { name: "ShipKasa", href: "https://www.shipkasa.com/", external: true },
        { name: "PageRank.ai", href: "https://www.pagerank.ai/", external: true },
      ],
    },
    {
      title: "Company & Legal",
      links: [
        { name: "Careers & Open Positions", href: "/careers" },
        { name: "Terms of Use & Privacy Policy", href: "/privacy-policy" },
        { name: "Office Locations (Seattle, Chennai, Bengaluru)", href: "/#contact" },
      ],
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Header Banner */}
      <div className="bg-[#1c2438] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#85c4ff] hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            VueData — Site Map Directory
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Easily locate and navigate through all services, solutions, enterprise products, and corporate information across VueData Technologies.
          </p>
        </div>
      </div>

      {/* Directory Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sections.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-lg font-bold text-[#236cb1] border-b border-gray-200 pb-2">
                {sec.title}
              </h2>
              <ul className="space-y-2.5">
                {sec.links.map((link, i) => (
                  <li key={i}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-gray-700 hover:text-[#236cb1] transition-colors"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                        <span>{link.name}</span>
                        <ExternalLink className="w-3 h-3 text-gray-400" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-gray-700 hover:text-[#236cb1] transition-colors"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                        <span>{link.name}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
