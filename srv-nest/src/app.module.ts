import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo'; 

@Module({
  imports: [
    PrismaModule,
    ArticlesModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',  // This generates the schema file automatically
      playground: true,  // Enable GraphQL Playground in development
      debug: true,       // Display GraphQL errors in the console
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
