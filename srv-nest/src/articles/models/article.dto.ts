import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Article {
    @Field(() => Int)
    id: number;

    @Field()
    title: string;

    @Field()
    description: string;

    @Field()
    slug: string;

    @Field({ nullable: true })
    createdAt?: string;

    @Field({ nullable: true })
    updatedAt?: string;

    @Field({ nullable: true })
    publishedAt?: string;
}
