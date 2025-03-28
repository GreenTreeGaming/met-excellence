"use client"

import React from "react"
import { motion } from "framer-motion"

type TeamMember = {
  name: string
  role: string
  image: string
  email: string
}

const team: {
  category: string
  members: TeamMember[]
}[] = [
  {
    category: "Board of Directors",
    members: [
      {
        name: "Aaron Zou",
        role: "President",
        image: "/team/aaron_zou.webp",
        email: "mincathepig@gmail.com",
      },
      {
        name: "Eric Yang",
        role: "Vice President",
        image: "/team/eric_yang.webp",
        email: "yangeri001@isd284.com",
      },
      {
        name: "Sarvajith Karun",
        role: "Chief Technology Officer",
        image: "/team/sarvajith_karun.jpg",
        email: "karunsarvajith@gmail.com",
      },
      {
        name: "Anishk Nag",
        role: "Director of Volunteers",
        image: "/team/anishk_nag.webp",
        email: "naganishk000@isd284.com",
      },
      {
        name: "Evan Xiong",
        role: "Chair",
        image: "/team/evan_xiong.webp",
        email: "evanxionga@gmail.com",
      },
      {
        name: "Evan Huss",
        role: "Director of Marketing",
        image: "/team/evan_huss.webp",
        email: "evan.huss00@gmail.com",
      },
      {
        name: "Felix Cheng",
        role: "Director of Finance",
        image: "/team/felix_cheng.webp",
        email: "chengfeel0@gmail.com",
      },
      {
        name: "Kevin Qiu",
        role: "Program Director",
        image: "/team/kevin_qiu.webp",
        email: "kevinhqiu2007@gmail.com",
      },
    ],
  },
  {
    category: "Officers",
    members: [
      {
        name: "Shubham Panchal",
        role: "STEM Officer",
        image: "/team/shubham_panchal.webp",
        email: "panchshu000@isd284.com",
      },
      {
        name: "Harry Ding",
        role: "Marketing Officer",
        image: "/team/harry_ding.webp",
        email: "dinghar000@gmail.com",
      },
      {
        name: "Jason Lai",
        role: "Chinese Officer",
        image: "/team/jason_lai.webp",
        email: "laiyij000@isd284.com",
      },
    ],
  },
  {
    category: "Other Subjects",
    members: [
      {
        name: "Jason Lai",
        role: "Chinese Culture Tutor",
        image: "/team/jason_lai.webp",
        email: "laiyij000@isd284.com",
      },
    ],
  },
  {
    category: "Chess Tutors",
    members: [
      {
        name: "Evan Xiong",
        role: "Chess Tutor",
        image: "/team/evan_xiong.webp",
        email: "evanxionga@gmail.com",
      },
      {
        name: "Eric Yang",
        role: "Chess Tutor",
        image: "/team/eric_yang.webp",
        email: "yangeri001@isd284.com",
      },
      {
        name: "Felix Cheng",
        role: "Chess Tutor",
        image: "/team/felix_cheng.webp",
        email: "chengfeel0@gmail.com",
      },
      {
        name: "Aaron Zou",
        role: "Chess Tutor",
        image: "/team/aaron_zou.webp",
        email: "mincathepig@gmail.com",
      },
    ],
  },
  {
    category: "STEM Tutors",
    members: [
      {
        name: "Kevin Qiu",
        role: "AMC 8, Physics Tutor",
        image: "/team/kevin_qiu.webp",
        email: "kevinhqiu2007@gmail.com",
      },
      {
        name: "Felix Cheng",
        role: "Geometry Tutor",
        image: "/team/felix_cheng.webp",
        email: "chengfeel0@gmail.com",
      },
      {
        name: "Evan Huss",
        role: "Biology Tutor",
        image: "/team/evan_huss.webp",
        email: "evan.huss00@gmail.com",
      },
      {
        name: "Anishk Nag",
        role: "Chemistry Tutor",
        image: "/team/anishk_nag.webp",
        email: "naganishk000@isd284.com",
      },
      {
        name: "Shubham Panchal",
        role: "Engineering Tutor",
        image: "/team/shubham_panchal.webp",
        email: "panchshu000@isd284.com",
      },
      {
        name: "Aaron Zou",
        role: "CS, UMTYMP Tutor",
        image: "/team/aaron_zou.webp",
        email: "mincathepig@gmail.com",
      },
      {
        name: "Eric Yang",
        role: "UMTYMP Prep Tutor",
        image: "/team/eric_yang.webp",
        email: "yangeri001@isd284.com",
      },
      {
        name: "Aditya Nair",
        role: "UMTYMP Prep Tutor",
        image: "/team/aditya_nair.webp",
        email: "nairadi000@isd284.com",
      },
    ],
  },
]

const TeamPage = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#2563eb] mb-12"
        >
          Meet the Team
        </motion.h1>

        {team.map((group, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-xl font-bold text-[#2563eb] mb-5 text-left">{group.category}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
              {group.members.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="bg-[#f9fcff] border border-gray-100 rounded-xl p-4 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative mb-3">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 mx-auto rounded-full object-cover transition-all hover:ring-4 hover:ring-[#2563eb]/30"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-[#2563eb] mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-xs mb-3">{member.role}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-xs bg-[#2563eb] text-white px-3 py-1.5 rounded-full font-medium hover:bg-blue-700 transition"
                  >
                    Email
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Join Our Team CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-b from-[#e6f0ff] to-[#d8e7ff] py-20 px-6 relative overflow-hidden"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2563eb] mb-3">
            Want to Be Part of the Team?
          </h2>
          <p className="text-gray-700 mb-6 text-sm sm:text-base">
            We're always looking for passionate educators, organizers, and creators to join our mission.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc4y_cO4y4v5_MI474o9HFHkreYgK67cPZQO6Ns7b9yj-Z7yw/viewform"
            target="_blank"
            className="inline-block bg-[#2563eb] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition transform hover:scale-105"
          >
            Join Our Team →
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default TeamPage