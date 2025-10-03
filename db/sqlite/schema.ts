import * as Crypto from 'expo-crypto';
import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

const base_table = {
  id: text('id', {length: 36}).primaryKey().$default(() => Crypto.randomUUID()),
  created_at: integer('created_at', { mode: 'timestamp'}).notNull().default(sql`CURRENT_TIMESTAMP`),
  updated_at: integer('created_at', { mode: 'timestamp'}).notNull().default(sql`CURRENT_TIMESTAMP`),
  deleted_at: integer('created_at', { mode: 'timestamp'}).notNull().default(sql`CURRENT_TIMESTAMP`)
};

export const spending_tracker = sqliteTable('spending_tracker', {
  ...base_table,
  name: text('name').notNull(),
  description: text('description'),
  monthly_max_spending: real('monthly_max_spending').notNull(),
  user_profile_id: text('user_profile_id').notNull().references(() => user_profile.id)
});

export const user_profile = sqliteTable('user_profile', {
  ...base_table,
  first_name: text('first_name').notNull(),
  last_name: text('last_name').notNull(),
  monthly_income: real('monthly_income').notNull()
});