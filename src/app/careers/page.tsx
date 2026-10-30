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
    title: "Senior MERN Stack Developer",
    location: "Chennai",
    country: "India",
    department: "Application Development",
    type: "Full-Time",
    experience: "4 - 7 Years",
    overview:
      "We are looking for a Senior MERN Stack Developer to design, build, and deploy highly scalable cloud-native web applications for global enterprise clients.",
    requirements: [
      "Extensive experience in React.js, Next.js, Node.js, Express, and MongoDB",
      "Proficient in TypeScript, RESTful APIs, and GraphQL integration",
      "Hands-on experience with Docker, CI/CD pipelines, and cloud platforms (Azure/AWS)",
      "Strong understanding of state management, responsive UI, and performance tuning",
    ],
  },
  {
    id: "cloud-architect",
    title: "Lead Cloud Solutions Architect",
    location: "Seattle, WA",
    country: "USA",
    department: "Cloud Solutions",
    type: "Full-Time",
    experience: "8 - 12 Years",
    overview:
      "Lead enterprise cloud transformation initiatives across multi-cloud environments (Azure & AWS), guiding clients on architecture, migration, and security governance.",
    requirements: [
      "Certified Azure Solutions Architect Expert or AWS Certified Solutions Architect Professional",
      "Deep expertise in Kubernetes (AKS/EKS), Infrastructure as Code (Terraform)",
      "Demonstrated track record of delivering zero-downtime database and system migrations",
      "Exceptional client-facing communication and technical leadership skills",
    ],
  },
  {
    id: "ai-ml-engineer",
    title: "GenAI & Machine Learning Engineer",
    location: "Bengaluru",
    country: "India",
    department: "AI / ML Services",
    type: "Full-Time",
    experience: "3 - 6 Years",
    overview:
      "Design and deploy cutting-edge generative AI applications, enterprise RAG pipelines, and intelligent agent systems using modern foundation models.",
    requirements: [
      "Proficiency in Python, PyTorch, LangChain, LlamaIndex, and Hugging Face",
      "Hands-on experience integrating Azure OpenAI, Vertex AI, or Bedrock APIs",
      "Familiarity with vector databases (Pinecone, Qdrant, Milvus, pgvector)",
      "Solid foundation in data engineering, data cleaning, and MLOps",
    ],
  },
  {
    id: "qa-automation-lead",
    title: "QA Automation Test Lead",
    location: "Bengaluru",
    country: "India",
    department: "Quality Assurance",
    type: "Full-Time",
    experience: "5 - 8 Years",
    overview:
      "Drive test automation strategy for complex web and mobile ecosystems utilizing VueData's reusable test automation frameworks.",
    requirements: [
      "Strong coding proficiency in TypeScript, JavaScript, or Java",
      "Expertise in Playwright, Selenium WebDriver, Appium, and Cypress",
      "Deep understanding of CI/CD integration, test reporting, and API automated testing",
      "Proven capability to mentor QA engineers and establish quality benchmarks",
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
      "Proven success managing paid ad budgets on Google Ads, Meta, and LinkedIn",
      "Hands-on expertise with email platforms like Salesforce Marketing Cloud or HubSpot",
      "Strong analytical skills with Google Analytics 4, Tag Manager, and Looker Studio",
      "Experience in landing page optimization, A/B testing, and copywriting",
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
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Banner */}
      <div
        className="relative bg-cover bg-bottom py-24 text-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(28,36,56,0.85), rgba(28,36,56,0.92)), url(/assets/career1.jpg)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block px-3.5 py-1 rounded bg-[#236cb1]/40 border border-[#2faae1]/50 text-[#2faae1] text-xs font-bold uppercase tracking-wider mb-4">
            Join VueData
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 max-w-4xl mx-auto">
            Uncover Professional Growth Opportunities at Our Organization
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-light">
            We&apos;re building a workplace at VueData where amazingly talented and creative people (like you) can be who they are and do their best work. Explore current opportunities across our global development centers.
          </p>
        </div>
      </div>

      {/* Culture Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#29344a] tracking-tight">
            Our Culture &amp; Values
          </h2>
          <div className="w-16 h-1 bg-[#236cb1] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl bg-gray-50 border border-gray-100 text-center">
            <div className="w-14 h-14 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-5">
              <Heart className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-[#29344a] mb-3">Care</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We care deeply for our people, nurturing individual career trajectories, work-life balance, and continuous intellectual development.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gray-50 border border-gray-100 text-center">
            <div className="w-14 h-14 rounded-full bg-blue-50 text-[#236cb1] flex items-center justify-center mx-auto mb-5">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-[#29344a] mb-3">Commit</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We commit to client success with unwavering engineering rigor, high ethical standards, and accountability for tangible outcomes.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gray-50 border border-gray-100 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-5">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-[#29344a] mb-3">Commune</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We foster open collaboration, embrace diverse cultural perspectives, and celebrate individual and team breakthroughs collectively.
            </p>
          </div>
        </div>
      </div>

      {/* Global Locations Overview */}
      <div className="bg-[#f7f8fa] py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#29344a]">
              Global Engineering Hubs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-sky-100 text-[#236cb1] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#29344a] text-lg">Chennai</h3>
                <p className="text-xs text-gray-500">Offshore Development Center, India</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-sky-100 text-[#236cb1] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#29344a] text-lg">Bengaluru</h3>
                <p className="text-xs text-gray-500">Technology &amp; Innovation Hub, India</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-sky-100 text-[#236cb1] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#29344a] text-lg">Seattle / Redmond</h3>
                <p className="text-xs text-gray-500">Global Corporate Headquarters, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Open Roles Section */}
      <div id="openings" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#29344a]">
              Featured Open Positions
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Showing {filteredJobs.length} active opportunities
            </p>
          </div>

          {/* Location Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {locations.map((loc) => (
              <button
                key={loc}
                onClick={() => setSelectedLocation(loc)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedLocation === loc
                    ? "bg-[#236cb1] text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
              className="p-6 bg-white rounded-xl border border-gray-200 hover:border-[#236cb1]/50 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-sky-50 text-[#236cb1] text-xs font-bold">
                    {job.department}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-gray-100 text-gray-600 text-xs font-medium">
                    {job.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#29344a]">
                  {job.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{job.location}, {job.country}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Experience: {job.experience}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => setSelectedJob(job)}
                  className="px-4 py-2 text-xs font-semibold text-[#236cb1] hover:bg-sky-50 rounded-lg transition-colors border border-[#236cb1]"
                >
                  View Details
                </button>
                <button
                  onClick={() => setApplyModalJob(job)}
                  className="px-5 py-2 text-xs font-semibold bg-[#236cb1] hover:bg-[#1a5288] text-white rounded-lg transition-colors shadow-sm"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="inline-block px-2.5 py-1 rounded bg-sky-50 text-[#236cb1] text-xs font-bold mb-3">
              {selectedJob.department}
            </span>
            <h2 className="text-2xl font-bold text-[#29344a] mb-2">
              {selectedJob.title}
            </h2>
            <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
              <span>{selectedJob.location}, {selectedJob.country}</span>
              <span>•</span>
              <span>{selectedJob.type}</span>
              <span>•</span>
              <span>Experience: {selectedJob.experience}</span>
            </div>

            <div className="space-y-6 text-sm text-gray-700">
              <div>
                <h4 className="font-bold text-[#29344a] mb-2">Role Overview</h4>
                <p className="leading-relaxed">{selectedJob.overview}</p>
              </div>

              <div>
                <h4 className="font-bold text-[#29344a] mb-2">
                  Technical Requirements
                </h4>
                <div className="space-y-2">
                  {selectedJob.requirements.map((req, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#236cb1] mt-0.5 shrink-0" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end gap-3">
              <button
                onClick={() => setSelectedJob(null)}
                className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setApplyModalJob(selectedJob);
                  setSelectedJob(null);
                }}
                className="px-6 py-2 text-xs font-semibold bg-[#236cb1] hover:bg-[#1a5288] text-white rounded-lg shadow-sm"
              >
                Apply for this Role
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Apply Form Modal */}
      {applyModalJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setApplyModalJob(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-xl font-bold text-[#29344a] mb-1">
              Apply for {applyModalJob.title}
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              Location: {applyModalJob.location}
            </p>

            {appliedSuccess ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h3 className="font-bold text-lg text-[#29344a]">
                  Application Submitted!
                </h3>
                <p className="text-xs text-gray-600">
                  Thank you for applying. Our talent acquisition team will review your profile and reach out.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#236cb1]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#236cb1]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 or +91..."
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#236cb1]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    LinkedIn or Portfolio URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/..."
                    className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#236cb1]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Brief Note or Cover Letter
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us why you are a great fit..."
                    className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#236cb1] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#236cb1] hover:bg-[#1a5288] text-white text-xs font-semibold rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Application</span>
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
