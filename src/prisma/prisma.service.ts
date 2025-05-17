import { Global, Injectable, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';

@Global()
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleDestroy {
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
