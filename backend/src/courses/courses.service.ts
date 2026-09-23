import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { eq, and, or, ilike, desc, count, sql } from 'drizzle-orm';
import { DRIZZLE, DrizzleDB } from '../drizzle/drizzle.provider';
import {
  courses,
  users,
  modules,
  enrollments,
  learningPaths,
  CourseLevel,
} from '../drizzle/schema';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CoursesService {
  constructor(@Inject(DRIZZLE) private db: DrizzleDB) {}

  async findAll(query: {
    page?: number;
    limit?: number;
    level?: string;
    isFree?: boolean;
    search?: string;
    sortBy?: string;
  }) {
    const page = query.page || 1;
    const limit = query.limit || 12;
    const offset = (page - 1) * limit;

    const conditions = [eq(courses.isPublished, true)];

    if (query.level) {
      conditions.push(eq(courses.level, query.level as CourseLevel));
    }

    if (query.isFree !== undefined) {
      conditions.push(eq(courses.isFree, query.isFree));
    }

    if (query.search) {
      const searchPattern = `%${query.search}%`;
      conditions.push(
        or(
          ilike(courses.title, searchPattern),
          ilike(courses.description, searchPattern)
        )!
      );
    }

    const whereClause = and(...conditions);

    let orderByClause = desc(courses.createdAt);
    if (query.sortBy === 'popular') orderByClause = desc(courses.studentCount);
    if (query.sortBy === 'rating') orderByClause = desc(courses.avgRating);

    const [courseList, totalResult] = await Promise.all([
      this.db.query.courses.findMany({
        where: whereClause,
        with: {
          instructor: {
            columns: { id: true, name: true, avatarUrl: true },
          },
          modules: {
            columns: { id: true },
          },
        },
        orderBy: orderByClause,
        offset,
        limit,
      }),
      this.db
        .select({ value: count() })
        .from(courses)
        .where(whereClause),
    ]);

    const total = Number(totalResult[0]?.value || 0);

    return {
      data: courseList,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findBySlug(slug: string) {
    const course = await this.db.query.courses.findFirst({
      where: eq(courses.slug, slug),
      with: {
        instructor: {
          columns: { id: true, name: true, avatarUrl: true, bio: true },
        },
        modules: {
          columns: {
            id: true,
            title: true,
            type: true,
            order: true,
            estimatedMinutes: true,
          },
          orderBy: (mod, { asc }) => [asc(mod.order)],
        },
        learningPath: {
          columns: { id: true, title: true, slug: true },
        },
        enrollments: {
          columns: { id: true },
        },
        submissions: {
          columns: { id: true },
        },
      },
    });

    if (!course) {
      throw new NotFoundException('Kelas tidak ditemukan');
    }

    return course;
  }

  async create(dto: CreateCourseDto, instructorId: string) {
    const slug = dto.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const [created] = await this.db
      .insert(courses)
      .values({
        ...dto,
        slug,
        instructorId,
        level: (dto.level as CourseLevel) || 'DASAR',
        isFree: dto.price ? dto.price === 0 : true,
      })
      .returning();

    return created;
  }

  async enroll(courseId: string, userId: string) {
    const course = await this.db.query.courses.findFirst({
      where: eq(courses.id, courseId),
    });

    if (!course) {
      throw new NotFoundException('Kelas tidak ditemukan');
    }

    const [enrollment] = await this.db
      .insert(enrollments)
      .values({
        userId,
        courseId,
      })
      .returning();

    await this.db
      .update(courses)
      .set({ studentCount: sql`${courses.studentCount} + 1` })
      .where(eq(courses.id, courseId));

    return enrollment;
  }

  async getEnrolledCourses(userId: string) {
    return this.db.query.enrollments.findMany({
      where: eq(enrollments.userId, userId),
      with: {
        course: {
          with: {
            instructor: {
              columns: { id: true, name: true, avatarUrl: true },
            },
            modules: {
              columns: { id: true },
            },
          },
        },
      },
      orderBy: desc(enrollments.enrolledAt),
    });
  }
}
