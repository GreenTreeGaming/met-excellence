'use client'

import React from 'react'
import {
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaDiscord,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#2563eb] text-white px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Left: Branding + Nonprofit Info */}
        <div className="flex flex-col items-start space-y-3">
          <div className="flex items-center space-x-3">
            <img src="/logo.svg" alt="MET Excellence" className="h-8" />
            <span className="text-lg font-semibold">MET Excellence</span>
          </div>
          <p className="text-sm text-white/80 max-w-xs leading-relaxed">
            MET Excellence is a registered nonprofit organization in the state of Minnesota.
          </p>
        </div>

        {/* Right: Legal + Socials */}
        <div className="flex flex-col items-start space-y-5 text-sm w-full md:w-auto">
          {/* Legal Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="/terms" className="hover:underline">Terms & Conditions</a>
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
            <a href="/trust" className="hover:underline">Trust & Safety</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-5 text-white/80 text-base">
            <a
              href="mailto:metexcellence@gmail.com"
              aria-label="Email"
              className="hover:text-white transition-colors duration-300"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://instagram.com/metexcellence"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white transition-colors duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com/@METExcellence"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-white transition-colors duration-300"
            >
              <FaYoutube />
            </a>
            <a
              href="https://discord.gg/rtWSXrVUzr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="hover:text-white transition-colors duration-300"
            >
              <FaDiscord />
            </a>
            <a
              href="https://twitter.com/metexcellence"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-white transition-colors duration-300"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-10 text-sm text-white/80">
        Built by{' '}
        <a
          href="https://sarvajithkarun.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          Sarvajith Karun
        </a>
        {' '}and{' '} Mohan Atkuri
      </div>
    </footer>
  )
}

export default Footer