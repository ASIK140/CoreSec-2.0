"use client";
import CoursePageCard from "@/components/cards/CoursePageCard";
import React from "react";
const courses = [
  {
    title: "Python for Beginners",
    description:
      "Start your programming journey with Python, one of the most versatile and beginner-friendly languages.",
    duration: "8 weeks",
    level: "Beginner",
    students: "2,500+",
    rating: 4.8,
    price: "$299",
    modules: [
      "Python basics and syntax",
      "Data types and variables",
      "Control flow and loops",
      "Functions and modules",
      "File handling",
      "Introduction to OOP",
    ],
    outcomes: [
      "Write clean, efficient Python code",
      "Build simple automation scripts",
      "Understand programming fundamentals",
      "Ready for advanced courses",
    ],
  },
  {
    title: "Full Stack Web Development",
    description:
      "Master both frontend and backend development to build complete web applications from scratch.",
    duration: "16 weeks",
    level: "Intermediate",
    students: "1,800+",
    rating: 4.9,
    price: "$599",
    modules: [
      "HTML, CSS, JavaScript fundamentals",
      "React and modern frontend",
      "Node.js and Express",
      "Database design (SQL & NoSQL)",
      "RESTful API development",
      "Deployment and DevOps basics",
    ],
    outcomes: [
      "Build full-stack web applications",
      "Work with modern frameworks",
      "Implement authentication systems",
      "Deploy production-ready apps",
    ],
  },
  {
    title: "Frontend Web Development",
    description:
      "Specialize in creating beautiful, responsive user interfaces with modern frontend technologies.",
    duration: "12 weeks",
    level: "Beginner",
    students: "2,200+",
    rating: 4.7,
    price: "$399",
    modules: [
      "HTML5 and CSS3 mastery",
      "JavaScript ES6+",
      "React.js fundamentals",
      "State management (Redux)",
      "Responsive design",
      "Performance optimization",
    ],
    outcomes: [
      "Create responsive websites",
      "Master React and modern tools",
      "Build interactive UIs",
      "Optimize web performance",
    ],
  },
  {
    title: "Backend Development",
    description:
      "Focus on server-side programming, databases, and API development for robust applications.",
    duration: "14 weeks",
    level: "Intermediate",
    students: "1,500+",
    rating: 4.8,
    price: "$499",
    modules: [
      "Node.js and Express",
      "Database design and SQL",
      "MongoDB and NoSQL",
      "RESTful API design",
      "Authentication & security",
      "Testing and debugging",
    ],
    outcomes: [
      "Build scalable backends",
      "Design efficient databases",
      "Implement secure APIs",
      "Handle production workloads",
    ],
  },
  {
    title: "AI with Python",
    description:
      "Dive into artificial intelligence and machine learning using Python and popular AI frameworks.",
    duration: "12 weeks",
    level: "Advanced",
    students: "1,200+",
    rating: 4.9,
    price: "$699",
    modules: [
      "Machine Learning fundamentals",
      "Neural networks and deep learning",
      "TensorFlow and PyTorch",
      "Natural Language Processing",
      "Computer Vision",
      "Real-world AI projects",
    ],
    outcomes: [
      "Build ML models from scratch",
      "Implement deep learning solutions",
      "Work with AI frameworks",
      "Deploy AI applications",
    ],
  },
  {
    title: "Cybersecurity Essentials",
    description:
      "Learn to protect systems, networks, and data from cyber threats and security breaches.",
    duration: "10 weeks",
    level: "Beginner",
    students: "3,000+",
    rating: 4.7,
    price: "$449",
    modules: [
      "Security fundamentals",
      "Network security",
      "Cryptography basics",
      "Ethical hacking",
      "Security tools and techniques",
      "Incident response",
    ],
    outcomes: [
      "Understand security principles",
      "Identify vulnerabilities",
      "Implement security measures",
      "Respond to security incidents",
    ],
  },
  {
    title: "Machine Learning (Beginner)",
    description:
      "Start your machine learning journey with practical examples and hands-on projects.",
    duration: "10 weeks",
    level: "Beginner",
    students: "1,600+",
    rating: 4.8,
    price: "$499",
    modules: [
      "ML concepts and algorithms",
      "Supervised learning",
      "Unsupervised learning",
      "Data preprocessing",
      "Model evaluation",
      "Scikit-learn library",
    ],
    outcomes: [
      "Understand ML fundamentals",
      "Build classification models",
      "Perform data analysis",
      "Evaluate model performance",
    ],
  },
  {
    title: "Machine Learning (Intermediate)",
    description:
      "Advanced machine learning techniques and deep learning for complex problem-solving.",
    duration: "14 weeks",
    level: "Intermediate",
    students: "1,100+",
    rating: 4.9,
    price: "$599",
    modules: [
      "Advanced ML algorithms",
      "Deep learning with TensorFlow",
      "Convolutional Neural Networks",
      "Recurrent Neural Networks",
      "Transfer learning",
      "Production ML systems",
    ],
    outcomes: [
      "Build advanced ML models",
      "Implement deep learning",
      "Work with neural networks",
      "Deploy ML in production",
    ],
  },
];
const benefits = [
  {
    icon: "🎓",
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of experience",
  },
  {
    icon: "💻",
    title: "Hands-On Projects",
    description: "Build real-world projects to strengthen your portfolio",
  },
  {
    icon: "📜",
    title: "Certification",
    description: "Earn recognized certificates upon course completion",
  },
  {
    icon: "🤝",
    title: "Lifetime Access",
    description: "Access course materials anytime, anywhere, forever",
  },
];
function page() {
  return (
    <div>
      <section className="bg-linear-to-br from-black to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-6">
            Online <span className="text-[#E50914]">Courses</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn from industry experts and advance your tech career with our
            comprehensive online courses
          </p>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CoursePageCard course={course} key={index} />
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-black mb-4">
              Why Learn with <span className="text-[#E50914]">CoreSec</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-black mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-linear-to-r from-[#E50914] to-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Start Learning Today</h2>
          <p className="text-xl mb-8 text-gray-200">
            Join thousands of students and take your skills to the next level
          </p>
          <button className="px-8 py-4 bg-white text-[#E50914] rounded-full hover:bg-gray-100 transition-all hover:scale-105">
            Browse All Courses
          </button>
        </div>
      </section>
    </div>
  );
}

export default page;
