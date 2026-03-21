# MDD — Monde de Devs

Application full-stack de réseau social pour développeurs. Les utilisateurs peuvent s'abonner à des thèmes, consulter un feed d'articles et commenter.

**Stack :** Angular 16 · Spring Boot 2.7 · MySQL · JWT

---

## Prérequis

- Java 21
- Maven 3.8+
- Node.js 18+ et npm
- MySQL 8+
- Angular CLI (`npm install -g @angular/cli`)

---

## 1. Base de données

### Créer la base

Dans MySQL Workbench ou via le CLI :

```sql
CREATE DATABASE mdd;
```

### Initialiser le schéma

Exécuter le fichier `ressources/queries_init_schema.sql` dans Workbench (File > Open SQL Script, puis exécuter).

### Charger les données de test (optionnel)

Exécuter ensuite `ressources/data.sql` pour peupler la base avec 10 utilisateurs, 5 thèmes, 50 articles et des commentaires.

> Mot de passe de tous les utilisateurs de test : `Test123!`

---

## 2. Backend (Spring Boot)

### Configuration

Créer le fichier `back/src/main/resources/application.properties` avec le contenu suivant :

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/mdd
spring.datasource.username=VOTRE_USER_MYSQL
spring.datasource.password=VOTRE_MOT_DE_PASSE_MYSQL
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

jwt.secret=VOTRE_CLE_SECRETE_JWT_LONGUE_ET_ALEATOIRE
```

> Ce fichier est ignoré par git (`.gitignore`). Ne pas le commiter.

### Lancer le serveur

```bash
cd back
mvn spring-boot:run
```

Le serveur démarre sur **http://localhost:8080**.

---

## 3. Frontend (Angular)

### Installer les dépendances

```bash
cd front
npm install
```

### Lancer l'application

```bash
ng serve
```

L'application est accessible sur **http://localhost:4200**.

---

## Fonctionnement de l'application

### Authentification

- **Inscription** (`/register`) : créer un compte avec un nom d'utilisateur, un email et un mot de passe (min. 8 caractères, 1 majuscule, 1 chiffre, 1 caractère spécial).
- **Connexion** (`/login`) : se connecter avec son email ou son nom d'utilisateur.
- Un token JWT est stocké en localStorage et envoyé automatiquement avec chaque requête.

### Feed d'articles (`/posts`)

- Affiche les articles des thèmes auxquels l'utilisateur est abonné.
- Les articles sont triés par date décroissante par défaut.
- Le bouton "Trier ↑ / ↓" permet d'inverser l'ordre chronologique.
- Cliquer sur un article ouvre son détail.

### Détail d'un article (`/posts/:id`)

- Affiche le contenu complet de l'article, son auteur et son thème.
- Les commentaires sont listés en dessous.
- Un formulaire permet d'ajouter un commentaire.

### Créer un article (`/posts/create`)

- Sélectionner un thème, saisir un titre et un contenu.

### Thèmes (`/topics`)

- Liste tous les thèmes disponibles.
- Bouton "S'abonner" sur chaque thème pour rejoindre ou quitter un thème.

### Profil (`/profile`)

- Modifier son nom d'utilisateur, son email ou son mot de passe.
- Voir et gérer ses abonnements aux thèmes.
- Se déconnecter.

---

## Structure du projet

```
├── back/               Backend Spring Boot
│   └── src/main/java/com/openclassrooms/mddapi/
│       ├── config/         Configuration Spring Security et CORS
│       ├── controller/     Contrôleurs REST
│       ├── dto/            Objets de transfert (request / response)
│       ├── entity/         Entités JPA
│       ├── repository/     Interfaces Spring Data
│       ├── security/       JWT (filtre, utilitaires, UserDetailsService)
│       └── service/        Logique métier
├── front/              Frontend Angular 16
│   └── src/app/
│       ├── components/     Composants réutilisables (header, tuiles)
│       ├── guards/         Protection des routes
│       ├── interceptors/   Ajout automatique du token JWT
│       ├── interfaces/     Types TypeScript
│       ├── pages/          Pages de l'application
│       ├── services/       Appels HTTP
│       └── validators/     Validateurs de formulaire
└── ressources/         Scripts SQL (schéma et données)
```

## Endpoints API

| Méthode | Route | Auth | Description |
|---------|-------|------|-------------|
| POST | `/api/auth/register` | Non | Inscription |
| POST | `/api/auth/login` | Non | Connexion |
| GET | `/api/auth/me` | Oui | Profil utilisateur |
| PUT | `/api/auth/me` | Oui | Modifier le profil |
| GET | `/api/topics` | Oui | Liste des thèmes |
| GET | `/api/subscriptions` | Oui | Mes abonnements |
| POST | `/api/subscriptions/{topicId}` | Oui | S'abonner |
| DELETE | `/api/subscriptions/{topicId}` | Oui | Se désabonner |
| GET | `/api/posts` | Oui | Feed personnel |
| POST | `/api/posts` | Oui | Créer un article |
| GET | `/api/posts/{id}` | Oui | Détail d'un article |
| GET | `/api/posts/{id}/comments` | Oui | Commentaires |
| POST | `/api/posts/{id}/comments` | Oui | Ajouter un commentaire |