# Atelier découverte : Hapi.js + Knex.js

## Introduction

Ce dépôt est un atelier de découverte autour de deux outils du monde Node.js :

- Hapi.js pour la création d’API et de serveurs backend
- Knex.js pour interagir avec une base de données SQL

L’objectif de cet atelier est de comprendre les bases d’un backend moderne en restant proche du fonctionnement réel des requêtes SQL.

---

# Pourquoi cet atelier ?

Quand on débute le backend, beaucoup d’outils abstraient énormément la base de données.

C’est pratique au début, mais cela peut parfois masquer :

- le fonctionnement des requêtes SQL
- les performances
- les jointures
- les transactions
- la structure réelle des données

Avec Hapi.js et Knex.js, l’idée est différente :

- garder un code simple
- comprendre ce qui se passe réellement
- apprendre progressivement les bonnes pratiques backend

---

# Technologies utilisées

## Hapi.js

Hapi.js est un framework backend Node.js orienté stabilité et architecture.

Il permet notamment de :

- créer des routes API
- gérer les requêtes HTTP
- organiser proprement un serveur
- ajouter facilement des plugins
- structurer un backend maintenable

Le framework est connu pour sa robustesse et sa simplicité.

---

## Knex.js

Knex.js est un query builder SQL pour Node.js.

Ce n’est pas un ORM classique.

Au lieu de masquer SQL derrière des modèles complexes, Knex permet d’écrire des requêtes proches du SQL réel.

Exemple de philosophie :

```js
const coffees = await client.select('*').from('coffee')
```

Cela correspond quasiment à :

```sql
SELECT * FROM coffee;
```

Knex permet notamment de :

- créer des requêtes SQL lisibles
- gérer les migrations
- gérer les transactions
- travailler avec PostgreSQL, MySQL, SQLite, etc.
- garder un bon contrôle des performances

---

# Installation

## Cloner le projet

```bash
git clone <url-du-repo>
```

---

## Installer les dépendances

```bash
pnpm install
```

ou

```bash
npm install
```

---

# Lancer le projet

```bash
pnpm dev
```

---

# Ressources utiles

- Documentation officielle Hapi.js
- Documentation officielle Knex.js
- Documentation PostgreSQL

---

# Licence

Projet libre pour l’apprentissage et l’expérimentation.

