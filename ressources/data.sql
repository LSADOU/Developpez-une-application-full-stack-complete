
INSERT INTO users (username, email, password) VALUES ('Thomas', 'thomas@test.com', '$2a$10$$2a$10$em0UngmKSZXR5XiQMDKIgOY01wTlVCR4gi2S9nMCXXu2UX3jexs36');
INSERT INTO users (username, email, password) VALUES ('Marie', 'marie@test.com', '$2a$10$$2a$10$em0UngmKSZXR5XiQMDKIgOY01wTlVCR4gi2S9nMCXXu2UX3jexs36');
INSERT INTO users (username, email, password) VALUES ('Lucas', 'lucas@test.com', '$2a$10$$2a$10$em0UngmKSZXR5XiQMDKIgOY01wTlVCR4gi2S9nMCXXu2UX3jexs36');
INSERT INTO users (username, email, password) VALUES ('Camille', 'camille@test.com', '$2a$10$$2a$10$em0UngmKSZXR5XiQMDKIgOY01wTlVCR4gi2S9nMCXXu2UX3jexs36');
INSERT INTO users (username, email, password) VALUES ('Antoine', 'antoine@test.com', '$2a$10$$2a$10$em0UngmKSZXR5XiQMDKIgOY01wTlVCR4gi2S9nMCXXu2UX3jexs36');
INSERT INTO users (username, email, password) VALUES ('Sophie', 'sophie@test.com', '$2a$10$$2a$10$em0UngmKSZXR5XiQMDKIgOY01wTlVCR4gi2S9nMCXXu2UX3jexs36');
INSERT INTO users (username, email, password) VALUES ('Julien', 'julien@test.com', '$2a$10$$2a$10$em0UngmKSZXR5XiQMDKIgOY01wTlVCR4gi2S9nMCXXu2UX3jexs36');
INSERT INTO users (username, email, password) VALUES ('Lea', 'lea@test.com', '$2a$10$$2a$10$em0UngmKSZXR5XiQMDKIgOY01wTlVCR4gi2S9nMCXXu2UX3jexs36');
INSERT INTO users (username, email, password) VALUES ('Nicolas', 'nicolas@test.com', '$2a$10$$2a$10$em0UngmKSZXR5XiQMDKIgOY01wTlVCR4gi2S9nMCXXu2UX3jexs36');
INSERT INTO users (username, email, password) VALUES ('Emma', 'emma@test.com', '$2a$10$$2a$10$em0UngmKSZXR5XiQMDKIgOY01wTlVCR4gi2S9nMCXXu2UX3jexs36');

INSERT INTO topics (title, description) VALUES ('JavaScript', 'Tout sur le langage JavaScript : ES6+, frameworks, bonnes pratiques.');
INSERT INTO topics (title, description) VALUES ('Java', 'Le langage Java, Spring Boot, JPA et l''ecosysteme JVM.');
INSERT INTO topics (title, description) VALUES ('DevOps', 'Docker, CI/CD, Kubernetes et infrastructure as code.');
INSERT INTO topics (title, description) VALUES ('Python', 'Python pour le web, la data science et l''automatisation.');
INSERT INTO topics (title, description) VALUES ('Architecture', 'Microservices, design patterns, clean architecture et DDD.');


INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Les nouveautés ES2023', 'ES2023 apporte de nouvelles méthodes pour les tableaux comme findLast() et findLastIndex(). Ces ajouts simplifient de nombreux cas d''usage courants. Voyons comment les utiliser dans nos projets.', 1, 1);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Pourquoi TypeScript en 2024', 'TypeScript s''impose comme un standard dans les projets JavaScript modernes. Le typage statique réduit les bugs et améliore l''expérience développeur. Voici pourquoi vous devriez l''adopter.', 2, 1);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Comprendre les Promises', 'Les Promises sont la base de la programmation asynchrone en JavaScript. Avec async/await, le code devient plus lisible. Cet article explique les concepts fondamentaux.', 3, 1);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('React vs Vue en 2024', 'Le débat React vs Vue continue. Chaque framework a ses points forts. Nous comparons les deux sur des critères concrets : performance, DX, ecosystème.', 4, 1);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Les Web Components', 'Les Web Components permettent de créer des composants réutilisables sans framework. Custom Elements, Shadow DOM, HTML Templates : tour d''horizon complet.', 5, 1);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Optimiser ses bundles Webpack', 'Un bundle trop lourd nuit aux performances. Tree shaking, code splitting, lazy loading : voici les techniques pour alléger vos applications JavaScript.', 6, 1);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Introduction à Svelte', 'Svelte compile votre code en JavaScript vanilla sans virtual DOM. Le résultat : des applications très performantes avec une syntaxe concise.', 7, 1);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Les Design Patterns en JS', 'Observer, Factory, Singleton : les design patterns s''appliquent aussi en JavaScript. Exemples concrets et cas d''usage pour chaque pattern.', 8, 1);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Tests unitaires avec Jest', 'Jest est le framework de test incontournable en JavaScript. Mise en place, mocking, coverage : guide complet pour tester efficacement vos applications.', 9, 1);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Node.js et les streams', 'Les streams Node.js permettent de traiter des données volumineuses sans saturer la mémoire. Readable, Writable, Transform : maîtrisez les streams.', 10, 1);


INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Spring Boot 3 et Java 21', 'Spring Boot 3 tire parti des nouvelles fonctionnalités de Java 21 : virtual threads, pattern matching, records. Tour d''horizon des améliorations.', 2, 2);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('JPA et les performances', 'Les requêtes N+1 sont l''ennemi des performances JPA. Fetch join, entity graph, batch fetching : stratégies pour optimiser vos accès base de données.', 3, 2);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Les Records Java', 'Les Records introduits en Java 16 simplifient la création de classes immuables. Idéaux pour les DTOs et les value objects.', 4, 2);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Spring Security JWT', 'Implémenter une authentification JWT avec Spring Security 6. Filter chain, token validation, gestion des rôles : guide complet.', 5, 2);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Les Virtual Threads Java 21', 'Les virtual threads révolutionnent la concurrence en Java. Plus besoin de gérer des pools de threads complexes. Exemples pratiques avec Spring Boot.', 6, 2);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Reactive Programming avec WebFlux', 'Spring WebFlux permet de créer des applications réactives non-bloquantes. Flux, Mono, backpressure : les concepts clés expliqués.', 7, 2);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Lombok en pratique', 'Lombok réduit le boilerplate Java avec ses annotations. @Data, @Builder, @Slf4j : les annotations indispensables et leurs pièges à éviter.', 8, 2);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Tests avec JUnit 5', 'JUnit 5 apporte de nombreuses améliorations sur JUnit 4. Nested tests, parameterized tests, extensions : guide pour des tests maintenables.', 9, 2);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Microservices avec Spring Cloud', 'Spring Cloud facilite la mise en place d''architectures microservices. Service discovery, load balancing, circuit breaker : les composants essentiels.', 10, 2);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Clean Code en Java', 'Robert Martin''s Clean Code appliqué à Java. Nommage, fonctions courtes, SOLID principles : écrire du code lisible et maintenable.', 1, 2);


INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Docker pour les développeurs', 'Docker simplifie le déploiement en encapsulant l''application et ses dépendances. Images, containers, volumes, networks : les bases indispensables.', 3, 3);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('CI/CD avec GitHub Actions', 'GitHub Actions permet d''automatiser build, tests et déploiement. Workflows, jobs, actions marketplace : construisez votre pipeline CI/CD.', 4, 3);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Kubernetes en production', 'Kubernetes orchestre vos containers à grande échelle. Pods, services, deployments, ingress : les concepts fondamentaux pour démarrer.', 5, 3);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Infrastructure as Code avec Terraform', 'Terraform permet de définir son infrastructure en code versionnable. Providers, resources, modules : gérez AWS ou GCP comme du code.', 6, 3);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Monitoring avec Prometheus et Grafana', 'Prometheus collecte les métriques, Grafana les visualise. Alerting, dashboards, PromQL : mettez en place un monitoring efficace.', 7, 3);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Docker Compose pour le développement', 'Docker Compose orchestre plusieurs containers en local. Idéal pour reproduire l''environnement de production sur son poste.', 8, 3);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Gitflow vs Trunk Based Development', 'Deux approches s''affrontent : Gitflow avec ses branches longues vs Trunk Based avec des commits fréquents sur main. Avantages et inconvénients.', 9, 3);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Les 12 facteurs d''une app cloud native', 'La méthodologie 12-factor définit les bonnes pratiques pour des applications cloud native. Configuration, logs, processes : revue complète.', 10, 3);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Sécuriser ses images Docker', 'Une image Docker mal configurée est une faille de sécurité. Utilisateur non-root, layers optimisés, scan de vulnérabilités : les bonnes pratiques.', 1, 3);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('ArgoCD et le GitOps', 'Le GitOps utilise Git comme source de vérité pour les déploiements. ArgoCD synchronise automatiquement votre cluster Kubernetes avec votre repo.', 2, 3);


INSERT INTO posts (title, content, author_id, topic_id) VALUES ('FastAPI vs Django REST', 'FastAPI s''impose comme alternative moderne à Django REST. Performance, typage, documentation automatique : comparatif détaillé.', 4, 4);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Python et la Data Science', 'Pandas, NumPy, Matplotlib : le trio indispensable de la data science Python. Guide pour débuter l''analyse de données.', 5, 4);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Asyncio en Python', 'La programmation asynchrone avec asyncio permet de gérer de nombreuses connexions simultanées. Coroutines, event loop, tasks : les fondamentaux.', 6, 4);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Les décorateurs Python', 'Les décorateurs sont une fonctionnalité puissante de Python. Logging, caching, validation : comment créer et utiliser vos propres décorateurs.', 7, 4);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Machine Learning avec Scikit-learn', 'Scikit-learn simplifie l''implémentation d''algorithmes de machine learning. Regression, classification, clustering : premiers pas concrets.', 8, 4);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Gestion des dépendances avec Poetry', 'Poetry modernise la gestion des dépendances Python. Remplacement de pip + virtualenv en un seul outil, avec lock file et publication sur PyPI.', 9, 4);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Tests avec Pytest', 'Pytest est plus simple et puissant que unittest. Fixtures, parametrize, plugins : écrire des tests efficaces en Python.', 10, 4);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Python Type Hints', 'Les type hints améliorent la lisibilité et détectent les bugs à l''avance. mypy, pydantic, annotations : guide pratique du typage en Python.', 1, 4);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Scripting et automatisation', 'Python excelle pour automatiser les tâches répétitives. Manipulation de fichiers, appels API, scripts shell : exemples pratiques.', 2, 4);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Introduction à Django', 'Django suit la philosophie batteries included. ORM, admin, auth, templates : créez une application web complète rapidement.', 3, 4);


INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Clean Architecture de Robert Martin', 'La Clean Architecture sépare le domaine métier des détails techniques. Entities, use cases, adapters, frameworks : les cercles concentriques expliqués.', 5, 5);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Domain Driven Design', 'Le DDD aligne le code sur le domaine métier. Bounded context, agrégats, value objects, événements de domaine : les patterns fondamentaux.', 6, 5);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('CQRS et Event Sourcing', 'CQRS sépare les commandes des requêtes. Couplé à l''Event Sourcing, il offre un historique complet des changements d''état.', 7, 5);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Les principes SOLID', 'Single Responsibility, Open/Closed, Liskov, Interface Segregation, Dependency Inversion : les 5 principes pour un code maintenable.', 8, 5);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Microservices vs Monolithe', 'Les microservices ne sont pas toujours la bonne réponse. Quand rester sur un monolithe, quand découper : critères de décision concrets.', 9, 5);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('API REST vs GraphQL', 'GraphQL offre plus de flexibilité que REST mais ajoute de la complexité. Comparaison objective pour choisir la bonne approche selon le contexte.', 10, 5);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Le pattern Hexagonal', 'L''architecture hexagonale isole le domaine des adaptateurs. Ports and Adapters : comment implémenter ce pattern en pratique.', 1, 5);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Event-Driven Architecture', 'Les architectures event-driven découplent les services via des événements. Message brokers, event bus, saga pattern : les concepts clés.', 2, 5);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('Refactoring sans régression', 'Refactorer sans casser l''existant demande discipline et méthode. Tests, baby steps, feature flags : stratégies éprouvées.', 3, 5);
INSERT INTO posts (title, content, author_id, topic_id) VALUES ('La dette technique', 'La dette technique s''accumule si on ne la traite pas. Comment la mesurer, la prioriser et la réduire sans bloquer les nouvelles fonctionnalités.', 4, 5);


INSERT INTO comments (content, author_id, post_id) VALUES ('Super article, très bien expliqué !', 2, 1);
INSERT INTO comments (content, author_id, post_id) VALUES ('J''utilisais findIndex() pour ça, je vais changer mes habitudes.', 3, 1);
INSERT INTO comments (content, author_id, post_id) VALUES ('Est-ce que findLast() est supporté dans tous les navigateurs ?', 4, 1);


INSERT INTO comments (content, author_id, post_id) VALUES ('TypeScript a complètement changé ma façon de coder.', 1, 2);
INSERT INTO comments (content, author_id, post_id) VALUES ('La courbe d''apprentissage est un peu raide au début mais ça vaut le coup.', 5, 2);
INSERT INTO comments (content, author_id, post_id) VALUES ('On utilise TS sur tous nos projets depuis 2 ans, zéro regret.', 6, 2);
INSERT INTO comments (content, author_id, post_id) VALUES ('Attention aux types any qui trainent dans certaines codebases...', 7, 2);
INSERT INTO comments (content, author_id, post_id) VALUES ('Un article sur les utility types serait bienvenu !', 8, 2);


INSERT INTO comments (content, author_id, post_id) VALUES ('Les Promises m''ont longtemps posé problème, cet article clarifie tout.', 9, 3);
INSERT INTO comments (content, author_id, post_id) VALUES ('async/await a simplifié tellement de code callback hell.', 10, 3);


INSERT INTO comments (content, author_id, post_id) VALUES ('Team React ici, mais Vue a de sérieux arguments.', 1, 4);
INSERT INTO comments (content, author_id, post_id) VALUES ('La composition API de Vue 3 m''a réconcilié avec Vue.', 3, 4);
INSERT INTO comments (content, author_id, post_id) VALUES ('Et Angular dans tout ça ?', 5, 4);
INSERT INTO comments (content, author_id, post_id) VALUES ('L''écosystème React reste imbattable selon moi.', 7, 4);


INSERT INTO comments (content, author_id, post_id) VALUES ('Les Web Components manquent encore de tooling.', 2, 5);
INSERT INTO comments (content, author_id, post_id) VALUES ('Intéressant mais peu adopté en entreprise.', 4, 5);


INSERT INTO comments (content, author_id, post_id) VALUES ('Le tree shaking a réduit mon bundle de 40%.', 6, 6);
INSERT INTO comments (content, author_id, post_id) VALUES ('Vite remplace de plus en plus Webpack dans mes projets.', 8, 6);
INSERT INTO comments (content, author_id, post_id) VALUES ('Le lazy loading des routes est indispensable.', 10, 6);
INSERT INTO comments (content, author_id, post_id) VALUES ('Bonne pratique : analyser son bundle avec webpack-bundle-analyzer.', 1, 6);
INSERT INTO comments (content, author_id, post_id) VALUES ('Module federation change la donne pour les micro-frontends.', 3, 6);


INSERT INTO comments (content, author_id, post_id) VALUES ('Svelte est bluffant, j''ai du mal à revenir à React après.', 5, 7);
INSERT INTO comments (content, author_id, post_id) VALUES ('SvelteKit pour le full-stack, c''est très agréable.', 7, 7);
INSERT INTO comments (content, author_id, post_id) VALUES ('Le manque de librairies par rapport à React est un frein.', 9, 7);


INSERT INTO comments (content, author_id, post_id) VALUES ('Le pattern Observer est partout en JavaScript finalement.', 2, 8);
INSERT INTO comments (content, author_id, post_id) VALUES ('Bon rappel, on réinvente souvent la roue sans le savoir.', 4, 8);


INSERT INTO comments (content, author_id, post_id) VALUES ('Jest + Testing Library, combo parfait pour React.', 6, 9);
INSERT INTO comments (content, author_id, post_id) VALUES ('Le coverage à 100% n''est pas toujours pertinent.', 8, 9);
INSERT INTO comments (content, author_id, post_id) VALUES ('Vitest est plus rapide que Jest pour les projets Vite.', 10, 9);
INSERT INTO comments (content, author_id, post_id) VALUES ('Les snapshots tests sont pratiques mais fragiles.', 1, 9);


INSERT INTO comments (content, author_id, post_id) VALUES ('Les streams sont sous-utilisés, merci pour cet article.', 3, 10);
INSERT INTO comments (content, author_id, post_id) VALUES ('Utile pour parser des fichiers CSV volumineux.', 5, 10);
INSERT INTO comments (content, author_id, post_id) VALUES ('Attention à bien gérer les erreurs dans les pipes.', 7, 10);


INSERT INTO comments (content, author_id, post_id) VALUES ('Les virtual threads vont changer beaucoup de choses.', 1, 11);
INSERT INTO comments (content, author_id, post_id) VALUES ('La migration de Spring Boot 2 à 3 n''est pas triviale.', 3, 11);
INSERT INTO comments (content, author_id, post_id) VALUES ('Les records sont enfin là, plus besoin de Lombok pour les DTOs simples.', 5, 11);
INSERT INTO comments (content, author_id, post_id) VALUES ('Pattern matching pour instanceof, tellement plus propre.', 7, 11);


INSERT INTO comments (content, author_id, post_id) VALUES ('Le problème N+1 m''a coûté beaucoup de temps en production.', 2, 12);
INSERT INTO comments (content, author_id, post_id) VALUES ('EntityGraph est ma solution préférée pour ce problème.', 4, 12);
INSERT INTO comments (content, author_id, post_id) VALUES ('Activer le logging SQL en dev aide beaucoup à détecter ces problèmes.', 6, 12);


INSERT INTO comments (content, author_id, post_id) VALUES ('J''adore les records pour les réponses d''API.', 8, 13);
INSERT INTO comments (content, author_id, post_id) VALUES ('Compact constructors sont très pratiques pour la validation.', 10, 13);


INSERT INTO comments (content, author_id, post_id) VALUES ('Très bon article, j''ai implémenté exactement ça sur mon projet.', 1, 14);
INSERT INTO comments (content, author_id, post_id) VALUES ('La gestion du refresh token manque dans cet article.', 3, 14);
INSERT INTO comments (content, author_id, post_id) VALUES ('Spring Security 6 a changé beaucoup d''API par rapport à la 5.', 5, 14);
INSERT INTO comments (content, author_id, post_id) VALUES ('N''oubliez pas de stocker le token côté client de manière sécurisée.', 7, 14);
INSERT INTO comments (content, author_id, post_id) VALUES ('HttpOnly cookies vs localStorage, le débat continue...', 9, 14);


INSERT INTO comments (content, author_id, post_id) VALUES ('Les benchmarks sont impressionnants avec les virtual threads.', 2, 15);
INSERT INTO comments (content, author_id, post_id) VALUES ('Project Loom attendu depuis si longtemps !', 4, 15);


INSERT INTO comments (content, author_id, post_id) VALUES ('Docker a révolutionné nos déploiements.', 6, 21);
INSERT INTO comments (content, author_id, post_id) VALUES ('Multi-stage builds pour réduire la taille des images.', 8, 21);
INSERT INTO comments (content, author_id, post_id) VALUES ('Podman comme alternative sans daemon root.', 10, 21);


INSERT INTO comments (content, author_id, post_id) VALUES ('GitHub Actions remplace Jenkins chez nous depuis 1 an.', 1, 22);
INSERT INTO comments (content, author_id, post_id) VALUES ('Les secrets GitHub sont bien pratiques pour les credentials.', 3, 22);
INSERT INTO comments (content, author_id, post_id) VALUES ('Les matrix builds pour tester sur plusieurs versions, top.', 5, 22);
INSERT INTO comments (content, author_id, post_id) VALUES ('GitLab CI reste plus puissant selon moi.', 7, 22);


INSERT INTO comments (content, author_id, post_id) VALUES ('K8s en production c''est puissant mais complexe à opérer.', 9, 23);
INSERT INTO comments (content, author_id, post_id) VALUES ('K3s pour les petits clusters, beaucoup plus léger.', 2, 23);


INSERT INTO comments (content, author_id, post_id) VALUES ('FastAPI est incroyablement rapide à prendre en main.', 4, 31);
INSERT INTO comments (content, author_id, post_id) VALUES ('La doc auto avec Swagger intégrée est un vrai plus.', 6, 31);
INSERT INTO comments (content, author_id, post_id) VALUES ('Pydantic v2 améliore encore les performances.', 8, 31);
INSERT INTO comments (content, author_id, post_id) VALUES ('Django reste indispensable pour les apps full-featured.', 10, 31);
INSERT INTO comments (content, author_id, post_id) VALUES ('Flask toujours là pour les petites APIs.', 1, 31);


INSERT INTO comments (content, author_id, post_id) VALUES ('Pandas 2.0 avec PyArrow sous le capot, énorme gain de perf.', 3, 32);
INSERT INTO comments (content, author_id, post_id) VALUES ('Polars comme alternative plus rapide à Pandas.', 5, 32);
INSERT INTO comments (content, author_id, post_id) VALUES ('Les Jupyter notebooks pour l''exploration, VSCode pour la prod.', 7, 32);


INSERT INTO comments (content, author_id, post_id) VALUES ('Clean Architecture a changé ma vision du développement.', 9, 41);
INSERT INTO comments (content, author_id, post_id) VALUES ('Parfois over-engineered pour des petits projets.', 2, 41);
INSERT INTO comments (content, author_id, post_id) VALUES ('La dépendance vers l''intérieur, règle d''or.', 4, 41);
INSERT INTO comments (content, author_id, post_id) VALUES ('Associer ça avec DDD est très puissant.', 6, 41);


INSERT INTO comments (content, author_id, post_id) VALUES ('Le DDD demande un fort alignement avec les experts métier.', 8, 42);
INSERT INTO comments (content, author_id, post_id) VALUES ('Les bounded contexts évitent tant de conflits de nommage.', 10, 42);
INSERT INTO comments (content, author_id, post_id) VALUES ('Ubiquitous language, concept clé souvent négligé.', 1, 42);


INSERT INTO comments (content, author_id, post_id) VALUES ('CQRS sans Event Sourcing est déjà très utile.', 3, 43);
INSERT INTO comments (content, author_id, post_id) VALUES ('Event Sourcing ajoute de la complexité, à ne pas sous-estimer.', 5, 43);
INSERT INTO comments (content, author_id, post_id) VALUES ('Axon Framework pour implémenter ça en Java.', 7, 43);
INSERT INTO comments (content, author_id, post_id) VALUES ('Le replay d''événements est une fonctionnalité puissante.', 9, 43);
INSERT INTO comments (content, author_id, post_id) VALUES ('Commencer simple, ajouter CQRS quand le besoin se présente.', 2, 43);