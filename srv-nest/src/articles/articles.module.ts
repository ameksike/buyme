import { Module } from '@nestjs/common';
import { ArticlesController } from './controllers/articles.controller';
import { ArticlesService } from './services/articles.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService, PrismaService]
})
export class ArticlesModule { }
