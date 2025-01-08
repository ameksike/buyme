package com.ksike.buyme.articles.application.controller;

import com.ksike.buyme.articles.application.dto.ArticleDto;
import com.ksike.buyme.articles.domain.model.Article;
import com.ksike.buyme.articles.domain.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class ArticleGraphQL {

    @Autowired
    private ArticleService articleService;

    // Queries
    @QueryMapping
    public List<ArticleDto> getAll() {
        return articleService.getAllArticles();
    }

    public List<Article> getAllArticles() {
        return articleService.findAll();
    }

    public Article getArticleById(Integer id) {
        return articleService.findById(id).orElse(null);
    }

    /*
     * @QueryMapping
     * public Iterable<Article> allArticles() {
     * return articleService.getAllArticles();
     * }
     * 
     * @QueryMapping
     * public Article article(Integer id) {
     * return articleService.getArticleById(id);
     * }
     */

    // Mutations
    @MutationMapping("createArticle")
    public Article createArticle(Article article) {
        System.out.println("<<<<< createArticle Article: " + article.toString());
        return articleService.findById(1).orElse(null);
        // return articleService.save(article);
    }

    @MutationMapping
    public Article create(@Argument String title, @Argument String description) {
        Article item = new Article(title, description);
        return articleService.save(item);
    }

    @MutationMapping
    public Article createItem(@Argument ArticleDto input) {
        if (input == null) {
            return null;
        }
        return articleService.save(new Article(
                input.getTitle(),
                input.getDescription()));
    }

    @MutationMapping
    public Article updateArticle(@Argument Integer id, @Argument ArticleDto input) {
        return articleService.findById(id).map(article -> {
            article.setDocumentId(input.getDocumentId());
            article.setTitle(input.getTitle());
            article.setDescription(input.getDescription());
            article.setSlug(input.getSlug());
            article.setCreatedAt(input.getCreatedAt());
            article.setUpdatedAt(input.getUpdatedAt());
            article.setPublishedAt(input.getPublishedAt());
            article.setCreatedById(input.getCreatedById());
            article.setUpdatedById(input.getUpdatedById());
            article.setLocale(input.getLocale());
            return articleService.save(article);
        }).orElse(null);
    }

    @MutationMapping
    public Article deleteArticle(@Argument Integer id) {
        if (id == null) {
            return null;
        }
        var item = articleService.findById(id);
        if (item.isPresent()) {
            articleService.deleteById(id);
            return item.get();
        }
        return null;
    }
}
