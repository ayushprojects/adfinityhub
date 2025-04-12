"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import AnimatedText from "@/components/animated-text"

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 border-purple-500 text-purple-300">
            Legal
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Privacy{" "}
            <AnimatedText
              text="Policy"
              className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
            />
          </h1>
          <p className="text-lg text-gray-300 mb-8">Last Updated: April 12, 2025</p>
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/" className="flex items-center text-gray-400 hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto prose prose-invert prose-purple"
        >
          <div className="bg-[#0c0515]/70 border border-purple-900/50 rounded-xl p-8 mb-8">
            <p className="text-gray-300">
              At AdfinityHub, we respect your privacy and are committed to protecting your personal data. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
              or use our services.
            </p>
          </div>

          <h2>Information We Collect</h2>
          <p>We may collect several types of information from and about users of our website, including:</p>
          <ul>
            <li>Personal identifiers such as name, email address, phone number, and company name</li>
            <li>Information provided when filling out forms on our website</li>
            <li>Records of correspondence if you contact us</li>
            <li>Details of transactions you carry out through our website</li>
            <li>
              Information about your internet connection, the equipment you use to access our website, and usage details
            </li>
          </ul>

          <h2>How We Collect Information</h2>
          <p>We collect information directly from you when you:</p>
          <ul>
            <li>Register on our website</li>
            <li>Subscribe to our newsletter</li>
            <li>Request a quote or consultation</li>
            <li>Respond to a survey</li>
            <li>Fill out a form</li>
          </ul>
          <p>
            We also collect information automatically as you navigate through our website using cookies and similar
            technologies.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We may use the information we collect about you for various purposes, including:</p>
          <ul>
            <li>Providing, maintaining, and improving our website and services</li>
            <li>Processing transactions and sending related information</li>
            <li>Sending promotional communications, newsletters, and updates</li>
            <li>Responding to your comments, questions, and requests</li>
            <li>Analyzing usage patterns and trends</li>
            <li>Protecting our rights, property, or safety, and that of our users or others</li>
          </ul>

          <h2>Disclosure of Your Information</h2>
          <p>We may disclose personal information that we collect or you provide:</p>
          <ul>
            <li>To our subsidiaries and affiliates</li>
            <li>To contractors, service providers, and other third parties we use to support our business</li>
            <li>To fulfill the purpose for which you provide it</li>
            <li>For any other purpose disclosed by us when you provide the information</li>
            <li>To comply with any court order, law, or legal process</li>
            <li>To enforce our terms of service</li>
            <li>
              If we believe disclosure is necessary to protect the rights, property, or safety of AdfinityHub, our
              customers, or others
            </li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information from accidental loss,
            unauthorized access, use, alteration, and disclosure. However, the transmission of information via the
            internet is not completely secure, and we cannot guarantee the security of your personal information
            transmitted to our website.
          </p>

          <h2>Your Choices</h2>
          <p>
            You can review and change your personal information by logging into the website and visiting your account
            profile page. You may also send us an email to request access to, correct, or delete any personal
            information that you have provided to us.
          </p>

          <h2>Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and store certain
            information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            However, if you do not accept cookies, you may not be able to use some portions of our website.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We have no control over and assume no responsibility
            for the content, privacy policies, or practices of any third-party sites or services.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Our website is not intended for children under 16 years of age, and we do not knowingly collect personal
            information from children under 16.
          </p>

          <h2>Changes to Our Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. If we make material changes, we will notify you by email
            or by posting a notice on our website prior to the change becoming effective.
          </p>

          <h2>Contact Information</h2>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
          <p>
            Email: privacy@adfinityhub.com
            <br />
            Phone: +1 (555) 123-4567
            <br />
            Address: 123 Digital Avenue, Tech City, CA 10001
          </p>
        </motion.div>
      </div>
    </div>
  )
}
