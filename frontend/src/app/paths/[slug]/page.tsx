import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Globe,
  Smartphone,
  BarChart3,
  Cloud,
  Server,
  Palette,
  BookOpen,
  Clock,
  Users,
  Trophy,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

interface PathDetail {
  slug: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  studentCount: string;
  icon: typeof Globe;
  color: string;
  courses: {
    order: number;
    title: string;
    slug: string;
    level: string;
    hours: number;
    modulesCount: number;
    rating: number;
    description: string;
  }[];
}

const pathsDatabase: Record<string, PathDetail> = {
  "fullstack-web-development": {
    slug: "fullstack-web-development",
    title: "Fullstack Web Development",
    description: "Kuasai ekosistem web modern dari dasar HTML, CSS, JavaScript hingga React, Next.js, dan REST API backend siap pakai di industri.",
    level: "Pemula → Mahir",
    duration: "6 Bulan",
    studentCount: "24.120 Siswa",
    icon: Globe,
    color: "bg-blue-500/10 text-blue-600",
    courses: [
      {
        order: 1,
        title: "Dasar Pemrograman Web (HTML & CSS)",
        slug: "dasar-pemrograman-web",
        level: "Dasar",
        hours: 18,
        modulesCount: 24,
        rating: 4.9,
        description: "Mempelajari sintaks dasar HTML5, styling semantik dengan CSS3, Flexbox, dan Grid untuk membuat website responsif.",
      },
      {
        order: 2,
        title: "Pemrograman JavaScript Modern (ES6+)",
        slug: "pemrograman-javascript-modern",
        level: "Dasar",
        hours: 26,
        modulesCount: 32,
        rating: 4.8,
        description: "Memahami asynchronous JavaScript, Promise, async/await, DOM manipulation, modul, dan clean coding.",
      },
      {
        order: 3,
        title: "Membangun Aplikasi Web dengan React.js",
        slug: "aplikasi-web-react-js",
        level: "Menengah",
        hours: 35,
        modulesCount: 40,
        rating: 4.9,
        description: "Membuat Single Page Application menggunakan React Hooks, state management, routing, dan integrasi REST API.",
      },
      {
        order: 4,
        title: "Fullstack Modern dengan Next.js & TypeScript",
        slug: "fullstack-modern-nextjs",
        level: "Mahir",
        hours: 42,
        modulesCount: 48,
        rating: 4.9,
        description: "Membangun web performa tinggi dengan Server Components, Server Actions, App Router, dan Tailwind CSS.",
      },
      {
        order: 5,
        title: "Backend API dengan Node.js & PostgreSQL",
        slug: "backend-api-nodejs-postgresql",
        level: "Mahir",
        hours: 38,
        modulesCount: 44,
        rating: 4.8,
        description: "Merancang RESTful API, validasi data, autentikasi JWT, relasi database PostgreSQL, dan Drizzle ORM.",
      },
    ],
  },
  "android-native-development": {
    slug: "android-native-development",
    title: "Android Native Development",
    description: "Pelajari pembuatan aplikasi mobile Android modern dari nol menggunakan Kotlin dan Jetpack Compose sesuai standar industri.",
    level: "Pemula → Mahir",
    duration: "5 Bulan",
    studentCount: "16.850 Siswa",
    icon: Smartphone,
    color: "bg-emerald-500/10 text-emerald-600",
    courses: [
      {
        order: 1,
        title: "Memulai Pemrograman dengan Kotlin",
        slug: "pemrograman-kotlin-dasar",
        level: "Dasar",
        hours: 20,
        modulesCount: 25,
        rating: 4.9,
        description: "Dasar sintaks Kotlin, OOP, Null Safety, functional programming, dan Coroutines.",
      },
      {
        order: 2,
        title: "Belajar Membuat Aplikasi Android untuk Pemula",
        slug: "android-pemula",
        level: "Dasar",
        hours: 30,
        modulesCount: 35,
        rating: 4.8,
        description: "Pengenalan Android Studio, Activity, Intent, Fragment, dan arsitektur UI dasar.",
      },
      {
        order: 3,
        title: "Membangun UI Modern dengan Jetpack Compose",
        slug: "android-jetpack-compose",
        level: "Menengah",
        hours: 36,
        modulesCount: 42,
        rating: 4.9,
        description: "Declarative UI framework terbaru di Android dengan state hoisting, custom layout, dan animations.",
      },
    ],
  },
};

export default async function PathDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const path = pathsDatabase[slug] || pathsDatabase["fullstack-web-development"];

  const PathIcon = path.icon;

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back button */}
      <div className="mb-8">
        <Link
          href="/paths"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Kembali ke Semua Path</span>
        </Link>
      </div>

      {/* Hero Banner */}
      <div className="rounded-2xl border bg-card p-6 md:p-10 mb-12 shadow-xs">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${path.color}`}>
              <PathIcon className="h-8 w-8" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{path.level}</Badge>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground">{path.courses.length} Kelas Tersedia</span>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-3">
                {path.title}
              </h1>
              <p className="text-muted-foreground text-sm md:text-base max-w-2xl">
                {path.description}
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
            <Link href="/register" className={buttonVariants({ size: "lg", className: "w-full justify-center" })}>
              <span>Mulai Belajar Path Ini</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Path Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t">
          <div className="flex items-center gap-3">
            <BookOpen className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Total Kelas</p>
              <p className="text-sm font-semibold">{path.courses.length} Kelas</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Estimasi Belajar</p>
              <p className="text-sm font-semibold">{path.duration}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Siswa Terdaftar</p>
              <p className="text-sm font-semibold">{path.studentCount}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Trophy className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Sertifikat</p>
              <p className="text-sm font-semibold">Tersertifikasi Industri</p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Roadmap */}
      <div className="max-w-4xl">
        <h2 className="text-2xl font-bold mb-6">Urutan Kelas yang Akan Ditempuh</h2>
        <div className="space-y-6">
          {path.courses.map((course, idx) => (
            <Card key={course.slug} className="relative overflow-hidden border">
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-primary" />
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">
                      {idx + 1}
                    </span>
                    <Badge variant="outline" className="text-xs">{course.level}</Badge>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-amber-600 font-medium">
                    <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                    <span>{course.rating.toFixed(1)}</span>
                  </div>
                </div>
                <CardTitle className="text-lg md:text-xl mt-2">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {course.description}
                </p>
                <div className="flex items-center justify-between pt-2 border-t text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {course.hours} Jam Belajar
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-3.5 w-3.5" />
                      {course.modulesCount} Modul
                    </span>
                  </div>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="font-medium text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <span>Detail Kelas</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
