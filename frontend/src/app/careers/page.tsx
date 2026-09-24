import Link from "next/link";
import {
  Briefcase,
  MapPin,
  Clock,
  Sparkles,
  Heart,
  DollarSign,
  Laptop,
  GraduationCap,
  Coffee,
  CheckCircle2,
  ArrowRight,
  Send,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

export const metadata = {
  title: "Karir di LearnPath - Bergabung Bersama Kami",
  description: "Bantu jutaan pemuda Indonesia menguasai keterampilan teknologi masa depan.",
};

const perks = [
  {
    icon: Laptop,
    title: "Remote-First Policy",
    desc: "Bekerja dari mana saja di seluruh Indonesia dengan fleksibilitas jam kerja yang menghargai produktivitas dan hasil nyata.",
  },
  {
    icon: GraduationCap,
    title: "Tunjangan Belajar & Buku",
    desc: "Anggaran tahunan khusus untuk membeli buku, mengikuti kursus global, maupun sertifikasi profesional internasional.",
  },
  {
    icon: Heart,
    title: "Asuransi Kesehatan Penuh",
    desc: "Perlindungan rawat inap, rawat jalan, gigi, serta fasilitas BPJS Kesehatan & Ketenagakerjaan untuk kamu dan keluarga.",
  },
  {
    icon: Coffee,
    title: "Work-Life Harmony",
    desc: "Cuti tahunan fleksibel, cuti berbayar khusus kesehatan mental, serta tidak ada budaya lembur tak berujung.",
  },
];

const jobs = [
  {
    id: "fe-dev",
    title: "Senior Fullstack Engineer (Next.js & NestJS)",
    department: "Engineering",
    location: "Remote / Hybrid (Jakarta)",
    type: "Penuh Waktu",
    level: "Senior",
    desc: "Mengembangkan platform pembelajaran generasi berikutnya, fitur interaktif code lab, dan integrasi payment gateway berkecepatan tinggi.",
    requirements: [
      "3+ tahun pengalaman profesional dengan React / Next.js dan TypeScript",
      "Keahlian mendalam dalam backend NestJS / Express dan PostgreSQL",
      "Pemahaman arsitektur clean code, CI/CD, dan Docker",
    ],
  },
  {
    id: "code-reviewer",
    title: "Code Reviewer (Web & Mobile) - Freelance / Part-Time",
    department: "Education & Mentoring",
    location: "Full Remote",
    type: "Paruh Waktu",
    level: "Mid - Senior",
    desc: "Mengevaluasi kode proyek submission siswa, memberikan ulasan solutif dan feedback konstruktif guna mencetak lulusan siap kerja.",
    requirements: [
      "Menguasai JavaScript/TypeScript modern, React/Vue, atau Android (Kotlin)",
      "Memiliki empati tinggi dan kemampuan komunikasi tertulis yang jelas serta ramah",
      "Komitmen waktu minimal 10-15 jam per minggu",
    ],
  },
  {
    id: "curriculum-dev",
    title: "Curriculum Specialist (Cloud & DevOps)",
    department: "Curriculum",
    location: "Remote / Jakarta",
    type: "Penuh Waktu",
    level: "Mid",
    desc: "Menyusun silabus, latihan interaktif, dan materi pembelajaran berbasis Docker, Kubernetes, AWS, dan CI/CD untuk industri.",
    requirements: [
      "Pengalaman praktis mengelola infrastruktur cloud (AWS/GCP) dan containerization",
      "Kemampuan menyederhanakan konsep teknis yang kompleks menjadi modul belajar yang mudah dipahami",
    ],
  },
  {
    id: "uiux-designer",
    title: "Product Designer (UI/UX)",
    department: "Product",
    location: "Remote",
    type: "Penuh Waktu",
    level: "Mid",
    desc: "Merancang antarmuka belajar yang intuitif, sistem gamifikasi yang memikat, dan pengalaman pengguna yang inklusif di desktop maupun mobile.",
    requirements: [
      "Portofolio desain produk digital (Figma) yang solid dengan studi kasus yang jelas",
      "Paham konsep design system, atomic design, dan user research",
    ],
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-primary/5 via-background to-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Badge variant="outline" className="mb-4 px-3 py-1 text-sm border-primary/30 text-primary">
            💼 Karir di LearnPath
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Mari Ciptakan Dampak Bersama Kami
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Bergabunglah dengan tim yang berkomitmen menghadirkan revolusi pendidikan teknologi di Indonesia. 
            Tumbuh bersama rekan kerja yang suportif, berbakat, dan haus akan inovasi.
          </p>
        </div>
      </section>

      {/* Perks Section */}
      <section className="container mx-auto px-4 max-w-5xl py-16">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-2">Benefit</Badge>
          <h2 className="text-3xl font-bold tracking-tight">Kenyamanan & Fasilitas untuk Tim Kami</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Kami percaya talenta terbaik akan menghasilkan karya hebat ketika didukung oleh lingkungan kerja yang sehat dan fleksibel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {perks.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <div key={i} className="flex gap-4 p-6 rounded-2xl border bg-card/60 hover:bg-card transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{perk.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{perk.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Open Positions */}
      <section className="container mx-auto px-4 max-w-5xl mb-20">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-2">Peluang Karir</Badge>
          <h2 className="text-3xl font-bold tracking-tight">Lowongan Pekerjaan Terbuka</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Temukan posisi yang sesuai dengan keahlianmu dan mari bersama mendemokratisasi edukasi teknologi.
          </p>
        </div>

        <div className="space-y-6">
          {jobs.map((job) => (
            <Card key={job.id} className="border hover:border-primary/40 transition-colors shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <Badge variant="secondary" className="text-xs font-normal">
                        <Briefcase className="w-3 h-3 mr-1" />
                        {job.department}
                      </Badge>
                      <Badge variant="secondary" className="text-xs font-normal">
                        <MapPin className="w-3 h-3 mr-1" />
                        {job.location}
                      </Badge>
                      <Badge variant="outline" className="text-xs font-normal">
                        <Clock className="w-3 h-3 mr-1" />
                        {job.type}
                      </Badge>
                    </div>
                  </div>
                  <a
                    href={`mailto:careers@learnpath.id?subject=Lamaran: ${encodeURIComponent(job.title)}`}
                    className={buttonVariants({ size: "sm" })}
                  >
                    Lamar Posisi <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </a>
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {job.desc}
                </p>
                <div className="bg-muted/40 p-3.5 rounded-xl border text-xs text-muted-foreground space-y-1.5">
                  <span className="font-semibold text-foreground block mb-1">Kualifikasi Utama:</span>
                  {job.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* General Application */}
      <section className="container mx-auto px-4 max-w-5xl">
        <div className="rounded-3xl bg-muted/40 border p-8 md:p-12 text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
            <Send className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Tidak Menemukan Posisi yang Cocok?</h2>
          <p className="text-muted-foreground max-w-xl mb-6 text-sm">
            Kirimkan resume dan portofolio terbaikmu ke email kami. Kami selalu membuka pintu bagi talenta berdedikasi tinggi yang ingin berkontribusi.
          </p>
          <a
            href="mailto:careers@learnpath.id?subject=General Application - LearnPath"
            className={buttonVariants({ variant: "outline" })}
          >
            Kirimkan Resume ke careers@learnpath.id
          </a>
        </div>
      </section>
    </div>
  );
}
