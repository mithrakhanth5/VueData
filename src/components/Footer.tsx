"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { asset } from "../lib/assets";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "AI / ML Services", href: "/services/ai-ml" },
    { name: "Cloud Solutions", href: "/services/cloud-solutions" },
    { name: "Analytics & Reporting", href: "/services/analytics" },
    { name: "Application Development", href: "/services/application-services" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Service Management", href: "/services/service-management" },
  ];

  const products = [
    { name: "Go-BOSS", href: "https://www.go-boss.com/" },
    { name: "DB-DaaS", href: "https://www.db-daas.com/" },
    { name: "Perchat.ai", href: "https://www.perchat.ai/" },
    { name: "ShipKasa", href: "https://www.shipkasa.com/" },
    { name: "PageRank.ai", href: "https://www.pagerank.ai/" },
  ];

  const solutions = [
    { name: "E-Commerce Scalability", href: "/solutions/e-commerce-casestudy" },
    { name: "Data Integration Hub", href: "/solutions/data-integration-casestudy" },
    { name: "Test Automation Engine", href: "/solutions/testing-automation" },
    { name: "Platform Migration", href: "/solutions/building-a-storefront" },
    { name: "Scaling Payment Gateways", href: "/solutions/payments-solution" },
    { name: "Cloud Transformation", href: "/solutions/cloud-transformation-journey" },
  ];

  return (
    <footer className="bg-[#071426] text-white border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Branding & Multi-Column Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          {/* Brand Info & Mission */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <img
                src={asset("/assets/vuedata light.png")}
                alt="VueData Technologies"
                className="h-8 w-auto object-contain"
              />
            </Link>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              VueData is an international technology consulting and engineering firm delivering AI solutions, enterprise application architectures, and cloud modernization to leading Fortune 500 enterprises.
            </p>

            {/* Certifications and Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="bg-white/5 p-2 rounded-xl border border-white/10">
                <img
                  src={asset("/assets/Webp.net-resizeimage.png")}
                  alt="Microsoft Solutions Partner"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="bg-white p-1.5 rounded-xl border border-white/10">
                <img
                  src={asset("/assets/Webp.net-resizeimage iso.png")}
                  alt="ISO Certified Standard"
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#00C2E8]">
              Capabilities
            </h4>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs text-gray-400 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#2864FF]">
              Case Studies
            </h4>
            <ul className="space-y-2.5">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs text-gray-400 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#7657F6]">
              Products
            </h4>
            <ul className="space-y-2.5">
              {products.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-400 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-gray-500 group-hover:text-white" />
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/careers"
                  className="text-xs font-bold text-[#00C2E8] hover:underline"
                >
                  Careers &amp; Jobs &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-Footer: Legal, Copyright & Socials */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-400">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <span>&copy; {currentYear} VueData Technologies. All rights reserved.</span>
            <span className="text-gray-600">|</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Terms of Use &amp; Privacy Policy
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            <a
              href="https://www.linkedin.com/company/vuedata-technologies-private-limited"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="VueData on LinkedIn"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#00C2E8] hover:bg-white/10 transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/iamvuedata"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="VueData on Twitter"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#00C2E8] hover:bg-white/10 transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/vuedata"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="VueData on Facebook"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#00C2E8] hover:bg-white/10 transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
