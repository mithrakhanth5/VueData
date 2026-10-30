"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright and Legal links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs sm:text-sm text-gray-500 font-medium">
            <span>Copyright &copy; {currentYear} VueData</span>
            <span className="text-gray-300">|</span>
            <Link
              href="/sitemap"
              className="hover:text-[#236cb1] transition-colors"
            >
              Sitemap
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/privacy-policy"
              className="hover:text-[#236cb1] transition-colors"
            >
              Terms of Use &amp; Privacy
            </Link>
          </div>

          {/* Partner & Certification Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center">
              <img
                src="/assets/Webp.net-resizeimage.png"
                alt="Microsoft Solutions Partner"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
            <div className="flex items-center bg-gray-50 p-1.5 rounded-lg border border-gray-200">
              <img
                src="/assets/Webp.net-resizeimage iso.png"
                alt="ISO Standard Certified"
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/company/vuedata-technologies-private-limited"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="VueData on LinkedIn"
              className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-[#29344a] hover:bg-[#236cb1] hover:text-white transition-all"
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
              className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-[#29344a] hover:bg-[#236cb1] hover:text-white transition-all"
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
              className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-[#29344a] hover:bg-[#236cb1] hover:text-white transition-all"
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
