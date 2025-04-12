import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050508] border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              ADFINITYHUB
            </h3>
            <p className="text-gray-400 mb-4">
              Transforming businesses through innovative digital marketing
              solutions powered by AI.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/seo"
                  className="text-gray-400 hover:text-primary transition-colors">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="/services/social-media"
                  className="text-gray-400 hover:text-primary transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-development"
                  className="text-gray-400 hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/email-marketing"
                  className="text-gray-400 hover:text-primary transition-colors">
                  Email Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai"
                  className="text-gray-400 hover:text-primary transition-colors">
                  AI Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              {/* <li>  temporary off blogs
                <Link href="/blog" className="text-gray-400 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li> */}
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-400">
                  Bhopal, Madhya Pradesh, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-400">+91 9399570554</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-400">info@adfinityhub.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AdfinityHub. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
            <Link
              href="/sitemap"
              className="text-gray-500 hover:text-primary text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
