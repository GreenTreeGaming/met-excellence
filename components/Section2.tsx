import React from 'react'
import { BookOpen, Users, Lightbulb } from 'lucide-react'

const Section2 = () => {
  return (
    <section className="bg-[#f9fcff] py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2563eb] mb-6">
          What We Offer
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-16">
          MET Excellence provides high-quality, free educational resources to help students thrive academically and personally.
        </p>

        {/* Fun Card Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:-translate-y-3 hover:rotate-1 transition-all duration-300 transform shadow-md">
            <div className="bg-[#2563eb]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <BookOpen className="text-[#2563eb] w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-[#2563eb] mb-2">Free Classes</h3>
            <p className="text-gray-600">
              From STEM to humanities, students can explore their passions through free and engaging sessions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:-translate-y-3 hover:-rotate-1 transition-all duration-300 transform shadow-md md:mt-12">
            <div className="bg-[#2563eb]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="text-[#2563eb] w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-[#2563eb] mb-2">Community</h3>
            <p className="text-gray-600">
              Join a vibrant learning community of peers, mentors, and volunteer tutors committed to growth.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:-translate-y-3 hover:rotate-2 transition-all duration-300 transform shadow-md">
            <div className="bg-[#2563eb]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="text-[#2563eb] w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-[#2563eb] mb-2">Student Growth</h3>
            <p className="text-gray-600">
              We go beyond the classroom—encouraging curiosity, leadership, and confidence through learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2