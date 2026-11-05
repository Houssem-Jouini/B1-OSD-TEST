#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Modellsatz 26 - Parts Data
Exam: Modelltest 20 — Hueber Zertifikat B1 (source: OSD JUIL/12, EX12-OSD.pdf)
"""

true = True
false = False
null = None

test_data = {
  "id": "modellsatz-26",
  "title": "Modelltest 20 — Hueber Zertifikat B1",
  "badge": "Modelltest 20",
  "examTitle": "Goethe / ÖSD B1 Prüfungssimulation — Modelltest 20",
  "examSub": "Lesen (5 Teile) & Hören (4 Teile) · Modelltest 20 (Hueber)",
  "durationMinutes": 65,
  "parts": [
    {
      "id": 1,
      "title": "Teil 1",
      "time": 10,
      "instructions": "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. Wählen Sie: Sind die Aussagen richtig oder falsch?",
      "articles": [
        {
          "id": 1,
          "title": "Forum-Beitrag von Jutta · Nachbarschaftsstreit",
          "body": [
            "Guten Abend,",
            "Nachbarschaftsstreit kannte ich bis vor wenigen Monaten nicht. In der Wohnung gegenüber wohnten nette, ruhige Mieter.",
            "Die neuen Mieter, ein Paar, haben mir direkt beim ersten Treffen im Flur vorschreiben wollen, wann ich meiner Pflicht zur Treppenreinigung nachkommen müsse! Ich wohne seit 1984 dort und putze regelmäßig alle vierzehn Tage.",
            "Da die Waschmaschine in der allgemeinen Waschküche nur über einen Zähler läuft, behaupteten sie, ich würde vielleicht auf ihre Kosten waschen, wenn ich öfters die Maschine nutze. Außerdem hätten sie dort, wo sie vorher wohnten, immer ein gutes Verhältnis zu den anderen Bewohnern gehabt.",
            "Nach dem Einzug klopfte und klingelte die Frau immer und immer wieder an meiner Tür, sie würde samstags putzen und ich müsste das auch tun.",
            "Einige Tage später stand im gemeinsam genutzten Flur ein Schrank, der so breit war, dass ich kaum vorbeikam, zumal ich gehbehindert bin. Ich habe mehr als eine Woche abgewartet, weil ich dachte, dass sie das Möbelstück noch reinstellen würden. Als dies nicht geschah, klingelte ich bei den Nachbarn und erklärte, dass ich gerne vorher gefragt worden wäre wegen der Möbelaufstellung. Der Mann schrie mich daraufhin an: „Wer sind Sie überhaupt? Der Schrank bleibt stehen.“ Zweimal musste der Vermieter schriftlich auffordern, das Möbelstück zu entfernen.",
            "Tagelang wurde in der Wohnung gegenüber selbst in den Ruhezeiten gehämmert, gebohrt und gegen die Wand – offenbar mit Fäusten – geklopft. Oft standen sie vor meiner Wohnungstür und sprachen laut mit derben, beleidigenden Worten. Jeden Tag wird die Wohnungstür mehrfach heftig zugeschlagen, auch bzw. gerade nach 23.00 Uhr.",
            "Ich bin – da nicht gesund – inzwischen mit den Nerven fertig, bekomme Herzrasen, schon wenn ich die Nachbarn kommen oder gehen höre.",
            "Was kann ich tun? Ich kann mich doch nicht noch kränker terrorisieren lassen, als ich schon bin. Kann mir jemand einen guten Rat geben?",
            "Herzliche Grüße",
            "Jutta"
          ]
        }
      ],
      "example": {
        "id": 0,
        "text": "Jutta hat die neuen Mieter vor vierzehn Tagen getroffen.",
        "answer": "falsch"
      },
      "questions": [
        {
          "id": 1,
          "num": 1,
          "type": "tf",
          "text": "Die Treppe wird von den Hausbewohnern geputzt.",
          "answer": "richtig"
        },
        {
          "id": 2,
          "num": 2,
          "type": "tf",
          "text": "Im Haus gibt es eine Waschmaschine für alle.",
          "answer": "richtig"
        },
        {
          "id": 3,
          "num": 3,
          "type": "tf",
          "text": "Jutta kann nicht gut gehen.",
          "answer": "richtig"
        },
        {
          "id": 4,
          "num": 4,
          "type": "tf",
          "text": "Nach einer Woche stellte der Vermieter den Schrank wieder in die Wohnung.",
          "answer": "falsch"
        },
        {
          "id": 5,
          "num": 5,
          "type": "tf",
          "text": "Die neuen Mieter machen oft Lärm, aber nicht in den Ruhezeiten.",
          "answer": "falsch"
        },
        {
          "id": 6,
          "num": 6,
          "type": "tf",
          "text": "Jutta hat weder Probleme mit den Nerven noch mit dem Herzen.",
          "answer": "falsch"
        }
      ]
    },
    {
      "id": 2,
      "title": "Teil 2",
      "time": 20,
      "instructions": "Lesen Sie den Text aus der Presse und die Aufgaben 7 bis 9 dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
      "instructions2": "Lesen Sie den Text aus der Presse und die Aufgaben 10 bis 12 dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
      "articles": [
        {
          "id": 1,
          "heading": "Leben gegen die innere Uhr",
          "title": "Leben gegen die innere Uhr",
          "source": "aus einer deutschen Broschüre",
          "body": [
            "Langsam beginnt die Forschung zu verstehen, welche schädlichen Folgen das Leben gegen die innere Uhr hat. Schichtarbeit ist besonders gefährlich. Eine „innere Uhr“ haben viele Lebewesen, wissen Chronobiologen wie Till Roenneberg, der seit Jahrzehnten zu dem Thema forscht. Sie bestimmt, wann Pflanzen ihre Blätter auf- und zuklappen, ob einzellige Meeresalgen sich Richtung Meeresboden oder Wasseroberfläche bewegen oder wie und wann Menschen schlafen.",
            "Außerdem stellt sie die menschliche Körpertemperatur ein und steuert Hormone. Sie legt auch fest, welche Tageszeiten jeder für Sport, Sex oder Mahlzeiten bevorzugt. Am stärksten wird dieser innere Rhythmus durch die Sonnenzeit beeinflusst, den Wechsel zwischen Hell und Dunkel.",
            "Allerdings steht die Innenzeit eines Menschen häufig in Spannung zur „sozialen“, von der Gesellschaft gemachten Zeit. Roenneberg hält darum auch nicht viel von der regelmäßigen Umstellung zwischen Winter- und Sommerzeit – denn dann wird auch an der inneren Uhr gedreht.",
            "„In modernen Gesellschaften leben wir selten im Einklang mit unserer inneren Uhr. Einige von uns durchqueren auf Reisen in kürzester Zeit mehrere Zeitzonen, andere wiederum – etwa 20 Prozent der arbeitenden Bevölkerung in industrialisierten Ländern – arbeiten nach Schichtplänen.“ Viele Menschen leiden unter einer Art von „sozialem Jetlag“, beschreibt Roenneberg."
          ]
        }
      ],
      "example": {
        "id": 0,
        "text": "Till Roenneberg ...",
        "options": [
          "forscht schon lange über die „innere Uhr“.",
          "ist Meeresbiologe.",
          "findet die Zeitumstellung im Winter und im Sommer gut."
        ],
        "answer": 0
      },
      "questions": [
        {
          "id": 7,
          "num": 7,
          "type": "mcq",
          "text": "In diesem Text geht es darum, ...",
          "options": [
            "wie die „innere Uhr“ eingestellt ist.",
            "welche Rolle die „innere Uhr“ für die Menschen spielt.",
            "was die „innere Uhr“ für die Tiere bedeutet."
          ],
          "answer": 1
        },
        {
          "id": 8,
          "num": 8,
          "type": "mcq",
          "text": "Die „innere Uhr“ ...",
          "options": [
            "beeinflusst, wie warm ein Mensch ist.",
            "hat keinen Einfluss auf den Schlaf.",
            "legt fest, welchen Sport ein Mensch macht."
          ],
          "answer": 0
        },
        {
          "id": 9,
          "num": 9,
          "type": "mcq",
          "text": "Die moderne Art zu leben ...",
          "options": [
            "verändert die Ess- und Schlafgewohnheiten.",
            "passt zur „inneren Uhr“ des Menschen.",
            "verhindert oft, dass Menschen nach ihrer „inneren Uhr“ leben können."
          ],
          "answer": 2
        }
      ],
      "articles2": [
        {
          "id": 2,
          "heading": "Antike Teddybären bringen ein Vermögen ein",
          "title": "Antike Teddybären bringen ein Vermögen ein",
          "source": "aus einer deutschen Zeitung",
          "body": [
            "Ein Teddybär – es gibt wohl kaum jemanden, der als Kind keinen hatte. Der Bär geht mit ins Bett, auf Reisen – einfach überallhin. Das Plüschtier dient als guter Freund oder Einschlafhilfe und tröstet das Kind, wenn es traurig ist. Das ist spätestens mit Beginn der Pubertät, also mit 13, 14 Jahren vorbei. Oftmals verschwinden die alten Kuscheltiere dann auf Dachböden oder in Kellern, wo sie vergessen werden. Dabei sind viele dieser Tiere inzwischen sehr selten und sind viel Geld wert.",
            "Als historisch wertvoll gelten Bären, die mindestens aus der Zeit vor 1970 stammen. Ihr Wert hängt davon ab, wie alt und gut erhalten sie sind und wie viele Exemplare davon noch existieren. Markenteddybären, vor allem von der Firma Steiff, sind bei Sammlern am beliebtesten. Für besonders seltene Stücke sind Liebhaber bereit, viele Tausend Euro zu zahlen.",
            "Um das Alter der Steiff-Teddys zu erkennen, kann das Firmenzeichen, der Knopf im Ohr, genau untersucht werden. Häufig sind allerdings Markenzeichen dieser Art verloren gegangen. Dann muss das Alter anders bestimmt werden, z. B. durch die Art und den Sitz der Nähte, die Augen oder das Gewicht des Teddys. Hier sollte dann ein Fachmann befragt werden, um zu bestimmen, ob es sich bei dem Teddybären wirklich um einen kleinen oder auch größeren Schatz handelt."
          ]
        }
      ],
      "questions2": [
        {
          "id": 10,
          "num": 10,
          "type": "mcq",
          "text": "In diesem Text geht es darum, ...",
          "options": [
            "dass alte Teddys bei Kindern beliebt sind.",
            "dass alte Teddys sehr teuer sein können.",
            "dass die Firma Steiff die besten Teddys produziert."
          ],
          "answer": 1
        },
        {
          "id": 11,
          "num": 11,
          "type": "mcq",
          "text": "Teddybären ...",
          "options": [
            "sind für Kinder sehr wichtig.",
            "werden von Jugendlichen in den Müll geworfen.",
            "interessieren auch Jugendliche."
          ],
          "answer": 0
        },
        {
          "id": 12,
          "num": 12,
          "type": "mcq",
          "text": "Das Alter eines Teddys ...",
          "options": [
            "kann durch sein Ohr herausgefunden werden.",
            "kann man nur am Firmenzeichen feststellen.",
            "lässt sich auch an seinen Augen erkennen."
          ],
          "answer": 2
        }
      ]
    },
    {
      "id": 3,
      "title": "Teil 3",
      "time": 10,
      "instructions": "Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis j aus verschiedenen deutschsprachigen Medien. Wählen Sie: Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Die Anzeige aus dem Beispiel können Sie nicht mehr verwenden. Für eine Situation gibt es keine passende Anzeige. In diesem Fall schreiben Sie 0.",
      "situationContext": "Schüler und Lehrer aus Ihrem Bekanntenkreis suchen nach interessanten Angeboten für Klassenfahrten im April oder Mai.",
      "example": {
        "id": 0,
        "text": "Frau Klein sucht für ihre 6. Klasse ein Angebot, das ein interessantes Umweltthema hat und hilft, die Beziehungen unter den Schülern zu verbessern.",
        "answer": "e"
      },
      "adsFormatted": [
        {
          "code": "a",
          "title": "Athen - Flugreise",
          "text": "5 Tage – die beliebteste Klassenreise in Griechenland\n- Hin- und Rückflug (Steuern und Gebühren inkl.)\n- Bustransfer Flughafen – Hotel – Flughafen\n- 4 x Übernachtung in einem Jugendhotel im Zentrum von Athen inkl. Frühstück\nPreis: CHF 234,00 pro Person\nwww.schulreisen-service.ch · Beratung & Buchung: +41(0)31 332 35 41",
          "html": "<strong>Athen - Flugreise</strong><br><em>CHF 234,00 pro Person</em><br>5 Tage Klassenreise in Griechenland · Hin- & Rückflug inkl.<br>4x Übernachtung in Jugendhotel im Zentrum von Athen inkl. Frühstück.<br><em>www.schulreisen-service.ch · +41(0)31 332 35 41</em>",
          "color": "#e8f4fd",
          "hasPin": true
        },
        {
          "code": "b",
          "title": "London",
          "text": "Supersonderangebot: 162,00 EUR pro Pers.\nBusreise – 5 Tage\n- Übernachtung in Mehrbettzimmern inkl. Frühstücksbüfett\n- 3-stündige Stadtrundfahrt\n- Bus vor Ort inkl. 200 Freikilometer für Ausflüge\nnur November bis Februar\nwww.klassenfahrtensuper.de · Beratung & Buchung: (0246-9823-400)",
          "html": "<strong>London</strong><br><em>Supersonderangebot: 162,00 EUR pro Pers.</em><br>Busreise – 5 Tage · Übernachtung inkl. Frühstücksbüfett.<br><strong>nur November bis Februar</strong><br><em>www.klassenfahrtensuper.de · (0246-9823-400)</em>",
          "color": "#fef9e7",
          "hasPin": true
        },
        {
          "code": "c",
          "title": "Berlin - Bahnreise - 5 Tage",
          "text": "159,- EUR pro Person\n- Hin- und Rückfahrt (Reservierungsgebühren inkl.)\n- 4 x übernachten mit Frühstück\n- 2-stündige Stadtführung Berlin\n- Eintritt und Führung im Pergamonmuseum\n- Kleingruppentickets für öffentl. Verkehrsmittel (5 Tage)\nwww.klassenreisen.at · Beratung & Buchung: +43 1 211 47 35",
          "html": "<strong>Berlin - Bahnreise - 5 Tage</strong><br><em>159,- EUR pro Person</em><br>Hin- & Rückfahrt per Bahn · 4x Übernachtung mit Frühstück.<br>Stadtführung, Pergamonmuseum, 5 Tage ÖPNV-Tickets.<br><em>www.klassenreisen.at · +43 1 211 47 35</em>",
          "color": "#e8f8f5",
          "hasPin": true
        },
        {
          "code": "d",
          "title": "Möhnesee",
          "text": "178,00 EUR pro Pers. · Busreise\nStausee in landschaftlich reizvoller Umgebung\n- 5 Tage – besonders beliebt bei den Klassen 4–7\n- tolles Aktiv-Programm\n- 4 x Übernachtung in 4-Personen-Hütte, inkl. Vollpension\n- täglich Windsurfen, Kanufahren, Ballspiele\n- Waldwanderung mit Tierbeobachtung, Grillabend\nwww.klassenfahrtensuper.de · Beratung & Buchung: (0246-9823-400)",
          "html": "<strong>Möhnesee · Busreise</strong><br><em>178,00 EUR pro Pers.</em><br>5 Tage Aktiv-Programm (Klassen 4–7) · 4x Hütte inkl. Vollpension.<br>Windsurfen, Kanufahren, Waldwanderung mit Tierbeobachtung.<br><em>www.klassenfahrtensuper.de · (0246-9823-400)</em>",
          "color": "#fef5e7",
          "hasPin": true
        },
        {
          "code": "e",
          "title": "Prima Klima-Klassenfahrt",
          "text": "149,00 EUR pro Schüler\ngeeignet für: 5.–10. Klasse · Aufenthalt: 5 Tage\nEine Woche ganz fürs Klima – ob ökologisch oder sozial: Beobachtungen und Experimente zum ökologischen Klima • Übungen und Spiele für ein besseres soziales Klima unter den Schülern\n- 4 Übernachtungen mit Vollpension\n- Hin- und Rückfahrt im modernen Reisebus\nMindestteilnehmerzahl: 22\nwww.klassenfahrtensuper.de · Beratung & Buchung: (0246-9823-400)",
          "html": "<strong>Prima Klima-Klassenfahrt</strong><br><em>149,00 EUR pro Schüler</em><br>5 Tage für Klassen 5–10 · Ökologisches & soziales Klima.<br>4 Übernachtungen mit Vollpension im modernen Reisebus.<br><em>www.klassenfahrtensuper.de · (0246-9823-400)</em>",
          "color": "#eafaf1",
          "hasPin": true
        },
        {
          "code": "f",
          "title": "Berlin - Klassenfahrten",
          "text": "Lehrerinformationsreise · Fr., 21.10 – So., 23.10\nLassen Sie sich alles von uns zeigen: Sehenswürdigkeiten, die Ihre Schüler interessieren werden\n- Jugendhotels\n- Nachtleben (nicht nur für Ihre Schüler!)\n- günstige Restaurants ... und vieles mehr\nnur € 99,- pro Person\nInfo & Buchung: www.primaklassenreisen.at",
          "html": "<strong>Berlin - Klassenfahrten</strong><br><em>nur € 99,- pro Person</em><br>Lehrerinformationsreise (21.10.–23.10.) · Sehenswürdigkeiten, Jugendhotels, Nachtleben.<br><em>www.primaklassenreisen.at</em>",
          "color": "#fdfefe",
          "hasPin": true
        },
        {
          "code": "g",
          "title": "Rundreise in Griechenland",
          "text": "159,00 EUR pro Pers.\n4-tägige Klassenfahrt in modernem Reisebus\nThessaloniki – Vergina – Pindosgebirge – Thessaloniki\n3 x Übernachtung/Frühstück in Mehrbettzimmern\nwww.klassenfahrtensuper.de · Beratung & Buchung: (0246-9823-400)",
          "html": "<strong>Rundreise in Griechenland</strong><br><em>159,00 EUR pro Pers.</em><br>4-tägige Busreise: Thessaloniki – Vergina – Pindosgebirge.<br>3x Übernachtung/Frühstück in Mehrbettzimmern.<br><em>www.klassenfahrtensuper.de · (0246-9823-400)</em>",
          "color": "#ebf5fb",
          "hasPin": true
        },
        {
          "code": "h",
          "title": "Berlin",
          "text": "199,00 EUR pro Pers.\nFlugreise – 5 Tage\n- Hin- und Rückflug (Steuern & Gebühren inkl.)\n- 4 x übernachten plus Frühstücksbüffet\n- Kleingruppentickets für öffentl. Verkehrsmittel (5 Tage)\n- 3-stündige Stadtführung\n- Anmeldung zu Führung im Pergamonmuseum\nwww.klassenfahrtensuper.de · Beratung & Buchung: (0246-9823-400)",
          "html": "<strong>Berlin · Flugreise - 5 Tage</strong><br><em>199,00 EUR pro Pers.</em><br>Hin- & Rückflug inkl. Steuern · 4x Übernachtung mit Frühstücksbüffet.<br>5 Tage ÖPNV-Tickets, Stadtführung & Pergamonmuseum.<br><em>www.klassenfahrtensuper.de · (0246-9823-400)</em>",
          "color": "#f4ecf7",
          "hasPin": true
        },
        {
          "code": "i",
          "title": "Klassenfahrt ins Skigebiet Steibis Oberstaufen",
          "text": "5 Tage: 196,00 EUR pro Pers.\nDas Skiparadies für Kinder\n- 4 x Übernachtung mit Vollpension\n- 4-Tage-Skipass\n- Kinderskikurse für Anfänger und Fortgeschrittene\n- von Oktober bis März\nwww.klassenfahrtensuper.de · Beratung & Buchung: (0246-9823-400)",
          "html": "<strong>Klassenfahrt ins Skigebiet Steibis Oberstaufen</strong><br><em>5 Tage: 196,00 EUR pro Pers.</em><br>4x Übernachtung mit Vollpension, 4-Tage-Skipass, Skikurse.<br><strong>Gültig von Oktober bis März.</strong><br><em>www.klassenfahrtensuper.de · (0246-9823-400)</em>",
          "color": "#eaf2f8",
          "hasPin": true
        },
        {
          "code": "j",
          "title": "Marthalen im Züricher Weinland - Busreise",
          "text": "CHF 177,00 pro Person\n- besonders beliebt bei den Klassen 4–7\n- Bauernhof als Unterkunft mit tollen Projekten\n- Themenkreise: Lebensmittelproduktion, Weinberge, Feld und Garten, Tiere\n(Reise, 4 x übernachten, Vollpension, Projektbetreuung inkl.)\nwww.schulreisen-service.ch · Beratung & Buchung: +41(0)31 332 35 41",
          "html": "<strong>Marthalen im Züricher Weinland · Busreise</strong><br><em>CHF 177,00 pro Person</em><br>Bauernhof als Unterkunft (Klassen 4–7) · tolle Projekte: Landwirtschaft & Tiere.<br>4x übernachten, Vollpension, Projektbetreuung inkl.<br><em>www.schulreisen-service.ch · +41(0)31 332 35 41</em>",
          "color": "#f9ebea",
          "hasPin": true
        }
      ],
      "questions": [
        {
          "id": 13,
          "num": 13,
          "text": "Tim und Melina helfen ihrer Lehrerin bei der Organisation der Klassenfahrt. Sie suchen ein Angebot für London.",
          "answer": "0"
        },
        {
          "id": 14,
          "num": 14,
          "text": "Die Schüler der Neugriechischklasse am Einstein-Gymnasium waren letztes Jahr in Athen und möchten dieses Mal einen anderen Teil von Griechenland kennenlernen.",
          "answer": "g"
        },
        {
          "id": 15,
          "num": 15,
          "text": "Benno Pohl möchte dieses Jahr mit seiner 5. Klasse eine Klassenfahrt machen, die den Kindern die Möglichkeit gibt, sportlich aktiv zu sein.",
          "answer": "d"
        },
        {
          "id": 16,
          "num": 16,
          "text": "Frau Keller ist Lehrerin in Zürich. Sie findet, dass eine Klassenfahrt eine gute Gelegenheit ist, damit die Kinder das Leben auf dem Land kennenlernen.",
          "answer": "j"
        },
        {
          "id": 17,
          "num": 17,
          "text": "Die Schüler der letzten Klasse des Keppler-Gymnasiums Linz haben beschlossen, nach Berlin zu fahren. Eine Flugreise ist aber für alle zu teuer.",
          "answer": "c"
        },
        {
          "id": 18,
          "num": 18,
          "text": "Herr Moser unterrichtet Alte Geschichte und möchte dieses Jahr mit seinen Schülern nach Griechenland. Er sucht ein Angebot für Flug und Unterkunft.",
          "answer": "a"
        },
        {
          "id": 19,
          "num": 19,
          "text": "Die Schüler der Glattal-Schule in Zürich möchten nach Berlin fahren. Wegen der Entfernung kommt aber eine Bahnreise für sie nicht in Frage.",
          "answer": "h"
        }
      ]
    },
    {
      "id": 4,
      "title": "Teil 4",
      "time": 15,
      "instructions": "Lesen Sie die Texte 20 bis 26. Wählen Sie: Ist die Person für eine Geldstrafe wegen Schulschwänzen? (schwänzen = trotz Schulpflicht nicht zur Schule gehen)",
      "situationContext": "In einer Zeitung lesen Sie Kommentare zu einem Artikel über die Idee, dass Schüler, die unerlaubt in der Schule fehlen, eine Geldstrafe von 440 Euro bekommen sollen.",
      "example": {
        "id": 0,
        "who": "Hartmuth, 41, Cham",
        "text": "Warum nur € 440,- Strafe? Heißt es nicht Schulpflicht? Bekanntlich ist Pflicht doch verpflichtend, etwas, was man machen muss! Wer der Pflicht nicht nachkommt, muss bestraft werden - ohne Wenn und Aber!",
        "answer": "ja"
      },
      "letters": [
        {
          "id": 20,
          "num": 20,
          "who": "Steffi, 52, Schwyz",
          "text": "Das kann nicht möglich sein, weil Kinder unter 14 Jahren generell nicht vom Staat bestraft werden können. Den Eltern wird man nachweisen und beweisen müssen, dass sie die Kinder nicht gezwungen haben, in die Schule zu gehen. Das ist alles sehr kompliziert. Ich meine, eine Strafe muss einfach und direkt sein, in diesem Fall bringen Geldstrafen gar nichts.",
          "answer": "nein"
        },
        {
          "id": 21,
          "num": 21,
          "who": "Robert, 20, Gmunden",
          "text": "Grundsätzlich geht es hier um die ersten neun Schuljahre. Sie fallen unter die Schulpflicht, welche von Maria Theresia eingeführt wurde. Ob sich jemand durch Schulschwänzen die Matura verbaut, ist seine Sache, aber für diese Schüler gleich eine Strafe zu verlangen, finde ich auch wieder zu extrem. Könnte es da nicht eine bessere Methode geben? Sollte man die Schüler nicht lieber mehr motivieren statt bestrafen?",
          "answer": "nein"
        },
        {
          "id": 22,
          "num": 22,
          "who": "Martina, 35, Villach",
          "text": "Warum sollen die Eltern bestraft werden, wenn die Jugendlichen hinter ihrem Rücken schwänzen?? Ich selbst habe in der 7. und 8. Klasse Gymnasium auch sehr oft geschwänzt und die Matura trotzdem geschafft. Geldstrafen gegen die Eltern bringen gar nichts. Die Jugendlichen sollten selbst mit „Hilfsdiensten“ bestraft werden: z. B. Straßenkehren oder Parks sauber machen. Das würde in meinen Augen mehr Wirkung haben als alles andere!",
          "answer": "nein"
        },
        {
          "id": 23,
          "num": 23,
          "who": "Konrad, 33, Interlaken",
          "text": "Hat jemand eine Vorstellung, wie viel 75.000 nichtstuende junge Menschen unser Sozialsystem kosten? Schon allein aus diesem Grund sind solche Strafen absolut gerechtfertigt. Ich wäre da nicht so zimperlich mit den Herrschaften Schulschwänzern und deren Eltern.",
          "answer": "ja"
        },
        {
          "id": 24,
          "num": 24,
          "who": "Zwantje, 16, Leipzig",
          "text": "Das kann doch wohl nicht ernst gemeint sein. Ein Schüler muss doch ab und zu mal schwänzen, sonst finden alle ihn langweilig. Ich verstehe nicht, warum sich da die Politiker mit ihren Gesetzen einmischen müssen. Das geht sie doch gar nichts an. Das ist ein Thema für die Lehrer, die Schüler und die Eltern, nicht für die Gesetzgeber.",
          "answer": "nein"
        },
        {
          "id": 25,
          "num": 25,
          "who": "Christian, 29, Rotenburg",
          "text": "Das ist eine Maßnahme, die alle aufwecken wird. Wir können doch als Gesellschaft nicht zusehen, wie wichtige Regeln missachtet werden. Ich bin sicher, dass die Schüler dann von zu Hause auch Druck bekommen, immer in die Schule zu gehen. Wenn junge Leute schon in der Schule anfangen, sich nicht an Regeln zu halten, werden sie später auch zu einem Problem für die Gesellschaft, deshalb ist es richtig, früh etwas dagegen zu unternehmen.",
          "answer": "ja"
        },
        {
          "id": 26,
          "num": 26,
          "who": "Ole, 17, Dortmund",
          "text": "In meiner Schule gibt es Leute, die es mit dem Schwänzen wirklich übertreiben. Die driften total ab. Keiner kann die mehr kontrollieren, die Eltern nicht, die Lehrer nicht, keiner. Ich kann mir aber vorstellen, dass so eine Strafe sie zum Nachdenken zwingen würde. Das wäre doch gut, denn dann würden sie vielleicht den Weg zurück in die Schule finden.",
          "answer": "ja"
        }
      ]
    },
    {
      "id": 5,
      "title": "Teil 5",
      "time": 10,
      "instructions": "Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
      "situationContext": "Sie informieren sich über die Garantieleistungen und -bedingungen für einen PC, den Sie gekauft haben.",
      "articles": [
        {
          "id": 1,
          "title": "Garantieleistung / Garantiebedingungen",
          "body": [
            "Nachstehende Regelungen gelten für von uns gelieferte PC-Systeme:",
            "1) Wird das Gerät in der von Ihnen ausgewählten Garantiezeit (36 oder 60 Monaten) ab Kaufdatum aufgrund von Fabrikations- oder Materialfehlern schadhaft, so beheben wir diesen Fehler ohne Berechnung gemäß den nachfolgenden Bedingungen.",
            "2) Die Beseitigung des Fehlers erfolgt nach Wahl des Käufers durch Reparatur oder Umtausch. Alte Teile und Geräte gehen in unser Eigentum über.",
            "3) Das Gerät wird zum Zwecke der Fehlerbeseitigung durch ein von uns beauftragtes Transportunternehmen kostenfrei abgeholt. Das System muss versandbereit verpackt bereitstehen. Bei fehlendem Verpackungsmaterial stellen wir dies zur Verfügung. Die Abholung erfolgt werktags (Mo.-Fr.) zwischen 8.00 Uhr und 18.00 Uhr.",
            "4) Die Garantie gilt nicht für:\na) Schäden und Verluste, die durch das Gerät oder seinen Gebrauch entstehen, sowie Schäden, die auf lokale Verhältnisse, wie Fehler in der Installation, Brand, Blitzschlag, äußere Gewalteinwirkung, Flüssigkeit, Tabakrauch, Ablagen bildende Gase (z. B. Kunstnebel, Insektenspray) etc. zurückzuführen sind,\nb) Schäden durch Eingriffe von Personen, die von uns hierzu nicht ermächtigt sind,\nc) Schäden durch Betreiben des Prozessors oder anderer Computer-Bauteile (Hardware-Komponenten) in einer höheren Taktfrequenz, als vom Hersteller spezifiziert (Übertakten),\nd) Schäden durch Nichtbeachtung der Bedienungsanleitung, z. B. Anschluss an eine falsche Netzspannung oder Stromart, Schäden durch fahrlässige Behandlung oder Missbrauch,\ne) Geräte, die gewerblich genutzt werden.",
            "5) Tritt ein Fehler auf, wenden Sie sich bitte innerhalb der Frist von 36/60 Monaten ab Kaufdatum an uns: 05346 8738024 oder info@pc-service.com. Garantie gültig in: Deutschland, Österreich."
          ]
        }
      ],
      "questions": [
        {
          "id": 27,
          "num": 27,
          "type": "mcq",
          "text": "Die Garantie gilt nicht, wenn ...",
          "options": [
            "man den Verlust des PCs zu spät bei der Firma meldet.",
            "der Schaden entstanden ist, weil man sich nicht an die Bedienungsanleitung gehalten hat.",
            "der PC älter als ein Jahr ist."
          ],
          "answer": 1
        },
        {
          "id": 28,
          "num": 28,
          "type": "mcq",
          "text": "Geräte mit Fehlern ...",
          "options": [
            "werden umsonst zur Reparatur abgeholt.",
            "müssen vom Käufer zum Verkaufsort gebracht werden.",
            "können zu bestimmten Zeiten am Verkaufsort abgegeben werden."
          ],
          "answer": 0
        },
        {
          "id": 29,
          "num": 29,
          "type": "mcq",
          "text": "Wenn ein Fehler entsteht, ...",
          "options": [
            "haben Kunden überall auf der Welt ein Recht auf die Garantieleistungen.",
            "kann man bei der Firma anrufen oder eine E-Mail schreiben.",
            "muss man sich innerhalb von 30 Tagen bei der Firma melden."
          ],
          "answer": 1
        },
        {
          "id": 30,
          "num": 30,
          "type": "mcq",
          "text": "Die Garantiezeit ...",
          "options": [
            "beträgt je nach Preis des PCs 36 oder 60 Monate.",
            "gilt für alle Schäden des gekauften Geräts.",
            "kann der Käufer auswählen."
          ],
          "answer": 2
        }
      ]
    },
    {
      "id": 6,
      "title": "Hören",
      "badge": "Modul Hören",
      "isHoren": true,
      "time": 40,
      "instructions": "Das Modul Hören besteht aus vier Teilen. Sie hören verschiedene Texte und lösen dazu Aufgaben.",
      "audioSrc": "audio/modellsatz-26-hoeren.mp3",
      "audioFallbacks": [
        "audio/modellsatz-26-hoeren.mp3"
      ],
      "audioChapters": [
        {
          "time": 0,
          "start": 0,
          "end": 37,
          "label": "00:00 Teil 1 (Beispiel · 2x)",
          "part": 1,
          "title": "Teil 1 · Beispiel (2x hören)"
        },
        {
          "time": 37,
          "start": 37,
          "end": 665,
          "label": "00:37 Teil 1 (Texte 1–5 · 2x)",
          "part": 1,
          "title": "Teil 1 · Fünf kurze Texte (2x hören)"
        },
        {
          "time": 665,
          "start": 665,
          "end": 947,
          "label": "11:05 Teil 2 (Freizeitpark Heide-Park · 1x)",
          "part": 2,
          "title": "Teil 2 · Informationen Heide-Park (1x hören)"
        },
        {
          "time": 947,
          "start": 947,
          "end": 1186,
          "label": "15:47 Teil 3 (Gespräch: Beruf & Studium · 1x)",
          "part": 3,
          "title": "Teil 3 · Gespräch an Bushaltestelle: Julian & Emma (1x hören)"
        },
        {
          "time": 1186,
          "start": 1186,
          "end": 1648,
          "label": "19:46 Teil 4 (Diskussion: Biolebensmittel · 1. Durchgang)",
          "part": 4,
          "title": "Teil 4 · Radiodiskussion: Biolebensmittel direkt vom Bauern (1. Durchgang)"
        },
        {
          "time": 1648,
          "start": 1648,
          "end": 2035,
          "label": "27:28 Teil 4 (Diskussion: Biolebensmittel · 2. Durchgang)",
          "part": 4,
          "title": "Teil 4 · Radiodiskussion: Biolebensmittel direkt vom Bauern (2. Durchgang)"
        }
      ],
      "horenSections": [
        {
          "id": 1,
          "partNumber": 1,
          "title": "Teil 1: Fünf kurze Texte",
          "badge": "Aufgaben 1 bis 10",
          "desc": "Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben.",
          "intro": "Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung.",
          "context": "Alltagssituationen: Radio-Sendung „Rüstig auch im Alter“, Telefonauskunft Landestheater, Mobilbox-Nachricht von Clara, Wetterbericht, Mondkalender.",
          "example": {
            "ex01": {
              "num": "01",
              "text": "Sie hören Informationen über Ausbildungsberufe.",
              "type": "tf",
              "answer": "falsch"
            },
            "ex02": {
              "num": "02",
              "text": "Was erfahren die Zuhörer?",
              "type": "mcq",
              "options": [
                "Wie man sich an der Uni bewirbt.",
                "Ob man studieren und gleichzeitig arbeiten kann.",
                "Wann man sich an der Uni anmeldet."
              ],
              "answer": 1
            }
          },
          "questions": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        {
          "id": 2,
          "partNumber": 2,
          "title": "Teil 2: Freizeitpark Heide-Park",
          "badge": "Aufgaben 11 bis 15",
          "desc": "Sie hören einen Text einmal. Dazu lösen Sie fünf Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
          "intro": "Sie hören nun einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c. Lesen Sie jetzt die Aufgaben 11 bis 15. Dazu haben Sie 60 Sekunden Zeit.",
          "context": "Sie hören Informationen zu Beginn Ihres Besuches im Freizeitpark Heide-Park.",
          "questions": [11, 12, 13, 14, 15]
        },
        {
          "id": 3,
          "partNumber": 3,
          "title": "Teil 3: Gespräch an der Bushaltestelle",
          "badge": "Aufgaben 16 bis 22",
          "desc": "Sie hören ein Gespräch einmal. Dazu lösen Sie sieben Aufgaben. Wählen Sie: Sind die Aussagen richtig oder falsch?",
          "intro": "Sie hören nun ein Gespräch. Sie hören das Gespräch einmal. Dazu lösen Sie sieben Aufgaben. Wählen Sie: Sind die Aussagen richtig oder falsch? Lesen Sie jetzt die Aufgaben 16 bis 22. Dazu haben Sie 60 Sekunden Zeit.",
          "context": "Sie sind an einer Bushaltestelle und hören, wie sich ein junger Mann und eine junge Frau über Beruf und Studium unterhalten.",
          "questions": [16, 17, 18, 19, 20, 21, 22]
        },
        {
          "id": 4,
          "partNumber": 4,
          "title": "Teil 4: Radiodiskussion „Biolebensmittel direkt vom Bauern“",
          "badge": "Aufgaben 23 bis 30",
          "desc": "Sie hören eine Diskussion zweimal. Dazu lösen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was?",
          "intro": "Sie hören nun eine Diskussion. Sie hören die Diskussion zweimal. Dazu lösen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Lesen Sie jetzt die Aussagen 23 bis 30. Dazu haben Sie 60 Sekunden Zeit.",
          "context": "Der Moderator der Radiosendung „Umwelt live“ diskutiert mit Flavia und Christina zum Thema „Biolebensmittel direkt vom Bauern“.",
          "speakers": [
            "Moderator",
            "Flavia",
            "Christina"
          ],
          "example": {
            "num": "0",
            "text": "Von kleineren Umweltinitiativen erfährt die Öffentlichkeit selten.",
            "options": [
              "Moderator",
              "Flavia",
              "Christina"
            ],
            "answer": 0
          },
          "questions": [23, 24, 25, 26, 27, 28, 29, 30]
        }
      ],
      "questions": [
        {
          "id": "h1",
          "num": 1,
          "type": "tf",
          "text": "Sie hören ein Gesundheitsmagazin.",
          "answer": "richtig",
          "audioStart": 37,
          "teilPart": 1,
          "textNum": 1
        },
        {
          "id": "h2",
          "num": 2,
          "type": "mcq",
          "text": "Die Teilnehmer des Testversuches waren ...",
          "options": [
            "über 90 Jahre alt.",
            "nicht älter als 83 Jahre.",
            "10 Jahre alt."
          ],
          "answer": 1,
          "audioStart": 37,
          "teilPart": 1,
          "textNum": 1
        },
        {
          "id": "h3",
          "num": 3,
          "type": "tf",
          "text": "Im Theater gibt es jeden Tag eine Vorstellung.",
          "answer": "falsch",
          "audioStart": 119,
          "teilPart": 1,
          "textNum": 2
        },
        {
          "id": "h4",
          "num": 4,
          "type": "mcq",
          "text": "An welchem Tag gibt es eine Vorstellung am Nachmittag?",
          "options": [
            "Am Freitag.",
            "Am Samstag.",
            "Am Sonntag."
          ],
          "answer": 2,
          "audioStart": 119,
          "teilPart": 1,
          "textNum": 2
        },
        {
          "id": "h5",
          "num": 5,
          "type": "tf",
          "text": "Elise und Clara wollen zusammen verreisen.",
          "answer": "richtig",
          "audioStart": 218,
          "teilPart": 1,
          "textNum": 3
        },
        {
          "id": "h6",
          "num": 6,
          "type": "mcq",
          "text": "Welche Unterkunft findet Clara am günstigsten?",
          "options": [
            "Ein Appartement.",
            "Eine Ferienwohnung.",
            "Ein Ferienhaus."
          ],
          "answer": 2,
          "audioStart": 218,
          "teilPart": 1,
          "textNum": 3
        },
        {
          "id": "h7",
          "num": 7,
          "type": "tf",
          "text": "Das Wetter wird am Wochenende schlechter.",
          "answer": "falsch",
          "audioStart": 337,
          "teilPart": 1,
          "textNum": 4
        },
        {
          "id": "h8",
          "num": 8,
          "type": "mcq",
          "text": "Vorausgesagt werden ...",
          "options": [
            "dichte Wolken.",
            "starke Schneefälle.",
            "Temperaturen über 5 Grad."
          ],
          "answer": 0,
          "audioStart": 337,
          "teilPart": 1,
          "textNum": 4
        },
        {
          "id": "h9",
          "num": 9,
          "type": "tf",
          "text": "Sie erfahren, wie viele Stunden der Mond scheint.",
          "answer": "falsch",
          "audioStart": 432,
          "teilPart": 1,
          "textNum": 5
        },
        {
          "id": "h10",
          "num": 10,
          "type": "mcq",
          "text": "Heute ...",
          "options": [
            "hat man den ganzen Tag gute Laune.",
            "macht der Beruf keine Mühe.",
            "soll man vorsichtig Sport treiben."
          ],
          "answer": 2,
          "audioStart": 432,
          "teilPart": 1,
          "textNum": 5
        },
        {
          "id": "h11",
          "num": 11,
          "type": "mcq",
          "text": "Der Freizeitpark liegt in ...",
          "options": [
            "Heidelberg.",
            "Lüneburg.",
            "Norddeutschland."
          ],
          "answer": 2,
          "audioStart": 665,
          "teilPart": 2
        },
        {
          "id": "h12",
          "num": 12,
          "type": "mcq",
          "text": "Für wie viele Attraktionen kann man die Jahreskarte benutzen?",
          "options": [
            "Für zehn.",
            "Für zwölf.",
            "Für fünfzehn."
          ],
          "answer": 2,
          "audioStart": 665,
          "teilPart": 2
        },
        {
          "id": "h13",
          "num": 13,
          "type": "mcq",
          "text": "Wie alt müssen Kinder mindestens sein, wenn sie in den kleinen Schiffen mitfahren wollen?",
          "options": [
            "Eineinhalb Jahre.",
            "Vier Jahre.",
            "Acht Jahre."
          ],
          "answer": 1,
          "audioStart": 665,
          "teilPart": 2
        },
        {
          "id": "h14",
          "num": 14,
          "type": "mcq",
          "text": "Hunde ...",
          "options": [
            "sind in den Fahrkabinen nicht erlaubt.",
            "bekommen einen speziellen Führer.",
            "müssen in speziellen Shops warten."
          ],
          "answer": 0,
          "audioStart": 665,
          "teilPart": 2
        },
        {
          "id": "h15",
          "num": 15,
          "type": "mcq",
          "text": "Wie schnell fährt die Bobbahn?",
          "options": [
            "27 Stundenkilometer.",
            "166 Stundenkilometer.",
            "50 Stundenkilometer."
          ],
          "answer": 2,
          "audioStart": 665,
          "teilPart": 2
        },
        {
          "id": "h16",
          "num": 16,
          "type": "tf",
          "text": "Emma und Julian sind im selben Sportverein.",
          "answer": "richtig",
          "audioStart": 947,
          "teilPart": 3
        },
        {
          "id": "h17",
          "num": 17,
          "type": "tf",
          "text": "Emma ist von ihrer Ausbildung enttäuscht.",
          "answer": "falsch",
          "audioStart": 947,
          "teilPart": 3
        },
        {
          "id": "h18",
          "num": 18,
          "type": "tf",
          "text": "Emma war in der Schule keine gute Schülerin.",
          "answer": "richtig",
          "audioStart": 947,
          "teilPart": 3
        },
        {
          "id": "h19",
          "num": 19,
          "type": "tf",
          "text": "Julian hat beim Abitur keine guten Noten bekommen.",
          "answer": "falsch",
          "audioStart": 947,
          "teilPart": 3
        },
        {
          "id": "h20",
          "num": 20,
          "type": "tf",
          "text": "Das Abitur ist leichter geworden.",
          "answer": "richtig",
          "audioStart": 947,
          "teilPart": 3
        },
        {
          "id": "h21",
          "num": 21,
          "type": "tf",
          "text": "Julian hat dieses Jahr keinen Studienplatz in Medizin bekommen.",
          "answer": "richtig",
          "audioStart": 947,
          "teilPart": 3
        },
        {
          "id": "h22",
          "num": 22,
          "type": "tf",
          "text": "Julian will erst später ein Praktikum in einem Krankenhaus machen.",
          "answer": "falsch",
          "audioStart": 947,
          "teilPart": 3
        },
        {
          "id": "h23",
          "num": 23,
          "type": "speaker",
          "text": "Frauen sind an der Lösung praktischer Probleme mehr interessiert als Männer.",
          "options": [
            "Moderator",
            "Flavia",
            "Christina"
          ],
          "answer": 2,
          "audioStart": 1186,
          "teilPart": 4
        },
        {
          "id": "h24",
          "num": 24,
          "type": "speaker",
          "text": "„Bio-Abo“ hilft Frauen, Zeit zu sparen.",
          "options": [
            "Moderator",
            "Flavia",
            "Christina"
          ],
          "answer": 1,
          "audioStart": 1186,
          "teilPart": 4
        },
        {
          "id": "h25",
          "num": 25,
          "type": "speaker",
          "text": "Für die meisten Menschen sind Biolebensmittel noch kein wichtiges Thema.",
          "options": [
            "Moderator",
            "Flavia",
            "Christina"
          ],
          "answer": 0,
          "audioStart": 1186,
          "teilPart": 4
        },
        {
          "id": "h26",
          "num": 26,
          "type": "speaker",
          "text": "Bioprodukte sind billiger geworden.",
          "options": [
            "Moderator",
            "Flavia",
            "Christina"
          ],
          "answer": 2,
          "audioStart": 1186,
          "teilPart": 4
        },
        {
          "id": "h27",
          "num": 27,
          "type": "speaker",
          "text": "Bestimmte Gemüsearten aus der Region Bern sind vielen unbekannt.",
          "options": [
            "Moderator",
            "Flavia",
            "Christina"
          ],
          "answer": 1,
          "audioStart": 1186,
          "teilPart": 4
        },
        {
          "id": "h28",
          "num": 28,
          "type": "speaker",
          "text": "Wer etwas für die Umwelt tun möchte, sollte regionale Produkte konsumieren.",
          "options": [
            "Moderator",
            "Flavia",
            "Christina"
          ],
          "answer": 2,
          "audioStart": 1186,
          "teilPart": 4
        },
        {
          "id": "h29",
          "num": 29,
          "type": "speaker",
          "text": "Dass es eine Konkurrenz gibt, ist positiv.",
          "options": [
            "Moderator",
            "Flavia",
            "Christina"
          ],
          "answer": 1,
          "audioStart": 1186,
          "teilPart": 4
        },
        {
          "id": "h30",
          "num": 30,
          "type": "speaker",
          "text": "Kleine Firmen sind für die Umwelt besser.",
          "options": [
            "Moderator",
            "Flavia",
            "Christina"
          ],
          "answer": 2,
          "audioStart": 1186,
          "teilPart": 4
        }
      ]
    }
  ]
}
