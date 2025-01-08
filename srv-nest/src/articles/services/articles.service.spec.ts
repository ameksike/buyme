import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesService } from './articles.service';
import { PrismaService } from '../../prisma/prisma.service';

const mockPrismaService = {
  article: {
    create: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
    count: jest.fn(), 
  },
};

describe('ArticlesService', () => {
  let service: ArticlesService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ArticlesService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<ArticlesService>(ArticlesService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create an article', async () => {
    const createArticleDto = {
      title: 'Test Article',
      description: 'Test description',
      slug: 'test-article',
    };

    mockPrismaService.article.create.mockResolvedValue(createArticleDto);

    const result = await service.create(createArticleDto);
    expect(result).toEqual(createArticleDto);
    expect(mockPrismaService.article.create).toHaveBeenCalledWith({
      data: createArticleDto,
    });
  });

  it('should find all articles with pagination', async () => {
    const articles = [
      { id: 1, title: 'Article 1', description: 'Desc 1', slug: 'slug-1' },
      { id: 2, title: 'Article 2', description: 'Desc 2', slug: 'slug-2' },
    ];

    mockPrismaService.article.findMany.mockResolvedValue(articles);
    mockPrismaService.article.count.mockResolvedValue(2);

    const result = await service.findAll(1, 10);
    expect(result).toEqual({
      data: articles,
      total: 2,
      page: 1,
      pageSize: 10,
      totalPages: 1,
    });
  });

  it('should find an article by id', async () => {
    const article = { id: 1, title: 'Test Article', description: 'Test' };
    mockPrismaService.article.findUnique.mockResolvedValue(article);

    const result = await service.findOne(1);
    expect(result).toEqual(article);
  });

  it('should update an article', async () => {
    const updateData = { title: 'Updated Article' };
    const article = { id: 1, title: 'Updated Article' };

    mockPrismaService.article.update.mockResolvedValue(article);

    const result = await service.update(1, updateData);
    expect(result).toEqual(article);
  });

  it('should delete an article', async () => {
    const article = { id: 1, title: 'Article to delete' };
    mockPrismaService.article.delete.mockResolvedValue(article);

    const result = await service.remove(1);
    expect(result).toEqual(article);
  });
});
