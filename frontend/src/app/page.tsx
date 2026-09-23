import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Code,
  Trophy,
  Users,
  Sparkles,
  Zap,
  Globe,
  Smartphone,
  BarChart3,
  Cloud,
  Palette,
  Server,
  Compass,
  Laptop,
  Award,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const learningPaths = [
  {
    title: "Web Development",
    description: "Pelajari HTML, CSS, JavaScript, React, dan Next.js dari dasar hingga mahir",
    level: "Beginner → Expert",
    courses: 8,
    duration: "6 bulan",
    icon: Globe,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Android Development",
    description: "Bangun aplikasi Android dengan Kotlin dan Jetpack Compose",
    level: "Beginner → Expert",
    courses: 7,
    duration: "5 bulan",
    icon: Smartphone,
    color: "bg-green-500/10 text-green-600",
  },
  {
    title: "Data Science & ML",
    description: "Kuasai Python, analisis data, dan machine learning",
    level: "Beginner → Advanced",
    courses: 6,
    duration: "5 bulan",
    icon: BarChart3,
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    title: "Cloud & DevOps",
    description: "Pelajari AWS, Docker, Kubernetes, dan CI/CD pipelines",
    level: "Beginner → Advanced",
    courses: 5,
    duration: "4 bulan",
    icon: Cloud,
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    title: "UI/UX Design",
    description: "Desain antarmuka dan pengalaman pengguna yang menarik",
    level: "Beginner → Intermediate",
    courses: 4,
    duration: "3 bulan",
    icon: Palette,
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    title: "Backend Development",
    description: "Bangun API dan server dengan Node.js, Go, atau Python",
    level: "Beginner → Expert",
    courses: 6,
    duration: "5 bulan",
    icon: Server,
    color: "bg-yellow-500/10 text-yellow-600",
  },
];

const features = [
  {
    icon: BookOpen,
    title: "Kurikulum Terstruktur",
    description: "Learning path yang dirancang oleh expert, dari dasar hingga mahir",
  },
  {
    icon: Code,
    title: "Praktik Langsung",
    description: "Code editor interaktif dan submission project yang direview expert",
  },
  {
    icon: Trophy,
    title: "Sertifikat Digital",
    description: "Dapatkan sertifikat yang bisa diverifikasi dan di-share ke LinkedIn",
  },
  {
    icon: Users,
    title: "Komunitas Aktif",
    description: "Forum diskusi dan tanya jawab dengan sesama learner dan instructor",
  },
];

const stats = [
  { value: "50K+", label: "Siswa Terdaftar" },
  { value: "200+", label: "Kelas Tersedia" },
  { value: "30K+", label: "Sertifikat Diterbitkan" },
  { value: "4.8", label: "Rating Rata-rata" },
];

const steps = [
  { step: "1", title: "Pilih Learning Path", desc: "Tentukan bidang yang ingin kamu pelajari", icon: Compass },
  { step: "2", title: "Belajar Modul", desc: "Ikuti materi interaktif dan latihan coding", icon: BookOpen },
  { step: "3", title: "Kerjakan Project", desc: "Submit project nyata untuk direview expert", icon: Laptop },
  { step: "4", title: "Raih Sertifikat", desc: "Dapatkan sertifikat untuk portofoliomu", icon: Award },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Bangun Skill Tech-mu dengan{" "}
              <span className="text-primary">Learning Path</span>{" "}
              Terstruktur
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Belajar programming, data science, cloud computing, dan lainnya dengan kurikulum terstruktur, project nyata, dan sertifikat yang diakui industri.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className={buttonVariants({ size: "lg" })}>
                Mulai Belajar Gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/courses" className={buttonVariants({ size: "lg", variant: "outline" })}>
                Lihat Katalog Kelas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Kenapa Belajar di LearnPath?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kami menyediakan pengalaman belajar terbaik dengan fitur-fitur yang dirancang untuk membantumu sukses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pilih Learning Path-mu</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mulai perjalanan belajarmu dengan learning path yang terstruktur dari dasar hingga mahir.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPaths.map((path) => {
              const PathIcon = path.icon;
              return (
                <Card key={path.title} className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${path.color}`}>
                        <PathIcon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {path.title}
                        </CardTitle>
                        <Badge variant="secondary" className="mt-1">{path.level}</Badge>
                      </div>
                    </div>
                    <CardDescription>{path.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{path.courses} Kelas</span>
                      <span>~{path.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link href="/paths" className={buttonVariants({ variant: "outline", size: "lg" })}>
              Lihat Semua Learning Path
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Bagaimana Cara Belajar di LearnPath?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((item) => {
              const StepIcon = item.icon;
              return (
                <div key={item.step} className="text-center">
                  <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <StepIcon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Memulai Perjalanan Belajarmu?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Bergabung dengan 50.000+ learner yang sudah mengembangkan skill mereka di LearnPath.
          </p>
          <Link href="/register" className={buttonVariants({ size: "lg", variant: "secondary" })}>
            Daftar Sekarang — Gratis
            <Zap className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
