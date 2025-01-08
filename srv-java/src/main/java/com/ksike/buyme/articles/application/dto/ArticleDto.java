package com.ksike.buyme.articles.application.dto;

import java.time.LocalDateTime;

public class ArticleDto {
    private Integer id;
    private String title;
    private String description;
    private String documentId;
    private String slug;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private LocalDateTime publishedAt;
    private Integer createdById;
    private Integer updatedById;
    private String locale;

    // Getters and Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    public String getDocumentId() {
        return this.documentId;
    }

    public void setDocumentId(String value) {
        this.documentId = value;
    }

    public String getSlug() {
        return this.slug;
    }

    public void setSlug(String value) {
        this.slug = value;
    }

    public LocalDateTime getPublishedAt() {
        return this.publishedAt;
    }

    public void setPublishedAt(LocalDateTime value) {
        this.publishedAt = value;
    }

    public Integer getCreatedById() {
        return this.createdById;
    }

    public void setCreatedById(Integer value) {
        this.createdById = value;
    }

    public Integer getUpdatedById() {
        return this.updatedById;
    }

    public void setUpdatedById(Integer value) {
        this.updatedById = value;
    }

    public String getLocale() {
        return this.locale;
    }

    public void setLocale(String value) {
        this.locale = value;
    }
}
