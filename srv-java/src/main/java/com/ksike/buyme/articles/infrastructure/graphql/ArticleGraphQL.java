package com.ksike.buyme.articles.infrastructure.graphql;

import com.ksike.buyme.articles.application.dto.ArticleDto;
import com.ksike.buyme.articles.domain.model.Article;
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
    public List<ArticleDto> getAll() {
        return articleService.getAllArticles();
    }

    // Queries
    public List<Article> getAllArticles() {
        return articleService.findAll();
    }

    public Article getArticleById(Integer id) {
        return articleService.findById(id).orElse(null);
    }

    // Mutations
    public Article createArticle(Article article) {
        return articleService.save(article);
    }

    public Article updateArticle(Integer id, Article updatedArticle) {
        return articleService.findById(id).map(article -> {
            article.setDocumentId(updatedArticle.getDocumentId());
            article.setTitle(updatedArticle.getTitle());
            article.setDescription(updatedArticle.getDescription());
            article.setSlug(updatedArticle.getSlug());
            article.setCreatedAt(updatedArticle.getCreatedAt());
            article.setUpdatedAt(updatedArticle.getUpdatedAt());
            article.setPublishedAt(updatedArticle.getPublishedAt());
            article.setCreatedById(updatedArticle.getCreatedById());
            article.setUpdatedById(updatedArticle.getUpdatedById());
            article.setLocale(updatedArticle.getLocale());
            return articleService.save(article);
        }).orElse(null);
    }

    public boolean deleteArticle(Integer id) {
        if (articleService.findById(id).isPresent()) {
            articleService.deleteById(id);
            return true;
        }
        return false;
    }
}
