"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center text-center md:text-left">
          <div className="space-y-8 max-w-2xl mx-auto md:mx-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold text-primary tracking-widest uppercase animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              New: AI Receipt Scanning is here
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] bg-clip-text text-transparent bg-linear-to-br from-foreground to-foreground/50">
              Track Your Money, <br />
              <span className="text-primary italic">Without the Effort.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0">
              Arta uses AI to automatically scan receipts, categorize expenses, and help you split bills effortlessly. Get a clear view of your finances in seconds.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <Button size="lg" className="rounded-full px-8 h-12 text-base font-bold shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-105 group">
                Start Tracking Free
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="ghost" size="lg" className="rounded-full px-8 h-12 text-base font-semibold group">
                <PlayCircle className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
                Watch Demo
              </Button>
            </div>

            {/* Social Proof Placeholder */}
            <div className="pt-8 flex flex-col sm:flex-row items-center gap-4 border-t border-border/50 max-w-md mx-auto md:mx-0">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="size-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/40?img=${i + 10}`} alt={`User ${i}`} />
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                Joined by <span className="text-foreground font-bold">10,000+</span> individuals and teams.
              </p>
            </div>
          </div>

          <div className="relative group perspective-1000">
            <div className="relative z-10 animate-float">
              <Image
                src="/images/hero_mockup.png"
                alt="Arta App Dashboard Mockup"
                width={500}
                height={500}
                priority
                className="mx-auto rounded-[3rem] shadow-2xl shadow-black/50 border-8 border-muted-foreground/10 group-hover:rotate-y-6 transition-transform duration-700 ease-out"
              />
            </div>
            {/* Background blur behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 rounded-full blur-[120px] -z-10 group-hover:bg-primary/30 transition-all duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
}
