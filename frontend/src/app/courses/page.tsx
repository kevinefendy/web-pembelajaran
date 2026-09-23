"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  BookOpen,
  Clock,
  Star,
  Users,
  CheckCircle2,
  Code2,
  Layers,
  Sparkles,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

interface CourseItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  level: "DASAR" | "MENENGAH" | "MAHIR";
  price: number;
  durationHours: number;
  modulesCount: number;
  avgRating: number;
  studentCount: number;
  isFree: boolean;
  category: string;
  instructor: {
    name: string;
    avatarUrl?: string;
    role: string;
  };
}

const mockCourses: CourseItem[] = [
  {
    id: "1",
    title: "Dasar Pemrograman Web (HTML, CSS, JavaScript)",
    slug: "dasar-pemrograman-web",
    description: "Fondasi utama membuat website modern yang responsif dan interaktif dengan standar HTML5 dan CSS3.",
    level: "DASAR",
    price: 0,
    durationHours: 20,
    modulesCount: 28,
    avgRating: 4.9,
    studentCount: 38400,
    isFree: true,
    category: "Web",
    instructor: {
      name: "Rizky Ramadhan",
      role: "Senior Frontend Engineer",
    },
  },
  {
    id: "2",
    title: "Membangun Aplikasi Web Modern dengan React & TypeScript",
    slug: "aplikasi-web-react-js",
    description: "Pelajari pembuatan UI berbasis komponen, custom hooks, context API, dan integrasi TypeScript di React.",
    level: "MENENGAH",
    price: 250000,
    durationHours: 35,
    modulesCount: 42,
    avgRating: 4.8,
    studentCount: 14200,
    isFree: false,
    category: "Web",
    instructor: {
      name: "Ahmad Fauzi",
      role: "Lead Software Engineer",
    },
  },
  {
    id: "3",
    title: "Arsitektur Fullstack dengan Next.js 15 & Drizzle ORM",
    slug: "fullstack-modern-nextjs",
    description: "Kuasai Server Components, Server Actions, Autentikasi JWT, dan database PostgreSQL menggunakan Drizzle.",
    level: "MAHIR",
    price: 350000,
    durationHours: 40,
    modulesCount: 46,
    avgRating: 4.9,
    studentCount: 8900,
    isFree: false,
    category: "Web",
    instructor: {
      name: "Budi Santoso",
      role: "Fullstack Architect",
    },
  },
  {
    id: "4",
    title: "Dasar Pemrograman Kotlin untuk Android",
    slug: "pemrograman-kotlin-dasar",
    description: "Mulai langkah menjadi developer Android profesional dengan menguasai bahasa Kotlin dari nol.",
    level: "DASAR",
    price: 0,
    durationHours: 18,
    modulesCount: 22,
    avgRating: 4.9,
    studentCount: 22100,
    isFree: true,
    category: "Mobile",
    instructor: {
      name: "Dian Pratama",
      role: "Android Specialist",
    },
  },
  {
    id: "5",
    title: "Modern Android Development dengan Jetpack Compose",
    slug: "android-jetpack-compose",
    description: "Bangun aplikasi Android yang indah dan efisien menggunakan Jetpack Compose, ViewModel, dan Coroutines.",
    level: "MENENGAH",
    price: 300000,
    durationHours: 32,
    modulesCount: 38,
    avgRating: 4.8,
    studentCount: 9400,
    isFree: false,
    category: "Mobile",
    instructor: {
      name: "Dian Pratama",
      role: "Android Specialist",
    },
  },
  {
    id: "6",
    title: "Backend Scalable dengan NestJS & Clean Architecture",
    slug: "backend-api-nodejs-postgresql",
    description: "Desain sistem backend modular, dependency injection, middleware security, dan microservices ready.",
    level: "MAHIR",
    price: 320000,
    durationHours: 36,
    modulesCount: 40,
    avgRating: 4.9,
    studentCount: 11200,
    isFree: false,
    category: "Backend",
    instructor: {
      name: "Ahmad Fauzi",
      role: "Lead Software Engineer",
    },
  },
  {
    id: "7",
    title: "Python untuk Data Science & Analisis Data",
    slug: "python-data-science",
    description: "Eksplorasi data, visualisasi interaktif dengan Matplotlib & Seaborn, serta pembersihan data menggunakan Pandas.",
    level: "DASAR",
    price: 0,
    durationHours: 24,
    modulesCount: 30,
    avgRating: 4.8,
    studentCount: 18300,
    isFree: true,
    category: "Data",
    instructor: {
      name: "Maya Lestari",
      role: "Data Scientist",
    },
  },
  {
    id: "8",
    title: "Machine Learning Dasar: Dari Regresi hingga Klasifikasi",
    slug: "machine-learning-dasar",
    description: "Pahami fondasi machine learning, evaluasi metrik model, dan implementasi algoritma Scikit-Learn.",
    level: "MENENGAH",
    price: 280000,
    durationHours: 30,
    modulesCount: 34,
    avgRating: 4.7,
    studentCount: 7600,
    isFree: false,
    category: "Data",
    instructor: {
      name: "Maya Lestari",
      role: "Data Scientist",
    },
  },
];

const categories = ["Semua", "Web", "Mobile", "Backend", "Data", "Gratis"];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredCourses = useMemo(() => {
    return mockCourses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;

      if (activeCategory === "Semua") return true;
      if (activeCategory === "Gratis") return course.isFree;
      return course.category === activeCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Katalog Kelas Teknologi
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Eksplorasi kelas praktis yang dipandu oleh instruktur praktisi industri. Dilengkapi modul interaktif, latihan soal, dan review submission.
        </p>
      </div>

      {/* Search and Category Filters */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Cari materi atau topik kelas..."
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

      {/* Course Grid */}
      {filteredCourses.length === 0 ? (
        <div className="text-center py-16 border rounded-xl bg-card">
          <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
          <h3 className="text-lg font-semibold mb-1">Kelas tidak ditemukan</h3>
          <p className="text-sm text-muted-foreground">
            Coba ubah kata kunci pencarian atau kategori filter Anda.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="flex flex-col justify-between hover:shadow-md transition-shadow border">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <Badge variant={course.level === "DASAR" ? "secondary" : "outline"} className="text-[11px]">
                    {course.level}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-amber-600 font-semibold">
                    <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                    <span>{course.avgRating.toFixed(1)}</span>
                  </div>
                </div>
                <CardTitle className="text-lg leading-snug line-clamp-2">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-xs line-clamp-2 mt-1">
                  {course.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Meta details */}
                <div className="flex items-center justify-between text-xs text-muted-foreground border-y py-2.5">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                    {course.durationHours} Jam
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-3.5 w-3.5 text-primary" />
                    {course.modulesCount} Modul
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5 text-primary" />
                    {course.studentCount.toLocaleString("id-ID")}
                  </span>
                </div>

                {/* Instructor */}
                <div className="flex items-center gap-2.5">
                  <Avatar className="h-7 w-7">
                    <AvatarFallback className="text-[10px] bg-primary/10 text-primary">
                      {course.instructor.name.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-xs">
                    <p className="font-medium leading-none">{course.instructor.name}</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{course.instructor.role}</p>
                  </div>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between pt-2">
                  <div>
                    {course.isFree ? (
                      <span className="text-sm font-bold text-emerald-600">Gratis</span>
                    ) : (
                      <span className="text-sm font-bold text-foreground">
                        {formatPrice(course.price)}
                      </span>
                    )}
                  </div>
                  <Link
                    href={`/courses/${course.slug}`}
                    className={buttonVariants({ size: "sm" })}
                  >
                    Lihat Kelas
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
