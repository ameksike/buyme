package com.ksike.buyme.shared.util;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Properties;

@Component
public class EnvConfig {

    @PostConstruct
    public void loadEnv() throws IOException {
        String envFilePath = ".env";

        // Check if the .env file exists
        boolean fileExists = Files.exists(Paths.get(envFilePath));

        // Print to console whether .env file exists or not
        System.out.println("<<<<< Archivo .env existe: " + fileExists);

        // If the file exists, load the properties from the file
        if (fileExists) {
            Properties properties = new Properties();
            properties.load(Files.newBufferedReader(Paths.get(envFilePath)));

            // Set properties as system variables
            properties.forEach((key, value) -> {
                System.setProperty(key.toString(), value.toString());
                System.out.println("<<<<< Property loaded from .env - " + key + ": " + value);
            });
        } else {
            // If not exists, print current environment variables
            System.out.println("<<<<< .env file not found. Using system environment variables.");
            System.out.println("<<<<< DATABASE_HOST: " + System.getenv("DATABASE_HOST"));
            System.out.println("<<<<< DATABASE_PORT: " + System.getenv("DATABASE_PORT"));
            System.out.println("<<<<< DATABASE_NAME: " + System.getenv("DATABASE_NAME"));
        }
    }
}
