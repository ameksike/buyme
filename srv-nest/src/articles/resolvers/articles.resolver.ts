import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ArticlesService } from '../services/articles.service';
import { Prisma } from '@prisma/client';
import { Article } from '../models/article.dto';
import { ArticleInput } from '../models/article.input.dto';

@Resolver(() => Article)
export class ArticlesResolver {
    constructor(private readonly articlesService: ArticlesService) { }

    // Consulta para obtener todos los artículos
    @Query(() => [Article])
    async getArticles(
        @Args('page', { type: () => Number, nullable: true, defaultValue: 1 }) page: number,
        @Args('pageSize', { type: () => Number, nullable: true, defaultValue: 10 }) pageSize: number
    ) {
        return this.articlesService.findAll(page, pageSize);
    }

    // Consulta para obtener un artículo por su id
    @Query(() => Article)
    async getArticle(@Args('id', { type: () => Number }) id: number) {
        return this.articlesService.findOne(id);
    }

    // Mutación para crear un artículo
    @Mutation(() => Article)
    async createArticle(
        @Args('createArticleInput') createArticleInput: ArticleInput
    ) {
        return this.articlesService.create(createArticleInput);
    }

    // Mutación para actualizar un artículo
    @Mutation(() => Article)
    async updateArticle(
        @Args('id') id: number,
        @Args('updateArticleInput') updateArticleInput: ArticleInput
    ) {
        return this.articlesService.update(id, updateArticleInput);
    }

    // Mutación para eliminar un artículo
    @Mutation(() => Article)
    async removeArticle(@Args('id', { type: () => Number }) id: number) {
        return this.articlesService.remove(id);
    }
}
