"use client"

import React from "react"
import {
  BookOpen,
  FlaskConical,
  Code,
  Brain,
  ActivitySquare,
  ExternalLink,
  Trophy,
} from "lucide-react"
import { motion } from "framer-motion"

type Resource = {
  title: string
  description: string
  link: string
  icon: React.ReactNode
  category: string
}

const resources: Resource[] = [
  // Math
  {
    title: "AoPS Math Resources",
    description: "High-quality problem solving materials for AMC, UMTYMP, and more.",
    link: "https://artofproblemsolving.com",
    icon: <Trophy className="w-5 h-5 text-[#2563eb]" />,
    category: "Math",
  },
  {
    title: "Khan Academy – Geometry",
    description: "Interactive lessons and practice on geometry fundamentals.",
    link: "https://www.khanacademy.org/math/geometry",
    icon: <BookOpen className="w-5 h-5 text-[#2563eb]" />,
    category: "Math",
  },
  {
    title: "UMTYMP Info",
    description: "University of Minnesota's official UMTYMP program page.",
    link: "https://r.umn.edu/academics/UMTYMP",
    icon: <Trophy className="w-5 h-5 text-[#2563eb]" />,
    category: "Math",
  },

  // Science
  {
    title: "ChemCollective",
    description: "Virtual labs and problem sets to support chemistry learning.",
    link: "https://chemcollective.org",
    icon: <FlaskConical className="w-5 h-5 text-[#2563eb]" />,
    category: "Science",
  },
  {
    title: "CrashCourse Biology",
    description: "Fun and fast-paced videos covering high school biology topics.",
    link: "https://www.youtube.com/playlist?list=PL3EED4C1D684D3ADF",
    icon: <Brain className="w-5 h-5 text-[#2563eb]" />,
    category: "Science",
  },
  {
    title: "Physics Classroom",
    description: "Concept-based physics tutorials and interactive tools.",
    link: "https://www.physicsclassroom.com",
    icon: <ActivitySquare className="w-5 h-5 text-[#2563eb]" />,
    category: "Science",
  },

  // Coding
  {
    title: "W3Schools Python",
    description: "Hands-on Python tutorials and reference material.",
    link: "https://www.w3schools.com/python/",
    icon: <Code className="w-5 h-5 text-[#2563eb]" />,
    category: "Coding",
  },
  {
    title: "Replit",
    description: "Browser-based IDE to code and collaborate in Python and more.",
    link: "https://replit.com",
    icon: <Code className="w-5 h-5 text-[#2563eb]" />,
    category: "Coding",
  },

  // Chess
  {
    title: "Lichess.org",
    description: "Free online chess platform with lessons, puzzles, and tournaments.",
    link: "https://lichess.org",
    icon: <Trophy className="w-5 h-5 text-[#2563eb]" />,
    category: "Chess",
  },
  {
    title: "ChessKid",
    description: "Safe and fun chess learning for kids — play, solve, and grow.",
    link: "https://www.chesskid.com",
    icon: <Trophy className="w-5 h-5 text-[#2563eb]" />,
    category: "Chess",
  },
]

const categories = ["Math", "Science", "Coding", "Chess"]

const page = () => {
  return (
    <section className="bg-white py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#2563eb] mb-4">
          Learning Resources
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          Curated tools and sites that align with the subjects we teach at MET Excellence. Use them to extend your learning and practice at your own pace.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        {categories.map((cat, catIndex) => (
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-[#2563eb] mb-4">{cat}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {resources
                .filter((r) => r.category === cat)
                .map((res, index) => (
                  <motion.a
                    key={index}
                    href={res.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl bg-[#f9fcff] hover:shadow-lg hover:-translate-y-1 transition-all group"
                  >
                    <div className="mt-1 group-hover:scale-110 transition-transform">
                      {res.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[#2563eb] font-semibold text-base group-hover:underline">
                        {res.title}
                      </h3>
                      <p className="text-sm text-gray-600">{res.description}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 mt-1 text-gray-400 group-hover:text-[#2563eb]" />
                  </motion.a>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default page
