"use client"

import React from "react"
import { CalendarDays, Megaphone, BookOpenCheck } from "lucide-react"

const updates = [
  {
    title: "Spring 2025 Classes Launched!",
    description:
      "We’ve officially launched our Spring 2025 sessions — including new offerings in Chemistry, Python, and UMTYMP Prep!",
    date: "March 1, 2025",
    icon: <BookOpenCheck className="w-6 h-6 text-[#2563eb]" />,
  },
  {
    title: "Winter Chess Tournament Results 🏆",
    description:
      "Huge congrats to all participants in our Winter Chess Tournament. Check out highlights and leaderboard results.",
    date: "February 20, 2025",
    icon: <CalendarDays className="w-6 h-6 text-[#2563eb]" />,
  },
  {
    title: "Now Recruiting Tutors & Officers!",
    description:
      "Love teaching or organizing? We're looking for new tutors and student leaders — apply today!",
    date: "February 5, 2025",
    icon: <Megaphone className="w-6 h-6 text-[#2563eb]" />,
  },
]

const page = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2563eb] text-center mb-6">
          News & Updates
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Stay in the loop with what's happening at MET Excellence — from new classes to student success stories and upcoming events!
        </p>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {updates.map((item, index) => (
            <div
              key={index}
              className="bg-[#f9fcff] border border-gray-100 p-6 rounded-xl hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                {item.icon}
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
              <h3 className="text-lg font-semibold text-[#2563eb] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-700 mb-4 text-sm">
            Want to share something with our community?
          </p>
          <a
            href="mailto:mincathepig@gmail.com"
            className="inline-block bg-[#2563eb] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition transform hover:scale-105"
          >
            Submit an Update
          </a>
        </div>
      </div>
    </section>
  )
}

export default page
