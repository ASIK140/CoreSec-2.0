import React from "react";
import { Star } from "lucide-react";
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    comment:
      "CoreSec transformed our digital presence. Their expertise in web development and cloud solutions is unmatched.",
    rating: 4,
  },
  {
    name: "Michael Chen",
    role: "Student, AI Course",
    comment:
      "The AI course exceeded my expectations. Clear explanations, hands-on projects, and excellent support throughout.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "CTO, FinanceApp",
    comment:
      "Outstanding service! They delivered our mobile app on time and within budget. Highly recommend their services.",
    rating: 5,
  },
];
function Testimonials() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-black mb-4">
            What Our <span className="text-[#E50914]">Clients Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don&#39;t just take our word for it - hear from our satisfied
            clients
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-[#E50914] fill-[#E50914]"
                    size={20}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                &ldquo;{testimonial.comment}&rdquo;
              </p>
              <div>
                <div className="text-black">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
