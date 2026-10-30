"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // For non-home pages, keep white navbar for readability
  const hasSolidNav = isScrolled || !isHomePage;

  const services = [
    { name: "APPLICATION SERVICES", href: "/services/application-services" },
    { name: "AI / ML SERVICES", href: "/services/ai-ml" },
    { name: "ANALYTICS AND REPORTING", href: "/services/analytics" },
    { name: "DIGITAL MARKETING", href: "/services/digital-marketing" },
    { name: "SERVICE MANAGEMENT", href: "/services/service-management" },
  ];

  const products = [
    { name: "DB-DAAS", href: "https://www.db-daas.com/", external: true },
    { name: "Go-BOSS", href: "https://www.go-boss.com/", external: true },
    { name: "Perchat.ai", href: "https://www.perchat.ai/", external: true },
    { name: "ShipKasa", href: "https://www.shipkasa.com/", external: true },
    { name: "PageRank.ai", href: "https://www.pagerank.ai/", external: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasSolidNav
          ? "bg-white shadow-[0_2px_15px_rgba(0,0,0,0.08)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {hasSolidNav ? (
              <img
                src="/assets/vuedata-blue.webp"
                alt="VueData"
                className="h-6 md:h-7 w-auto object-contain transition-all"
              />
            ) : (
              <img
                src="/assets/vuedata light.png"
                alt="VueData"
                className="h-6 md:h-7 w-auto object-contain transition-all"
              />
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            <Link
              href="/#home"
              className={`text-xs font-semibold tracking-wider transition-colors duration-200 ${
                hasSolidNav
                  ? "text-[#29344a] hover:text-[#236cb1]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              HOME
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 text-xs font-semibold tracking-wider transition-colors duration-200 py-2 ${
                  hasSolidNav
                    ? "text-[#29344a] hover:text-[#236cb1]"
                    : "text-white/90 hover:text-white"
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                SERVICES
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 w-64 bg-white rounded-md shadow-xl border border-gray-100 py-2 transition-all duration-200 ${
                  servicesDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                }`}
              >
                {services.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2.5 text-xs font-medium text-gray-700 hover:text-[#236cb1] hover:bg-sky-50/60 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Solutions Link */}
            <Link
              href="/#solutions"
              className={`text-xs font-semibold tracking-wider transition-colors duration-200 ${
                hasSolidNav
                  ? "text-[#29344a] hover:text-[#236cb1]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              SOLUTIONS
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 text-xs font-semibold tracking-wider transition-colors duration-200 py-2 ${
                  hasSolidNav
                    ? "text-[#29344a] hover:text-[#236cb1]"
                    : "text-white/90 hover:text-white"
                }`}
                aria-expanded={productsDropdownOpen}
              >
                PRODUCTS
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              <div
                className={`absolute top-full left-0 w-52 bg-white rounded-md shadow-xl border border-gray-100 py-2 transition-all duration-200 ${
                  productsDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                }`}
              >
                {products.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2.5 text-xs font-medium text-gray-700 hover:text-[#236cb1] hover:bg-sky-50/60 transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Careers */}
            <Link
              href="/careers"
              className={`text-xs font-semibold tracking-wider transition-colors duration-200 ${
                hasSolidNav
                  ? "text-[#29344a] hover:text-[#236cb1]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              CAREERS
            </Link>

            {/* Contact Button */}
            <Link
              href="/#contact"
              className={`text-xs font-semibold px-5 py-2 rounded transition-all duration-200 border ${
                hasSolidNav
                  ? "border-[#236cb1] text-[#236cb1] hover:bg-[#236cb1] hover:text-white"
                  : "border-white/80 text-white hover:bg-white hover:text-[#236cb1]"
              }`}
            >
              CONTACT
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${
                hasSolidNav ? "text-gray-800" : "text-white"
              } focus:outline-none`}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
          <Link
            href="/#home"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-semibold tracking-wider text-[#29344a] hover:text-[#236cb1]"
          >
            HOME
          </Link>

          <div>
            <div className="text-xs font-bold text-gray-400 tracking-wider mb-2">
              SERVICES
            </div>
            <div className="pl-3 space-y-2 border-l-2 border-sky-100">
              {services.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-xs font-medium text-gray-700 hover:text-[#236cb1]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/#solutions"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-semibold tracking-wider text-[#29344a] hover:text-[#236cb1]"
          >
            SOLUTIONS
          </Link>

          <div>
            <div className="text-xs font-bold text-gray-400 tracking-wider mb-2">
              PRODUCTS
            </div>
            <div className="pl-3 space-y-2 border-l-2 border-sky-100">
              {products.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-xs font-medium text-gray-700 hover:text-[#236cb1]"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <Link
            href="/careers"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-semibold tracking-wider text-[#29344a] hover:text-[#236cb1]"
          >
            CAREERS
          </Link>

          <div className="pt-2">
            <Link
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center text-xs font-semibold py-2.5 px-4 rounded border border-[#236cb1] text-[#236cb1] hover:bg-[#236cb1] hover:text-white"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
