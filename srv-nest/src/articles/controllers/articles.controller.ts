import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put, UseGuards, SetMetadata } from '@nestjs/common';
import { ArticlesService } from '../services/articles.service';
import { ArticleInput } from '../models/article.input.dto';
import { AuthGuard } from '../../common/auth/auth.guard';

@Controller('api/articles')
export class ArticlesController {
    constructor(private readonly articlesService: ArticlesService) { }

    @SetMetadata('roles', ['admin'])
    @UseGuards(AuthGuard)
    @Post()
    create(@Body() createArticleDto: ArticleInput) {
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

    @Put(':id')
    update(@Param('id') id: string, @Body() updateArticleDto: ArticleInput) {
        return this.articlesService.update(+id, updateArticleDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.articlesService.remove(+id);
    }
}
