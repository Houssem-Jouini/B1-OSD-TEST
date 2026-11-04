#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generator for data/tests/modellsatz-21.json (Modelltest 15 — Hueber Zertifikat B1)
Includes all 6 parts, authentic text from EX6-OSD.pdf, verified answers,
complete 3-language explanations (DE/FR/AR), and full translations dictionary.
"""

import json
import os

test_data = {
  "id": "modellsatz-21",
  "title": "Modelltest 15 — Hueber Zertifikat B1",
  "badge": "Modelltest 15",
  "examTitle": "Goethe / ÖSD B1 Prüfungssimulation — Modelltest 15",
  "examSub": "Lesen (5 Teile) & Hören (4 Teile) · Modelltest 15 (Hueber)",
  "durationMinutes": 65,
  "parts": [
    {
      "id": 1,
      "title": "Teil 1",
      "time": 10,
      "instructions": "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. Wählen Sie: Sind die Aussagen richtig oder falsch?",
      "articles": [
        {
          "heading": "AloisBlog.at",
          "sub": "14. Mai",
          "body": [
            "Ich möchte heute von meinem gestrigen Erlebnis berichten, das mich sehr beeindruckt hat. Vor ein paar Tagen lernte ich eine ältere Dame, Frau Mohlau, in der Straßenbahn kennen. Ich bot ihr meinen Sitzplatz an und so kamen wir ins Gespräch. Es stellte sich heraus, dass sie an derselben Station ausstieg wie ich. Sie wohnt nämlich, seit sie in Pension gegangen ist, im Generationen-Wohnheim bei uns in der Nähe. Beim Abschied lud sie mich mit Familie zum Kaffeetrinken zu sich ein.",
            "Gestern bin ich also mit Gertrud und den Buben hin. Frau Mohlau wohnt in einem geschmackvoll eingerichteten Appartement im Parterre. In den Wohnungen nebenan leben zwei Lehrlinge und eine alleinerziehende Mutter. Zum Kaffee gab es selbstgemachte Topfentorte. Wir saßen gemütlich beisammen und sie erzählte uns vom Leben im Wohnheim. Frau Mohlau traf die Entscheidung, dorthin zu ziehen, weil sie hier betreut wird, wenn sie es braucht, ohne ihre Selbstständigkeit aufgeben zu müssen. Doch der größte Vorteil ist zweifellos das Zusammenleben der verschiedenen Generationen. Ein Beispiel hierzu: Da Frau Mohlau noch gesundheitlich gut drauf ist und viel Zeit zur Verfügung hat, passt sie zweimal die Woche auf das Kind ihrer Nachbarin auf. Das sei ihr keineswegs zu anstrengend, es mache ihr große Freude, „Großmutter“ zu sein. So sei sie nützlich und das gebe ihrem Leben Sinn.",
            "Nach dem Kaffeetrinken schauten wir uns dann ein wenig die Anlage an. Den Buben gefiel besonders der Garten mit dem Spielplatz im hinteren Teil des Wohnheims. Es waren auch andere Kinder da, mit denen sie herumtollen konnten, während wir auf einer Bank saßen. Frau Mohlau erzählte uns, dass das Zusammenleben hier nicht nur in den gemeinschaftlich genutzten Räumen und Grünflächen stattfindet. Regelmäßig werden auch gemeinsame Ausflüge organisiert. Der letzte ging ins Burgenland. Sie selbst nimmt zurzeit an einer Kochgruppe teil, wo Jung und Alt voneinander lernen.",
            "Ich hatte den Eindruck, eine sehr lebensfrohe, aktive Frau vor mir zu haben, die gar nicht meiner bisherigen Vorstellung von „alt“ entsprach. Liegt das an der Wohnform?? Am Sonntag kommt Frau Mohlau zum Mittagessen zu uns. Wir freuen uns alle schon drauf. Euer Alois"
          ]
        }
      ],
      "example": {
        "text": "Alois lernte Frau Mohlau gestern kennen.",
        "answer": "falsch"
      },
      "questions": [
        {
          "id": 1,
          "type": "tf",
          "text": "Frau Mohlau wohnt nicht weit von Alois entfernt.",
          "answer": "richtig",
          "num": 1
        },
        {
          "id": 2,
          "type": "tf",
          "text": "In Frau Mohlaus Wohnung wohnt auch eine Mutter mit ihrem Kind.",
          "answer": "falsch",
          "num": 2
        },
        {
          "id": 3,
          "type": "tf",
          "text": "Der alten Dame ist es wichtig, selbstständig zu leben.",
          "answer": "richtig",
          "num": 3
        },
        {
          "id": 4,
          "type": "tf",
          "text": "Frau Mohlau kümmert sich regelmäßig um das Kind ihrer Nachbarin.",
          "answer": "richtig",
          "num": 4
        },
        {
          "id": 5,
          "type": "tf",
          "text": "Den Spielplatz des Wohnheimes benutzen nur seine Bewohner.",
          "answer": "falsch",
          "num": 5
        },
        {
          "id": 6,
          "type": "tf",
          "text": "Frau Mohlau nahm an einem Ausflug ins Burgenland teil.",
          "answer": "falsch",
          "num": 6
        }
      ]
    },
    {
      "id": 2,
      "title": "Teil 2",
      "time": 20,
      "instructions": "Lesen Sie den Text aus der Presse und die Aufgaben 7 bis 9 dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
      "articles": [
        {
          "heading": "Der Kölner Dom",
          "sub": "aus einem deutschen Magazin",
          "body": [
            "Der Kölner Dom bleibt nach wie vor die beliebteste Sehenswürdigkeit der Deutschen. Das ist das Ergebnis einer Online-Umfrage des Deutschen Tourismusverbandes und des Städteportals meinestadt.de.",
            "In der Umfrage unter 1600 Internetnutzern konnte Deutschlands größte Kirche mit 15 Prozent der Stimmen bereits zum vierten Mal diesen Platz klar halten.",
            "Von Platz drei auf Platz zwei verbesserte sich die Dresdner Frauenkirche mit 7,1 Prozent, das Brandenburger Tor in der Hauptstadt sank mit 6,6 Prozent um einen Rang auf Platz drei. Auf Platz vier und fünf im Ranking folgen Schloss Neuschwanstein und der Dresdner Zwinger.",
            "Erstmals in den Top 15 der beliebtesten Sehenswürdigkeiten sind drei Attraktionen mit Geschichte: Die Zeche Zollverein (Essen) kommt im Jahr der Kulturhauptstadt 2010 auf Platz zwölf, die Residenz Würzburg und das Schweriner Schloss teilen sich Platz 14. Nach vier Jahren landeten die Wuppertaler Schwebebahn (Platz sieben) und der Berliner Reichstag (Platz neun) erneut in den Top 15.",
            "Sehenswürdigkeiten stehen bei den Deutschen allgemein hoch im Kurs: 82 Prozent der Umfrageteilnehmer bestätigten großes Interesse an touristischen und kulturellen Attraktionen. Dabei assoziieren sie vor allem historische Denkmäler, imposante Schlösser sowie Burgen und Kirchen. 90 Prozent der Befragten haben ihre Lieblingsattraktion bereits einmal besucht."
          ]
        }
      ],
      "example": {
        "text": "Die Deutschen ...",
        "options": [
          "sehen sich gern touristische Attraktionen an.",
          "interessieren sich relativ wenig für Kultur.",
          "lieben besonders Städte mit Sehenswürdigkeiten."
        ],
        "answer": 0
      },
      "questions": [
        {
          "id": 7,
          "type": "mcq",
          "text": "In diesem Text geht es darum, ...",
          "options": [
            "welche Sehenswürdigkeiten es in Deutschland gibt.",
            "welche deutschen Sehenswürdigkeiten die Deutschen am meisten mögen.",
            "welche Sehenswürdigkeiten Touristen in Deutschland unbedingt besichtigen sollten."
          ],
          "answer": 1,
          "num": 7
        },
        {
          "id": 8,
          "type": "mcq",
          "text": "Der Kölner Dom ...",
          "options": [
            "ist schon mehrere Jahre lang die beliebteste Sehenswürdigkeit Deutschlands.",
            "war bei 1600 Befragten auf Platz eins.",
            "war 15% der Befragten bekannt."
          ],
          "answer": 0,
          "num": 8
        },
        {
          "id": 9,
          "type": "mcq",
          "text": "Berlin ...",
          "options": [
            "hat keine beliebten Sehenswürdigkeiten.",
            "wurde zur beliebtesten kulturellen Stadt Deutschlands gewählt.",
            "hat zwei Sehenswürdigkeiten unter den Top 15."
          ],
          "answer": 2,
          "num": 9
        }
      ],
      "instructions2": "Lesen Sie den Text aus der Presse und die Aufgaben 10 bis 12 dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
      "articles2": [
        {
          "heading": "Johnny, der Paukerschreck",
          "sub": "aus einer deutschen Zeitung",
          "body": [
            "„Wir sind ein Haufen angehender junger Piraten und haben Probleme bei einem Streit mit den Lehrern. Wir fänden es ganz toll, wenn Sie kommen und uns helfen könnten!“ Mit diesen Worten wandte sich eine Schülerin aus dem Londoner Stadtteil Greenwich an Johnny Depp. Als großer Fan seiner Piratenfilme „Fluch der Karibik“ bat die neunjährige Beatrice Captain Jack Sparrow, Depps Alter Ego aus der Filmreihe, um Verstärkung. Mit ihren Mitschülern plante sie eine „Meuterei“, also einen Piraten-Streik, damit möglichst viele Unterrichtsstunden nicht stattfinden würden.",
            "Der Schauspieler solle am besten als Pirat verkleidet in die Schule kommen, wünschte sich die Schülerin. Sie konnte ihr Glück kaum glauben, als ihr Wunsch tatsächlich in Erfüllung ging: Als Kapitän Jack Sparrow erschien der Hollywood-Star in der Londoner Grundschule und sang und tanzte mit vier Schauspielkollegen zu Piratenliedern. Zuvor begrüßten die Schüler den Star mit großem Applaus und ihrem eigenen Song, heißt es auf der Webseite der Schule.",
            "Zu der geplanten Meuterei kam es am Ende dann doch nicht – vielmehr zu passivem Widerstand. Der Schauspieler sorgte für so viel Aufregung, dass ein normaler Schulunterricht an dem Tag unmöglich wurde."
          ]
        }
      ],
      "questions2": [
        {
          "id": 10,
          "type": "mcq",
          "text": "In diesem Text geht es darum, ...",
          "options": [
            "dass Johnny Depp in einem Piratenfilm mitgespielt hat.",
            "dass ein Hollywood-Star eine Schule besucht hat.",
            "dass Schüler einen Piratenfilm sehen wollten."
          ],
          "answer": 1,
          "num": 10
        },
        {
          "id": 11,
          "type": "mcq",
          "text": "Johnny Depp ...",
          "options": [
            "antwortete auf den Brief der Schülerin.",
            "schrieb auf der Webseite der Schule.",
            "sang und tanzte für die Schüler."
          ],
          "answer": 2,
          "num": 11
        },
        {
          "id": 12,
          "type": "mcq",
          "text": "Beatrice ...",
          "options": [
            "wollte keinen Unterricht machen.",
            "wollte einen wirklichen Piraten sehen.",
            "war erschrocken, als Johnny Depp kam."
          ],
          "answer": 0,
          "num": 12
        }
      ]
    },
    {
      "id": 3,
      "title": "Teil 3",
      "time": 10,
      "instructions": "Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis j aus verschiedenen deutschsprachigen Medien. Wählen Sie: Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Die Anzeige aus dem Beispiel können Sie nicht mehr verwenden. Für eine Situation gibt es keine passende Anzeige. In diesem Fall schreiben Sie 0.",
      "situationsIntro": "Sie suchen nach Angeboten für Freunde und Bekannte, die während ihres Aufenthalts an der Ostsee Verschiedenes unternehmen möchten.",
      "example": {
        "text": "Detlef macht im Oktober Urlaub an der Ostsee und sucht für sich und seine kleinen Kinder Attraktionen, die umsonst sind.",
        "answer": "d"
      },
      "adsFormatted": [
        {
          "code": "a",
          "title": "Naturkundemuseum Barther Bodden",
          "text": "Ostseeküste – Landschaften und Tiere – Meerestiere der Ostsee. April bis Oktober täglich 10–18 Uhr, November bis März Mi–So 11–16 Uhr. Der Besuch des Nationalparks ist im Eintrittspreis enthalten. 18563 Barth, Tel.: +49 (0) 2109-876, www.naturkunde-barth.de",
          "html": "<strong>Naturkundemuseum Barther Bodden</strong><br>Ostseeküste – Landschaften und Tiere – Meerestiere der Ostsee<br>• April – Oktober: täglich 10–18 Uhr<br>• November – März: Mi – So 11–16 Uhr<br><em>Der Besuch des Nationalparks ist im Eintrittspreis enthalten.</em><br>18563 Barth · Tel.: +49 (0) 2109-876 · www.naturkunde-barth.de",
          "color": "#ebf5fb",
          "hasPin": True
        },
        {
          "code": "b",
          "title": "Über 90 Kites & Boards aus unserer Schulung müssen raus!",
          "text": "Ab 1. September Lieblingspreise auf ALLES! Alle unsere gebrauchten Kites & Boards weisen leichte Gebrauchsspuren auf, wurden ca. 4 Wochen in unseren Schulungen eingesetzt. Persönliches Erscheinen sichert das beste Schnäppchen! Tel.: 042 645 37 345, www.kite-club.com",
          "html": "<strong>Über 90 Kites & Boards müssen raus!</strong><br>Ab 1. September Lieblingspreise auf ALLES!<br>Gebrauchte Kites & Boards (ca. 4 Wochen im Schulungseinsatz, leichte Gebrauchsspuren).<br><em>Persönliches Erscheinen sichert das beste Schnäppchen!</em><br>Tel.: 042 645 37 345 · www.kite-club.com",
          "color": "#fef9e7",
          "hasPin": False
        },
        {
          "code": "c",
          "title": "DARWINEUM · ZOO ROSTOCK",
          "text": "Im Zoo Rostock – dem größten Zoo an der deutschen Ostseeküste – begegnen Sie 4.500 Tieren in 320 Arten aus aller Welt und erleben das Abenteuer Evolution im DARWINEUM. Täglich ab 9 Uhr geöffnet. www.zoo-rostock.de",
          "html": "<strong>DARWINEUM im Zoo Rostock</strong><br>Größter Zoo an der deutschen Ostseeküste: 4.500 Tiere in 320 Arten aus aller Welt & Abenteuer Evolution im DARWINEUM.<br><em>Täglich ab 9 Uhr geöffnet.</em><br>www.zoo-rostock.de",
          "color": "#e8f8f5",
          "hasPin": True
        },
        {
          "code": "d",
          "title": "Warnemünder Sandwelt · Eintritt frei!",
          "text": "Bewundern Sie von April bis Oktober einzigartige Sandskulpturen am Ostseestrand. Im vergangenen Jahr sahen mehr als 100.000 Besucher die fünf Meter hohen Kunstwerke aus über 400 Tonnen Sand. Auch die Kleinen kommen nicht zu kurz auf unseren kostenlosen Spielplätzen! Warnemünde, Pier 7. Täglich von 8.00 Uhr bis Sonnenuntergang.",
          "html": "<strong>Warnemünder Sandwelt · Eintritt frei!</strong><br>April bis Oktober: 5 Meter hohe Sandskulpturen aus über 400 Tonnen Sand am Ostseestrand.<br><em>Kostenlose Spielplätze für die Kleinen!</em><br>Warnemünde, Pier 7 · Täglich 8.00 Uhr bis Sonnenuntergang",
          "color": "#fef5e7",
          "hasPin": False
        },
        {
          "code": "e",
          "title": "Rügen im Herbst erleben ...",
          "text": "Bei geführten Wanderungen in fachkundiger Begleitung erleben Sie Natur, Geschichte und Sagenwelt der Insel hautnah. Bis 31. Oktober. Informationen unter: www.ruegen.de. Ermäßigungen für Familien und Kleingruppen.",
          "html": "<strong>Rügen im Herbst erleben ...</strong><br>Geführte Wanderungen mit fachkundiger Begleitung: Natur, Geschichte & Sagenwelt der Insel hautnah erleben.<br><em>Bis 31. Oktober · Ermäßigungen für Familien & Kleingruppen</em><br>Infos unter: www.ruegen.de",
          "color": "#eaeded",
          "hasPin": True
        },
        {
          "code": "f",
          "title": "Verpassen Sie nicht unsere Hafenpartys!",
          "text": "Die Anläufe der größten Schiffe werden mit Live-Musik, Bühnenprogramm und einem spektakulären Höhenfeuerwerk gefeiert! Seien Sie dabei! Termine: 6. Mai, 4. Juni, 18. Juni, 8. Juli, 5. August, 3. September. Monitore informieren über alle Schiffsbewegungen in der Ostsee. Am Passagierkai 1 – 19129 Warnemünde.",
          "html": "<strong>Verpassen Sie nicht unsere Hafenpartys!</strong><br>Schiffsanläufe der größten Schiffe mit Live-Musik, Bühnenprogramm & Höhenfeuerwerk!<br>Termine: 6. Mai · 4. Juni · 18. Juni · 8. Juli · 5. Aug. · 3. Sept.<br><em>Monitore für Schiffsbewegungen in der Ostsee · Am Passagierkai 1, Warnemünde</em>",
          "color": "#f4ecf7",
          "hasPin": True
        },
        {
          "code": "g",
          "title": "Radeln auf der Nordsee-Insel Sylt?",
          "text": "Dann sind Sie beim Fahrradshop in Keitum richtig. Bekannt für seinen Kundendienst, den Service, das große Angebot an Leihrädern und die vernünftigen Preise. Schaun Sie einfach mal vorbei!",
          "html": "<strong>Radeln auf der Nordsee-Insel Sylt?</strong><br>Fahrradshop in Keitum: Große Auswahl an Leihrädern, top Kundendienst und faire Preise.<br><em>Schauen Sie einfach mal vorbei!</em>",
          "color": "#f9ebea",
          "hasPin": False
        },
        {
          "code": "h",
          "title": "Sie suchen ein Highlight für eine Feier? Chartern Sie uns.",
          "text": "Helikopter-Rundflüge über Rügen. Wählen Sie eine unserer verschiedenen Routen über die traumhafte Landschaft der Ostsee-Insel Rügen. Bei Wunsch auch Begrüßungscocktail mit Sekt. Buchungen & Infos: Tel. 0172-1000 343.",
          "html": "<strong>Highlight für eine Feier? Helikopter-Rundflüge über Rügen</strong><br>Traumhafte Routen über die Ostsee-Insel Rügen. Auf Wunsch Begrüßungscocktail mit Sekt.<br><em>Buchungen & Infos: Tel. 0172-1000 343</em>",
          "color": "#fdedec",
          "hasPin": True
        },
        {
          "code": "i",
          "title": "Hanse Sail · Traditionelle Schifffahrt",
          "text": "Verein zur Förderung traditioneller Schifffahrt in der Ostsee e.V. Tages-, Abend-, Kurzfahrten und Mehrtagesfahrten. Hotels und Pensionen in und um Rostock. Limousinen-Service, Kurier-Service, Stadtrundfahrten, Bustouren. www.hansesail.com",
          "html": "<strong>Hanse Sail Rostock</strong><br>Verein zur Förderung traditioneller Schifffahrt in der Ostsee e.V.<br>• Tages-, Abend-, Kurz- & Mehrtagesfahrten auf traditionellen Schiffen<br>• Unterkünfte, Stadtrundfahrten & Bustouren<br><em>www.hansesail.com</em>",
          "color": "#eaf2f8",
          "hasPin": True
        },
        {
          "code": "j",
          "title": "Season Spezial – Kiten",
          "text": "2 Tage Grundkurs und 3 Tage selbstständiges Kiten unter Aufsicht nur 245 €. Inklusive Leihausrüstung und Trainingsmaterial. Inklusive Spaß und gute Laune in der Gruppe mit BBQ, Movieabend, Ladies Night, Beachvolley-Turnier und vielem mehr. de-de.facebook.com/surfundkiteclub, Telefon Hotline 036 323 11 869",
          "html": "<strong>Season Spezial: Kitesurfen im Camp</strong><br>2 Tage Grundkurs + 3 Tage betreutes Kiten nur <strong>245 €</strong><br>• Inkl. Leihausrüstung & Trainingsmaterial<br>• Community & Fun: BBQ, Movieabend, Ladies Night & Beachvolleyball<br><em>Hotline: 036 323 11 869 · facebook.com/surfundkiteclub</em>",
          "color": "#fbfcfc",
          "hasPin": False
        }
      ],
      "questions": [
        {
          "id": 13,
          "type": "match",
          "text": "Mirjam und Sven sind Radelfans, möchten aber für ihren Aufenthalt an der Ostsee ihre eigenen Räder nicht mitnehmen.",
          "answer": "0",
          "num": 13
        },
        {
          "id": 14,
          "type": "match",
          "text": "Robert möchte im Urlaub Kitesurfen lernen und Leute kennenlernen.",
          "answer": "j",
          "num": 14
        },
        {
          "id": 15,
          "type": "match",
          "text": "Ehepaar Gerber fährt nach Rügen, um seinen Hochzeitstag, den 18. Juli, mit etwas ganz Besonderem zu feiern.",
          "answer": "h",
          "num": 15
        },
        {
          "id": 16,
          "type": "match",
          "text": "Frau Biber und ihre Freundin möchten ihren Urlaubsort am liebsten zu Fuß kennenlernen.",
          "answer": "e",
          "num": 16
        },
        {
          "id": 17,
          "type": "match",
          "text": "Dieses Jahr kann Herr Müller aus Gesundheitsgründen keine Schiffsreise machen, möchte aber den großen Kreuzfahrtschiffen so nahe wie möglich sein.",
          "answer": "f",
          "num": 17
        },
        {
          "id": 18,
          "type": "match",
          "text": "Familie Denkler möchte ihren Aufenthalt an der Ostsee mit einer kleinen Schiffsreise verbinden.",
          "answer": "i",
          "num": 18
        },
        {
          "id": 19,
          "type": "match",
          "text": "Frau Niederweg hat mit ihrer Klasse das Projekt „Tiere im Ostseeraum“ gemacht und sucht ein passendes Ziel für den Projektausflug.",
          "answer": "a",
          "num": 19
        }
      ]
    },
    {
      "id": 4,
      "title": "Teil 4",
      "time": 15,
      "instructions": "Lesen Sie die Texte 20 bis 26. Wählen Sie: Ist die Person für nächtliches Skifahren? In einer Zeitschrift lesen Sie Kommentare zu einem Artikel über das Angebot, auch nachts bei künstlichem Licht Ski zu fahren.",
      "topic": "Soll man auch nachts bei künstlichem Licht Ski fahren können?",
      "example": {
        "who": "Jens (25 Jahre, Füssen)",
        "text": "Skifahren unter den Sternen, der Mond scheint und alles ist weiß und schön. Was kann es Besseres geben? Für uns passionierte Skifahrer ist das einfach super. Es fahren nur richtig gute Pistenkenner und -könner. Keine Anfänger mehr, die einem die Laune verderben. Nein, ich kann mir nichts Schöneres vorstellen!",
        "answer": "Ja"
      },
      "letters": [
        {
          "id": 20,
          "who": "Lara (34 Jahre, München)",
          "text": "Ich muss hier ehrlich sagen, dass ich immer gegen so etwas war. Aber vor Kurzem hatte ich das Angebot, mit Kollegen so eine Nachttour zu machen. Dieses einmalige Erlebnis hat meine Einstellung zum nächtlichen Skifahren total geändert. Es ist so, dass ich auf jeden Fall noch mal fahren will. Da es mich so begeistert, kann ich einfach nicht mehr dagegen sein.",
          "answer": "Ja",
          "num": 20
        },
        {
          "id": 21,
          "who": "Kevin (19 Jahre, Solothurn)",
          "text": "Diese Idee hat meiner Meinung nach zwei Seiten. Einerseits bringen Skifahrer, die nachts fahren, mehr Geld in die Region und darüber freuen sich alle. Andererseits stört das starke Licht in der Nacht die Tiere und ist einfach unnatürlich. Weil ich nicht Ski fahre und die Natur schützen möchte, finde ich so ein Angebot unattraktiv. Das brauchen wir nicht.",
          "answer": "Nein",
          "num": 21
        },
        {
          "id": 22,
          "who": "Karl (50 Jahre, Hildesheim)",
          "text": "In der letzten Zeit hören wir immer häufiger, wie groß das Umweltproblem in den Alpen ist und wie viel Schaden der Mensch den Bergen antut, wenn er Seilbahnen baut, Pisten anlegt oder Ski fährt. Ist doch klar, dass die Berge ab sofort möglichst in Ruhe gelassen werden sollen. Wir haben als Menschen schon genug dort oben kaputt gemacht. Versuchen wir lieber, das noch nicht Zerstörte zu schützen statt noch mehr in die Natur einzugreifen.",
          "answer": "Nein",
          "num": 22
        },
        {
          "id": 23,
          "who": "Susanne (16 Jahre, Kiel)",
          "text": "Ich bin aus dem Norden und kann selbst nicht Ski fahren. Aber bei uns gehen wir auch im Sommer nachts gern mal am Meer spazieren, an der Küste oder auch in den beleuchteten Straßen. Warum sollen die Menschen in den Bergen nicht auch die Möglichkeit haben, mal nachts ihr Hobby auszuüben?",
          "answer": "Ja",
          "num": 23
        },
        {
          "id": 24,
          "who": "Martin (40 Jahre, Dresden)",
          "text": "Was sich die Liftbesitzer und Berghütteneigentümer alles ausdenken! Das kann ja wohl nicht ihr Ernst sein, auch noch nachts die Pisten zu öffnen und Menschen Ski fahren zu lassen. Das ist ja wohl das Letzte.",
          "answer": "Nein",
          "num": 24
        },
        {
          "id": 25,
          "who": "Marc (36 Jahre, Obertauern)",
          "text": "Niemand denkt an die Beisel-Besitzer! Wir müssen da oben auf den Bergen ganz schön um unsere Kundschaft kämpfen. Es kommen sowieso jedes Jahr weniger Skifahrer. Das bedeutet auch, dass wir weniger verdienen. Nun haben wir einmal die Möglichkeit, noch ein bisschen länger offen zu sein, um die Kunden der Nacht-Pisten-Gaudi zu bedienen, schon fangen die Umweltschützer an zu schreien. Das finde ich einfach nur unfair.",
          "answer": "Ja",
          "num": 25
        },
        {
          "id": 26,
          "who": "Otto (47 Jahre, Salzburg)",
          "text": "Ich erinnere mich noch an meine Kindheit. Als Bub war ich regelmäßig zum Skifahren in den Bergen. Einmal im Monat gab es dann einen „Fackelablauf“, da sind die Skilehrer bei Nacht mit den brennenden Fackeln in der Hand die zentrale Piste hinuntergefahren. Das hat mich zwar damals beeindruckt, aber jede Nacht Skifahren mit künstlichem Licht? So viele Skifahrer? Die Nacht zum Tag machen? Das stört doch die schöne Stille, die nachts in den Bergen herrscht.",
          "answer": "Nein",
          "num": 26
        }
      ]
    },
    {
      "id": 5,
      "title": "Teil 5",
      "time": 10,
      "instructions": "Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c. Sie informieren sich darüber, wie man sich bei einem Restaurantbesuch richtig verhält, denn Sie sind zu einem wichtigen Arbeitsessen eingeladen.",
      "articles": [
        {
          "heading": "Tipps für einen Restaurantbesuch",
          "body": [
            "Beim Betreten des Lokals ist es nicht mehr zwingend vorgeschrieben, dass der Mann die Tür für die Frau aufhält. Es ist ebenso in Ordnung, wenn die Frau selbst die Tür aufmacht.",
            "Um den Kellner auf sich aufmerksam zu machen, reicht oft schon ein kleines Handzeichen. Sollte er Sie nicht sehen, wenden Sie sich an einen seiner Kollegen und bitten Sie ihn, Ihren Wunsch weiterzuleiten. Lautes Rufen sollten Sie unterlassen.",
            "Heute gibt es in den meisten Gaststätten einen Raucher- und Nichtraucherbereich. Empfehlenswert ist, die Gäste vor dem Betreten des Lokals zu fragen, wo sie gerne sitzen würden. Aus Höflichkeit sollten Raucher anbieten, in den Nichtraucherbereich zu gehen. Auf jeden Fall sollten Raucher vor dem Anzünden einer Zigarette fragen, ob es die anderen Gäste stört.",
            "Im Restaurant ist es ratsam, das Handy stumm oder ganz auszuschalten. Wenn Sie dringend telefonieren müssen, tun Sie dies bitte nicht am Tisch. Gehen Sie in eine ruhige Ecke des Lokals und erledigen Sie dort nur die allernotwendigsten Anrufe, da es unhöflich ist, die Gäste lange auf sich warten zu lassen.",
            "Das Bezahlen wird heute in der Regel am Tisch erledigt. Empfehlenswerter, weil diskreter, ist die Benutzung einer Kreditkarte. Es ist in Deutschland nicht zwingend vorgeschrieben, ein Trinkgeld zu geben. Sind Sie aber mit der Bedienung zufrieden gewesen, ist es üblich, ein kleines Trinkgeld (5 bis 10 % des Rechnungsbetrags) zu geben."
          ]
        }
      ],
      "questions": [
        {
          "id": 27,
          "type": "mcq",
          "text": "Rauchen ...",
          "options": [
            "im Restaurant ist nicht richtig.",
            "sollte man nur, wenn es die anderen Gäste nicht stört.",
            "dürfen die Gäste nur vor dem Eintritt ins Restaurant."
          ],
          "answer": 1,
          "num": 27
        },
        {
          "id": 28,
          "type": "mcq",
          "text": "Um zu bestellen, ...",
          "options": [
            "muss man den Kellner laut rufen.",
            "muss man sich beim Kellner erkundigen, welcher Kollege an diesem Tisch die Gäste bedient.",
            "sollte man dem Kellner ein Zeichen mit der Hand machen."
          ],
          "answer": 2,
          "num": 28
        },
        {
          "id": 29,
          "type": "mcq",
          "text": "Nach dem Essen ...",
          "options": [
            "sollte man ein Trinkgeld geben, wenn die Bedienung zufrieden war.",
            "ist es besser, mit einer Kreditkarte zu bezahlen.",
            "zahlt jeder Gast ein Trinkgeld."
          ],
          "answer": 1,
          "num": 29
        },
        {
          "id": 30,
          "type": "mcq",
          "text": "Es ist unhöflich, ...",
          "options": [
            "das Handy ins Restaurant mitzunehmen.",
            "in einer Ecke des Restaurants zu telefonieren.",
            "lange am Handy zu reden, während die Gäste warten."
          ],
          "answer": 2,
          "num": 30
        }
      ]
    },
    {
      "id": 6,
      "title": "Teil 6",
      "badge": "Hören",
      "isHoren": True,
      "time": 35,
      "instructions": "Modul Hören: 4 Teile, 30 Aufgaben. Hören Sie die Audioaufnahmen und lösen Sie die Aufgaben dazu.",
      "audioSrc": "audio/modellsatz-21-hoeren.mp3",
      "audioFallbacks": [
        "audio/modellsatz-21-hoeren.mp3"
      ],
      "audioChapters": [
        {
          "time": 0,
          "start": 0,
          "end": 36,
          "label": "00:00 Teil 1 (Beispiel · 2x)",
          "part": 1,
          "title": "Teil 1 · Beispiel (2x hören)"
        },
        {
          "time": 36,
          "start": 36,
          "end": 755,
          "label": "00:36 Teil 1 (Texte 1–5 · 2x)",
          "part": 1,
          "title": "Teil 1 · Fünf kurze Texte (2x hören)"
        },
        {
          "time": 755,
          "start": 755,
          "end": 1033,
          "label": "12:35 Teil 2 (Puppenmuseum Käthe Kruse · 1x)",
          "part": 2,
          "title": "Teil 2 · Führung im Puppenmuseum Käthe Kruse (1x hören)"
        },
        {
          "time": 1033,
          "start": 1033,
          "end": 1318,
          "label": "17:13 Teil 3 (Gespräch: Kleidungskauf / Zahnarzt · 1x)",
          "part": 3,
          "title": "Teil 3 · Gespräch im Wartezimmer beim Zahnarzt (1x hören)"
        },
        {
          "time": 1318,
          "start": 1318,
          "end": 1795,
          "label": "21:58 Teil 4 (Diskussion: Bedeutung der Zeit · 1. Durchgang)",
          "part": 4,
          "title": "Teil 4 · Diskussion: Die Bedeutung der Zeit (1. Durchgang)"
        },
        {
          "time": 1795,
          "start": 1795,
          "end": 2181,
          "label": "29:55 Teil 4 (Diskussion: Bedeutung der Zeit · 2. Durchgang)",
          "part": 4,
          "title": "Teil 4 · Diskussion: Die Bedeutung der Zeit (2. Durchgang)"
        }
      ],
      "horenSections": [
        {
          "id": 1,
          "partNumber": 1,
          "title": "Teil 1: Fünf kurze Texte",
          "badge": "Teil 1",
          "intro": "Sie hören nun fünf kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung.",
          "example": {
            "ex01": {
              "num": "01",
              "text": "Im Supermarkt werden heute Obst und Gemüse angeboten.",
              "answer": "richtig",
              "type": "tf"
            },
            "ex02": {
              "num": "02",
              "text": "Die Preise für das Obst erfährt man ...",
              "options": [
                "pro Stück.",
                "pro 500 Gramm.",
                "pro Kilo."
              ],
              "answer": 2,
              "type": "mcq"
            }
          },
          "questions": [
            {
              "id": "h1",
              "type": "tf",
              "num": 1,
              "text": "Ein Zug fährt ab.",
              "answer": "richtig",
              "audioStart": 36,
              "teilPart": 1,
              "textNum": 1
            },
            {
              "id": "h2",
              "type": "mcq",
              "num": 2,
              "text": "Der Zug ...",
              "options": [
                "kommt aus Wien.",
                "transportiert sowohl Personen als auch Autos.",
                "hat einen Liegewagen, aber keinen Schlafwagen."
              ],
              "answer": 1,
              "audioStart": 36,
              "teilPart": 1,
              "textNum": 1
            },
            {
              "id": "h3",
              "type": "tf",
              "num": 3,
              "text": "Sie hören die Spielzeiten eines Theaters.",
              "answer": "richtig",
              "audioStart": 180,
              "teilPart": 1,
              "textNum": 2
            },
            {
              "id": "h4",
              "type": "mcq",
              "num": 4,
              "text": "Wann gibt es eine Weihnachtsveranstaltung?",
              "options": [
                "Am Samstag und Sonntag.",
                "Am Donnerstag und Freitag.",
                "Nur am Donnerstag."
              ],
              "answer": 1,
              "audioStart": 180,
              "teilPart": 1,
              "textNum": 2
            },
            {
              "id": "h5",
              "type": "tf",
              "num": 5,
              "text": "Sie hören die abendliche Nachrichtensendung.",
              "answer": "richtig",
              "audioStart": 345,
              "teilPart": 1,
              "textNum": 3
            },
            {
              "id": "h6",
              "type": "mcq",
              "num": 6,
              "text": "Der Junge ...",
              "options": [
                "fuhr mit der Straßenbahn.",
                "ging zu Fuß.",
                "war mit dem Fahrrad unterwegs."
              ],
              "answer": 2,
              "audioStart": 345,
              "teilPart": 1,
              "textNum": 3
            },
            {
              "id": "h7",
              "type": "tf",
              "num": 7,
              "text": "Marie-Luise kann nicht mit ins Theater kommen.",
              "answer": "falsch",
              "audioStart": 493,
              "teilPart": 1,
              "textNum": 4
            },
            {
              "id": "h8",
              "type": "mcq",
              "num": 8,
              "text": "Was soll Adele machen?",
              "options": [
                "Die Theaterkarten abholen.",
                "An der Theaterkasse warten.",
                "Ihre Freundin vom Büro abholen."
              ],
              "answer": 0,
              "audioStart": 493,
              "teilPart": 1,
              "textNum": 4
            },
            {
              "id": "h9",
              "type": "tf",
              "num": 9,
              "text": "Sie erfahren, wo das Hotel liegt.",
              "answer": "richtig",
              "audioStart": 612,
              "teilPart": 1,
              "textNum": 5
            },
            {
              "id": "h10",
              "type": "mcq",
              "num": 10,
              "text": "Was liegt näher zum Hotel?",
              "options": [
                "Der Flughafen.",
                "Die Ausstellung.",
                "Der Bahnhof."
              ],
              "answer": 2,
              "audioStart": 612,
              "teilPart": 1,
              "textNum": 5
            }
          ]
        },
        {
          "id": 2,
          "partNumber": 2,
          "title": "Teil 2: Führung im Museum",
          "badge": "Teil 2",
          "intro": "Sie hören nun einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
          "context": "Sie sind zu Besuch im Puppenmuseum Käthe Kruse.",
          "questions": [
            {
              "id": "h11",
              "type": "mcq",
              "num": 11,
              "text": "Das Puppenmuseum gibt es seit ...",
              "options": [
                "1883.",
                "1968.",
                "1993."
              ],
              "answer": 2,
              "audioStart": 755,
              "teilPart": 2
            },
            {
              "id": "h12",
              "type": "mcq",
              "num": 12,
              "text": "Die erste Puppe von Käthe Kruse war ...",
              "options": [
                "sehr schwer.",
                "unpersönlich und kalt.",
                "warm und weich."
              ],
              "answer": 2,
              "audioStart": 755,
              "teilPart": 2
            },
            {
              "id": "h13",
              "type": "mcq",
              "num": 13,
              "text": "Warum wurde Käthe Kruse berühmt?",
              "options": [
                "Weil es damals noch keine Puppen gab.",
                "Weil ihre Puppen Kindern ähnlich waren.",
                "Weil ihre Puppen wie Erwachsene waren."
              ],
              "answer": 1,
              "audioStart": 755,
              "teilPart": 2
            },
            {
              "id": "h14",
              "type": "mcq",
              "num": 14,
              "text": "Was kann man im Puppenmuseum auch machen?",
              "options": [
                "Einen Workshop besuchen.",
                "Eine Puppe herstellen.",
                "Käthe Kruse interviewen."
              ],
              "answer": 0,
              "audioStart": 755,
              "teilPart": 2
            },
            {
              "id": "h15",
              "type": "mcq",
              "num": 15,
              "text": "Man kann im Museum Geburtstag feiern, wenn man ...",
              "options": [
                "Eltern, Oma oder Opa mitbringt.",
                "unter sechs Jahre alt ist.",
                "bis zu zwölf Kinder einlädt."
              ],
              "answer": 2,
              "audioStart": 755,
              "teilPart": 2
            }
          ]
        },
        {
          "id": 3,
          "partNumber": 3,
          "title": "Teil 3: Gespräch im Alltag",
          "badge": "Teil 3",
          "intro": "Sie hören nun ein Gespräch. Sie hören das Gespräch einmal. Dazu lösen Sie sieben Aufgaben. Wählen Sie: Sind die Aussagen richtig oder falsch?",
          "context": "Sie sitzen beim Zahnarzt im Wartezimmer und hören, wie sich eine Frau und ein Mädchen über einen Kleidungskauf unterhalten.",
          "questions": [
            {
              "id": "h16",
              "type": "tf",
              "num": 16,
              "text": "Hanna hat Zahnschmerzen.",
              "answer": "richtig",
              "audioStart": 1033,
              "teilPart": 3
            },
            {
              "id": "h17",
              "type": "tf",
              "num": 17,
              "text": "Hanna hat sich ein T-Shirt und einen Rock gekauft.",
              "answer": "falsch",
              "audioStart": 1033,
              "teilPart": 3
            },
            {
              "id": "h18",
              "type": "tf",
              "num": 18,
              "text": "Das T-Shirt hat 13 Euro gekostet.",
              "answer": "richtig",
              "audioStart": 1033,
              "teilPart": 3
            },
            {
              "id": "h19",
              "type": "tf",
              "num": 19,
              "text": "Das Wetter ist noch ein bisschen kühl.",
              "answer": "richtig",
              "audioStart": 1033,
              "teilPart": 3
            },
            {
              "id": "h20",
              "type": "tf",
              "num": 20,
              "text": "Das T-Shirt ist schwarz.",
              "answer": "falsch",
              "audioStart": 1033,
              "teilPart": 3
            },
            {
              "id": "h21",
              "type": "tf",
              "num": 21,
              "text": "Hanna will das T-Shirt nicht umtauschen.",
              "answer": "falsch",
              "audioStart": 1033,
              "teilPart": 3
            },
            {
              "id": "h22",
              "type": "tf",
              "num": 22,
              "text": "Die Mutter schenkt Hanna ein T-Shirt.",
              "answer": "falsch",
              "audioStart": 1033,
              "teilPart": 3
            }
          ]
        },
        {
          "id": 4,
          "partNumber": 4,
          "title": "Teil 4: Radiodiskussion",
          "badge": "Teil 4",
          "intro": "Sie hören nun eine Diskussion. Sie hören die Diskussion zweimal. Dazu lösen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was?",
          "context": "Die Moderatorin der Radiosendung „Menschen“ unterhält sich mit Herrn Leo Hofl und Herrn Mario Kulmer über die Bedeutung der Zeit.",
          "example": {
            "text": "Herr Kulmer ist seit mehr als drei Jahren Rentner.",
            "answer": 2
          },
          "speakers": [
            "Moderatorin",
            "Leo Hofl",
            "Mario Kulmer"
          ],
          "questions": [
            {
              "id": "h23",
              "type": "speaker",
              "num": 23,
              "text": "Kinder langweilen sich eher als Erwachsene.",
              "options": [
                "Moderatorin",
                "Leo Hofl",
                "Mario Kulmer"
              ],
              "answer": 0,
              "audioStart": 1318,
              "teilPart": 4
            },
            {
              "id": "h24",
              "type": "speaker",
              "num": 24,
              "text": "Aktive Menschen haben viele Erinnerungen, wenn sie älter sind.",
              "options": [
                "Moderatorin",
                "Leo Hofl",
                "Mario Kulmer"
              ],
              "answer": 2,
              "audioStart": 1318,
              "teilPart": 4
            },
            {
              "id": "h25",
              "type": "speaker",
              "num": 25,
              "text": "Das Zeitmanagement ist in unserer Zeit ein aktuelles Thema.",
              "options": [
                "Moderatorin",
                "Leo Hofl",
                "Mario Kulmer"
              ],
              "answer": 0,
              "audioStart": 1318,
              "teilPart": 4
            },
            {
              "id": "h26",
              "type": "speaker",
              "num": 26,
              "text": "Das Zeitmanagement hilft gegen Stress.",
              "options": [
                "Moderatorin",
                "Leo Hofl",
                "Mario Kulmer"
              ],
              "answer": 1,
              "audioStart": 1318,
              "teilPart": 4
            },
            {
              "id": "h27",
              "type": "speaker",
              "num": 27,
              "text": "Man soll bei einem Zeitplan sowohl an die Arbeitszeit als auch an die Freizeit denken.",
              "options": [
                "Moderatorin",
                "Leo Hofl",
                "Mario Kulmer"
              ],
              "answer": 1,
              "audioStart": 1318,
              "teilPart": 4
            },
            {
              "id": "h28",
              "type": "speaker",
              "num": 28,
              "text": "Pensionäre haben genug Zeit, da sie nicht berufstätig sind.",
              "options": [
                "Moderatorin",
                "Leo Hofl",
                "Mario Kulmer"
              ],
              "answer": 0,
              "audioStart": 1318,
              "teilPart": 4
            },
            {
              "id": "h29",
              "type": "speaker",
              "num": 29,
              "text": "Man sollte sich nicht zu lange mit seinem Zeitplan beschäftigen.",
              "options": [
                "Moderatorin",
                "Leo Hofl",
                "Mario Kulmer"
              ],
              "answer": 2,
              "audioStart": 1318,
              "teilPart": 4
            },
            {
              "id": "h30",
              "type": "speaker",
              "num": 30,
              "text": "Alle Menschen haben täglich gleich viel Zeit.",
              "options": [
                "Moderatorin",
                "Leo Hofl",
                "Mario Kulmer"
              ],
              "answer": 1,
              "audioStart": 1318,
              "teilPart": 4
            }
          ]
        }
      ],
      "questions": [
        {
          "id": "h1",
          "type": "tf",
          "num": 1,
          "text": "Ein Zug fährt ab.",
          "answer": "richtig",
          "audioStart": 36,
          "teilPart": 1,
          "textNum": 1
        },
        {
          "id": "h2",
          "type": "mcq",
          "num": 2,
          "text": "Der Zug ...",
          "options": [
            "kommt aus Wien.",
            "transportiert sowohl Personen als auch Autos.",
            "hat einen Liegewagen, aber keinen Schlafwagen."
          ],
          "answer": 1,
          "audioStart": 36,
          "teilPart": 1,
          "textNum": 1
        },
        {
          "id": "h3",
          "type": "tf",
          "num": 3,
          "text": "Sie hören die Spielzeiten eines Theaters.",
          "answer": "richtig",
          "audioStart": 180,
          "teilPart": 1,
          "textNum": 2
        },
        {
          "id": "h4",
          "type": "mcq",
          "num": 4,
          "text": "Wann gibt es eine Weihnachtsveranstaltung?",
          "options": [
            "Am Samstag und Sonntag.",
            "Am Donnerstag und Freitag.",
            "Nur am Donnerstag."
          ],
          "answer": 1,
          "audioStart": 180,
          "teilPart": 1,
          "textNum": 2
        },
        {
          "id": "h5",
          "type": "tf",
          "num": 5,
          "text": "Sie hören die abendliche Nachrichtensendung.",
          "answer": "richtig",
          "audioStart": 345,
          "teilPart": 1,
          "textNum": 3
        },
        {
          "id": "h6",
          "type": "mcq",
          "num": 6,
          "text": "Der Junge ...",
          "options": [
            "fuhr mit der Straßenbahn.",
            "ging zu Fuß.",
            "war mit dem Fahrrad unterwegs."
          ],
          "answer": 2,
          "audioStart": 345,
          "teilPart": 1,
          "textNum": 3
        },
        {
          "id": "h7",
          "type": "tf",
          "num": 7,
          "text": "Marie-Luise kann nicht mit ins Theater kommen.",
          "answer": "falsch",
          "audioStart": 493,
          "teilPart": 1,
          "textNum": 4
        },
        {
          "id": "h8",
          "type": "mcq",
          "num": 8,
          "text": "Was soll Adele machen?",
          "options": [
            "Die Theaterkarten abholen.",
            "An der Theaterkasse warten.",
            "Ihre Freundin vom Büro abholen."
          ],
          "answer": 0,
          "audioStart": 493,
          "teilPart": 1,
          "textNum": 4
        },
        {
          "id": "h9",
          "type": "tf",
          "num": 9,
          "text": "Sie erfahren, wo das Hotel liegt.",
          "answer": "richtig",
          "audioStart": 612,
          "teilPart": 1,
          "textNum": 5
        },
        {
          "id": "h10",
          "type": "mcq",
          "num": 10,
          "text": "Was liegt näher zum Hotel?",
          "options": [
            "Der Flughafen.",
            "Die Ausstellung.",
            "Der Bahnhof."
          ],
          "answer": 2,
          "audioStart": 612,
          "teilPart": 1,
          "textNum": 5
        },
        {
          "id": "h11",
          "type": "mcq",
          "num": 11,
          "text": "Das Puppenmuseum gibt es seit ...",
          "options": [
            "1883.",
            "1968.",
            "1993."
          ],
          "answer": 2,
          "audioStart": 755,
          "teilPart": 2
        },
        {
          "id": "h12",
          "type": "mcq",
          "num": 12,
          "text": "Die erste Puppe von Käthe Kruse war ...",
          "options": [
            "sehr schwer.",
            "unpersönlich und kalt.",
            "warm und weich."
          ],
          "answer": 2,
          "audioStart": 755,
          "teilPart": 2
        },
        {
          "id": "h13",
          "type": "mcq",
          "num": 13,
          "text": "Warum wurde Käthe Kruse berühmt?",
          "options": [
            "Weil es damals noch keine Puppen gab.",
            "Weil ihre Puppen Kindern ähnlich waren.",
            "Weil ihre Puppen wie Erwachsene waren."
          ],
          "answer": 1,
          "audioStart": 755,
          "teilPart": 2
        },
        {
          "id": "h14",
          "type": "mcq",
          "num": 14,
          "text": "Was kann man im Puppenmuseum auch machen?",
          "options": [
            "Einen Workshop besuchen.",
            "Eine Puppe herstellen.",
            "Käthe Kruse interviewen."
          ],
          "answer": 0,
          "audioStart": 755,
          "teilPart": 2
        },
        {
          "id": "h15",
          "type": "mcq",
          "num": 15,
          "text": "Man kann im Museum Geburtstag feiern, wenn man ...",
          "options": [
            "Eltern, Oma oder Opa mitbringt.",
            "unter sechs Jahre alt ist.",
            "bis zu zwölf Kinder einlädt."
          ],
          "answer": 2,
          "audioStart": 755,
          "teilPart": 2
        },
        {
          "id": "h16",
          "type": "tf",
          "num": 16,
          "text": "Hanna hat Zahnschmerzen.",
          "answer": "richtig",
          "audioStart": 1033,
          "teilPart": 3
        },
        {
          "id": "h17",
          "type": "tf",
          "num": 17,
          "text": "Hanna hat sich ein T-Shirt und einen Rock gekauft.",
          "answer": "falsch",
          "audioStart": 1033,
          "teilPart": 3
        },
        {
          "id": "h18",
          "type": "tf",
          "num": 18,
          "text": "Das T-Shirt hat 13 Euro gekostet.",
          "answer": "richtig",
          "audioStart": 1033,
          "teilPart": 3
        },
        {
          "id": "h19",
          "type": "tf",
          "num": 19,
          "text": "Das Wetter ist noch ein bisschen kühl.",
          "answer": "richtig",
          "audioStart": 1033,
          "teilPart": 3
        },
        {
          "id": "h20",
          "type": "tf",
          "num": 20,
          "text": "Das T-Shirt ist schwarz.",
          "answer": "falsch",
          "audioStart": 1033,
          "teilPart": 3
        },
        {
          "id": "h21",
          "type": "tf",
          "num": 21,
          "text": "Hanna will das T-Shirt nicht umtauschen.",
          "answer": "falsch",
          "audioStart": 1033,
          "teilPart": 3
        },
        {
          "id": "h22",
          "type": "tf",
          "num": 22,
          "text": "Die Mutter schenkt Hanna ein T-Shirt.",
          "answer": "falsch",
          "audioStart": 1033,
          "teilPart": 3
        },
        {
          "id": "h23",
          "type": "speaker",
          "num": 23,
          "text": "Kinder langweilen sich eher als Erwachsene.",
          "options": [
            "Moderatorin",
            "Leo Hofl",
            "Mario Kulmer"
          ],
          "answer": 0,
          "audioStart": 1318,
          "teilPart": 4
        },
        {
          "id": "h24",
          "type": "speaker",
          "num": 24,
          "text": "Aktive Menschen haben viele Erinnerungen, wenn sie älter sind.",
          "options": [
            "Moderatorin",
            "Leo Hofl",
            "Mario Kulmer"
          ],
          "answer": 2,
          "audioStart": 1318,
          "teilPart": 4
        },
        {
          "id": "h25",
          "type": "speaker",
          "num": 25,
          "text": "Das Zeitmanagement ist in unserer Zeit ein aktuelles Thema.",
          "options": [
            "Moderatorin",
            "Leo Hofl",
            "Mario Kulmer"
          ],
          "answer": 0,
          "audioStart": 1318,
          "teilPart": 4
        },
        {
          "id": "h26",
          "type": "speaker",
          "num": 26,
          "text": "Das Zeitmanagement hilft gegen Stress.",
          "options": [
            "Moderatorin",
            "Leo Hofl",
            "Mario Kulmer"
          ],
          "answer": 1,
          "audioStart": 1318,
          "teilPart": 4
        },
        {
          "id": "h27",
          "type": "speaker",
          "num": 27,
          "text": "Man soll bei einem Zeitplan sowohl an die Arbeitszeit als auch an die Freizeit denken.",
          "options": [
            "Moderatorin",
            "Leo Hofl",
            "Mario Kulmer"
          ],
          "answer": 1,
          "audioStart": 1318,
          "teilPart": 4
        },
        {
          "id": "h28",
          "type": "speaker",
          "num": 28,
          "text": "Pensionäre haben genug Zeit, da sie nicht berufstätig sind.",
          "options": [
            "Moderatorin",
            "Leo Hofl",
            "Mario Kulmer"
          ],
          "answer": 0,
          "audioStart": 1318,
          "teilPart": 4
        },
        {
          "id": "h29",
          "type": "speaker",
          "num": 29,
          "text": "Man sollte sich nicht zu lange mit seinem Zeitplan beschäftigen.",
          "options": [
            "Moderatorin",
            "Leo Hofl",
            "Mario Kulmer"
          ],
          "answer": 2,
          "audioStart": 1318,
          "teilPart": 4
        },
        {
          "id": "h30",
          "type": "speaker",
          "num": 30,
          "text": "Alle Menschen haben täglich gleich viel Zeit.",
          "options": [
            "Moderatorin",
            "Leo Hofl",
            "Mario Kulmer"
          ],
          "answer": 1,
          "audioStart": 1318,
          "teilPart": 4
        }
      ]
    }
  ]
}



#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Appends explanations, translations, writes data/tests/modellsatz-21.json,
and registers in tests-manifest.json.
"""

import json
import os
import sys



explanations = {
  "1": {
    "text": "💡 Lösung: Richtig.\nIm Text steht: Frau Mohlau wohnt „im Generationen-Wohnheim bei uns in der Nähe“. Sie wohnt also nicht weit von Alois entfernt.",
    "fr": "💡 Solution : Vrai (Richtig).\nLe texte indique que Mme Mohlau habite « dans la résidence intergénérationnelle tout près de chez nous » (im Generationen-Wohnheim bei uns in der Nähe). Elle habite donc bien non loin d'Alois.",
    "ar": "💡 الحل: صحيح (Richtig).\nورد في النص أن السيدة مولاو تسكن «في دار السكن بين الأجيال بالقرب منا» (im Generationen-Wohnheim bei uns in der Nähe)، أي أنها تسكن غير بعيد عن ألويس."
  },
  "2": {
    "text": "💡 Lösung: Falsch.\nFrau Mohlau wohnt allein in ihrem Appartement. Die Mutter mit ihrem Kind und die zwei Lehrlinge leben nicht in ihrer Wohnung, sondern „in den Wohnungen nebenan“.",
    "fr": "💡 Solution : Faux (Falsch).\nMme Mohlau vit seule dans son appartement. La mère célibataire avec son enfant et les deux apprentis vivent dans les appartements voisins (in den Wohnungen nebenan), et non chez elle.",
    "ar": "💡 الحل: خطأ (Falsch).\nالسيدة مولاو تعيش بمفردها في شقتها؛ بينما تعيش الأم العازبة مع طفلها والمتدربان «في الشقق المجاورة» (in den Wohnungen nebenan) وليس داخل شقتها."
  },
  "3": {
    "text": "💡 Lösung: Richtig.\nFrau Mohlau entschied sich für das Wohnheim, „weil sie hier betreut wird, wenn sie es braucht, ohne ihre Selbstständigkeit aufgeben zu müssen“. Selbstständigkeit ist ihr somit sehr wichtig.",
    "fr": "💡 Solution : Vrai (Richtig).\nMme Mohlau a choisi de s'y installer parce qu'elle y reçoit de l'aide si besoin « sans devoir renoncer à son autonomie » (ohne ihre Selbstständigkeit aufgeben zu müssen).",
    "ar": "💡 الحل: صحيح (Richtig).\nاختارت السيدة مولاو الانتقال إلى هناك لأنها تحظى بالرعاية عند الحاجة «دون أن تضطر للتخلي عن استقلاليتها» (ohne ihre Selbstständigkeit aufgeben zu müssen)."
  },
  "4": {
    "text": "💡 Lösung: Richtig.\nIm Text heißt es ausdrücklich: „... passt sie zweimal die Woche auf das Kind ihrer Nachbarin auf.“ Das geschieht also regelmäßig.",
    "fr": "💡 Solution : Vrai (Richtig).\nLe texte précise explicitement qu'elle garde l'enfant de sa voisine « deux fois par semaine » (zweimal die Woche), ce qui constitue une garde régulière.",
    "ar": "💡 الحل: صحيح (Richtig).\nيذكر النص صراحة أنها تعتني بطفل جارتها «مرتين في الأسبوع» (zweimal die Woche)، مما يعني أنها تقوم بذلك بانتظام."
  },
  "5": {
    "text": "💡 Lösung: Falsch.\nAlois und seine Buben waren zu Besuch und nutzten den Garten und Spielplatz ebenfalls: „Es waren auch andere Kinder da, mit denen sie herumtollen konnten...“ Der Spielplatz wird also keineswegs nur von Bewohnern genutzt.",
    "fr": "💡 Solution : Faux (Falsch).\nAlois et ses garçons étaient de simples visiteurs et profitaient du terrain de jeu avec d'autres enfants ; l'aire de jeux n'est donc pas réservée aux seuls résidents.",
    "ar": "💡 الحل: خطأ (Falsch).\nألويس وأولاده كانوا زواراً واستمتعوا بالحديقة والملعب مع أطفال آخرين؛ والملعب ليس مقصوراً على نزلاء الدار فقط."
  },
  "6": {
    "text": "💡 Lösung: Falsch.\nIm Text steht: „Der letzte ging ins Burgenland. Sie selbst nimmt zurzeit an einer Kochgruppe teil...“ Es wird nicht gesagt, dass sie an dem Burgenland-Ausflug teilnahm; sie engagiert sich stattdessen in der Kochgruppe.",
    "fr": "💡 Solution : Faux (Falsch).\nLe texte précise que la dernière excursion organisée allait dans le Burgenland, mais qu'elle-même participe actuellement à un groupe de cuisine (Sie selbst nimmt zurzeit an einer Kochgruppe teil). Rien n'indique qu'elle y a participé.",
    "ar": "💡 الحل: خطأ (Falsch).\nيذكر النص أن آخر رحلة نظمتها الدار كانت إلى بورغنلاند، لكن السيدة مولاو نفسها تشارك حالياً في ورشة طبخ (Kochgruppe) ولم تشارك في تلك الرحلة."
  },
  "7": {
    "text": "💡 Lösung: b (welche deutschen Sehenswürdigkeiten die Deutschen am meisten mögen).\nDer Text berichtet ausführlich über die Ergebnisse einer Online-Umfrage zu den beliebtesten Sehenswürdigkeiten Deutschlands.",
    "fr": "💡 Solution : b (les sites touristiques allemands que les Allemands préfèrent).\nLe texte présente les résultats d'un sondage mesurant la popularité des monuments en Allemagne auprès du public allemand.",
    "ar": "💡 الحل: b (أي المعالم السياحية الألمانية يفضلها الألمان أكثر من غيرها).\nيعرض النص نتائج استطلاع للرأي حول أكثر المعالم السياحية الألمانية شعبية ومحبة لدى الألمان."
  },
  "8": {
    "text": "💡 Lösung: a (ist schon mehrere Jahre lang die beliebteste Sehenswürdigkeit Deutschlands).\nLaut Umfrage konnte der Kölner Dom „bereits zum vierten Mal diesen Platz klar halten“, liegt also schon mehrere Jahre auf Platz eins.",
    "fr": "💡 Solution : a (est depuis plusieurs années le site touristique le plus populaire d'Allemagne).\nLa cathédrale de Cologne conserve sa première place pour la quatrième fois consécutive (bereits zum vierten Mal diesen Platz klar halten).",
    "ar": "💡 الحل: a (هي المعلم الأكثر شعبية في ألمانيا منذ عدة سنوات).\nاحتفظت كاتدرائية كولونيا بالمركز الأول للمرة الرابعة على التوالي في استطلاعات الرأي (bereits zum vierten Mal)."
  },
  "9": {
    "text": "💡 Lösung: c (hat zwei Sehenswürdigkeiten unter den Top 15).\nBerlin ist mit dem Brandenburger Tor (Platz 3) und dem Berliner Reichstag (Platz 9) zweimal in den Top 15 vertreten.",
    "fr": "💡 Solution : c (possède deux attractions parmi le Top 15).\nBerlin compte deux monuments dans les 15 premiers : la porte de Brandebourg (3e place) et le Reichstag (9e place).",
    "ar": "💡 الحل: c (لديها معلمان ضمن أفضل 15 معلماً).\nتمتلك برلين معلمين ضمن قائمة أفضل 15 معلماً: بوابة براندنبورغ (المرتبة الثالثة) ومبنى الرايخستاغ (المرتبة التاسعة)."
  },
  "10": {
    "text": "💡 Lösung: b (dass ein Hollywood-Star eine Schule besucht hat).\nDer Artikel beschreibt den überraschenden Besuch des Hollywood-Stars Johnny Depp in einer Londoner Grundschule.",
    "fr": "💡 Solution : b (qu'une star d'Hollywood a rendu visite à une école).\nL'article relate la visite surprise de Johnny Depp déguisé en Jack Sparrow dans une école londonienne.",
    "ar": "💡 الحل: b (أن نجماً هوليوودياً زار مدرسة).\nيتناول المقال زيارة النجم جوني ديب متقمصاً شخصية كابتن جاك سبارو لمدرسة ابتدائية في لندن تلبية لطلب تلميذة."
  },
  "11": {
    "text": "💡 Lösung: c (sang und tanzte für die Schüler).\nIm Text steht wörtlich: „Als Kapitän Jack Sparrow erschien der Hollywood-Star in der Londoner Grundschule und sang und tanzte mit vier Schauspielkollegen zu Piratenliedern.“",
    "fr": "💡 Solution : c (a chanté et dansé pour les élèves).\nLe texte indique mot à mot que Johnny Depp est venu et a chanté et dansé avec quatre collègues acteurs sur des chansons de pirates.",
    "ar": "💡 الحل: c (غنى ورقص للتلاميذ).\nورد في النص حرفياً أن جوني ديب حضر وغنى ورقص مع أربعة من زملائه الممثلين على ألحان أغاني القراصنة."
  },
  "12": {
    "text": "💡 Lösung: a (wollte keinen Unterricht machen).\nBeatrice plante eine Meuterei/einen Streik mit ihren Mitschülern, „damit möglichst viele Unterrichtsstunden nicht stattfinden würden“.",
    "fr": "💡 Solution : a (ne voulait pas avoir cours).\nBéatrice et ses camarades projetaient une grève de pirates pour annuler un maximum d'heures de cours.",
    "ar": "💡 الحل: a (أرادت عدم حضور الدروس).\nخططت بياتريس لتمرد قرصاني رفقة زملائها حتى يتم إلغاء أكبر قدر ممكن من الحصص الدراسية."
  },
  "13": {
    "text": "💡 Lösung: 0 (Keine passende Anzeige).\nMirjam und Sven suchen Leihräder an der Ostsee. Anzeige g bietet Leihräder an, jedoch auf der Nordsee-Insel Sylt (Nordsee statt Ostsee). Daher gibt es keine passende Anzeige (0).",
    "fr": "💡 Solution : 0 (Aucune annonce correspondante).\nMirjam et Sven cherchent des vélos de location sur la mer Baltique (Ostsee). L'annonce g propose des vélos mais sur l'île de Sylt en mer du Nord (Nordsee). Aucune annonce ne convient donc (0).",
    "ar": "💡 الحل: 0 (لا يوجد إعلان مناسب).\nيبحث ميريام وسفين عن استئجار دراجات على ساحل بحر البلطيق (Ostsee). بينما يعرض الإعلان g دراجات في جزيرة زيلت في بحر الشمال (Nordsee)، لذا لا يوجد إعلان مناسب (0)."
  },
  "14": {
    "text": "💡 Lösung: j (Season Spezial – Kiten).\nRobert möchte Kitesurfen lernen und Leute kennenlernen. Anzeige j bietet Grundkurs Kiten mit Gruppenaktivitäten (BBQ, Movieabend, Ladies Night, Beachvolley) zum Kennenlernen.",
    "fr": "💡 Solution : j (Season Spezial – Kiten).\nRobert souhaite apprendre le kitesurf et faire des rencontres. L'annonce j combine stage d'initiation et ambiance festive de groupe (barbecue, soirées, volley).",
    "ar": "💡 الحل: j (عرض الموسم الخاص – التزلج الشراعي).\nيرغب روبرت في تعلم ركوب الأمواج الشراعي والتعرف على أصدقاء جدد. يقدم الإعلان j دورة تدريبية وأنشطة جماعية ترفيهية (شواء، سهرات سينمائية، كرة طائرة شاطئية)."
  },
  "15": {
    "text": "💡 Lösung: h (Helikopter-Rundflüge über Rügen).\nEhepaar Gerber will seinen Hochzeitstag auf Rügen besonders feiern. Anzeige h bietet exklusive Helikopter-Rundflüge über Rügen mit Begrüßungscocktail und Sekt.",
    "fr": "💡 Solution : h (Vols en hélicoptère au-dessus de Rügen).\nLes Gerber veulent célébrer leur anniversaire de mariage à Rügen de façon exceptionnelle. L'annonce h propose des survols en hélicoptère avec coupe de champagne.",
    "ar": "💡 الحل: h (جولات بالمروحية فوق روغن).\nيريد الزوجان غيربر الاحتفال بذكرى زواجهما في جزيرة روغن بطريقة فريدة. يقدم الإعلان h جولات هليكوبتر فوق الجزيرة مع مشروب ترحيبي."
  },
  "16": {
    "text": "💡 Lösung: e (Rügen im Herbst erleben ...).\nFrau Biber möchte den Ort zu Fuß kennenlernen. Anzeige e bietet geführte Wanderungen mit fachkundiger Begleitung auf der Insel Rügen.",
    "fr": "💡 Solution : e (Découvrir Rügen en automne...).\nMme Biber et son amie veulent découvrir leur lieu de vacances à pied. L'annonce e propose des randonnées pédestres guidées à travers l'île.",
    "ar": "💡 الحل: e (استكشاف روغن في الخريف...).\nترغب السيدة بيبر وصديقتها في استكشاف المكان سيراً على الأقدام. يقدم الإعلان e جولات مشي بصحبة مرشدين خبراء على جزيرة روغن."
  },
  "17": {
    "text": "💡 Lösung: f (Verpassen Sie nicht unsere Hafenpartys!).\nHerr Müller kann nicht mit dem Schiff fahren, möchte aber den Kreuzfahrtschiffen nah sein. Anzeige f lädt zu Hafenpartys am Passagierkai ein, wo die Schiffsanläufe der großen Schiffe gefeiert werden.",
    "fr": "💡 Solution : f (Ne manquez pas nos fêtes portuaires !).\nM. Müller ne peut pas faire de croisière mais veut admirer les paquebots de près. L'annonce f invite aux festivités à quai lors de l'arrivée des géants des mers.",
    "ar": "💡 الحل: f (لا تفوتوا حفلات الميناء!).\nلا يستطيع السيد مولر ركوب السفن لأسباب صحية لكنه يريد الاقتراب من السفن العملاقة. يدعو الإعلان f إلى احتفالات رصيف الميناء عند رسو كبرى السفن."
  },
  "18": {
    "text": "💡 Lösung: i (Hanse Sail Rostock).\nFamilie Denkler möchte ihren Urlaub mit einer Schiffsreise verbinden. Anzeige i bietet traditionelle Schifffahrt mit Tages-, Abend- und Kurzfahrten auf der Ostsee an.",
    "fr": "💡 Solution : i (Hanse Sail Rostock).\nLa famille Denkler souhaite faire une petite croisière en mer. L'annonce i propose des sorties en mer traditionnelles (sorties à la journée, en soirée ou courtes traversées).",
    "ar": "💡 الحل: i (هانزه زايل روستوك).\nتريد عائلة دينكلر القيام برحلة بحرية قصيرة أثناء إقامتها. يقدم الإعلان i رحلات بحرية تقليدية نهارية ومسائية وقصيرة على بحر البلطيق."
  },
  "19": {
    "text": "💡 Lösung: a (Naturkundemuseum Barther Bodden).\nFrau Niederweg sucht ein Ziel für das Projekt „Tiere im Ostseeraum“. Anzeige a präsentiert das Naturkundemuseum mit dem Schwerpunkt „Meerestiere der Ostsee“ und Nationalparkbesuch.",
    "fr": "💡 Solution : a (Musée d'histoire naturelle Barther Bodden).\nMme Niederweg cherche une sortie scolaire sur la faune de la Baltique. L'annonce a présente une exposition dédiée aux paysages et aux animaux marins de la Baltique.",
    "ar": "💡 الحل: a (متحف التاريخ الطبيعي بارتر بودن).\nتبحث المعلمة نيدرفيغ عن وجهة لرحلة مدرسية حول حيوانات بحر البلطيق. يعرض الإعلان a متحفاً متخصصاً في حيوانات وكائنات بحر البلطيق مع زيارة المحمية الطبيعية."
  },
  "20": {
    "text": "💡 Lösung: Ja.\nLara schreibt, dass das Erlebnis ihre Einstellung total geändert hat: „Da es mich so begeistert, kann ich einfach nicht mehr dagegen sein.“ Sie ist also dafür.",
    "fr": "💡 Solution : Oui (Ja).\nLara indique que cette expérience a totalement changé son avis et qu'elle souhaite absolument recommencer : elle y est donc clairement favorable.",
    "ar": "💡 الحل: نعم (Ja).\nتوضح لارا أن تجربتها غيرت رأيها كلياً وأنها تريد التزلج ليلاً مجدداً، ولم تعد معارضة للفكرة بل أصبحت متحمسة لها."
  },
  "21": {
    "text": "💡 Lösung: Nein.\nKevin betont den Tierschutz und die Natur: „Weil ich nicht Ski fahre und die Natur schützen möchte, finde ich so ein Angebot unattraktiv. Das brauchen wir nicht.“",
    "fr": "💡 Solution : Non (Nein).\nKevin souligne la protection de la nature et le dérangement des animaux causé par la lumière artificielle nocturne : il s'y oppose fermement.",
    "ar": "💡 الحل: لا (Nein).\nيؤكد كيفن على ضرورة حماية البيئة وعدم إزعاج الحيوانات بالضوء الاصطناعي ليلاً، ويرى أن هذا العرض غير مرغوب فيه ولا حاجة له."
  },
  "22": {
    "text": "💡 Lösung: Nein.\nKarl warnt vor Umweltzerstörung in den Bergen: „Ist doch klar, dass die Berge ab sofort möglichst in Ruhe gelassen werden sollen... statt noch mehr in die Natur einzugreifen.“",
    "fr": "💡 Solution : Non (Nein).\nKarl dénonce l'impact écologique des infrastructures alpines et réclame qu'on laisse la montagne en paix plutôt que d'empiéter encore plus sur la nature.",
    "ar": "💡 الحل: لا (Nein).\nيحذر كارل من المشاكل البيئية في الجبال ويدعو إلى ترك الطبيعة في سلام بدلاً من التدخل الإضافي فيها."
  },
  "23": {
    "text": "💡 Lösung: Ja.\nSusanne plädiert für das Nacht-Hobby: „Warum sollen die Menschen in den Bergen nicht auch die Möglichkeit haben, mal nachts ihr Hobby auszuüben?“ Sie befürwortet es.",
    "fr": "💡 Solution : Oui (Ja).\nSusanne estime légitime que les montagnards puissent pratiquer leur passion nocturne, tout comme elle aime se promener la nuit au bord de la mer.",
    "ar": "💡 الحل: نعم (Ja).\nترى سوزان أنه من حق سكان الجبال ممارسة هوايتهم ليلاً كما تفعل هي بالتنزه ليلاً على شاطئ البحر، وهي مؤيدة للفكرة."
  },
  "24": {
    "text": "💡 Lösung: Nein.\nMartin empört sich über die Pläne: „Das kann ja wohl nicht ihr Ernst sein... Das ist ja wohl das Letzte.“ Er lehnt es vollkommen ab.",
    "fr": "💡 Solution : Non (Nein).\nMartin s'indigne de cette initiative des exploitants de remontées mécaniques, la qualifiant d'inacceptable (« le comble »).",
    "ar": "💡 الحل: لا (Nein).\nيعبر مارتن عن استيائه الشديد من أصحاب مصاعد التزلج ورفضه التام لفتح مسارات التزلج ليلاً."
  },
  "25": {
    "text": "💡 Lösung: Ja.\nMarc ist Wirt/Gastronom und freut sich über längere Öffnungszeiten und mehr Einnahmen durch die „Nacht-Pisten-Gaudi“. Er verteidigt das Angebot gegen Kritiker.",
    "fr": "💡 Solution : Oui (Ja).\nMarc, gérant d'établissement en altitude, salue cette opportunité d'accueillir des clients plus tardivement et d'améliorer les revenus face à la baisse de fréquentation.",
    "ar": "💡 الحل: نعم (Ja).\nمارك صاحب مطعم جبلي ويرحب بتمديد ساعات العمل لخدمة المتزلجين ليلاً وزيادة الدخل، ويرى اعتراضات حماة البيئة غير منصفة."
  },
  "26": {
    "text": "💡 Lösung: Nein.\nOtto kritisiert das künstliche Licht und den Lärm: „Das stört doch die schöne Stille, die nachts in den Bergen herrscht.“ Er ist dagegen.",
    "fr": "💡 Solution : Non (Nein).\nOtto estime que l'éclairage artificiel et l'afflux de skieurs nocturnes détruisent le silence et la quiétude des montagnes la nuit.",
    "ar": "💡 الحل: لا (Nein).\nينتقد أوتو الإضاءة الاصطناعية وحشود المتزلجين ليلاً لأن ذلك يدمر الهدوء والسكينة الطبيعية للجبال."
  },
  "27": {
    "text": "💡 Lösung: b (sollte man nur, wenn es die anderen Gäste nicht stört).\nIm Text steht: „Auf jeden Fall sollten Raucher vor dem Anzünden einer Zigarette fragen, ob es die anderen Gäste stört.“",
    "fr": "💡 Solution : b (ne devrait se faire que si cela ne dérange pas les autres clients).\nLe texte indique qu'un fumeur doit systématiquement s'assurer auprès des personnes présentes que la fumée ne les incommode pas avant d'allumer une cigarette.",
    "ar": "💡 الحل: b (ينبغي فقط إذا كان لا يزعج الزبائن الآخرين).\nينص الدليل على أنه يجب على المدخنين في كل الأحوال سؤال الضيوف الآخرين عما إذا كان التدخين يزعجهم قبل إشعال السيجارة."
  },
  "28": {
    "text": "💡 Lösung: c (sollte man dem Kellner ein Zeichen mit der Hand machen).\nIm Text heißt es ausdrücklich: „Um den Kellner auf sich aufmerksam zu machen, reicht oft schon ein kleines Handzeichen.“",
    "fr": "💡 Solution : c (on devrait faire un signe de la main au serveur).\nLe guide recommande d'attirer discrètement l'attention du serveur par un simple petit signe de la main (Handzeichen).",
    "ar": "💡 الحل: c (ينبغي إعطاء إشارة باليد للنادل).\nيوضح النص أن إشارة صغيرة باليد تكفي لجذب انتباه النادل دون الحاجة للمناداة بصوت مرتفع."
  },
  "29": {
    "text": "💡 Lösung: b (ist es besser, mit einer Kreditkarte zu bezahlen).\nDer Text empfiehlt: „Empfehlenswerter, weil diskreter, ist die Benutzung einer Kreditkarte.“",
    "fr": "💡 Solution : b (il est préférable de régler par carte de crédit).\nLe texte précise que le paiement par carte bancaire est plus recommandé car plus discret (empfehlenswerter, weil diskreter).",
    "ar": "💡 الحل: b (من الأفضل الدفع ببطاقة الائتمان).\nينصح النص باستخدام بطاقة الائتمان لأنها الخيار الأكثر تفضيلاً ولباقة وتحفظاً عند دفع الحساب."
  },
  "30": {
    "text": "💡 Lösung: c (lange am Handy zu reden, während die Gäste warten).\nIm Text steht: „...da es unhöflich ist, die Gäste lange auf sich warten zu lassen.“",
    "fr": "💡 Solution : c (de parler longuement au téléphone pendant que les invités attendent).\nLe texte qualifie d'impoli le fait de prolonger un appel et de faire attendre ses convives.",
    "ar": "💡 الحل: c (التحدث طويلاً في الهاتف بينما ينتظر الضيوف).\nيذكر النص أنه من غير اللائق والوقح ترك الضيوف ينتظرون لفترة طويلة بسبب مكالمة هاتفية."
  },
  "h1": {
    "text": "💡 Lösung: Richtig.\nDie Durchsage am Bahnsteig kündigt die Abfahrt an: „...EN 490 Hans Halbers nach Hamburg Altona... fährt ab... Bitte einsteigen! Türen schließen automatisch.“",
    "fr": "💡 Solution : Vrai (Richtig).\nL'annonce sur le quai signale le départ imminent du train : « ...EN 490 Hans Halbers... fährt ab... Bitte einsteigen! ».",
    "ar": "💡 الحل: صحيح (Richtig).\nيعلن النداء الصوتي في المحطة عن مغادرة القطار: «قطار يورو نايت 490 يغادر الآن... يرجى الصعود!»."
  },
  "h2": {
    "text": "💡 Lösung: b (transportiert sowohl Personen als auch Autos).\nIn der Durchsage heißt es: „...mit einem Zugteil 'Auto im Reisezug' fährt ab.“ Es werden also Autos und Personen befördert.",
    "fr": "💡 Solution : b (transporte aussi bien des passagers que des voitures).\nL'annonce mentionne la présence d'une rame « Auto im Reisezug » permettant le transport simultané des véhicules et des passagers.",
    "ar": "💡 الحل: b (ينقل الركاب والسيارات معاً).\nيذكر النداء أن القطار يشتمل على قسم خاص لنقل السيارات مع المسافرين (Auto im Reisezug)."
  },
  "h3": {
    "text": "💡 Lösung: Richtig.\nDie automatische Ansage beginnt: „Sie sind mit der automatischen Programmdurchsage des österreichischen Akademietheaters in Wien verbunden. Unser Spielplan...“",
    "fr": "💡 Solution : Vrai (Richtig).\nLe répondeur égrène la programmation des pièces et les horaires de l'Akademietheater de Vienne.",
    "ar": "💡 الحل: صحيح (Richtig).\nيقدم الرد الآلي مواعيد وجدول عروض مسرح الأكاديمية النمساوي في فيينا."
  },
  "h4": {
    "text": "💡 Lösung: b (Am Donnerstag und Freitag).\nDie Ansage nennt: „Donnerstag, 17.00 Uhr und Freitag, 18.00 Uhr: Adventlesung: die Weihnachtsgeschichte.“",
    "fr": "💡 Solution : b (Le jeudi et le vendredi).\nLa lecture de l'Avent / conte de Noël a lieu le jeudi à 17h et le vendredi à 18h.",
    "ar": "💡 الحل: b (يومي الخميس والجمعة).\nتقام قراءة قصة عيد الميلاد يوم الخميس الساعة 17:00 والجمعة الساعة 18:00."
  },
  "h5": {
    "text": "💡 Lösung: Richtig.\nDer Sprecher leitet ein: „Und nun, meine Damen und Herren, hören Sie die Abendnachrichten.“",
    "fr": "💡 Solution : Vrai (Richtig).\nLe présentateur annonce expressément l'édition du journal du soir (Abendnachrichten).",
    "ar": "💡 الحل: صحيح (Richtig).\nيعلن المذيع بوضوح بدء نشرة الأخبار المسائية (Abendnachrichten)."
  },
  "h6": {
    "text": "💡 Lösung: c (war mit dem Fahrrad unterwegs).\nDie Nachricht berichtet: „Das Kind wollte mit seinem Fahrrad die Gleise... überqueren.“",
    "fr": "💡 Solution : c (circulait à vélo).\nLe bulletin indique que l'enfant tentait de traverser les voies avec son vélo (mit seinem Fahrrad).",
    "ar": "💡 الحل: c (كان يقود دراجة هوائية).\nتفيد النشرة بأن الطفل كان يعبر السكة الحديدية بدراجته الهوائية (mit seinem Fahrrad)."
  },
  "h7": {
    "text": "💡 Lösung: Falsch.\nMarie-Luise bittet Adele, die Karten abzuholen, weil sie länger im Büro bleiben muss, aber sie kommt nach: „Wir treffen uns wie verabredet am Eingang.“",
    "fr": "💡 Solution : Faux (Falsch).\nMarie-Luise doit rester un peu plus tard au bureau et demande à Adèle de retirer les billets, mais elle sera bien présente au rendez-vous à l'entrée.",
    "ar": "💡 الحل: خطأ (Falsch).\nماري لويز تأخرت قليلاً في المكتب وطلبت استلام التذاكر، لكنها ستلتحق بصديقتها عند مدخل المسرح كما هو متفق عليه."
  },
  "h8": {
    "text": "💡 Lösung: a (Die Theaterkarten abholen).\nMarie-Luise bittet: „Ich habe die Eintrittskarten an der Theaterkasse zurücklegen lassen... Kannst du das bitte übernehmen?“",
    "fr": "💡 Solution : a (Retirer les billets de théâtre).\nMarie-Luise demande à Adèle de récupérer les billets mis de côté à la billetterie.",
    "ar": "💡 الحل: a (استلام تذاكر المسرح).\nتطلب ماري لويز من صديقتها استلام التذاكر المحجوزة في شباك التذاكر بالمسرح."
  },
  "h9": {
    "text": "💡 Lösung: Richtig.\nDie Bandansage gibt die Entfernungen an: „Unser Hotel liegt 22 km vom Flughafen Hannover und 2,5 km vom Hauptbahnhof entfernt...“",
    "fr": "💡 Solution : Vrai (Richtig).\nLe message fournit les indications précises de situation géographique et de distance par rapport aux gares et aéroports.",
    "ar": "💡 الحل: صحيح (Richtig).\nيوضح الرد الآلي موقع الفندق والمسافات الفاصلة بينه وبين المحطة المركزية والمطار ومركز المعارض."
  },
  "h10": {
    "text": "💡 Lösung: c (Der Bahnhof).\nDas Hotel liegt nur 2,5 km vom Hauptbahnhof entfernt, während die Ausstellung 9 km und der Flughafen 22 km entfernt sind.",
    "fr": "💡 Solution : c (La gare).\nL'hôtel est à seulement 2,5 km de la gare centrale (Hauptbahnhof), contre 9 km pour le parc des expositions et 22 km pour l'aéroport.",
    "ar": "💡 الحل: c (محطة القطار).\nيبعد الفندق 2.5 كم فقط عن محطة القطار المركزية، مقارنة بـ 9 كم لمركز المعارض و22 كم للمطار."
  },
  "h11": {
    "text": "💡 Lösung: c (1993).\nDie Museumsführerin sagt: „...das Käthe-Kruse-Puppen-Museum in Donauwörth in Schwaben zu besuchen, das bereits seit 1993 besteht.“",
    "fr": "💡 Solution : c (1993).\nLe guide précise que le musée de la poupée Käthe Kruse existe depuis 1993 (bereits seit 1993 besteht).",
    "ar": "💡 الحل: c (1993).\nتذكر المرشدة في المتحف أن متحف دمى كيتي كروزه قائم ومفتوح منذ عام 1993."
  },
  "h12": {
    "text": "💡 Lösung: c (warm und weich).\nIm Vortrag heißt es: „Und Käthe Kruse wusste, wie die Puppe sein sollte: warm, weich und nicht zu schwer...“",
    "fr": "💡 Solution : c (chaude et douce).\nKäthe Kruse voulait créer pour sa fille une poupée « chaude, douce et pas trop lourde » (warm, weich und nicht zu schwer).",
    "ar": "💡 الحل: c (دافئة ولينة).\nأرادت كيتي كروزه أن تكون أول دمية تصنعها «دافئة ولينة وليست ثقيلة جداً» (warm, weich)."
  },
  "h13": {
    "text": "💡 Lösung: b (Weil ihre Puppen Kindern ähnlich waren).\nDie Führerin erklärt: „Käthe Kruse wurde über Nacht berühmt... weil sie nicht wie bisher wie kleine Erwachsene waren, sondern eben ganz natürlich wie Kinder aussahen.“",
    "fr": "💡 Solution : b (Parce que ses poupées ressemblaient à des enfants).\nElle a acquis une renommée internationale car ses poupées avaient les traits naturels de véritables enfants plutôt que ceux de petits adultes figés.",
    "ar": "💡 الحل: b (لأن دمىها كانت تشبه الأطفال الحقيقيين).\nنالت شهرة واسعة بين عشية وضحاها لأن دمىها كانت ذات ملامح طبيعية تشبه الأطفال بدلاً من أن تبدو كبالغين صغار."
  },
  "h14": {
    "text": "💡 Lösung: a (Einen Workshop besuchen).\nDie Führerin erwähnt: „Danach könnt ihr endlich aktiv werden in unserem Begleitprogramm, wo ihr Spielzeug aus Wegwerfmaterialien selbst produzieren könnt. Dieser Workshop dauert circa 90 Minuten.“",
    "fr": "💡 Solution : a (Participer à un atelier pratique).\nLe musée propose un atelier (Workshop) de 90 minutes où les enfants fabriquent eux-mêmes des jouets à partir de matériaux recyclés.",
    "ar": "💡 الحل: a (حضور ورشة عمل).\nيتيح برنامج المتحف للأطفال المشاركة في ورشة عمل لمدة 90 دقيقة لصنع ألعاب من مواد قابلة للتدوير."
  },
  "h15": {
    "text": "💡 Lösung: c (bis zu zwölf Kinder einlädt).\nZur Geburtstagsfeier heißt es: „Allerdings müsst ihr zwischen sechs und zwölf Jahre alt sein und dürft nicht mehr als 12 Kinder einladen.“",
    "fr": "💡 Solution : c (on n'invite pas plus de douze enfants).\nPour fêter son anniversaire au musée, il ne faut pas inviter plus de 12 enfants (nicht mehr als 12 Kinder einladen).",
    "ar": "💡 الحل: c (دعوة ما لا يزيد عن اثني عشر طفلاً).\nيشترط لإقامة حفل عيد ميلاد في المتحف ألا يتجاوز عدد الأطفال المدعوين 12 طفلاً."
  },
  "h16": {
    "text": "💡 Lösung: Richtig.\nDie Mutter fragt: „Was macht dein Zahn?“, worauf Hanna antwortet: „Der tut echt weh. Die Schmerztabletten haben nicht wirklich geholfen.“",
    "fr": "💡 Solution : Vrai (Richtig).\nÀ la question de sa mère sur sa dent, Hanna confirme qu'elle a très mal malgré les comprimés antidouleur.",
    "ar": "💡 الحل: صحيح (Richtig).\nتسأل الأم عن السن، فتجيب هناء بأنه يؤلمها بشدة وأن المسكنات لم تجدِ نفعاً."
  },
  "h17": {
    "text": "💡 Lösung: Falsch.\nHanna kaufte sich nur ein T-Shirt; den Rock hat ihre Freundin Vanessa gekauft: „Vanessa hat sich auch etwas gekauft, einen Rock.“",
    "fr": "💡 Solution : Faux (Falsch).\nHanna n'a acheté qu'un t-shirt ; c'est son amie Vanessa qui a acheté une jupe (einen Rock).",
    "ar": "💡 الحل: خطأ (Falsch).\nاشترت هناء قميص تي شيرت فقط؛ بينما اشترت صديقتها فانيسا التنورة (Vanessa hat sich... einen Rock gekauft)."
  },
  "h18": {
    "text": "💡 Lösung: Richtig.\nAuf die Frage nach dem Preis antwortet Hanna: „Nur 13 Euro.“",
    "fr": "💡 Solution : Vrai (Richtig).\nHanna indique expressément avoir payé son t-shirt seulement 13 euros.",
    "ar": "💡 الحل: صحيح (Richtig).\nتؤكد هناء أن سعر التي شيرت كان 13 يورو فقط."
  },
  "h19": {
    "text": "💡 Lösung: Richtig.\nDie Mutter bemerkt: „Na ja, so richtig warm für eine Grillparty am Abend ist es ja eigentlich noch nicht. Du musst auf jeden Fall noch eine Jacke anziehen.“",
    "fr": "💡 Solution : Vrai (Richtig).\nLa mère souligne qu'il ne fait pas encore assez chaud le soir pour un barbecue et qu'il faut prévoir une veste.",
    "ar": "💡 الحل: صحيح (Richtig).\nتوضح الأم أن الجو لا يزال بارداً بعض الشيء في المساء ولا يناسب حفلة شواء دون ارتداء سترة."
  },
  "h20": {
    "text": "💡 Lösung: Falsch.\nDas T-Shirt ist hellblau („hellblau?“). Die Jeansjacke, die Hanna mitnehmen will, ist schwarz.",
    "fr": "💡 Solution : Faux (Falsch).\nLe t-shirt acheté est bleu clair (hellblau). C'est la veste en jean qui est noire.",
    "ar": "💡 الحل: خطأ (Falsch).\nالتي شيرت الذي اشترته هناء لونه أزرق فاتح (hellblau)؛ بينما السترة الجينز هي السوداء."
  },
  "h21": {
    "text": "💡 Lösung: Falsch.\nHanna würde es umtauschen, aber sie kann es nicht, da es ein Sonderangebot war: „Das war doch ein Sonderangebot. Sonderangebote kann man doch nicht umtauschen.“ Es liegt also nicht an ihrem Willen.",
    "fr": "💡 Solution : Faux (Falsch).\nHanna ne refuse pas par principe d'échanger le t-shirt, mais explique que c'est un article soldé non échangeable (Sonderangebote kann man doch nicht umtauschen).",
    "ar": "💡 الحل: خطأ (Falsch).\nهناء لا ترفض التبديل عن قصد، بل تبين أن السلعة مخفضة ولا يمكن تبديل العروض المخفضة حسب قوانين المحل."
  },
  "h22": {
    "text": "💡 Lösung: Falsch.\nDie Mutter schenkt es ihr nicht, sondern leiht es ihr für die Party: „Du leihst mir wirklich dein grünes T-Shirt...? – Aber am Montag brauche ich es.“",
    "fr": "💡 Solution : Faux (Falsch).\nLa mère ne lui donne pas le t-shirt vert, elle le lui prête uniquement pour la soirée du samedi (elle en a besoin lundi).",
    "ar": "💡 الحل: خطأ (Falsch).\nالأم لا تهدي التي شيرت الأخضر لهناء، بل تعيرها إياه لحفلة نهاية الأسبوع وتطلبه مجدداً ليوم الإثنين."
  },
  "h23": {
    "text": "💡 Lösung: a (Moderatorin).\nDie Moderatorin sagt: „Meine Kinder zum Beispiel klagen über Langeweile. Die Zeit vergeht ihnen zu langsam. Wir Erwachsene dagegen haben das Gefühl, die Zeit vergeht zu schnell.“",
    "fr": "💡 Solution : a (L'animatrice).\nL'animatrice constate d'après ses enfants que ceux-ci s'ennuient plus facilement et trouvent que le temps passe trop lentement par rapport aux adultes.",
    "ar": "💡 الحل: a (المذيعة).\nتطرح المذيعة ملاحظتها الشخصية بأن أطفالها يشتكون من الملل ويمر الوقت عليهم ببطء على عكس البالغين."
  },
  "h24": {
    "text": "💡 Lösung: c (Mario Kulmer).\nHerr Kulmer berichtet: „Ich war mein ganzes Leben lang sehr aktiv. Deshalb habe ich auch vieles, woran ich mich erinnern kann. Wenn ich zurückblicke, habe ich das Gefühl, dass ich damals sehr viel Zeit zur Verfügung hatte.“",
    "fr": "💡 Solution : c (Mario Kulmer).\nM. Kulmer explique qu'ayant toujours mené une vie très active, il dispose de nombreux souvenirs qui lui donnent l'impression d'avoir eu beaucoup de temps.",
    "ar": "💡 الحل: c (ماريو كولمر).\nيوضح السيد كولمر أنه كان نشطاً طوال حياته ويمتلك ذكريات كثيرة تجعله يشعر عند استرجاعها بأنه كان يمتلك الكثير من الوقت."
  },
  "h25": {
    "text": "💡 Lösung: a (Moderatorin).\nDie Moderatorin führt das Thema ein: „Ich möchte nun über einen Begriff mit Ihnen sprechen, der heutzutage – wie man so sagt – in aller Munde ist: der des Zeitmanagements.“",
    "fr": "💡 Solution : a (L'animatrice).\nL'animatrice aborde la question de la gestion du temps en soulignant qu'il s'agit d'un thème très en vogue aujourd'hui (« in aller Munde »).",
    "ar": "💡 الحل: a (المذيعة).\nتطرح المذيعة مفهوم إدارة الوقت مشيرة إلى أنه موضوع شائع جداً وحديث الساعة في عصرنا الحالي."
  },
  "h26": {
    "text": "💡 Lösung: b (Leo Hofl).\nPsychologe Leo Hofl erläutert: „Das führt oft zu Stress... Und diesen Stress kann man durch Zeitmanagement vermeiden.“",
    "fr": "💡 Solution : b (Leo Hofl).\nLe psychologue Leo Hofl affirme qu'une bonne gestion du temps permet d'éviter et de réduire le stress provoqué par l'accumulation des tâches.",
    "ar": "💡 الحل: b (ليو هوفل).\nيوضح الأخصائي النفسي ليو هوفل أن إدارة الوقت تساعد على تفادي الإجهاد والتوتر الناجم عن ضيق الوقت وتعدد المهام."
  },
  "h27": {
    "text": "💡 Lösung: b (Leo Hofl).\nHerr Hofl betont: „Beim Zeitmanagement muss man die Zeit so einteilen, dass man nicht nur seine Arbeit, sondern auch Dinge macht, die Spaß machen. Die Freizeit gehört auch zum Zeitplan.“",
    "fr": "💡 Solution : b (Leo Hofl).\nLeo Hofl insiste sur le fait qu'un emploi du temps doit impérativement réserver des plages dédiées aux loisirs et au repos à côté du travail.",
    "ar": "💡 الحل: b (ليو هوفل).\nيؤكد ليو هوفل أن تنظيم الوقت يجب أن يوازن بين أداء الواجبات والتمتع بأوقات الفراغ والراحة."
  },
  "h28": {
    "text": "💡 Lösung: a (Moderatorin).\nDie Moderatorin vermutet: „Sicherlich haben Pensionäre genug Zeit, da sie nicht mehr arbeiten und darum nicht mehr viel tun müssen.“",
    "fr": "💡 Solution : a (L'animatrice).\nL'animatrice émet l'idée reçue que les retraités disposent de tout leur temps puisqu'ils n'ont plus d'activité professionnelle obligatoire.",
    "ar": "💡 الحل: a (المذيعة).\nتفترض المذيعة أن المتقاعدين لديهم وفرة من الوقت لكونهم لم يعودوا ملزمين بالعمل اليومي."
  },
  "h29": {
    "text": "💡 Lösung: c (Mario Kulmer).\nHerr Kulmer rät den Zuhörern: „Man sollte nicht zu lange darüber nachdenken, was man als Nächstes tut. Denn auch zu langes Planen kostet Zeit.“",
    "fr": "💡 Solution : c (Mario Kulmer).\nM. Kulmer conseille de ne pas passer trop de temps à planifier ses moindres faits et gestes, car planifier excessivement fait perdre du temps.",
    "ar": "💡 الحل: c (ماريو كولمر).\nينصح السيد كولمر بعدم الإفراط في التفكير والتخطيط لكل خطوة قادمة لأن التخطيط المفرط يستهلك الوقت بحد ذاته."
  },
  "h30": {
    "text": "💡 Lösung: b (Leo Hofl).\nHerr Hofl schließt: „Für jeden von uns gibt es exakt dieselbe Zeit pro Tag, nämlich 24 Stunden. Im Grunde genommen gibt es kein Zuviel und kein Zuwenig.“",
    "fr": "💡 Solution : b (Leo Hofl).\nLeo Hofl conclut en rappelant que le temps est fondamentalement démocratique : chaque individu dispose exactement de 24 heures par jour.",
    "ar": "💡 الحل: b (ليو هوفل).\nيختتم ليو هوفل بالقول إن الوقت ديمقراطي وعادل للجميع، فكل إنسان يمتلك 24 ساعة بالضبط في اليوم الواحد."
  }
}

translations = {
  "parts": {
    "1": {
      "instructions": {
        "ar": "اقرأ النص والمهام من 1 إلى 6. اختر: هل العبارات صحيحة أم خاطئة؟",
        "fr": "Lisez le texte et les questions 1 à 6. Choisissez : les affirmations sont-elles vraies ou fausses ?"
      },
      "articles": [
        {
          "heading": {
            "ar": "مدونة ألويس (AloisBlog.at)",
            "fr": "AloisBlog.at"
          },
          "sub": {
            "ar": "14 مايو",
            "fr": "14 mai"
          },
          "body": {
            "ar": [
              "أود اليوم أن أروي لكم تجربتي بالأمس التي تركت في نفسي أثراً عميقاً. قبل بضعة أيام، تعرفت على سيدة مسنة، السيدة مولاو، في الترام. عرضت عليها مقعدي وبدأنا الحديث. وتبين أنها نزلت في نفس المحطة التي نزلتُ فيها. إنها تعيش، منذ تقاعدها، في دار السكن المشترك بين الأجيال بالقرب منا. وعند الوداع، دعتني مع عائلتي لتناول القهوة عندها.",
              "بالأمس ذهبتُ إذاً مع غيرترود والأولاد إلى هناك. تسكن السيدة مولاو في شقة مفروشة بذوق رفيع في الطابق الأرضي. وفي الشقق المجاورة يعيش متدربان مهنيان وأم عازبة. تناولنا مع القهوة كعكة الجبن المصنوعة منزلياً. جلسنا معاً في جو مريح وأخبرتنا عن الحياة في دار السكن المشترك. اتخذت السيدة مولاو قرار الانتقال إلى هناك لأنها تتلقى الرعاية هنا عندما تحتاجها، دون أن تضطر للتخلي عن استقلاليتها. لكن الميزة الكبرى بلا شك هي العيش المشترك بين مختلف الأجيال. ومثال على ذلك: بما أن السيدة مولاو لا تزال بصحة جيدة ولديها متسع من الوقت، فإنها تعتني بطفل جارتها مرتين في الأسبوع. ولا ترى في ذلك أي إرهاق لها على الإطلاق، بل يسعدها كثيراً أن تكون «جدة». وبذلك تشعر بأنها نافعة وهذا يمنح حياتها معنى.",
              "بعد تناول القهوة، تجولنا قليلاً في المجمع السكني. أعجبت الحديقة مع الملعب في الجزء الخلفي من الدار الأولاد كثيراً. وكان هناك أطفال آخرون استطاعوا اللعب والمرح معهم بينما كنا نجلس على مقعد خشبي. أخبرتنا السيدة مولاو أن التعايش هنا لا يقتصر على الغرف المشتركة والمساحات الخضراء، بل تُنظم أيضاً رحلات جماعية بانتظام. وكانت آخر رحلة إلى بورغنلاند. وهي نفسها تشارك حالياً في مجموعة طبخ يتعلم فيها الصغار والكبار من بعضهم البعض.",
              "كان انطباعي أنني أمام امرأة نشيطة ومفعمة بالحياة ولا تطابق مطلقاً تصوري السابق عن «المسنين». فهل يعود ذلك إلى نمط هذا السكن؟؟ يوم الأحد ستأتي السيدة مولاو لتناول الغداء عندنا. ونحن جميعاً نتطلع بشوق إلى ذلك. صديقكم ألويس."
            ],
            "fr": [
              "Je voudrais vous raconter aujourd'hui mon expérience d'hier, qui m'a beaucoup impressionné. Il y a quelques jours, j'ai fait la connaissance d'une dame âgée, Mme Mohlau, dans le tramway. Je lui ai offert ma place assise et c'est ainsi que la conversation s'est engagée. Il s'est avéré qu'elle descendait à la même station que moi. En effet, depuis son départ à la retraite, elle vit dans la résidence intergénérationnelle située près de chez nous. Au moment de nous quitter, elle m'a invité avec ma famille à venir prendre un café chez elle.",
              "Hier, j'y suis donc allé avec Gertrud et les garçons. Mme Mohlau habite un appartement meublé avec goût au rez-de-chaussée. Dans les logements voisins vivent deux apprentis et une mère célibataire. Pour accompagner le café, nous avons dégusté un gâteau au fromage blanc maison. Nous étions confortablement installés et elle nous a raconté sa vie dans la résidence. Mme Mohlau a pris la décision d'emménager ici car elle y bénéficie d'une assistance en cas de besoin, sans pour autant devoir renoncer à son indépendance. Mais le plus grand avantage réside sans conteste dans la cohabitation des différentes générations. Un exemple : comme Mme Mohlau est encore en excellente santé et dispose de beaucoup de temps libre, elle garde l'enfant de sa voisine deux fois par semaine. Elle n'y voit aucune fatigue excessive, au contraire, cela lui procure une joie immense d'endosser le rôle de « grand-mère ». Elle se sent ainsi utile et cela donne un sens à sa vie.",
              "Après le café, nous sommes allés visiter un peu les installations. Les garçons ont tout particulièrement apprécié le jardin et son aire de jeux à l'arrière de la résidence. Il y avait aussi d'autres enfants avec lesquels ils ont pu s'amuser pendant que nous étions assis sur un banc. Mme Mohlau nous a expliqué que la vie en communauté ne se limite pas aux espaces partagés et aux espaces verts. Des sorties communes sont régulièrement organisées. La dernière s'est déroulée dans le Burgenland. Quant à elle, elle participe actuellement à un atelier de cuisine où jeunes et anciens apprennent mutuellement.",
              "J'ai eu le sentiment d'avoir devant moi une femme pleine d'entrain et très active, qui ne correspondait en rien à l'image que je me faisais des « personnes âgées ». Est-ce dû à cette forme d'habitat communautaire ?? Dimanche, Mme Mohlau vient déjeuner chez nous. Nous nous en réjouissons tous déjà. Bien à vous, Alois."
            ]
          }
        }
      ],
      "example": {
        "text": {
          "ar": "تعرف ألويس على السيدة مولاو بالأمس.",
          "fr": "Alois a fait la connaissance de Mme Mohlau hier."
        }
      },
      "questions": {
        "1": {
          "ar": "تسكن السيدة مولاو على مسافة غير بعيدة من ألويس.",
          "fr": "Mme Mohlau habite non loin de chez Alois.",
          "text": {
            "ar": "تسكن السيدة مولاو على مسافة غير بعيدة من ألويس.",
            "fr": "Mme Mohlau habite non loin de chez Alois."
          }
        },
        "2": {
          "ar": "تسكن أيضاً أم مع طفلها داخل شقة السيدة مولاو.",
          "fr": "Une mère et son enfant vivent également dans l'appartement de Mme Mohlau.",
          "text": {
            "ar": "تسكن أيضاً أم مع طفلها داخل شقة السيدة مولاو.",
            "fr": "Une mère et son enfant vivent également dans l'appartement de Mme Mohlau."
          }
        },
        "3": {
          "ar": "من المهم بالنسبة للسيدة المسنة أن تعيش باستقلالية.",
          "fr": "Il est important pour la dame âgée de vivre de manière autonome.",
          "text": {
            "ar": "من المهم بالنسبة للسيدة المسنة أن تعيش باستقلالية.",
            "fr": "Il est important pour la dame âgée de vivre de manière autonome."
          }
        },
        "4": {
          "ar": "تعتني السيدة مولاو بطفل جارتها بانتظام.",
          "fr": "Mme Mohlau s'occupe régulièrement de l'enfant de sa voisine.",
          "text": {
            "ar": "تعتني السيدة مولاو بطفل جارتها بانتظام.",
            "fr": "Mme Mohlau s'occupe régulièrement de l'enfant de sa voisine."
          }
        },
        "5": {
          "ar": "لا يستخدم ملعب السكن المشترك سوى سكانه فقط.",
          "fr": "L'aire de jeux de la résidence n'est utilisée que par ses habitants.",
          "text": {
            "ar": "لا يستخدم ملعب السكن المشترك سوى سكانه فقط.",
            "fr": "L'aire de jeux de la résidence n'est utilisée que par ses habitants."
          }
        },
        "6": {
          "ar": "شاركت السيدة مولاو في رحلة إلى بورغنلاند.",
          "fr": "Mme Mohlau a participé à une excursion dans le Burgenland.",
          "text": {
            "ar": "شاركت السيدة مولاو في رحلة إلى بورغنلاند.",
            "fr": "Mme Mohlau a participé à une excursion dans le Burgenland."
          }
        }
      }
    },
    "2": {
      "instructions": {
        "ar": "اقرأ النص الصحفي والمهام من 7 إلى 9. اختر لكل مهمة الحل الصحيح: أ، ب، أو ج.",
        "fr": "Lisez le texte de presse et les questions 7 à 9. Choisissez la bonne solution a, b ou c pour chaque question."
      },
      "articles": [
        {
          "heading": {
            "ar": "كاتدرائية كولونيا",
            "fr": "La cathédrale de Cologne"
          },
          "sub": {
            "ar": "من مجلة ألمانية",
            "fr": "Extrait d'un magazine allemand"
          },
          "body": {
            "ar": [
              "لا تزال كاتدرائية كولونيا المعلم السياحي الأكثر شعبية لدى الألمان. هذه هي نتيجة استطلاع رأي عبر الإنترنت أجرته الجمعية الألمانية للسياحة وبوابة المدن meinestadt.de.",
              "في هذا الاستطلاع الذي شمل 1600 مستخدم للإنترنت، تمكنت أكبر كنيسة في ألمانيا من الاحتفاظ بهذا المركز بوضوح للمرة الرابعة بنسبة 15 في المائة من الأصوات.",
              "وتقدمت كنيسة السيدة العذراء في دريسدن من المركز الثالث إلى المركز الثاني بنسبة 7.1 في المائة، بينما تراجعت بوابة براندنبورغ في العاصمة بنسبة 6.6 في المائة مرتبة واحدة لتحتل المركز الثالث. ويأتي في المركزين الرابع والخامس في الترتيب قصر نويشفانشتاين وقصر تسفينغر في دريسدن.",
              "ولأول مرة تدخل قائمة أفضل 15 معلماً سياحياً ثلاث وجهات ذات تاريخ عريق: منجم تسوله فيرأين (في إيسن) الذي حل في المركز الثاني عشر في عام عاصمة الثقافة 2010، وقصر إقامة فورتسبورغ وقصر شفيرين اللذان تقاسما المركز الرابع عشر. وبعد غياب أربع سنوات، عاد قطار فوبرتال المعلق (المركز السابع) ومبنى الرايخستاغ في برلين (المركز التاسع) مجدداً إلى قائمة أفضل 15 معلماً.",
              "تحظى المعالم السياحية باهتمام كبير لدى الألمان عموماً: فقد أكد 82 في المائة من المشاركين في الاستطلاع اهتمامهم البالغ بالمزارات السياحية والثقافية. ويربطون ذلك في المقام الأول بالمعالم التاريخية والقصور الفخمة والقلاع والكنائس. وقد قام 90 في المائة من المستطلعين بالفعل بزيارة معلمهم المفضل مرة واحدة على الأقل."
            ],
            "fr": [
              "La cathédrale de Cologne demeure plus que jamais le site touristique préféré des Allemands. C'est ce qui ressort d'un sondage en ligne mené par la Fédération allemande du tourisme et le portail urbain meinestadt.de.",
              "Lors de cette enquête réalisée auprès de 1600 internautes, la plus grande église d'Allemagne a su conserver nettement sa première place pour la quatrième fois consécutive avec 15 % des suffrages.",
              "La Frauenkirche de Dresde est passée de la troisième à la deuxième place avec 7,1 %, tandis que la porte de Brandebourg dans la capitale a reculé d'un rang pour s'établir en troisième position avec 6,6 %. Aux quatrième et cinquième rangs du classement figurent le château de Neuschwanstein et le Zwinger de Dresde.",
              "Pour la première fois, trois attractions chargées d'histoire font leur entrée dans le Top 15 des curiosités préférées : la mine de Zollverein (Essen) se classe douzième en cette année de capitale européenne de la culture 2010, tandis que la Résidence de Wurtzbourg et le château de Schwerin se partagent la 14e place. Après quatre années d'absence, le monorail suspendu de Wuppertal (7e place) et le Reichstag berlinois (9e place) figurent à nouveau dans le Top 15.",
              "Les curiosités touristiques ont généralement la cote auprès des Allemands : 82 % des participants au sondage ont confirmé leur vif intérêt pour les attractions touristiques et culturelles. Ils y associent avant tout les monuments historiques, les châteaux imposants ainsi que les forteresses et les églises. 90 % des personnes interrogées ont déjà visité au moins une fois leur monument favori."
            ]
          }
        }
      ],
      "example": {
        "text": {
          "ar": "الألمان ...",
          "fr": "Les Allemands ..."
        },
        "options": {
          "ar": [
            "يحبون مشاهدة المعالم السياحية.",
            "يهتمون بالثقافة بدرجة ضئيلة نسبياً.",
            "يعشقون بشكل خاص المدن التي تحتوي على معالم سياحية."
          ],
          "fr": [
            "aiment visiter les attractions touristiques.",
            "s'intéressent relativement peu à la culture.",
            "aiment particulièrement les villes dotées de curiosités."
          ]
        }
      },
      "questions": {
        "7": {
          "ar": "يدور هذا النص حول ...",
          "fr": "Ce texte a pour thème ...",
          "text": {
            "ar": "يدور هذا النص حول ...",
            "fr": "Ce texte a pour thème ..."
          },
          "options": {
            "ar": [
              "ما هي المعالم السياحية الموجودة في ألمانيا.",
              "أي المعالم السياحية الألمانية يفضلها الألمان أكثر من غيرها.",
              "ما هي المعالم السياحية التي ينبغي للسياح زيارتها حتماً في ألمانيا."
            ],
            "fr": [
              "les attractions touristiques qui existent en Allemagne.",
              "les sites touristiques allemands que les Allemands préfèrent.",
              "les curiosités que les touristes devraient absolument visiter en Allemagne."
            ]
          }
        },
        "8": {
          "ar": "كاتدرائية كولونيا ...",
          "fr": "La cathédrale de Cologne ...",
          "text": {
            "ar": "كاتدرائية كولونيا ...",
            "fr": "La cathédrale de Cologne ..."
          },
          "options": {
            "ar": [
              "هي المعلم السياحي الأكثر شعبية في ألمانيا منذ عدة سنوات.",
              "كانت في المركز الأول لدى 1600 شخص مستطلع.",
              "كانت معروفة لدى 15% من المستطلعين."
            ],
            "fr": [
              "est depuis plusieurs années l'attraction la plus populaire d'Allemagne.",
              "a été classée première par les 1600 personnes interrogées.",
              "était connue de 15 % des personnes interrogées."
            ]
          }
        },
        "9": {
          "ar": "مدينة برلين ...",
          "fr": "Berlin ...",
          "text": {
            "ar": "مدينة برلين ...",
            "fr": "Berlin ..."
          },
          "options": {
            "ar": [
              "ليس لديها معالم سياحية محبوبة.",
              "تم اختيارها كأكثر مدينة ثقافية محبوبة في ألمانيا.",
              "لديها معلمان سياحيان ضمن قائمة أفضل 15 معلماً."
            ],
            "fr": [
              "n'a pas d'attractions très appréciées.",
              "a été élue ville culturelle préférée d'Allemagne.",
              "compte deux attractions parmi les quinze premières."
            ]
          }
        }
      },
      "instructions2": {
        "ar": "اقرأ النص الصحفي والمهام من 10 إلى 12. اختر لكل مهمة الحل الصحيح: أ، ب، أو ج.",
        "fr": "Lisez le texte de presse et les questions 10 à 12. Choisissez la bonne solution a, b ou c pour chaque question."
      },
      "articles2": [
        {
          "heading": {
            "ar": "جوني، مروع المعلمين",
            "fr": "Johnny, la terreur des profs"
          },
          "sub": {
            "ar": "من صحيفة ألمانية",
            "fr": "Extrait d'un journal allemand"
          },
          "body": {
            "ar": [
              "«نحن مجموعة من القراصنة الصغار المبتدئين ولدينا مشاكل في نزاع مع المعلمين. سنكون سعداء للغاية إذا تفضلت بالحضور لمساعدتنا!» بهذه الكلمات توجهت تلميذة من حي غرينتش في لندن إلى جوني ديب. وبصفتها معجبة كبيرة بسلسلة أفلامه «قراصنة الكاريبي»، طلبت بياتريس ذات التسع سنوات العون من الكابتن جاك سبارو، الشخصية الشهيرة التي يجسدها ديب. وخططت مع زملائها لـ «تمرد»، أي إضراب قرصاني، حتى يتم إلغاء أكبر عدد ممكن من الحصص الدراسية.",
              "وتمنت التلميذة لو يأتي الممثل إلى المدرسة مرتدياً زي القرصان. ولم تكد تصدق سعادتها عندما تحققت أمنيتها بالفعل: إذ ظهر نجم هوليوود في المدرسة الابتدائية بلندن متقمصاً شخصية الكابتن جاك سبارو، وغنى ورقص مع أربعة من زملائه الممثلين على ألحان أغاني القراصنة. وقبل ذلك، استقبل التلاميذ النجم بتصفيق حار وأغنية خاصة بهم، كما ورد على موقع المدرسة الإلكتروني.",
              "وفي النهاية لم يقع التمرد المخطط له، بل تحول بالأحرى إلى مقاومة سلبية. فقد أثار الممثل الكثير من الحماس والضجة لدرجة أن سير الدروس المعتاد أصبح مستحيلاً في ذلك اليوم."
            ],
            "fr": [
              "« Nous sommes une bande de jeunes apprentis pirates et nous rencontrons des difficultés lors d'un conflit avec nos professeurs. Nous trouverions formidable que vous veniez nous prêter main-forte ! » C'est en ces termes qu'une écolière du quartier londonien de Greenwich s'est adressée à Johnny Depp. Grande admiratrice de ses films de pirates « Pirates des Caraïbes », la jeune Béatrice, âgée de neuf ans, a sollicité le renfort du capitaine Jack Sparrow, l'alter ego cinématographique de Depp. Avec ses camarades de classe, elle projetait une véritable « mutinerie », c'est-à-dire une grève façon pirates, pour faire sauter le plus d'heures de cours possible.",
              "L'écolière souhaitait idéalement que l'acteur se rende dans son établissement vêtu de son costume de pirate. Elle n'en a pas cru ses yeux lorsque son vœu s'est concrétisé : sous les traits du capitaine Jack Sparrow, la star hollywoodienne a fait irruption dans l'école primaire londonienne pour chanter et danser sur des airs de pirates en compagnie de quatre partenaires de jeu. Auparavant, les élèves avaient accueilli la vedette sous un tonnerre d'applaudissements et avec une chanson composée tout spécialement, d'après le site de l'école.",
              "En fin de compte, la mutinerie projetée n'a pas eu lieu, laissant place à une forme de résistance passive. L'acteur a suscité une telle effervescence qu'il a été rigoureusement impossible d'assurer un enseignement normal ce jour-là."
            ]
          }
        }
      ],
      "questions2": {
        "10": {
          "ar": "يدور هذا النص حول ...",
          "fr": "Dans ce texte, il s'agit ...",
          "text": {
            "ar": "يدور هذا النص حول ...",
            "fr": "Dans ce texte, il s'agit ..."
          },
          "options": {
            "ar": [
              "أن جوني ديب مثل في فيلم عن القراصنة.",
              "أن نجماً هوليوودياً زار مدرسة.",
              "أن التلاميذ أرادوا مشاهدة فيلم قراصنة."
            ],
            "fr": [
              "du fait que Johnny Depp a joué dans un film de pirates.",
              "du fait qu'une star d'Hollywood a rendu visite à une école.",
              "du fait que des élèves voulaient regarder un film de pirates."
            ]
          }
        },
        "11": {
          "ar": "جوني ديب ...",
          "fr": "Johnny Depp ...",
          "text": {
            "ar": "جوني ديب ...",
            "fr": "Johnny Depp ..."
          },
          "options": {
            "ar": [
              "رد على رسالة التلميذة خطياً.",
              "كتب على الموقع الإلكتروني للمدرسة.",
              "غنى ورقص للتلاميذ."
            ],
            "fr": [
              "a répondu à la lettre de l'écolière.",
              "a écrit sur le site internet de l'école.",
              "a chanté et dansé pour les élèves."
            ]
          }
        },
        "12": {
          "ar": "بياتريس ...",
          "fr": "Béatrice ...",
          "text": {
            "ar": "بياتريس ...",
            "fr": "Béatrice ..."
          },
          "options": {
            "ar": [
              "أرادت عدم حضور الدروس المدرسية.",
              "أرادت رؤية قرصان حقيقي.",
              "شعرت بالخوف والذعر عندما حضر جوني ديب."
            ],
            "fr": [
              "ne voulait pas avoir cours.",
              "voulait voir un vrai pirate.",
              "a été effrayée lors de l'arrivée de Johnny Depp."
            ]
          }
        }
      }
    },
    "3": {
      "instructions": {
        "ar": "اقرأ المواقف من 13 إلى 19 والإعلانات من a إلى j من وسائل إعلام ناطقة بالألمانية. اختر: أي إعلان يناسب أي موقف؟ يمكنك استخدام كل إعلان مرة واحدة فقط. لا يمكنك استخدام إعلان المثال. إذا لم تجد إعلاناً مناسباً لأحد المواقف، فاكتب 0.",
        "fr": "Lisez les situations 13 à 19 et les annonces a à j. Choisissez : quelle annonce correspond à quelle situation ? Chaque annonce ne peut être utilisée qu'une seule fois. Si aucune annonce ne convient, écrivez 0."
      },
      "situationsIntro": {
        "ar": "أنت تبحث عن عروض لأصدقاء ومعارف يرغبون في القيام بأنشطة متنوعة أثناء إقامتهم على ساحل بحر البلطيق.",
        "fr": "Vous recherchez des offres pour des amis et connaissances qui souhaitent faire différentes activités pendant leur séjour au bord de la mer Baltique."
      },
      "ads": {
        "a": {
          "ar": "متحف التاريخ الطبيعي بارتر بودن: ساحل بحر البلطيق – تضاريس وحيوانات وكائنات بحرية. من أبريل إلى أكتوبر يومياً من 10 إلى 18، ومن نوفمبر إلى مارس من الأربعاء إلى الأحد 11 إلى 16. زيارة المحمية الطبيعية مشمولة في سعر التذكرة. هاتف: 02109876.",
          "fr": "Musée d'histoire naturelle Barther Bodden : Littoral de la Baltique – Paysages et faune marine. Visite du parc national incluse dans le billet d'entrée. Ouvert toute l'année. 18563 Barth."
        },
        "A": {
          "ar": "متحف التاريخ الطبيعي بارتر بودن: ساحل بحر البلطيق – تضاريس وحيوانات وكائنات بحرية. من أبريل إلى أكتوبر يومياً من 10 إلى 18، ومن نوفمبر إلى مارس من الأربعاء إلى الأحد 11 إلى 16. زيارة المحمية الطبيعية مشمولة في سعر التذكرة. هاتف: 02109876.",
          "fr": "Musée d'histoire naturelle Barther Bodden : Littoral de la Baltique – Paysages et faune marine. Visite du parc national incluse dans le billet d'entrée. Ouvert toute l'année. 18563 Barth."
        },
        "b": {
          "ar": "أكثر من 90 لوحاً وشراعاً للتزلج من دوراتنا التدريبية معروضة للتصفية بأسعار خاصة بدءاً من 1 سبتمبر! مستعملة بحالة جيدة استُخدمت نحو 4 أسابيع في تدريبنا. الحضور الشخصي يضمن أفضل صفقة!",
          "fr": "Plus de 90 planches et ailes de kitesurf d'école à déstocker ! Prix préférentiels sur tout dès le 1er septembre. Matériel d'occasion révisé ayant servi environ 4 semaines en école. www.kite-club.com."
        },
        "B": {
          "ar": "أكثر من 90 لوحاً وشراعاً للتزلج من دوراتنا التدريبية معروضة للتصفية بأسعار خاصة بدءاً من 1 سبتمبر! مستعملة بحالة جيدة استُخدمت نحو 4 أسابيع في تدريبنا. الحضور الشخصي يضمن أفضل صفقة!",
          "fr": "Plus de 90 planches et ailes de kitesurf d'école à déstocker ! Prix préférentiels sur tout dès le 1er septembre. Matériel d'occasion révisé ayant servi environ 4 semaines en école. www.kite-club.com."
        },
        "c": {
          "ar": "داروينيوم في حديقة حيوان روستوك: أكبر حديقة حيوان على ساحل بحر البلطيق الألماني – التقي بـ 4500 حيوان من 320 نوعاً من حول العالم وعش مغامرة التطور في الداروينيوم. مفتوح يومياً من الساعة 9.",
          "fr": "DARWINEUM au zoo de Rostock : le plus grand zoo de la côte allemande de la Baltique. 4500 animaux de 320 espèces et découverte de l'évolution au DARWINEUM. Ouvert tous les jours dès 9h."
        },
        "C": {
          "ar": "داروينيوم في حديقة حيوان روستوك: أكبر حديقة حيوان على ساحل بحر البلطيق الألماني – التقي بـ 4500 حيوان من 320 نوعاً من حول العالم وعش مغامرة التطور في الداروينيوم. مفتوح يومياً من الساعة 9.",
          "fr": "DARWINEUM au zoo de Rostock : le plus grand zoo de la côte allemande de la Baltique. 4500 animaux de 320 espèces et découverte de l'évolution au DARWINEUM. Ouvert tous les jours dès 9h."
        },
        "d": {
          "ar": "عالم الرمال في فارنيمونده (الدخول مجاني): منحوتات رملية فريدة بارتفاع 5 أمتار من أكثر من 400 طن من الرمل على شاطئ البلطيق من أبريل إلى أكتوبر. ملاعب مجانية للأطفال! فارنيمونده رصيف 7.",
          "fr": "Warnemünder Sandwelt (Entrée gratuite) : sculptures sur sable monumentales de 5 mètres de haut sur la plage de la Baltique d'avril à octobre. Aires de jeux gratuites pour les enfants ! Quai Pier 7."
        },
        "D": {
          "ar": "عالم الرمال في فارنيمونده (الدخول مجاني): منحوتات رملية فريدة بارتفاع 5 أمتار من أكثر من 400 طن من الرمل على شاطئ البلطيق من أبريل إلى أكتوبر. ملاعب مجانية للأطفال! فارنيمونده رصيف 7.",
          "fr": "Warnemünder Sandwelt (Entrée gratuite) : sculptures sur sable monumentales de 5 mètres de haut sur la plage de la Baltique d'avril à octobre. Aires de jeux gratuites pour les enfants ! Quai Pier 7."
        },
        "e": {
          "ar": "استكشف روغن في الخريف: جولات مشي بصحبة مرشدين خبراء لمعايشة الطبيعة وتاريخ وأساطير الجزيرة عن قرب. حتى 31 أكتوبر. تخفيضات للعائلات والمجموعات الصغيرة. www.ruegen.de.",
          "fr": "Découvrir Rügen en automne : randonnées pédestres guidées par des spécialistes pour découvrir la nature, l'histoire et les légendes de l'île. Jusqu'au 31 octobre. Tarifs réduits familles. www.ruegen.de."
        },
        "E": {
          "ar": "استكشف روغن في الخريف: جولات مشي بصحبة مرشدين خبراء لمعايشة الطبيعة وتاريخ وأساطير الجزيرة عن قرب. حتى 31 أكتوبر. تخفيضات للعائلات والمجموعات الصغيرة. www.ruegen.de.",
          "fr": "Découvrir Rügen en automne : randonnées pédestres guidées par des spécialistes pour découvrir la nature, l'histoire et les légendes de l'île. Jusqu'au 31 octobre. Tarifs réduits familles. www.ruegen.de."
        },
        "f": {
          "ar": "حفلات الميناء في فارنيمونده: احتفالات بوصول كبرى السفن مع موسيقى حية وبرامج مسرحية وألعاب نارية رائعة! المواعيد: 6 مايو، 4 يونيو، 18 يونيو، 8 يوليو، 5 أغسطس، 3 سبتمبر. شاشات لمتابعة حركة السفن.",
          "fr": "Fêtes portuaires de Warnemünde : accueil festif des plus grands paquebots avec concerts en direct, spectacles et grand feu d'artifice ! Rendez-vous au quai des passagers. Écrans d'information maritime."
        },
        "F": {
          "ar": "حفلات الميناء في فارنيمونده: احتفالات بوصول كبرى السفن مع موسيقى حية وبرامج مسرحية وألعاب نارية رائعة! المواعيد: 6 مايو، 4 يونيو، 18 يونيو، 8 يوليو، 5 أغسطس، 3 سبتمبر. شاشات لمتابعة حركة السفن.",
          "fr": "Fêtes portuaires de Warnemünde : accueil festif des plus grands paquebots avec concerts en direct, spectacles et grand feu d'artifice ! Rendez-vous au quai des passagers. Écrans d'information maritime."
        },
        "g": {
          "ar": "ركوب الدراجات في جزيرة زيلت في بحر الشمال؟ متجر الدراجات في كايتوم هو وجهتك: تشكيلة واسعة من الدراجات للإيجار وخدمة ممتازة وأسعار مناسبة.",
          "fr": "Faire du vélo sur l'île de Sylt en mer du Nord ? Le magasin de cycles de Keitum est là : grand choix de vélos à louer, service de qualité et prix raisonnables."
        },
        "G": {
          "ar": "ركوب الدراجات في جزيرة زيلت في بحر الشمال؟ متجر الدراجات في كايتوم هو وجهتك: تشكيلة واسعة من الدراجات للإيجار وخدمة ممتازة وأسعار مناسبة.",
          "fr": "Faire du vélo sur l'île de Sylt en mer du Nord ? Le magasin de cycles de Keitum est là : grand choix de vélos à louer, service de qualité et prix raisonnables."
        },
        "h": {
          "ar": "تبحث عن تميز للاحتفال؟ جولات بالمروحية فوق جزيرة روغن: اختر من بين مساراتنا المتنوعة للاستمتاع بالطبيعة الخلابة لبحر البلطيق. مع مشروب ترحيبي بالشمبانيا حسب الطلب. هاتف: 01721000343.",
          "fr": "Un événement à célébrer ? Vols panoramiques en hélicoptère au-dessus de Rügen. Choisissez parmi nos itinéraires au-dessus des paysages de la Baltique. Cocktail de bienvenue avec champagne sur demande."
        },
        "H": {
          "ar": "تبحث عن تميز للاحتفال؟ جولات بالمروحية فوق جزيرة روغن: اختر من بين مساراتنا المتنوعة للاستمتاع بالطبيعة الخلابة لبحر البلطيق. مع مشروب ترحيبي بالشمبانيا حسب الطلب. هاتف: 01721000343.",
          "fr": "Un événement à célébrer ? Vols panoramiques en hélicoptère au-dessus de Rügen. Choisissez parmi nos itinéraires au-dessus des paysages de la Baltique. Cocktail de bienvenue avec champagne sur demande."
        },
        "i": {
          "ar": "هانزه زايل روستوك: جمعية تشجيع الملاحة البحرية التقليدية في بحر البلطيق – رحلات بحرية نهارية ومسائية وقصيرة ولعدة أيام على متن سفن شراعية تقليدية. فنادق وجولات سياحية بالمدينة. www.hansesail.com.",
          "fr": "Hanse Sail Rostock : Association pour la promotion de la navigation traditionnelle en mer Baltique. Sorties en mer à la journée, en soirée, courtes excursions et séjours. Hébergements et visites de ville."
        },
        "I": {
          "ar": "هانزه زايل روستوك: جمعية تشجيع الملاحة البحرية التقليدية في بحر البلطيق – رحلات بحرية نهارية ومسائية وقصيرة ولعدة أيام على متن سفن شراعية تقليدية. فنادق وجولات سياحية بالمدينة. www.hansesail.com.",
          "fr": "Hanse Sail Rostock : Association pour la promotion de la navigation traditionnelle en mer Baltique. Sorties en mer à la journée, en soirée, courtes excursions et séjours. Hébergements et visites de ville."
        },
        "j": {
          "ar": "عرض الموسم الخاص بالتزلج الشراعي: يومان دورة تدريبية و3 أيام تزلج مستقل تحت إشراف فقط بـ 245 يورو شاملاً المعدات والتدريب وأنشطة ترفيهية جماعية وشواء وسهرات سينمائية وبطولة كرة طائرة شاطئية.",
          "fr": "Spécial saison – Kitesurf : 2 jours de stage débutant et 3 jours de pratique encadrée pour 245 € seulement, matériel et encadrement inclus, avec soirées barbecue, cinéma et tournoi de beach-volley."
        },
        "J": {
          "ar": "عرض الموسم الخاص بالتزلج الشراعي: يومان دورة تدريبية و3 أيام تزلج مستقل تحت إشراف فقط بـ 245 يورو شاملاً المعدات والتدريب وأنشطة ترفيهية جماعية وشواء وسهرات سينمائية وبطولة كرة طائرة شاطئية.",
          "fr": "Spécial saison – Kitesurf : 2 jours de stage débutant et 3 jours de pratique encadrée pour 245 € seulement, matériel et encadrement inclus, avec soirées barbecue, cinéma et tournoi de beach-volley."
        }
      },
      "13": {
        "ar": "ميريام وسفين من هواة ركوب الدراجات، لكنهما يفضلان عدم أخذ دراجاتهما الخاصة معهما أثناء إقامتهما في بحر البلطيق.",
        "fr": "Mirjam et Sven sont passionnés de vélo, mais préfèrent ne pas emporter leurs propres vélos pour leur séjour sur la Baltique.",
        "text": {
          "ar": "ميريام وسفين من هواة ركوب الدراجات، لكنهما يفضلان عدم أخذ دراجاتهما الخاصة معهما أثناء إقامتهما في بحر البلطيق.",
          "fr": "Mirjam et Sven sont passionnés de vélo, mais préfèrent ne pas emporter leurs propres vélos pour leur séjour sur la Baltique."
        }
      },
      "14": {
        "ar": "يرغب روبرت في تعلم التزلج الشراعي خلال عطلته والتعرف على أشخاص جدد.",
        "fr": "Robert souhaite apprendre le kitesurf pendant ses vacances et faire de nouvelles connaissances.",
        "text": {
          "ar": "يرغب روبرت في تعلم التزلج الشراعي خلال عطلته والتعرف على أشخاص جدد.",
          "fr": "Robert souhaite apprendre le kitesurf pendant ses vacances et faire de nouvelles connaissances."
        }
      },
      "15": {
        "ar": "يسافر الزوجان غيربر إلى روغن للاحتفال بذكرى زواجهما في 18 يوليو بشيء مميز واستثنائي للغاية.",
        "fr": "Les époux Gerber se rendent à Rügen pour fêter leur anniversaire de mariage le 18 juillet par une expérience exceptionnelle.",
        "text": {
          "ar": "يسافر الزوجان غيربر إلى روغن للاحتفال بذكرى زواجهما في 18 يوليو بشيء مميز واستثنائي للغاية.",
          "fr": "Les époux Gerber se rendent à Rügen pour fêter leur anniversaire de mariage le 18 juillet par une expérience exceptionnelle."
        }
      },
      "16": {
        "ar": "ترغب السيدة بيبر وصديقتها في استكشاف وجهة عطلتهما سيراً على الأقدام.",
        "fr": "Mme Biber et son amie aimeraient découvrir leur lieu de villégiature de préférence à pied.",
        "text": {
          "ar": "ترغب السيدة بيبر وصديقتها في استكشاف وجهة عطلتهما سيراً على الأقدام.",
          "fr": "Mme Biber et son amie aimeraient découvrir leur lieu de villégiature de préférence à pied."
        }
      },
      "17": {
        "ar": "لا يستطيع السيد مولر هذا العام القيام برحلة بحرية على متن سفينة لأسباب صحية، لكنه يريد أن يكون قريباً قدر الإمكان من سفن الرحلات السياحية الكبرى.",
        "fr": "Cette année, M. Müller ne peut pas faire de croisière en mer pour raisons médicales, mais souhaite s'approcher au plus près des grands paquebots.",
        "text": {
          "ar": "لا يستطيع السيد مولر هذا العام القيام برحلة بحرية على متن سفينة لأسباب صحية، لكنه يريد أن يكون قريباً قدر الإمكان من سفن الرحلات السياحية الكبرى.",
          "fr": "Cette année, M. Müller ne peut pas faire de croisière en mer pour raisons médicales, mais souhaite s'approcher au plus près des grands paquebots."
        }
      },
      "18": {
        "ar": "ترغب عائلة دينكلر في الجمع بين إقامتها على بحر البلطيق ورحلة بحرية قصيرة على متن سفينة.",
        "fr": "La famille Denkler souhaite agrémenter son séjour sur la mer Baltique d'une petite excursion en bateau.",
        "text": {
          "ar": "ترغب عائلة دينكلر في الجمع بين إقامتها على بحر البلطيق ورحلة بحرية قصيرة على متن سفينة.",
          "fr": "La famille Denkler souhaite agrémenter son séjour sur la mer Baltique d'une petite excursion en bateau."
        }
      },
      "19": {
        "ar": "أنجزت المعلمة نيدرفيغ مع فصلها المدرسي مشروعاً حول «الحيوانات في منطقة بحر البلطيق» وتبحث عن وجهة مناسبة لرحلة المشروع.",
        "fr": "Mme Niederweg a mené avec sa classe un projet pédagogique sur « Les animaux de la région de la Baltique » et cherche une sortie adaptée.",
        "text": {
          "ar": "أنجزت المعلمة نيدرفيغ مع فصلها المدرسي مشروعاً حول «الحيوانات في منطقة بحر البلطيق» وتبحث عن وجهة مناسبة لرحلة المشروع.",
          "fr": "Mme Niederweg a mené avec sa classe un projet pédagogique sur « Les animaux de la région de la Baltique » et cherche une sortie adaptée."
        }
      },
      "questions": {
        "13": {
          "ar": "ميريام وسفين من هواة ركوب الدراجات، لكنهما يفضلان عدم أخذ دراجاتهما الخاصة معهما أثناء إقامتهما في بحر البلطيق.",
          "fr": "Mirjam et Sven sont passionnés de vélo, mais préfèrent ne pas emporter leurs propres vélos pour leur séjour sur la Baltique.",
          "text": {
            "ar": "ميريام وسفين من هواة ركوب الدراجات، لكنهما يفضلان عدم أخذ دراجاتهما الخاصة معهما أثناء إقامتهما في بحر البلطيق.",
            "fr": "Mirjam et Sven sont passionnés de vélo, mais préfèrent ne pas emporter leurs propres vélos pour leur séjour sur la Baltique."
          }
        },
        "14": {
          "ar": "يرغب روبرت في تعلم التزلج الشراعي خلال عطلته والتعرف على أشخاص جدد.",
          "fr": "Robert souhaite apprendre le kitesurf pendant ses vacances et faire de nouvelles connaissances.",
          "text": {
            "ar": "يرغب روبرت في تعلم التزلج الشراعي خلال عطلته والتعرف على أشخاص جدد.",
            "fr": "Robert souhaite apprendre le kitesurf pendant ses vacances et faire de nouvelles connaissances."
          }
        },
        "15": {
          "ar": "يسافر الزوجان غيربر إلى روغن للاحتفال بذكرى زواجهما في 18 يوليو بشيء مميز واستثنائي للغاية.",
          "fr": "Les époux Gerber se rendent à Rügen pour fêter leur anniversaire de mariage le 18 juillet par une expérience exceptionnelle.",
          "text": {
            "ar": "يسافر الزوجان غيربر إلى روغن للاحتفال بذكرى زواجهما في 18 يوليو بشيء مميز واستثنائي للغاية.",
            "fr": "Les époux Gerber se rendent à Rügen pour fêter leur anniversaire de mariage le 18 juillet par une expérience exceptionnelle."
          }
        },
        "16": {
          "ar": "ترغب السيدة بيبر وصديقتها في استكشاف وجهة عطلتهما سيراً على الأقدام.",
          "fr": "Mme Biber et son amie aimeraient découvrir leur lieu de villégiature de préférence à pied.",
          "text": {
            "ar": "ترغب السيدة بيبر وصديقتها في استكشاف وجهة عطلتهما سيراً على الأقدام.",
            "fr": "Mme Biber et son amie aimeraient découvrir leur lieu de villégiature de préférence à pied."
          }
        },
        "17": {
          "ar": "لا يستطيع السيد مولر هذا العام القيام برحلة بحرية على متن سفينة لأسباب صحية، لكنه يريد أن يكون قريباً قدر الإمكان من سفن الرحلات السياحية الكبرى.",
          "fr": "Cette année, M. Müller ne peut pas faire de croisière en mer pour raisons médicales, mais souhaite s'approcher au plus près des grands paquebots.",
          "text": {
            "ar": "لا يستطيع السيد مولر هذا العام القيام برحلة بحرية على متن سفينة لأسباب صحية، لكنه يريد أن يكون قريباً قدر الإمكان من سفن الرحلات السياحية الكبرى.",
            "fr": "Cette année, M. Müller ne peut pas faire de croisière en mer pour raisons médicales, mais souhaite s'approcher au plus près des grands paquebots."
          }
        },
        "18": {
          "ar": "ترغب عائلة دينكلر في الجمع بين إقامتها على بحر البلطيق ورحلة بحرية قصيرة على متن سفينة.",
          "fr": "La famille Denkler souhaite agrémenter son séjour sur la mer Baltique d'une petite excursion en bateau.",
          "text": {
            "ar": "ترغب عائلة دينكلر في الجمع بين إقامتها على بحر البلطيق ورحلة بحرية قصيرة على متن سفينة.",
            "fr": "La famille Denkler souhaite agrémenter son séjour sur la mer Baltique d'une petite excursion en bateau."
          }
        },
        "19": {
          "ar": "أنجزت المعلمة نيدرفيغ مع فصلها المدرسي مشروعاً حول «الحيوانات في منطقة بحر البلطيق» وتبحث عن وجهة مناسبة لرحلة المشروع.",
          "fr": "Mme Niederweg a mené avec sa classe un projet pédagogique sur « Les animaux de la région de la Baltique » et cherche une sortie adaptée.",
          "text": {
            "ar": "أنجزت المعلمة نيدرفيغ مع فصلها المدرسي مشروعاً حول «الحيوانات في منطقة بحر البلطيق» وتبحث عن وجهة مناسبة لرحلة المشروع.",
            "fr": "Mme Niederweg a mené avec sa classe un projet pédagogique sur « Les animaux de la région de la Baltique » et cherche une sortie adaptée."
          }
        }
      }
    },
    "4": {
      "instructions": {
        "ar": "اقرأ الآراء من 20 إلى 26. اختر: هل يؤيد هذا الشخص التزلج الليلي؟ تقرأ في إحدى المجلات تعليقات القراء حول مقال يتناول فتح مسارات التزلج ليلاً تحت الضوء الاصطناعي.",
        "fr": "Lisez les avis 20 à 26. Choisissez : cette personne est-elle favorable au ski nocturne ? Vous lisez dans un magazine des courriers de lecteurs réagissant à l'offre de ski nocturne sous éclairage artificiel."
      },
      "topic": {
        "ar": "هل ينبغي السماح بالتزلج على الجليد ليلاً تحت الضوء الاصطناعي؟",
        "fr": "Faut-il autoriser la pratique du ski de nuit sous éclairage artificiel ?"
      },
      "example": {
        "who": "Jens (25 Jahre, Füssen)",
        "text": {
          "ar": "التزلج تحت النجوم والقمر ساطع وكل شيء ناصع البياض وجميل. ما الذي يمكن أن يكون أروع من ذلك؟ بالنسبة لنا نحن عشاق التزلج الشغوفين، هذا ببساطة أمر رائع. لا يتزلج هنا سوى العارفين الماهرين بالمسارات، ودون وجود مبتدئين يعكرون المزاج. لا، لا أستطيع تخيل شيء أجمل من ذلك!",
          "fr": "Skier sous les étoiles, la lune brille et tout est blanc et magnifique. Que demander de mieux ? Pour nous, skieurs passionnés, c'est tout simplement génial. Seuls de vrais connaisseurs expérimentés sont sur les pistes. Fini les débutants qui vous gâchent le plaisir. Non, je ne peux rien imaginer de plus beau !"
        }
      },
      "letters": {
        "20": {
          "who": "Lara (34 Jahre, München)",
          "text": {
            "ar": "يجب أن أكون صريحة وأعترف بأنني كنت دائماً ضد مثل هذه الأفكار. ولكن مؤخراً عُرض عليّ القيام بمثل هذه الجولة الليلية مع زملائي في العمل. وقد غيرت هذه التجربة الفريدة موقفي تجاه التزلج الليلي تماماً. لدرجة أنني أرغب حتماً في تكرارها. وبما أنني أصبحت متحمسة جداً، لم يعد بإمكاني معارضة الأمر.",
            "fr": "Je dois avouer en toute franchise que j'ai toujours été fermement opposée à ce genre de chose. Cependant, j'ai récemment eu l'occasion de faire une telle sortie nocturne avec des collègues. Cette expérience unique a totalement transformé mon regard sur le ski de nuit. Je tiens absolument à recommencer. Vu mon enthousiasme, je ne peux plus du tout être contre."
          }
        },
        "21": {
          "who": "Kevin (19 Jahre, Solothurn)",
          "text": {
            "ar": "في رأيي هذه الفكرة لها وجهان. فمن ناحية، يجلب المتزلجون ليلاً مزيداً من الأموال للمنطقة والجميع يسعد بذلك. ومن ناحية أخرى، فإن الضوء القوي في الليل يزعج الحيوانات وغير طبيعي تماماً. ولأنني لا أمارس التزلج وأرغب في حماية الطبيعة، أرى أن هذا العرض غير مرغوب فيه ولا نحتاج إليه.",
            "fr": "À mon avis, cette initiative a deux facettes. D'un côté, les skieurs nocturnes apportent des revenus supplémentaires à la région, ce dont tout le monde se réjouit. De l'autre, la lumière vive en pleine nuit perturbe la faune et n'a rien de naturel. Comme je ne skie pas et que je veux préserver la nature, je trouve cette offre peu attrayante. Nous n'avons pas besoin de cela."
          }
        },
        "22": {
          "who": "Karl (50 Jahre, Hildesheim)",
          "text": {
            "ar": "نسمع في الآونة الأخيرة بوتيرة متزايدة عن حجم المشاكل البيئية في جبال الألب ومدى الضرر الذي يلحقه الإنسان بالجبال عند بناء التلفريك وشق المسارات أو التزلج. من الواضح تماماً أنه يجب ترك الجبال في سلام وهدوء من الآن فصاعداً. لقد دمرنا كبشر ما يكفي هناك في الأعالي، وعلينا أن نحاول حماية ما لم يتم تدميره بعد بدلاً من التدخل بشكل أكبر في الطبيعة.",
            "fr": "Ces derniers temps, nous entendons de plus en plus parler de l'ampleur du problème environnemental dans les Alpes et des dégâts causés à la montagne par la construction de téléphériques, l'aménagement de pistes ou la pratique du ski. Il est évident qu'il faut laisser la montagne tranquille dès maintenant. L'homme y a déjà fait suffisamment de ravages. Efforçons-nous plutôt de sauvegarder ce qui n'a pas encore été détruit au lieu de dégrader encore la nature."
          }
        },
        "23": {
          "who": "Susanne (16 Jahre, Kiel)",
          "text": {
            "ar": "أنا من الشمال ولا أعرف التزلج شخصياً. ولكن عندنا نذهب في الصيف ليلاً بكل سرور للتنزه على شاطئ البحر أو على الساحل أو في الشوارع المضاءة. فلماذا لا يُمنح الناس في الجبال أيضاً فرصة ممارسة هوايتهم في الليل؟",
            "fr": "Je viens du Nord et je ne sais pas skier moi-même. Mais chez nous, nous aimons aussi nous promener la nuit en été au bord de la mer, sur la côte ou le long des avenues éclairées. Pourquoi les habitants de la montagne n'auraient-ils pas eux aussi l'opportunité de s'adonner à leur passion la nuit ?"
          }
        },
        "24": {
          "who": "Martin (40 Jahre, Dresden)",
          "text": {
            "ar": "يا لما يبتكره أصحاب مصاعد التزلج والأكواخ الجبلية! لا يمكن أن يكونوا جادين في فتح مسارات التزلج ليلاً أيضاً والسماح للناس بالتزلج في الظلام. هذا حقاً قمة العبث وأسوأ ما سمعت.",
            "fr": "Tout ce que les propriétaires de remontées et de refuges ne vont pas inventer ! Ce n'est pas sérieux de vouloir ouvrir les pistes la nuit pour faire skier les gens. C'est le comble de l'absurdité."
          }
        },
        "25": {
          "who": "Marc (36 Jahre, Obertauern)",
          "text": {
            "ar": "لا أحد يفكر في أصحاب الحانات والمطاعم الجبلية! نحن هناك في أعالي الجبال نكافح بكل قوة من أجل زبائننا. ففي كل عام يتناقص عدد المتزلجين على أي حال، وهذا يعني تراجع أرباحنا. والآن عندما تتاح لنا فرصة لفتح أبوابنا لوقت أطول لخدمة زبائن التزلج الليلي الترفيهي، يبدأ حماة البيئة بالصراخ والاعتراض. أرى أن هذا غير عادل على الإطلاق.",
            "fr": "Personne ne se soucie des tenanciers d'auberges de montagne ! Là-haut, nous devons nous battre avec acharnement pour garder notre clientèle. Il y a de moins en moins de skieurs chaque année, ce qui entraîne une baisse de nos revenus. Maintenant que nous avons l'occasion de rester ouverts un peu plus tard pour servir les amateurs de glisse nocturne, les écologistes montent sur leurs grands chevaux. Je trouve cela profondément injuste."
          }
        },
        "26": {
          "who": "Otto (47 Jahre, Salzburg)",
          "text": {
            "ar": "ما زلت أذكر طفولتي حين كنت أذهب كصبي بانتظام للتزلج في الجبال. وكان يقام مرة في الشهر نزول بالمشاعل، حيث كان مدربو التزلج ينزلون المسار المركزي ليلاً حاملين المشاعل المشتعلة بأيديهم. كان ذلك منظراً مهيباً أثر فيّ كثيراً حينذاك، ولكن التزلج كل ليلة بضوء اصطناعي؟ وكل هذا العدد من المتزلجين؟ وتحويل الليل إلى نهار؟ هذا يفسد الهدوء الجميل والسكينة التي تعم الجبال ليلاً.",
            "fr": "Je me souviens encore de mon enfance. Garçon, j'allais régulièrement skier en montagne. Une fois par mois avait lieu une descente aux flambeaux : les moniteurs de ski descendaient la piste principale de nuit avec des flambeaux allumés. Cela m'avait impressionné à l'époque, mais skier toutes les nuits sous une lumière artificielle ? Avec autant de skieurs ? Transformer la nuit en jour ? Cela perturbe la merveilleuse quiétude qui règne la nuit en montagne."
          }
        }
      }
    },
    "5": {
      "instructions": {
        "ar": "اقرأ المهام من 27 إلى 30 والنص المرفق. اختر لكل مهمة الحل الصحيح: أ، ب، أو ج. أنت تبحث عن إرشادات حول كيفية التصرف اللائق عند ارتياد المطعم استعداداً لعشاء عمل هام.",
        "fr": "Lisez les questions 27 à 30 et le texte associé. Choisissez la bonne réponse a, b ou c. Vous vous informez sur les règles de politesse au restaurant en vue d'un dîner d'affaires important."
      },
      "articles": [
        {
          "heading": {
            "ar": "نصائح لزيارة المطعم وقواعد اللباقة",
            "fr": "Conseils pour une sortie au restaurant"
          },
          "body": {
            "ar": [
              "عند دخول المطعم، لم يعد إلزامياً أن يفتح الرجل الباب للمرأة؛ بل أصبح من الطبيعي والمقبول أيضاً أن تفتح المرأة الباب بنفسها.",
              "للفت انتباه النادل، يكفي غالباً إشارة صغيرة باليد. وإذا لم ينتبه إليك، يمكنك التوجه إلى أحد زملائه والطلب منه بلطف إيصال رغبتك. ويجب الامتناع تماماً عن المناداة بصوت مرتفع.",
              "توجد اليوم في معظم المطاعم مناطق للمدخنين وأخرى لغير المدخنين. ويستحسن سؤال الضيوف قبل دخول المكان عن رغبتهم في مكان الجلوس. ومن اللباقة أن يعرض المدخنون الجلوس في قسم غير المدخنين. وفي كل الأحوال، يجب على المدخن سؤال الضيوف الآخرين عما إذا كان التدخين يزعجهم قبل إشعال السيجارة.",
              "يُستحسن في المطعم ضبط الهاتف على الوضع الصامت أو إغلاقه تماماً. وإذا دعتك الحاجة لإجراء مكالمة عاجلة، يرجى عدم التحدث على الطاولة، بل التوجه إلى زاوية هادئة وقضاء المكالمات الضرورية للغاية فقط، إذ يعتبر من سوء الأدب ترك الضيوف ينتظرونك لفترة طويلة.",
              "يتم دفع الحساب في الغالب على الطاولة. ويفضل استخدام بطاقة الائتمان لما توفره من لباقة وخصوصية. ودفع الإكرامية (بقشيش) ليس إلزامياً في ألمانيا، ولكن إذا كنت راضياً عن الخدمة المقدمة، فمن المعتاد ترك إكرامية صغيرة (من 5 إلى 10% من قيمة الفاتورة)."
            ],
            "fr": [
              "En entrant dans l'établissement, il n'est plus impératif que l'homme tienne la porte à la femme. Il est tout aussi naturel que la femme ouvre elle-même la porte.",
              "Pour attirer l'attention du serveur, un léger signe de la main suffit bien souvent. S'il ne vous voit pas, adressez-vous discrètement à l'un de ses collègues en le priant de lui transmettre votre demande. Les appels à haute voix sont à proscrire formellement.",
              "De nos jours, la majorité des restaurants disposent d'un espace fumeur et d'une zone non-fumeur. Il est conseillé de demander aux convives où ils préfèrent s'asseoir avant de pénétrer dans les lieux. Par courtoisie, les fumeurs devraient proposer de s'installer en zone non-fumeur. En tout état de cause, les fumeurs doivent s'enquérir auprès de leurs voisins de table pour savoir si la fumée les dérange avant d'allumer une cigarette.",
              "Au restaurant, il est recommandé de mettre son téléphone portable en mode silencieux ou de l'éteindre complètement. Si vous devez passer un appel urgent, ne le faites pas à table. Isolez-vous dans un coin calme de l'établissement et limitez-vous aux communications indispensables, car il est discourtois de faire attendre ses invités.",
              "L'addition se règle généralement à table. L'utilisation d'une carte de crédit est recommandée par discrétion. En Allemagne, le pourboire n'est nullement obligatoire. Toutefois, si vous avez été satisfait du service, il est d'usage de laisser un pourboire modéré (5 à 10 % du montant de la note)."
            ]
          }
        }
      ],
      "questions": {
        "27": {
          "ar": "التدخين ...",
          "fr": "Fumer ...",
          "text": {
            "ar": "التدخين ...",
            "fr": "Fumer ..."
          },
          "options": {
            "ar": [
              "في المطعم غير صحيح وغير مسموح.",
              "ينبغي ألا يتم إلا إذا كان لا يزعج الضيوف الآخرين.",
              "يُسمح به للضيوف فقط قبل دخول المطعم."
            ],
            "fr": [
              "au restaurant n'est pas correct.",
              "ne devrait se faire que si cela ne dérange pas les autres convives.",
              "n'est autorisé que devant l'entrée du restaurant."
            ]
          }
        },
        "28": {
          "ar": "لطلب الطعام أو الشراب، ...",
          "fr": "Pour passer commande, ...",
          "text": {
            "ar": "لطلب الطعام أو الشراب، ...",
            "fr": "Pour passer commande, ..."
          },
          "options": {
            "ar": [
              "يجب مناداة النادل بصوت مرتفع.",
              "يجب الاستفسار من النادل عن الزميل المسؤول عن هذه الطاولة.",
              "ينبغي إعطاء إشارة باليد للنادل."
            ],
            "fr": [
              "il faut appeler le serveur à haute voix.",
              "il faut se renseigner auprès du serveur sur le collègue qui dessert la table.",
              "on devrait faire un signe de la main au serveur."
            ]
          }
        },
        "29": {
          "ar": "بعد الانتهاء من تناول الطعام ...",
          "fr": "Après le repas ...",
          "text": {
            "ar": "بعد الانتهاء من تناول الطعام ...",
            "fr": "Après le repas ..."
          },
          "options": {
            "ar": [
              "ينبغي إعطاء إكرامية إذا كان النادل راضياً.",
              "من الأفضل الدفع باستخدام بطاقة الائتمان.",
              "يدفع كل ضيف إكرامية بشكل منفصل."
            ],
            "fr": [
              "il faudrait donner un pourboire si le serveur était satisfait.",
              "il est préférable de régler avec une carte de crédit.",
              "chaque invité paie un pourboire."
            ]
          }
        },
        "30": {
          "ar": "من غير اللائق ...",
          "fr": "Il est impoli ...",
          "text": {
            "ar": "من غير اللائق ...",
            "fr": "Il est impoli ..."
          },
          "options": {
            "ar": [
              "إحضار الهاتف المحمول إلى المطعم.",
              "التحدث بالهاتف في إحدى زوايا المطعم.",
              "التحدث طويلاً في الهاتف بينما ينتظر الضيوف الآخرون."
            ],
            "fr": [
              "d'emporter son téléphone portable au restaurant.",
              "de téléphoner dans un recoin du restaurant.",
              "de parler longuement au téléphone pendant que les invités attendent."
            ]
          }
        }
      }
    },
    "6": {
      "instructions": {
        "ar": "قسم الاستماع (Hören): يتكون من 4 أجزاء و30 مهمة. استمع إلى التسجيلات الصوتية وأجب عن الأسئلة المرفقة.",
        "fr": "Module Compréhension orale : 4 parties, 30 questions. Écoutez les enregistrements audio et répondez aux questions correspondantes."
      },
      "teile": {
        "1": {
          "title": {
            "ar": "الجزء 1: خمسة نصوص قصيرة",
            "fr": "Partie 1 : Cinq textes courts"
          },
          "desc": {
            "ar": "ستستمع الآن إلى خمسة نصوص قصيرة. ستستمع إلى كل نص مرتين. لكل نص مهمتان. اختر الحل الصحيح لكل مهمة.",
            "fr": "Vous allez entendre cinq textes courts. Vous écouterez chaque texte deux fois. Pour chaque texte, résolvez deux questions."
          },
          "context": {
            "ar": "نصوص قصيرة من الحياة اليومية وإعلانات المحطة والمكالمات الهاتفية ونشرات الأخبار.",
            "fr": "Annonces de gare, répondeurs téléphoniques, bulletins d'information et messages de la vie courante."
          }
        },
        "2": {
          "title": {
            "ar": "الجزء 2: جولة في متحف الدمى كيتي كروزه",
            "fr": "Partie 2 : Visite guidée au musée de la poupée Käthe Kruse"
          },
          "desc": {
            "ar": "ستستمع الآن إلى نص واحد مرة واحدة فقط. أجب عن المهام الخمس باختيار: أ، ب، أو ج.",
            "fr": "Vous allez entendre un exposé une seule fois. Résolvez les cinq questions en choisissant a, b ou c."
          },
          "context": {
            "ar": "أنت في زيارة لمتحف الدمى كيتي كروزه وتستمع لشرح المرشدة السياحية.",
            "fr": "Vous visitez le musée de la poupée Käthe Kruse et écoutez la présentation du guide."
          }
        },
        "3": {
          "title": {
            "ar": "الجزء 3: محادثة في غرفة انتظار طبيب الأسنان",
            "fr": "Partie 3 : Conversation dans la salle d'attente chez le dentiste"
          },
          "desc": {
            "ar": "ستستمع الآن إلى محادثة عفوية مرة واحدة فقط. أجب عن المهام السبع: هل العبارات صحيحة أم خاطئة؟",
            "fr": "Vous allez entendre une conversation une seule fois. Résolvez les sept questions : les affirmations sont-elles vraies ou fausses ?"
          },
          "context": {
            "ar": "أنت جالس في غرفة انتظار طبيب الأسنان وتسمع امرأة وفتاة تتحدثان عن شراء الملابس.",
            "fr": "Vous êtes assis dans la salle d'attente d'un cabinet dentaire et écoutez une mère et sa fille parler d'achats de vêtements."
          }
        },
        "4": {
          "title": {
            "ar": "الجزء 4: نقاش إذاعي حول معنى وإدارة الوقت",
            "fr": "Partie 4 : Débat radiophonique sur la signification et la gestion du temps"
          },
          "desc": {
            "ar": "ستستمع الآن إلى نقاش إذاعي مرتين. حدد المتحدث لكل عبارة: المذيعة، ليو هوفل، أم ماريو كولمر.",
            "fr": "Vous allez écouter une discussion radiophonique deux fois. Attribuez chaque affirmation à la bonne personne : l'animatrice, Leo Hofl ou Mario Kulmer."
          },
          "context": {
            "ar": "تتحدث مذيعة برنامج «الناس» الإذاعي مع الأخصائي ليو هوفل والمتقاعد ماريو كولمر حول مفهوم الوقت وتنظيمه.",
            "fr": "L'animatrice de l'émission « Menschen » débat avec le psychologue Leo Hofl et le retraité Mario Kulmer de la gestion du temps."
          }
        }
      },
      "questions": {
        "h1": {
          "ar": "قطار يغادر المحطة الآن.",
          "fr": "Un train est sur le départ.",
          "text": {
            "ar": "قطار يغادر المحطة الآن.",
            "fr": "Un train est sur le départ."
          }
        },
        "h2": {
          "ar": "القطار ...",
          "fr": "Le train ...",
          "text": {
            "ar": "القطار ...",
            "fr": "Le train ..."
          },
          "options": {
            "ar": [
              "قادم من فيينا.",
              "ينقل الركاب وكذلك السيارات.",
              "يحتوي على مقطورات نوم خفيفة ولكن دون مقطورات نوم كاملة."
            ],
            "fr": [
              "arrive de Vienne.",
              "transporte aussi bien des personnes que des voitures.",
              "dispose d'une voiture-couchettes, mais pas de wagon-lits."
            ]
          }
        },
        "h3": {
          "ar": "أنت تستمع إلى مواعيد عروض أحد المسارح.",
          "fr": "Vous entendez les horaires de représentations d'un théâtre.",
          "text": {
            "ar": "أنت تستمع إلى مواعيد عروض أحد المسارح.",
            "fr": "Vous entendez les horaires de représentations d'un théâtre."
          }
        },
        "h4": {
          "ar": "متى تقام فعالية قراءة قصة عيد الميلاد؟",
          "fr": "Quand a lieu la manifestation consacrée à Noël ?",
          "text": {
            "ar": "متى تقام فعالية قراءة قصة عيد الميلاد؟",
            "fr": "Quand a lieu la manifestation consacrée à Noël ?"
          },
          "options": {
            "ar": [
              "يومي السبت والأحد.",
              "يومي الخميس والجمعة.",
              "يوم الخميس فقط."
            ],
            "fr": [
              "Le samedi et le dimanche.",
              "Le jeudi et le vendredi.",
              "Seulement le jeudi."
            ]
          }
        },
        "h5": {
          "ar": "أنت تستمع إلى نشرة الأخبار المسائية في الراديو.",
          "fr": "Vous entendez le journal d'information du soir.",
          "text": {
            "ar": "أنت تستمع إلى نشرة الأخبار المسائية في الراديو.",
            "fr": "Vous entendez le journal d'information du soir."
          }
        },
        "h6": {
          "ar": "الفتى الصغير ...",
          "fr": "Le jeune garçon ...",
          "text": {
            "ar": "الفتى الصغير ...",
            "fr": "Le jeune garçon ..."
          },
          "options": {
            "ar": [
              "كان يستقل الترام.",
              "كان يسير على الأقدام.",
              "كان يقود دراجته الهوائية."
            ],
            "fr": [
              "prenait le tramway.",
              "se déplaçait à pied.",
              "circulait à bicyclette."
            ]
          }
        },
        "h7": {
          "ar": "ماري لويز لا تستطيع الحضور إلى المسرح إطلاقاً.",
          "fr": "Marie-Luise ne peut pas venir au théâtre.",
          "text": {
            "ar": "ماري لويز لا تستطيع الحضور إلى المسرح إطلاقاً.",
            "fr": "Marie-Luise ne peut pas venir au théâtre."
          }
        },
        "h8": {
          "ar": "ما الذي ينبغي على أديل فعله؟",
          "fr": "Que doit faire Adèle ?",
          "text": {
            "ar": "ما الذي ينبغي على أديل فعله؟",
            "fr": "Que doit faire Adèle ?"
          },
          "options": {
            "ar": [
              "استلام تذاكر المسرح من الشباك.",
              "الانتظار عند شباك التذاكر بالمسرح.",
              "الذهاب لاصطحاب صديقتها من المكتب."
            ],
            "fr": [
              "Retirer les billets de théâtre.",
              "Attendre à la caisse du théâtre.",
              "Aller chercher son amie au bureau."
            ]
          }
        },
        "h9": {
          "ar": "تتعرف من خلال الرسالة على موقع الفندق ومسافاته.",
          "fr": "Vous apprenez où se situe l'hôtel.",
          "text": {
            "ar": "تتعرف من خلال الرسالة على موقع الفندق ومسافاته.",
            "fr": "Vous apprenez où se situe l'hôtel."
          }
        },
        "h10": {
          "ar": "ما المعلم الأقرب إلى الفندق؟",
          "fr": "Quel lieu se trouve le plus proche de l'hôtel ?",
          "text": {
            "ar": "ما المعلم الأقرب إلى الفندق؟",
            "fr": "Quel lieu se trouve le plus proche de l'hôtel ?"
          },
          "options": {
            "ar": [
              "المطار.",
              "أرض المعارض.",
              "محطة القطار المركزية."
            ],
            "fr": [
              "L'aéroport.",
              "Le parc des expositions.",
              "La gare."
            ]
          }
        },
        "h11": {
          "ar": "متحف الدمى قائم منذ عام ...",
          "fr": "Le musée de la poupée existe depuis ...",
          "text": {
            "ar": "متحف الدمى قائم منذ عام ...",
            "fr": "Le musée de la poupée existe depuis ..."
          },
          "options": {
            "ar": [
              "1883.",
              "1968.",
              "1993."
            ],
            "fr": [
              "1883.",
              "1968.",
              "1993."
            ]
          }
        },
        "h12": {
          "ar": "أول دمية صنعتها كيتي كروزه كانت ...",
          "fr": "La première poupée créée par Käthe Kruse était ...",
          "text": {
            "ar": "أول دمية صنعتها كيتي كروزه كانت ...",
            "fr": "La première poupée créée par Käthe Kruse était ..."
          },
          "options": {
            "ar": [
              "ثقيلة جداً.",
              "باردة وجامدة بلا ملامح.",
              "دافئة ولينة."
            ],
            "fr": [
              "très lourde.",
              "impersonnelle et froide.",
              "chaude et moelleuse."
            ]
          }
        },
        "h13": {
          "ar": "لماذا أصبحت كيتي كروزه مشهورة عالمياً؟",
          "fr": "Pourquoi Käthe Kruse est-elle devenue célèbre ?",
          "text": {
            "ar": "لماذا أصبحت كيتي كروزه مشهورة عالمياً؟",
            "fr": "Pourquoi Käthe Kruse est-elle devenue célèbre ?"
          },
          "options": {
            "ar": [
              "لأنه لم تكن هناك دمى في ذلك الوقت.",
              "لأن دمىها كانت تشبه الأطفال الطبيعيين.",
              "لأن دمىها كانت تشبه البالغين."
            ],
            "fr": [
              "Parce qu'il n'existait pas de poupées à cette époque.",
              "Parce que ses poupées ressemblaient à de vrais enfants.",
              "Parce que ses poupées ressemblaient à des adultes."
            ]
          }
        },
        "h14": {
          "ar": "ما الذي يمكن للزائر فعله أيضاً في متحف الدمى؟",
          "fr": "Que peut-on également faire au musée de la poupée ?",
          "text": {
            "ar": "ما الذي يمكن للزائر فعله أيضاً في متحف الدمى؟",
            "fr": "Que peut-on également faire au musée de la poupée ?"
          },
          "options": {
            "ar": [
              "حضور والمشاركة في ورشة عمل تفاعلية.",
              "صنع دمية كيتي كروزه أصلية.",
              "إجراء مقابلة مع كيتي كروزه."
            ],
            "fr": [
              "Participer à un atelier pratique.",
              "Fabriquer une poupée.",
              "Interviewer Käthe Kruse."
            ]
          }
        },
        "h15": {
          "ar": "يمكن الاحتفال بعيد الميلاد في المتحف إذا ...",
          "fr": "On peut fêter son anniversaire au musée si ...",
          "text": {
            "ar": "يمكن الاحتفال بعيد الميلاد في المتحف إذا ...",
            "fr": "On peut fêter son anniversaire au musée si ..."
          },
          "options": {
            "ar": [
              "اصطحب الطفل والديه أو جده أو جدته معه.",
              "كان عمر الطفل أقل من ست سنوات.",
              "لم يزد عدد الأطفال المدعوين عن اثني عشر طفلاً."
            ],
            "fr": [
              "l'on vient avec ses parents ou ses grands-parents.",
              "l'on a moins de six ans.",
              "l'on n'invite pas plus de douze enfants."
            ]
          }
        },
        "h16": {
          "ar": "هناء تعاني من ألم في الأسنان.",
          "fr": "Hanna a mal aux dents.",
          "text": {
            "ar": "هناء تعاني من ألم في الأسنان.",
            "fr": "Hanna a mal aux dents."
          }
        },
        "h17": {
          "ar": "اشترت هناء لنفسها قميص تي شيرت وتنورة.",
          "fr": "Hanna s'est acheté un t-shirt et une jupe.",
          "text": {
            "ar": "اشترت هناء لنفسها قميص تي شيرت وتنورة.",
            "fr": "Hanna s'est acheté un t-shirt et une jupe."
          }
        },
        "h18": {
          "ar": "كان سعر قميص التي شيرت 13 يورو.",
          "fr": "Le t-shirt a coûté 13 euros.",
          "text": {
            "ar": "كان سعر قميص التي شيرت 13 يورو.",
            "fr": "Le t-shirt a coûté 13 euros."
          }
        },
        "h19": {
          "ar": "الطقس لا يزال بارداً بعض الشيء.",
          "fr": "La météo est encore un peu fraîche.",
          "text": {
            "ar": "الطقس لا يزال بارداً بعض الشيء.",
            "fr": "La météo est encore un peu fraîche."
          }
        },
        "h20": {
          "ar": "لون التي شيرت أسود.",
          "fr": "Le t-shirt est noir.",
          "text": {
            "ar": "لون التي شيرت أسود.",
            "fr": "Le t-shirt est noir."
          }
        },
        "h21": {
          "ar": "هناء لا ترغب في استبدال التي شيرت.",
          "fr": "Hanna ne veut pas échanger le t-shirt.",
          "text": {
            "ar": "هناء لا ترغب في استبدال التي شيرت.",
            "fr": "Hanna ne veut pas échanger le t-shirt."
          }
        },
        "h22": {
          "ar": "تهدي الأم هناء قميص تي شيرت جديداً.",
          "fr": "La mère offre un t-shirt à Hanna.",
          "text": {
            "ar": "تهدي الأم هناء قميص تي شيرت جديداً.",
            "fr": "La mère offre un t-shirt à Hanna."
          }
        },
        "h23": {
          "ar": "يشعر الأطفال بالملل بسرعة أكبر مقارنة بالبالغين.",
          "fr": "Les enfants s'ennuient plus facilement que les adultes.",
          "text": {
            "ar": "يشعر الأطفال بالملل بسرعة أكبر مقارنة بالبالغين.",
            "fr": "Les enfants s'ennuient plus facilement que les adultes."
          },
          "options": {
            "ar": [
              "المذيعة",
              "ليو هوفل",
              "ماريو كولمر"
            ],
            "fr": [
              "L'animatrice",
              "Leo Hofl",
              "Mario Kulmer"
            ]
          }
        },
        "h24": {
          "ar": "يمتلك الأشخاص النشطون الكثير من الذكريات عندما يكبرون في السن.",
          "fr": "Les personnes actives ont beaucoup de souvenirs en vieillissant.",
          "text": {
            "ar": "يمتلك الأشخاص النشطون الكثير من الذكريات عندما يكبرون في السن.",
            "fr": "Les personnes actives ont beaucoup de souvenirs en vieillissant."
          },
          "options": {
            "ar": [
              "المذيعة",
              "ليو هوفل",
              "ماريو كولمر"
            ],
            "fr": [
              "L'animatrice",
              "Leo Hofl",
              "Mario Kulmer"
            ]
          }
        },
        "h25": {
          "ar": "تعتبر إدارة وتنظيم الوقت موضوعاً حديثاً وشائعاً في عصرنا.",
          "fr": "La gestion du temps est un sujet très actuel à notre époque.",
          "text": {
            "ar": "تعتبر إدارة وتنظيم الوقت موضوعاً حديثاً وشائعاً في عصرنا.",
            "fr": "La gestion du temps est un sujet très actuel à notre époque."
          },
          "options": {
            "ar": [
              "المذيعة",
              "ليو هوفل",
              "ماريو كولمر"
            ],
            "fr": [
              "L'animatrice",
              "Leo Hofl",
              "Mario Kulmer"
            ]
          }
        },
        "h26": {
          "ar": "تساعد إدارة الوقت وتنظيمه في التخلص من التوتر والإجهاد.",
          "fr": "La gestion du temps aide à lutter contre le stress.",
          "text": {
            "ar": "تساعد إدارة الوقت وتنظيمه في التخلص من التوتر والإجهاد.",
            "fr": "La gestion du temps aide à lutter contre le stress."
          },
          "options": {
            "ar": [
              "المذيعة",
              "ليو هوفل",
              "ماريو كولمر"
            ],
            "fr": [
              "L'animatrice",
              "Leo Hofl",
              "Mario Kulmer"
            ]
          }
        },
        "h27": {
          "ar": "ينبغي للمرء في جدول مواعيده التفكير في وقت العمل وأوقات الفراغ معاً.",
          "fr": "On devrait penser aussi bien au temps de travail qu'aux loisirs dans son planning.",
          "text": {
            "ar": "ينبغي للمرء في جدول مواعيده التفكير في وقت العمل وأوقات الفراغ معاً.",
            "fr": "On devrait penser aussi bien au temps de travail qu'aux loisirs dans son planning."
          },
          "options": {
            "ar": [
              "المذيعة",
              "ليو هوفل",
              "ماريو كولمر"
            ],
            "fr": [
              "L'animatrice",
              "Leo Hofl",
              "Mario Kulmer"
            ]
          }
        },
        "h28": {
          "ar": "يمتلك المتقاعدون متسعاً كافياً من الوقت لكونهم متفرغين عن العمل.",
          "fr": "Les retraités ont suffisamment de temps puisqu'ils ne travaillent plus.",
          "text": {
            "ar": "يمتلك المتقاعدون متسعاً كافياً من الوقت لكونهم متفرغين عن العمل.",
            "fr": "Les retraités ont suffisamment de temps puisqu'ils ne travaillent plus."
          },
          "options": {
            "ar": [
              "المذيعة",
              "ليو هوفل",
              "ماريو كولمر"
            ],
            "fr": [
              "L'animatrice",
              "Leo Hofl",
              "Mario Kulmer"
            ]
          }
        },
        "h29": {
          "ar": "ينبغي ألا يقضي المرء وقتاً أطول من اللازم في الانشغال بالتخطيط لمواعيده.",
          "fr": "On ne devrait pas passer trop de temps à se préoccuper de son emploi du temps.",
          "text": {
            "ar": "ينبغي ألا يقضي المرء وقتاً أطول من اللازم في الانشغال بالتخطيط لمواعيده.",
            "fr": "On ne devrait pas passer trop de temps à se préoccuper de son emploi du temps."
          },
          "options": {
            "ar": [
              "المذيعة",
              "ليو هوفل",
              "ماريو كولمر"
            ],
            "fr": [
              "L'animatrice",
              "Leo Hofl",
              "Mario Kulmer"
            ]
          }
        },
        "h30": {
          "ar": "يمتلك جميع البشر نفس المقدار من الوقت يومياً بالضبط.",
          "fr": "Tous les êtres humains disposent chaque jour exactement de la même quantité de temps.",
          "text": {
            "ar": "يمتلك جميع البشر نفس المقدار من الوقت يومياً بالضبط.",
            "fr": "Tous les êtres humains disposent chaque jour exactement de la même quantité de temps."
          },
          "options": {
            "ar": [
              "المذيعة",
              "ليو هوفل",
              "ماريو كولمر"
            ],
            "fr": [
              "L'animatrice",
              "Leo Hofl",
              "Mario Kulmer"
            ]
          }
        }
      }
    }
  }
}

test_data["explanations"] = explanations
test_data["translations"] = translations

output_path = os.path.join(os.path.dirname(__file__), "..", "data", "tests", "modellsatz-21.json")
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(test_data, f, ensure_ascii=False, indent=2)

print(f"✅ Generated {output_path} successfully.")

# Now update data/tests-manifest.json
manifest_path = os.path.join(os.path.dirname(__file__), "..", "data", "tests-manifest.json")
with open(manifest_path, "r", encoding="utf-8") as f:
    manifest = json.load(f)

# Check if modellsatz-21 is already in manifest
exists = any(m["id"] == "modellsatz-21" for m in manifest)
if not exists:
    manifest.append({
        "id": "modellsatz-21",
        "title": "Modelltest 15 — Hueber Zertifikat B1",
        "badge": "Modelltest 15",
        "examTitle": "Goethe / ÖSD B1 Prüfungssimulation — Modelltest 15",
        "examSub": "Lesen (5 Teile) & Hören (4 Teile) · Modelltest 15 (Hueber)",
        "timeTotal": 65,
        "partsCount": 6,
        "questionsCount": 50,
        "fileName": "data/tests/modellsatz-21.json"
    })
    with open(manifest_path, "w", encoding="utf-8") as f:
        json.dump(manifest, f, ensure_ascii=False, indent=2)
    print("✅ Appended modellsatz-21 to data/tests-manifest.json")
else:
    print("ℹ️ modellsatz-21 already exists in manifest.")
