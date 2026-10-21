# 📦 Archivierte B1 Modellsätze

In diesem Verzeichnis befinden sich archivierte Prüfungsdatensätze, die aus dem aktiven Angebot der Website herausgenommen wurden, um die Oberfläche übersichtlich zu halten.

## 📋 Enthaltene Prüfungen:
1. **Modellsatz 1** (`modellsatz-1.json`): Goethe / ÖSD Original B1 Prüfungssimulation
2. **Modellsatz 2** (`modellsatz-2.json`): B1 Prüfungstraining (Set A)
3. **Modellsatz 3** (`modellsatz-3.json`): B1 Prüfungstraining (Set B)

## 🔄 Wiederherstellung (Reaktivierung):
Um eine archivierte Prüfung wieder auf der Website einzublenden:
1. Entferne in `data/tests-manifest.json` die Eigenschaft `"archived": true` beim jeweiligen Test (oder setze sie auf `false`).
2. Führe im Terminal `npm run build:data` aus.
3. Die Prüfung steht anschließend sofort wieder im Prüfungsmenü der Website zur Verfügung.
