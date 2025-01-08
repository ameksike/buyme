package com.ksike.buyme.articles.application.dto;

public record ArticleInput(
        String title,
        String description) {
}

/*
 * @MutationMapping
 * public Article createItem(@Argument ArticleInput input) {
 * if (input == null) {
 * return null;
 * }
 * return articleService.save(new Article(
 * input.title(),
 * input.description()));
 * }
 */