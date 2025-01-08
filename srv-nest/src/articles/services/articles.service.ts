import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ArticlesService {
    constructor(private prisma: PrismaService) { }

    async create(data: Prisma.ArticleCreateInput) {
        return this.prisma.article.create({ data });
    }

    async findAll(page: number = 1, pageSize: number = 10) {
        const skip = (page - 1) * pageSize;
        const take = pageSize;

        const articles = await this.prisma.article.findMany({
            skip,
            take,
        });

        const totalArticles = await this.prisma.article.count();

        return {
            data: articles,
            total: totalArticles,
            page,
            pageSize,
            totalPages: Math.ceil(totalArticles / pageSize),
        };
    }

    async findOne(id: number) {
        return this.prisma.article.findUnique({ where: { id } });
    }

    async update(id: number, data: Prisma.ArticleUpdateInput) {
        return this.prisma.article.update({ where: { id }, data });
    }

    async remove(id: number) {
        return this.prisma.article.delete({ where: { id } });
    }
}
