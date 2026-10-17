# 📖 B1 Prüfungssimulation — Modular Exam & Developer Guide

Willkommen zur neuen, modularen Architektur der **B1 Prüfungssimulation (Goethe / ÖSD)**.

Dieses System macht das Hinzufügen, Entfernen, Anpassen und Erweitern von Prüfungen und Wortschatz sowohl **für dich als Entwickler/Nutzer** als auch **für KI-Assistenten (ChatGPT, Gemini, Claude)** maximal einfach und fehlerfrei.

---

## 🏗️ 1. Architektur im Überblick

Früher waren Testfragen, Übersetzungen und Erklärungen auf 4 riesige monolithische JavaScript-Dateien verteilt (~10.000 Zeilen). Jetzt gilt das Prinzip:

> **1 Modellsatz = 1 eigenständige Datei**

```text
B1-OSD-TEST/
├── index.html                   # Haupt-App (HTML5 / PWA)
├── script.js                    # Prüfungslogik & Auswertung
├── style.css                    # Styling & Responsive Design
├── dataLoader.js                # Dynamischer Modul-Loader & Sync
├── examManager.js               # Benutzeroberfläche zur Prüfungsverwaltung
│
├── data/
│   ├── tests-manifest.json      # Katalog aller registrierten Tests
│   ├── tests-bundle.js          # Automatisch generiertes Offline-Bundle
│   ├── exam-template.json       # Muster-Vorlage für neue Prüfungen
│   ├── translations-common.json # Gemeinsame UI-Übersetzungen (AR/FR)
│   └── tests/
│       ├── modellsatz-1.json    # Goethe / ÖSD Original (Komplett)
│       ├── modellsatz-2.json    # Prüfungstraining Set A
│       ├── modellsatz-3.json    # Prüfungstraining Set B
│       ├── modellsatz-4.json    # Hueber Test 13
│       ├── modellsatz-5.json    # Hueber Test 14
│       └── modellsatz-6.json    # Hueber Test 15
│
└── scripts/
    ├── validate-tests.js        # Validiert alle Tests auf Vollständigkeit
    ├── build-data.js            # Erzeugt data/tests-bundle.js
    └── extract-modular-tests.js # Re-Extraktor aus Altdaten
```

---

## ➕ 2. Wie füge ich einen neuen Modellsatz hinzu?

### Methode A: Direkt im Browser (Ohne Code zu schreiben)
1. Öffne die Website im Browser.
2. Klicke in der Menüleiste oben auf **„Tests“** (oder das **`+`**-Icon neben der Modellauswahl).
3. Wechsle auf den Tab **„➕ Neue Prüfung hinzufügen“**.
4. Wähle eine `.json`-Datei von deinem Computer aus oder füge den JSON-Code direkt ein.
5. Klicke auf **„Prüfung speichern & aktivieren“**.
6. Der neue Test steht sofort in der Auswahlliste zur Verfügung und bleibt in deinem Browser gespeichert!

---

### Methode B: Als permanente Datei im Projekt
1. Erstelle eine neue Datei, z. B. `data/tests/modellsatz-7.json` (orientiere dich an `data/exam-template.json`).
2. Öffne `data/tests-manifest.json` und füge den Test hinzu:
   ```json
   {
     "id": "modellsatz-7",
     "title": "Modellsatz 7 — Goethe / ÖSD B1 Neu",
     "badge": "Modellsatz 7",
     "examTitle": "Goethe / ÖSD B1 Prüfungssimulation",
     "examSub": "Lesen (5 Teile) & Hören (4 Teile) · Modellsatz 7",
     "timeTotal": 65,
     "partsCount": 6,
     "questionsCount": 50,
     "fileName": "data/tests/modellsatz-7.json"
   }
   ```
3. Führe im Terminal aus:
   ```bash
   npm test            # Prüft die Datei auf Syntax- oder Logikfehler
   npm run build:data  # Aktualisiert das Offline-Bundle
   ```
4. Fertig! Der Test ist dauerhaft integriert.

---

### Methode C: In 30 Sekunden mit KI (ChatGPT / Gemini / Claude)
1. Öffne im Browser das Menü **„Tests“** ➔ Tab **„🤖 KI-Prompt Vorlage“**.
2. Klicke auf **„📋 Prompt für KI in Zwischenablage kopieren“**.
3. Öffne ChatGPT, Claude oder Gemini, füge den Prompt ein und hänge deinen rohen Prüfungstext (aus PDF oder Buch) an.
4. Die KI gibt dir ein fertiges, valides JSON zurück.
5. Füge dieses JSON im Tab **„➕ Neue Prüfung hinzufügen“** ein.

---

## 🗑️ 3. Wie entferne oder blende ich Prüfungen aus?

- **Im Browser:**
  1. Öffne das Menü **„Tests“**.
  2. Klicke neben der gewünschten Prüfung auf das rote **🗑️ (Löschen / Ausblenden)**.
  3. Bei eigenen Tests wird der Test gelöscht. Bei integrierten Tests wird er sauber aus der Menüleiste ausgeblendet (und kann jederzeit mit 1 Klick wiederhergestellt werden).

- **Im Code:**
  1. Lösche den entsprechenden Eintrag aus `data/tests-manifest.json`.
  2. Führe `npm run build:data` aus.

---

## 📚 4. Wortschatz hinzufügen & entfernen

- Öffne das **Wortschatz-Heft** (`Wortschatz`-Button in der Menüleiste).
- Klicke oben rechts auf **`+ Wort hinzufügen`**.
- Gib das deutsche Wort, die Definition sowie arabische/französische Übersetzungen und einen Beispielsatz ein.
- Das Wort wird sofort in deine B1-Wortschatzliste und die Lernkarten aufgenommen!

---

## ⚡ 5. Nützliche Terminal-Befehle

| Befehl | Beschreibung |
| :--- | :--- |
| `npm test` | Validiert alle JSON-Prüfungen auf vollständige IDs, Fragen, Antwortschlüssel und Erklärungen. |
| `npm run build:data` | Aktualisiert `data/tests-bundle.js` aus den JSON-Dateien in `data/tests/`. |
| `npm run serve` | Startet einen lokalen Testserver auf `http://localhost:8080`. |
