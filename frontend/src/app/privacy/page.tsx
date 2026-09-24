import Link from "next/link";
import { ShieldCheck, Lock, Eye, Database, UserCheck, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Kebijakan Privasi - LearnPath",
  description: "Kebijakan perlindungan data pribadi dan privasi pengguna platform LearnPath.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-primary/5 via-background to-background py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Badge variant="outline" className="mb-4 px-3 py-1 text-sm border-primary/30 text-primary">
            🛡️ Perlindungan Data
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Kebijakan Privasi
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Terakhir diperbarui: 24 September 2026. LearnPath berkomitmen penuh menjaga kerahasiaan dan keamanan data pribadi Anda sesuai regulasi UU Pelindungan Data Pribadi (UU PDP).
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 max-w-4xl py-12">
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-10 leading-relaxed text-sm md:text-base text-foreground/90">
          <div className="bg-muted/40 border rounded-2xl p-6 flex items-start gap-4">
            <Lock className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground m-0">
              Kebijakan Privasi ini menjelaskan bagaimana <strong>LearnPath</strong> mengumpulkan, mengelola, menyimpan, dan melindungi informasi pribadi yang Anda berikan saat menggunakan platform kami.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-3">1. Informasi yang Kami Kumpulkan</h2>
            <p className="text-muted-foreground">
              Kami mengumpulkan beberapa kategori data guna mendukung proses belajar Anda:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Data Profil & Akun:</strong> Nama lengkap, alamat email, password terenkripsi, foto avatar, biografi singkat, serta tautan profil GitHub atau LinkedIn yang Anda cantumkan secara sukarela.</li>
              <li><strong>Data Pembelajaran:</strong> Riwayat pendaftaran kursus, modul yang telah diselesaikan, jawaban kuis, berkas atau tautan repositori tugas submission, hasil ulasan reviewer, dan perolehan poin XP.</li>
              <li><strong>Data Transaksi:</strong> ID pesanan, jumlah nominal pembayaran, status transaksi, dan metode pembayaran yang dipilih. <em>Catatan: Kami tidak menyimpan detail nomor kartu kredit Anda; seluruh transaksi kartu diproses secara aman oleh payment gateway berlisensi Bank Indonesia (Midtrans).</em></li>
              <li><strong>Data Teknis:</strong> Alamat IP, jenis peramban (*browser*), resolusi perangkat, dan data analitik interaksi halaman guna optimalisasi performa platform.</li>
            </ul>
          </div>

          <Separator />

          <div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-3">2. Tujuan Penggunaan Data Pribadi</h2>
            <p className="text-muted-foreground">
              Informasi yang dikumpulkan digunakan semata-mata untuk:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Memverifikasi identitas pengguna dan menyediakan akses ke materi pembelajaran.</li>
              <li>Memungkinkan tim Reviewer memeriksa kode tugas proyek dan memberikan umpan balik personal.</li>
              <li>Menerbitkan dan memvalidasi keaslian sertifikat kelulusan digital berbasis kode verifikasi unik.</li>
              <li>Mengirimkan pemberitahuan penting seperti hasil review tugas, pembaharuan materi, atau pemulihan kata sandi.</li>
              <li>Menganalisis dan menyempurnakan fitur platform agar proses belajar semakin intuitif dan lancar.</li>
            </ul>
          </div>

          <Separator />

          <div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-3">3. Keamanan & Penyimpanan Data</h2>
            <p className="text-muted-foreground">
              Kami menerapkan standar keamanan industri tinggi untuk melindungi data Anda dari akses tanpa izin, kehilangan, atau pengubahan:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Enkripsi komunikasi data menggunakan protokol <strong>HTTPS / TLS 1.3</strong>.</li>
              <li>Kata sandi pengguna diacak menggunakan algoritma *one-way cryptographic hash* (<strong>bcrypt</strong> dengan salt round tinggi) sehingga tidak dapat dibaca bahkan oleh tim pengembang kami sekalipun.</li>
              <li>Autentikasi sesi menggunakan JSON Web Tokens (JWT) dengan masa kedaluwarsa ketat dan proteksi HTTP headers via <em>Helmet</em>.</li>
            </ul>
          </div>

          <Separator />

          <div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-3">4. Pembagian Data kepada Pihak Ketiga</h2>
            <p className="text-muted-foreground">
              <strong>Kami tidak pernah dan tidak akan menjual data pribadi Anda kepada pihak mana pun untuk keperluan periklanan komersial.</strong>
            </p>
            <p className="text-muted-foreground mt-2">
              Data hanya dibagikan secara terbatas kepada mitra penyedia infrastruktur tepercaya yang terikat perjanjian kerahasiaan ketat, antara lain:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Penyedia gerbang pembayaran (Payment Gateway) resmi untuk memproses tagihan kursus.</li>
              <li>Penyedia layanan server komputasi awan dan database berstandar ISO 27001.</li>
            </ul>
          </div>

          <Separator />

          <div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-3">5. Hak Pemilik Data Pribadi</h2>
            <p className="text-muted-foreground">
              Sesuai dengan Undang-Undang Perlindungan Data Pribadi (UU PDP), Anda memiliki hak penuh untuk:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Mengakses dan memperbarui informasi profil akun Anda kapan saja melalui dashboard pengguna.</li>
              <li>Meminta salinan data pribadi yang kami simpan.</li>
              <li>Meminta penghapusan akun beserta riwayat data pribadi (*right to be forgotten*), dengan mengajukan permohonan ke tim dukungan kami.</li>
            </ul>
          </div>

          <Separator />

          <div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-3">6. Hubungi Petugas Privasi (DPO)</h2>
            <p className="text-muted-foreground">
              Apabila Anda memiliki pertanyaan, keberatan, atau ingin menggunakan hak Anda terkait data pribadi, silakan hubungi tim Data Protection Officer (DPO) kami di:
            </p>
            <div className="mt-3 p-4 bg-muted/40 rounded-xl border text-sm text-muted-foreground space-y-1">
              <p className="font-semibold text-foreground">Data Protection Officer - LearnPath</p>
              <p>Email: <a href="mailto:privacy@learnpath.id" className="text-primary hover:underline">privacy@learnpath.id</a></p>
              <p>Alamat: Menara Digital Indonesia Lt. 12, Jl. Jend. Sudirman Kav. 25, Jakarta Selatan 12920</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
