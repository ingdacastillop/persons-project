package org.danielcastillo.backend.presentation;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class CorsConfiguration implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedHeaders(
                        "X-Requested-With",
                        "Authorization",
                        "Content-Type",
                        "X-Token-Auth"
                )
                .allowedMethods(
                        "POST",
                        "GET",
                        "PUT",
                        "DELETE",
                        "OPTIONS",
                        "PATCH"
                );
    }
}
