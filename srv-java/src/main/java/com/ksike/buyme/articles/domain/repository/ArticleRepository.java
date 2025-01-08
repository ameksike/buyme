package com.ksike.buyme.articles.domain.repository;

import com.ksike.buyme.articles.domain.model.Article;

import java.util.List;
import java.util.Optional;

public interface ArticleRepository {
    List<Article> findAll();
    Optional<Article> findById(Integer id);
    Article save(Article article);
    void deleteById(Integer id);
}
