import { PrismaClient } from '@prisma/client';

export class PrismaTestTransaction {
  constructor(private readonly prisma: PrismaClient) {}

  async start() {
    await this.prisma.$executeRawUnsafe('BEGIN');
  }

  async rollback() {
    await this.prisma.$executeRawUnsafe('ROLLBACK');
  }

  getClient() {
    return this.prisma;
  }
}
