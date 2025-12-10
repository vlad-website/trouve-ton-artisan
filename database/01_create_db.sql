-- Création de la base de données
CREATE DATABASE IF NOT EXISTS trouve_ton_artisan
    DEFAULT CHARACTER SET utf8mb4
    DEFAULT COLLATE utf8mb4_general_ci;

USE trouve_ton_artisan;


-- Table CATEGORIE
CREATE TABLE categorie (
    id_categorie INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom          VARCHAR(50) NOT NULL UNIQUE
)   ENGINE=InnoDB;

-- Table SPECIALITE
CREATE TABLE specialite (
    id_specialite INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom           VARCHAR(50) NOT NULL,
    categorie_id  INT UNSIGNED NOT NULL,
    CONSTRAINT fk_specialite_categorie
        FOREIGN KEY (categorie_id)
        REFERENCES categorie(id_categorie)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
) ENGINE=InnoDB;

-- Table ARTISAN
CREATE TABLE artisan (
    id_artisan      INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom             VARCHAR(100) NOT NULL,
    localisation    VARCHAR(100) NOT NULL,
    email           VARCHAR(150) NOT NULL,
    site_web        VARCHAR(150),
    description     TEXT,
    note            DECIMAL(2,1) NOT NULL,
    image           VARCHAR(255),
    specialite_id   INT UNSIGNED NOT NULL,
    top           BOOLEAN NOT NULL DEFAULT FALSE,
    CONSTRAINT fk_artisan_specialite
        FOREIGN KEY (specialite_id)
        REFERENCES specialite(id_specialite)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,
    CONSTRAINT chk_artisan_note
        CHECK (note >= 0 AND note <= 5)
) ENGINE=InnoDB;