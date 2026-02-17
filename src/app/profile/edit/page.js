"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { mockUser } from "@/lib/mockApi";

export default function EditProfilePage() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", bio: "" });
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setUser(mockUser);
      setFormData({
        name: mockUser.name,
        email: mockUser.email,
        bio: mockUser.bio,
      });
    }, 500);
  }, []);

  const handleSave = () => {
    setSaving(true);
    setSuccess(false);

    // Mock API save
    setTimeout(() => {
      setSaving(false);
      setSuccess(true);
      setUser(formData);
    }, 1000);
  };

  if (!user)
    return (
      <p className="p-6 text-white font-semibold text-lg text-center min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 via-emerald-400 to-lime-400">
        Loading profile...
      </p>
    );

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-500 via-emerald-400 to-lime-400 p-6">

      <motion.div
        className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 max-w-2xl w-full shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6 text-center">
          Edit Profile
        </h1>

        {/* Form */}
        <div className="space-y-6">
          {/* Name */}
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <label className="w-32 font-semibold text-white">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="flex-1 px-4 py-2 rounded-xl border border-white/40 bg-white/20 text-white placeholder-white/70 focus:border-white/80 focus:ring focus:ring-white/30 transition"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <label className="w-32 font-semibold text-white">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="flex-1 px-4 py-2 rounded-xl border border-white/40 bg-white/20 text-white placeholder-white/70 focus:border-white/80 focus:ring focus:ring-white/30 transition"
            />
          </div>

          {/* Bio */}
          <div className="flex flex-col md:flex-row md:items-start gap-3">
            <label className="w-32 font-semibold text-white">Bio</label>
            <textarea
              value={formData.bio}
              onChange={(e) =>
                setFormData({ ...formData, bio: e.target.value })
              }
              className="flex-1 px-4 py-2 rounded-xl border border-white/40 bg-white/20 text-white placeholder-white/70 focus:border-white/80 focus:ring focus:ring-white/30 transition"
              rows={4}
            />
          </div>

          {/* Save Button */}
          <div className="text-center">
            <button
              onClick={handleSave}
              disabled={saving}
              className="bg-white/30 text-white px-6 py-3 rounded-full font-bold hover:bg-white/50 transition disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>

            {success && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-4 text-white font-semibold"
              >
                Profile updated successfully!
              </motion.p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
