import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  BookOpen,
  Users,
  Star,
  CheckCircle2,
  FileText,
  PlayCircle,
  Code2,
  HelpCircle,
  Upload,
  Trophy,
  ShieldCheck,
  Share2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

interface CourseDetail {
  slug: string;
  title: string;
  description: string;
  level: string;
  price: number;
  isFree: boolean;
  durationHours: number;
  avgRating: number;
  studentCount: number;
  instructor: {
    name: string;
    role: string;
    bio: string;
  };
  outcomes: string[];
  modules: {
    id: string;
    title: string;
    type: "TEXT" | "VIDEO" | "CODE_LAB" | "QUIZ" | "SUBMISSION";
    duration: string;
  }[];
}

const mockDetailDatabase: Record<string, CourseDetail> = {
  "dasar-pemrograman-web": {
    slug: "dasar-pemrograman-web",
    title: "Dasar Pemrograman Web (HTML, CSS, JavaScript)",
    description: "Fondasi utama membuat website modern yang responsif dan interaktif. Kuasai semantik HTML5, CSS Flexbox & Grid, hingga dasar manipulasi DOM JavaScript.",
    level: "Dasar",
    price: 0,
    isFree: true,
    durationHours: 20,
    avgRating: 4.9,
    studentCount: 38400,
    instructor: {
      name: "Rizky Ramadhan",
      role: "Senior Frontend Engineer di Unicorn Tech",
      bio: "Praktisi frontend developer dengan pengalaman 8 tahun membangun aplikasi web berskala jutaan pengguna.",
    },
    outcomes: [
      "Memahami konsep dasar arsitektur web dan cara kerja browser",
      "Menulis kode HTML5 yang semantik dan ramah SEO",
      "Merancang layout responsif menggunakan CSS Modern (Flexbox & Grid)",
      "Mengontrol interaktivitas halaman web menggunakan JavaScript modern",
      "Menyelesaikan submission project portofolio website profil interaktif",
    ],
    modules: [
      { id: "1", title: "Pengenalan Arsitektur Web & Client-Server", type: "TEXT", duration: "15 menit" },
      { id: "2", title: "Sintaks dan Elemen Semantik HTML5", type: "VIDEO", duration: "25 menit" },
      { id: "3", title: "Styling Web dengan CSS3", type: "TEXT", duration: "30 menit" },
      { id: "4", title: "Layout Modern: Flexbox & CSS Grid", type: "CODE_LAB", duration: "45 menit" },
      { id: "5", title: "Kuis Evaluasi Dasar HTML & CSS", type: "QUIZ", duration: "20 menit" },
      { id: "6", title: "Pengenalan Logika Pemrograman JavaScript", type: "TEXT", duration: "35 menit" },
      { id: "7", title: "DOM Manipulation & Event Listener", type: "CODE_LAB", duration: "50 menit" },
      { id: "8", title: "Proyek Akhir: Halaman Profil Pribadi Responsif", type: "SUBMISSION", duration: "120 menit" },
    ],
  },
};

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = mockDetailDatabase[slug] || mockDetailDatabase["dasar-pemrograman-web"];

  const getModuleIcon = (type: string) => {
    switch (type) {
      case "VIDEO":
        return PlayCircle;
      case "CODE_LAB":
        return Code2;
      case "QUIZ":
        return HelpCircle;
      case "SUBMISSION":
        return Upload;
      default:
        return FileText;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back button */}
      <div className="mb-6">
        <Link
          href="/courses"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Kembali ke Katalog Kelas</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Content (Left 2 cols) */}
        <div className="lg:col-span-2 space-y-10">
          {/* Title & Meta */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="secondary">{course.level}</Badge>
              <span className="text-xs text-muted-foreground">•</span>
              <div className="flex items-center gap-1 text-xs text-amber-600 font-semibold">
                <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                <span>{course.avgRating.toFixed(1)}</span>
              </div>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="text-xs text-muted-foreground">
                {course.studentCount.toLocaleString("id-ID")} Siswa
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
              {course.title}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Instructor Box */}
          <div className="flex items-center gap-4 p-4 rounded-xl border bg-muted/20">
            <Avatar className="h-12 w-12">
              <AvatarFallback className="bg-primary/10 text-primary font-bold">
                {course.instructor.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-xs text-muted-foreground">Instruktur Kelas</p>
              <h4 className="font-semibold text-sm md:text-base">{course.instructor.name}</h4>
              <p className="text-xs text-muted-foreground">{course.instructor.role}</p>
            </div>
          </div>

          {/* What you will learn */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Yang Akan Anda Pelajari</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-5 rounded-xl border bg-card">
              {course.outcomes.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Syllabus */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Kurikulum & Modul Kelas</h3>
              <span className="text-xs text-muted-foreground">
                {course.modules.length} Modul ({course.durationHours} Jam Total)
              </span>
            </div>

            <div className="divide-y rounded-xl border bg-card overflow-hidden">
              {course.modules.map((mod, idx) => {
                const ModIcon = getModuleIcon(mod.type);
                return (
                  <div
                    key={mod.id}
                    className="p-4 flex items-center justify-between hover:bg-muted/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-muted-foreground w-5 text-right">
                        {idx + 1}.
                      </span>
                      <ModIcon className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-sm font-medium">{mod.title}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-[10px]">
                        {mod.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {mod.duration}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sidebar Enrollment Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <Card className="border shadow-sm">
              <CardHeader className="pb-4">
                <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">
                  Akses Kelas Penuh
                </p>
                <div className="flex items-baseline gap-2 mt-1">
                  {course.isFree ? (
                    <span className="text-3xl font-extrabold text-emerald-600">Gratis</span>
                  ) : (
                    <span className="text-3xl font-extrabold text-foreground">
                      {formatPrice(course.price)}
                    </span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <Link
                  href="/register"
                  className={buttonVariants({ size: "lg", className: "w-full text-center font-semibold" })}
                >
                  {course.isFree ? "Daftar Kelas Gratis Sekarang" : "Beli Kelas Sekarang"}
                </Link>

                <div className="space-y-3 pt-2 text-xs text-muted-foreground border-t">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>Akses materi selamanya tanpa batas waktu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span>{course.modules.length} modul bacaan dan video interaktif</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Upload className="h-4 w-4 text-primary" />
                    <span>Submission proyek dinilai langsung oleh reviewer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-primary" />
                    <span>Sertifikat digital kompetensi kelulusan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    <span>Forum diskusi tanya jawab dengan instruktur</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
