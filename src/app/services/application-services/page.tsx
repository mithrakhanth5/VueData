import React from "react";
import Link from "next/link";
import { Code2, Smartphone, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Application Services | VueData Technologies",
  description: "Optimize business processes and improve customer experiences with bespoke enterprise applications, mobile solutions, and agile delivery.",
};

export default function ApplicationServicesPage() {
  const offerings = [
    {
      title: "Custom Web & Enterprise Applications",
      desc: "Full-stack web architectures developed using modern React, Next.js, Node.js, .NET Core, and Python microservices for high throughput.",
      icon: Code2,
    },
    {
      title: "Native & Cross-Platform Mobile",
      desc: "Fluid mobile applications engineered with React Native, Flutter, Swift, and Kotlin that deliver intuitive experiences across iOS and Android.",
      icon: Smartphone,
    },
    {
      title: "Application Modernization & QA",
      desc: "Comprehensive testing automation, architectural refactoring, legacy rejuvenation, and continuous CI/CD delivery pipelines.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Banner */}
      <div className="bg-[#1c2438] text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-block px-3.5 py-1 rounded bg-[#236cb1]/30 border border-[#2faae1]/40 text-[#2faae1] text-xs font-bold uppercase tracking-wider mb-4">
            Services / Application Development
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 max-w-4xl">
            Optimize Business Processes and Improve the Overall Customer Experience
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 font-light">
            Our application services offer end-to-end software development, tailored to meet your specific business requirements with cutting-edge technologies. We work with our clients to devise customized customer-centric innovative solutions to deliver projects using Agile development models with built-in quality assurance processes.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#236cb1] hover:bg-[#1a5288] text-white px-7 py-3 rounded-lg font-semibold text-sm transition-all"
          >
            <span>Build Your Application</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#29344a]">
              The 5DS Engineering Methodology
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Backed and orchestrated with our well-defined and practiced 5DS methodology (Discover, Define, Design, Develop, Deploy &amp; Support), our engineering teams rapidly adapt, engage, and deliver creative solutions to complex business challenges.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We prioritize code maintainability, security from day one (DevSecOps), and test-driven development to ensure your software assets deliver lasting business value with minimal technical debt.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Human-centered UI/UX prototyping and user journey mapping",
                "Scalable microservices architecture with decoupled API gateways",
                "Automated end-to-end test suites and regression frameworks",
                "Continuous monitoring, SLA-backed maintenance, and proactive enhancements",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#236cb1] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img
                src="/assets/magnet-me-beCkhUB5aIA-unsplash.webp"
                alt="Agile Application Development"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {offerings.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-sky-100 text-[#236cb1] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#29344a] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
