"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
const services = [
  {
    title: "Website Development",
    description: "Custom, responsive websites built with modern technologies",
    icon: "🌐",
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications",
    icon: "📱",
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by cutting-edge AI",
    icon: "🤖",
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions for your business",
    icon: "🔒",
  },
];
function Services() {
  const navigate = useRouter();
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Tech Services
          </h2>

          <div className="w-20 h-1.5 bg-red-600 mx-auto mt-4 rounded"></div>
          <p className="mt-6 text-lg text-gray-600">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#E50914] hover:shadow-lg transition-all group cursor-pointer"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-black mb-2 group-hover:text-[#E50914] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
            onClick={() => navigate.push("/services")}
          >
            View All Services
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
