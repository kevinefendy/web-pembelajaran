# LearnPath

Platform Pembelajaran Online berbahasa Indonesia mirip Dicoding.

## Tech Stack

| Layer | Teknologi |
|-------|-----------|
| Frontend | Next.js 16, TypeScript, Tailwind CSS v4, shadcn/ui |
| Backend | NestJS, TypeScript, Drizzle ORM |
| Database | PostgreSQL 16 |
| Cache | Redis |
| Auth | JWT + Passport |
| Payment | Midtrans |

## Project Structure

```
website-pembelajaran/
├── frontend/          # Next.js app
├── backend/           # NestJS API (Drizzle ORM)
├── docs/              # Dokumentasi
├── package.json       # Root monorepo config
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL 16+

### Installation & Environment Setup

1. Copy file environment:
   ```bash
   cp frontend/.env.example frontend/.env.local
   cp backend/.env.example backend/.env
   ```

2. Pastikan PostgreSQL berjalan dan database sudah dibuat (sesuaikan `DATABASE_URL` di `backend/.env`).

3. Sinkronisasi skema database dengan Drizzle:
   ```bash
   cd backend
   npm run db:push
   ```

### Cara Menjalankan

#### 1. Menjalankan Frontend Saja
```bash
cd frontend
npm run dev
```
Akses di: `http://localhost:3000`

#### 2. Menjalankan Backend Saja
```bash
cd backend
npm run start:dev
```
Akses di: `http://localhost:4000`

#### 3. Menjalankan Keduanya Secara Bersamaan (dari Root)
```bash
npm run dev
```

#### 4. Membuka Drizzle Studio (Database GUI)
```bash
cd backend
npm run db:studio
```

## License

MIT
