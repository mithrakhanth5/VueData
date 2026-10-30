import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, Mail, ArrowLeft, FileText, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Privacy Statement & Data Governance | VueData Technologies",
  description: "VueData's Enterprise Data Security Guidelines, Privacy Statement, and ISO 27001 Compliance Policies.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20 bg-white">
      {/* Header Banner */}
      <div className="bg-[#071426] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00C2E8] hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <div className="inline-block px-3 py-1 rounded bg-[#2864FF]/20 text-[#00C2E8] text-xs font-bold uppercase tracking-wider mb-4 ml-3">
            Governance &amp; Trust
          </div>
          <h1 className="hero-title font-extrabold tracking-tight text-white mb-4">
            Data Security Guidelines &amp; Privacy Statement
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-3xl font-light">
            VueData Technologies is committed to preserving the privacy, confidentiality, and integrity of corporate and customer information across all global engagements.
          </p>
        </div>
      </div>

      {/* Main Legal Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12 text-gray-700 leading-relaxed text-sm sm:text-base">
        <section className="space-y-4">
          <div className="flex items-center gap-3 text-[#2864FF]">
            <ShieldCheck className="w-6 h-6 text-[#00C2E8]" />
            <h2 className="text-2xl font-bold text-[#071426]">
              Firm Commitment to Data Privacy
            </h2>
          </div>
          <p>
            At VueData, protecting privacy is central to our engineering ethos. We have authored this statement to articulate our strict data handling, encryption, and governance standards across our US headquarters and international development centers. We never sell, rent, or lease personal or corporate data to external third parties.
          </p>
          <p>
            This policy applies across all software products, web platforms, and managed infrastructure owned and administered by VueData Technologies Inc. and VueData Technologies Private Limited.
          </p>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-3 text-[#2864FF]">
            <Lock className="w-6 h-6 text-[#2864FF]" />
            <h2 className="text-2xl font-bold text-[#071426]">
              Collection &amp; Legitimate Processing of Information
            </h2>
          </div>
          <p>
            Our web properties utilize structured forms for clients to request briefings, project consultations, and career opportunities. We collect strictly necessary information (such as name, enterprise email address, contact number, and organization) solely to deliver requested professional services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-[#F4F7FB] border border-gray-200">
              <h4 className="font-bold text-[#071426] text-sm mb-1">Direct Inquiries</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Contact information provided voluntarily for project scoping and talent recruitment.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F4F7FB] border border-gray-200">
              <h4 className="font-bold text-[#071426] text-sm mb-1">Technical Telemetry</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Aggregated, non-identifying telemetry to monitor application performance and stability.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F4F7FB] border border-gray-200">
              <h4 className="font-bold text-[#071426] text-sm mb-1">Security Audit Logs</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Network connection logs retained exclusively for intrusion detection and defensive cybersecurity.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[#071426]">
            Electronic Communications &amp; Opt-Out Rights
          </h2>
          <p>
            Clients and subscribers receiving technology whitepapers, technical briefings, or event invitations may opt out at any time via the unsubscribe links embedded in communications or by emailing our data protection officer directly.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[#071426]">
            ISO 27001 Certification &amp; Encryption Standards
          </h2>
          <p>
            VueData enforces rigorous technical and administrative security controls aligned with ISO 27001 standards. All data transmitted through our web and mobile applications is encrypted in transit using industry-standard TLS 1.3 cryptography, and database stores are hardened with role-based access control (RBAC).
          </p>
        </section>

        <section className="p-8 rounded-3xl bg-[#071426] text-white border border-white/10 space-y-3">
          <div className="flex items-center gap-2 font-bold text-white text-lg">
            <Mail className="w-5 h-5 text-[#00C2E8]" />
            <h3>Data Protection Office Contact</h3>
          </div>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            If you have questions, audits, or requests regarding this Privacy Statement or our data security procedures, please contact our security team:
          </p>
          <div className="text-xs sm:text-sm font-mono text-[#00C2E8] pt-1">
            privacy@vuedata.com • +1 425 968 2073 • 11332 NE 122nd Way, Suite 100, Kirkland, WA 98034
          </div>
        </section>
      </div>
    </div>
  );
}
