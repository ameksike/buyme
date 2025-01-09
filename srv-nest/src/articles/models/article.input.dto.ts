import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsOptional } from 'class-validator';

@InputType()
export class ArticleInput {
    @Field({ nullable: true })
    @IsOptional()
    @IsString()
    title?: string;

    @Field({ nullable: true })
    @IsOptional()
    @IsString()
    description?: string;

    @Field({ nullable: true })
    @IsString()
    slug?: string;

    @Field({ nullable: true })
    @IsOptional()
    @IsString()
    locale?: string;
}
