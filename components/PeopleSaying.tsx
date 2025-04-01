"use client"

import React, { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'
import { FaStar } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'

const testimonials = [
  {
    name: 'Xin Ran',
    role: 'Parent',
    quote:
      'Thanks to the organizers, the children gained a lot, and the teachers were very organized and patient. 👍',
  },
  {
    name: 'Mi Sha',
    role: 'Parent',
    quote:
      'The first thing my son said when he got in the car was that it was worth driving 45 minutes. Thank you again. 🙏',
  },
  {
    name: 'Sharon',
    role: 'Parent',
    quote:
      'Thank you so much for organizing this event! My child really enjoys it and is already looking forward to next Sunday.',
  },
]

const PeopleSaying = () => {
  const { ref, inView } = useInView({ triggerOnce: true })
  const [animateStars, setAnimateStars] = useState(false)

  useEffect(() => {
    if (inView) setAnimateStars(true)
  }, [inView])

  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden">
      {/* Gradient Blobs */}
      <div className="absolute top-[-80px] left-[-100px] w-[300px] h-[300px] bg-[#d6eaff] rounded-full blur-3xl opacity-30 z-0 animate-pulse-slow" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[280px] h-[280px] bg-[#cce0ff] rounded-full blur-3xl opacity-30 z-0 animate-pulse-slow" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2563eb] mb-6">
          What People Are Saying
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-16">
          Real stories from students, parents, and tutors whose lives have been impacted by MET Excellence.
        </p>

        <div
          ref={ref}
          className="flex flex-col sm:flex-row gap-10 overflow-x-auto pb-4 sm:overflow-visible sm:justify-center"
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="min-w-[280px] sm:min-w-0 bg-[#f9fcff] rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 text-left flex flex-col justify-between relative"
            >
              <MessageCircle className="text-[#2563eb] w-6 h-6 mb-4" />
              <p className="text-gray-700 italic mb-6">"{t.quote}"</p>

              {/* Star Ratings */}
              <div className="flex mb-4 relative">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`relative transition-all duration-500 ease-out ${
                      animateStars ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <FaStar className="text-yellow-400 w-5 h-5" />
                    {/* Sparkle effect */}
                    <span className="absolute top-0 left-0 w-full h-full pointer-events-none">
                      {animateStars && (
                        <span className="absolute top-0 left-0 w-1 h-1 bg-yellow-300 rounded-full animate-ping-sparkle" />
                      )}
                    </span>
                  </span>
                ))}
              </div>

              <div>
                <p className="text-[#2563eb] font-semibold">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Extra styling for animation */}
      <style jsx>{`
        @keyframes sparkle {
          0% {
            opacity: 1;
            transform: scale(0.8) translate(0, 0);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.4) translate(2px, -2px);
          }
          100% {
            opacity: 0;
            transform: scale(2) translate(-4px, 4px);
          }
        }

        .animate-ping-sparkle {
          animation: sparkle 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  )
}

export default PeopleSaying