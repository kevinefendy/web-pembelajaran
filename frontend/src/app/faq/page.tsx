"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HelpCircle,
  Search,
  ChevronDown,
  BookOpen,
  Code,
  Award,
  CreditCard,
  UserCheck,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";

interface FaqItem {
  question: string;
  answer: string;
  category: "umum" | "belajar" | "review" | "sertifikat" | "pembayaran";
}

const faqList: FaqItem[] = [
  {
    category: "umum",
    question: "Apa itu LearnPath dan bagaimana sistem belajarnya?",
    answer:
      "LearnPath adalah platform pembelajaran teknologi berbasis jalur belajar (Learning Path) terstruktur. Anda tidak hanya mempelajari materi teori dalam bentuk teks dan video interaktif, tetapi juga diuji melalui kuis pemahaman konsep dan proyek nyata yang diperiksa langsung oleh Code Reviewer berpengalaman.",
  },
  {
    category: "umum",
    question: "Apakah saya harus memiliki latar belakang IT untuk mulai belajar?",
    answer:
      "Tidak harus. Setiap Learning Path kami dirancang mulai dari tingkat Dasar (Beginner) dengan penjelasan konsep yang ramah pemula, analogi kehidupan sehari-hari, dan glosarium istilah sebelum berlanjut ke topik menengah dan mahir.",
  },
  {
    category: "umum",
    question: "Apakah materi kelas dapat diakses selamanya (lifetime access)?",
    answer:
      "Ya! Sekali Anda mendaftar atau membeli kelas di LearnPath, materi bacaan dan video dapat Anda akses selamanya tanpa batas waktu kedaluwarsa.",
  },
  {
    category: "belajar",
    question: "Bagaimana jika saya mengalami kendala atau error saat mempraktikkan kode?",
    answer:
      "Setiap modul kelas terhubung langsung dengan Forum Diskusi komunitas. Anda dapat mengajukan pertanyaan spesifik pada baris kode modul tersebut. Instruktur, Reviewer, dan sesama rekan pembelajar akan membantu memberikan solusi dalam hitungan jam.",
  },
  {
    category: "belajar",
    question: "Apakah saya bisa belajar menggunakan ponsel (smartphone)?",
    answer:
      "Materi teks, panduan teori, dan video dapat diakses dengan nyaman melalui browser ponsel. Namun untuk mengerjakan latihan coding praktis dan pengumpulan submission proyek, kami sangat merekomendasikan menggunakan laptop atau komputer (PC).",
  },
  {
    category: "review",
    question: "Bagaimana alur dan ketentuan submission tugas proyek?",
    answer:
      "Di akhir kelas, Anda akan diminta membangun proyek mandiri sesuai kriteria silabus. Anda mengunggah repositori GitHub atau file zip proyek. Reviewer akan menguji kode Anda, memeriksa fungsionalitas, keamanan, dan gaya penulisan kode (clean code), lalu memberikan skor beserta catatan detail revisi jika ada kekurangan.",
  },
  {
    category: "review",
    question: "Berapa lama waktu yang dibutuhkan untuk proses review tugas?",
    answer:
      "Tim reviewer kami berkomitmen menyelesaikan ulasan submission dalam waktu maksimal 1x24 jam hingga 2x24 jam kerja sejak tugas dikirimkan.",
  },
  {
    category: "review",
    question: "Bagaimana jika tugas submission saya ditolak (Rejected)?",
    answer:
      "Jangan khawatir! Penolakan adalah bagian alami dari proses belajar. Reviewer akan menyertakan catatan konstruktif dan petunjuk perbaikan spesifik. Anda memiliki hak untuk memperbaiki dan mengirim ulang (re-submit) tanpa biaya tambahan.",
  },
  {
    category: "sertifikat",
    question: "Apakah sertifikat LearnPath diakui oleh industri?",
    answer:
      "Ya. Sertifikat LearnPath memiliki kode sertifikat unik (Certificate Code) yang dapat diverifikasi keasliannya secara daring oleh HRD dan Tech Recruiter. Banyak lulusan kami yang memanfaatkan portofolio dan sertifikat kelulusan LearnPath untuk melamar di startup hingga korporasi ternama.",
  },
  {
    category: "sertifikat",
    question: "Bagaimana cara mencetak atau membagikan sertifikat ke LinkedIn?",
    answer:
      "Setelah Anda menyelesaikan seluruh modul dan lulus submission proyek, sertifikat digital otomatis terbit di menu profil Anda. Anda dapat mengunduh format PDF beresolusi tinggi atau klik tombol 'Add to LinkedIn' untuk langsung menambahkan lisensi ke profil profesional Anda.",
  },
  {
    category: "pembayaran",
    question: "Metode pembayaran apa saja yang didukung?",
    answer:
      "Kami bermitra dengan Midtrans untuk mendukung berbagai metode pembayaran instan Indonesia, termasuk QRIS (GoPay, OVO, Dana, ShopeePay), Virtual Account Bank (BCA, Mandiri, BNI, BRI, Permata), dan Kartu Kredit/Debit.",
  },
  {
    category: "pembayaran",
    question: "Apakah ada kebijakan pengembalian dana (refund)?",
    answer:
      "Ya. Kami menyediakan garansi pengembalian dana 100% dalam waktu 7 (tujuh) hari kalender sejak transaksi dilakukan, dengan syarat progres belajar belum melebihi 20% dan belum mengajukan permohonan sertifikat. Silakan baca halaman Kebijakan Refund untuk ketentuan selengkapnya.",
  },
];

const categoryTabs = [
  { key: "all", label: "Semua Pertanyaan" },
  { key: "umum", label: "Umum & Akun" },
  { key: "belajar", label: "Proses Belajar" },
  { key: "review", label: "Code Review" },
  { key: "sertifikat", label: "Sertifikat" },
  { key: "pembayaran", label: "Pembayaran" },
];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaq = faqList.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-primary/5 via-background to-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Badge variant="outline" className="mb-4 px-3 py-1 text-sm border-primary/30 text-primary">
            ❓ Pusat Bantuan & FAQ
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Pertanyaan yang Sering Diajukan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Temukan jawaban cepat seputar kurikulum, sistem code review submission, sertifikat kelulusan, dan transaksi di LearnPath.
          </p>

          {/* Search Box */}
          <div className="max-w-xl mx-auto relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Cari pertanyaan... (misal: review, sertifikat, refund)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 text-base rounded-2xl shadow-xs"
            />
          </div>
        </div>
      </section>

      {/* Categories & Accordion */}
      <section className="container mx-auto px-4 max-w-4xl py-12">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categoryTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveCategory(tab.key)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                activeCategory === tab.key
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        {filteredFaq.length === 0 ? (
          <div className="text-center py-16 bg-muted/20 border rounded-2xl p-8">
            <HelpCircle className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-1">Pertanyaan tidak ditemukan</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Coba gunakan kata kunci pencarian lain atau tanyakan langsung kepada tim kami.
            </p>
            <Link href="/contact" className={buttonVariants({ variant: "outline", size: "sm" })}>
              Hubungi Tim Dukungan
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaq.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="border rounded-2xl bg-card overflow-hidden transition-all duration-200 shadow-2xs"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 font-semibold text-base hover:text-primary transition-colors"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 md:px-6 md:pb-6 text-sm text-muted-foreground leading-relaxed border-t bg-muted/10 pt-4">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Still need help? */}
      <section className="container mx-auto px-4 max-w-4xl mt-8">
        <div className="rounded-3xl border bg-muted/40 p-8 md:p-10 text-center flex flex-col items-center">
          <MessageCircle className="w-10 h-10 text-primary mb-3" />
          <h2 className="text-xl md:text-2xl font-bold mb-2">Masih Memiliki Pertanyaan Lain?</h2>
          <p className="text-sm text-muted-foreground max-w-lg mb-6">
            Tim layanan pelanggan kami siap membantu menyelesaikan segala keraguan dan pertanyaan Anda dari hari Senin hingga Jumat.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className={buttonVariants()}>
              Kirim Pesan ke Tim Support <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "outline" })}
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
