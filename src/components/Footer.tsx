import React from 'react'
import Link from 'next/link'
import { Facebook, Linkedin, Instagram, Copyright, X as XIcon } from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Internships', href: '/internships' },
    { label: 'Contact Us', href: '/contact' }
  ]

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="container mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <nav>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block py-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social Media Section - Always Visible */}
          <div className="space-y-4 order-first md:order-none">
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://www.facebook.com/share/1BT9eE3oEE/"
                className="w-12 h-12 bg-primary bg-opacity-30 rounded-full flex items-center justify-center hover:bg-opacity-50 hover:scale-110 transition-all duration-300 group shadow-lg"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a
                href="https://www.linkedin.com/company/nsp-nexus/"
                className="w-12 h-12 bg-primary bg-opacity-30 rounded-full flex items-center justify-center hover:bg-opacity-50 hover:scale-110 transition-all duration-300 group shadow-lg"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a
                href="https://www.instagram.com/team_nspnexus?igsh=aDB6Njl4bHBid3Jn"
                className="w-12 h-12 bg-primary bg-opacity-30 rounded-full flex items-center justify-center hover:bg-opacity-50 hover:scale-110 transition-all duration-300 group shadow-lg"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a
                href="https://x.com/NspNexus?t=kCj9AHq2MeKxwNJT0veXOg&s=09"
                className="w-12 h-12 bg-primary bg-opacity-30 rounded-full flex items-center justify-center hover:bg-opacity-50 hover:scale-110 transition-all duration-300 group shadow-lg"
                aria-label="Follow us on X"
              >
                <XIcon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
              </a>
            </div>
            <p className="text-center md:text-left text-gray-400 text-sm mt-3">
              Stay connected with us for the latest updates!
            </p>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
            <div className="text-gray-400 text-sm space-y-2">
              <p className="text-white">Ready to start your journey?</p>
              <p className="text-white">Contact us today to learn more about our internship opportunities and services.</p>
              <p className="mt-4">
                <span className="block text-white">Email: nspnexus003@gmail.com</span>
                <span className="block text-white">Phone: +91 9342 994 115</span>
                <span className="block text-white">Address: No. 66/1, Rajeswari 2nd Street,
Gokulapuram,
Chengalpattu – 603001,
Tamil Nadu, India</span>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex justify-center items-center space-x-2 text-gray-400 text-sm">
              <Copyright className="w-4 h-4" />
              <span>2025 NSP NEXUS. All rights reserved.</span>
            </div>
            <div className="mt-4 md:mt-0 text-gray-400 text-sm">
              <span>Building futures, one opportunity at a time.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}