import CTA from "@/components/sections/CTA";
import { Award, Eye, Heart, Target } from "lucide-react";
import React from "react";
const values = [
  {
    icon: <Award className="text-[#E50914]" size={32} />,
    title: "Excellence",
    description:
      "We strive for perfection in every project, delivering solutions that exceed expectations.",
  },
  {
    icon: <Heart className="text-[#E50914]" size={32} />,
    title: "Integrity",
    description:
      "Transparency and honesty guide all our client relationships and business practices.",
  },
  {
    icon: <Target className="text-[#E50914]" size={32} />,
    title: "Innovation",
    description:
      "We stay ahead of technology trends to provide cutting-edge solutions.",
  },
  {
    icon: <Eye className="text-[#E50914]" size={32} />,
    title: "Client-Focused",
    description:
      "Your success is our priority. We tailor solutions to your unique needs.",
  },
];
function page() {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-linear-to-br from-black to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-6">
            About <span className="text-[#E50914]">CoreSec Technologies</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovating Technology. Securing the Future.
          </p>
        </div>
      </section>
      {/* Story Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1176"
                alt="Team Collaboration"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl text-black">Our Story</h2>
              <p className="text-gray-700">
                Founded in 2010, CoreSec Technologies emerged from a simple
                vision: to make advanced technology accessible and practical for
                businesses of all sizes. What started as a small team of
                passionate developers has grown into a full-service technology
                company with a global reach.
              </p>
              <p className="text-gray-700">
                Over the past 15 years, we've completed over 500 projects,
                served clients across 30+ countries, and trained more than
                10,000 students through our comprehensive online courses. Our
                journey has been driven by innovation, integrity, and an
                unwavering commitment to our clients' success.
              </p>
              <p className="text-gray-700">
                Today, we stand at the intersection of technology services and
                education, uniquely positioned to not only build solutions but
                also empower the next generation of tech professionals.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Vision & Mission */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-md border-t-4 border-[#E50914]">
              <div className="w-16 h-16 bg-[#E50914]/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="text-[#E50914]" size={32} />
              </div>
              <h2 className="text-3xl text-black mb-4">Our Vision</h2>
              <p className="text-gray-700">
                To be the global leader in technology innovation and education,
                empowering businesses and individuals to thrive in an
                increasingly digital world. We envision a future where
                cutting-edge technology is accessible to all, driving progress
                and creating opportunities worldwide.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-md border-t-4 border-[#E50914]">
              <div className="w-16 h-16 bg-[#E50914]/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="text-[#E50914]" size={32} />
              </div>
              <h2 className="text-3xl text-black mb-4">Our Mission</h2>
              <p className="text-gray-700">
                To deliver exceptional technology solutions and world-class
                education that transform businesses and careers. We are
                committed to staying at the forefront of innovation, maintaining
                the highest standards of quality, and building lasting
                partnerships with our clients and students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Value */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-black mb-4">
              Our Core <span className="text-[#E50914]">Values</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-50 rounded-2xl mb-4">
                  {value.icon}
                </div>
                <h3 className="text-black mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}

export default page;
