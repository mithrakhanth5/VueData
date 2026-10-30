"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Heart, Target, Users, Sparkles } from "lucide-react";

export default function CareersSection() {
  return (
    <section id="careers" className="py-24 bg-[#F4F7FB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#071426] via-[#0C1D35] to-[#152642] text-white shadow-2xl border border-white/10 p-8 sm:p-14 lg:p-20">
          {/* Ambient Lighting Accents */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2864FF]/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C2E8]/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-[#00C2E8] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Join VueData Engineering</span>
            </div>

            <h2 className="section-title font-extrabold text-white tracking-tight">
              Let&apos;s Build the Future of Tech Together.
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
              We&apos;re building an inclusive workplace at VueData where amazingly talented software engineers, data scientists, and creative architects can do their career-defining work.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <Heart className="w-6 h-6 text-rose-400 mb-2" />
                <h4 className="text-sm font-bold text-white mb-1">Care</h4>
                <p className="text-xs text-gray-400">Personal well-being, intellectual growth &amp; balance.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <Target className="w-6 h-6 text-[#00C2E8] mb-2" />
                <h4 className="text-sm font-bold text-white mb-1">Commit</h4>
                <p className="text-xs text-gray-400">Engineering excellence &amp; tangible client impact.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <Users className="w-6 h-6 text-[#7657F6] mb-2" />
                <h4 className="text-sm font-bold text-white mb-1">Commune</h4>
                <p className="text-xs text-gray-400">Collaborative global teams across USA &amp; India.</p>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/careers"
                className="btn-primary text-xs inline-flex items-center gap-2"
              >
                <span>Explore Curated Open Positions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
