import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, Mail, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy & Terms of Use | VueData Technologies",
  description: "VueData's Data Security Guidelines, Privacy Statement, and Terms of Use.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Header Banner */}
      <div className="bg-[#1c2438] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#85c4ff] hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Data Security Guidelines &amp; Privacy Statement
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            VueData Technologies is dedicated to safeguarding the privacy and security of your personal and corporate information.
          </p>
        </div>
      </div>

      {/* Policy Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 text-gray-700 leading-relaxed text-sm sm:text-base">
        <section className="space-y-4">
          <div className="flex items-center gap-3 text-[#236cb1]">
            <ShieldCheck className="w-6 h-6" />
            <h2 className="text-xl sm:text-2xl font-bold text-[#29344a]">
              Commitment to Data Privacy
            </h2>
          </div>
          <p>
            At VueData, we are committed to protecting your privacy. We have created this privacy statement in order to demonstrate our firm commitment to privacy and data protection across our global operations. We do not sell, rent, or lease customer data or inquiries to third parties.
          </p>
          <p>
            This policy applies to all websites, web applications, and digital services owned and operated by VueData Technologies Inc. and VueData Technologies Private Limited.
          </p>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-3 text-[#236cb1]">
            <Lock className="w-6 h-6" />
            <h2 className="text-xl sm:text-2xl font-bold text-[#29344a]">
              Information Collection &amp; Use
            </h2>
          </div>
          <p>
            Our website uses contact and inquiry forms for visitors to request information, consultations, and professional services. We collect contact information (such as name, email address, telephone number, and company name) exclusively for the purpose of communicating about requested services and addressing client requirements.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Direct Submissions:</strong> Information you voluntarily submit via our contact form, career applications, or demo inquiries.
            </li>
            <li>
              <strong>Technical Telemetry:</strong> Standard non-identifying telemetry including browser type, operating system, and pages visited to optimize website performance and user experience.
            </li>
            <li>
              <strong>Security Logs:</strong> IP address logs maintained solely for cybersecurity defense, spam prevention, and server integrity monitoring.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#29344a]">
            Electronic Communications &amp; Opt-Out
          </h2>
          <p>
            If you subscribe to updates, technology whitepapers, or event notifications from VueData, you may opt out of receiving future communications at any time by following the unsubscribe instructions contained within each email or by contacting us directly.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#29344a]">
            Data Security &amp; ISO Certification Standards
          </h2>
          <p>
            VueData enforces rigorous technical and administrative security controls aligned with ISO 27001 data protection standards. All transmitted data is encrypted in transit using industry-standard TLS 1.3 cryptography, and access to internal databases is strictly restricted by role-based access control (RBAC).
          </p>
        </section>

        <section className="p-8 rounded-xl bg-gray-50 border border-gray-200 space-y-3">
          <div className="flex items-center gap-2 font-bold text-[#29344a] text-lg">
            <Mail className="w-5 h-5 text-[#236cb1]" />
            <h3>Contacting the Data Protection Officer</h3>
          </div>
          <p className="text-sm text-gray-600">
            If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact our security team at:
          </p>
          <p className="text-sm font-semibold text-[#236cb1]">
            privacy@vuedata.com • +1 425 968 2073
          </p>
        </section>
      </div>
    </div>
  );
}
