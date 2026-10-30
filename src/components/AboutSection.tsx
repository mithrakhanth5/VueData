"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe2, Award, Zap, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2864FF]/10 text-[#2864FF] text-xs font-bold tracking-wider uppercase">
              About VueData Technologies
            </div>

            <h2 className="section-title font-extrabold text-[#071426] tracking-tight">
              A Global Engineering Firm with Sharp Focus on Digital Excellence.
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              VueData is a global information technology consulting and engineering firm specializing in corporate IT services, cloud systems, and generative AI. We address complex enterprise problems through niche technologies and bespoke innovative software solutions.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Operating across our headquarters in Seattle and offshore innovation hubs in Chennai and Bengaluru, we partner with world-renowned brands to architect, modernize, and run mission-critical digital ecosystems.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2864FF] mt-0.5 shrink-0" />
                <span className="text-sm font-medium text-gray-800">
                  Practiced 5DS Agile Engineering Methodology
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00C2E8] mt-0.5 shrink-0" />
                <span className="text-sm font-medium text-gray-800">
                  Microsoft Gold Certified Enterprise Partner
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#7657F6] mt-0.5 shrink-0" />
                <span className="text-sm font-medium text-gray-800">
                  ISO 27001 Certified Security &amp; Compliance
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2864FF] mt-0.5 shrink-0" />
                <span className="text-sm font-medium text-gray-800">
                  Dedicated 24/7 Global Delivery Capabilities
                </span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#2864FF] hover:text-[#00C2E8] transition-colors group"
              >
                <span>Learn about our culture and leadership</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Metrics Grid - Thoughtworks/Accenture style */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-[#F4F7FB] border border-gray-100 shadow-sm flex flex-col justify-between">
              <Globe2 className="w-8 h-8 text-[#2864FF] mb-4" />
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#071426] mb-1">
                  3+
                </div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Global Delivery Hubs
                </div>
                <p className="text-[11px] text-gray-400 mt-1">USA, Chennai &amp; Bengaluru</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#071426] text-white shadow-xl flex flex-col justify-between border border-white/10">
              <Award className="w-8 h-8 text-[#00C2E8] mb-4" />
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                  15+
                </div>
                <div className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Years of Innovation
                </div>
                <p className="text-[11px] text-gray-400 mt-1">Serving Global Enterprises</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C1D35] text-white shadow-xl flex flex-col justify-between border border-white/10">
              <Zap className="w-8 h-8 text-[#7657F6] mb-4" />
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                  5
                </div>
                <div className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Proprietary SaaS Platforms
                </div>
                <p className="text-[11px] text-gray-400 mt-1">Stream, Database &amp; AI Tools</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F4F7FB] border border-gray-100 shadow-sm flex flex-col justify-between">
              <Users className="w-8 h-8 text-[#2864FF] mb-4" />
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#071426] mb-1">
                  100%
                </div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Client Commitment
                </div>
                <p className="text-[11px] text-gray-400 mt-1">Tailored SLA Execution</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
