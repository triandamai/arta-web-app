"use client";

import React from "react";
import { Apple, Play, Monitor, Globe } from "lucide-react";
import { motion } from "framer-motion";

interface DownloadButtonsProps {
  className?: string;
  variant?: "hero" | "cta" | "navbar";
}

export default function DownloadButtons({ className, variant = "hero" }: DownloadButtonsProps) {
  const platforms = [
    {
      name: "iOS",
      icon: Apple,
      label: "App Store",
      href: "#",
      color: "bg-black text-white",
    },
    {
      name: "Android",
      icon: Play,
      label: "Google Play",
      href: "#",
      color: "bg-[#3DDC84] text-black",
    },
    {
      name: "Desktop",
      icon: Monitor,
      label: "macOS / Win",
      href: "#",
      color: "bg-muted text-foreground",
    },
    {
      name: "Web",
      icon: Globe,
      label: "Launch Web",
      href: "#",
      color: "bg-primary text-primary-foreground",
    },
  ];

  if (variant === "navbar") {
    return (
      <div className="grid grid-cols-2 gap-2 p-4 w-64 bg-background border border-border rounded-2xl shadow-2xl">
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.href}
            className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-muted transition-colors group"
          >
            <platform.icon className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-tighter opacity-70">
              {platform.name}
            </span>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {platforms.map((platform, i) => (
        <motion.div
          key={platform.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <a
            href={platform.href}
            className={`rounded-2xl group flex items-center gap-3 h-auto py-3 px-5 transition-all hover:scale-105 border font-semibold ${
              variant === "cta"
                ? "bg-white/10 hover:bg-white/20 text-white border-white/20"
                : "bg-background hover:bg-muted border-border"
            }`}
          >
            <div
              className={`p-2 rounded-lg ${platform.color} group-hover:scale-110 transition-transform`}
            >
              <platform.icon className="w-5 h-5" />
            </div>
            <div className="flex flex-col items-start leading-none gap-0.5">
              <span className="text-[10px] uppercase font-bold opacity-70 tracking-widest leading-none">
                {platform.name === "Web" ? "Available on" : "Download on"}
              </span>
              <span className="text-sm font-bold leading-none">
                {platform.label}
              </span>
            </div>
          </a>
        </motion.div>
      ))}
    </div>
  );
}
