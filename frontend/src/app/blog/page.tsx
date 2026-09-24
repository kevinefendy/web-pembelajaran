import Link from "next/link";
import {
  BookOpen,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Sparkles,
  Tag,
  Search,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

export const metadata = {
  title: "Blog & Wawasan Teknologi - LearnPath",
  description: "Artikel tutorial, tren teknologi terkini, tips lolos review submission, dan kisah inspiratif alumni.",
};

const featuredPost = {
  slug: "roadmap-menjadi-fullstack-developer-2026",
  title: "Roadmap Menjadi Fullstack Developer di Era AI: Panduan Komprehensif 2026",
  excerpt:
    "Ketahui teknologi apa saja yang wajib dipelajari, bagaimana memanfaatkan AI untuk meningkatkan produktivitas tanpa kehilangan pemahaman fundamental, serta strategi membangun portofolio yang dilirik oleh tech recruiter.",
  category: "Panduan Karir",
  readTime: "8 menit baca",
  date: "22 September 2026",
  author: {
    name: "Farhan Pratama",
    role: "Head of Engineering",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
  },
  image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000&auto=format&fit=crop&q=80",
};

const posts = [
  {
    slug: "tips-lolos-code-review-submission-pertama-kali",
    title: "5 Kesalahan Umum Siswa Saat Mengirimkan Tugas Proyek (dan Cara Menghindarinya)",
    excerpt:
      "Ulasan praktis dari para Code Reviewer LearnPath mengenai hal-hal krusial yang sering terlupakan: mulai dari git commit message, clean architecture, hingga error handling.",
    category: "Tips Belajar",
    readTime: "5 menit baca",
    date: "18 September 2026",
    author: "Budi Santoso",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80",
  },
  {
    slug: "mengapa-belajar-typescript-bukan-opsi-tapi-kewajiban",
    title: "Mengapa TypeScript Sekarang Menjadi Standar Baku di Perusahaan Teknologi?",
    excerpt:
      "Membahas keunggulan type safety, refactoring yang aman pada skala besar, serta mengapa JavaScript murni semakin jarang dipakai pada proyek tim skala enterprise.",
    category: "Teknologi Web",
    readTime: "6 menit baca",
    date: "14 September 2026",
    author: "Kevin Efendy",
    image: "https://images.unsplash.com/photo-1516116211227-bbc0c26b38c2?w=600&auto=format&fit=crop&q=80",
  },
  {
    slug: "dari-guru-honorer-menjadi-software-engineer",
    title: "Cerita Alumni: Dari Guru Honorer Menjadi Software Engineer di Usia 28 Tahun",
    excerpt:
      "Kisah inspiratif Rian yang konsisten menyisihkan waktu 2 jam setiap malam menyelesaikan Learning Path Web Development hingga berhasil diterima di tech startup Jakarta.",
    category: "Kisah Alumni",
    readTime: "7 menit baca",
    date: "10 September 2026",
    author: "Siti Rahmania",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80",
  },
  {
    slug: "panduan-memilih-database-postgresql-vs-mongodb",
    title: "PostgreSQL vs MongoDB: Kapan Harus Menggunakan SQL dan NoSQL?",
    excerpt:
      "Bedah kasus nyata pemilihan arsitektur data. Pelajari ACID compliance, schema flexibility, dan tren pemodelan data modern menggunakan ORM seperti Drizzle.",
    category: "Backend",
    readTime: "6 menit baca",
    date: "05 September 2026",
    author: "Farhan Pratama",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&auto=format&fit=crop&q=80",
  },
  {
    slug: "cara-efektif-menguasai-state-management-react",
    title: "Zustand vs Redux Toolkit: Mengapa Zustand Menjadi Favorit Baru Frontend Developer?",
    excerpt:
      "Perbandingan kesederhanaan boilerplate, performa rendering, dan kemudahan testing state global pada aplikasi React 19.",
    category: "Teknologi Web",
    readTime: "5 menit baca",
    date: "29 Agustus 2026",
    author: "Kevin Efendy",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop&q=80",
  },
  {
    slug: "pentingnya-sertifikasi-terverifikasi-untuk-linkedin",
    title: "Bagaimana Sertifikat Digital Terverifikasi Membantu Profil LinkedIn Kamu Dilirik Rekruter",
    excerpt:
      "Perbedaan antara sertifikat kehadiran (attendance) dan sertifikat berbasis kelulusan uji proyek nyata yang memiliki kode verifikasi unik.",
    category: "Panduan Karir",
    readTime: "4 menit baca",
    date: "20 Agustus 2026",
    author: "Siti Rahmania",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80",
  },
];

const categories = ["Semua Topik", "Panduan Karir", "Teknologi Web", "Backend", "Tips Belajar", "Kisah Alumni"];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-primary/5 via-background to-background py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Badge variant="outline" className="mb-4 px-3 py-1 text-sm border-primary/30 text-primary">
            ✍️ Blog & Wawasan Teknologi
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Eksplorasi Wawasan & Panduan Industri
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Kumpulan artikel pilihan seputar tren rekayasa perangkat lunak, tips praktis menyelesaikan materi kelas, serta strategi akselerasi karir teknologi.
          </p>

          {/* Category filter pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat, idx) => (
              <span
                key={idx}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors ${
                  idx === 0
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="container mx-auto px-4 max-w-5xl py-12">
        <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-4 flex items-center gap-2">
          <Sparkles className="w-4 h-4" /> Artikel Pilihan
        </div>
        <Card className="overflow-hidden border shadow-sm hover:border-primary/40 transition-colors">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            <div className="md:col-span-7 h-64 md:h-auto relative overflow-hidden bg-muted">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="md:col-span-5 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {featuredPost.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight mb-3 hover:text-primary transition-colors cursor-pointer">
                  {featuredPost.title}
                </h2>
                <p className="text-sm text-muted-foreground line-clamp-4 leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    className="w-9 h-9 rounded-full object-cover border"
                  />
                  <div>
                    <div className="text-xs font-semibold">{featuredPost.author.name}</div>
                    <div className="text-[11px] text-muted-foreground">{featuredPost.date}</div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-primary flex items-center gap-1 cursor-pointer hover:underline">
                  Baca Selengkapnya <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Grid Posts */}
      <section className="container mx-auto px-4 max-w-5xl py-4 mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Artikel Terbaru</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card
              key={post.slug}
              className="overflow-hidden border hover:border-primary/40 transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="h-44 w-full overflow-hidden bg-muted relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge variant="secondary" className="absolute top-3 left-3 backdrop-blur-md bg-background/80 text-[11px]">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader className="p-5 pb-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg leading-snug line-clamp-2 group-hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0">
                  <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardContent>
              </div>

              <div className="px-5 py-3 border-t bg-muted/20 flex items-center justify-between text-xs">
                <span className="text-muted-foreground font-medium flex items-center gap-1.5">
                  <User className="w-3 h-3 text-primary" /> {post.author}
                </span>
                <span className="text-primary font-medium flex items-center gap-1 group-hover:underline cursor-pointer">
                  Baca <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 max-w-5xl">
        <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 text-center flex flex-col items-center">
          <BookOpen className="w-10 h-10 mb-4 text-primary-foreground/90" />
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Dapatkan Tips & Artikel Teknologi Mingguan</h2>
          <p className="text-primary-foreground/80 max-w-xl mb-6 text-sm">
            Langganan newsletter LearnPath secara gratis. Kami mengirimkan ringkasan tutorial, studi kasus industri, dan lowongan karir langsung ke inbox Anda setiap pekan.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
            <input
              type="email"
              placeholder="Masukkan alamat email Anda"
              className="px-4 py-2.5 rounded-lg bg-background text-foreground text-sm w-full outline-none focus:ring-2 focus:ring-primary-foreground"
            />
            <button className="px-5 py-2.5 rounded-lg bg-background text-foreground font-semibold text-sm shrink-0 hover:bg-background/90 transition-colors">
              Berlangganan
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
