import ServicesCard from "@/components/cards/ServicesCard";
import {
  BarChart3,
  Brain,
  Cloud,
  Cpu,
  Database,
  Globe,
  Link2,
  Smartphone,
} from "lucide-react";
import React from "react";
const services = [
  {
    icon: <Globe className="text-[#E50914]" size={40} />,
    title: "Website Development",
    description: "Custom, responsive websites built with modern technologies",
    image:
      "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjE1NzQ2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: [
      "Responsive design for all devices",
      "SEO optimization for better visibility",
      "Fast loading speeds and performance",
      "Custom CMS integration",
      "E-commerce functionality",
      "Progressive Web Apps (PWA)",
    ],
    technologies: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Node.js"],
  },
  {
    icon: <Smartphone className="text-[#E50914]" size={40} />,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android",
    image:
      "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjE1Mjk3MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: [
      "Native iOS and Android development",
      "Cross-platform with React Native/Flutter",
      "Intuitive user interfaces",
      "Offline functionality",
      "Push notifications",
      "App Store optimization",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
  },
  {
    icon: <Database className="text-[#E50914]" size={40} />,
    title: "API & Backend Development",
    description: "Robust, scalable backend systems and RESTful APIs",
    image:
      "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnN8ZW58MXx8fHwxNzYxNDg3ODM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: [
      "RESTful and GraphQL APIs",
      "Microservices architecture",
      "Database design and optimization",
      "Authentication and authorization",
      "Third-party API integration",
      "Real-time data processing",
    ],
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    icon: <Brain className="text-[#E50914]" size={40} />,
    title: "AI & Machine Learning",
    description:
      "Intelligent solutions powered by cutting-edge artificial intelligence",
    image:
      "https://images.unsplash.com/photo-1655891709738-a48aad482a3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWFjaGluZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc2MTUwMzYyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: [
      "Natural Language Processing (NLP)",
      "Computer Vision solutions",
      "Predictive analytics",
      "Recommendation systems",
      "Chatbots and virtual assistants",
      "Custom ML model development",
    ],
    technologies: [
      "TensorFlow",
      "PyTorch",
      "OpenAI",
      "Scikit-learn",
      "Hugging Face",
    ],
  },
  {
    icon: <BarChart3 className="text-[#E50914]" size={40} />,
    title: "Data Analytics",
    description: "Transform raw data into actionable business insights",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MTUyNTIxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: [
      "Data visualization dashboards",
      "Business intelligence solutions",
      "ETL pipeline development",
      "Big data processing",
      "Statistical analysis",
      "Real-time analytics",
    ],
    technologies: ["Python", "Tableau", "Power BI", "Apache Spark", "Pandas"],
  },
  {
    icon: <Cloud className="text-[#E50914]" size={40} />,
    title: "Cloud & DevOps",
    description:
      "Scalable cloud infrastructure and automated deployment pipelines",
    image:
      "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnN8ZW58MXx8fHwxNzYxNDg3ODM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: [
      "Cloud migration services",
      "Infrastructure as Code (IaC)",
      "CI/CD pipeline setup",
      "Container orchestration",
      "Cloud cost optimization",
      "Monitoring and logging",
    ],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
  },
  {
    icon: <Link2 className="text-[#E50914]" size={40} />,
    title: "Blockchain Development",
    description:
      "Secure, decentralized blockchain solutions and smart contracts",
    image:
      "https://images.unsplash.com/photo-1666816943035-15c29931e975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjE1NDYyNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: [
      "Smart contract development",
      "DApp (Decentralized App) creation",
      "Cryptocurrency integration",
      "NFT marketplace development",
      "Blockchain consulting",
      "Security audits",
    ],
    technologies: ["Solidity", "Ethereum", "Web3.js", "Hardhat", "IPFS"],
  },
  {
    icon: <Cpu className="text-[#E50914]" size={40} />,
    title: "IoT & Embedded Systems",
    description: "Connected devices and intelligent embedded solutions",
    image:
      "https://images.unsplash.com/photo-1717323181080-334e21c2dde5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpb3QlMjBkZXZpY2VzJTIwc21hcnQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MTU4Nzg0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: [
      "IoT platform development",
      "Sensor integration",
      "Real-time data collection",
      "Edge computing solutions",
      "Device management systems",
      "Smart home automation",
    ],
    technologies: ["Arduino", "Raspberry Pi", "MQTT", "C/C++", "Python"],
  },
];
function page() {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-linear-to-br from-black to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-6">
            Our <span className="text-[#E50914]">Tech Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs.
            From web development to AI, we've got you covered.
          </p>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20 px-8 sm:px-10 lg:px-20 space-y-20">
        {services.map((service, index) => (
          <ServicesCard service={service} index={index} key={index} />
        ))}
      </section>
      {/* CTA Section */}
      <section className="bg-linear-to-r from-[#E50914] to-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Let's discuss how our services can help you achieve your business
            goals.
          </p>
          <button className="px-8 py-4 bg-white text-[#E50914] rounded-full hover:bg-gray-100 transition-all hover:scale-105">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
}

export default page;
