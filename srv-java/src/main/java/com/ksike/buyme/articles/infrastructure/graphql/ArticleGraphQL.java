package com.ksike.buyme.articles.infrastructure.graphql;

import com.ksike.buyme.articles.application.dto.ArticleDto;
import com.ksike.buyme.articles.domain.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class ArticleGraphQL {

    @Autowired
    private ArticleService articleService;

    @QueryMapping
    public List<ArticleDto> getAllArticles() {
        return articleService.getAllArticles();
    }
}
