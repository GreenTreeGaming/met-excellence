"use client"

import React from 'react'
import {
  Users,
  Star,
  HeartHandshake,
  BookOpenCheck,
  ArrowRight,
} from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: <Users className="text-[#2563eb] w-8 h-8 mb-3" />,
    title: 'Supportive Team',
    desc: 'Collaborate with driven peers who are passionate about teaching and giving back.',
  },
  {
    icon: <Star className="text-[#2563eb] w-8 h-8 mb-3" />,
    title: 'Real Impact',
    desc: 'Make a meaningful difference in the lives of hundreds of students — locally and globally.',
  },
  {
    icon: <HeartHandshake className="text-[#2563eb] w-8 h-8 mb-3" />,
    title: 'Leadership Experience',
    desc: 'Lead sessions, run initiatives, and build real-world collaboration and communication skills.',
  },
  {
    icon: <BookOpenCheck className="text-[#2563eb] w-8 h-8 mb-3" />,
    title: 'Flexible Schedule',
    desc: 'Choose classes and times that work with your availability. We know you’re busy.',
  },
]

const page = () => {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#2563eb] mb-6"
        >
          Join the MET Excellence Team
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-700 text-lg max-w-2xl mx-auto mb-12"
        >
          We're a student-powered nonprofit working to educate and empower learners. Whether you're passionate about math, science, chess, or helping others grow — there's a place for you at MET.
        </motion.p>

        <motion.img
          src="/publictutoring.jpg"
          alt="Team of Tutors"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-xl shadow mb-16 max-w-3xl mx-auto"
        />
      </div>

      {/* What You Can Expect */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-[#2563eb] text-center mb-12">
          What You Can Expect
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#f9fcff] p-6 rounded-xl border hover:shadow-xl hover:-translate-y-1 transform transition-all"
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-[#2563eb] mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold text-[#2563eb] mb-4">
          Ready to Join?
        </h2>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto text-sm sm:text-base">
          We’re always excited to welcome new tutors, leaders, and creatives to the MET team. Apply below and we’ll follow up!
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc4y_cO4y4v5_MI474o9HFHkreYgK67cPZQO6Ns7b9yj-Z7yw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#2563eb] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition transform hover:scale-105"
        >
          Apply Now <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  )
}

export default page
