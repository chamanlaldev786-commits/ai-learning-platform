"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });

  const toggleNotification = (type) => {
    setNotifications((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-purple-700">Settings</h1>
        <p className="text-purple-600">
          Manage your notifications, privacy, and account settings.
        </p>

        {/* Account Settings */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Account</h2>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center md:gap-4">
              <label className="w-32 text-purple-700 font-semibold">Name</label>
              <input
                type="text"
                defaultValue="John Doe"
                className="flex-1 px-4 py-2 rounded-xl border border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition"
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:gap-4">
              <label className="w-32 text-purple-700 font-semibold">Email</label>
              <input
                type="email"
                defaultValue="john@example.com"
                className="flex-1 px-4 py-2 rounded-xl border border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition"
              />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Notifications</h2>
          <div className="space-y-4">
            {Object.keys(notifications).map((type) => (
              <div key={type} className="flex items-center justify-between">
                <span className="capitalize text-purple-700 font-medium">{type} Notifications</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications[type]}
                    onChange={() => toggleNotification(type)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-purple-500 transition-all"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Privacy</h2>
          <p className="text-purple-600">Manage your data visibility and privacy preferences here.</p>
        </div>
      </div>
    </div>
  );
}
