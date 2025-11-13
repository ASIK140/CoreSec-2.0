import ProjectCard from "@/components/cards/ProjectCard";
import React from "react";
const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "Full-featured online shopping platform with payment integration and inventory management",
    image:
      "https://images.unsplash.com/photo-1649694902788-9ccda3aa1d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlLWNvbW1lcmNlJTIwb25saW5lJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzYxNTg3ODQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    results: ["300% increase in sales", "50K+ monthly users", "99.9% uptime"],
    client: "RetailMax Inc.",
  },
  {
    title: "FinTech Mobile App",
    category: "Mobile Development",
    description:
      "Secure banking app with real-time transactions and advanced fraud detection",
    image:
      "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjE1Mjk3MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["React Native", "Firebase", "AI/ML", "Biometrics"],
    results: ["1M+ downloads", "4.8 star rating", "Zero security breaches"],
    client: "SecureBank",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    category: "AI & Data Analytics",
    description:
      "Real-time business intelligence platform with predictive analytics and ML insights",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MTUyNTIxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
    results: ["40% better insights", "Real-time processing", "85% accuracy"],
    client: "DataCorp Solutions",
  },
  {
    title: "Healthcare Management System",
    category: "Web Development",
    description: "Comprehensive patient management and telemedicine platform",
    image:
      "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjE1NzQ2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Vue.js", "Django", "MySQL", "WebRTC"],
    results: ["10K+ patients served", "95% satisfaction", "HIPAA compliant"],
    client: "MediCare Plus",
  },
  {
    title: "Cloud Infrastructure Migration",
    category: "Cloud & DevOps",
    description:
      "Complete cloud migration from on-premise to AWS with auto-scaling",
    image:
      "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnN8ZW58MXx8fHwxNzYxNDg3ODM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
    results: ["60% cost reduction", "10x scalability", "Zero downtime"],
    client: "TechGlobal Corp",
  },
  {
    title: "NFT Marketplace",
    category: "Blockchain",
    description:
      "Decentralized marketplace for buying, selling, and trading NFTs",
    image:
      "https://images.unsplash.com/photo-1666816943035-15c29931e975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjE1NDYyNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Solidity", "Ethereum", "React", "Web3.js"],
    results: ["$5M+ in transactions", "20K+ users", "Low gas fees"],
    client: "CryptoArt Studio",
  },
  {
    title: "Smart Home IoT System",
    category: "IoT & Embedded",
    description: "Integrated smart home automation with voice control and AI",
    image:
      "https://images.unsplash.com/photo-1717323181080-334e21c2dde5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpb3QlMjBkZXZpY2VzJTIwc21hcnQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MTU4Nzg0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Arduino", "Raspberry Pi", "MQTT", "AI"],
    results: ["30% energy savings", "Voice-activated", "Remote access"],
    client: "SmartLife Technologies",
  },
  {
    title: "Cybersecurity Platform",
    category: "Cybersecurity",
    description:
      "Advanced threat detection and prevention system with real-time monitoring",
    image:
      "https://images.unsplash.com/photo-1483817101829-339b08e8d83f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHNlY3VyaXR5fGVufDF8fHx8MTc2MTU4Nzg0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Python", "ML", "Elasticsearch", "Kibana"],
    results: ["99.9% threat detection", "Real-time alerts", "SOC 2 certified"],
    client: "SecureNet Inc.",
  },
  {
    title: "Social Media Platform",
    category: "Web & Mobile",
    description:
      "Full-featured social networking app with real-time messaging and content sharing",
    image:
      "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjE1NzQ2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["React", "React Native", "GraphQL", "Redis"],
    results: ["500K+ active users", "2M posts/day", "Sub-second load times"],
    client: "ConnectHub",
  },
];
function Page() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-br from-black to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-6">
            Our <span className="text-[#E50914]">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped businesses
            transform digitally
          </p>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
