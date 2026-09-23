import {
  pgTable,
  pgEnum,
  uuid,
  text,
  integer,
  boolean,
  timestamp,
  real,
  jsonb,
  uniqueIndex,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// ============ ENUMS ============

export const userRoleEnum = pgEnum('user_role', [
  'STUDENT',
  'REVIEWER',
  'INSTRUCTOR',
  'ADMIN',
  'SUPER_ADMIN',
]);

export const courseLevelEnum = pgEnum('course_level', [
  'DASAR',
  'MENENGAH',
  'MAHIR',
  'EXPERT',
]);

export const moduleTypeEnum = pgEnum('module_type', [
  'TEXT',
  'VIDEO',
  'CODE_LAB',
  'QUIZ',
  'SUBMISSION',
]);

export const enrollmentStatusEnum = pgEnum('enrollment_status', [
  'ACTIVE',
  'COMPLETED',
  'DROPPED',
]);

export const submissionStatusEnum = pgEnum('submission_status', [
  'DRAFT',
  'SUBMITTED',
  'IN_REVIEW',
  'ACCEPTED',
  'REJECTED',
]);

export const reviewResultEnum = pgEnum('review_result', [
  'ACCEPTED',
  'REJECTED',
]);

export const paymentStatusEnum = pgEnum('payment_status', [
  'PENDING',
  'PAID',
  'FAILED',
  'REFUNDED',
]);

export const paymentMethodEnum = pgEnum('payment_method', [
  'QRIS',
  'VA',
  'EWALLET',
  'CREDIT_CARD',
]);

// ============ TABLES ============

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  passwordHash: text('password_hash'),
  avatarUrl: text('avatar_url'),
  bio: text('bio'),
  role: userRoleEnum('role').default('STUDENT').notNull(),
  xpPoints: integer('xp_points').default(0).notNull(),
  level: text('level').default('Newbie').notNull(),
  githubUrl: text('github_url'),
  linkedinUrl: text('linkedin_url'),
  googleId: text('google_id').unique(),
  githubId: text('github_id').unique(),
  emailVerified: boolean('email_verified').default(false).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

export const learningPaths = pgTable('learning_paths', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  slug: text('slug').notNull().unique(),
  thumbnailUrl: text('thumbnail_url'),
  level: text('level').notNull(),
  isPublished: boolean('is_published').default(false).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

export const courses = pgTable('courses', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  slug: text('slug').notNull().unique(),
  thumbnailUrl: text('thumbnail_url'),
  level: courseLevelEnum('level').default('DASAR').notNull(),
  price: integer('price').default(0).notNull(),
  durationHours: integer('duration_hours').default(0).notNull(),
  avgRating: real('avg_rating').default(0).notNull(),
  studentCount: integer('student_count').default(0).notNull(),
  isFree: boolean('is_free').default(true).notNull(),
  isPublished: boolean('is_published').default(false).notNull(),
  orderInPath: integer('order_in_path'),
  learningPathId: uuid('learning_path_id').references(() => learningPaths.id),
  instructorId: uuid('instructor_id').references(() => users.id).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

export const modules = pgTable('modules', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  type: moduleTypeEnum('type').default('TEXT').notNull(),
  content: text('content'),
  order: integer('order').default(0).notNull(),
  estimatedMinutes: integer('estimated_minutes').default(10).notNull(),
  courseId: uuid('course_id').references(() => courses.id, { onDelete: 'cascade' }).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

export const quizzes = pgTable('quizzes', {
  id: uuid('id').primaryKey().defaultRandom(),
  question: text('question').notNull(),
  type: text('type').default('MULTIPLE_CHOICE').notNull(),
  options: jsonb('options').notNull(),
  correctAnswer: text('correct_answer').notNull(),
  explanation: text('explanation'),
  order: integer('order').default(0).notNull(),
  moduleId: uuid('module_id').references(() => modules.id, { onDelete: 'cascade' }).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});

export const moduleCompletions = pgTable(
  'module_completions',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    completedAt: timestamp('completed_at', { withTimezone: true }).defaultNow().notNull(),
    userId: uuid('user_id').references(() => users.id).notNull(),
    moduleId: uuid('module_id').references(() => modules.id, { onDelete: 'cascade' }).notNull(),
  },
  (table) => [
    uniqueIndex('user_module_completion_idx').on(table.userId, table.moduleId),
  ]
);

export const enrollments = pgTable(
  'enrollments',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    progressPercentage: real('progress_percentage').default(0).notNull(),
    status: enrollmentStatusEnum('status').default('ACTIVE').notNull(),
    enrolledAt: timestamp('enrolled_at', { withTimezone: true }).defaultNow().notNull(),
    completedAt: timestamp('completed_at', { withTimezone: true }),
    userId: uuid('user_id').references(() => users.id).notNull(),
    courseId: uuid('course_id').references(() => courses.id).notNull(),
  },
  (table) => [
    uniqueIndex('user_course_enrollment_idx').on(table.userId, table.courseId),
  ]
);

export const submissions = pgTable('submissions', {
  id: uuid('id').primaryKey().defaultRandom(),
  fileUrl: text('file_url'),
  githubUrl: text('github_url'),
  status: submissionStatusEnum('status').default('DRAFT').notNull(),
  attemptNumber: integer('attempt_number').default(1).notNull(),
  submittedAt: timestamp('submitted_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  courseId: uuid('course_id').references(() => courses.id).notNull(),
});

export const reviews = pgTable('reviews', {
  id: uuid('id').primaryKey().defaultRandom(),
  score: integer('score').notNull(),
  feedback: text('feedback').notNull(),
  result: reviewResultEnum('result').notNull(),
  reviewedAt: timestamp('reviewed_at', { withTimezone: true }).defaultNow().notNull(),
  submissionId: uuid('submission_id').references(() => submissions.id, { onDelete: 'cascade' }).notNull().unique(),
  reviewerId: uuid('reviewer_id').references(() => users.id).notNull(),
});

export const certificates = pgTable(
  'certificates',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    certificateCode: text('certificate_code').notNull().unique(),
    pdfUrl: text('pdf_url'),
    issuedAt: timestamp('issued_at', { withTimezone: true }).defaultNow().notNull(),
    userId: uuid('user_id').references(() => users.id).notNull(),
    courseId: uuid('course_id').references(() => courses.id).notNull(),
  },
  (table) => [
    uniqueIndex('user_course_certificate_idx').on(table.userId, table.courseId),
  ]
);

export const forumThreads = pgTable('forum_threads', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  body: text('body').notNull(),
  isSolved: boolean('is_solved').default(false).notNull(),
  upvotes: integer('upvotes').default(0).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  courseId: uuid('course_id').references(() => courses.id).notNull(),
  moduleId: uuid('module_id').references(() => modules.id),
});

export const forumReplies = pgTable('forum_replies', {
  id: uuid('id').primaryKey().defaultRandom(),
  body: text('body').notNull(),
  isPinned: boolean('is_pinned').default(false).notNull(),
  upvotes: integer('upvotes').default(0).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  threadId: uuid('thread_id').references(() => forumThreads.id, { onDelete: 'cascade' }).notNull(),
  userId: uuid('user_id').references(() => users.id).notNull(),
});

export const payments = pgTable('payments', {
  id: uuid('id').primaryKey().defaultRandom(),
  amount: integer('amount').notNull(),
  paymentMethod: paymentMethodEnum('payment_method'),
  status: paymentStatusEnum('status').default('PENDING').notNull(),
  midtransOrderId: text('midtrans_order_id').unique(),
  snapToken: text('snap_token'),
  paidAt: timestamp('paid_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  courseId: uuid('course_id').references(() => courses.id).notNull(),
});

// ============ RELATIONS ============

export const usersRelations = relations(users, ({ many }) => ({
  courses: many(courses),
  enrollments: many(enrollments),
  submissions: many(submissions),
  reviews: many(reviews),
  certificates: many(certificates),
  forumThreads: many(forumThreads),
  forumReplies: many(forumReplies),
  payments: many(payments),
}));

export const learningPathsRelations = relations(learningPaths, ({ many }) => ({
  courses: many(courses),
}));

export const coursesRelations = relations(courses, ({ one, many }) => ({
  instructor: one(users, {
    fields: [courses.instructorId],
    references: [users.id],
  }),
  learningPath: one(learningPaths, {
    fields: [courses.learningPathId],
    references: [learningPaths.id],
  }),
  modules: many(modules),
  enrollments: many(enrollments),
  submissions: many(submissions),
  certificates: many(certificates),
  forumThreads: many(forumThreads),
  payments: many(payments),
}));

export const modulesRelations = relations(modules, ({ one, many }) => ({
  course: one(courses, {
    fields: [modules.courseId],
    references: [courses.id],
  }),
  quizzes: many(quizzes),
  completions: many(moduleCompletions),
  forumThreads: many(forumThreads),
}));

export const quizzesRelations = relations(quizzes, ({ one }) => ({
  module: one(modules, {
    fields: [quizzes.moduleId],
    references: [modules.id],
  }),
}));

export const moduleCompletionsRelations = relations(moduleCompletions, ({ one }) => ({
  user: one(users, {
    fields: [moduleCompletions.userId],
    references: [users.id],
  }),
  module: one(modules, {
    fields: [moduleCompletions.moduleId],
    references: [modules.id],
  }),
}));

export const enrollmentsRelations = relations(enrollments, ({ one }) => ({
  user: one(users, {
    fields: [enrollments.userId],
    references: [users.id],
  }),
  course: one(courses, {
    fields: [enrollments.courseId],
    references: [courses.id],
  }),
}));

export const submissionsRelations = relations(submissions, ({ one }) => ({
  user: one(users, {
    fields: [submissions.userId],
    references: [users.id],
  }),
  course: one(courses, {
    fields: [submissions.courseId],
    references: [courses.id],
  }),
  review: one(reviews, {
    fields: [submissions.id],
    references: [reviews.submissionId],
  }),
}));

export const reviewsRelations = relations(reviews, ({ one }) => ({
  submission: one(submissions, {
    fields: [reviews.submissionId],
    references: [submissions.id],
  }),
  reviewer: one(users, {
    fields: [reviews.reviewerId],
    references: [users.id],
  }),
}));

export const certificatesRelations = relations(certificates, ({ one }) => ({
  user: one(users, {
    fields: [certificates.userId],
    references: [users.id],
  }),
  course: one(courses, {
    fields: [certificates.courseId],
    references: [courses.id],
  }),
}));

export const forumThreadsRelations = relations(forumThreads, ({ one, many }) => ({
  user: one(users, {
    fields: [forumThreads.userId],
    references: [users.id],
  }),
  course: one(courses, {
    fields: [forumThreads.courseId],
    references: [courses.id],
  }),
  module: one(modules, {
    fields: [forumThreads.moduleId],
    references: [modules.id],
  }),
  replies: many(forumReplies),
}));

export const forumRepliesRelations = relations(forumReplies, ({ one }) => ({
  thread: one(forumThreads, {
    fields: [forumReplies.threadId],
    references: [forumThreads.id],
  }),
  user: one(users, {
    fields: [forumReplies.userId],
    references: [users.id],
  }),
}));

export const paymentsRelations = relations(payments, ({ one }) => ({
  user: one(users, {
    fields: [payments.userId],
    references: [users.id],
  }),
  course: one(courses, {
    fields: [payments.courseId],
    references: [courses.id],
  }),
}));

// Export inferred types
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type LearningPath = typeof learningPaths.$inferSelect;
export type NewLearningPath = typeof learningPaths.$inferInsert;
export type Course = typeof courses.$inferSelect;
export type NewCourse = typeof courses.$inferInsert;
export type Module = typeof modules.$inferSelect;
export type NewModule = typeof modules.$inferInsert;
export type Quiz = typeof quizzes.$inferSelect;
export type NewQuiz = typeof quizzes.$inferInsert;
export type Enrollment = typeof enrollments.$inferSelect;
export type NewEnrollment = typeof enrollments.$inferInsert;
export type Submission = typeof submissions.$inferSelect;
export type NewSubmission = typeof submissions.$inferInsert;
export type Review = typeof reviews.$inferSelect;
export type NewReview = typeof reviews.$inferInsert;
export type Certificate = typeof certificates.$inferSelect;
export type NewCertificate = typeof certificates.$inferInsert;
export type ForumThread = typeof forumThreads.$inferSelect;
export type NewForumThread = typeof forumThreads.$inferInsert;
export type ForumReply = typeof forumReplies.$inferSelect;
export type NewForumReply = typeof forumReplies.$inferInsert;
export type Payment = typeof payments.$inferSelect;
export type NewPayment = typeof payments.$inferInsert;

export type UserRole = (typeof userRoleEnum.enumValues)[number];
export type CourseLevel = (typeof courseLevelEnum.enumValues)[number];
export type ModuleType = (typeof moduleTypeEnum.enumValues)[number];
export type EnrollmentStatus = (typeof enrollmentStatusEnum.enumValues)[number];
export type SubmissionStatus = (typeof submissionStatusEnum.enumValues)[number];
export type ReviewResult = (typeof reviewResultEnum.enumValues)[number];
export type PaymentStatus = (typeof paymentStatusEnum.enumValues)[number];
export type PaymentMethod = (typeof paymentMethodEnum.enumValues)[number];
