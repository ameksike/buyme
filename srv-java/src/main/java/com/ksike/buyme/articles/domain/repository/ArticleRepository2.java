package com.ksike.buyme.articles.domain.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ksike.buyme.articles.domain.model.Article;

@Repository
public interface ArticleRepository2 extends JpaRepository<Article, Long> {
    List<Article> findByTitleContaining(String title);
    
    @Query("SELECT a FROM Article a WHERE a.slug = :slug")
    Article findBySlug(@Param("slug") String slug);
}