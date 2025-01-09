import { Module } from '@nestjs/common';
import { ArticlesController } from './controllers/articles.controller';
import { ArticlesService } from './services/articles.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ArticlesResolver } from './resolvers/articles.resolver';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService, PrismaService, ArticlesResolver]
})
export class ArticlesModule { }
