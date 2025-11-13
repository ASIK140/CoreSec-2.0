"use client";
import { Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import React from "react";
import { useState } from "react";
function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your inquiry! We will get back to you soon.");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-6">
            Get in <span className="text-[#E50914]">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can help you achieve
            your goals
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E50914]/10 rounded-2xl mb-4">
                <Mail className="text-[#E50914]" size={32} />
              </div>
              <h3 className="text-black mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm mb-2">
                Drop us a line anytime
              </p>
              <a
                href="mailto:info@coresec.tech"
                className="text-[#E50914] hover:underline"
              >
                info@coresec.tech
              </a>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E50914]/10 rounded-2xl mb-4">
                <Phone className="text-[#E50914]" size={32} />
              </div>
              <h3 className="text-black mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-2">
                Mon-Fri from 9am to 6pm
              </p>
              <a
                href="tel:+15551234567"
                className="text-[#E50914] hover:underline"
              >
                +1 (555) 123-4567
              </a>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E50914]/10 rounded-2xl mb-4">
                <MapPin className="text-[#E50914]" size={32} />
              </div>
              <h3 className="text-black mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm">
                123 Tech Street
                <br />
                Silicon Valley, CA 94025
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl text-black mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E50914] focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E50914] focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E50914] focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-gray-700 mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E50914] focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="website">Website Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="api">API & Backend</option>
                    <option value="ai">AI & Machine Learning</option>
                    <option value="data">Data Analytics</option>
                    <option value="cloud">Cloud & DevOps</option>
                    <option value="blockchain">Blockchain</option>
                    <option value="iot">IoT & Embedded Systems</option>
                    <option value="course">Online Course</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E50914] focus:border-transparent resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-[#E50914] text-white rounded-full hover:bg-[#B00710] transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            </div>

            {/* Additional Contact Options */}
            <div className="space-y-8">
              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-black mb-2">Chat on WhatsApp</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      Get instant responses to your queries. We're available
                      24/7 on WhatsApp.
                    </p>
                    <a
                      href="https://wa.me/15551234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                    >
                      Start Chat
                      <MessageSquare size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-gray-100 rounded-2xl overflow-hidden h-[400px] border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6394960796804!2d-122.08624908469252!3d37.42199997982574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CoreSec Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-black mb-4">
              Frequently Asked <span className="text-[#E50914]">Questions</span>
            </h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>
          <div className="space-y-4">
            {[
              {
                question: "What services do you offer?",
                answer:
                  "We offer comprehensive tech services including web development, mobile apps, AI/ML, data analytics, cloud solutions, blockchain, IoT, and cybersecurity. We also provide online courses in various tech domains.",
              },
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on complexity and scope. A simple website may take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation.",
              },
              {
                question: "Do you offer ongoing support and maintenance?",
                answer:
                  "Yes! We offer various support packages to ensure your solution continues to perform optimally. This includes bug fixes, updates, security patches, and feature enhancements.",
              },
              {
                question: "Can I enroll in multiple courses?",
                answer:
                  "Absolutely! We offer bundle discounts for students who enroll in multiple courses. Contact us to learn about our current offers.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 group"
              >
                <summary className="cursor-pointer text-black list-none flex items-center justify-between">
                  <span>{faq.question}</span>
                  <span className="text-[#E50914] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="text-gray-600 mt-4 text-sm">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
