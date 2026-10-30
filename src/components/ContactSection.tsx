"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, Phone, RefreshCw, Send, CheckCircle2, AlertCircle } from "lucide-react";

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

  // Generate random 5-character alphanumeric captcha
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error on edit
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
    } else if (formData.captchaInput.toUpperCase() !== captchaCode.toUpperCase()) {
      newErrors.captcha = "Captcha does not match. Please try again";
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
    // Simulate real submission
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
      title: "US – Seattle",
      address1: "11332, NE 122nd Way, Suite 100",
      address2: "Kirkland, WA 98034",
      phone: "+1 425 968 2073",
    },
    {
      title: "India – Chennai",
      address1: "Plot No 43/3, Estate for E&E Industrial Estate,",
      address2: "Perungudi, Chennai 600096",
      phone: "+91 44 4858 3311",
    },
    {
      title: "India – Bangalore",
      address1: "#39, 8th Main Road",
      address2: "Vasanth Nagar, Bengaluru 560052",
      phone: "+91 80 61329999",
    },
    {
      title: "US – California",
      address1: "11020, Ventura Blvd, Unit E",
      address2: "Studio City, CA 91604",
      phone: "+1 425 968 2073",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 relative bg-cover bg-center text-white"
      style={{
        backgroundImage: "linear-gradient(270deg, rgba(0,0,0,0.85), rgba(15,23,42,0.92)), url(/assets/contact-us-new-image.png)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-white/5 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-3">
              Contact Us
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
              Any query about our services, solutions or opening? Use the following form to let us know. Our team will get back to you within 24 hours.
            </p>

            <p className="text-xs text-gray-400 mb-6 leading-relaxed">
              Please be assured we&apos;re committed to your privacy. VueData uses the information you provide us to contact you about relevant content, products, and services. You may unsubscribe at any time. For more information, please read our{" "}
              <Link href="/privacy-policy" className="text-[#85c4ff] hover:underline">
                Privacy policy
              </Link>.
            </p>

            {isSubmitted ? (
              <div className="p-6 bg-emerald-900/40 border border-emerald-500/50 rounded-xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-lg font-bold text-white">Thank You for Connecting!</h3>
                <p className="text-sm text-emerald-200">
                  Your inquiry has been received successfully. A VueData specialist will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-3 px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-semibold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="NAME *"
                    className={`w-full px-4 py-3 bg-white/10 text-white placeholder-gray-400 rounded-lg border ${
                      errors.name ? "border-red-400 ring-1 ring-red-400" : "border-white/20 focus:border-[#2faae1]"
                    } focus:outline-none text-sm transition-all`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Mobile & Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="MOBILE NUMBER *"
                      className={`w-full px-4 py-3 bg-white/10 text-white placeholder-gray-400 rounded-lg border ${
                        errors.mobile ? "border-red-400 ring-1 ring-red-400" : "border-white/20 focus:border-[#2faae1]"
                      } focus:outline-none text-sm transition-all`}
                    />
                    {errors.mobile && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.mobile}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="E-MAIL *"
                      className={`w-full px-4 py-3 bg-white/10 text-white placeholder-gray-400 rounded-lg border ${
                        errors.email ? "border-red-400 ring-1 ring-red-400" : "border-white/20 focus:border-[#2faae1]"
                      } focus:outline-none text-sm transition-all`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="YOUR MESSAGE *"
                    className={`w-full px-4 py-3 bg-white/10 text-white placeholder-gray-400 rounded-lg border ${
                      errors.message ? "border-red-400 ring-1 ring-red-400" : "border-white/20 focus:border-[#2faae1]"
                    } focus:outline-none text-sm transition-all resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Captcha Section */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#29344a] border border-[#2faae1]/40 px-5 py-2.5 rounded-lg select-none tracking-[0.25em] font-mono text-lg font-bold text-[#85c4ff] shadow-inner">
                      {captchaCode}
                    </div>
                    <button
                      type="button"
                      onClick={generateCaptcha}
                      title="Refresh Captcha"
                      className="p-2.5 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
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
                      className={`w-full px-4 py-3 bg-white/10 text-white placeholder-gray-400 rounded-lg border ${
                        errors.captcha ? "border-red-400 ring-1 ring-red-400" : "border-white/20 focus:border-[#2faae1]"
                      } focus:outline-none text-sm uppercase transition-all`}
                    />
                  </div>
                </div>
                {errors.captcha && (
                  <p className="text-red-400 text-xs flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.captcha}
                  </p>
                )}

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#236cb1] hover:bg-[#1a5288] text-white font-semibold text-sm rounded-lg transition-all shadow-lg hover:shadow-blue-900/50 flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Office Locations Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white mb-2">
                Office Locations
              </h2>
              <div className="w-12 h-1 bg-[#2faae1] rounded-full mb-6" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {offices.map((office, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-[#2faae1]/40 transition-colors shadow-lg"
                >
                  <div className="flex items-center gap-2.5 text-[#85c4ff] font-bold text-base mb-2">
                    <MapPin className="w-4 h-4 text-[#2faae1] shrink-0" />
                    <span>{office.title}</span>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm pl-6.5 leading-relaxed">
                    {office.address1}
                    <br />
                    {office.address2}
                  </p>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 pt-3 pl-6.5">
                    <Phone className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span className="font-mono">{office.phone}</span>
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
