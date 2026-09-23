import Link from "next/link";
import { BookOpen, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  platform: [
    { href: "/courses", label: "Katalog Kelas" },
    { href: "/paths", label: "Learning Path" },
    { href: "/leaderboard", label: "Leaderboard" },
    { href: "/forum", label: "Forum" },
  ],
  company: [
    { href: "/about", label: "Tentang Kami" },
    { href: "/careers", label: "Karir" },
    { href: "/contact", label: "Hubungi Kami" },
    { href: "/blog", label: "Blog" },
  ],
  support: [
    { href: "/faq", label: "FAQ" },
    { href: "/terms", label: "Syarat & Ketentuan" },
    { href: "/privacy", label: "Kebijakan Privasi" },
    { href: "/refund", label: "Kebijakan Refund" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <span>LearnPath</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Platform pembelajaran online terbaik untuk mengembangkan skill teknologi dengan kurikulum terstruktur berbahasa Indonesia.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Bantuan</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} LearnPath. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Dibuat dengan <Heart className="h-4 w-4 text-red-500 fill-red-500" /> di Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
