package com.ksike.buyme.articles.infrastructure.adapter;

import com.ksike.buyme.articles.domain.model.Article;
import com.ksike.buyme.articles.domain.repository.ArticleRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JpaArticleRepository extends JpaRepository<Article, Integer>, ArticleRepository {
}
