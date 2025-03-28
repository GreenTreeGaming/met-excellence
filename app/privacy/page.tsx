import React from 'react'

const page = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2563eb] mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-12">Last Updated: February 1, 2025</p>

        <div className="space-y-10 text-gray-700 leading-relaxed text-sm sm:text-base">
          <p>
            At METExcellence.org, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our services.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-[#2563eb] mb-2">1. Information We Collect</h2>
            <p>We collect the following personal information when you use our services:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Name and contact information (email address)</li>
              <li>Account credentials and login information</li>
              <li>Technical information including browser type and device information</li>
              <li>Usage data including how you interact with our website and services</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#2563eb] mb-2">2. How We Use Your Information</h2>
            <p>We use your personal information for the following purposes:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>To provide and maintain our educational services</li>
              <li>To communicate with you about our programs and services</li>
              <li>To process your transactions and manage your account</li>
              <li>To improve our website and user experience</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#2563eb] mb-2">3. Information Sharing</h2>
            <p>We may share your information with:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Service providers who assist in operating our website</li>
              <li>Educational partners and tutors as necessary for service delivery</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#2563eb] mb-2">4. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#2563eb] mb-2">5. Your Privacy Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#2563eb] mb-2">6. Children&apos;s Privacy</h2>
            <p>We do not knowingly collect information from children under 13 without parental consent. If you believe we have inadvertently collected such information, please contact us immediately.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#2563eb] mb-2">7. Changes to This Policy</h2>
            <p>We reserve the right to update this Privacy Policy at any time. Changes will be effective immediately upon posting to our website.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
