CREATE DATABASE urls;
USE urls;
CREATE TABLE urls(
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    original TEXT NOT NULL,
    CONSTRAINT pk_urls PRIMARY KEY(id)
)ENGINE=InnoDB;


INSERT INTO urls VALUES(NULL, "https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/url-shortener-microservice");