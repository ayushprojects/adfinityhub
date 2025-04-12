"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import AnimatedText from "@/components/animated-text"

export default function TermsOfServicePage() {
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
            Terms of{" "}
            <AnimatedText
              text="Service"
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
              Please read these Terms of Service ("Terms") carefully before using the AdfinityHub website or services.
              By accessing or using our website or services, you agree to be bound by these Terms.
            </p>
          </div>

          <h2>Acceptance of Terms</h2>
          <p>
            By accessing or using our website, you agree to these Terms and our Privacy Policy. If you do not agree to
            these Terms, please do not use our website or services.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We may revise these Terms at any time by updating this page. Your continued use of the website after any
            such changes constitutes your acceptance of the new Terms. Please check this page regularly to ensure you
            are familiar with the current version.
          </p>

          <h2>Use of Website</h2>
          <p>You may use our website only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul>
            <li>Use the website in any way that violates applicable laws or regulations</li>
            <li>Use the website to transmit or send unsolicited commercial communications</li>
            <li>
              Use the website to impersonate or attempt to impersonate AdfinityHub, an AdfinityHub employee, another
              user, or any other person or entity
            </li>
            <li>Interfere with or disrupt the website or servers or networks connected to the website</li>
            <li>
              Attempt to gain unauthorized access to parts of the website, other accounts, computer systems, or networks
              connected to the website
            </li>
            <li>Use any robot, spider, or other automatic device to access the website for any purpose</li>
          </ul>

          <h2>Intellectual Property Rights</h2>
          <p>
            The website and its entire contents, features, and functionality (including but not limited to all
            information, software, text, displays, images, video, and audio, and the design, selection, and arrangement
            thereof) are owned by AdfinityHub, its licensors, or other providers of such material and are protected by
            copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
          <p>
            You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform,
            republish, download, store, or transmit any of the material on our website without our prior written
            consent.
          </p>

          <h2>User Contributions</h2>
          <p>
            Our website may contain message boards, chat rooms, personal web pages or profiles, forums, bulletin boards,
            and other interactive features that allow users to post, submit, publish, display, or transmit content or
            materials. Any content you post to the website will be considered non-confidential and non-proprietary.
          </p>
          <p>
            By providing any user contribution on the website, you grant us and our affiliates and service providers,
            and each of their and our respective licensees, successors, and assigns the right to use, reproduce, modify,
            perform, display, distribute, and otherwise disclose to third parties any such material.
          </p>

          <h2>Service Descriptions</h2>
          <p>
            We make every effort to accurately describe our services. However, we do not warrant that service
            descriptions or other content on the website are accurate, complete, reliable, current, or error-free.
          </p>

          <h2>Payment Terms</h2>
          <p>
            For services that require payment, you agree to provide accurate and complete payment information. All fees
            are exclusive of taxes unless otherwise specified. Payment terms are specific to each service and will be
            provided to you before you engage our services.
          </p>

          <h2>Termination</h2>
          <p>
            We may terminate or suspend your access to all or part of the website, without notice, for any conduct that
            we, in our sole discretion, believe violates these Terms or is harmful to other users of the website, us, or
            third parties, or for any other reason.
          </p>

          <h2>Disclaimer of Warranties</h2>
          <p>
            Your use of the website and any services or content obtained through the website is at your own risk. The
            website, its content, and any services or items obtained through the website are provided on an "as is" and
            "as available" basis, without any warranties of any kind, either express or implied.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            In no event will AdfinityHub, its affiliates, or their licensors, service providers, employees, agents,
            officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in
            connection with your use, or inability to use, the website, any websites linked to it, any content on the
            website or such other websites, including any direct, indirect, special, incidental, consequential, or
            punitive damages.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless AdfinityHub, its affiliates, licensors, and service
            providers, and its and their respective officers, directors, employees, contractors, agents, licensors,
            suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards,
            losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your
            violation of these Terms or your use of the website.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms and any dispute or claim arising out of or related to them, their subject matter, or their
            formation shall be governed by and construed in accordance with the laws of the state of California, without
            giving effect to any choice or conflict of law provision or rule.
          </p>

          <h2>Dispute Resolution</h2>
          <p>
            Any legal suit, action, or proceeding arising out of, or related to, these Terms or the website shall be
            instituted exclusively in the federal courts of the United States or the courts of the State of California,
            although we retain the right to bring any suit, action, or proceeding against you for breach of these Terms
            in your country of residence or any other relevant country.
          </p>

          <h2>Waiver and Severability</h2>
          <p>
            No waiver by AdfinityHub of any term or condition set out in these Terms shall be deemed a further or
            continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of
            AdfinityHub to assert a right or provision under these Terms shall not constitute a waiver of such right or
            provision.
          </p>
          <p>
            If any provision of these Terms is held by a court or other tribunal of competent jurisdiction to be
            invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the
            minimum extent such that the remaining provisions of the Terms will continue in full force and effect.
          </p>

          <h2>Entire Agreement</h2>
          <p>
            These Terms, our Privacy Policy, and any other terms and conditions referenced herein constitute the sole
            and entire agreement between you and AdfinityHub regarding the website and supersede all prior and
            contemporaneous understandings, agreements, representations, and warranties, both written and oral,
            regarding the website.
          </p>

          <h2>Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p>
            Email: legal@adfinityhub.com
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
