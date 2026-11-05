#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generator for data/tests/modellsatz-28.json (Modelltest 22 — Hueber Zertifikat B1, source OSD JUIL/14)
Complete exam: 6 parts, authentic texts, verified answers, 3-language explanations,
full translations dictionary, and auto-registration in data/tests-manifest.json.
"""

import json
import os
import sys

# Import components
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from modellsatz28_parts import test_data
from modellsatz28_explanations import explanations
from modellsatz28_translations import translations

test_data["explanations"] = explanations
test_data["translations"] = translations

base_dir = os.path.dirname(os.path.abspath(__file__))
json_path = os.path.join(base_dir, "..", "data", "tests", "modellsatz-28.json")
manifest_path = os.path.join(base_dir, "..", "data", "tests-manifest.json")

# 1. Write data/tests/modellsatz-28.json
with open(json_path, "w", encoding="utf-8") as f:
    json.dump(test_data, f, ensure_ascii=False, indent=2)
print(f"✅ Generated {json_path} successfully.")

# 2. Update data/tests-manifest.json if needed
with open(manifest_path, "r", encoding="utf-8") as f:
    manifest = json.load(f)

existing = [x for x in manifest if x.get("id") == "modellsatz-28"]
if not existing:
    manifest.append({
        "id": "modellsatz-28",
        "title": "Modelltest 22 — Hueber Zertifikat B1",
        "badge": "Modelltest 22",
        "examTitle": "Goethe / ÖSD B1 Prüfungssimulation — Modelltest 22",
        "examSub": "Lesen (5 Teile) & Hören (4 Teile) · Modelltest 22 (Hueber)",
        "timeTotal": 65,
        "partsCount": 6,
        "questionsCount": 50,
        "fileName": "data/tests/modellsatz-28.json"
    })
    with open(manifest_path, "w", encoding="utf-8") as f:
        json.dump(manifest, f, ensure_ascii=False, indent=2)
    print("✅ Appended modellsatz-28 to data/tests-manifest.json")
else:
    print("ℹ️ modellsatz-28 already in manifest.")
