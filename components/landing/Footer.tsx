import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
                A
              </div>
              <span className="text-xl font-bold tracking-tighter">Arta</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Arta helps you effortlessly track expenses and income using AI-powered scanning and smart automation.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {["twitter", "github", "linkedin"].map((social) => (
                <div key={social} className="size-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer">
                  <span className="sr-only">{social}</span>
                  <div className="size-4 bg-muted-foreground/30 rounded-xs" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-sm tracking-widest uppercase">Product</h4>
            <ul className="space-y-4">
              <li><Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Integrations</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-sm tracking-widest uppercase">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/terms-and-conditions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link href="/delete-account" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-sm tracking-widest uppercase">Support</h4>
            <ul className="space-y-4">
              <li><Link href="/delete-account" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Help Center</Link></li>
              <li><Link href="/delete-account" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Delete Account</Link></li>
              <li><Link href="mailto:support@api.pakaiarta.id" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-border/50 gap-8">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Arta Finance. Made with passion for financial clarity.
          </p>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <div className="size-2 rounded-full bg-green-500 animate-pulse" />
              Systems Operational
            </div>
            <div className="text-xs text-muted-foreground font-mono">
              v1.0.42
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
