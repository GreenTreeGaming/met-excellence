"use client";

import React from "react";
import { Trophy, Users, GraduationCap, Clock } from "lucide-react";

const page = () => {
  return (
    <section className="bg-white text-gray-800">
      {/* Hero */}
      <div className="bg-[#f0f6ff] py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-100 rounded-full opacity-30 blur-2xl animate-float"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#dceeff] rounded-full opacity-40 blur-3xl animate-float-slow"></div>
        <div className="max-w-4xl mx-auto relative z-10 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2563eb] mb-4">
            Chess Classes at MET Excellence <span className="inline-block animate-bounce">♟️</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Learn strategies, compete in tournaments, and sharpen your mind —
            from beginner to advanced.
          </p>
          <img
            src="3chessclass.webp"
            alt="Chess Class"
            className="rounded-xl shadow-md mx-auto max-w-2xl"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[#2563eb] text-white py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { stat: "50+", label: "Students Taught" },
            { stat: "5+", label: "Tutors" },
            { stat: "3", label: "Skill Levels Offered" },
            { stat: "All Ages", label: "Welcomed!" },
          ].map((item, i) => (
            <div
              key={i}
              className="transition-all duration-300 hover:scale-105"
            >
              <p className="text-3xl font-bold">{item.stat}</p>
              <p className="text-sm opacity-90">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Class Overview */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center animate-fade-in">
        <div>
          <img
            src="4chessclass.webp"
            alt="Students Playing Chess"
            className="rounded-xl shadow-lg hover:shadow-xl transition"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-[#2563eb] mb-4">
            What You’ll Learn
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
            <li>Opening theory, midgame planning, and endgame tactics</li>
            <li>Competitive play and how tournaments work</li>
            <li>Visualization, time management, and sportsmanship</li>
            <li>Level-based advancement and ELO-style rating system</li>
            <li>Opportunities to earn trophies & prizes 🏆</li>
          </ul>
        </div>
      </div>

      {/* Highlights */}
      <div className="bg-[#f9fcff] py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#2563eb] mb-10">
            Why Join Our Chess Class?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Users />, title: "Community", desc: "Join a welcoming group of passionate students & mentors." },
              { icon: <Trophy />, title: "Competition", desc: "Weekly games, rankings, and real prizes keep it fun!" },
              { icon: <GraduationCap />, title: "Growth", desc: "Learn discipline, planning, and critical thinking." },
              { icon: <Clock />, title: "Flexible Schedule", desc: "Online & in-person sessions — check email/WeChat for times." },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-lg transition-all hover:scale-[1.03]"
              >
                <div className="text-[#2563eb] w-8 h-8 mx-auto mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-[#2563eb] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Class Levels */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-[#2563eb] text-center mb-12">
          Class Groups & Levels
        </h2>

        {[{
          title: "♟️ Beginner Group",
          desc: "Perfect for students just starting out with chess or wanting to solidify the fundamentals in a fun, no-pressure environment.",
          topics: ["Basic rules & piece movements", "Opening principles", "Simple tactics (pins, forks, etc.)", "Checkmate patterns"],
          time: "Sundays @ 1:00 PM – 3:00 PM CST"
        }, {
          title: "♞ Intermediate Group",
          desc: "Designed for players with some experience who want to deepen their understanding and improve their game.",
          topics: ["Opening theory & traps", "Middle game strategy", "Time management & planning", "Intro to positional play"],
          time: "Sundays @ 1:00 PM – 3:00 PM CST"
        }, {
          title: "♛ Advanced Group",
          desc: "For serious players and tournament-ready students seeking to refine high-level concepts and sharpen skills under pressure.",
          topics: ["Advanced tactics & combinations", "Endgame technique", "Complex positional evaluations", "Game analysis & strategy"],
          time: "Sundays @ 1:00 PM – 3:00 PM CST"
        }].map((group, i) => (
          <div key={i} className="mb-16 bg-[#f9fcff] rounded-xl p-6 md:p-10 border hover:shadow-md transition-all">
            <h3 className="text-2xl font-bold text-[#2563eb] mb-2">{group.title}</h3>
            <p className="text-gray-700 mb-4">{group.desc}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              {group.topics.map((topic, j) => (
                <li key={j}>{topic}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-600">
              <strong>Time:</strong> {group.time}
            </p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center py-20">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfsBLjoVsIYgjfD-tdugOPzQY7bH-13Ry4RX-ALVIIvvxcQgQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#2563eb] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition transform hover:scale-105"
        >
          Sign Up for Chess →
        </a>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 10s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-in-out forwards;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default page;