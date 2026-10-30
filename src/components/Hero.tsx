"use client";

import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] max-h-[1080px] overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover z-0"
      >
        <source src="/assets/vuedata-intro-6.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-tight md:leading-tight mb-8 drop-shadow-md">
          Delivering Global IT Services and Enterprise Solutions
        </h1>

        <div className="flex justify-center">
          <Link href="#contact" className="vuedata-btn">
            <span className="button__mask" />
            <span className="button__text">Learn More</span>
            <span className="button__text--bis">Learn More</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
