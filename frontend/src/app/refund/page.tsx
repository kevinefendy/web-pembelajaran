import Link from "next/link";
import {
  RotateCcw,
  CheckCircle2,
  XCircle,
  Clock,
  CreditCard,
  AlertTriangle,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";

export const metadata = {
  title: "Kebijakan Pengembalian Dana (Refund) - LearnPath",
  description: "Kebijakan dan prosedur garansi pengembalian dana untuk pembelian kelas di LearnPath.",
};

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-primary/5 via-background to-background py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Kebijakan Pengembalian Dana (*Refund*)
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Terakhir diperbarui: 24 September 2026. Kami berkomitmen memberikan pengalaman belajar terbaik dengan garansi 7 hari uang kembali.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 max-w-4xl py-12">
        <div className="space-y-10 leading-relaxed text-sm md:text-base text-foreground/90">
          {/* Highlight Box */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <RotateCcw className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold tracking-tight m-0 text-foreground">
                Garansi 7 Hari Uang Kembali
              </h2>
            </div>
            <p className="text-sm text-muted-foreground m-0 leading-relaxed">
              Jika Anda membeli kursus berbayar di <strong>LearnPath</strong> dan merasa materi atau sistem pembelajaran tidak sesuai dengan ekspektasi Anda, Anda berhak mengajukan pengembalian dana penuh (100%) dalam kurun waktu 7 hari kalender sejak pembayaran berhasil diverifikasi.
            </p>
          </div>

          {/* Syarat & Kriteria */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4">
              Kriteria Kelayakan Pengajuan Refund
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-emerald-500/20 bg-emerald-500/5">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 text-emerald-600 font-semibold text-base">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Dapat Memperoleh Refund</span>
                  </div>
                </CardHeader>
                <CardContent className="text-xs md:text-sm text-muted-foreground space-y-2 pt-0">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Pengajuan dilakukan maksimal <strong>7 hari kalender</strong> sejak transaksi.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Progres penyelesaian materi kursus <strong>belum melebihi 20%</strong>.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Belum pernah mengirimkan tugas submission proyek akhir.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Pembelian dilakukan resmi melalui website LearnPath.</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-destructive/20 bg-destructive/5">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 text-destructive font-semibold text-base">
                    <XCircle className="w-5 h-5" />
                    <span>Tidak Memenuhi Syarat Refund</span>
                  </div>
                </CardHeader>
                <CardContent className="text-xs md:text-sm text-muted-foreground space-y-2 pt-0">
                  <div className="flex items-start gap-2">
                    <span className="text-destructive font-bold">•</span>
                    <span>Pengajuan diajukan lebih dari 7 hari setelah transaksi.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-destructive font-bold">•</span>
                    <span>Progres belajar sudah melebihi 20% dari total silabus.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-destructive font-bold">•</span>
                    <span>Sertifikat kelulusan telah diterbitkan.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-destructive font-bold">•</span>
                    <span>Akun terindikasi melakukan plagiarisme atau pelanggaran ketentuan.</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Separator />

          {/* Alur Pengajuan */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4">
              Langkah & Alur Pengajuan Pengembalian Dana
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 rounded-xl border bg-card/60">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0 text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1">Kirimkan Permohonan</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Kirim email ke <a href="mailto:refund@learnpath.id" className="text-primary hover:underline font-medium">refund@learnpath.id</a> atau melalui formulir kontak kami dengan subjek <code>Pengajuan Refund - [Order ID]</code>. Cantumkan email akun terdaftar dan alasan pengajuan secara singkat.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl border bg-card/60">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0 text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1">Verifikasi Data Pembelajaran</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Tim keuangan dan operasional LearnPath akan memverifikasi riwayat progres modul dan tanggal transaksi Anda dalam waktu maksimal 1x24 jam kerja.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl border bg-card/60">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0 text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1">Pencairan Dana (*Disbursement*)</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Setelah disetujui, dana akan dikembalikan ke rekening bank atau metode pembayaran asal Anda dalam waktu 3 hingga 7 hari kerja (bergantung pada ketentuan bank penerbit / e-wallet).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Biaya Transaksi */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-2">
              Biaya Administrasi & Transaksi Pihak Ketiga
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Pengembalian dana mencakup 100% dari harga kursus yang dibayarkan. Namun, mohon diperhatikan bahwa biaya administrasi transfer bank atau biaya layanan payment gateway yang dipotong oleh pihak ketiga saat transaksi awal (jika ada) bersifat non-refundable sesuai regulasi perbankan.
            </p>
          </div>

          {/* CTA Box */}
          <div className="rounded-2xl border bg-muted/40 p-6 md:p-8 text-center flex flex-col items-center mt-8">
            <HelpCircle className="w-8 h-8 text-primary mb-2" />
            <h3 className="text-lg font-bold mb-1">Butuh Bantuan Pengajuan Refund?</h3>
            <p className="text-sm text-muted-foreground max-w-md mb-4">
              Tim support kami siap mendampingi proses pengecekan status transaksi Anda dengan ramah dan cepat.
            </p>
            <Link href="/contact" className={buttonVariants()}>
              Hubungi Tim Dukungan <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
