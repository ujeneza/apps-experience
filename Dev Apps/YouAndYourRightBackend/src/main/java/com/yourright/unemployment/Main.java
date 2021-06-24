package com.yourright.unemployment;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.sql.Connection;
import java.sql.SQLException;

import static java.sql.DriverManager.getConnection;

@SpringBootApplication
public class Main {
    public static void main(String[] args) {
        SpringApplication.run(Main.class);
    }

    @Bean
    static Connection connection() {
        try {
            return getConnection(
                    "jdbc:mysql://localhost:3306/unemploymentdb",
                    "ujeneza",
                    "WhiteDwarf");
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
