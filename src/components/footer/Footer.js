"use client";

import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Left: Copyright */}
          <div className="text-center md:text-left text-sm md:text-base">
            &copy; {new Date().getFullYear()} AI Learning Platform. All rights reserved.
          </div>

          {/* Center: Quick Links */}
          <div className="flex gap-4 text-sm">
            <Link href="/support/contact" className="hover:text-yellow-300 transition">
              Contact
            </Link>
            <Link href="/support/faq" className="hover:text-yellow-300 transition">
              FAQ
            </Link>
            <Link href="/support/feedback" className="hover:text-yellow-300 transition">
              Feedback
            </Link>
          </div>

          {/* Right: Social links */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition transform hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition transform hover:scale-110"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
