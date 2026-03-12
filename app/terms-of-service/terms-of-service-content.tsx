"use client";

import React from "react";
import { MoveLeft, Scale, Shield, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function TermsOfServiceContent() {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono selection:bg-primary selection:text-primary-foreground">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-24">
        {/* Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 group"
        >
          <MoveLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to home
        </Link>

        {/* Header */}
        <header className="mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/70">
            Terms of Service / Ketentuan Layanan
          </h1>
          <p className="text-muted-foreground border-l-2 border-primary/30 pl-4 py-1 italic">
            Last Updated / Terakhir diperbarui: 11 March 2026
          </p>
        </header>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 relative">
          {/* Bahasa Indonesia */}
          <section className="space-y-12">
            <div className="sticky top-12 bg-background/80 backdrop-blur-xs py-2 mb-4">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <span className="text-3xl">🇮🇩</span>Indonesian
              </h2>
            </div>

            <div className="space-y-10">
              <section className="group">
                <h3 className="text-lg font-bold mb-4 flex items-baseline gap-3 text-primary">
                  <span className="text-xs opacity-50 font-normal">01.</span>
                  1. Penerimaan Ketentuan
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Dengan mengakses atau menggunakan Arta, Anda setuju untuk terikat oleh Ketentuan Layanan ini. Jika Anda tidak setuju, mohon jangan gunakan layanan kami.
                </p>
              </section>

              <section className="group">
                <h3 className="text-lg font-bold mb-4 flex items-baseline gap-3 text-primary">
                  <span className="text-xs opacity-50 font-normal">02.</span>
                  2. Deskripsi Layanan
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Arta menyediakan platform manajemen keuangan yang menggunakan kecerdasan buatan (AI) untuk memproses struk belanja, melacak pengeluaran, dan memfasilitasi pembongkaran tagihan antar pengguna.
                </p>
              </section>

              <section className="group">
                <h3 className="text-lg font-bold mb-4 flex items-baseline gap-3 text-primary">
                  <span className="text-xs opacity-50 font-normal">03.</span>
                  3. Akun Pengguna
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Anda bertanggung jawab untuk menjaga kerahasiaan akun dan kata sandi Anda. Anda setuju untuk segera memberitahu kami tentang penggunaan yang tidak sah atas akun Anda.
                </p>
              </section>

              <section className="group">
                <h3 className="text-lg font-bold mb-4 flex items-baseline gap-3 text-primary">
                  <span className="text-xs opacity-50 font-normal">04.</span>
                  4. Fitur AI & Data
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Fitur pemindaian struk kami menggunakan AI. Meskipun kami berusaha untuk akurasi tinggi, Anda disarankan untuk memeriksa kembali data yang diekstrak secara manual. Arta tidak bertanggung jawab atas kesalahan input data otomatis.
                </p>
              </section>

              <section className="group">
                <h3 className="text-lg font-bold mb-4 flex items-baseline gap-3 text-primary">
                  <span className="text-xs opacity-50 font-normal">05.</span>
                  5. Pembatalan & Penghentian
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Kami berhak untuk menangguhkan atau menghentikan akses Anda ke Arta kapan saja, tanpa pemberitahuan, untuk perilaku yang kami anggap melanggar Ketentuan ini.
                </p>
              </section>

              <section className="p-6 border border-primary/20 bg-primary/5 space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <Scale className="w-5 h-5" />
                  <h4 className="text-sm font-bold uppercase tracking-widest">Hukum yang Berlaku</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia.
                </p>
              </section>
            </div>
          </section>

          {/* English Version */}
          <section className="space-y-12">
            <div className="sticky top-12 bg-background/80 backdrop-blur-xs py-2 mb-4">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <span className="text-3xl">🇺🇸</span>English
              </h2>
            </div>

            <div className="space-y-10">
              <section className="group">
                <h3 className="text-lg font-bold mb-4 flex items-baseline gap-3 text-primary">
                  <span className="text-xs opacity-50 font-normal">01.</span>
                  1. Acceptance of Terms
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  By accessing or using Arta, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
                </p>
              </section>

              <section className="group">
                <h3 className="text-lg font-bold mb-4 flex items-baseline gap-3 text-primary">
                  <span className="text-xs opacity-50 font-normal">02.</span>
                  2. Description of Service
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Arta provides a financial management platform that uses artificial intelligence (AI) to process receipts, track expenses, and facilitate bill splitting between users.
                </p>
              </section>

              <section className="group">
                <h3 className="text-lg font-bold mb-4 flex items-baseline gap-3 text-primary">
                  <span className="text-xs opacity-50 font-normal">03.</span>
                  3. User Accounts
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  You are responsible for maintaining the confidentiality of your account and password. You agree to immediately notify us of any unauthorized use of your account.
                </p>
              </section>

              <section className="group">
                <h3 className="text-lg font-bold mb-4 flex items-baseline gap-3 text-primary">
                  <span className="text-xs opacity-50 font-normal">04.</span>
                  4. AI Features & Data
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Our receipt scanning feature utilizes AI. While we strive for high accuracy, you are advised to manually verify extracted data. Arta is not liable for automated data entry errors.
                </p>
              </section>

              <section className="group">
                <h3 className="text-lg font-bold mb-4 flex items-baseline gap-3 text-primary">
                  <span className="text-xs opacity-50 font-normal">05.</span>
                  5. Termination
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  We reserve the right to suspend or terminate your access to Arta at any time, without notice, for conduct that we believe violates these Terms.
                </p>
              </section>

              <section className="p-6 border border-primary/20 bg-primary/5 space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <Shield className="w-5 h-5" />
                  <h4 className="text-sm font-bold uppercase tracking-widest">Governing Law</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  These terms are governed by and construed in accordance with the laws of the Republic of Indonesia.
                </p>
              </section>
            </div>
          </section>
        </div>

        {/* Footer info */}
        <footer className="mt-24 pt-12 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Arta. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
