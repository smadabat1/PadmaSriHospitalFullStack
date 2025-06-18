import { DATABASE_CONNECTION } from '@/db/database-connection';
import { Inject, Injectable } from '@nestjs/common';
import * as schema from "./schema";
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

@Injectable()
export class UsersService {
    constructor(
        @Inject(DATABASE_CONNECTION)
        private readonly database: NodePgDatabase<typeof schema>
    ) { }

    async getUsers() {
        return this.database.query.users.findMany();
    }

    async createUser(user: typeof schema.users.$inferInsert) {
        return this.database.insert(schema.users).values(user);
    }
}
