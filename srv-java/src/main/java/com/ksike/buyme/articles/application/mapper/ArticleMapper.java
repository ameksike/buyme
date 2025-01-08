package com.ksike.buyme.articles.application.mapper;

import com.ksike.buyme.articles.application.dto.ArticleDto;
import com.ksike.buyme.articles.domain.model.Article;

public class ArticleMapper {

    public static ArticleDto toDto(Article article) {
        ArticleDto dto = new ArticleDto();
        dto.setId(article.getId());
        dto.setTitle(article.getTitle());
        dto.setDescription(article.getDescription());
        return dto;
    }

    public static Article toEntity(ArticleDto dto) {
        Article article = new Article();
        article.setTitle(dto.getTitle());
        article.setDescription(dto.getDescription());
        return article;
    }
}
