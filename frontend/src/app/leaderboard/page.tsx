"use client";

import { useState } from "react";
import {
  Trophy,
  Medal,
  Flame,
  Award,
  BookOpen,
  Sparkles,
  Zap,
  CheckCircle2,
  TrendingUp,
  Crown,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface LeaderboardUser {
  rank: number;
  name: string;
  avatarUrl?: string;
  level: string;
  xpPoints: number;
  coursesCompleted: number;
  streakDays: number;
}

const topLearners: LeaderboardUser[] = [
  {
    rank: 1,
    name: "Ahmad Rizki",
    level: "Grandmaster",
    xpPoints: 14850,
    coursesCompleted: 14,
    streakDays: 45,
  },
  {
    rank: 2,
    name: "Nadia Putri",
    level: "Master",
    xpPoints: 13200,
    coursesCompleted: 12,
    streakDays: 38,
  },
  {
    rank: 3,
    name: "Bagas Pratama",
    level: "Master",
    xpPoints: 11950,
    coursesCompleted: 11,
    streakDays: 29,
  },
  {
    rank: 4,
    name: "Dewi Anggraini",
    level: "Expert",
    xpPoints: 9800,
    coursesCompleted: 9,
    streakDays: 21,
  },
  {
    rank: 5,
    name: "Rian Kurniawan",
    level: "Expert",
    xpPoints: 8950,
    coursesCompleted: 8,
    streakDays: 17,
  },
  {
    rank: 6,
    name: "Salsa Bella",
    level: "Mahir",
    xpPoints: 7600,
    coursesCompleted: 7,
    streakDays: 14,
  },
  {
    rank: 7,
    name: "Fandi Ahmad",
    level: "Mahir",
    xpPoints: 6850,
    coursesCompleted: 6,
    streakDays: 12,
  },
  {
    rank: 8,
    name: "Citra Kirana",
    level: "Menengah",
    xpPoints: 5400,
    coursesCompleted: 5,
    streakDays: 9,
  },
  {
    rank: 9,
    name: "Ilham Ramadhan",
    level: "Menengah",
    xpPoints: 4900,
    coursesCompleted: 4,
    streakDays: 8,
  },
  {
    rank: 10,
    name: "Putri Rahayu",
    level: "Menengah",
    xpPoints: 4250,
    coursesCompleted: 4,
    streakDays: 6,
  },
];

const filterPeriods = ["Bulan Ini", "Sepanjang Masa", "Minggu Ini"];

export default function LeaderboardPage() {
  const [activePeriod, setActivePeriod] = useState("Bulan Ini");

  const topThree = topLearners.slice(0, 3);
  const remaining = topLearners.slice(3);

  const getRankBadge = (rank: number) => {
    switch (rank) {
      case 1:
        return (
          <div className="w-8 h-8 rounded-full bg-amber-500/15 text-amber-600 flex items-center justify-center font-bold text-sm border border-amber-500/30">
            <Crown className="h-4 w-4" />
          </div>
        );
      case 2:
        return (
          <div className="w-8 h-8 rounded-full bg-slate-300/30 text-slate-600 dark:text-slate-300 flex items-center justify-center font-bold text-sm border border-slate-300">
            <Medal className="h-4 w-4" />
          </div>
        );
      case 3:
        return (
          <div className="w-8 h-8 rounded-full bg-amber-700/15 text-amber-700 dark:text-amber-500 flex items-center justify-center font-bold text-sm border border-amber-700/30">
            <Award className="h-4 w-4" />
          </div>
        );
      default:
        return (
          <span className="w-8 text-center text-sm font-semibold text-muted-foreground">
            {rank}
          </span>
        );
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Leaderboard Siswa
        </h1>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          Kumpulkan Experience Points (XP) dengan menyelesaikan modul, lulus kuis coding, dan submit proyek portofolio.
        </p>
      </div>

      {/* Period Filter Tabs */}
      <div className="flex items-center gap-2 mb-10 border-b pb-4">
        {filterPeriods.map((period) => (
          <button
            key={period}
            onClick={() => setActivePeriod(period)}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              activePeriod === period
                ? "bg-primary text-primary-foreground shadow-xs"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {period}
          </button>
        ))}
      </div>

      {/* Top 3 Podium Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Rank 2 */}
        <Card className="border flex flex-col justify-between order-2 md:order-1 text-center bg-card">
          <CardHeader className="pb-2">
            <div className="mx-auto w-14 h-14 rounded-full bg-slate-200/60 dark:bg-slate-800 flex items-center justify-center mb-2 border border-slate-300">
              <Medal className="h-7 w-7 text-slate-600 dark:text-slate-300" />
            </div>
            <Badge variant="outline" className="mx-auto text-[11px] mb-2">Juara 2</Badge>
            <CardTitle className="text-lg">{topThree[1].name}</CardTitle>
            <CardDescription className="text-xs">{topThree[1].level}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 pt-2">
            <div className="p-3 rounded-xl bg-muted/40 border">
              <p className="text-xl font-black text-primary">{topThree[1].xpPoints.toLocaleString("id-ID")} XP</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">{topThree[1].coursesCompleted} Kelas Diselesaikan</p>
            </div>
            <div className="flex items-center justify-center gap-1 text-xs text-orange-600 font-medium">
              <Flame className="h-3.5 w-3.5" />
              <span>{topThree[1].streakDays} Hari Streak</span>
            </div>
          </CardContent>
        </Card>

        {/* Rank 1 (Champion) */}
        <Card className="border-2 border-amber-500/50 shadow-md flex flex-col justify-between order-1 md:order-2 text-center bg-amber-500/5 relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <Badge className="bg-amber-500 text-black font-bold uppercase tracking-wider text-[10px]">
              Peringkat 1
            </Badge>
          </div>
          <CardHeader className="pb-2 pt-6">
            <div className="mx-auto w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mb-2 border-2 border-amber-500/40">
              <Crown className="h-8 w-8 text-amber-500" />
            </div>
            <CardTitle className="text-xl font-bold">{topThree[0].name}</CardTitle>
            <CardDescription className="text-xs font-semibold text-primary">{topThree[0].level}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 pt-2">
            <div className="p-3.5 rounded-xl bg-background border shadow-xs">
              <p className="text-2xl font-black text-amber-600 dark:text-amber-400">
                {topThree[0].xpPoints.toLocaleString("id-ID")} XP
              </p>
              <p className="text-[11px] text-muted-foreground mt-0.5">{topThree[0].coursesCompleted} Kelas Diselesaikan</p>
            </div>
            <div className="flex items-center justify-center gap-1 text-xs text-orange-600 font-bold">
              <Flame className="h-4 w-4" />
              <span>{topThree[0].streakDays} Hari Belajar Beruntun</span>
            </div>
          </CardContent>
        </Card>

        {/* Rank 3 */}
        <Card className="border flex flex-col justify-between order-3 text-center bg-card">
          <CardHeader className="pb-2">
            <div className="mx-auto w-14 h-14 rounded-full bg-amber-700/10 flex items-center justify-center mb-2 border border-amber-700/30">
              <Award className="h-7 w-7 text-amber-700 dark:text-amber-500" />
            </div>
            <Badge variant="outline" className="mx-auto text-[11px] mb-2">Juara 3</Badge>
            <CardTitle className="text-lg">{topThree[2].name}</CardTitle>
            <CardDescription className="text-xs">{topThree[2].level}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 pt-2">
            <div className="p-3 rounded-xl bg-muted/40 border">
              <p className="text-xl font-black text-primary">{topThree[2].xpPoints.toLocaleString("id-ID")} XP</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">{topThree[2].coursesCompleted} Kelas Diselesaikan</p>
            </div>
            <div className="flex items-center justify-center gap-1 text-xs text-orange-600 font-medium">
              <Flame className="h-3.5 w-3.5" />
              <span>{topThree[2].streakDays} Hari Streak</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Leaderboard Table & XP Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Table List (Ranks 4-10) */}
        <div className="lg:col-span-2">
          <Card className="border overflow-hidden">
            <CardHeader className="pb-3 border-b bg-muted/30">
              <CardTitle className="text-base font-bold">Peringkat 4 - 10</CardTitle>
            </CardHeader>
            <div className="divide-y">
              {remaining.map((user) => (
                <div
                  key={user.rank}
                  className="p-4 flex items-center justify-between hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    {getRankBadge(user.rank)}
                    <Avatar className="h-9 w-9">
                      <AvatarFallback className="text-xs bg-primary/10 text-primary font-bold">
                        {user.name.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-sm font-semibold leading-tight">{user.name}</h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[11px] text-muted-foreground">{user.level}</span>
                        <span className="text-muted-foreground text-[10px]">•</span>
                        <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                          <BookOpen className="h-3 w-3" />
                          {user.coursesCompleted} Kelas
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-bold text-foreground">
                      {user.xpPoints.toLocaleString("id-ID")} XP
                    </p>
                    <div className="flex items-center justify-end gap-1 text-[11px] text-orange-600">
                      <Flame className="h-3 w-3" />
                      <span>{user.streakDays} hari</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Gamification Info Card */}
        <div className="space-y-6">
          <Card className="border">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <CardTitle className="text-base">Cara Mendapatkan XP</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3.5 text-xs text-muted-foreground">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-muted/40 border">
                <span>Selesaikan 1 Modul Belajar</span>
                <span className="font-bold text-primary">+20 XP</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-muted/40 border">
                <span>Lulus Ujian Kuis Modul</span>
                <span className="font-bold text-primary">+50 XP</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-muted/40 border">
                <span>Submission Project Diterima</span>
                <span className="font-bold text-emerald-600">+200 XP</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-muted/40 border">
                <span>Menjawab Solutif di Forum</span>
                <span className="font-bold text-primary">+15 XP</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-muted/40 border">
                <span>Streak Belajar 7 Hari Berturut</span>
                <span className="font-bold text-amber-600">+100 XP</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
