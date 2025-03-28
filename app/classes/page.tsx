"use client"

import React from 'react'

const classes: {
  title: string;
  tutor: string;
  level: string;
  description: string;
  image: string;
  status: ClassStatus;
  learnMoreLink: string;
  signUpLink: string;
}[] = [
  {
    title: 'UMTYMP Prep',
    tutor: 'Eric Yang, Kevin Qiu, Aaron Zou, Aditya Nair',
    level: 'Advanced',
    description: 'We all know how wonderful the UMTYMP program is, but we also know that the entrance exam is very tough. Ensure that you pass the entrance exam by signing up for this exam preparation class! We will go over test taking strategy, tricks to save you time and effort, and much more!',
    image: 'umtymp.webp',
    status: 'online',
    learnMoreLink: 'https://r.umn.edu/academics/UMTYMP',
    signUpLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeP2-uXB6bVj9VvLlEo21zJgkW-GZ1A2ck2BJj2dFL868pwkg/viewform?entry.388184123=UMTYMP+Prep+(Info+Meeting+March+9)',
  },
  {
    title: 'Chess',
    tutor: 'Eric Yang',
    level: 'Beginner–Intermediate',
    description: '[LOCATIONS VARY FOR CHESS. Check emails and wechat for the correct location.] Instruction and Tournaments. Beginner to Advanced level. Tournaments held! Group instruction and ELO system. All ages welcome!',
    image: 'chess.webp',
    status: 'in-person',
    learnMoreLink: '/chess',
    signUpLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfsBLjoVsIYgjfD-tdugOPzQY7bH-13Ry4RX-ALVIIvvxcQgQ/viewform',
  },
  {
    title: 'Intro to Python',
    tutor: 'Aaron Zou and Mohan Atkuri',
    level: 'Intermediate',
    description: 'This is a beginner level class on Python, the programming language. All ages are welcome, and no prior programming experience is required. Get familiar with Python syntax and computer science ideas. We will build a mini-project using Python towards the end of the course and give real-world insight into the usefulness of computer science!',
    image: 'python.webp',
    status: 'online',
    learnMoreLink: 'https://metexcellence.org/umtymp',
    signUpLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfHjGPIKKxwpz0A7kLa53gDLWxbylUiJ6n8fpWfCW0Wx0WXkA/viewform',
  },

  {
    title: 'Intro to Chemistry',
    tutor: 'Anishk Nag',
    level: 'Intermediate',
    description: 'This course is an introductory course to basic chemistry principles and ideas. All ages are welcome, we will be working towards building understanding of chemistry and the ideas that shape our world.',
    image: 'chemistry.webp',
    status: 'coming-soon',
    learnMoreLink: 'https://metexcellence.org/umtymp',
    signUpLink: 'https://metexcellence.org/signup-umtymp',
  },
  {
    title: 'AMC 8 Prep',
    tutor: 'Kevin Qiu',
    level: 'Advanced',
    description: 'This rigorous 16-week course prepares you for the AMC 8 next fall. You can sign up for the class even if it is still going on; we cover different topics every week. This class will cover test strategies, number theory, geometry, combinatorics and probability, and algebra. Other topics will also be covered. We will go over previous AMC 8 tests.',
    image: 'amc8.webp',
    status: 'coming-soon',
    learnMoreLink: 'https://metexcellence.org/umtymp',
    signUpLink: 'https://metexcellence.org/signup-umtymp',
  },
  {
    title: 'Intro to Physics',
    tutor: 'Kevin Qiu',
    level: 'Beginner',
    description: "This class will introduce the basic principles of mechanical physics: kinematics, gravity, and Newton's laws.",
    image: 'physics.webp',
    status: 'coming-soon',
    learnMoreLink: 'https://metexcellence.org/umtymp',
    signUpLink: 'https://metexcellence.org/signup-umtymp',
  },
  {
    title: 'Biology',
    tutor: 'Evan Huss',
    level: 'Beginner',
    description: 'Introduction to Middle School and 10th Grade Biology.',
    image: 'biology.jpg',
    status: 'coming-soon',
    learnMoreLink: 'https://metexcellence.org/umtymp',
    signUpLink: 'https://metexcellence.org/signup-umtymp',
  },

  {
    title: 'Geometry',
    tutor: 'Felix Cheng',
    level: 'Beginner',
    description: "This course is a detailed introduction into Geometry (Euclidean) designed to foster students' minds with ideas of proofs, congruence, similarity, and problem solving. For a more advanced Geometry course, or if you are looking for a competition-math style class, please sign up for AMC 8 Prep.",
    image: 'geometry.jpg',
    status: 'coming-soon',
    learnMoreLink: 'https://metexcellence.org/umtymp',
    signUpLink: 'https://metexcellence.org/signup-umtymp',
  },
]

type ClassStatus = 'in-person' | 'online' | 'coming-soon' | 'full';

const statusStyles: Record<ClassStatus, { text: string; color: string; icon: string }> = {
  "in-person": { text: "In-Person", color: "bg-green-500", icon: "🏫" },
  online: { text: "Online", color: "bg-blue-500", icon: "💻" },
  "coming-soon": { text: "Coming Soon", color: "bg-yellow-500", icon: "⏳" },
  full: { text: "Full", color: "bg-red-500", icon: "❌" },
}

const page = () => {
  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute -top-10 left-10 w-48 h-48 bg-blue-100 opacity-30 rounded-full blur-3xl animate-float-slow z-0" />
      <div className="absolute -bottom-10 right-10 w-60 h-60 bg-blue-200 opacity-20 rounded-full blur-2xl animate-float z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2563eb] text-center mb-12 animate-fade-in">
          Explore Our Classes
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((cls, index) => {
            const status = statusStyles[cls.status]
            return (
              <div
                key={index}
                className="relative bg-[#f9fcff] border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col hover:scale-[1.015] duration-300"
              >
                {/* Status Flag */}
                {status.text && (
                  <div className={`absolute top-3 right-3 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 ${status.color}`}>
                    <span>{status.icon}</span>
                    <span>{status.text}</span>
                  </div>
                )}

                {/* Image */}
                <img
                  src={cls.image}
                  alt={cls.title}
                  className="w-full h-40 object-cover"
                />

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h2 className="text-xl font-semibold text-[#2563eb] mb-2">{cls.title}</h2>
                    <p className="text-sm text-gray-500 mb-3">
                      <span className="font-medium text-gray-700">Tutor:</span> {cls.tutor}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">{cls.description}</p>
                    <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 text-xs rounded-full mb-4">
                      {cls.level}
                    </span>
                  </div>

                  {/* CTA Buttons */}
                  <div className="mt-auto flex space-x-3 pt-4">
                    {cls.title !== "Intro to Python" && (
                      <a
                        href={cls.status === "coming-soon" ? "#" : cls.learnMoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                          cls.status === "coming-soon"
                            ? "text-gray-400 bg-gray-100 border-gray-200 cursor-not-allowed"
                            : "text-[#2563eb] bg-white border-[#2563eb] hover:bg-[#eff6ff]"
                        }`}
                        onClick={(e) => cls.status === "coming-soon" && e.preventDefault()}
                      >
                        Learn More
                      </a>
                    )}
                    <a
                      href={cls.status === "coming-soon" ? "#" : cls.signUpLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1 transition ${
                        cls.status === "coming-soon"
                          ? "text-gray-300 bg-gray-200 cursor-not-allowed"
                          : "text-white bg-[#2563eb] hover:bg-blue-700"
                      }`}
                      onClick={(e) => cls.status === "coming-soon" && e.preventDefault()}
                    >
                      Sign Up <span className="text-inherit text-base">→</span>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Join Our Team Section */}
      <section className="mt-24 bg-[#edf5f9] py-16 px-6 rounded-xl relative z-10 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2563eb] mb-4">
            Want to Make a Difference?
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Join MET Excellence as a tutor or team member and help students reach their full potential.
          </p>
          <a
            href="#join"
            className="inline-block bg-[#2563eb] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition transform hover:scale-105"
          >
            Join Our Team →
          </a>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease-in-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 10s ease-in-out infinite;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  )
}

export default page