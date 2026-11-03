#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generate modellsatz-20.json for Modelltest 14 (Hueber Zertifikat B1 neu, Test 5)
Following the exact schema of modellsatz-19.json and all translation/advertisement invariants.
"""
import json
import os
import sys

# Ensure script directory is on sys.path
sys.path.insert(0, os.path.dirname(__file__))

from modellsatz20_parts import PARTS
from modellsatz20_explanations import EXPLANATIONS
from modellsatz20_translations import TRANSLATIONS

modellsatz_20 = {
  "id": "modellsatz-20",
  "title": "Modelltest 14 — Hueber Zertifikat B1",
  "badge": "Modelltest 14",
  "examTitle": "Goethe / ÖSD B1 Prüfungssimulation — Modelltest 14",
  "examSub": "Lesen (5 Teile) & Hören (4 Teile) · Modelltest 14 (Hueber)",
  "durationMinutes": 65,
  "parts": PARTS,
  "explanations": EXPLANATIONS,
  "translations": TRANSLATIONS
}

out_path = os.path.join(os.path.dirname(__file__), '../data/tests/modellsatz-20.json')
with open(out_path, 'w', encoding='utf-8') as f:
    json.dump(modellsatz_20, f, ensure_ascii=False, indent=2)

print(f"Successfully generated {out_path} ({len(json.dumps(modellsatz_20))} bytes)")
