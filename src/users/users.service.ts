import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: { nome: string; email: string; password: string }) {
    const passwordHash = await bcrypt.hash(data.password, 10);

    return this.prisma.users.create({
      data: {
        ...data,
        password: passwordHash,
      },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.users.findUnique({ where: { email } });
  }
}
