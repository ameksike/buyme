package com.ksike.buyme.articles.application.controller;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.ksike.buyme.articles.application.dto.ArticleDto;
import com.ksike.buyme.articles.domain.service.ArticleService;

@WebMvcTest(ArticleRest.class)
public class ArticleRestTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ArticleService articleService;

    @DisplayName("getTotalElements Returns Correct Total Elements")
    @Test
    public void getTotalElements() throws Exception {
        // Configuración de datos simulados
        ArticleDto article1 = new ArticleDto("Title1", "Title1Des");
        ArticleDto article2 = new ArticleDto("Title2", "Title2Des");
        List<ArticleDto> mockArticles = Arrays.asList(article1, article2);

        // Comportamiento simulado del servicio
        when(articleService.getAllArticles()).thenReturn(mockArticles);

        // Realizar la solicitud y verificar los resultados
        mockMvc.perform(get("/api/articles")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(mockArticles.size()))
                .andExpect(jsonPath("$[0].title").value(article1.getTitle()))
                .andExpect(jsonPath("$[0].description").value(article1.getDescription()))
                .andExpect(jsonPath("$[1].title").value(article2.getTitle()))
                .andExpect(jsonPath("$[1].description").value(article2.getDescription()))
                .andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON));
    }
}
