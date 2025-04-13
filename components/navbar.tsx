"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";

const services = [
  { name: "SEO", href: "/services/seo" },
  { name: "Email Marketing", href: "/services/email-marketing" },
  { name: "Social Media", href: "/services/social-media" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "E-commerce", href: "/services/ecommerce" },
  { name: "Pay Per Click", href: "/services/ppc" },
  { name: "PR Handling", href: "/services/pr" },
  { name: "Influencer Marketing", href: "/services/influencer" },
  { name: "AI Solutions", href: "/services/ai" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-opacity-90 backdrop-blur-md bg-[#080810] shadow-lg"
          : "bg-transparent"
      }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="text-2xl font-outfit font-bold tracking-tight bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              ADFINITYHUB
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                pathname === "/"
                  ? "text-primary"
                  : "text-gray-300 hover:text-purple-400 hover:scale-105"
              }`}>
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="link"
                  className={`text-sm font-medium tracking-wide transition-all duration-300 p-0 ${
                    pathname.startsWith("/services")
                      ? "text-primary"
                      : "text-gray-300 hover:text-purple-400 hover:scale-105"
                  }`}>
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 bg-[#120820] border border-purple-900/50">
                {services.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link
                      href={service.href}
                      className="cursor-pointer hover:bg-gradient-to-r hover:from-purple-900/40 hover:to-blue-900/40 transition-colors duration-300 rounded-sm">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/about"
              className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                pathname === "/about"
                  ? "text-primary"
                  : "text-gray-300 hover:text-purple-400 hover:scale-105"
              }`}>
              About
            </Link>
            {/* <Link  laptop screen navigation blog off
              href="/blog"
              className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                pathname === "/blog" || pathname.startsWith("/blog/")
                  ? "text-primary"
                  : "text-gray-300 hover:text-purple-400 hover:scale-105"
              }`}>
              Blog
            </Link> */}
            <Link
              href="/contact"
              className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                pathname === "/contact"
                  ? "text-primary"
                  : "text-gray-300 hover:text-purple-400 hover:scale-105"
              }`}>
              Contact
            </Link>
          </nav>

          <Button
            variant="default"
            asChild
            className="hidden md:inline-flex font-medium tracking-wide bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-900 hover:from-purple-900 hover:via-indigo-900 hover:to-blue-950">
            <Link href="/contact">Get a Quote</Link>
          </Button>

          {/* Mobile Navigation Controls */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Direct Call Button for Mobile */}
            <a
              href="tel:+919399630197"
              className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 p-2 rounded-full text-white hover:from-purple-700 hover:to-indigo-700 transition-colors"
              aria-label="Call us">
              <Phone className="h-5 w-5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none">
              {isOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#120820] border-t border-gray-800">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className={`block text-sm font-medium tracking-wide transition-all duration-300 ${
                pathname === "/"
                  ? "text-primary"
                  : "text-gray-300 hover:text-purple-400 hover:translate-x-1"
              }`}
              onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <div className="space-y-2">
              <div
                className={`text-sm font-medium tracking-wide ${
                  pathname.startsWith("/services")
                    ? "text-primary"
                    : "text-gray-300"
                }`}>
                Services
              </div>
              <div className="pl-4 space-y-2 border-l border-gray-800">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className={`block text-xs font-medium transition-all duration-300 ${
                      pathname === service.href
                        ? "text-primary"
                        : "text-gray-400 hover:text-purple-400 hover:translate-x-1"
                    }`}
                    onClick={() => setIsOpen(false)}>
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/about"
              className={`block text-sm font-medium tracking-wide transition-all duration-300 ${
                pathname === "/about"
                  ? "text-primary"
                  : "text-gray-300 hover:text-purple-400 hover:translate-x-1"
              }`}
              onClick={() => setIsOpen(false)}>
              About
            </Link>
            {/* <Link        blogs of website temporary off
              href="/blog"
              className={`block text-sm font-medium tracking-wide transition-all duration-300 ${
                pathname === "/blog" || pathname.startsWith("/blog/")
                  ? "text-primary"
                  : "text-gray-300 hover:text-purple-400 hover:translate-x-1"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link> */}
            <Link
              href="/contact"
              className={`block text-sm font-medium tracking-wide transition-all duration-300 ${
                pathname === "/contact"
                  ? "text-primary"
                  : "text-gray-300 hover:text-purple-400 hover:translate-x-1"
              }`}
              onClick={() => setIsOpen(false)}>
              Contact
            </Link>

            {/* Call Button in Mobile Menu */}
            <a
              href="tel:+919399630197"
              className="flex items-center text-sm font-medium text-gray-300 hover:text-purple-400 hover:translate-x-1 transition-all duration-300"
              onClick={() => setIsOpen(false)}>
              <Phone className="h-4 w-4 mr-2" />
              +91 9399 630 197
            </a>

            <Button
              variant="default"
              asChild
              className="w-full font-medium tracking-wide bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-900 hover:from-purple-900 hover:via-indigo-900 hover:to-blue-950"
              onClick={() => setIsOpen(false)}>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
