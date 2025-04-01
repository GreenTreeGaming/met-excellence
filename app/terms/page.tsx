import React from 'react'

const page = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2563eb] mb-6">
          Terms and Conditions
        </h1>
        <p className="text-gray-600 mb-4">Effective Date: February 1, 2025</p>

        {/* Disclaimer at Top */}
        <div className="bg-[#f9fcff] border border-gray-200 p-4 rounded-lg mb-12 text-sm sm:text-base text-gray-700 leading-relaxed">
          <p className="mb-3">
            By signing up for a class, I/we/our family hereby release, waive, discharge, and forever hold harmless the organizations including institutions and individuals, its staff, promoters, and sponsors, from any loss or damage, and any claim of damages resulting from our participation in this program on account of any injury to my person, or property, whether caused by negligence or otherwise.
          </p>
          <p>
            I understand and agree that photographs in the possession of the releases shall become the property of the organization. On behalf of myself and my child, I give permission to use photography, images, video and audio taken of us during the events hosted by MET Excellence. I consent to the use of the photographs, videos, or recordings of us for advertising, promotional, or related purposes, and waive all rights to compensation and other rights which may arise as a result.
          </p>
        </div>

        <div className="space-y-10 text-gray-700 leading-relaxed text-sm sm:text-base">
          {/* Remaining Terms */}
          <div>
            <h2 className="text-xl font-semibold text-[#2563eb] mb-2">1. Acceptance of Terms</h2>
            <p>
              By using METExcellence.org, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#2563eb] mb-2">2. Use of the Website</h2>
            <h3 className="font-medium mt-4 mb-1">2.1 User Conduct</h3>
            <p>You agree to use METExcellence.org only for lawful purposes and in a manner that does not infringe upon or restrict others&apos; use and enjoyment of the website. Prohibited behaviors include:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Violating any applicable laws or regulations</li>
              <li>Attempting to interfere with the proper functioning of the website</li>
              <li>Impersonating any person or entity</li>
              <li>Collecting or storing personal data about other users without their consent</li>
            </ul>

            <h3 className="font-medium mt-4 mb-1">2.2 Account Responsibility</h3>
            <p>If you create an account on METExcellence.org, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#2563eb] mb-2">3. Intellectual Property</h2>
            <p>All content on METExcellence.org, including but not limited to text, graphics, logos, and software, is the property of METExcellence.org and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without our express written consent.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#2563eb] mb-2">4. Limitation of Liability</h2>
            <p>METExcellence.org provides its services on an &quot;as is&quot; and &quot;as available&quot; basis. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components. To the fullest extent permitted by law, we disclaim all warranties, express or implied.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#2563eb] mb-2">5. Privacy Policy</h2>
            <p>Your use of METExcellence.org is also governed by our Privacy Policy, which is incorporated into these Terms and Conditions by reference.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#2563eb] mb-2">6. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on the website. Your continued use of METExcellence.org after any such changes constitutes your acceptance of the new Terms and Conditions.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#2563eb] mb-2">7. Termination</h2>
            <p>We reserve the right to terminate or suspend your access to METExcellence.org, without prior notice or liability, for any reason, including if you breach these Terms and Conditions.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#2563eb] mb-2">8. Governing Law</h2>
            <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of Minnesota, United States, without regard to its conflict of law provisions.</p>
          </div>

          <div>
            <p className="pt-4 text-sm text-gray-600 italic">
              By using METExcellence.org, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page