import React from "react";
import Image from "next/image";
function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-[1.02]">
      <Image
        src={course.image}
        alt="python programming"
        className="w-full"
        width={500}
        height={400}
      />

      <div className="p-6 grow">
        <div className="flex items-center gap-2 mb-4">
          {course.tags.map((tag, indx) => (
            <span
              key={indx}
              className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {course.title}
        </h3>
        <p className="text-gray-600 text-sm">{course.description}</p>
      </div>
    </div>
  );
}

export default CourseCard;
