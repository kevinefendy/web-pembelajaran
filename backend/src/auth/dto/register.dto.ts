import { IsEmail, IsNotEmpty, IsString, MinLength, Matches } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty({ message: 'Nama wajib diisi' })
  @IsString()
  name: string;

  @IsEmail({}, { message: 'Format email tidak valid' })
  email: string;

  @IsNotEmpty({ message: 'Password wajib diisi' })
  @MinLength(8, { message: 'Password minimal 8 karakter' })
  @Matches(/[A-Z]/, { message: 'Password harus mengandung minimal 1 huruf besar' })
  @Matches(/[0-9]/, { message: 'Password harus mengandung minimal 1 angka' })
  password: string;
}
