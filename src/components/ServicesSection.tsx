"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceItem {
  title: string;
  desc: string;
  image: string;
  href: string;
}

const services: ServiceItem[] = [
  {
    title: "AI/ML services",
    desc: "End-to-end AI solutions to optimize workflows, enhance productivity, and reduce costs.",
    image: "/assets/AI_part_2.webp",
    href: "/services/ai-ml",
  },
  {
    title: "Cloud Solutions",
    desc: "Help to navigate cloud opportunities and challenges",
    image: "/assets/cloud-services.webp",
    href: "/services/cloud-solutions",
  },
  {
    title: "Analytics & Reporting",
    desc: "Data warehousing, OLAP, Data mining and modeling",
    image: "/assets/analytics-services.webp",
    href: "/services/analytics",
  },
  {
    title: "Application Development",
    desc: "Rapid Application Development, Testing and Support",
    image: "/assets/magnet-me-beCkhUB5aIA-unsplash.webp",
    href: "/services/application-services",
  },
  {
    title: "Digital Marketing",
    desc: "Managing digital media and social platform campaigns to promote products and services",
    image: "/assets/digimarketing.webp",
    href: "/services/digital-marketing",
  },
  {
    title: "Service Management",
    desc: "Assessment, Audit, Roadmap Development, Disaster Recovery Planning",
    image: "/assets/data-management.webp",
    href: "/services/service-management",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-[#f7f8fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#29344a] tracking-tight">
            End-to-end expertise across Digital Ecosystem
          </h2>
          <div className="w-16 h-1 bg-[#236cb1] mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#29344a] group-hover:text-[#236cb1] transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>
                </div>

                <div className="flex items-center text-xs font-semibold text-[#236cb1] group-hover:text-[#1a5288] pt-2">
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
