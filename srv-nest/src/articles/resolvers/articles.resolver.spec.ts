import { Test, TestingModule } from '@nestjs/testing';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaService } from '../../prisma/prisma.service';
import { ArticlesService } from '../services/articles.service';
import { ArticlesResolver } from './articles.resolver';
import { Article } from '../models/article.dto';
import { PrismaClient } from '@prisma/client';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';  // Para realizar las consultas GraphQL
import { ApolloDriver } from '@nestjs/apollo';

describe('ArticlesResolver (e2e)', () => {
    let app: INestApplication;
    let prismaService: PrismaService;

    beforeAll(async () => {
        // Configurar el entorno de pruebas
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [
                GraphQLModule.forRoot({
                    driver: ApolloDriver,
                    autoSchemaFile: true,  // Usamos auto generación del esquema
                    playground: true,      // Habilitamos Playground para pruebas interactivas
                }),
            ],
            providers: [ArticlesService, ArticlesResolver, PrismaService],
        }).compile();

        app = moduleFixture.createNestApplication();
        prismaService = app.get(PrismaService);  // Obtenemos la instancia de PrismaService
        await app.init();
    });

    afterAll(async () => {
        // Limpiar la base de datos si es necesario
        await prismaService.article.deleteMany();  // Usamos PrismaService para acceder a los modelos
        await app.close();
    });

    it('should return a list of articles', async () => {
        // Insertar algunos artículos de prueba en la base de datos
        await prismaService.article.create({
            data: {
                title: 'Article 1',
                description: 'Description of article 1',
                slug: 'article-1',
                locale: 'en',
            },
        });
        await prismaService.article.create({
            data: {
                title: 'Article 2',
                description: 'Description of article 2',
                slug: 'article-2',
                locale: 'en',
            },
        });

        const query = `
            query {
                getArticles(page: 1, pageSize: 5) {
                    id
                    title
                    description
                    slug
                }
            }
        `;

        // Ejecutar la consulta GraphQL y verificar la respuesta
        const response = await request(app.getHttpServer())
            .post('/graphql')
            .send({ query })
            .expect(200);  // Se espera que la respuesta sea correcta (200 OK)

        // Verificar que la respuesta contenga los artículos creados
        expect(response.body.data.getArticles.length >= 2).toBe(true);
        expect(response.body.data.getArticles[0]).toHaveProperty('id');
        expect(response.body.data.getArticles[0]).toHaveProperty('title', 'Article 1');
        expect(response.body.data.getArticles[1]).toHaveProperty('title', 'Article 2');
    });
});
