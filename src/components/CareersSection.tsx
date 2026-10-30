"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CareersSection() {
  return (
    <section id="careers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-wider text-[#29344a] uppercase mb-4">
          CAREERS
        </h2>
        <div className="w-16 h-1 bg-[#236cb1] mx-auto rounded-full" />
      </div>

      <div className="relative w-full min-h-[480px] flex items-center justify-center overflow-hidden">
        {/* Background Image with dark overlay */}
        <div
          className="absolute inset-0 bg-cover bg-bottom z-0"
          style={{ backgroundImage: "url(/assets/career1.jpg)" }}
        />
        <div className="absolute inset-0 bg-black/65 z-10" />

        <div className="relative z-20 max-w-3xl mx-auto px-4 sm:px-6 text-center text-white py-16">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Let&apos;s grow together!
          </h3>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto mb-4 font-light">
            We&apos;re building a workplace at VueData where amazingly talented and creative people (like you) can be who they are and do their best work.
          </p>

          <p className="text-lg sm:text-xl font-medium text-white mb-8">
            Interested to know more?
          </p>

          <Link
            href="/careers"
            className="inline-flex items-center gap-2 bg-[#236cb1] hover:bg-[#1a5288] text-white px-8 py-3.5 rounded-lg font-semibold text-sm sm:text-base tracking-wide transition-all shadow-lg hover:shadow-blue-900/40 transform hover:-translate-y-0.5"
          >
            <span>See our curated jobs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
