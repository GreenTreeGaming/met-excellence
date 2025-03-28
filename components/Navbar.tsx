import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-[#edf5f9]/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 hover:scale-[1.03] transition-transform">
          <img
            src="/logo.svg"
            alt="MET Excellence logo"
            className="h-9"
          />
          <span className="text-xl font-bold text-[#2563eb] tracking-tight">
            MET Excellence
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-6 text-[#2563eb] font-medium text-[15px]">
          <a href="/classes" className="hover:text-blue-700 hover:underline underline-offset-4 transition">Classes</a>
          <a href="/team" className="hover:text-blue-700 hover:underline underline-offset-4 transition">Team</a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSc4y_cO4y4v5_MI474o9HFHkreYgK67cPZQO6Ns7b9yj-Z7yw/viewform" target="_blank" className="hover:text-blue-700 hover:underline underline-offset-4 transition">Join Us</a>
          <a href="/faq" className="hover:text-blue-700 hover:underline underline-offset-4 transition">FAQ</a>
          <a href="/resources" className="hover:text-blue-700 hover:underline underline-offset-4 transition">Resources</a>

          {/* Donate Button */}
          <a
            href="/donate"
            className="bg-[#2563eb] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition transform hover:scale-105 active:scale-100"
          >
            Donate 🤍
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
