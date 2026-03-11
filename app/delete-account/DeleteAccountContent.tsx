"use client";

import React from "react";
import { MoveLeft, ShieldAlert, Mail, Smartphone } from "lucide-react";
import Link from "next/link";

export default function DeleteAccountContent() {
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
            Delete Account / Hapus Akun
          </h1>
          <p className="text-muted-foreground border-l-2 border-primary/30 pl-4 py-1 italic">
            Last Updated / Terakhir diperbarui: 20 February 2026
          </p>
        </header>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 relative">
          {/* Indonesian Version */}
          <section className="space-y-12">
            <div className="sticky top-12 bg-background/80 backdrop-blur-xs py-2 mb-4">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <span className="text-3xl">🇮🇩</span>Indonesian
              </h2>
            </div>

            <div className="space-y-10">
              <p className="text-muted-foreground leading-relaxed">
                Anda dapat menghapus akun Arta secara permanen melalui aplikasi atau dengan menghubungi kami.
              </p>

              <section className="space-y-6">
                <div className="flex items-center gap-3 text-primary">
                  <Smartphone className="w-5 h-5" />
                  <h3 className="text-lg font-bold">Opsi 1 – Melalui Aplikasi</h3>
                </div>
                <ol className="space-y-4 text-sm list-decimal list-inside pl-2">
                  <li className="text-muted-foreground hover:text-foreground transition-colors">Buka aplikasi Arta</li>
                  <li className="text-muted-foreground hover:text-foreground transition-colors">Masuk ke menu Pengaturan</li>
                  <li className="text-muted-foreground hover:text-foreground transition-colors">Pilih Hapus Akun</li>
                  <li className="text-muted-foreground hover:text-foreground transition-colors">Konfirmasi penghapusan</li>
                </ol>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3 text-primary">
                  <Mail className="w-5 h-5" />
                  <h3 className="text-lg font-bold">Opsi 2 – Melalui Email</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Kirim permintaan penghapusan akun ke:
                  </p>
                  <Link
                    href="mailto:support@api.pakaiarta.id?subject=Permintaan Hapus Akun"
                    className="inline-block py-2 px-4 border border-primary/20 bg-primary/5 rounded-none text-primary hover:bg-primary/10 transition-colors"
                  >
                    support@api.pakaiarta.id
                  </Link>
                  <p className="text-xs text-muted-foreground">
                    Subjek: Permintaan Hapus Akun
                  </p>
                </div>
              </section>

              <section className="p-6 border border-destructive/20 bg-destructive/5 space-y-4">
                <div className="flex items-center gap-3 text-destructive">
                  <ShieldAlert className="w-5 h-5" />
                  <h4 className="text-sm font-bold uppercase tracking-widest">Penting</h4>
                </div>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>• Semua data transaksi akan dihapus secara permanen</li>
                  <li>• Data kategori dan histori akan dihapus</li>
                  <li>• Akun tidak dapat dipulihkan kembali</li>
                </ul>
                <p className="text-[10px] text-muted-foreground/60 leading-tight">
                  Beberapa data mungkin tetap disimpan jika diwajibkan oleh hukum atau regulasi yang berlaku.
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
              <p className="text-muted-foreground leading-relaxed">
                You may permanently delete your Arta account through the app or by contacting us.
              </p>

              <section className="space-y-6">
                <div className="flex items-center gap-3 text-primary">
                  <Smartphone className="w-5 h-5" />
                  <h3 className="text-lg font-bold">Option 1 – Through the App</h3>
                </div>
                <ol className="space-y-4 text-sm list-decimal list-inside pl-2">
                  <li className="text-muted-foreground hover:text-foreground transition-colors">Open the Arta application</li>
                  <li className="text-muted-foreground hover:text-foreground transition-colors">Go to Settings</li>
                  <li className="text-muted-foreground hover:text-foreground transition-colors">Select Delete Account</li>
                  <li className="text-muted-foreground hover:text-foreground transition-colors">Confirm the deletion</li>
                </ol>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3 text-primary">
                  <Mail className="w-5 h-5" />
                  <h3 className="text-lg font-bold">Option 2 – Via Email Request</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Send a deletion request to:
                  </p>
                  <Link
                    href="mailto:support@api.pakaiarta.id?subject=Account Deletion Request"
                    className="inline-block py-2 px-4 border border-primary/20 bg-primary/5 rounded-none text-primary hover:bg-primary/10 transition-colors"
                  >
                    support@api.pakaiarta.id
                  </Link>
                  <p className="text-xs text-muted-foreground">
                    Subject: Account Deletion Request
                  </p>
                </div>
              </section>

              <section className="p-6 border border-destructive/20 bg-destructive/5 space-y-4">
                <div className="flex items-center gap-3 text-destructive">
                  <ShieldAlert className="w-5 h-5" />
                  <h4 className="text-sm font-bold uppercase tracking-widest">Important</h4>
                </div>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>• All transaction data will be permanently deleted</li>
                  <li>• Categories and history will be removed</li>
                  <li>• The account cannot be recovered</li>
                </ul>
                <p className="text-[10px] text-muted-foreground/60 leading-tight">
                  Certain information may be retained if required by applicable law or regulations.
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
