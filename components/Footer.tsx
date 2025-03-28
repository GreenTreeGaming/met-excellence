import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#2563eb] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Branding */}
        <div className="flex items-center space-x-3">
          <img src="/logo.svg" alt="MET Excellence" className="h-8" />
          <span className="text-lg font-semibold">MET Excellence</span>
        </div>

        {/* Right: Legal Links */}
        <div className="flex space-x-6 text-sm">
          <a href="/terms" className="hover:underline">Terms & Conditions</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/trust" className="hover:underline">Trust & Safety</a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-8 text-sm text-white/80">
        Built by{' '}
        <a
          href="https://sarvajithkarun.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          Sarvajith Karun
        </a>
      </div>
    </footer>
  )
}

export default Footer