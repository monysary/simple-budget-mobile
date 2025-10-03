import type { Config } from 'drizzle-kit';

export default {
  schema: './db/sqlite/schema.ts',
  out: './drizzle',
  dialect: 'sqlite',
  driver: 'expo',
} satisfies Config;