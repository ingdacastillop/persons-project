package org.danielcastillo.backend.presentation;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfigSecurity {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new CorsConfiguration();
    }
}
