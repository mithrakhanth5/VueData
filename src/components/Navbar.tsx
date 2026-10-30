"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Sparkles,
  Cloud,
  Code2,
  Database,
  Megaphone,
  Settings,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Building2,
  Briefcase,
} from "lucide-react";
import { asset } from "../lib/assets";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hasSolidNav = isScrolled || !isHomePage;

  const services = [
    {
      title: "AI / ML Services",
      desc: "Generative AI, enterprise LLMs, RAG & agentic workflows",
      href: "/services/ai-ml",
      icon: Sparkles,
      tag: "Next-Gen",
    },
    {
      title: "Cloud Solutions",
      desc: "Azure, AWS, GCP architectures & seamless modernization",
      href: "/services/cloud-solutions",
      icon: Cloud,
      tag: "Hyperscale",
    },
    {
      title: "Analytics & Big Data",
      desc: "Lakehouses, real-time telemetry & executive intelligence",
      href: "/services/analytics",
      icon: Database,
      tag: "Data 360",
    },
    {
      title: "Application Engineering",
      desc: "Cloud-native web, mobile systems & microservices",
      href: "/services/application-services",
      icon: Code2,
      tag: "Full-Stack",
    },
    {
      title: "Digital Marketing",
      desc: "Performance marketing, SEO, AEO & lifecycle CRM",
      href: "/services/digital-marketing",
      icon: Megaphone,
      tag: "Growth",
    },
    {
      title: "Service Management",
      desc: "ITIL alignment, 24/7 SRE, observability & disaster recovery",
      href: "/services/service-management",
      icon: Settings,
      tag: "Resilience",
    },
  ];

  const products = [
    {
      name: "Go-BOSS",
      desc: "End-to-end streaming media infrastructure & OTT monetization platform",
      url: "https://www.go-boss.com/",
      category: "Media Tech",
    },
    {
      name: "DB-DaaS",
      desc: "Database release automation platform embedded directly in CI/CD",
      url: "https://www.db-daas.com/",
      category: "Database Ops",
    },
    {
      name: "Perchat.ai",
      desc: "AI-native conversational engine for autonomous enterprise support",
      url: "https://www.perchat.ai/",
      category: "Enterprise AI",
    },
    {
      name: "ShipKasa",
      desc: "Multi-carrier shipping fulfillment API & label generation engine",
      url: "https://www.shipkasa.com/",
      category: "Logistics SaaS",
    },
    {
      name: "PageRank.ai",
      desc: "Generative engine optimization (GEO/AEO) & search visibility suite",
      url: "https://www.pagerank.ai/",
      category: "AI Marketing",
    },
  ];

  const solutions = [
    {
      title: "E-Commerce Scalability",
      desc: "Modular headless commerce platforms built for Black Friday peaks",
      href: "/solutions/e-commerce-casestudy",
    },
    {
      title: "Customer Data 360",
      desc: "Omnichannel customer engagement hub with unified live streaming data",
      href: "/solutions/data-integration-casestudy",
    },
    {
      title: "Test Automation Engine",
      desc: "40% reduction in testing effort via reusable test automation frameworks",
      href: "/solutions/testing-automation",
    },
    {
      title: "Inter-Bank Payments",
      desc: "High-throughput clearing & settlement platforms with zero downtime",
      href: "/solutions/payments-solution",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasSolidNav
          ? "bg-[#071426]/90 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src={asset("/assets/vuedata light.png")}
              alt="VueData Technologies"
              className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className="px-3.5 py-2 text-xs font-semibold tracking-wider text-gray-200 hover:text-[#00C2E8] transition-colors rounded-lg"
            >
              HOME
            </Link>

            {/* Services Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("services")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className={`flex items-center gap-1 px-3.5 py-2 text-xs font-semibold tracking-wider transition-colors rounded-lg ${
                  activeMenu === "services"
                    ? "text-[#00C2E8] bg-white/5"
                    : "text-gray-200 hover:text-[#00C2E8]"
                }`}
              >
                SERVICES
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeMenu === "services" ? "rotate-180 text-[#00C2E8]" : ""
                  }`}
                />
              </button>

              {/* Mega Dropdown */}
              <div
                className={`absolute top-full -left-20 w-[640px] bg-[#0C1D35]/95 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-2xl p-6 transition-all duration-200 ${
                  activeMenu === "services"
                    ? "opacity-100 visible translate-y-2"
                    : "opacity-0 invisible pointer-events-none translate-y-0"
                }`}
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#00C2E8]">
                    Capabilities &amp; Practices
                  </span>
                  <Link
                    href="/#services"
                    className="text-[11px] font-semibold text-gray-400 hover:text-white flex items-center gap-1"
                  >
                    View All Practices <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {services.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="group/item flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#2864FF]/20 text-[#00C2E8] flex items-center justify-center shrink-0 group-hover/item:bg-[#2864FF] group-hover/item:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-white group-hover/item:text-[#00C2E8] transition-colors">
                              {item.title}
                            </span>
                            <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-white/10 text-gray-300 font-mono">
                              {item.tag}
                            </span>
                          </div>
                          <p className="text-[11px] text-gray-400 line-clamp-1 mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("products")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className={`flex items-center gap-1 px-3.5 py-2 text-xs font-semibold tracking-wider transition-colors rounded-lg ${
                  activeMenu === "products"
                    ? "text-[#00C2E8] bg-white/5"
                    : "text-gray-200 hover:text-[#00C2E8]"
                }`}
              >
                PRODUCTS
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeMenu === "products" ? "rotate-180 text-[#00C2E8]" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute top-full -left-10 w-[440px] bg-[#0C1D35]/95 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-2xl p-5 transition-all duration-200 ${
                  activeMenu === "products"
                    ? "opacity-100 visible translate-y-2"
                    : "opacity-0 invisible pointer-events-none translate-y-0"
                }`}
              >
                <div className="text-xs font-bold uppercase tracking-widest text-[#00C2E8] border-b border-white/10 pb-2 mb-3">
                  Enterprise Software Suite
                </div>
                <div className="space-y-2">
                  {products.map((prod) => (
                    <a
                      key={prod.name}
                      href={prod.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/prod flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white group-hover/prod:text-[#00C2E8] transition-colors">
                            {prod.name}
                          </span>
                          <span className="text-[10px] text-gray-400 font-mono">
                            ({prod.category})
                          </span>
                        </div>
                        <p className="text-[11px] text-gray-400 line-clamp-1 mt-0.5">
                          {prod.desc}
                        </p>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover/prod:text-[#00C2E8] transition-colors shrink-0 ml-2" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("solutions")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className={`flex items-center gap-1 px-3.5 py-2 text-xs font-semibold tracking-wider transition-colors rounded-lg ${
                  activeMenu === "solutions"
                    ? "text-[#00C2E8] bg-white/5"
                    : "text-gray-200 hover:text-[#00C2E8]"
                }`}
              >
                SOLUTIONS
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeMenu === "solutions" ? "rotate-180 text-[#00C2E8]" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute top-full -left-20 w-[480px] bg-[#0C1D35]/95 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-2xl p-5 transition-all duration-200 ${
                  activeMenu === "solutions"
                    ? "opacity-100 visible translate-y-2"
                    : "opacity-0 invisible pointer-events-none translate-y-0"
                }`}
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#00C2E8]">
                    Industry Impact &amp; Case Studies
                  </span>
                  <Link
                    href="/#solutions"
                    className="text-[11px] font-semibold text-gray-400 hover:text-white"
                  >
                    View All Case Studies &rarr;
                  </Link>
                </div>
                <div className="space-y-2">
                  {solutions.map((sol) => (
                    <Link
                      key={sol.title}
                      href={sol.href}
                      className="group/sol block p-2.5 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
                    >
                      <div className="text-xs font-bold text-white group-hover/sol:text-[#00C2E8] transition-colors">
                        {sol.title}
                      </div>
                      <p className="text-[11px] text-gray-400 line-clamp-1 mt-0.5">
                        {sol.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/careers"
              className="px-3.5 py-2 text-xs font-semibold tracking-wider text-gray-200 hover:text-[#00C2E8] transition-colors rounded-lg"
            >
              CAREERS
            </Link>

            <Link
              href="/#about"
              className="px-3.5 py-2 text-xs font-semibold tracking-wider text-gray-200 hover:text-[#00C2E8] transition-colors rounded-lg"
            >
              ABOUT
            </Link>
          </nav>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/#contact"
              className="relative group overflow-hidden px-5 py-2 rounded-full font-semibold text-xs text-white bg-gradient-to-r from-[#2864FF] to-[#00C2E8] hover:from-[#1f52d6] hover:to-[#00a9cb] shadow-lg shadow-blue-600/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Let&apos;s Talk <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-gray-200 hover:text-white bg-white/5 border border-white/10 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#00C2E8]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#071426] border-b border-white/10 px-6 py-8 space-y-6 max-h-[85vh] overflow-y-auto">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-bold tracking-wider text-white hover:text-[#00C2E8]"
          >
            HOME
          </Link>

          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-[#00C2E8] mb-3">
              Services
            </div>
            <div className="space-y-2.5 pl-3 border-l border-white/10">
              {services.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-xs font-medium text-gray-300 hover:text-white"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-[#00C2E8] mb-3">
              Products
            </div>
            <div className="space-y-2.5 pl-3 border-l border-white/10">
              {products.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between text-xs font-medium text-gray-300 hover:text-white"
                >
                  <span>{item.name}</span>
                  <ExternalLink className="w-3 h-3 text-gray-500" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-[#00C2E8] mb-3">
              Solutions &amp; Case Studies
            </div>
            <div className="space-y-2.5 pl-3 border-l border-white/10">
              {solutions.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-xs font-medium text-gray-300 hover:text-white"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6 pt-2">
            <Link
              href="/careers"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xs font-semibold text-gray-200 hover:text-[#00C2E8]"
            >
              CAREERS
            </Link>
            <Link
              href="/#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xs font-semibold text-gray-200 hover:text-[#00C2E8]"
            >
              ABOUT US
            </Link>
          </div>

          <div className="pt-4">
            <Link
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3 rounded-full text-center text-xs font-bold bg-gradient-to-r from-[#2864FF] to-[#00C2E8] text-white flex items-center justify-center gap-2"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
