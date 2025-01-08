import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ArticlesService } from '../services/articles.service';
import { Prisma } from '@prisma/client';

@Controller('api/articles')
export class ArticlesController {
    constructor(private readonly articlesService: ArticlesService) { }

    @Post()
    create(@Body() createArticleDto: Prisma.ArticleCreateInput) {
        return this.articlesService.create(createArticleDto);
    }

    @Get()
    findAll(
        @Query('page') page: number = 1,
        @Query('pageSize') pageSize: number = 10
    ) {
        const pageNum = typeof page === "string" ? parseInt(page, 10) : page;
        const pageSizeNum = typeof pageSize === "string" ? parseInt(pageSize, 10) : pageSize;

        if (isNaN(pageNum) || isNaN(pageSizeNum) || pageNum <= 0 || pageSizeNum <= 0) {
            throw new Error('Invalid page or pageSize parameter');
        }

        return this.articlesService.findAll(pageNum, pageSizeNum);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.articlesService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateArticleDto: Prisma.ArticleUpdateInput) {
        return this.articlesService.update(+id, updateArticleDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.articlesService.remove(+id);
    }
}
