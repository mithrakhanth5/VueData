"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Heart,
  Target,
  Users,
  MapPin,
  Briefcase,
  Clock,
  ArrowRight,
  CheckCircle2,
  X,
  Send,
  Sparkles,
  Award,
  Globe2,
} from "lucide-react";

interface Job {
  id: string;
  title: string;
  location: string;
  country: string;
  department: string;
  type: string;
  experience: string;
  overview: string;
  requirements: string[];
}

const jobsData: Job[] = [
  {
    id: "mern-stack-dev",
    title: "Senior MERN / Full-Stack Engineer",
    location: "Chennai",
    country: "India",
    department: "Application Engineering",
    type: "Full-Time",
    experience: "4 - 7 Years",
    overview:
      "We are seeking a Senior Full-Stack Engineer to architect, build, and deploy highly scalable cloud-native web applications for Fortune 500 enterprise clients.",
    requirements: [
      "Extensive experience in React.js, Next.js, Node.js, Express, and modern TypeScript",
      "Proficient in RESTful API microservices, GraphQL, and event-driven architectures",
      "Hands-on experience with Docker, CI/CD pipelines, and cloud platforms (Azure / AWS)",
      "Strong understanding of state management, responsive UX, and Core Web Vitals optimization",
    ],
  },
  {
    id: "cloud-architect",
    title: "Lead Cloud Solutions Architect",
    location: "Seattle, WA",
    country: "USA",
    department: "Cloud Practice",
    type: "Full-Time",
    experience: "8 - 12 Years",
    overview:
      "Lead enterprise cloud transformation initiatives across multi-cloud environments (Azure & AWS), guiding clients on architecture, migration, and security governance.",
    requirements: [
      "Certified Azure Solutions Architect Expert or AWS Certified Solutions Architect Professional",
      "Deep expertise in Kubernetes (AKS/EKS), Infrastructure as Code (Terraform), and FinOps",
      "Demonstrated track record of delivering zero-downtime database and system migrations",
      "Exceptional client-facing communication and technical thought leadership",
    ],
  },
  {
    id: "ai-ml-engineer",
    title: "GenAI & Machine Learning Engineer",
    location: "Bengaluru",
    country: "India",
    department: "AI / ML Practice",
    type: "Full-Time",
    experience: "3 - 6 Years",
    overview:
      "Design and deploy state-of-the-art generative AI applications, enterprise RAG pipelines, and intelligent multi-agent systems using modern foundation models.",
    requirements: [
      "Proficiency in Python, PyTorch, LangChain, LlamaIndex, and Hugging Face pipelines",
      "Hands-on experience integrating Azure OpenAI, Google Vertex AI, or AWS Bedrock APIs",
      "Familiarity with vector databases (Pinecone, Qdrant, Milvus, pgvector)",
      "Solid foundation in data engineering, data cleaning, and MLOps deployment",
    ],
  },
  {
    id: "qa-automation-lead",
    title: "QA Automation Test Lead",
    location: "Bengaluru",
    country: "India",
    department: "Quality Engineering",
    type: "Full-Time",
    experience: "5 - 8 Years",
    overview:
      "Drive test automation strategy for complex web and mobile ecosystems utilizing VueData's reusable test automation frameworks and continuous CI/CD integration.",
    requirements: [
      "Strong coding proficiency in TypeScript, JavaScript, or Java",
      "Expertise in Playwright, Selenium WebDriver, Appium, and Cypress",
      "Deep understanding of CI/CD integration, test reporting, and API automated testing",
      "Proven capability to mentor QA engineers and establish enterprise quality benchmarks",
    ],
  },
  {
    id: "digital-marketing-specialist",
    title: "Digital Marketing & Growth Specialist",
    location: "Chennai",
    country: "India",
    department: "Digital Marketing",
    type: "Full-Time",
    experience: "3 - 5 Years",
    overview:
      "Execute high-impact performance marketing campaigns, SEO/AEO optimizations, and email lifecycle automation for enterprise B2B and B2C brands.",
    requirements: [
      "Proven success managing performance ad budgets on Google Ads, Meta, and LinkedIn",
      "Hands-on expertise with email marketing platforms like Salesforce Marketing Cloud or HubSpot",
      "Strong analytical skills with Google Analytics 4, Tag Manager, and Looker Studio",
      "Experience in landing page optimization, A/B testing, and growth experimentation",
    ],
  },
];

export default function CareersPage() {
  const [selectedLocation, setSelectedLocation] = useState<string>("All");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [applyModalJob, setApplyModalJob] = useState<Job | null>(null);
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  const locations = ["All", "Chennai", "Bengaluru", "Seattle, WA"];

  const filteredJobs =
    selectedLocation === "All"
      ? jobsData
      : jobsData.filter((j) => j.location === selectedLocation);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppliedSuccess(true);
    setTimeout(() => {
      setAppliedSuccess(false);
      setApplyModalJob(null);
    }, 2000);
  };

  return (
    <div className="pt-20 bg-white">
      {/* Cinematic Hero */}
      <div className="bg-[#071426] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#2864FF]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#00C2E8]/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00C2E8]/10 border border-[#00C2E8]/30 text-[#00C2E8] text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Careers at VueData</span>
          </div>

          <h1 className="hero-title font-extrabold tracking-tight text-white mb-6 max-w-4xl mx-auto">
            Uncover Professional Growth Opportunities at Our Organization
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-10 font-light">
            We&apos;re building a workplace at VueData where amazingly talented and creative people (like you) can be who they are and do their career-defining work. Explore active roles across our global engineering delivery centers.
          </p>

          <a href="#openings" className="btn-primary text-xs inline-flex items-center gap-2">
            <span>View Current Openings ({jobsData.length})</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Culture Values - Care, Commit, Commune */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2864FF]/10 text-[#2864FF] text-xs font-bold uppercase tracking-wider mb-3">
            Life at VueData
          </div>
          <h2 className="section-title font-extrabold text-[#071426] tracking-tight">
            Our Cultural Foundation: Care, Commit, Commune
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Principles that define how we work, grow, and succeed collectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-[#F4F7FB] border border-gray-200/80 shadow-sm text-center">
            <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center mx-auto mb-5 shadow-sm">
              <Heart className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#071426] mb-3">Care</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-normal">
              We care deeply for our people, nurturing individual career trajectories, work-life balance, and continuous intellectual development.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#F4F7FB] border border-gray-200/80 shadow-sm text-center">
            <div className="w-14 h-14 rounded-2xl bg-sky-50 text-[#2864FF] flex items-center justify-center mx-auto mb-5 shadow-sm">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#071426] mb-3">Commit</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-normal">
              We commit to client success with unwavering engineering rigor, high ethical standards, and personal accountability for outcomes.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#F4F7FB] border border-gray-200/80 shadow-sm text-center">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-sm">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#071426] mb-3">Commune</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-normal">
              We foster open collaboration, embrace diverse cultural perspectives, and celebrate team breakthroughs and personal milestones together.
            </p>
          </div>
        </div>
      </div>

      {/* Global Engineering Hubs */}
      <div className="bg-[#071426] py-20 text-white border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Global Engineering Centers
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              Collaborate with distributed peers across the United States and India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0C1D35]/80 p-6 rounded-2xl border border-white/10 shadow-cardDark flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#2864FF]/20 text-[#00C2E8] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Chennai, India</h3>
                <p className="text-xs text-gray-400">Offshore Development Center (ODC)</p>
              </div>
            </div>

            <div className="bg-[#0C1D35]/80 p-6 rounded-2xl border border-white/10 shadow-cardDark flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#2864FF]/20 text-[#00C2E8] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Bengaluru, India</h3>
                <p className="text-xs text-gray-400">Technology &amp; Innovation Hub</p>
              </div>
            </div>

            <div className="bg-[#0C1D35]/80 p-6 rounded-2xl border border-white/10 shadow-cardDark flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#2864FF]/20 text-[#00C2E8] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Seattle / Redmond, USA</h3>
                <p className="text-xs text-gray-400">Global Corporate Headquarters</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Open Positions Section */}
      <div id="openings" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="section-title font-extrabold text-[#071426] tracking-tight">
              Featured Open Positions
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Showing {filteredJobs.length} active opportunities across all practices
            </p>
          </div>

          {/* Location Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {locations.map((loc) => (
              <button
                key={loc}
                onClick={() => setSelectedLocation(loc)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  selectedLocation === loc
                    ? "bg-[#071426] text-white shadow-md"
                    : "bg-[#F4F7FB] text-gray-600 hover:bg-gray-200"
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>

        {/* Job Cards */}
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="p-6 sm:p-8 bg-white rounded-2xl border border-gray-200/80 hover:border-[#2864FF]/50 shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-md bg-[#2864FF]/10 text-[#2864FF] text-xs font-bold">
                    {job.department}
                  </span>
                  <span className="px-3 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-medium">
                    {job.type}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#071426] group-hover:text-[#2864FF] transition-colors">
                  {job.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span>{job.location}, {job.country}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>Experience: {job.experience}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => setSelectedJob(job)}
                  className="px-5 py-2.5 text-xs font-bold text-[#071426] hover:bg-gray-100 rounded-xl transition-colors border border-gray-300"
                >
                  View Details
                </button>
                <button
                  onClick={() => setApplyModalJob(job)}
                  className="btn-primary text-xs py-2.5 px-6"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 sm:p-10 max-h-[90vh] overflow-y-auto relative shadow-2xl">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 p-2"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="inline-block px-3 py-1 rounded-md bg-[#2864FF]/10 text-[#2864FF] text-xs font-bold mb-3">
              {selectedJob.department}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#071426] mb-2">
              {selectedJob.title}
            </h2>
            <div className="flex items-center gap-4 text-xs text-gray-500 mb-6 font-medium">
              <span>{selectedJob.location}, {selectedJob.country}</span>
              <span>•</span>
              <span>{selectedJob.type}</span>
              <span>•</span>
              <span>{selectedJob.experience}</span>
            </div>

            <div className="space-y-6 text-sm text-gray-700">
              <div>
                <h4 className="font-bold text-[#071426] mb-2 text-base">Role Overview</h4>
                <p className="leading-relaxed text-gray-600">{selectedJob.overview}</p>
              </div>

              <div>
                <h4 className="font-bold text-[#071426] mb-3 text-base">
                  Technical Requirements
                </h4>
                <div className="space-y-2.5">
                  {selectedJob.requirements.map((req, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#2864FF] mt-0.5 shrink-0" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end gap-3">
              <button
                onClick={() => setSelectedJob(null)}
                className="px-5 py-2.5 text-xs font-bold text-gray-600 hover:bg-gray-100 rounded-xl"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setApplyModalJob(selectedJob);
                  setSelectedJob(null);
                }}
                className="btn-primary text-xs py-2.5 px-6"
              >
                Apply for this Role
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Apply Form Modal */}
      {applyModalJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 sm:p-10 relative shadow-2xl">
            <button
              onClick={() => setApplyModalJob(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 p-2"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-xl sm:text-2xl font-bold text-[#071426] mb-1">
              Apply: {applyModalJob.title}
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              Location: {applyModalJob.location}, {applyModalJob.country}
            </p>

            {appliedSuccess ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto" />
                <h3 className="font-bold text-xl text-[#071426]">
                  Application Received!
                </h3>
                <p className="text-xs text-gray-600 max-w-xs mx-auto">
                  Thank you for applying to VueData. Our talent acquisition specialists will review your application and reach out.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#2864FF]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#2864FF]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wider">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 or +91..."
                      className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#2864FF]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wider">
                    LinkedIn or Portfolio URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/..."
                    className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#2864FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wider">
                    Cover Note or Key Highlights
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your experience and relevant achievements..."
                    className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#2864FF] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full text-xs py-3 mt-2 flex items-center justify-center gap-2"
                >
                  <span>Submit Candidate Application</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
