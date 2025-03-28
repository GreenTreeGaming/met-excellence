import React from 'react'
import { MousePointerClick, Book, Rocket } from 'lucide-react'

const Section3 = () => {
  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2563eb] mb-6">
          How It Works
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-20">
          Getting started with MET Excellence is easy — whether you're a student looking to learn or a tutor eager to help.
        </p>

        {/* Connector Line */}
        <svg
          className="absolute hidden md:block top-[260px] left-0 w-full h-64 z-0"
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 100 Q 250 0 500 100 T 1000 100"
            stroke="#cbd5e1"
            strokeWidth="3"
            fill="none"
          />
        </svg>

        {/* Step Cards */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Step 1 */}
          <div className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col items-center shadow-sm md:translate-y-8">
            <MousePointerClick className="text-[#2563eb] w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold text-[#2563eb] mb-2">Sign Up</h3>
            <p className="text-gray-600 text-center">
              Join us by signing up as a student or tutor — it's quick and totally free.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col items-center shadow-sm md:-translate-y-8">
            <Book className="text-[#2563eb] w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold text-[#2563eb] mb-2">Choose a Class</h3>
            <p className="text-gray-600 text-center">
              Browse our available classes and pick what interests you most — from chemistry to computer science.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col items-center shadow-sm md:translate-y-8">
            <Rocket className="text-[#2563eb] w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold text-[#2563eb] mb-2">Start Learning</h3>
            <p className="text-gray-600 text-center">
              Dive into interactive sessions and grow with the support of passionate tutors.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section3