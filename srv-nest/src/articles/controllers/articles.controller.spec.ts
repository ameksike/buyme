import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from '../services/articles.service';
import { PrismaService } from '../../prisma/prisma.service';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';

const mockArticlesService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
};

describe('ArticlesController', () => {
  let app: INestApplication;
  let articlesService: ArticlesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticlesController],
      providers: [
        { provide: ArticlesService, useValue: mockArticlesService },
        PrismaService,
      ],
    }).compile();

    app = module.createNestApplication();
    await app.init();
    articlesService = module.get<ArticlesService>(ArticlesService);
  });

  it('should be defined', () => {
    expect(app).toBeDefined();
  });

  it('should create an article', async () => {
    const createArticleDto = {
      title: 'Test Article',
      locale: "",
      description: 'Test description',
      slug: 'test-article',
    };

    mockArticlesService.create.mockResolvedValue(createArticleDto);

    return request(app.getHttpServer())
      .post('/api/articles')
      .send(createArticleDto)
      .expect(201)
      .expect(createArticleDto);
  });

  it('should get all articles with pagination', async () => {
    const articles = [
      { id: 1, title: 'Article 1', description: 'Desc 1', slug: 'slug-1' },
      { id: 2, title: 'Article 2', description: 'Desc 2', slug: 'slug-2' },
    ];

    mockArticlesService.findAll.mockResolvedValue({
      data: articles,
      total: 2,
      page: 1,
      pageSize: 10,
      totalPages: 1,
    });

    return request(app.getHttpServer())
      .get('/api/articles?page=1&pageSize=10')
      .expect(200)
      .expect({
        data: articles,
        total: 2,
        page: 1,
        pageSize: 10,
        totalPages: 1,
      });
  });

  it('should get an article by id', async () => {
    const article = { id: 1, title: 'Test Article', description: 'Test' };
    mockArticlesService.findOne.mockResolvedValue(article);

    return request(app.getHttpServer())
      .get('/api/articles/1')
      .expect(200)
      .expect(article);
  });

  it('should update an article', async () => {
    const updateData = { title: 'Updated Article' };
    const updatedArticle = { id: 1, title: 'Updated Article' };

    mockArticlesService.update.mockResolvedValue(updatedArticle);

    return request(app.getHttpServer())
      .put('/api/articles/1')
      .send(updateData)
      .expect(200)
      .expect(updatedArticle);
  });

  it('should delete an article', async () => {
    const article = { id: 1, title: 'Article to delete' };
    mockArticlesService.remove.mockResolvedValue(article);

    return request(app.getHttpServer())
      .delete('/api/articles/1')
      .expect(200)
      .expect(article);
  });

  afterAll(async () => {
    await app.close();
  });
});
