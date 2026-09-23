// ============ Enums ============
export type UserRole = "STUDENT" | "REVIEWER" | "INSTRUCTOR" | "ADMIN" | "SUPER_ADMIN";
export type CourseLevel = "DASAR" | "MENENGAH" | "MAHIR" | "EXPERT";
export type ModuleType = "TEXT" | "VIDEO" | "CODE_LAB" | "QUIZ" | "SUBMISSION";
export type EnrollmentStatus = "ACTIVE" | "COMPLETED" | "DROPPED";
export type SubmissionStatus = "DRAFT" | "SUBMITTED" | "IN_REVIEW" | "ACCEPTED" | "REJECTED";
export type PaymentStatus = "PENDING" | "PAID" | "FAILED" | "REFUNDED";
export type PaymentMethod = "QRIS" | "VA" | "EWALLET" | "CREDIT_CARD";

// ============ Models ============
export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  bio?: string;
  role: UserRole;
  xpPoints: number;
  level: string;
  githubUrl?: string;
  linkedinUrl?: string;
  createdAt: string;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  slug: string;
  thumbnailUrl?: string;
  level: string;
  isPublished: boolean;
  courses: Course[];
  courseCount: number;
  estimatedMonths: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  slug: string;
  thumbnailUrl?: string;
  level: CourseLevel;
  price: number;
  durationHours: number;
  avgRating: number;
  studentCount: number;
  isFree: boolean;
  isPublished: boolean;
  instructor: User;
  modules: Module[];
  moduleCount: number;
  learningPathId?: string;
  orderInPath?: number;
}

export interface Module {
  id: string;
  courseId: string;
  title: string;
  type: ModuleType;
  content?: string;
  order: number;
  estimatedMinutes: number;
  isCompleted?: boolean;
}

export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  course: Course;
  progressPercentage: number;
  status: EnrollmentStatus;
  enrolledAt: string;
  completedAt?: string;
}

export interface Submission {
  id: string;
  userId: string;
  courseId: string;
  fileUrl?: string;
  githubUrl?: string;
  status: SubmissionStatus;
  attemptNumber: number;
  submittedAt: string;
  review?: Review;
}

export interface Review {
  id: string;
  submissionId: string;
  reviewerId: string;
  reviewer: User;
  score: number;
  feedback: string;
  result: "ACCEPTED" | "REJECTED";
  reviewedAt: string;
}

export interface Certificate {
  id: string;
  userId: string;
  courseId: string;
  course: Course;
  certificateCode: string;
  pdfUrl: string;
  issuedAt: string;
}

export interface ForumThread {
  id: string;
  userId: string;
  user: User;
  courseId: string;
  moduleId?: string;
  title: string;
  body: string;
  isSolved: boolean;
  upvotes: number;
  replyCount: number;
  createdAt: string;
}

export interface ForumReply {
  id: string;
  threadId: string;
  userId: string;
  user: User;
  body: string;
  isPinned: boolean;
  upvotes: number;
  createdAt: string;
}

export interface Payment {
  id: string;
  userId: string;
  courseId: string;
  course: Course;
  amount: number;
  paymentMethod: PaymentMethod;
  status: PaymentStatus;
  paidAt?: string;
}

// ============ API Response Types ============
export interface ApiResponse<T> {
  data: T;
  message: string;
  statusCode: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}
