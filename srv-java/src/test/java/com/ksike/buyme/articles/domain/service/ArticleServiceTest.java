package com.ksike.buyme.articles.domain.service;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.ksike.buyme.articles.domain.model.Article;
import com.ksike.buyme.articles.domain.repository.ArticleRepository;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;

public class ArticleServiceTest {

    @InjectMocks
    private ArticleService articleService;

    @Mock
    private ArticleRepository articleRepository;

    private Article article;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        article = new Article();
        article.setId(1);
        article.setTitle("Test Title");
    }

    @Test
    void findById() {
        when(articleRepository.findById(1)).thenReturn(Optional.of(article));

        Optional<Article> result = articleService.findById(1);

        assertTrue(result.isPresent());
        assertEquals("Test Title", result.get().getTitle());
        verify(articleRepository, times(1)).findById(1);
    }

    @Test
    void save() {
        when(articleRepository.save(article)).thenReturn(article);

        Article result = articleService.save(article);

        assertNotNull(result);
        assertEquals("Test Title", result.getTitle());
        verify(articleRepository, times(1)).save(article);
    }
}
