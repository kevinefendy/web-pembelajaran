import { Controller, Get, Param } from '@nestjs/common';
import { LearningPathsService } from './learning-paths.service';

@Controller('api/learning-paths')
export class LearningPathsController {
  constructor(private learningPathsService: LearningPathsService) {}

  @Get()
  async findAll() {
    return this.learningPathsService.findAll();
  }

  @Get(':slug')
  async findBySlug(@Param('slug') slug: string) {
    return this.learningPathsService.findBySlug(slug);
  }
}
