# Trouve ton artisan

Plateforme web permettant de trouver facilement un artisan en région **Auvergne-Rhône-Alpes** et de le contacter via une fiche détaillée et un formulaire de contact.

Ce projet a été réalisé dans le cadre d’un projet pédagogique.

---

## 🎯 Objectifs du projet

- Faciliter la recherche d’artisans par catégorie ou par nom
- Proposer une interface claire, accessible et responsive (mobile first)
- Consommer une API REST connectée à une base de données MySQL
- Mettre en pratique React, Bootstrap, Sass et Node.js

---

## 🚀 Fonctionnalités

- Navigation par catégories d’artisanat
- Recherche d’artisans par nom
- Affichage des artisans du mois
- Fiche détaillée d’un artisan :
  - nom
  - image
  - note avec étoiles
  - spécialité
  - localisation
  - description
  - site web (si disponible)
  - formulaire de contact
- Pages légales (pages en construction)
- Page 404
- SEO de base (title & meta description)

---

## 🛠️ Technologies utilisées

### Frontend
- React
- React Router
- Bootstrap
- Sass (SCSS)
- JavaScript (ES6)
- HTML5 / CSS3
- Accessibilité

### Backend
- Node.js
- Express
- Sequelize
- MySQL (MariaDB compatible)

### Outils
- Git & GitHub
- Visual Studio Code
- Figma
- Render (déploiement frontend & API)
- AlwaysData (base de données MySQL)

---

## 📁 Structure du projet

trouve-ton-artisan/
├── front/ # Application React
├── api/ # API Node / Express
├── sql/ # Scripts SQL (création et données)
└── README.md

---

## ⚙️ Installation et lancement

### 1️⃣ Cloner le dépôt

```bash
git clone https://github.com/vlad-website/trouve-ton-artisan.git
2️⃣ Installation du backend (API)
cd api
npm install
Créer un fichier .env à la racine du dossier api :

DB_NAME=trouve_ton_artisan
DB_USER=root
DB_PASSWORD=motdepasse
DB_HOST=localhost
DB_DIALECT=mysql
PORT=3001

Lancer l’API :
npm start

3️⃣ Installation du frontend
cd front
npm install
npm start

L’application sera accessible sur :
👉 http://localhost:3000

🗄️ Base de données
Les scripts SQL sont fournis dans le dossier /sql :

Création de la base de données

Insertion des données de test (catégories, spécialités, artisans)

🌍 Déploiement
Frontend : https://trouve-ton-artisan-84vw.onrender.com/

Backend / API : https://trouve-ton-artisan-api-qmqf.onrender.com

🔐 Sécurité (bonnes pratiques)
Validation des données côté backend

Protection contre les erreurs SQL via Sequelize

CORS configuré pour limiter l’accès à l’API

Séparation frontend / backend

♿ Accessibilité
Structure HTML sémantique

Labels et attributs ARIA

Navigation clavier

Contrastes respectés

📌 À venir / améliorations possibles
Envoi réel des emails depuis le formulaire de contact

Authentification administrateur

Ajout et gestion dynamique des artisans

Optimisation SEO avancée

👤 Auteur
Projet réalisé par Kharkovskyi Vladyslav
Dans le cadre d’un projet pédagogique.