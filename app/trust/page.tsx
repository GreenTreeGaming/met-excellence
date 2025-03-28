import React from 'react'

const page = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2563eb] mb-6">
          Trust &amp; Safety Policy
        </h1>
        <p className="text-gray-600 mb-12">Last Updated: February 1, 2025</p>

        <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-10">
          At METExcellence.org, we are committed to providing a safe and trustworthy environment for all our users. Our Trust and Safety Policy outlines the measures we take to ensure the security and well-being of our community.
        </p>

        <div className="space-y-10 text-gray-700 leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="text-xl font-semibold text-[#2563eb] mb-2">1. User Safety</h2>
            <p>We prioritize the safety of our users by:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Implementing strict privacy controls to protect personal information</li>
              <li>Removing content that could contribute to physical harm or security risks</li>
              <li>Prohibiting hate speech, bullying, and harassment</li>
              <li>Protecting minors from exploitation and inappropriate content</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#2563eb] mb-2">2. Content Moderation</h2>
            <p>To maintain a respectful and safe environment, we:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Enforce clear community standards that define acceptable behavior</li>
              <li>Use advanced technology to detect and prevent abuse</li>
              <li>Employ a team of moderators to review reported content</li>
              <li>Provide users with tools to report violations and control their experience</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#2563eb] mb-2">3. Data Security</h2>
            <p>We safeguard user data through:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Robust cybersecurity measures, including multi-factor authentication</li>
              <li>Regular security audits and updates</li>
              <li>Compliance with relevant data protection laws and regulations</li>
              <li>Secure storage and limited access to user information</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#2563eb] mb-2">4. Educational Resources</h2>
            <p>We offer:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Digital citizenship education to promote safe online behavior</li>
              <li>Resources for parents and educators on online safety</li>
              <li>Clear guidelines on responsible use of our platform</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#2563eb] mb-2">5. Transparency and Accountability</h2>
            <p>We maintain trust by:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Publishing regular reports on policy enforcement and content removal</li>
              <li>Collaborating with safety experts and advisory groups</li>
              <li>Providing clear channels for user feedback and concerns</li>
              <li>Continuously updating our policies to address emerging challenges</li>
            </ul>
          </div>

          <div>
            <p className="pt-4 text-sm text-gray-600 italic">
              By adhering to these principles, METExcellence.org strives to create a secure and trustworthy platform for educational excellence. We encourage all users to familiarize themselves with our policies and to contribute to maintaining a safe online community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
