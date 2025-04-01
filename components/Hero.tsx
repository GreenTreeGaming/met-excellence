import React from 'react'

const Header = () => {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 lg:py-28">
      {/* Light Gradient Blob Background */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#c7e4ff] rounded-full opacity-30 blur-3xl z-0 animate-pulse-slow" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-[#d4d9ff] rounded-full opacity-30 blur-3xl z-0 animate-pulse-slow" />

      <div className="relative max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16 z-10 px-4">
        {/* Text Content */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#2563eb] leading-tight mb-6">
            Empowering Students <br /> Beyond the Classroom
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            MET Excellence offers a diverse range of free classes to empower students by allowing their interests to grow in various subjects.
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:justify-start gap-4">
            <a
              href="/classes"
              className="bg-[#2563eb] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition transform hover:scale-105"
            >
              Start Learning
            </a>
            <a
              href="/join-us"
              target='_blank'
              className="bg-gray-200 text-[#2563eb] px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition transform hover:scale-105"
            >
              Become a Tutor
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-lg relative group transition-transform duration-300 hover:rotate-1 hover:scale-[1.02]">
          <img
            src="/thumbnail1.webp" // Replace with your actual image path
            alt="Students learning"
            className="rounded-2xl border border-gray-100 shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Header