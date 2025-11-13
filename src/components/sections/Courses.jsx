import Image from "next/image";
import React from "react";
import CourseCard from "../cards/CourseCard";
import { ArrowRight } from "lucide-react";

const courses = [
  {
    id: 1,
    image: "/assets/thumbnail/Python_Course.png",
    tags: ["1.5 Months", "Beginner"],
    title: "Python for Beginners",
    description:
      "Learn programming fundamentals with hands-on projects and real-world applications",
  },
  {
    id: 2,
    image: "/assets/thumbnail/Full-Stack-Dev-Course.png",
    tags: ["3 Months", "Intermediate"],
    title: "Full Stack Web Development",
    description:
      "Build complete web applications using modern tools and frameworks",
  },
  {
    id: 3,
    image: "/assets/thumbnail/BackEnd-Dev-Course.jpg",

    tags: ["2 Months", "Intermediate"],
    title: "Back-End Development",
    description:
      "Build scalable REST APIs using Node.js, Express.js, and manage data with MongoDB.",
  },
];
function Courses() {
  return (
    <section className="py-16 md:py-24">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Popular Courses
        </h2>

        <div className="w-20 h-1.5 bg-red-600 mx-auto mt-4 rounded"></div>
        <p className="mt-6 text-lg text-gray-600 px-2">
          Learn from industry experts with practical, career-focused training
          programs
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors inline-flex items-center gap-2">
          View All Courses
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}

export default Courses;
