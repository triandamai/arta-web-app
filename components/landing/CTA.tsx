"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center text-primary-foreground space-y-10">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight">
          Ready to take control of <br />
          <span className="opacity-70 italic font-medium">your financial future?</span>
        </h2>
        
        <p className="text-xl opacity-80 max-w-2xl mx-auto font-medium leading-relaxed">
          Join thousands of users who have simplified their finances with Arta. Start scanning receipts and tracking expenses today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button size="lg" variant="secondary" className="rounded-full px-10 h-14 text-lg font-bold shadow-2xl hover:scale-105 transition-transform group">
            Get Arta for Free
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <div className="flex flex-col items-start gap-3">
            {[ "No credit card required", "Unlimited free scans"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-semibold opacity-90">
                <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
