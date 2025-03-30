"use client"

import React, { useState } from "react"
import { ChevronDown } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

type FAQ = {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: "What is MET Excellence?",
    answer:
      "MET Excellence is a free student-led tutoring organization offering a wide range of academic and enrichment classes to help students grow beyond the classroom.",
  },
  {
    question: "Are all the classes really free?",
    answer:
      "Yes! All classes are completely free, thanks to our dedicated volunteer tutors and generous donors.",
  },
  {
    question: "Who can join the classes?",
    answer:
      "Any student who’s excited to learn! We offer beginner to advanced levels across subjects like math, chess, coding, and more.",
  },
  {
    question: "Can I become a tutor?",
    answer:
      "Absolutely! If you're passionate about teaching and helping others, we'd love to have you join the team.",
  },
  {
    question: "How do I sign up for classes?",
    answer:
      "Simply head to our Classes page, find a course you're interested in, and click 'Sign Up'.",
  },
]

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-[#2563eb] mb-10"
        >
          Frequently Asked Questions
        </motion.h1>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 bg-[#f9fcff]"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-[#f1f7ff] transition-all"
              >
                <span className="font-medium text-[#2563eb] text-base md:text-lg">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-[#2563eb]" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-1 text-[#374151] text-lg font-semibold leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQPage
