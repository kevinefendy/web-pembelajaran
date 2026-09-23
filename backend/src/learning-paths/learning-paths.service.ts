import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { eq, asc } from 'drizzle-orm';
import { DRIZZLE, DrizzleDB } from '../drizzle/drizzle.provider';
import { learningPaths, courses } from '../drizzle/schema';

@Injectable()
export class LearningPathsService {
  constructor(@Inject(DRIZZLE) private db: DrizzleDB) {}

  async findAll() {
    return this.db.query.learningPaths.findMany({
      where: eq(learningPaths.isPublished, true),
      with: {
        courses: {
          where: eq(courses.isPublished, true),
          columns: {
            id: true,
            title: true,
            slug: true,
            level: true,
            durationHours: true,
            isFree: true,
            studentCount: true,
          },
          orderBy: [asc(courses.orderInPath)],
        },
      },
      orderBy: [asc(learningPaths.createdAt)],
    });
  }

  async findBySlug(slug: string) {
    const path = await this.db.query.learningPaths.findFirst({
      where: eq(learningPaths.slug, slug),
      with: {
        courses: {
          where: eq(courses.isPublished, true),
          with: {
            instructor: {
              columns: { id: true, name: true, avatarUrl: true },
            },
            modules: {
              columns: { id: true },
            },
            enrollments: {
              columns: { id: true },
            },
          },
          orderBy: [asc(courses.orderInPath)],
        },
      },
    });

    if (!path) {
      throw new NotFoundException('Learning path tidak ditemukan');
    }

    return path;
  }
}
