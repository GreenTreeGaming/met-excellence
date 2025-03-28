'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const navLinks = [
    { href: '/classes', label: 'Classes' },
    { href: '/team', label: 'Team' },
    { href: '/join-us', label: 'Join Us' },
    { href: '/faq', label: 'FAQ' },
    { href: '/news', label: 'News' },
    { href: '/resources', label: 'Resources' },
  ]

  return (
    <nav className="bg-[#edf5f9]/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-3 hover:scale-[1.03] transition-transform"
        >
          <img src="/logo.svg" alt="MET Excellence logo" className="h-9" />
          <span className="text-xl font-bold text-[#2563eb] tracking-tight">
            MET Excellence
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 text-[#2563eb] font-medium text-[15px]">
          {navLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="hover:text-blue-700 hover:underline underline-offset-4 transition"
            >
              {label}
            </a>
          ))}
          <a
            href="/donate"
            className="bg-[#2563eb] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition transform hover:scale-105 active:scale-100"
          >
            Donate 🤍
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#2563eb] focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 px-4 space-y-3 text-[#2563eb] font-medium text-base">
          {navLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="block hover:text-blue-700 transition"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="/donate"
            className="block bg-[#2563eb] text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-700 transition text-center"
            onClick={() => setMenuOpen(false)}
          >
            Donate 🤍
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
