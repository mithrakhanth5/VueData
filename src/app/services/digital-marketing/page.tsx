import React from "react";
import Link from "next/link";
import { Megaphone, Search, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Digital Marketing | VueData Technologies",
  description: "Increase brand awareness and engage with customers in a targeted and measurable way through performance marketing, SEO, and email automation.",
};

export default function DigitalMarketingPage() {
  const channels = [
    {
      title: "Omnichannel Performance Marketing",
      desc: "Data-driven paid media campaigns across Google Ads, Meta, LinkedIn, and programmatic display optimized for high conversion and low customer acquisition costs.",
      icon: Megaphone,
    },
    {
      title: "SEO, AEO & Content Strategy",
      desc: "Advanced search engine optimization and artificial engine optimization (AEO) to secure prominent visibility on search engines, voice assistants, and AI answer engines.",
      icon: Search,
    },
    {
      title: "Enterprise Email Automation & CRM",
      desc: "VueData's custom EM Framework leveraging Salesforce Marketing Cloud, HubSpot, Mailchimp, and Marketo for personalized drip campaigns and behavioral retention.",
      icon: Mail,
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Banner */}
      <div className="bg-[#1c2438] text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-block px-3.5 py-1 rounded bg-[#236cb1]/30 border border-[#2faae1]/40 text-[#2faae1] text-xs font-bold uppercase tracking-wider mb-4">
            Services / Digital Marketing
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 max-w-4xl">
            Increase Brand Awareness and Engage with Customers in a Targeted, Measurable Way
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 font-light">
            Working with your marketing team&apos;s Digital Marketing Transformation journey, our experts partner and work all through the shift from a traditional or partially digitized marketing process to a state where we enable, refine, and optimize all your digital touchpoints.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#236cb1] hover:bg-[#1a5288] text-white px-7 py-3 rounded-lg font-semibold text-sm transition-all"
          >
            <span>Amplify Your Reach</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#29344a]">
              Data-Led Customer Acquisition &amp; Retention
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We use a variety of analytics tools and attribution modeling techniques that provide clarity and deep insights into your customer&apos;s journey from first impression to repeat purchase.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Engage with our email marketing specialists to understand how VueData&apos;s custom EM Framework can turnaround your lifecycle marketing, powered by rigorous A/B testing and algorithmic audience segmentation.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Multi-touch attribution and full-funnel conversion tracking",
                "Conversion rate optimization (CRO) and personalized landing page funnels",
                "Creative asset production tailored for high-engagement social formats",
                "Marketing automation integrated seamlessly with your enterprise CRM",
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
                src="/assets/digimarketing.webp"
                alt="Digital Marketing Campaigns"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {channels.map((chan, i) => {
            const Icon = chan.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-sky-100 text-[#236cb1] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#29344a] mb-3">
                  {chan.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {chan.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
