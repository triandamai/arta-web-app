"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl group-hover:scale-105 transition-transform">
            A
          </div>
          <span className="text-xl font-bold tracking-tighter">Arta</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</Link>
          <Link href="/terms-and-conditions" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Security</Link>
          <Link href="/delete-account" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Support</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden sm:block">
            <Button variant="ghost" size="sm" className="font-semibold text-sm">
              Sign In
            </Button>
          </Link>
          <Button size="sm" className="rounded-full px-6 font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
            Get Arta Free
          </Button>
        </div>
      </div>
    </nav>
  );
}
