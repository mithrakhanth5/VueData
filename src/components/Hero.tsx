"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Cpu, Activity } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-[#071426] text-white overflow-hidden pt-24 pb-16"
    >
      {/* Ambient Deep Space Cyber Glow & Digital Mesh */}
      <div className="absolute inset-0 bg-radial-gradient from-[#0C1D35] via-[#071426] to-[#040B15] pointer-events-none z-0" />

      {/* Cyber Grid & Ambient Lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 z-0 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#2864FF]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-[#00C2E8]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#7657F6]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Subtle Digital Circuit SVG Visual Accent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-15">
        <svg
          viewBox="0 0 1000 1000"
          className="w-[1200px] h-[1200px] animate-[spin_120s_linear_infinite]"
        >
          <circle
            cx="500"
            cy="500"
            r="380"
            fill="none"
            stroke="url(#hero-gradient)"
            strokeWidth="1.5"
            strokeDasharray="6 12"
          />
          <circle
            cx="500"
            cy="500"
            r="280"
            fill="none"
            stroke="url(#hero-gradient)"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
          <defs>
            <linearGradient id="hero-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2864FF" />
              <stop offset="50%" stopColor="#00C2E8" />
              <stop offset="100%" stopColor="#7657F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Futuristic Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:border-[#00C2E8]/40 transition-all">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C2E8] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C2E8]" />
          </span>
          <span className="text-xs font-semibold tracking-wider uppercase text-gray-300">
            Enterprise Digital Engineering &amp; AI
          </span>
          <span className="text-gray-500">|</span>
          <span className="text-xs text-[#00C2E8] font-mono">VueData 2026</span>
        </div>

        {/* Hero Headline */}
        <h1 className="hero-title font-extrabold max-w-5xl tracking-tight text-white mb-6">
          Engineering the Future of{" "}
          <span className="text-gradient-accent">Intelligent Digital</span>{" "}
          Experiences.
        </h1>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-10 font-normal">
          Empowering global enterprises through AI, enterprise software, cloud engineering, and high-velocity digital transformation.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <Link
            href="/#services"
            className="w-full sm:w-auto btn-primary group"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/#contact"
            className="w-full sm:w-auto btn-secondary"
          >
            <span>Let&apos;s Talk</span>
          </Link>
        </div>

        {/* Trust Badges & Telemetry Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl pt-8 border-t border-white/10">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm text-left">
            <div className="flex items-center gap-2 text-[#00C2E8] mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">AI-Native</span>
            </div>
            <p className="text-[11px] text-gray-400">Agentic &amp; Generative Solutions</p>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm text-left">
            <div className="flex items-center gap-2 text-[#2864FF] mb-1">
              <Cpu className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">Cloud First</span>
            </div>
            <p className="text-[11px] text-gray-400">Azure, AWS &amp; Multi-Cloud</p>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm text-left">
            <div className="flex items-center gap-2 text-[#7657F6] mb-1">
              <Shield className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">ISO Certified</span>
            </div>
            <p className="text-[11px] text-gray-400">Enterprise Security Standard</p>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm text-left">
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <Activity className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">99.99%</span>
            </div>
            <p className="text-[11px] text-gray-400">Mission-Critical Availability</p>
          </div>
        </div>
      </div>
    </section>
  );
}
