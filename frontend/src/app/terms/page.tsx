import Link from "next/link";
import { FileText, Shield, AlertCircle, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Syarat & Ketentuan - LearnPath",
  description: "Ketentuan penggunaan platform dan layanan pembelajaran online LearnPath.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-primary/5 via-background to-background py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Badge variant="outline" className="mb-4 px-3 py-1 text-sm border-primary/30 text-primary inline-flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5" />
            Dokumen Hukum
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Syarat & Ketentuan Penggunaan
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Terakhir diperbarui: 24 September 2026. Harap membaca seluruh ketentuan ini dengan seksama sebelum menggunakan layanan platform LearnPath.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 max-w-4xl py-12">
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-10 leading-relaxed text-sm md:text-base text-foreground/90">
          <div className="bg-muted/40 border rounded-2xl p-6 flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground m-0">
              Dengan mendaftar, mengakses, atau menggunakan layanan platform <strong>LearnPath</strong> (baik situs web maupun API terkait), Anda menyatakan telah membaca, memahami, dan menyetujui untuk terikat oleh seluruh Syarat & Ketentuan di bawah ini.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-3">1. Definisi & Ruang Lingkup</h2>
            <p className="text-muted-foreground">
              Dalam perjanjian ini:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li><strong>&quot;Platform&quot;</strong> merujuk pada situs web, aplikasi web, dan seluruh ekosistem layanan daring yang dioperasikan oleh PT Talenta Belajar Digital (LearnPath).</li>
              <li><strong>&quot;Pengguna&quot;</strong> atau <strong>&quot;Siswa&quot;</strong> merujuk pada setiap individu yang membuat akun dan mengakses materi pada Platform.</li>
              <li><strong>&quot;Learning Path&quot;</strong> adalah rangkaian kurikulum terstruktur yang terdiri atas beberapa modul dan kursus untuk mencapai kompetensi tertentu.</li>
              <li><strong>&quot;Code Reviewer&quot;</strong> adalah praktisi atau penguji yang ditunjuk oleh LearnPath untuk memeriksa tugas akhir (*submission*) pengguna.</li>
            </ul>
          </div>

          <Separator />

          <div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-3">2. Pendaftaran Akun & Keamanan</h2>
            <p className="text-muted-foreground">
              Untuk mengakses fitur-fitur pembelajaran, Anda diwajibkan mendaftar akun dengan data yang benar dan valid:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Satu akun hanya diperuntukkan bagi satu individu pemilik sah. Dilarang keras membagikan kredensial login (email dan password) kepada pihak lain.</li>
              <li>Pengguna bertanggung jawab penuh atas seluruh aktivitas yang terjadi di bawah akun miliknya.</li>
              <li>LearnPath berhak menonaktifkan atau menghapus akun yang terindikasi menggunakan identitas palsu atau melakukan tindakan manipulasi sistem.</li>
            </ul>
          </div>

          <Separator />

          <div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-3">3. Integritas Akademik & Anti-Plagiarisme</h2>
            <p className="text-muted-foreground">
              LearnPath menjunjung tinggi integritas proses pembelajaran dan kredibilitas sertifikat kelulusan:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Setiap submission proyek harus merupakan hasil karya orisinal siswa yang bersangkutan.</li>
              <li>Dilarang keras menyalin, menjiplak secara utuh kode milik siswa lain, atau membagikan solusi tugas akhir kepada publik demi keuntungan pribadi.</li>
              <li>Penggunaan referensi atau pustaka open source diizinkan selama dicantumkan atribusi sumber secara jujur dan transparan.</li>
              <li>Pelanggaran berat terhadap ketentuan plagiarisme akan mengakibatkan pembatalan sertifikat, diskualifikasi tugas, dan potensi pemblokiran akun permanen tanpa pengembalian dana.</li>
            </ul>
          </div>

          <Separator />

          <div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-3">4. Hak Kekayaan Intelektual (HAKI)</h2>
            <p className="text-muted-foreground">
              Seluruh materi teks, silabus, video, kuis, desain grafis, logo, dan kode sumber platform adalah hak milik eksklusif LearnPath dan dilindungi oleh Undang-Undang Hak Cipta Republik Indonesia.
            </p>
            <p className="text-muted-foreground mt-2">
              Sebaliknya, hak cipta atas kode proyek tugas akhir yang ditulis secara independen oleh siswa tetap menjadi milik siswa yang bersangkutan sebagai bagian dari portofolio profesional mereka.
            </p>
          </div>

          <Separator />

          <div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-3">5. Pembelian Kelas & Akses Materi</h2>
            <p className="text-muted-foreground">
              Pengguna yang telah menyelesaikan pembayaran kursus berbayar akan mendapatkan akses seumur hidup (*lifetime access*) terhadap modul yang bersangkutan selama platform LearnPath beroperasi, kecuali terjadi penutupan akun akibat pelanggaran berat Syarat & Ketentuan.
            </p>
          </div>

          <Separator />

          <div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-3">6. Standar Komunitas Forum Diskusi</h2>
            <p className="text-muted-foreground">
              Dalam memanfaatkan fitur forum diskusi dan tanya-jawab modul, pengguna wajib:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Menjaga kesopanan, etika berkomunikasi, dan saling menghargai.</li>
              <li>Tidak menyebarkan ujaran kebencian, konten SARA, pornografi, maupun pelecehan dalam bentuk apa pun.</li>
              <li>Tidak melakukan spam promosi produk komersial pihak ketiga di luar konteks diskusi pembelajaran.</li>
            </ul>
          </div>

          <Separator />

          <div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-3">7. Hukum yang Berlaku</h2>
            <p className="text-muted-foreground">
              Syarat & Ketentuan ini diatur dan ditafsirkan sesuai dengan hukum yang berlaku di Negara Kesatuan Republik Indonesia. Setiap perselisihan yang timbul akan diupayakan untuk diselesaikan secara musyawarah untuk mufakat sebelum menempuh jalur hukum formal.
            </p>
          </div>

          <Separator />

          <div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-3">8. Hubungi Kami</h2>
            <p className="text-muted-foreground">
              Jika Anda memiliki pertanyaan mengenai Syarat & Ketentuan ini, silakan hubungi tim legal kami melalui email di{" "}
              <a href="mailto:legal@learnpath.id" className="text-primary hover:underline font-semibold">
                legal@learnpath.id
              </a>{" "}
              atau kunjungi halaman{" "}
              <Link href="/contact" className="text-primary hover:underline font-semibold">
                Hubungi Kami
              </Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
