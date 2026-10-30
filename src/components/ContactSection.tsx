"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  RefreshCw,
  Send,
  CheckCircle2,
  AlertCircle,
  Building2,
  Mail,
  Clock,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
    captchaInput: "",
  });

  const [captchaCode, setCaptchaCode] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const generateCaptcha = () => {
    const chars = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
    let code = "";
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your Name";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Please enter your Mobile number";
    } else if (!/^[0-9+\-\s()]{7,20}$/.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid Mobile number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your E-mail";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid E-mail address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your Message";
    }

    if (!formData.captchaInput.trim()) {
      newErrors.captcha = "Please enter the captcha";
    } else if (
      formData.captchaInput.toUpperCase() !== captchaCode.toUpperCase()
    ) {
      newErrors.captcha = "Captcha code does not match. Please try again";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        mobile: "",
        email: "",
        message: "",
        captchaInput: "",
      });
      generateCaptcha();
    }, 1200);
  };

  const offices = [
    {
      title: "US Headquarters (Seattle)",
      region: "North America",
      address1: "11332, NE 122nd Way, Suite 100",
      address2: "Kirkland, WA 98034",
      phone: "+1 425 968 2073",
      email: "info@vuedata.com",
    },
    {
      title: "US West Coast (California)",
      region: "North America",
      address1: "11020, Ventura Blvd, Unit E",
      address2: "Studio City, CA 91604",
      phone: "+1 425 968 2073",
      email: "info@vuedata.com",
    },
    {
      title: "India ODC (Chennai)",
      region: "Asia Pacific",
      address1: "Plot No 43/3, Estate for E&E Industrial Estate,",
      address2: "Perungudi, Chennai 600096",
      phone: "+91 44 4858 3311",
      email: "careers@vuedata.com",
    },
    {
      title: "India Tech Hub (Bengaluru)",
      region: "Asia Pacific",
      address1: "#39, 8th Main Road",
      address2: "Vasanth Nagar, Bengaluru 560052",
      phone: "+91 80 61329999",
      email: "info@vuedata.com",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-[#071426] text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#2864FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#00C2E8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Form Box */}
          <div className="lg:col-span-7 bg-[#0C1D35]/80 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-white/15 shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2864FF]/20 text-[#00C2E8] text-xs font-bold uppercase tracking-wider mb-4">
              Get In Touch
            </div>
            <h2 className="section-title font-extrabold text-white tracking-tight mb-3">
              Start Your Engineering Engagement
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
              Have an enterprise inquiry about our software services, AI capabilities, or proprietary SaaS platforms? Our specialists respond within 24 hours.
            </p>

            <p className="text-[11px] text-gray-400 mb-6 leading-relaxed">
              We respect your confidentiality. VueData uses your information strictly to respond to your inquiry in accordance with our{" "}
              <Link href="/privacy-policy" className="text-[#00C2E8] hover:underline">
                Privacy Policy
              </Link>.
            </p>

            {isSubmitted ? (
              <div className="p-8 bg-emerald-950/40 border border-emerald-500/40 rounded-2xl text-center space-y-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Message Transmitted Successfully</h3>
                <p className="text-sm text-emerald-200/90 max-w-md mx-auto leading-relaxed">
                  Thank you for connecting with VueData. A dedicated client partner will review your inquiry and follow up promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 bg-[#071426]/70 text-white placeholder-gray-500 rounded-xl border ${
                      errors.name ? "border-red-400 ring-1 ring-red-400" : "border-white/15 focus:border-[#00C2E8]"
                    } focus:outline-none text-sm transition-all`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                      Mobile Number *
                    </label>
                    <input
                      type="text"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className={`w-full px-4 py-3 bg-[#071426]/70 text-white placeholder-gray-500 rounded-xl border ${
                        errors.mobile ? "border-red-400 ring-1 ring-red-400" : "border-white/15 focus:border-[#00C2E8]"
                      } focus:outline-none text-sm transition-all`}
                    />
                    {errors.mobile && (
                      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.mobile}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                      Corporate E-Mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="corporate@company.com"
                      className={`w-full px-4 py-3 bg-[#071426]/70 text-white placeholder-gray-500 rounded-xl border ${
                        errors.email ? "border-red-400 ring-1 ring-red-400" : "border-white/15 focus:border-[#00C2E8]"
                      } focus:outline-none text-sm transition-all`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                    Project Requirements / Inquiries *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project requirements, scope, or timeline..."
                    className={`w-full px-4 py-3 bg-[#071426]/70 text-white placeholder-gray-500 rounded-xl border ${
                      errors.message ? "border-red-400 ring-1 ring-red-400" : "border-white/15 focus:border-[#00C2E8]"
                    } focus:outline-none text-sm transition-all resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Dynamic Captcha */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#071426] border border-[#00C2E8]/40 px-5 py-2.5 rounded-xl select-none tracking-[0.25em] font-mono text-lg font-bold text-[#00C2E8] shadow-inner">
                      {captchaCode}
                    </div>
                    <button
                      type="button"
                      onClick={generateCaptcha}
                      title="Generate new captcha code"
                      className="p-3 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-colors"
                    >
                      <RefreshCw className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex-1">
                    <input
                      type="text"
                      name="captchaInput"
                      value={formData.captchaInput}
                      onChange={handleChange}
                      placeholder="ENTER CAPTCHA *"
                      className={`w-full px-4 py-3 bg-[#071426]/70 text-white placeholder-gray-500 rounded-xl border ${
                        errors.captcha ? "border-red-400 ring-1 ring-red-400" : "border-white/15 focus:border-[#00C2E8]"
                      } focus:outline-none text-sm uppercase font-mono tracking-wider transition-all`}
                    />
                  </div>
                </div>
                {errors.captcha && (
                  <p className="text-red-400 text-xs flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.captcha}
                  </p>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full sm:w-auto text-xs py-3.5 px-8"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Corporate Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Global Office Locations Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00C2E8]/10 text-[#00C2E8] text-xs font-bold uppercase tracking-wider mb-2">
                Worldwide Footprint
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Global Office Locations
              </h2>
            </div>

            <div className="space-y-4">
              {offices.map((office, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0C1D35]/70 backdrop-blur-md border border-white/10 hover:border-[#00C2E8]/50 transition-all duration-300 shadow-cardDark group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 font-bold text-white text-base group-hover:text-[#00C2E8] transition-colors">
                      <MapPin className="w-4 h-4 text-[#00C2E8] shrink-0" />
                      <span>{office.title}</span>
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/10 text-gray-300">
                      {office.region}
                    </span>
                  </div>

                  <p className="text-gray-300 text-xs leading-relaxed pl-6">
                    {office.address1}
                    <br />
                    {office.address2}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-gray-400 pt-3 pl-6 border-t border-white/5 mt-3">
                    <div className="flex items-center gap-1.5 font-mono">
                      <Phone className="w-3.5 h-3.5 text-gray-400" />
                      <span>{office.phone}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
