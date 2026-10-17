# 🇩🇪 Goethe / ÖSD Zertifikat B1 — Simulation d'Examen Interactive

[![Tests](https://img.shields.io/badge/tests-6%2F6%20valid-success?style=for-the-badge&logo=node.js)](scripts/validate-tests.js)
[![PWA Ready](https://img.shields.io/badge/PWA-100%25%20Offline-blue?style=for-the-badge&logo=pwa)](manifest.json)
[![UI Languages](https://img.shields.io/badge/UI%20Languages-FR%20%7C%20DE%20%7C%20EN-orange?style=for-the-badge)](uiLocalization.js)
[![License](https://img.shields.io/badge/license-ISC-green?style=for-the-badge)](package.json)

Une plateforme web moderne, réactive et complète pour préparer et simuler dans les conditions réelles les examens officiels du **Goethe-Zertifikat B1** et de l'**ÖSD Zertifikat B1** (Modules *Lesen* & *Hören*).

---

## 🌟 Points Forts & Fonctionnalités

### 🎯 Modules d'Examen Authentiques
- **Modul Lesen (Compréhension écrite)** :
  - **Teil 1** : Blog / Email personnel (6 questions Vrai/Faux)
  - **Teil 2** : Deux articles de presse avec choix multiples (a, b, c)
  - **Teil 3** : Annonces et recherche de correspondance (Appariement)
  - **Teil 4** : Forum de discussion (7 opinions : Oui / Non)
  - **Teil 5** : Règlement / Consignes officielles avec choix multiples
- **Modul Hören (Compréhension orale)** :
  - Lecteur audio synchronisé, minuterie officielle (40 minutes) et transcriptions didactiques.
- **Minuteur d'examen officiel** (65 min pour la lecture / 40 min pour l'écoute) avec alertes visuelles et mise en pause.
- **Barème officiel (30 points)** avec seuil de réussite (60% / 18 points) et calcul instantané du score.

### 🌐 Interface Multilingue (Français par défaut)
- Interface utilisateur (navigation, boutons, barre inférieure, paramètres et fenêtres d'aide) disponible en **Français** (`fr`, par défaut), **Allemand** (`de`) et **Anglais** (`en`).
- **Préservation rigoureuse des textes d'examen** : Les textes authentiques, questions et choix de réponse restent 100% en allemand pour garantir un entraînement réaliste et rigoureux.

### 🤖 Tuteur IA Intégré (B1 AI Tutor)
- Assistant pédagogique interactif gratuit compatible avec **Google Gemini 1.5 Flash** et **Groq Cloud (Llama 3.3 70B)**.
- Explique en détail pourquoi une option est correcte, identifie les pièges (distracteurs), souligne les mots-clés dans le texte et détaille les points de grammaire B1.
- **Lien d'invitation magique en 1 clic** : Générez un lien direct pour partager l'accès IA avec des amis sans qu'ils aient besoin de créer une clé API.

### 📑 Gestionnaire Modulaire d'Examens (Exam Manager)
- Livré avec **6 Modellsätze complets** (Séries officielles Goethe/ÖSD et entraînements Hueber).
- **Interface graphique d'ajout d'examens** : Importez des examens au format JSON ou collez directement du code sans toucher aux fichiers source.
- **Générateur IA en 30 secondes** : Modèle de prompt prêt à l'emploi pour transformer n'importe quel texte de livre ou PDF en examen B1 interactif via ChatGPT, Claude ou Gemini.

### 🛠️ Outils d'Étude Avancés
- **Surligneur interactif multicolore** (Jaune, Vert, Bleu, Gomme) avec mémorisation des surlignages par section.
- **Mode Lecture Focus (Reader View)** : Affichage grand format sans distractions avec typographie personnalisable (style Livre serif ou moderne sans-serif) et traduction instantanée des mots pointés.
- **Aide-mémoire Vocabulaire B1 & Cartes Mémoire** : Glossaire complet avec prononciation audio allemande et flashcards interactives.
- **Cahier d'Erreurs Personnel (Fehlerheft)** : Enregistre automatiquement vos erreurs et permet un mode d'entraînement ciblé (*Drill*) jusqu'à maîtrise complète.
- **Aperçu matriciel (Question Matrix)** : Grille visuelle des 30 questions pour sauter directement à une tâche non résolue ou marquée d'une étoile (★).
- **Sauvegarde automatique** : Reprise instantanée de session en cas de rechargement ou de fermeture accidentelle.
- **Envoi par email & Export PDF** : Soumission automatique des résultats par email (EmailJS) et mise en page optimisée pour l'impression.
- **Application Web Progressive (PWA)** : Fonctionne 100% hors-ligne après le premier chargement, installable sur iPhone/iPad et Android.
- **3 Thèmes visuels** : Mode Clair, Papier/Sépia et Sombre.

---

## 🏗️ Structure du Projet

```text
B1-OSD-TEST/
├── index.html                   # Application principale SPA & structure HTML5
├── style.css                    # Système de design CSS réactif & thèmes
├── script.js                    # Moteur de test, minuterie, scoring & navigation
├── uiLocalization.js            # Système de localisation UI (FR / DE / EN)
├── dataLoader.js                # Chargeur dynamique modulaire des examens
├── examManager.js               # Gestionnaire d'examens & interface d'import/export
├── aiTutor.js                   # Assistant IA pédagogique (Gemini / Groq)
├── vocabularyData.js            # Dictionnaire et glossaire B1
├── sw.js                        # Service Worker PWA pour cache 100% hors-ligne
├── manifest.json                # Métadonnées PWA pour installation native
│
├── data/
│   ├── tests-manifest.json      # Registre officiel des séries d'examens
│   ├── tests-bundle.js          # Bundle autonome pour utilisation locale
│   ├── exam-template.json       # Modèle type pour créer un nouvel examen
│   ├── translations-common.json # Dictionnaires de traduction
│   └── tests/
│       ├── modellsatz-1.json    # Modellsatz 1 — Goethe / ÖSD Original
│       ├── modellsatz-2.json    # Modellsatz 2 — B1 Prüfungstraining (Set A)
│       ├── modellsatz-3.json    # Modellsatz 3 — B1 Prüfungstraining (Set B)
│       ├── modellsatz-4.json    # Modelltest 13 — Hueber Zertifikat B1
│       ├── modellsatz-5.json    # Modelltest 14 — Hueber Zertifikat B1
│       └── modellsatz-6.json    # Modelltest 15 — Hueber Zertifikat B1
│
├── scripts/
│   ├── validate-tests.js        # Script de validation automatique de schéma
│   ├── build-data.js            # Reconstructeur du bundle data/tests-bundle.js
│   └── extract-modular-tests.js # Outil d'extraction des anciens modules
│
├── icons/                       # Icônes de l'application et favicon PWA
├── audio/                       # Pistes audio pour les modules Hören
└── package.json                 # Définition du projet et commandes npm
```

---

## 🚀 Démarrage Rapide

### Option 1 : Utilisation Directe (Sans Installation)
Double-cliquez simplement sur **`index.html`** dans votre explorateur de fichiers pour l'ouvrir dans n'importe quel navigateur moderne (Chrome, Firefox, Safari, Edge). Aucun serveur ni installation de paquet n'est requis !

### Option 2 : Serveur Local de Développement
Si vous préférez exécuter avec un serveur HTTP local :

```bash
# Avec Node.js :
npm run serve
# Ou directement avec Python :
python3 -m http.server 8080
```
Ouvrez ensuite [http://localhost:8080](http://localhost:8080) dans votre navigateur.

---

## 🧪 Tests & Validation de Données

Pour vérifier la conformité et l'intégrité de tous les examens JSON :

```bash
npm test
```

Ce script vérifie automatiquement :
- La présence et la validité de toutes les parties (Teil 1 à Teil 5 / Hören).
- La complétude des questions, identifiants uniques et solutions officielles.
- La cohérence des explications didactiques.

---

## ➕ Ajouter ou Modifier un Examen

### Méthode 1 : Via l'interface graphique (Sans coder)
1. Ouvrez l'application dans votre navigateur.
2. Cliquez sur le bouton **« Tests »** dans la barre de navigation.
3. Allez sur l'onglet **« ➕ Ajouter un examen »**.
4. Téléversez un fichier `.json` ou collez directement la structure JSON.
5. Cliquez sur **« Enregistrer & activer l'examen »**.

### Méthode 2 : En tant que fichier permanent
1. Créez un nouveau fichier dans `data/tests/modellsatz-X.json` en vous basant sur [`data/exam-template.json`](data/exam-template.json).
2. Ajoutez l'entrée dans [`data/tests-manifest.json`](data/tests-manifest.json).
3. Exécutez :
   ```bash
   npm run build:data
   npm test
   ```
Pour plus de détails, consultez le [Guide Modulaire Complet (MODULAR_EXAM_GUIDE.md)](MODULAR_EXAM_GUIDE.md).

---

## 📱 Installation sur Mobile (PWA)

- **Sur iPhone / iPad (Safari)** : Appuyez sur l'icône **Partager** ⎋ puis sur **« Sur l'écran d'accueil »** ⊞.
- **Sur Android (Chrome)** : Appuyez sur le menu (⋮) puis sur **« Installer l'application »**.

---

## 📄 Licence

Ce projet est sous licence [ISC](package.json).
Conçu avec soin pour tous les apprenants et candidats au Zertifikat B1 Goethe & ÖSD.
