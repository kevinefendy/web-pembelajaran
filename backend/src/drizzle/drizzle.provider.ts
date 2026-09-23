import { ConfigService } from '@nestjs/config';
import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

export const DRIZZLE = 'DRIZZLE';

export type DrizzleDB = PostgresJsDatabase<typeof schema>;

export const drizzleProvider = {
  provide: DRIZZLE,
  inject: [ConfigService],
  useFactory: (configService: ConfigService): DrizzleDB => {
    const connectionString =
      configService.get<string>('DATABASE_URL') ||
      'postgresql://postgres:password@localhost:5432/learnpath?schema=public';

    const client = postgres(connectionString);
    return drizzle(client, { schema });
  },
};
