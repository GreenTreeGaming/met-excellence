import React from 'react'
import Link from 'next/link'

const NothingHere = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl font-bold text-[#2563eb] mb-4">Nothing Here Yet</h2>
      <p className="text-gray-600 mb-6 text-sm sm:text-base">
        This page doesn't have any content yet. Stay tuned!
      </p>
      <Link
        href="/"
        className="bg-[#2563eb] text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition transform hover:scale-105"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default NothingHere
