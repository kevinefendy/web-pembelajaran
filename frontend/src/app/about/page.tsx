import Link from "next/link";
import {
  BookOpen,
  Target,
  Sparkles,
  Users,
  Award,
  Laptop,
  CheckCircle2,
  Heart,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

export const metadata = {
  title: "Tentang Kami - LearnPath",
  description: "Mengenal LearnPath, misi kami mencetak talenta digital Indonesia berstandar industri global.",
};

const stats = [
  { value: "50.000+", label: "Pelajar Terdaftar" },
  { value: "45+", label: "Kursus Berstandar Industri" },
  { value: "98%", label: "Tingkat Kepuasan Belajar" },
  { value: "85%", label: "Lulusan Bekerja di Industri" },
];

const values = [
  {
    icon: Target,
    title: "Kurikulum Berorientasi Industri",
    desc: "Materi disusun langsung bersama praktisi teknologi terkemuka untuk memastikan setiap skill relevan dengan kebutuhan kerja nyata.",
  },
  {
    icon: Laptop,
    title: "Belajar Berbasis Praktik Nyata",
    desc: "Bukan sekadar menonton video tutorial, setiap siswa wajib membangun proyek nyata dan mengasah logika pemecahan masalah.",
  },
  {
    icon: Users,
    title: "Reviewer & Mentor Dedikatif",
    desc: "Setiap baris kode proyek diperiksa secara teliti oleh reviewer berpengalaman, memberikan feedback personal agar siswa berkembang pesat.",
  },
  {
    icon: ShieldCheck,
    title: "Integritas & Kredibilitas",
    desc: "Sertifikat kami memiliki standar kelulusan yang ketat dan dapat diverifikasi secara publik oleh perusahaan perekrut.",
  },
];

const team = [
  {
    name: "Kevin Efendy",
    role: "Founder & Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    bio: "Penggiat edukasi teknologi dengan visi meratakan akses kurikulum digital kelas dunia untuk pemuda Indonesia.",
  },
  {
    name: "Farhan Pratama",
    role: "Head of Curriculum & Engineering",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    bio: "Mantan Staff Engineer di unicorn lokal, memimpin standarisasi silabus dan ekosistem code review LearnPath.",
  },
  {
    name: "Siti Rahmania",
    role: "Head of Student Success",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    bio: "Berpengalaman mendampingi ribuan siswa menjembatani skill teknis menuju karir impian di industri teknologi.",
  },
  {
    name: "Budi Santoso",
    role: "Lead Code Reviewer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    bio: "Menjaga kualitas evaluasi tugas akhir dan memastikan standar clean code terinternalisasi pada setiap lulusan.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-primary/5 via-background to-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Mencetak Talenta Digital Unggul untuk Masa Depan Indonesia
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            LearnPath hadir sebagai jembatan antara kurikulum akademis dan standar industri nyata. 
            Kami percaya bahwa setiap orang berhak mendapatkan pendidikan teknologi berkualitas tinggi 
            yang terstruktur, mendalam, dan membimbing hingga siap kerja.
          </p>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="container mx-auto px-4 -mt-10 mb-16 max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-card border rounded-2xl p-6 shadow-sm">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-3">
              <div className="text-3xl md:text-4xl font-extrabold text-primary mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="container mx-auto px-4 max-w-5xl mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <Card className="border-primary/20 shadow-sm flex flex-col justify-between">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <CardTitle className="text-2xl">Visi Kami</CardTitle>
              <CardDescription className="text-base text-foreground/80 pt-2 leading-relaxed">
                Menjadi ekosistem pendidikan teknologi daring terdepan di Asia Tenggara yang paling tepercaya dalam melahirkan talenta pengembang piranti lunak kelas dunia dari Indonesia.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                <Sparkles className="w-4 h-4 text-primary" />
                Standar kurikulum global, bahasa pengantar Indonesia
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 shadow-sm flex flex-col justify-between">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <CardTitle className="text-2xl">Misi Kami</CardTitle>
              <div className="text-base text-foreground/80 pt-2 space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Menyediakan jalur belajar (*learning path*) yang runut dan bebas dari kebingungan materi acak.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Menerapkan evaluasi kode secara personal (*1-on-1 code review*) untuk setiap submission proyek.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Membangun komunitas pembelajar yang saling mendukung dan terbuka bagi pemula hingga profesional.</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                Berorientasi pada kesuksesan siswa
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Nilai Nilai Utama */}
      <section className="container mx-auto px-4 max-w-5xl mb-20">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-2">Prinsip</Badge>
          <h2 className="text-3xl font-bold tracking-tight">Nilai yang Kami Pegang Teguh</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Komitmen kami dalam merancang platform, kurikulum, dan komunitas belajar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="flex gap-4 p-6 rounded-2xl border bg-card/60 hover:bg-card transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tim Penggerak */}
      <section className="container mx-auto px-4 max-w-5xl mb-20">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-2">Tim Kami</Badge>
          <h2 className="text-3xl font-bold tracking-tight">Sosok di Balik LearnPath</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Didorong oleh tim yang penuh semangat untuk merevolusi pendidikan teknologi di Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <Card key={i} className="text-center overflow-hidden border">
              <div className="h-48 w-full overflow-hidden bg-muted relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <CardDescription className="text-primary font-medium text-xs">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0 text-xs text-muted-foreground leading-relaxed">
                {member.bio}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 max-w-5xl">
        <div className="rounded-3xl bg-gradient-to-r from-primary/15 via-primary/5 to-background border p-8 md:p-12 text-center flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Siap Memulai Langkah Karir Digitalmu?</h2>
          <p className="text-muted-foreground max-w-xl mb-6">
            Pilih jalur belajar yang kamu minati dan dapatkan kurikulum terstruktur serta bimbingan code review terbaik sekarang juga.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/courses" className={buttonVariants({ size: "lg" })}>
              Jelajahi Katalog Kelas <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link href="/paths" className={buttonVariants({ variant: "outline", size: "lg" })}>
              Lihat Learning Path
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
