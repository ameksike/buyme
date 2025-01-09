import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ArticlesService } from '../services/articles.service';
import { Prisma } from '@prisma/client';
import { Article } from '../models/article.dto';
import { ArticleInput } from '../models/article.input.dto';

@Resolver(() => Article)
export class ArticlesResolver {
    constructor(private readonly articlesService: ArticlesService) { }

    // Check for all items
    @Query(() => [Article])
    async getArticles(
        @Args('page', { type: () => Number, nullable: true, defaultValue: 1 }) page: number,
        @Args('pageSize', { type: () => Number, nullable: true, defaultValue: 10 }) pageSize: number
    ) {
        let res = await this.articlesService.findAll(page, pageSize);
        return res.data;
    }

    // Query to obtain an item by its id
    @Query(() => Article)
    async getArticle(@Args('id', { type: () => Number }) id: number) {
        return this.articlesService.findOne(id);
    }

    // Mutation to create an article
    @Mutation(() => Article)
    async createArticle(
        @Args('createArticleInput') createArticleInput: ArticleInput
    ) {
        return this.articlesService.create(createArticleInput);
    }

    // Mutation to update an article
    @Mutation(() => Article)
    async updateArticle(
        @Args('id') id: number,
        @Args('updateArticleInput') updateArticleInput: ArticleInput
    ) {
        return this.articlesService.update(id, updateArticleInput);
    }

    // Mutation to remove an article
    @Mutation(() => Article)
    async removeArticle(@Args('id', { type: () => Number }) id: number) {
        return this.articlesService.remove(id);
    }
}
