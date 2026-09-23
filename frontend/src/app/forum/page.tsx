"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  MessageSquare,
  ThumbsUp,
  Search,
  CheckCircle2,
  HelpCircle,
  Plus,
  Sparkles,
  Tag,
  ShieldCheck,
  TrendingUp,
  Clock,
  User,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface ForumThreadItem {
  id: string;
  title: string;
  body: string;
  author: {
    name: string;
    level: string;
  };
  category: string;
  courseTag: string;
  isSolved: boolean;
  upvotes: number;
  replyCount: number;
  createdAt: string;
}

const mockThreads: ForumThreadItem[] = [
  {
    id: "1",
    title: "Bagaimana cara menangani error CORS saat fetch API NestJS dari Next.js?",
    body: "Saya mengalami error 'No Access-Control-Allow-Origin header is present' ketika melakukan fetch data user dari frontend port 3000 ke backend port 4000. Apakah harus pasang cors middleware di main.ts?",
    author: {
      name: "Dimas Anggara",
      level: "Mahir",
    },
    category: "Backend",
    courseTag: "NestJS & PostgreSQL",
    isSolved: true,
    upvotes: 24,
    replyCount: 8,
    createdAt: "2 jam yang lalu",
  },
  {
    id: "2",
    title: "Tips optimasi rendering list panjang di React menggunakan virtualized list",
    body: "Bagi yang sedang mengerjakan submission modul 5 dan datanya ribuan, coba gunakan teknik windowing/virtualization agar DOM tidak lag. Berikut rangkuman implementasi yang saya gunakan...",
    author: {
      name: "Siti Rahmawati",
      level: "Expert",
    },
    category: "Web",
    courseTag: "React.js Modern",
    isSolved: false,
    upvotes: 42,
    replyCount: 15,
    createdAt: "4 jam yang lalu",
  },
  {
    id: "3",
    title: "Error State Hoisting pada TextField di Jetpack Compose tidak ter-update",
    body: "Saat mengetik di TextField, teks di inputan tidak berubah padahal value sudah di-bind ke variable state. Apakah saya perlu menggunakan remember { mutableStateOf('') }?",
    author: {
      name: "Fajar Nugraha",
      level: "Menengah",
    },
    category: "Mobile",
    courseTag: "Jetpack Compose",
    isSolved: true,
    upvotes: 16,
    replyCount: 5,
    createdAt: "Kemarin",
  },
  {
    id: "4",
    title: "Perbedaan Drizzle ORM dengan Prisma dalam performa dan query control",
    body: "Sedang mencoba migrasi backend dari Prisma ke Drizzle ORM. Ternyata Drizzle jauh lebih ringan dan sintaks SQL-nya terasa sangat natural. Ada yang punya best practice untuk migration script di production?",
    author: {
      name: "Kevin Sanjaya",
      level: "Expert",
    },
    category: "Backend",
    courseTag: "Drizzle ORM",
    isSolved: false,
    upvotes: 57,
    replyCount: 21,
    createdAt: "2 hari yang lalu",
  },
  {
    id: "5",
    title: "Cara deploy Next.js 15 ke VPS Ubuntu menggunakan PM2 dan Nginx reverse proxy",
    body: "Panduan langkah demi langkah menjalankan next build, mengatur PM2 cluster mode, SSL Let's Encrypt, dan setting reverse proxy port 3000 ke domain kustom.",
    author: {
      name: "Rian Hidayat",
      level: "Mahir",
    },
    category: "Cloud",
    courseTag: "DevOps & Cloud",
    isSolved: true,
    upvotes: 68,
    replyCount: 19,
    createdAt: "3 hari yang lalu",
  },
];

const categories = ["Semua", "Web", "Mobile", "Backend", "Cloud", "Terselesaikan"];

export default function ForumPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [threads, setThreads] = useState<ForumThreadItem[]>(mockThreads);

  const handleUpvote = (id: string) => {
    setThreads((prev) =>
      prev.map((thread) =>
        thread.id === id ? { ...thread, upvotes: thread.upvotes + 1 } : thread
      )
    );
  };

  const filteredThreads = useMemo(() => {
    return threads.filter((thread) => {
      const matchesSearch =
        thread.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        thread.body.toLowerCase().includes(searchQuery.toLowerCase()) ||
        thread.courseTag.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;

      if (activeCategory === "Semua") return true;
      if (activeCategory === "Terselesaikan") return thread.isSolved;
      return thread.category === activeCategory;
    });
  }, [threads, searchQuery, activeCategory]);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
            Forum Komunitas
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl">
            Tanyakan kendala kode, bagikan solusi, dan diskusikan materi bersama instruktur dan ribuan rekan belajar.
          </p>
        </div>

        <Button className="shrink-0 cursor-pointer">
          <Plus className="mr-2 h-4 w-4" />
          Buat Diskusi Baru
        </Button>
      </div>

      {/* Search & Categories */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Cari pertanyaan, error, atau topik..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Thread List + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Thread List (Left 2 cols) */}
        <div className="lg:col-span-2 space-y-4">
          {filteredThreads.length === 0 ? (
            <div className="text-center py-16 border rounded-xl bg-card">
              <MessageSquare className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
              <h3 className="font-semibold text-base">Diskusi tidak ditemukan</h3>
              <p className="text-xs text-muted-foreground">
                Coba sesuaikan kata kunci pencarian Anda.
              </p>
            </div>
          ) : (
            filteredThreads.map((thread) => (
              <Card key={thread.id} className="border hover:border-primary/40 transition-colors">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    {/* Upvote column */}
                    <button
                      onClick={() => handleUpvote(thread.id)}
                      className="flex flex-col items-center justify-center p-2 rounded-lg bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer shrink-0 border"
                      title="Berikan upvote"
                    >
                      <ThumbsUp className="h-4 w-4 mb-1" />
                      <span className="text-xs font-bold">{thread.upvotes}</span>
                    </button>

                    {/* Thread details */}
                    <div className="flex-1 min-w-0 space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        {thread.isSolved ? (
                          <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 text-[10px]">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Terselesaikan
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="text-[10px]">
                            Diskusi Terbuka
                          </Badge>
                        )}
                        <Badge variant="secondary" className="text-[10px]">
                          {thread.courseTag}
                        </Badge>
                      </div>

                      <h3 className="font-semibold text-base leading-snug hover:text-primary transition-colors cursor-pointer">
                        {thread.title}
                      </h3>

                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {thread.body}
                      </p>

                      {/* Footer meta */}
                      <div className="flex items-center justify-between pt-2 text-xs text-muted-foreground border-t">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-5 w-5">
                            <AvatarFallback className="text-[9px] bg-primary/10 text-primary">
                              {thread.author.name.slice(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium text-foreground">{thread.author.name}</span>
                          <span className="text-muted-foreground">•</span>
                          <span>{thread.createdAt}</span>
                        </div>

                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-3.5 w-3.5 text-primary" />
                          <span className="font-medium">{thread.replyCount} Balasan</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Sidebar (Right col) */}
        <div className="space-y-6">
          {/* Rules Card */}
          <Card className="border">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <CardTitle className="text-base">Panduan Forum</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-xs text-muted-foreground leading-relaxed">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Gunakan fitur pencarian terlebih dahulu sebelum membuat pertanyaan baru.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Sertakan pesan error lengkap dan tangkapan layar atau cuplikan kode.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Beri tanda solusi jika pertanyaan Anda sudah terjawab oleh rekan lain.</span>
              </div>
            </CardContent>
          </Card>

          {/* Popular Topics Card */}
          <Card className="border">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <CardTitle className="text-base">Topik Populer</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Next.js App Router",
                  "JWT Authentication",
                  "PostgreSQL Indexing",
                  "Drizzle ORM Migrations",
                  "Jetpack Compose State",
                  "TypeScript Generics",
                  "Docker Compose",
                  "Tailwind CSS v4",
                ].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-muted/60 text-muted-foreground hover:text-primary hover:bg-muted text-xs transition-colors cursor-pointer border"
                  >
                    <Tag className="h-3 w-3" />
                    <span>{tag}</span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
