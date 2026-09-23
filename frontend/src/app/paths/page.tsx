import Link from "next/link";
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
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

interface PathItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  level: string;
  icon: typeof Globe;
  color: string;
  coursesCount: number;
  duration: string;
  studentCount: string;
  topics: string[];
}

const paths: PathItem[] = [
  {
    id: "1",
    title: "Fullstack Web Development",
    slug: "fullstack-web-development",
    description: "Kuasai ekosistem web modern dari dasar HTML, CSS, JavaScript hingga React, Next.js, dan REST API backend.",
    level: "Pemula → Mahir",
    icon: Globe,
    color: "bg-blue-500/10 text-blue-600",
    coursesCount: 8,
    duration: "6 Bulan",
    studentCount: "24.120 Siswa",
    topics: ["HTML & CSS Modern", "JavaScript ES6+", "React.js", "Next.js", "Node.js & Express", "PostgreSQL"],
  },
  {
    id: "2",
    title: "Android Native Development",
    slug: "android-native-development",
    description: "Pelajari pembuatan aplikasi mobile Android modern dari nol menggunakan Kotlin dan Jetpack Compose sesuai standar industri.",
    level: "Pemula → Mahir",
    icon: Smartphone,
    color: "bg-emerald-500/10 text-emerald-600",
    coursesCount: 7,
    duration: "5 Bulan",
    studentCount: "16.850 Siswa",
    topics: ["Dasar Pemrograman Kotlin", "Android UI Jetpack Compose", "Room Database", "Retrofit API", "Clean Architecture"],
  },
  {
    id: "3",
    title: "Data Science & Machine Learning",
    slug: "data-science-machine-learning",
    description: "Bangun karir di dunia data dengan menguasai pengolahan data Python, eksplorasi data, dan implementasi algoritma machine learning.",
    level: "Pemula → Lanjutan",
    icon: BarChart3,
    color: "bg-purple-500/10 text-purple-600",
    coursesCount: 6,
    duration: "5 Bulan",
    studentCount: "14.300 Siswa",
    topics: ["Python untuk Data", "Pandas & NumPy", "Exploratory Data Analysis", "Scikit-Learn", "Model Deployment"],
  },
  {
    id: "4",
    title: "Cloud Computing & DevOps",
    slug: "cloud-computing-devops",
    description: "Pelajari arsitektur komputasi awan menggunakan AWS, containerization dengan Docker, orkestrasi Kubernetes, serta otomasi CI/CD.",
    level: "Menengah → Mahir",
    icon: Cloud,
    color: "bg-orange-500/10 text-orange-600",
    coursesCount: 5,
    duration: "4 Bulan",
    studentCount: "9.740 Siswa",
    topics: ["Dasar AWS Cloud", "Docker Container", "Kubernetes Orchestration", "CI/CD Pipeline GitHub Actions", "Terraform"],
  },
  {
    id: "5",
    title: "Backend Engineering",
    slug: "backend-engineering",
    description: "Rancang arsitektur backend berskala tinggi, microservices, database optimization, caching, dan messaging queue.",
    level: "Menengah → Mahir",
    icon: Server,
    color: "bg-amber-500/10 text-amber-600",
    coursesCount: 6,
    duration: "5 Bulan",
    studentCount: "11.200 Siswa",
    topics: ["Node.js & NestJS", "Go Programming", "PostgreSQL Optimization", "Redis Caching", "Kafka / RabbitMQ"],
  },
  {
    id: "6",
    title: "UI/UX & Product Design",
    slug: "ui-ux-product-design",
    description: "Pelajari riset kebutuhan pengguna, wireframing, perancangan antarmuka visual di Figma, design token, dan usability testing.",
    level: "Pemula → Menengah",
    icon: Palette,
    color: "bg-pink-500/10 text-pink-600",
    coursesCount: 4,
    duration: "3 Bulan",
    studentCount: "8.950 Siswa",
    topics: ["User Research", "Wireframing", "Figma Prototyping", "Design System", "Usability Testing"],
  },
];

export default function LearningPathsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Learning Path Terstruktur
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Pilih jalur belajar yang sesuai dengan aspirasi karir Anda. Setiap learning path dirancang langkah demi langkah dari materi dasar hingga proyek nyata siap kerja.
        </p>
      </div>

      {/* Grid of paths */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paths.map((item) => {
          const PathIcon = item.icon;
          return (
            <Card key={item.id} className="flex flex-col justify-between hover:shadow-lg transition-shadow border">
              <CardHeader>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color}`}>
                    <PathIcon className="h-6 w-6" />
                  </div>
                  <Badge variant="outline">{item.level}</Badge>
                </div>
                <CardTitle className="text-xl leading-snug">{item.title}</CardTitle>
                <CardDescription className="text-sm line-clamp-3 mt-1">
                  {item.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Meta stats */}
                <div className="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-lg bg-muted/40 text-xs text-muted-foreground border">
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="h-3.5 w-3.5 text-primary" />
                    <span>{item.coursesCount} Kelas</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                    <span>{item.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5 text-primary" />
                    <span>{item.studentCount}</span>
                  </div>
                </div>

                {/* Topics preview */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
                    Materi yang dipelajari:
                  </p>
                  <ul className="space-y-1.5">
                    {item.topics.slice(0, 4).map((topic) => (
                      <li key={topic} className="flex items-center gap-2 text-xs text-foreground/80">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                    {item.topics.length > 4 && (
                      <li className="text-xs text-muted-foreground pl-5.5">
                        +{item.topics.length - 4} materi lainnya
                      </li>
                    )}
                  </ul>
                </div>

                {/* Link */}
                <div className="pt-2">
                  <Link
                    href={`/paths/${item.slug}`}
                    className={buttonVariants({ variant: "outline", className: "w-full justify-between" })}
                  >
                    <span>Jelajahi Kurikulum</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
