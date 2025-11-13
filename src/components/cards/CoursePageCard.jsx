import { BarChart, CheckCircle, Clock, Star, Users } from "lucide-react";
import React from "react";

function CoursePageCard({ course }) {
  return (
    <section className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all group">
      {/* Course Header */}
      <section className="h-48 relative bg-black">
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs bg-white">
              {course.level}
            </span>
            <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full">
              <Star className="text-yellow-400 fill-yellow-400" size={14} />
              <span className="text-white text-xs">{course.rating}</span>
            </div>
          </div>
        </div>
      </section>
      {/* Course Content */}
      <section className="p-6">
        <h3 className="text-xl text-black mb-3 group-hover:text-[#E50914] transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{course.description}</p>
        <div className="grid grid-cols-3 gap-2 mb-4 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>{course.students}</span>
          </div>
          <div className="flex items-center gap-1">
            <BarChart size={14} />
            <span>{course.level}</span>
          </div>
        </div>
        <div className="mb-4">
          <div className="text-sm text-gray-600 mb-2">What you'll learn:</div>
          <div className="space-y-1">
            {course.modules.slice(0, 3).map((module, moduleIndex) => (
              <div
                key={moduleIndex}
                className="flex items-start gap-2 text-sm text-gray-700"
              >
                <CheckCircle
                  className="text-[#E50914] shrink-0 mt-0.5"
                  size={14}
                />
                <span>{module}</span>
              </div>
            ))}
          </div>
          {course.modules.length > 3 && (
            <div className="text-xs text-gray-500 mt-1">
              +{course.modules.length - 3} more modules
            </div>
          )}
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="text-2xl text-[#E50914]">{course.price}</div>
          <button className="px-4 py-2 bg-[#E50914] text-white rounded-full hover:bg-[#B00710] transition-colors text-sm cursor-pointer">
            Enroll Now
          </button>
        </div>
      </section>
    </section>
  );
}

export default CoursePageCard;
