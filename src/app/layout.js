"use client";

import "./globals.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import Footer from "@/components/footer/Footer";

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="AI-powered learning platform with personalized courses, quizzes, and analytics" />
        <title>AI Learning Platform - Smart Education</title>
      </head>
      <body className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50">

        {/* Header */}
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        <div className="flex relative min-h-[calc(100vh-64px)]">

          {/* Mobile Sidebar Overlay */}
          <AnimatePresence>
            {sidebarOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                  onClick={() => setSidebarOpen(false)}
                />

                {/* Sidebar */}
                <motion.div
                  initial={{ x: -300 }}
                  animate={{ x: 0 }}
                  exit={{ x: -300 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="fixed left-0 top-0 h-full z-50 lg:hidden"
                >
                  <Sidebar onClose={() => setSidebarOpen(false)} />
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Desktop Sidebar - Always visible */}
          <div className="hidden lg:block sticky top-0 h-screen">
            <Sidebar />
          </div>

          {/* Main Content */}
          <main className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              {children}
            </motion.div>
          </main>
        </div>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
