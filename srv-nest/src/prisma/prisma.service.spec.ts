import { PrismaService } from './prisma.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('PrismaService', () => {
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService],
    }).compile();

    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(prismaService).toBeDefined();
  });

  it('should connect and disconnect successfully', async () => {
    const connectSpy = jest.spyOn(prismaService, '$connect');
    const disconnectSpy = jest.spyOn(prismaService, '$disconnect');

    // check the connection process 
    await prismaService.onModuleInit();
    expect(connectSpy).toHaveBeenCalled();

    // check the disconnection process
    await prismaService.onModuleDestroy();
    expect(disconnectSpy).toHaveBeenCalled();
  });
});
