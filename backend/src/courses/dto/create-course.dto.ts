import { IsNotEmpty, IsString, IsOptional, IsEnum, IsInt, IsBoolean, Min } from 'class-validator';

export enum CourseLevelEnum {
  DASAR = 'DASAR',
  MENENGAH = 'MENENGAH',
  MAHIR = 'MAHIR',
  EXPERT = 'EXPERT',
}

export class CreateCourseDto {
  @IsNotEmpty({ message: 'Judul kelas wajib diisi' })
  @IsString()
  title: string;

  @IsNotEmpty({ message: 'Deskripsi wajib diisi' })
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  thumbnailUrl?: string;

  @IsOptional()
  @IsEnum(CourseLevelEnum)
  level?: CourseLevelEnum;

  @IsOptional()
  @IsInt()
  @Min(0)
  price?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  durationHours?: number;

  @IsOptional()
  @IsBoolean()
  isFree?: boolean;

  @IsOptional()
  @IsString()
  learningPathId?: string;
}
