import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { ArticleInput } from '../models/article.input.dto';

@Injectable()
export class ArticlesService {
    constructor(private prisma: PrismaService) { }


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

    async remove(id: number) {
        return this.prisma.article.delete({ where: { id } });
    }

    /*async update(id: number, data: Prisma.ArticleUpdateInput) {
        return this.prisma.article.update({ where: { id }, data });
    }

    async create(data: Prisma.ArticleCreateInput) {
        return this.prisma.article.create({ data });
    }*/

    async create(articleInput: ArticleInput) {
        return this.prisma.article.create({
            data: {
                title: articleInput.title,  // Requiere que los campos estén presentes para crear un artículo
                description: articleInput.description,
                slug: articleInput.slug,
                locale: articleInput.locale || '',
            },
        });
    }

    async update(id: number, articleInput: ArticleInput) {
        return this.prisma.article.update({
            where: { id },
            data: {
                title: articleInput.title || undefined,  // Permite actualizar sólo los campos proporcionados
                description: articleInput.description || undefined,
                slug: articleInput.slug || undefined,
                locale: articleInput.locale || undefined,
            },
        });
    }
}
