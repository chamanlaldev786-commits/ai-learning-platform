"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Sparkles, Menu, X } from "lucide-react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Quiz", href: "/quiz" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Profile", href: "/profile" },
    { name: "Support", href: "/support/contact" },
    { name: "FAQ", href: "/support/faq" },
  ];

  // ✅ Scroll logic for glass + shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
        ? "backdrop-blur bg-white/80 shadow-lg"
        : "bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* 🌈 LOGO */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="p-2 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-600 text-white shadow-md"
          >
            <Sparkles size={22} />
          </motion.div>

          <div>
            <h1 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI Learning
            </h1>
            <p className="text-xs text-gray-500 font-semibold tracking-wide">
              Learn • Quiz • Analyze
            </p>
          </div>
        </motion.div>

        {/* 🧭 DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 font-semibold">
          {links.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ y: -2 }}
              className="relative group"
            >
              <Link
                href={link.href}
                className="text-gray-700 hover:text-purple-600 transition"
              >
                {link.name}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-600 transition-all group-hover:w-full"></span>
            </motion.div>
          ))}
        </nav>

        {/* 📱 MOBILE BUTTON */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="md:hidden text-gray-800"
        >
          {openMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 📱 MOBILE MENU */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white shadow-lg border-t"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpenMenu(false)}
                className="block px-6 py-4 border-b text-gray-700 font-semibold hover:bg-purple-50 hover:text-purple-600 transition"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
