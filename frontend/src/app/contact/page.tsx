"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  HelpCircle,
  Building,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "general",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-primary/5 via-background to-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Badge variant="outline" className="mb-4 px-3 py-1 text-sm border-primary/30 text-primary inline-flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5" />
            Hubungi Kami
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Kami Siap Membantu Anda
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Punya pertanyaan mengenai kelas, program kemitraan B2B, atau butuh bantuan teknis terkait akun Anda? Kirim pesan dan kami akan merespons sesegera mungkin.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-5xl py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-2">Informasi Kontak</h2>
              <p className="text-sm text-muted-foreground">
                Gunakan kanal di bawah ini untuk menghubungi tim LearnPath secara langsung.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="border shadow-none">
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Email Resmi</h4>
                    <p className="text-xs text-muted-foreground mb-1">Pertanyaan Umum & Bantuan Siswa:</p>
                    <a href="mailto:support@learnpath.id" className="text-sm text-primary hover:underline font-medium block">
                      support@learnpath.id
                    </a>
                    <p className="text-xs text-muted-foreground mt-1 mb-0.5">Kerjasama & Kemitraan Kampus:</p>
                    <a href="mailto:partnership@learnpath.id" className="text-sm text-primary hover:underline font-medium block">
                      partnership@learnpath.id
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border shadow-none">
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Hotline & WhatsApp Support</h4>
                    <p className="text-xs text-muted-foreground mb-1">Layanan pesan instan:</p>
                    <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="text-sm font-medium text-foreground hover:text-primary">
                      +62 812-3456-7890
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border shadow-none">
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Jam Operasional Layanan</h4>
                    <p className="text-xs text-muted-foreground">
                      Senin - Jumat: 09.00 - 18.00 WIB<br />
                      Sabtu & Minggu: Libur (Pesan diproses hari kerja berikutnya)
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border shadow-none">
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Alamat Kantor Pusat</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      LearnPath HQ (PT Talenta Belajar Digital)<br />
                      Menara Digital Indonesia, Lantai 12<br />
                      Jl. Jenderal Sudirman Kav. 25, Setiabudi<br />
                      Jakarta Selatan, DKI Jakarta 12920
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <Card className="border shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Kirim Pesan</CardTitle>
                <CardDescription>
                  Isi formulir di bawah ini dengan lengkap agar kami dapat menindaklanjuti pertanyaanmu secara tepat sasaran.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold">Pesan Berhasil Terkirim!</h3>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                      Terima kasih telah menghubungi LearnPath. Tim dukungan kami akan meninjau pesan Anda dan membalas melalui email <strong>{formData.email}</strong> dalam kurun waktu 1x24 jam kerja.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", category: "general", subject: "", message: "" });
                      }}
                    >
                      Kirim Pesan Lainnya
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nama Lengkap *</Label>
                        <Input
                          id="name"
                          placeholder="cth. Budi Santoso"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Alamat Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="budi@example.com"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Kategori Pertanyaan</Label>
                      <select
                        id="category"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      >
                        <option value="general">Pertanyaan Umum & Informasi Kelas</option>
                        <option value="technical">Kendala Teknis Akun & Submission</option>
                        <option value="certificate">Penerbitan & Verifikasi Sertifikat</option>
                        <option value="payment">Pembayaran & Permohonan Refund</option>
                        <option value="partnership">Kerjasama Institusi / Universitas / B2B</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subjek</Label>
                      <Input
                        id="subject"
                        placeholder="Ringkasan kendala atau perihal pesan"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Pesan Anda *</Label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        placeholder="Tuliskan detail pertanyaan atau kendala yang Anda alami secara rinci..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Kirimkan Pesan Sekarang
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
