"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaHome,
  FaBook,
  FaQuestionCircle,
  FaUser,
  FaUsers,
  FaChartLine,
  FaTimes,
} from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Sidebar({ onClose }) {
  const pathname = usePathname();

  const menu = [
    { title: "Dashboard", href: "/dashboard", icon: FaHome },
    { title: "Courses", href: "/courses", icon: FaBook },
    { title: "Quiz", href: "/quiz", icon: FaChartLine },
    { title: "Community", href: "/community", icon: FaUsers },
    { title: "Profile", href: "/profile", icon: FaUser },
    { title: "Support", href: "/support/contact", icon: FaQuestionCircle },
  ];

  return (
    <aside className="flex flex-col w-64 h-full bg-white border-r shadow-lg overflow-y-auto">
      {/* 🔷 BRAND */}
      <div className="px-6 py-6 border-b flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            AI Learning
          </h2>
          <p className="text-xs text-gray-500 font-semibold mt-1">
            Smart Education Platform
          </p>
        </div>

        {/* Close button for mobile */}
        {onClose && (
          <button
            onClick={onClose}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            aria-label="Close sidebar"
          >
            <FaTimes className="text-gray-600" size={20} />
          </button>
        )}
      </div>

      {/* 🧭 MENU */}
      <ul className="flex-1 px-4 py-6 space-y-2">
        {menu.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <motion.li
              key={item.title}
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all
                  ${isActive
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  }
                `}
              >
                <Icon className="text-lg" />
                <span>{item.title}</span>
              </Link>
            </motion.li>
          );
        })}
      </ul>

      {/* 🔻 FOOT NOTE */}
      <div className="px-6 py-4 border-t text-xs text-gray-500 text-center">
        © {new Date().getFullYear()} AI Learning
      </div>
    </aside>
  );
}
