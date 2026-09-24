<div align="center">

# 🚀 LearnPath

### *Platform Pembelajaran Pemrograman & Karier Digital Terstruktur*

Platform pembelajaran teknologi berbahasa Indonesia dengan kurikulum berbasis *Learning Path*, submission proyek nyata dengan *code review* interaktif, forum diskusi komunitas, dan sertifikasi digital terverifikasi.

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-12.0-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x%20%2F%206.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-0.45-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black)](https://orm.drizzle.team/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

---

[Fitur Utama](#-fitur-utama) • [Tech Stack](#-tech-stack) • [Arsitektur Sistem](#-arsitektur-sistem) • [Struktur Proyek](#-struktur-proyek) • [Panduan Instalasi](#-panduan-instalasi--instalasi) • [Daftar Endpoint](#-dokumentasi-api-overview) • [Kontribusi](#-kontribusi)

</div>

---

## 📖 Tentang LearnPath

**LearnPath** dirancang untuk memberikan pengalaman belajar pemrograman modern berstandar industri bagi talenta digital Indonesia. Mengadopsi metode pembelajaran berbasis aksi nyata:

- 🧭 **Alur Belajar Terarah (*Learning Path*)**: Belajar step-by-step mulai dari dasar hingga mahir tanpa tersesat (*tutorial hell*).
- 🛠️ **Hands-on Submissions**: Teori diimbangi latihan mandiri dan proyek portofolio yang dinilai langsung oleh tim reviewer.
- 🎮 **Gamifikasi & Komunitas**: Dapatkan XP, raih badge level, berkompetisi di papan peringkat (*leaderboard*), dan berdiskusi aktif di forum.
- 🎓 **Kredensial Tepercaya**: Sertifikat kelulusan digital dengan kode unik yang dapat diverifikasi publik dan diintegrasikan ke profil LinkedIn.

---

## ✨ Fitur Utama

### 1. 🎓 Jalur Belajar (*Learning Paths*) & Kursus
- Kurikulum terkurasi: **Web Development**, **Android Development**, **Data Science & ML**, **Cloud & DevOps**, **UI/UX Design**, dan **Backend Development**.
- Modul belajar multi-tipe: Teks interaktif, video materi, kuis pemahaman, dan proyek submission.
- Indikator progres belajar berkala (*progress tracking percentage*).

### 2. 📝 Hands-on Project & Code Review
- Unggah berkas tugas atau sertakan tautan repositori GitHub proyek.
- Sistem status submission: `DRAFT`, `SUBMITTED`, `IN_REVIEW`, `ACCEPTED`, dan `REJECTED`.
- Umpan balik mendalam dan skor langsung dari Reviewer / Instruktur untuk memastikan kualitas kode siswa.

### 3. 🏆 Gamifikasi & Peringkat Komunitas
- **XP Points & Leveling**: Dapatkan poin setiap menyelesaikan modul, lulus kuis, dan review proyek diterima.
- **Leaderboard Publik**: Pantau peringkat pembelajar paling aktif secara berkala.

### 4. 💬 Forum Diskusi Interaktif
- Ruang tanya-jawab terintegrasi per modul maupun per kursus.
- Penandaan solusi (*mark as solved*), pin jawaban instruktur, dan sistem upvote jawaban terbaik.

### 5. 📜 Sertifikat Digital Terverifikasi
- Penerbitan otomatis setelah seluruh modul dan submission kursus berhasil diselesaikan.
- Dilengkapi **Certificate Code** unik untuk verifikasi keabsahan secara publik.

### 6. 🔒 Autentikasi & Keamanan Tangguh
- Autentikasi berbasis **JWT Access & Refresh Token** dengan hashing password `bcrypt`.
- Role-based Access Control (RBAC): `STUDENT`, `REVIEWER`, `INSTRUCTOR`, `ADMIN`, dan `SUPER_ADMIN`.
- Keamanan HTTP headers dengan `helmet` dan proteksi DDoS/brute-force dengan `@nestjs/throttler`.

### 7. 💳 Integrasi Pembayaran (Siap Midtrans)
- Dukungan kursus gratis maupun berbayar.
- Skema transaksi siap terhubung ke payment gateway **Midtrans** (QRIS, Virtual Account Bank, E-Wallet, dan Kartu Kredit).

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Library UI**: [React 19](https://react.dev/), [shadcn/ui](https://ui.shadcn.com/) (Base UI), [Lucide React](https://lucide.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Form & Validation**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **HTTP Client**: [Axios](https://axios-http.com/)

### Backend
- **Framework**: [NestJS 12](https://nestjs.com/)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Database ORM**: [Drizzle ORM](https://orm.drizzle.team/) & [Drizzle Kit](https://orm.drizzle.team/kit-docs/overview)
- **Database Driver**: [postgres.js](https://github.com/porsager/postgres)
- **Autentikasi**: [Passport.js](https://www.passportjs.org/) (`passport-jwt`, `passport-local`)
- **Keamanan**: `helmet`, `bcrypt`, `class-validator`, `@nestjs/throttler`

### Database & Infrastruktur
- **Relational Database**: [PostgreSQL 16](https://www.postgresql.org/)
- **Database GUI**: [Drizzle Studio](https://orm.drizzle.team/drizzle-studio/overview)
- **Arsitektur Monorepo**: NPM Workspaces didukung [Concurrently](https://github.com/open-cli-tools/concurrently)

---

## 📐 Arsitektur Sistem

```mermaid
graph TD
    User([Pengguna / Mahasiswa]) -->|Akses Web Browser| NextClient["Frontend: Next.js 16 (App Router)"]
    
    subgraph Client Layer
        NextClient --> ZustandStore["Client State (Zustand)"]
        NextClient --> AxiosAPI["API Client (Axios)"]
    end
    
    AxiosAPI -->|REST API Request /api/*| NestApp["Backend: NestJS 12 API"]
    
    subgraph Server Layer
        NestApp --> HelmetMW["Security Middleware (Helmet, CORS, ValidationPipe)"]
        HelmetMW --> AuthModule["Auth & JWT Guards (RBAC)"]
        HelmetMW --> CourseModule["Courses & Modules Controller"]
        HelmetMW --> PathModule["Learning Paths Controller"]
        
        AuthModule --> DrizzleProvider["Drizzle ORM Engine"]
        CourseModule --> DrizzleProvider
        PathModule --> DrizzleProvider
    end
    
    subgraph Data Layer
        DrizzleProvider -->|PostgreSQL Connection Pool| PostgresDB[("PostgreSQL 16 Database")]
        DrizzleProvider -.->|Visual Inspection| DrizzleStudio["Drizzle Studio (GUI)"]
    end

    subgraph Eksternal
        CourseModule -.->|Webhooks / Snap Token| Midtrans["Midtrans Payment Gateway"]
    end
```

---

## 📂 Struktur Proyek

Repositori ini menggunakan arsitektur **Monorepo** dengan `npm workspaces` agar frontend dan backend dapat dikelola secara efisien dalam satu repositori:

```text
website-pembelajaran/
├── backend/                         # Backend Service (NestJS)
│   ├── src/
│   │   ├── auth/                    # Modul Autentikasi (JWT, Guards, RBAC, DTOs)
│   │   │   ├── dto/                 # Data Transfer Objects (Login, Register)
│   │   │   ├── guards/              # JWT Auth & Roles Guards
│   │   │   ├── strategies/          # Passport JWT Strategy
│   │   │   ├── auth.controller.ts   # Endpoint /api/auth
│   │   │   └── auth.service.ts      # Logika otentikasi & token lifecycle
│   │   ├── courses/                 # Manajemen Kursus & Modul
│   │   │   ├── dto/                 # DTOs create & manage course
│   │   │   ├── courses.controller.ts# Endpoint /api/courses
│   │   │   └── courses.service.ts   # CRUD & enrollment logic
│   │   ├── learning-paths/          # Manajemen Jalur Pembelajaran
│   │   │   ├── learning-paths.controller.ts
│   │   │   └── learning-paths.service.ts
│   │   ├── drizzle/                 # Konfigurasi ORM & Skema Database
│   │   │   ├── drizzle.provider.ts  # Database connection provider
│   │   │   └── schema.ts            # Definisi relasi, enum, & tabel database
│   │   ├── app.module.ts            # Root NestJS Module
│   │   └── main.ts                  # Entry point bootstrap server
│   ├── .env.example                 # Template environment variable backend
│   ├── drizzle.config.ts            # Konfigurasi Drizzle Kit
│   └── package.json
│
├── frontend/                        # Frontend Application (Next.js 16)
│   ├── public/                      # Static assets & icons
│   ├── src/
│   │   ├── app/                     # App Router pages & layouts
│   │   │   ├── (auth)/              # Halaman Login & Registrasi
│   │   │   ├── courses/             # Katalog & Detail Kursus ([slug])
│   │   │   ├── paths/               # Daftar Jalur Belajar ([slug])
│   │   │   ├── forum/               # Halaman Forum Diskusi Komunitas
│   │   │   ├── leaderboard/         # Halaman Papan Peringkat / XP Siswa
│   │   │   ├── layout.tsx           # Global Root Layout
│   │   │   └── page.tsx             # Landing Page Utama
│   │   ├── components/              # Reusable UI & Layout Components
│   │   │   ├── layout/              # Navbar, Footer, Sidebar
│   │   │   └── ui/                  # Komponen shadcn/ui (Button, Card, Badge, dll)
│   │   ├── lib/                     # Utilitas pendukung (Axios instance, formatters)
│   │   ├── stores/                  # State management global (auth-store, dll)
│   │   └── types/                   # Definisi TypeScript model & respons API
│   ├── .env.example                 # Template environment variable frontend
│   └── package.json
│
├── docs/                            # Dokumentasi teknis & spesifikasi sistem
├── package.json                     # Root monorepo configuration & runner scripts
└── README.md                        # Dokumentasi utama proyek
```

---

## ⚡ Panduan Instalasi & Menjalankan

### 1. Prasyarat Sistem
Pastikan perangkat lunak berikut telah terinstal pada sistem Anda:
- [Node.js](https://nodejs.org/) versi `20.x` atau lebih baru
- [npm](https://www.npmjs.com/) versi `10.x` atau lebih baru
- [PostgreSQL](https://www.postgresql.org/) versi `16.x` (berjalan secara lokal atau melalui cloud/Docker)
- [Git](https://git-scm.com/)

---

### 2. Kloning Repositori & Instal Dependensi

```bash
# Clone repositori
git clone https://github.com/kevinefendy/web-pembelajaran.git
cd website-pembelajaran

# Install seluruh dependensi monorepo (root, frontend, dan backend)
npm install
```

---

### 3. Konfigurasi Environment Variables

Salin template berkas `.env.example` pada masing-masing workspace:

#### Konfigurasi Backend:
```bash
# Salin berkas env
cp backend/.env.example backend/.env
```
Sesuaikan nilai pada `backend/.env`:
```env
# Koneksi PostgreSQL (ganti username, password, host, port, dan dbname)
DATABASE_URL="postgresql://postgres:password@localhost:5432/learnpath?schema=public"

# Rahasia Token JWT
JWT_SECRET=super-secret-jwt-key-min-32-chars
JWT_REFRESH_SECRET=super-secret-refresh-key-min-32-chars

# Alamat Aplikasi Frontend & Port API
FRONTEND_URL=http://localhost:3000
PORT=4000
```

#### Konfigurasi Frontend:
```bash
# Salin berkas env
cp frontend/.env.example frontend/.env.local
```
Isi konfigurasi `frontend/.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

### 4. Setup Database & Migrasi Skema

Buat database baru di PostgreSQL dengan nama `learnpath` (atau sesuaikan dengan `DATABASE_URL`):

```sql
CREATE DATABASE learnpath;
```

Lakukan sinkronisasi skema tabel Drizzle ORM ke database PostgreSQL:

```bash
# Pindah ke direktori backend
cd backend

# Sinkronisasi skema secara otomatis ke database
npm run db:push
```

> [!TIP]
> Untuk melihat isi tabel, relasi, dan memanipulasi data melalui antarmuka web, jalankan **Drizzle Studio**:
> ```bash
> npm run db:studio
> ```
> Akses GUI database di browser melalui: `https://local.drizzle.studio`

---

### 5. Menjalankan Aplikasi

Anda dapat menjalankan kedua aplikasi secara serentak dari root repositori atau menjalankannya secara terpisah.

#### Opsi A: Menjalankan Serentak (Rekomendasi)
Dari direktori root proyek:
```bash
npm run dev
```
Perintah ini akan menyalakan Backend (`http://localhost:4000`) dan Frontend (`http://localhost:3000`) menggunakan `concurrently`.

#### Opsi B: Menjalankan Workspace Secara Terpisah
```bash
# Terminal 1: Backend
npm run dev:backend
# API berjalan di: http://localhost:4000

# Terminal 2: Frontend
npm run dev:frontend
# Web berjalan di: http://localhost:3000
```

---

## 📜 Daftar Perintah (*NPM Scripts*)

### Root Scripts (Monorepo)
| Perintah | Deskripsi |
|---|---|
| `npm run dev` | Menjalankan Frontend dan Backend development server secara paralel |
| `npm run dev:frontend` | Menjalankan frontend Next.js saja (`localhost:3000`) |
| `npm run dev:backend` | Menjalankan backend NestJS saja (`localhost:4000`) |
| `npm run build` | Melakukan build produksi untuk kedua workspace |
| `npm run build:frontend` | Melakukan build produksi frontend |
| `npm run build:backend` | Melakukan build produksi backend |

### Backend Scripts (`backend/`)
| Perintah | Deskripsi |
|---|---|
| `npm run start:dev` | Menjalankan NestJS dengan fitur hot-reload |
| `npm run db:push` | Mendorong perubahan skema Drizzle langsung ke database |
| `npm run db:generate` | Membuat file migrasi SQL baru dari skema TypeScript |
| `npm run db:migrate` | Menerapkan berkas migrasi SQL ke database |
| `npm run db:studio` | Membuka Drizzle Studio web GUI database viewer |
| `npm run test` | Menjalankan unit tests menggunakan Vitest |
| `npm run test:e2e` | Menjalankan integration/e2e tests menggunakan Vitest |
| `npm run lint` | Melakukan linting kode dengan Oxlint |

---

## 🗄️ Skema & Entitas Database

Skema database dimodelkan menggunakan **Drizzle ORM** dengan PostgreSQL types:

```
[ users ]
   │1
   ├──< [ courses ] (sebagai instructor)
   │        │1
   │        ├──< [ modules ] ──< [ quizzes ]
   │        ├──< [ module_completions ] >── [ users ]
   │        ├──< [ enrollments ] >────────── [ users ]
   │        ├──< [ submissions ] >────────── [ users ]
   │        │        │1
   │        │        └──1 [ reviews ] >───── [ users ] (reviewer)
   │        ├──< [ certificates ] >───────── [ users ]
   │        ├──< [ forum_threads ] >──────── [ users ]
   │        │        │1
   │        │        └──< [ forum_replies ] > [ users ]
   │        └──< [ payments ] >───────────── [ users ]
   │
   └──< [ learning_paths ] ──< [ courses ]
```

| Tabel | Keterangan |
|---|---|
| `users` | Akun pengguna, peran (Student/Reviewer/Instructor/Admin), poin XP, level, dan OAuth profil |
| `learning_paths` | Kelompok jalur belajar terstruktur (misal: Web Dev, Cloud, dsb.) |
| `courses` | Entitas kursus lengkap (judul, deskripsi, harga, durasi jam, tingkat kesulitan) |
| `modules` | Unit bab/materi kursus (`TEXT`, `VIDEO`, `CODE_LAB`, `QUIZ`, `SUBMISSION`) |
| `quizzes` | Soal kuis pilihan ganda beserta kunci jawaban dan penjelasannya |
| `module_completions` | Catatan modul yang telah dituntaskan oleh siswa |
| `enrollments` | Pendaftaran kursus, status kelulusan, dan progres persentase belajar |
| `submissions` | Berkas tugas / repository URL yang dikirimkan oleh siswa |
| `reviews` | Hasil review proyek oleh Reviewer (skor nilai, feedback ulasan, hasil `ACCEPTED`/`REJECTED`) |
| `certificates` | Sertifikat resmi kelulusan kursus lengkap dengan kode verifikasi unik |
| `forum_threads` & `replies` | Diskusi tanya-jawab komunitas per kursus/modul |
| `payments` | Riwayat pembayaran kursus berbayar (status Midtrans, snap token, metode bayar) |

---

## 📡 Dokumentasi API (Overview)

Base URL: `http://localhost:4000/api`

### 🔐 Autentikasi (`/api/auth`)
| Metode | Endpoint | Guard / Akses | Deskripsi |
|---|---|---|---|
| `POST` | `/api/auth/register` | Publik | Mendaftarkan akun baru |
| `POST` | `/api/auth/login` | Publik | Masuk dengan email & password (mengembalikan token) |
| `POST` | `/api/auth/refresh` | Publik | Memperbarui Access Token menggunakan Refresh Token |
| `GET` | `/api/auth/profile` | `Bearer Token` | Mengambil data profil pengguna yang sedang login |

### 📚 Kursus (`/api/courses`)
| Metode | Endpoint | Guard / Akses | Deskripsi |
|---|---|---|---|
| `GET` | `/api/courses` | Publik | Mendapatkan daftar kursus dengan filter, sort, & search |
| `GET` | `/api/courses/:slug` | Publik | Mendapatkan detail kursus beserta silabus modul |
| `POST` | `/api/courses` | `Instructor / Admin` | Membuat kursus baru |
| `POST` | `/api/courses/:id/enroll` | `Bearer Token` | Mendaftar ke suatu kursus |
| `GET` | `/api/courses/enrolled/me` | `Bearer Token` | Mengambil daftar kursus yang sedang diikuti pengguna |

### 🧭 Jalur Belajar (`/api/learning-paths`)
| Metode | Endpoint | Guard / Akses | Deskripsi |
|---|---|---|---|
| `GET` | `/api/learning-paths` | Publik | Mendapatkan seluruh daftar learning path yang tersedia |
| `GET` | `/api/learning-paths/:slug` | Publik | Mendapatkan detail learning path beserta daftar kursusnya |

---

## 🗺️ Roadmap Pengembangan

- [x] Arsitektur Monorepo (Next.js 16 + NestJS 12)
- [x] Skema database lengkap dengan Drizzle ORM (Users, Courses, Submissions, Gamification, Payments)
- [x] Landing page interaktif & katalog kursus
- [x] Autentikasi JWT (Login, Register, Refresh Token, Profile)
- [x] Role-Based Access Control (RBAC Guard)
- [ ] Integrasi webhook payment gateway Midtrans
- [ ] Modul interaktif Code Sandbox / Code Lab in-browser
- [ ] Portal dashboard khusus Reviewer untuk evaluasi submission
- [ ] Pengiriman notifikasi email otomatis (selamat datang, review selesai, sertifikat terbit)
- [ ] Generator sertifikat PDF dinamis dengan QR Code verifikasi

---

## 🤝 Kontribusi

Kontribusi selalu disambut dengan senang hati! Jika Anda ingin berkontribusi:

1. **Fork** repositori ini
2. Buat branch fitur baru (`git checkout -b feature/fitur-keren`)
3. Commit perubahan Anda (`git commit -m 'feat: menambahkan fitur keren'`)
4. Push ke branch Anda (`git push origin feature/fitur-keren`)
5. Ajukan **Pull Request**

---

## 📄 Lisensi

Didistribusikan di bawah Lisensi **MIT**. Silakan lihat file `LICENSE` untuk informasi lebih lengkap.

---

<div align="center">
  Dibuat dengan ❤️ untuk kemajuan talenta teknologi Indonesia 🇮🇩
</div>
