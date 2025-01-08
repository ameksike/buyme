package com.ksike.buyme.articles.domain.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "articles")
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "document_id", length = 255)
    private String documentId;

    @Column(name = "title", length = 255)
    private String title;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "slug", length = 255)
    private String slug;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Column(name = "published_at")
    private LocalDateTime publishedAt;

    @Column(name = "created_by_id")
    private Integer createdById;

    @Column(name = "updated_by_id")
    private Integer updatedById;

    @Column(name = "locale", length = 255)
    private String locale;

    public Article() {
    }

    public Article(String title, String description) {
        this.title = title;
        this.description = description;
    }

    // Getters y Setters
    @PrePersist
    public void onCreate() {
        this.createdAt = LocalDateTime.now();
    }

    @PreUpdate
    public void onUpdate() {
        this.updatedAt = LocalDateTime.now();
    }

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

    /*
     * @Override
     * public String toString() {
     * return "Article {" +
     * "id=" + id +
     * ", title='" + title + '\'' +
     * ", description=" + description +
     * '}';
     * }
     */
}
