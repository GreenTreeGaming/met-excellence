"use client"

import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const tutors = [
  {
    name: 'Aditya Nair',
    subject: 'UMTYMP',
    image: 'aditya_nair.webp',
    bio: 'Helps students master advanced math with patience, precision, and a bit of flair.',
  },
  {
    name: 'Eric Yang',
    subject: 'Chess',
    image: 'eric_yang.webp',
    bio: 'Brings strategy to life by teaching chess in a fun, competitive, and engaging way.',
  },
  {
    name: 'Felix Cheng',
    subject: 'Geometry',
    image: 'felix_cheng.webp',
    bio: 'Breaks down shapes, angles, and theorems into intuitive, visual concepts students love.',
  },
]

const Tutors = () => {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <section className="relative bg-gradient-to-b from-[#e3eeff] to-[#d4e7ff] py-24 px-6 overflow-hidden">
      {/* Fun Gradient Blobs */}
      <div className="absolute top-[-100px] left-[-120px] w-[300px] h-[300px] bg-[#cce7ff] rounded-full opacity-30 blur-3xl z-0 animate-pulse-slow" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-[#d4d9ff] rounded-full opacity-30 blur-3xl z-0 animate-pulse-slow" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2563eb] mb-6">
          Meet Our Tutors
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-14">
          Our tutors are dedicated volunteers who bring learning to life with energy, empathy, and expertise.
        </p>

        {/* Tutor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-16">
          {tutors.map((tutor, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300 text-center ${
                index % 2 === 1 ? 'md:translate-y-3' : ''
              }`}
            >
              <img
                src={tutor.image}
                alt={tutor.name}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-2 border-[#2563eb]/30"
              />
              <h3 className="text-xl font-semibold text-[#2563eb]">{tutor.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{tutor.subject}</p>
              <p className="text-gray-600 text-sm">{tutor.bio}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc4y_cO4y4v5_MI474o9HFHkreYgK67cPZQO6Ns7b9yj-Z7yw/viewform"
            target='_blank'
            className="bg-[#2563eb] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition transform hover:scale-105"
          >
            Become a Tutor
          </a>
          <a
            href="/team"
            className="border border-[#2563eb] text-[#2563eb] px-6 py-3 rounded-full font-semibold bg-white hover:bg-[#eff6ff] transition transform hover:scale-105"
          >
            View All Tutors
          </a>

        </div>

        {/* Stats Section */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        >
          <div>
            <p className="text-4xl font-bold text-[#2563eb]">
              {inView && <CountUp end={1500} duration={2} />}+
            </p>
            <p className="text-gray-600 mt-2">Students Helped</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#2563eb]">
              {inView && <CountUp end={75} duration={2} />}+
            </p>
            <p className="text-gray-600 mt-2">Tutors Involved</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#2563eb]">
              {inView && <CountUp end={40} duration={2} />}+
            </p>
            <p className="text-gray-600 mt-2">Subjects Offered</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tutors