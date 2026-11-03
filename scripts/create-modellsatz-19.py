#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generate modellsatz-19.json for Modelltest 13 (Hueber Zertifikat B1 neu, Test 4)
Following the exact schema of modellsatz-18.json and all translation/advertisement invariants.
"""
import json
import os
import sys

# Ensure script directory is on sys.path
sys.path.insert(0, os.path.dirname(__file__))

from modellsatz19_parts import PARTS
from modellsatz19_explanations import EXPLANATIONS
from modellsatz19_translations import TRANSLATIONS

modellsatz_19 = {
  "id": "modellsatz-19",
  "title": "Modelltest 13 — Hueber Zertifikat B1",
  "badge": "Modelltest 13",
  "examTitle": "Goethe / ÖSD B1 Prüfungssimulation — Modelltest 13",
  "examSub": "Lesen (5 Teile) & Hören (4 Teile) · Modelltest 13 (Hueber)",
  "durationMinutes": 65,
  "parts": PARTS,
  "explanations": EXPLANATIONS,
  "translations": TRANSLATIONS
}

out_path = os.path.join(os.path.dirname(__file__), '../data/tests/modellsatz-19.json')
with open(out_path, 'w', encoding='utf-8') as f:
    json.dump(modellsatz_19, f, ensure_ascii=False, indent=2)

print(f"Successfully generated {out_path} ({len(json.dumps(modellsatz_19))} bytes)")
