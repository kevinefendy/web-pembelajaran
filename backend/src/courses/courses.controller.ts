import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  UseGuards,
  Request,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard, Roles } from '../auth/guards/roles.guard';

@Controller('api/courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @Get()
  async findAll(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('level') level?: string,
    @Query('isFree') isFree?: string,
    @Query('search') search?: string,
    @Query('sortBy') sortBy?: string,
  ) {
    return this.coursesService.findAll({
      page: page ? Number(page) : undefined,
      limit: limit ? Number(limit) : undefined,
      level,
      isFree: isFree !== undefined ? isFree === 'true' : undefined,
      search,
      sortBy,
    });
  }

  @Get(':slug')
  async findBySlug(@Param('slug') slug: string) {
    return this.coursesService.findBySlug(slug);
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('INSTRUCTOR', 'ADMIN', 'SUPER_ADMIN')
  async create(@Body() dto: CreateCourseDto, @Request() req: any) {
    return this.coursesService.create(dto, req.user.id);
  }

  @Post(':id/enroll')
  @UseGuards(JwtAuthGuard)
  async enroll(@Param('id') id: string, @Request() req: any) {
    return this.coursesService.enroll(id, req.user.id);
  }

  @Get('enrolled/me')
  @UseGuards(JwtAuthGuard)
  async getEnrolledCourses(@Request() req: any) {
    return this.coursesService.getEnrolledCourses(req.user.id);
  }
}
