"use client";

import React from "react";
import Image from "next/image";
import {
  Zap,
  PieChart,
  Users,
  MessageSquare,
  ShieldCheck,
  PlusCircle,
  Scan,
  TrendingUp,
} from "lucide-react";

const featureList = [
  {
    title: "Expense & Income Management",
    description:
      "Track daily expenses and income in one place. Organize transactions by category and keep a clear financial history.",
    icon: PlusCircle,
  },
  {
    title: "Reports & Charts",
    description:
      "Visualize spending and income trends with monthly summaries and category-based reports.",
    icon: PieChart,
  },
  {
    title: "Split Bills with Friends",
    description:
      "Invite others to share expenses. perfect for trips, meals, and shared living. Automatically calculate who owes what.",
    icon: Users,
  },
  {
    title: "AI Financial Assistant",
    description:
      "Chat with an AI assistant to get instant insights. Ask where your money went or how much you spent on food.",
    icon: MessageSquare,
  },
  {
    title: "Secure & Private",
    description:
      "Your data is encrypted and protected. You stay in control of your financial information.",
    icon: ShieldCheck,
  },
  {
    title: "Real-time Sync",
    description:
      "Access your financial data across all devices with real-time cloud synchronization.",
    icon: Zap,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Main AI Feature - Alternated Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full" />
            <div className="relative z-10 p-4 bg-muted/30 border border-border/50 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/ai_scanning.png"
                alt="AI Receipt Scanning"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg border border-border/10"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="size-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4">
              <Scan className="w-6 h-6" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
              AI-Powered{" "}
              <span className="text-primary italic">Receipt Tracking</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Upload receipts and let Arta&apos;s AI automatically extract
              amounts, categories, dates, and merchants. No manual input
              required.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Detects Amount & Currency instantly",
                "Automated Category Assignment",
                "Extracts Date & Merchant names",
                "High precision even for handwritten receipts",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm font-medium"
                >
                  <div className="size-5 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                    <TrendingUp className="w-3 h-3" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter">
            Everything you need
          </h2>
          <p className="text-lg text-muted-foreground">
            Arta is packed with features to make financial management simple and
            collaborative.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((feature, i) => (
            <div
              key={i}
              className="group p-8 bg-muted/20 border border-border/50 rounded-3xl hover:bg-muted/40 transition-all hover:border-primary/20 hover:-translate-y-1"
            >
              <div className="size-12 bg-background border border-border/50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
