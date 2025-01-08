package com.ksike.buyme.articles.domain.service;

import com.ksike.buyme.articles.application.dto.ArticleDto;
import com.ksike.buyme.articles.application.mapper.ArticleMapper;
import com.ksike.buyme.articles.domain.model.Article;
import com.ksike.buyme.articles.domain.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ArticleService {

    @Autowired
    private ArticleRepository articleRepository;
    

    public List<Article> findAll() {
        return articleRepository.findAll();
    }

    public Optional<Article> findById(Integer id) {
        return articleRepository.findById(id);
    }

    public Article save(Article article) {
        return articleRepository.save(article);
    }

    public void deleteById(Integer id) {
        articleRepository.deleteById(id);
    }

    // --------------------------------------------------
    public List<ArticleDto> getAllArticles() {
        return articleRepository.findAll()
                .stream()
                .map(ArticleMapper::toDto)
                .collect(Collectors.toList());
    }

    public ArticleDto getArticleById(Integer id) {
        return articleRepository.findById(id)
                .map(ArticleMapper::toDto)
                .orElseThrow(() -> new RuntimeException("Article not found"));
    }

    public ArticleDto createArticle(ArticleDto articleDto) {
        return ArticleMapper.toDto(articleRepository.save(ArticleMapper.toEntity(articleDto)));
    }

    public ArticleDto updateArticle(Integer id, ArticleDto articleDto) {
        var article = articleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Article not found"));

        article.setTitle(articleDto.getTitle());
        article.setDescription(articleDto.getDescription());

        return ArticleMapper.toDto(articleRepository.save(article));
    }

    public void deleteArticle(Integer id) {
        articleRepository.deleteById(id);
    }

}
