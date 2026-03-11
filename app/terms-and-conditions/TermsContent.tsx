"use client";

import React from "react";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function TermsContent() {
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
            Privacy Policy / Kebijakan Privasi
          </h1>
          <p className="text-muted-foreground border-l-2 border-primary/30 pl-4 py-1 italic">
            Last Updated / Terakhir diperbarui: 20 February 2026
          </p>
        </header>

        {/* Content Tabs/Sections */}
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
                  1. Informasi yang Kami Kumpulkan
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Arta mengumpulkan informasi yang diperlukan untuk menyediakan layanan pencatatan keuangan, termasuk:
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  {["Informasi akun (nama, email)", "Data transaksi dan kategori", "Data penggunaan aplikasi"].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-primary italic">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="group">
                <h3 className="text-lg font-bold mb-4 flex items-baseline gap-3 text-primary">
                  <span className="text-xs opacity-50 font-normal">02.</span>
                  2. Cara Kami Menggunakan Informasi
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Informasi digunakan untuk:
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  {["Menyediakan dan mengelola layanan", "Menyimpan histori transaksi", "Meningkatkan performa dan pengalaman pengguna", "Memberikan dukungan pelanggan"].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-primary italic">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="group">
                <h3 className="text-lg font-bold mb-4 flex items-baseline gap-3 text-primary">
                  <span className="text-xs opacity-50 font-normal">03.</span>
                  3. Penyimpanan & Keamanan Data
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Kami menerapkan langkah-langkah keamanan teknis dan administratif yang wajar untuk melindungi data pengguna dari akses yang tidak sah.
                </p>
              </section>

              <section className="group">
                <h3 className="text-lg font-bold mb-4 flex items-baseline gap-3 text-primary">
                  <span className="text-xs opacity-50 font-normal">04.</span>
                  4. Berbagi Informasi
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Kami tidak menjual data pribadi pengguna. Data hanya dapat dibagikan jika diwajibkan oleh hukum atau untuk keperluan operasional layanan.
                </p>
              </section>

              <section className="group">
                <h3 className="text-lg font-bold mb-4 flex items-baseline gap-3 text-primary">
                  <span className="text-xs opacity-50 font-normal">05.</span>
                  5. Hak Pengguna
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Pengguna dapat mengakses, memperbarui, atau menghapus akun dan data pribadi kapan saja melalui fitur dalam aplikasi atau melalui halaman penghapusan akun.
                </p>
              </section>

              <section className="group">
                <h3 className="text-lg font-bold mb-4 flex items-baseline gap-3 text-primary">
                  <span className="text-xs opacity-50 font-normal">06.</span>
                  6. Penghapusan Akun
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Jika akun dihapus, seluruh data terkait akan dihapus secara permanen dari sistem kami, kecuali jika diwajibkan oleh hukum untuk disimpan.
                </p>
              </section>

              <section className="group">
                <h3 className="text-lg font-bold mb-4 flex items-baseline gap-3 text-primary">
                  <span className="text-xs opacity-50 font-normal">07.</span>
                  7. Kontak
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Jika Anda memiliki pertanyaan mengenai kebijakan privasi ini, silakan hubungi kami di:
                </p>
                <Link
                  href="mailto:support@api.pakaiarta.id"
                  className="inline-block mt-2 text-primary hover:underline underline-offset-4 decoration-primary/30"
                >
                  support@api.pakaiarta.id
                </Link>
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
                  1. Information We Collect
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Arta collects information necessary to provide financial tracking services, including:
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  {["Account information (name, email)", "Transaction and category data", "Application usage data"].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-primary italic">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="group">
                <h3 className="text-lg font-bold mb-4 flex items-baseline gap-3 text-primary">
                  <span className="text-xs opacity-50 font-normal">02.</span>
                  2. How We Use Information
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We use collected information to:
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  {["Provide and maintain our services", "Store transaction history", "Improve performance and user experience", "Provide customer support"].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-primary italic">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="group">
                <h3 className="text-lg font-bold mb-4 flex items-baseline gap-3 text-primary">
                  <span className="text-xs opacity-50 font-normal">03.</span>
                  3. Data Storage & Security
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We implement reasonable technical and administrative safeguards to protect user data from unauthorized access.
                </p>
              </section>

              <section className="group">
                <h3 className="text-lg font-bold mb-4 flex items-baseline gap-3 text-primary">
                  <span className="text-xs opacity-50 font-normal">04.</span>
                  4. Information Sharing
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell personal data. Information may only be shared if required by law or necessary to operate and maintain the service.
                </p>
              </section>

              <section className="group">
                <h3 className="text-lg font-bold mb-4 flex items-baseline gap-3 text-primary">
                  <span className="text-xs opacity-50 font-normal">05.</span>
                  5. User Rights
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Users may access, update, or delete their account and personal data at any time through the app features or via the account deletion page.
                </p>
              </section>

              <section className="group">
                <h3 className="text-lg font-bold mb-4 flex items-baseline gap-3 text-primary">
                  <span className="text-xs opacity-50 font-normal">06.</span>
                  6. Account Deletion
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  When an account is deleted, all associated data will be permanently removed from our systems unless retention is required by law.
                </p>
              </section>

              <section className="group">
                <h3 className="text-lg font-bold mb-4 flex items-baseline gap-3 text-primary">
                  <span className="text-xs opacity-50 font-normal">07.</span>
                  7. Contact Us
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <Link
                  href="mailto:support@api.pakaiarta.id"
                  className="inline-block mt-2 text-primary hover:underline underline-offset-4 decoration-primary/30"
                >
                  support@api.pakaiarta.id
                </Link>
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
