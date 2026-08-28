-- Création de la base de données (si elle n'existe pas déjà via Docker)
CREATE DATABASE IF NOT EXISTS blog_db;
USE blog_db;

-- 1. Table CATEGORY (doit être créée avant ARTICLE pour la clé étrangère)
CREATE TABLE IF NOT EXISTS category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- 2. Table USER
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- 3. Table ARTICLE
CREATE TABLE IF NOT EXISTS articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    category_id INT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES category(id) ON DELETE CASCADE
);

-- Optionnel : Ajout de quelques données de test pour vérifier que tout marche
INSERT INTO category (name) VALUES ('Développement Web'), ('Docker'), ('Général');